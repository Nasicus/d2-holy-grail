import { Request, Response } from "express";
import { Db, Collection, MongoError } from "mongodb";
import { ConfigManager } from "../ConfigManager";
import { IGrailCollection } from "../models/IGrailCollection";
import { IHolyGrail } from "../models/IHolyGrail";
import { MongoErrorCodes } from "../models/MongoErrorCodes";
import { ItemScoreCalculator } from "../utils/ItemScoreCalculator";

export class GrailController {
  private get grailCollection(): Collection<IGrailCollection> {
    return this.db.collection<IGrailCollection>(
      ConfigManager.db.holyGrailCollection
    );
  }

  public constructor(private db: Db) {}

  public add = async (req: Request, res: Response) => {
    let newGrail: IGrailCollection = req.body;
    const originalAddress = newGrail.address;
    newGrail.address = GrailController.trimAndToLower(newGrail.address);
    newGrail.token = GrailController.getToken();
    newGrail.created = newGrail.modified = new Date();

    const template = req.body.template as IGrailCollection;
    if (template) {
      newGrail.version = template.version;
      newGrail.data = template.data;
      newGrail.ethData = template.ethData;
      newGrail.runewordData = template.runewordData;
      newGrail.settings = template.settings;
      delete newGrail["template"];
    }

    try {
      const result = await this.grailCollection.insertOne(newGrail);
      GrailController.mapAndReturnGrailData(
        originalAddress,
        res,
        await this.grailCollection.findOne({ _id: result.insertedId })
      );
    } catch (err) {
      const mongoError = err as MongoError;
      if (mongoError.code === MongoErrorCodes.DuplicateKey) {
        res
          .status(400)
          .send({ type: "duplicateKey", address: originalAddress });
        return;
      }

      GrailController.sendUnknownError(res, err);
    }
  };

  public get = async (req: Request, res: Response) => {
    const address = req.params.address;
    await this.getByAddress(address, res, (grail) =>
      GrailController.mapAndReturnGrailData(address, res, grail)
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

    await this.update(req, res, address, password, token, (dataToSet) => {
      dataToSet.settings = settings;
      return dataToSet;
    });
  };

  public updateGrail = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const version = req.body.version;
    const grailData = req.body.grail;
    const ethGrailData = req.body.ethGrail;
    const runewordGrailData = req.body.runewordGrail;
    const partyData = ItemScoreCalculator.formatGrailForParty(grailData);
    const token = req.body.token;

    if (!grailData) {
      res.status(500).send({ type: "argument", argumentName: "grail" });
      return;
    }

    await this.update(req, res, address, password, token, (dataToSet) => {
      dataToSet.version = version;
      dataToSet.data = grailData;
      dataToSet.ethData = ethGrailData;
      dataToSet.runewordData = runewordGrailData;
      dataToSet.partyData = partyData;
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

    const grail = await this.grailCollection.findOne({
      address: GrailController.trimAndToLower(address),
    });
    if (!grail) {
      res.status(404).send({ type: "notFound", address });
    } else {
      res.json(grail.password === password);
    }
  };

  public getStatistics = async (req: Request, res: Response) => {
    const totalGrails = await this.grailCollection.estimatedDocumentCount();

    const aWeekAgo = new Date();
    aWeekAgo.setDate(aWeekAgo.getDate() - 7);

    const modifiedStats = await this.grailCollection
      .aggregate([
        { $match: { modified: { $gt: aWeekAgo } } },
        { $project: { updateCount: 1, modified: 1 } },
        { $sort: { modified: -1 } },
      ])
      .toArray();

    res.json({
      totalGrails,
      modifiedStats,
    });
  };

  private update = async (
    req: Request,
    res: Response,
    address: string,
    password: string,
    token: string,
    modifyDataToSaveFunc: (
      data: Partial<IGrailCollection>
    ) => Partial<IGrailCollection>
  ) => {
    try {
      const result = await this.grailCollection.findOneAndUpdate(
        {
          address: GrailController.trimAndToLower(address),
          password: password,
          token: token,
        },
        {
          $set: modifyDataToSaveFunc({
            token: GrailController.getToken(),
            modified: new Date(),
          }),
          $inc: { updateCount: 1 },
        },
        { returnDocument: "after" }
      );

      if (result && result.ok && result.value) {
        GrailController.mapAndReturnGrailData(address, res, result.value);
        return;
      }

      // we didn't receive a grail, so either the address, password or token is wrong
      await this.getByAddress(address, res, (existingGrail) => {
        if (existingGrail.password !== password) {
          res.status(401).send({ type: "password", address });
        } else {
          res.status(403).send({
            type: "token",
            correctToken: existingGrail.token,
            specifiedToken: token,
            address,
          });
        }
      });
    } catch (err) {
      GrailController.sendUnknownError(res, err);
    }
  };

  private async getByAddress(
    address: string,
    res: Response,
    onSuccess: (grail) => any
  ) {
    try {
      const grail = await this.grailCollection.findOne({
        address: GrailController.trimAndToLower(address),
      });
      if (!grail) {
        res.status(404).send({ type: "notFound", address });
        return;
      }

      onSuccess(grail);
    } catch (err) {
      GrailController.sendUnknownError(res, err);
    }
  }

  private static mapAndReturnGrailData(
    originalAddress: string,
    res: Response,
    grail: IGrailCollection
  ) {
    // important: never send the grail grailData back directly, because the password is saved in there!
    res.json({
      address: originalAddress,
      data: grail.data,
      ethData: grail.ethData,
      runewordData: grail.runewordData,
      settings: grail.settings,
      token: grail.token,
      version: grail.version,
    } as IHolyGrail);
  }

  private static sendUnknownError(res: Response, error?: any) {
    res.status(500).send({ type: "unknown", error });
  }

  private static getToken(): string {
    return new Date().toISOString();
  }

  public static trimAndToLower(value: string): string {
    return value ? value.toLowerCase().trim() : null;
  }
}
