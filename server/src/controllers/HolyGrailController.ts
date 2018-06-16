import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { HolyGrailDbSchema } from "../models/HolyGrailDbSchema";
import { IHolyGrailApiModel } from "../models/IHolyGrailApiModel";

const HolyGrail = mongoose.model("HolyGrail", HolyGrailDbSchema);

export class HolyGrailController {
  public add = (req: Request, res: Response) => {
    let newGrail = new HolyGrail(req.body);
    newGrail.save((err, grail) => {
      if (err) {
        res.status(500).send(err);
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
    const grailData = req.body.data;

    if (!grailData) {
      res.status(500).send("You have to specify Holy Grail data!");
      return;
    }

    HolyGrail.findOneAndUpdate(
      { address: address, privateKey: req.body.privateKey },
      { $set: { data: grailData } },
      (err, grail) => {
        if (err) {
          res.status(500).send(err);
          return;
        }

        if (!grail) {
          this.getByAddress(address, res, () =>
            res
              .status(401)
              .send(`The specified private key does not belong to the address '${address}' - will not update data!`)
          );
          return;
        }

        HolyGrailController.mapAndReturnGrailData(res, grail);
      }
    );
  };

  private getByAddress(address: string, res: Response, onSuccess: (grail) => any) {
    HolyGrail.findOne({ address: address }, (err, grail) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      if (!grail) {
        res.status(404).send(`There is no Holy Grail with the address "${address}"!`);
        return;
      }

      onSuccess(grail);
    });
  }

  private static mapAndReturnGrailData(res: Response, grail: any) {
    if (!grail) {
      res.status(500).send("No Holy Grail Data received!");
    }

    // important: never send the grail data back directly, because the private key is saved in there!
    res.json({ address: grail.address, data: grail.data } as IHolyGrailApiModel);
  }
}
