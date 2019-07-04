import { IGrailCollection } from "../models/IGrailCollection";
import { ConfigManager } from "../ConfigManager";
import { MongoClient, Db } from "mongodb";
import { ILeaderboard } from "../models/ILeaderboard";

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

async function createLeaderboardAddressIndex(db: Db) {
  const leaderboardCollection = db.collection<ILeaderboard>(
    ConfigManager.db.leaderboardCollection
  );
  await leaderboardCollection.createIndex(
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
  await createLeaderboardAddressIndex(db);
  return db;
}
