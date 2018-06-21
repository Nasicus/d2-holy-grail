import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IHolyGrailDbModel {
  address: string;
  password: string;
  token: string;
  data?: any;
}

export const HolyGrailDbSchema = new Schema(
  {
    address: {
      type: String,
      required: "Public address",
      index: { unique: true }
    },
    password: {
      type: String,
      required: "Password"
    },
    token: {
      type: String,
      required: "Token"
    },
    data: {
      type: {}
    }
  },
  { minimize: false }
);
