import { Request, Response } from "express";
import { Db, Collection, MongoError } from "mongodb";
import { ConfigManager } from "../ConfigManager";
import { IGrailCollection } from "../models/IGrailCollection";
import { IHolyGrail } from "../models/IHolyGrail";
import { MongoErrorCodes } from "../models/MongoErrorCodes";
import { IItem } from "../definitions/IItem";
import { Item } from "../definitions/Item";
import { ILeaderboard } from "../models/ILeaderboard";
import { ItemScores } from "../ItemScores";

class MissingItems {
  public missing: number = 0;
  public score: number = 0;
  public found: number = 0;

  public constructor() {}
}

export class GrailController {
  private get grailCollection(): Collection<IGrailCollection> {
    return this.db.collection<IGrailCollection>(
      ConfigManager.db.holyGrailCollection
    );
  }

  private get leaderboardCollection(): Collection<ILeaderboard> {
    return this.db.collection<ILeaderboard>(
      ConfigManager.db.leaderboardCollection
    );
  }

  public constructor(private db: Db) {}

  public add = async (req: Request, res: Response) => {
    let newGrail: IGrailCollection = req.body;
    const originalAddress = newGrail.address;
    newGrail.address = GrailController.trimAndToLower(newGrail.address);
    newGrail.token = GrailController.getToken();
    newGrail.created = newGrail.modified = new Date();

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
    await this.getByAddress(address, res, grail =>
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

    await this.update(req, res, address, password, token, dataToSet => {
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
    const token = req.body.token;

    if (!grailData) {
      res.status(500).send({ type: "argument", argumentName: "grail" });
      return;
    }

    await this.update(req, res, address, password, token, dataToSet => {
      dataToSet.version = version;
      dataToSet.data = grailData;
      dataToSet.ethData = ethGrailData;
      dataToSet.runewordData = runewordGrailData;
      return dataToSet;
    });

    this.getMemberLeaderboards(address, leaderboards => {
      leaderboards.forEach(leaderboard => {
        this.saveGrailInLeaderboardDatabase(
          address,
          leaderboard.address,
          grailData
        );
      });
    });
  };

  public saveGrailInLeaderboardDatabase = async (
    grailAddress: string,
    leaderboardAddress: string,
    data: any
  ) => {
    let leaderboardUserData = GrailController.formatGrailForLeaderboard(data);
    const result = await this.leaderboardCollection.findOneAndUpdate(
      {
        address: GrailController.trimAndToLower(leaderboardAddress),
        "data.users.username": grailAddress
      },
      {
        $set: {
          "data.users.$.data": leaderboardUserData
        },
        $inc: { updateCount: 1 }
      },
      { returnOriginal: false }
    );
  };

  public static formatGrailForLeaderboard = (data: any): any => {
    let leaderboardGrailData = {
      uniqueArmor: {
        missing: 123
      },
      uniqueWeapons: {
        missing: 197
      },
      uniqueOther: {
        missing: 59
      },
      sets: {
        missing: 127
      },
      itemScore: 0
    };
    if (data && data.uniques) {
      if (data.uniques.weapons) {
        let missingWeps = GrailController.sumMissing(
          () => data.uniques.weapons,
          new MissingItems()
        );
        leaderboardGrailData.uniqueWeapons.missing = missingWeps.missing;
        leaderboardGrailData.itemScore += missingWeps.score;
      }
      if (data.uniques.armor) {
        let missingArmor = GrailController.sumMissing(
          () => data.uniques.armor,
          new MissingItems()
        );
        leaderboardGrailData.uniqueArmor.missing = missingArmor.missing;
        leaderboardGrailData.itemScore += missingArmor.score;
      }
      if (data.uniques.other) {
        let missingOther = GrailController.sumMissing(
          () => data.uniques.other,
          new MissingItems()
        );
        leaderboardGrailData.uniqueOther.missing = missingOther.missing;
        leaderboardGrailData.itemScore += missingOther.score;
      }
    }
    if (data && data.sets) {
      let missingSets = GrailController.sumMissing(
        () => data.sets,
        new MissingItems()
      );
      leaderboardGrailData.sets.missing = missingSets.missing;
      leaderboardGrailData.itemScore += missingSets.score;
    }
    return leaderboardGrailData;
  };

  public static sumMissing = (
    dataFunc: () => any,
    missing: MissingItems,
    category?: string
  ): MissingItems => {
    let data = {};
    try {
      data = dataFunc();
    } catch (e) {
      // ignore error
    }

    if (!data) {
      return missing;
    }

    Object.keys(data).forEach(key => {
      const possibleItem = data[key] as IItem;
      if (GrailController.isItem(possibleItem)) {
        if (!possibleItem.wasFound) {
          missing.missing++;
        } else {
          missing.found++;
          var itemScore = ItemScores[key];
          if (!itemScore) {
            // This is a facet
            if (category === "all") {
              // Using the original method, count each facet as two
              itemScore = 2 * ItemScores["Rainbow Facet"];
            } else {
              // using the new split facet system, count each as one
              itemScore = ItemScores["Rainbow Facet"];
            }
          }
          missing.score += itemScore;
        }
      } else {
        GrailController.sumMissing(() => possibleItem, missing, key);
      }
    });
    return missing;
  };

  public static isItem(data: any): boolean {
    const itemProto = new Item();
    return (
      data &&
      typeof data === "object" &&
      (!Object.keys(data).length ||
        Object.keys(itemProto).some(k => data.hasOwnProperty(k)))
    );
  }

  private async getMemberLeaderboards(
    address: string,
    onSuccess: (leaderboards) => any
  ) {
    try {
      const leaderboards = await this.leaderboardCollection.find({
        userlist: { $in: [GrailController.trimAndToLower(address)] }
      });

      if (!leaderboards) {
        return;
      }

      onSuccess(leaderboards);
    } catch (err) {
      // dont update these leaderboards I guess
    }
  }

  public validatePassword = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;

    if (!password && address) {
      res.json(false);
      return;
    }

    const grail = await this.grailCollection.findOne({
      address: GrailController.trimAndToLower(address)
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
        { $sort: { modified: -1 } }
      ])
      .toArray();

    res.json({
      totalGrails,
      modifiedStats
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
          token: token
        },
        {
          $set: modifyDataToSaveFunc({
            token: GrailController.getToken(),
            modified: new Date()
          }),
          $inc: { updateCount: 1 }
        },
        { returnOriginal: false }
      );

      if (result && result.ok && result.value) {
        GrailController.mapAndReturnGrailData(address, res, result.value);
        return;
      }

      // we didn't receive a grail, so either the address, password or token is wrong
      await this.getByAddress(address, res, existingGrail => {
        if (existingGrail.password !== password) {
          res.status(401).send({ type: "password", address });
        } else {
          res.status(403).send({
            type: "token",
            correctToken: existingGrail.token,
            specifiedToken: token,
            address
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
        address: GrailController.trimAndToLower(address)
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
      version: grail.version
    } as IHolyGrail);
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
