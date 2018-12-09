import * as expressServer from "express";
import * as bodyParser from "body-parser";
import { ConfigManager } from "../ConfigManager";
import * as cors from "cors";
import * as path from "path";
import { Db } from "mongodb";
import { GrailController } from "../controllers/GrailController";

function initializeExpressServer(express: expressServer.Express): void {
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(bodyParser.json());
  express.use(cors());
}

function initializeExpressServerForClient(express: expressServer.Express, rootDirectoryPath: string) {
  // Serve any static files
  express.use(expressServer.static(path.join(rootDirectoryPath, "client")));
  // Handle React routing, return all requests to React app
  express.get("*", (req, res) => res.sendFile(path.join(rootDirectoryPath, "client", "index.html")));
}

function configureRoutes(db: Db, express: expressServer.Express): void {
  const grailController: GrailController = new GrailController(db);

  express.route("/api/grail").post(grailController.add);

  express
    .route("/api/grail/:address")
    .get(grailController.get)
    .put(grailController.updateGrail);

  express.route("/api/grail/:address/settings").put(grailController.updateSettings);
  express.route("/api/grail/:address/password/validate").put(grailController.validatePassword);
}

export function initializeApp(db: Db, rootDirectoryPath: string) {
  const express = expressServer();
  initializeExpressServer(express);

  configureRoutes(db, express);

  if (process.env.NODE_ENV === "production") {
    initializeExpressServerForClient(express, rootDirectoryPath);
  }

  express.listen(ConfigManager.port, () => {
    console.log("Express server listening on port " + ConfigManager.port);
  });
}
