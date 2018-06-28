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

  public update = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const grailData = req.body.data;
    const token = req.body.token;

    if (!grailData) {
      res.status(500).send({ type: "argument", argumentName: "grailData" });
      return;
    }

    try {
      const result = await this.grailCollection.findOneAndUpdate(
        { address: address, password: password, token: token },
        { $set: { data: grailData, token: HolyGrailController.getToken() } },
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
    res.json({ address: grail.address, data: grail.data, token: grail.token } as IHolyGrail);
  }

  private static sendUnknownError(res: Response, error?: any) {
    res.status(500).send({ type: "unknown", error });
  }

  private static getToken(): string {
    return new Date().toISOString();
  }
}
