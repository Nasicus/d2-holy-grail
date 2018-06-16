import * as express from "express";
import * as bodyParser from "body-parser";
import { RoutesManager } from "./routes/RoutesManager";
import * as mongoose from "mongoose";
import { ConfigManager } from "./ConfigManager";
import * as cors from "cors";
import * as path from "path";

class App {
  public app: express.Application;
  public routesManager: RoutesManager = new RoutesManager();

  constructor() {
    this.app = express();
    this.config();
    this.routesManager.registerRoutes(this.app);
    App.mongoSetup();

    if (process.env.NODE_ENV === "production") {
      this.configureClient();
    }
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private configureClient() {
    // Serve any static files
    this.app.use(express.static(path.join(__dirname, "client")));
    // Handle React routing, return all requests to React app
    this.app.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "index.html")));
  }

  private static mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(ConfigManager.mongoUrl);
  }
}

export default new App().app;
