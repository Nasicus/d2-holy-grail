import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const HolyGrailDbSchema = new Schema(
  {
    address: {
      type: String,
      required: "Public address",
      index: { unique: true }
    },
    privateKey: {
      type: String,
      required: "Private key"
    },
    modified: {
      type: Date
    },
    data: {
      type: {}
    }
  },
  { minimize: false }
);
