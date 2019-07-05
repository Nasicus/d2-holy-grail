import { Request, Response } from "express";
import { Db, Collection, MongoError } from "mongodb";
import { ConfigManager } from "../ConfigManager";
import { MongoErrorCodes } from "../models/MongoErrorCodes";
import { IParty } from "../models/IParty";
import { IPartyData } from "../models/IPartyData";
import { IGrailCollection } from "../models/IGrailCollection";
import { GrailController } from "./GrailController";

export class PartyController {
  private get partyCollection(): Collection<IParty> {
    return this.db.collection<IParty>(ConfigManager.db.partyCollection);
  }

  private get grailCollection(): Collection<IGrailCollection> {
    return this.db.collection<IGrailCollection>(
      ConfigManager.db.holyGrailCollection
    );
  }

  public constructor(private db: Db) {}

  public add = async (req: Request, res: Response) => {
    let newParty: IParty = req.body;
    const originalAddress = newParty.address;
    newParty.address = PartyController.trimAndToLower(newParty.address);
    newParty.token = PartyController.getToken();
    newParty.created = newParty.modified = new Date();
    newParty.userlist = [];
    newParty.pendingUserlist = [];
    newParty.data = { users: [] };
    try {
      const result = await this.partyCollection.insertOne(newParty);
      PartyController.mapAndReturnPartyData(
        originalAddress,
        res,
        await this.partyCollection.findOne({ _id: result.insertedId })
      );
    } catch (err) {
      const mongoError = err as MongoError;
      if (mongoError.code === MongoErrorCodes.DuplicateKey) {
        res
          .status(400)
          .send({ type: "duplicateKey", address: originalAddress });
        return;
      }
      PartyController.sendUnknownError(res, err);
    }
  };

  public get = async (req: Request, res: Response) => {
    const address = req.params.address;
    await this.getByAddress(address, res, party =>
      PartyController.mapAndReturnPartyData(address, res, party)
    );
  };

  public updateSettings = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const settings = req.body.settings;
    const token = req.body.token;
    if (!settings) {
      res.status(500).send({ type: "argument", argumentName: "settings" });
      return;
    }
    await this.update(req, res, address, password, token, dataToSet => {
      dataToSet.settings = settings;
      return dataToSet;
    });
  };

  public updateParty = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const partyData = req.body.party;
    const token = req.body.token;

    if (!partyData) {
      res.status(500).send({ type: "argument", argumentName: "party" });
      return;
    }

    await this.update(req, res, address, password, token, dataToSet => {
      dataToSet.data = partyData;
      return dataToSet;
    });
  };

  public validatePassword = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;

    if (!password && address) {
      res.json(false);
      return;
    }

    const party = await this.partyCollection.findOne({
      address: PartyController.trimAndToLower(address)
    });
    if (!party) {
      res.status(404).send({ type: "notFound", address });
    } else {
      res.json(party.password === password);
    }
  };

  public signupToParty = async (req: Request, res: Response) => {
    const userAddress = PartyController.trimAndToLower(req.body.userAddress);
    const password = req.body.userPassword;
    const grail = await this.grailCollection.findOne({
      address: userAddress
    });
    if (!grail) {
      res.status(404).send({ type: "notFound", userAddress });
      return;
    } else if (grail.password !== password) {
      res.status(401).send({ type: "unauthorized", userAddress });
      return;
    }
    const partyAddress = PartyController.trimAndToLower(req.params.address);
    const result = await this.partyCollection.findOneAndUpdate(
      {
        address: partyAddress,
        userlist: { $nin: [userAddress] },
        pendingUserlist: { $nin: [userAddress] }
      },
      {
        $addToSet: {
          pendingUserlist: userAddress
        }
      },
      { returnOriginal: false }
    );
    if (result && result.ok && result.value) {
      res.json({ success: true });
      return;
    }
    // We didnt get a result, so there must already be a user with this address in the specified party
    res.status(409).send({ type: "conflict", userAddress });
  };

  public updatePartyUsers = async (req: Request, res: Response) => {
    try {
      const newUserlist = req.body.userlist;
      const password = req.body.password;
      const address = PartyController.trimAndToLower(req.body.address);
      const token = req.body.token;
      const acceptedUsers = req.body.acceptedUserlist;
      const deniedUsers = req.body.deniedUserlist;
      const removedUsers = req.body.removedUserlist;
      const resolvedUsers = acceptedUsers.concat(deniedUsers);
      const party = await this.partyCollection.findOne({
        address: address,
        password: password,
        token: token
      });
      if (party) {
        // Got the party. Lets update the user lists
        // TODO: Possible this might override saved updates that happen at the same time?
        let newUsers = [];
        // Keep all current users who have not been removed
        party.data.users.forEach(user => {
          if (removedUsers.indexOf(user.username) == -1) {
            newUsers.push(user);
          }
        });
        // Add new users who have been accepted
        const newUserGrailData = await this.pullUserGrailData(acceptedUsers);
        newUsers = newUsers.concat(newUserGrailData);
        // Save the document back in the db
        const result = await this.partyCollection.findOneAndUpdate(
          {
            address: address,
            password: password,
            token: token
          },
          {
            $set: {
              userlist: newUserlist,
              "data.users": newUsers,
              token: PartyController.getToken(),
              modified: new Date()
            },
            $pull: {
              pendingUserlist: {
                $in: resolvedUsers
              }
            }
          },
          { returnOriginal: false }
        );
        if (result && result.ok && result.value) {
          res.json({
            address: address,
            data: result.value.data,
            userlist: result.value.userlist,
            pendingUserlist: result.value.pendingUserlist,
            settings: result.value.settings,
            token: result.value.token
          } as IParty);
          return;
        }
        // Didnt save. Handle the error
        this.handleDbError(address, password, token, res);
      } else {
        // Couldnt find party. Lets see the error
        this.handleDbError(address, password, token, res);
        return;
      }
    } catch (err) {
      PartyController.sendUnknownError(res, err);
    }
  };

  private handleDbError = async (
    address: string,
    password: string,
    token: string,
    res: Response
  ) => {
    await this.getByAddress(address, res, existingParty => {
      if (existingParty.password !== password) {
        res.status(401).send({ type: "password", address });
      } else if (existingParty.token !== token) {
        res.status(403).send({
          type: "token",
          correctToken: existingParty.token,
          specifiedToken: token,
          address
        });
      } else {
        PartyController.sendUnknownError(res, "Database error");
      }
    });
  };

  private pullUserGrailData = async (userlist: string[]) => {
    if (userlist.length === 0) return [];
    const result = await this.grailCollection.find({
      address: {
        $in: userlist
      }
    });
    let newUserData = [];
    await result.forEach(user => {
      newUserData.push({
        username: user.address,
        data: GrailController.formatGrailForParty(user.data)
      });
    });
    return newUserData;
  };

  private update = async (
    req: Request,
    res: Response,
    address: string,
    password: string,
    token: string,
    modifyDataToSaveFunc: (data: Partial<IParty>) => Partial<IParty>
  ) => {
    try {
      const result = await this.partyCollection.findOneAndUpdate(
        {
          address: PartyController.trimAndToLower(address),
          password: password,
          token: token
        },
        {
          $set: modifyDataToSaveFunc({
            token: PartyController.getToken(),
            modified: new Date()
          }),
          $inc: { updateCount: 1 }
        },
        { returnOriginal: false }
      );

      if (result && result.ok && result.value) {
        PartyController.mapAndReturnPartyData(address, res, result.value);
        return;
      }

      // we didn't receive a party, so either the address, password or token is wrong
      this.handleDbError(address, password, token, res);
    } catch (err) {
      PartyController.sendUnknownError(res, err);
    }
  };

  private async getByAddress(
    address: string,
    res: Response,
    onSuccess: (party) => any
  ) {
    try {
      const party = await this.partyCollection.findOne({
        address: PartyController.trimAndToLower(address)
      });

      if (!party) {
        res.status(404).send({ type: "notFound", address });
        return;
      }
      onSuccess(party);
    } catch (err) {
      PartyController.sendUnknownError(res, err);
    }
  }

  private static mapAndReturnPartyData(
    originalAddress: string,
    res: Response,
    party: IParty
  ) {
    // important: never send the full data back directly, because the password is saved in there!
    res.json({
      address: originalAddress,
      data: party.data,
      userlist: party.userlist,
      pendingUserlist: party.pendingUserlist,
      settings: party.settings,
      token: party.token
    } as IPartyData);
  }

  private static sendUnknownError(res: Response, error?: any) {
    res.status(500).send({ type: "unknown", error });
  }

  private static getToken(): string {
    return new Date().toISOString();
  }

  private static trimAndToLower(value: string): string {
    return value ? value.toLowerCase().trim() : null;
  }
}
