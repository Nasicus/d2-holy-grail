import { Request, Response } from "express";
import { Db, Collection, MongoError, Cursor, UpdateQuery } from "mongodb";
import { ConfigManager } from "../ConfigManager";
import { MongoErrorCodes } from "../models/MongoErrorCodes";
import { IParty } from "../models/IParty";
import { IPartyData } from "../models/IPartyData";
import { IGrailCollection } from "../models/IGrailCollection";

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
    try {
      const result = await this.partyCollection.insertOne(newParty);
      const party = await this.partyCollection.findOne({
        _id: result.insertedId
      });
      const partyData = await this.getPartyData(party);
      PartyController.mapAndReturnPartyData(
        originalAddress,
        res,
        party,
        partyData
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
    await this.getByAddress(address, res, async party =>
      PartyController.mapAndReturnPartyData(
        address,
        res,
        party,
        await this.getPartyData(party)
      )
    );
  };

  private getPartyData = async (party: IParty): Promise<any> => {
    const grails = await this.grailCollection.find(
      {
        address: {
          $in: party.userlist
        }
      },
      {
        projection: {
          address: true,
          partyData: true
        }
      }
    );
    return await this.mapGrailsToPartyData(grails);
  };

  private mapGrailsToPartyData = async (grails: Cursor) => {
    let partyData = {
      users: []
    };
    await grails.forEach(grail => {
      partyData.users.push({
        username: grail.address,
        data: grail.partyData
      });
    });
    return partyData;
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

  public updatePartyUser = async (req: Request, res: Response) => {
    try {
      const method = req.body.method;
      const address = req.body.address;
      const password = req.body.password;
      const token = req.body.token;
      const user = req.body.user;
      switch (method) {
        case "accept":
          this.update(res, address, password, token, dataToSet => dataToSet, {
            $pull: { pendingUserlist: user },
            $addToSet: { userlist: user }
          });
          break;
        case "deny":
          await this.update(
            res,
            address,
            password,
            token,
            dataToSet => dataToSet,
            {
              $pull: { pendingUserlist: user }
            }
          );
          break;
        case "remove":
          await this.update(
            res,
            address,
            password,
            token,
            dataToSet => dataToSet,
            {
              $pull: { userlist: user }
            }
          );
          break;
        case "join":
          await this.addUserToParty(req, res);
          break;
        default:
          res.status(404).send({ type: "methodUnknown", method });
      }
    } catch (err) {
      PartyController.sendUnknownError(res, err);
    }
  };

  private addUserToParty = async (req: Request, res: Response) => {
    const grailAddress = req.body.user;
    const partyAddress = req.body.address;
    const result = await this.grailCollection.findOne({
      address: grailAddress
    });

    if (!result) {
      res.status(404).send({ type: "userNotFound", grailAddress });
      return;
    }
    const party = await this.partyCollection.findOne({
      address: partyAddress
    });
    if (!party) {
      res.status(404).send({ type: "partyNotFound", partyAddress });
      return;
    }
    if (
      party.userlist.indexOf(grailAddress) !== -1 ||
      party.pendingUserlist.indexOf(grailAddress) !== -1
    ) {
      res.status(409).send({ type: "conflict", grailAddress });
      return;
    }
    await this.update(
      res,
      party.address,
      party.password,
      party.token,
      dataToSet => dataToSet,
      {
        $addToSet: { pendingUserlist: grailAddress }
      }
    );
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

  private update = async (
    res: Response,
    address: string,
    password: string,
    token: string,
    modifyDataToSaveFunc: (data: Partial<IParty>) => Partial<IParty>,
    optionalUpdates?: UpdateQuery<IParty>
  ) => {
    try {
      const updateQuery: UpdateQuery<IParty> = optionalUpdates
        ? optionalUpdates
        : {};
      updateQuery.$set = modifyDataToSaveFunc({
        token: PartyController.getToken(),
        modified: new Date()
      });
      const result = await this.partyCollection.findOneAndUpdate(
        {
          address: PartyController.trimAndToLower(address),
          password: password,
          token: token
        },
        updateQuery,
        { returnOriginal: false }
      );

      if (result && result.ok && result.value) {
        PartyController.mapAndReturnPartyData(
          address,
          res,
          result.value,
          await this.getPartyData(result.value)
        );
        return;
      }

      // we didn't receive a party, so either the address, password or token is wrong
      await this.handleDbError(address, password, token, res);
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
    party: IParty,
    data?: any
  ) {
    // important: never send the full data back directly, because the password is saved in there!
    res.json({
      address: originalAddress,
      userlist: party.userlist,
      pendingUserlist: party.pendingUserlist,
      token: party.token,
      data: data
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
