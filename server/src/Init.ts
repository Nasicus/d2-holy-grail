import { initializeDb } from "./initializers/DbInitializer";
import { initializeApp } from "./initializers/AppInitializer";

async function initialize() {
  const db = await initializeDb();
  initializeApp(db, __dirname);
}

initialize().then(() => console.log("Server initialized!"));
