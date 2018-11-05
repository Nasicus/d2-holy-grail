import { Request, Response } from "express";
import { Db, Collection, MongoError } from "mongodb";
import { ConfigManager } from "../ConfigManager";
import { IHolyGrailDb } from "../models/IHolyGrailDb";
import { IHolyGrail } from "../models/IHolyGrail";
import { MongoErrorCodes } from "../models/MongoErrorCodes";

export class HolyGrailController {
  private get grailCollection(): Collection<IHolyGrailDb> {
    return this.db.collection<IHolyGrailDb>(ConfigManager.db.holyGrailCollection);
  }

  public constructor(private db: Db) {}

  public add = async (req: Request, res: Response) => {
    let newGrail: IHolyGrailDb = req.body;
    newGrail.token = HolyGrailController.getToken();
    newGrail.created = newGrail.modified = new Date();

    try {
      const result = await this.grailCollection.insertOne(newGrail);
      HolyGrailController.mapAndReturnGrailData(res, await this.grailCollection.findOne({ _id: result.insertedId }));
    } catch (err) {
      const mongoError = err as MongoError;
      if (mongoError.code === MongoErrorCodes.DuplicateKey) {
        res.status(400).send({ type: "duplicateKey", address: newGrail.address });
        return;
      }

      HolyGrailController.sendUnknownError(res, err);
    }
  };

  public get = async (req: Request, res: Response) => {
    await this.getByAddress(req.params.address, res, grail => HolyGrailController.mapAndReturnGrailData(res, grail));
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

  public updateGrail = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const grailData = req.body.grail;
    const ethGrailData = req.body.ethGrail;
    const token = req.body.token;

    if (!grailData) {
      res.status(500).send({ type: "argument", argumentName: "grail" });
      return;
    }

    await this.update(req, res, address, password, token, dataToSet => {
      dataToSet.data = grailData;
      dataToSet.ethData = ethGrailData;
      return dataToSet;
    });
  };

  private update = async (
    req: Request,
    res: Response,
    address: string,
    password: string,
    token: string,
    modifyDataToSaveFunc: (data: Partial<IHolyGrailDb>) => Partial<IHolyGrailDb>
  ) => {
    try {
      const result = await this.grailCollection.findOneAndUpdate(
        { address: address, password: password, token: token },
        {
          $set: modifyDataToSaveFunc({ token: HolyGrailController.getToken(), modified: new Date() }),
          $inc: { updateCount: 1 }
        },
        { returnOriginal: false }
      );

      if (result && result.ok && result.value) {
        HolyGrailController.mapAndReturnGrailData(res, result.value);
        return;
      }

      // we didn't receive a grail, so either the address, password or token is wrong
      await this.getByAddress(address, res, existingGrail => {
        if (existingGrail.password !== password) {
          res.status(401).send({ type: "password", address });
        } else {
          res.status(403).send({ type: "token", correctToken: existingGrail.token, specifiedToken: token, address });
        }
      });
    } catch (err) {
      HolyGrailController.sendUnknownError(res, err);
    }
  };

  private async getByAddress(address: string, res: Response, onSuccess: (grail) => any) {
    try {
      const grail = await this.grailCollection.findOne({ address: address });
      if (!grail) {
        res.status(404).send({ type: "notFound", address });
        return;
      }

      onSuccess(grail);
    } catch (err) {
      HolyGrailController.sendUnknownError(res, err);
    }
  }

  private static mapAndReturnGrailData(res: Response, grail: IHolyGrailDb) {
    // important: never send the grail grailData back directly, because the password is saved in there!
    res.json({
      address: grail.address,
      data: grail.data,
      ethData: grail.ethData,
      settings: grail.settings,
      token: grail.token
    } as IHolyGrail);
  }

  private static sendUnknownError(res: Response, error?: any) {
    res.status(500).send({ type: "unknown", error });
  }

  private static getToken(): string {
    return new Date().toISOString();
  }
}
