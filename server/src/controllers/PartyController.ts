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
    const grail = await this.grailCollection.findOne({
      address: userAddress
    });
    if (!grail) {
      res.status(404).send({ type: "notFound", userAddress });
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

  public updatePartyUser = async (req: Request, res: Response) => {
    try {
      const method = req.body.method;
      switch (method) {
        case "accept":
          this.acceptPartyUser(req, res);
          break;
        case "deny":
          this.denyPartyUser(req, res);
          break;
        case "remove":
          this.removePartyUser(req, res);
          break;
        default:
          res.status(404).send({ type: "methodUnknown", method });
      }
    } catch (err) {
      PartyController.sendUnknownError(res, err);
    }
  };

  private acceptPartyUser = async (req: Request, res: Response) => {
    const password = req.body.password;
    const address = PartyController.trimAndToLower(req.body.address);
    const token = req.body.token;
    const acceptedUser = req.body.user;
    const result = await this.partyCollection.findOne({
      address: address,
      password: password,
      token: token
    });
    if (result) {
      const newUserGrailData = await this.pullUserGrailData(acceptedUser);
      var newUsers = [];
      var newUserlist = [];
      var foundCurrentEntry = false;
      result.data.users.forEach(user => {
        if (user.username === acceptedUser) {
          newUsers.push(newUserGrailData);
          foundCurrentEntry = true;
        } else {
          newUsers.push(user);
        }
        newUserlist.push(user.username);
      });
      if (!foundCurrentEntry) {
        newUsers.push(newUserGrailData);
        newUserlist.push(acceptedUser);
      }
      result.data.users = newUsers;
      const userPendingIndex = result.pendingUserlist.indexOf(acceptedUser);
      if (userPendingIndex !== -1) {
        result.pendingUserlist.splice(userPendingIndex, 1);
      }
      this.update(res, address, password, token, dataToSet => {
        dataToSet.data = result.data;
        dataToSet.userlist = newUserlist;
        dataToSet.pendingUserlist = result.pendingUserlist;
        return dataToSet;
      });
      return;
    }
    // Didnt get the party document. Handle the error
    this.handleDbError(address, password, token, res);
  };

  private denyPartyUser = async (req: Request, res: Response) => {
    const password = req.body.password;
    const address = PartyController.trimAndToLower(req.body.address);
    const token = req.body.token;
    const deniedUser = req.body.user;
    const result = await this.partyCollection.findOne({
      address: address,
      password: password,
      token: token
    });
    if (result) {
      const userIndex = result.pendingUserlist.indexOf(deniedUser);
      if (userIndex !== -1) {
        result.pendingUserlist.splice(userIndex, 1);
      }
      this.update(res, address, password, token, dataToSet => {
        dataToSet.pendingUserlist = result.pendingUserlist;
        return dataToSet;
      });
      return;
    }
    // Didnt get the party document. Handle the error
    this.handleDbError(address, password, token, res);
  };

  private removePartyUser = async (req: Request, res: Response) => {
    const password = req.body.password;
    const address = PartyController.trimAndToLower(req.body.address);
    const token = req.body.token;
    const removedUser = req.body.user;
    const result = await this.partyCollection.findOne({
      address: address,
      password: password,
      token: token
    });
    if (result) {
      var newUsers = [];
      var newUserlist = [];
      result.data.users.forEach(user => {
        if (user.username !== removedUser) {
          newUsers.push(user);
          newUserlist.push(user.username);
        }
      });
      result.data.users = newUsers;
      this.update(res, address, password, token, dataToSet => {
        dataToSet.data = result.data;
        dataToSet.userlist = newUserlist;
        return dataToSet;
      });
      return;
    }
    // Didnt get the party document. Handle the error
    this.handleDbError(address, password, token, res);
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

  private pullUserGrailData = async (user: string) => {
    const result = await this.grailCollection.findOne({
      address: user
    });
    return {
      username: user,
      data: GrailController.formatGrailForParty(result.data)
    };
  };

  private update = async (
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
