import { IHolyGrailDb } from "../models/IHolyGrailDb";
import { ConfigManager } from "../ConfigManager";
import { MongoClient, Db } from "mongodb";

async function crateHolyGrailAddressIndex(db: Db) {
  const holyGrailCollection = db.collection<IHolyGrailDb>(ConfigManager.db.holyGrailCollection);
  await holyGrailCollection.createIndex(
    { address: 1 },
    { name: "address_idx", unique: true, collation: { locale: "en", strength: 2 } }
  );
}

export async function initializeDb(): Promise<Db> {
  const mongoClient = await MongoClient.connect(
    ConfigManager.db.mongoUrl,
    { useNewUrlParser: true }
  );
  const db = mongoClient.db();
  await crateHolyGrailAddressIndex(db);
  return db;
}
