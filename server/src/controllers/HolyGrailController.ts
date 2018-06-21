import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { HolyGrailDbSchema } from "../models/HolyGrailDbSchema";
import { IHolyGrailApiModel } from "../models/IHolyGrailApiModel";

const HolyGrail = mongoose.model("HolyGrail", HolyGrailDbSchema);

export class HolyGrailController {
  public add = (req: Request, res: Response) => {
    let newGrail = new HolyGrail(req.body);
    newGrail.token = HolyGrailController.getToken();
    newGrail.save((err, grail) => {
      if (err) {
        HolyGrailController.sendUnknownError(res, err);
        return;
      }

      HolyGrailController.mapAndReturnGrailData(res, grail);
    });
  };

  public get = (req: Request, res: Response) => {
    this.getByAddress(req.params.address, res, grail => HolyGrailController.mapAndReturnGrailData(res, grail));
  };

  public update = (req: Request, res: Response) => {
    const address = req.params.address;
    const password = req.body.password;
    const grailData = req.body.data;
    const token = req.body.token;

    if (!grailData) {
      res.status(500).send({ type: "argument", argumentName: "grailData" });
      return;
    }

    HolyGrail.findOneAndUpdate(
      { address: address, password: password, token: token },
      { $set: { data: grailData, token: HolyGrailController.getToken() } },
      { new: true },
      (err, grail) => {
        if (err) {
          HolyGrailController.sendUnknownError(res, err);
          return;
        }

        if (grail) {
          HolyGrailController.mapAndReturnGrailData(res, grail);
          return;
        }

        // we didn't receive a grail, so either the address, password or token is wrong
        this.getByAddress(address, res, existingGrail => {
          if (existingGrail.password !== password) {
            res.status(401).send({ type: "password", address });
          } else {
            res.status(403).send({ type: "token", correctToken: existingGrail.token, specifiedToken: token, address });
          }
        });
      }
    );
  };

  private getByAddress(address: string, res: Response, onSuccess: (grail) => any) {
    HolyGrail.findOne({ address: address }, (err, grail) => {
      if (err) {
        HolyGrailController.sendUnknownError(res, err);
        return;
      }

      if (!grail) {
        res.status(404).send({ type: "notFound", address });
        return;
      }

      onSuccess(grail);
    });
  }

  private static mapAndReturnGrailData(res: Response, grail: any) {
    // important: never send the grail grailData back directly, because the password is saved in there!
    res.json({ address: grail.address, data: grail.data, token: grail.token } as IHolyGrailApiModel);
  }

  private static sendUnknownError(res: Response, error?: any) {
    res.status(500).send({ type: "unknown", error });
  }

  private static getToken(): string {
    return new Date().toISOString();
  }
}
