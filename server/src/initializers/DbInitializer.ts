import { IGrailCollection } from "../models/IGrailCollection";
import { ConfigManager } from "../ConfigManager";
import { MongoClient, Db } from "mongodb";
import { IParty } from "../models/IParty";

async function createAddressIndex(db: Db) {
  const holyGrailCollection = db.collection<IGrailCollection>(
    ConfigManager.db.holyGrailCollection
  );
  await holyGrailCollection.createIndex(
    { address: 1 },
    {
      name: "address_idx",
      unique: true,
      collation: { locale: "en", strength: 2 }
    }
  );
}

async function createPartyAddressIndex(db: Db) {
  const partyCollection = db.collection<IParty>(
    ConfigManager.db.partyCollection
  );
  await partyCollection.createIndex(
    { address: 1 },
    {
      name: "address_idx",
      unique: true,
      collation: { locale: "en", strength: 2 }
    }
  );
}

export async function initializeDb(): Promise<Db> {
  const mongoClient = await MongoClient.connect(ConfigManager.db.mongoUrl, {
    useNewUrlParser: true
  });
  const db = mongoClient.db();
  await createAddressIndex(db);
  await createPartyAddressIndex(db);
  return db;
}
