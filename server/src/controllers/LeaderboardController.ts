import { Request, Response } from "express";
import { Db, Collection, MongoError } from "mongodb";
import { ConfigManager } from "../ConfigManager";
import { MongoErrorCodes } from "../models/MongoErrorCodes";
import { ILeaderboard } from "../models/ILeaderboard";
import { ILeaderboardData } from "../models/ILeaderboardData";
import { IGrailCollection } from "../models/IGrailCollection";
import { GrailController } from "./GrailController";

export class LeaderboardController {
  private get leaderboardCollection(): Collection<ILeaderboard> {
    return this.db.collection<ILeaderboard>(
      ConfigManager.db.leaderboardCollection
    );
  }

  private get grailCollection(): Collection<IGrailCollection> {
    return this.db.collection<IGrailCollection>(
      ConfigManager.db.holyGrailCollection
    );
  }

  public constructor(private db: Db) {}

  public add = async (req: Request, res: Response) => {
    let newLeaderboard: ILeaderboard = req.body;
    const originalAddress = newLeaderboard.address;
    newLeaderboard.address = LeaderboardController.trimAndToLower(
      newLeaderboard.address
    );
    newLeaderboard.token = LeaderboardController.getToken();
    newLeaderboard.created = newLeaderboard.modified = new Date();
    newLeaderboard.data = { users: [] };
    try {
      const result = await this.leaderboardCollection.insertOne(newLeaderboard);
      LeaderboardController.mapAndReturnLeaderboardData(
        originalAddress,
        res,
        await this.leaderboardCollection.findOne({ _id: result.insertedId })
      );
    } catch (err) {
      const mongoError = err as MongoError;
      if (mongoError.code === MongoErrorCodes.DuplicateKey) {
        res
          .status(400)
          .send({ type: "duplicateKey", address: originalAddress });
        return;
      }
      LeaderboardController.sendUnknownError(res, err);
    }
  };

  public get = async (req: Request, res: Response) => {
    const address = req.params.address;
    await this.getByAddress(address, res, leaderboard =>
      LeaderboardController.mapAndReturnLeaderboardData(
        address,
        res,
        leaderboard
      )
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

  public updateLeaderboard = async (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const leaderboardData = req.body.leaderboard;
    const token = req.body.token;

    if (!leaderboardData) {
      res.status(500).send({ type: "argument", argumentName: "leaderboard" });
      return;
    }

    await this.update(req, res, address, password, token, dataToSet => {
      dataToSet.data = leaderboardData;
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

    const leaderboard = await this.leaderboardCollection.findOne({
      address: LeaderboardController.trimAndToLower(address)
    });
    if (!leaderboard) {
      res.status(404).send({ type: "notFound", address });
    } else {
      res.json(leaderboard.password === password);
    }
  };

  public signupToLeaderboard = async (req: Request, res: Response) => {
    const userAddress = req.body.userAddress;
    const password = req.body.userPassword;
    const grail = await this.grailCollection.findOne({
      address: LeaderboardController.trimAndToLower(userAddress)
    });
    if (!grail) {
      res.status(404).send({ type: "notFound", userAddress });
      return;
    } else if (grail.password !== password) {
      res.status(401).send({ type: "unauthorized", userAddress });
      return;
    }
    const result = await this.leaderboardCollection.findOneAndUpdate(
      {
        address: req.params.address,
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
    // We didnt get a result, so there must already be a user with this address in the specified leaderboard
    res.status(409).send({ type: "conflict", userAddress });
  };

  public getStatistics = async (req: Request, res: Response) => {
    const totalLeaderboards = await this.leaderboardCollection.estimatedDocumentCount();

    const aWeekAgo = new Date();
    aWeekAgo.setDate(aWeekAgo.getDate() - 7);

    const modifiedStats = await this.leaderboardCollection
      .aggregate([
        { $match: { modified: { $gt: aWeekAgo } } },
        { $project: { updateCount: 1, modified: 1 } },
        { $sort: { modified: -1 } }
      ])
      .toArray();

    res.json({
      totalLeaderboards,
      modifiedStats
    });
  };

  public updateLeaderboardUsers = async (req: Request, res: Response) => {
    try {
      const newUserlist = req.body.userlist;
      const password = req.body.password;
      const address = req.body.address;
      const token = req.body.token;
      const acceptedUsers = req.body.acceptedUserlist;
      const deniedUsers = req.body.deniedUserlist;
      const removedUsers = req.body.removedUserlist;
      const resolvedUsers = acceptedUsers.concat(deniedUsers);
      const leaderboard = await this.leaderboardCollection.findOne({
        address: address,
        password: password,
        token: token
      });
      if (leaderboard) {
        // Got the leaderboard. Lets update the user lists
        // TODO: Possible this might override saved updates that happen at the same time?
        let newUsers = [];
        // Keep all current users who have not been removed
        leaderboard.data.users.forEach(user => {
          if (removedUsers.indexOf(user.username) == -1) {
            newUsers.push(user);
          }
        });
        // Add new users who have been accepted
        const newUserGrailData = await this.pullUserGrailData(
          address,
          acceptedUsers
        );
        newUsers = newUsers.concat(newUserGrailData);
        // Save the document back in the db
        const result = await this.leaderboardCollection.findOneAndUpdate(
          {
            address: address,
            password: password,
            token: token
          },
          {
            $set: {
              userlist: newUserlist,
              "data.users": newUsers,
              token: LeaderboardController.getToken(),
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
          } as ILeaderboard);
          return;
        }
        // Didnt save. Handle the error
        this.handleDbError(address, password, token, res);
      } else {
        // Couldnt find leaderboard. Lets see the error
        this.handleDbError(address, password, token, res);
        return;
      }
    } catch (err) {
      LeaderboardController.sendUnknownError(res, err);
    }
  };

  private handleDbError = async (
    address: string,
    password: string,
    token: string,
    res: Response
  ) => {
    await this.getByAddress(address, res, existingLeaderboard => {
      if (existingLeaderboard.password !== password) {
        res.status(401).send({ type: "password", address });
      } else if (existingLeaderboard.token !== token) {
        res.status(403).send({
          type: "token",
          correctToken: existingLeaderboard.token,
          specifiedToken: token,
          address
        });
      } else {
        LeaderboardController.sendUnknownError(res, "Database error");
      }
    });
  };

  private pullUserGrailData = async (
    leaderboardAddress: string,
    userlist: string[]
  ) => {
    if (userlist.length == 0) return [];
    const result = await this.grailCollection.find({
      address: {
        $in: userlist
      }
    });
    let newUserData = [];
    await result.forEach(user => {
      newUserData.push({
        username: user.address,
        data: GrailController.formatGrailForLeaderboard(user.data)
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
    modifyDataToSaveFunc: (data: Partial<ILeaderboard>) => Partial<ILeaderboard>
  ) => {
    try {
      const result = await this.leaderboardCollection.findOneAndUpdate(
        {
          address: LeaderboardController.trimAndToLower(address),
          password: password,
          token: token
        },
        {
          $set: modifyDataToSaveFunc({
            token: LeaderboardController.getToken(),
            modified: new Date()
          }),
          $inc: { updateCount: 1 }
        },
        { returnOriginal: false }
      );

      if (result && result.ok && result.value) {
        LeaderboardController.mapAndReturnLeaderboardData(
          address,
          res,
          result.value
        );
        return;
      }

      // we didn't receive a leaderboard, so either the address, password or token is wrong
      this.handleDbError(address, password, token, res);
    } catch (err) {
      LeaderboardController.sendUnknownError(res, err);
    }
  };

  private async getByAddress(
    address: string,
    res: Response,
    onSuccess: (leaderboard) => any
  ) {
    try {
      const leaderboard = await this.leaderboardCollection.findOne({
        address: LeaderboardController.trimAndToLower(address)
      });

      if (!leaderboard) {
        res.status(404).send({ type: "notFound", address });
        return;
      }
      onSuccess(leaderboard);
    } catch (err) {
      LeaderboardController.sendUnknownError(res, err);
    }
  }

  private static mapAndReturnLeaderboardData(
    originalAddress: string,
    res: Response,
    leaderboard: ILeaderboard
  ) {
    // important: never send the full data back directly, because the password is saved in there!
    res.json({
      address: originalAddress,
      data: leaderboard.data,
      userlist: leaderboard.userlist,
      pendingUserlist: leaderboard.pendingUserlist,
      settings: leaderboard.settings,
      token: leaderboard.token
    } as ILeaderboardData);
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
