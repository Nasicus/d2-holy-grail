import * as express from "express";
import * as bodyParser from "body-parser";
import { ConfigManager } from "./ConfigManager";
import * as cors from "cors";
import * as path from "path";
import { MongoClient, Db } from "mongodb";
import { HolyGrailController } from "./controllers/HolyGrailController";

class App {
  private readonly express: express.Application;

  private constructor(mongoClient: MongoClient) {
    this.express = express();
    this.configureApp();

    this.configureRoutes(mongoClient.db());

    if (process.env.NODE_ENV === "production") {
      this.configureClient();
    }
  }

  public static create(mongoClient: MongoClient): App {
    return new App(mongoClient);
  }

  public start() {
    this.express.listen(ConfigManager.port, () => {
      console.log("Express server listening on port " + ConfigManager.port);
    });
  }

  private configureApp(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(cors());
  }

  private configureRoutes(db: Db): void {
    const grailController: HolyGrailController = new HolyGrailController(db);

    this.express.route("/api/grail").post(grailController.add);

    this.express
      .route("/api/grail/:address")
      .get(grailController.get)
      .put(grailController.updateGrail);

    this.express.route("/api/grail/:address/settings").put(grailController.updateSettings);
  }

  private configureClient() {
    // Serve any static files
    this.express.use(express.static(path.join(__dirname, "client")));
    // Handle React routing, return all requests to React app
    this.express.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "index.html")));
  }
}

MongoClient.connect(
  ConfigManager.db.mongoUrl,
  { useNewUrlParser: true }
).then(mongoClient => {
  const app = App.create(mongoClient);
  app.start();
});
