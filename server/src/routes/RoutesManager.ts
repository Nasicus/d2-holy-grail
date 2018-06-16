import { Application } from "express";
import { HolyGrailController } from "../controllers/HolyGrailController";

export class RoutesManager {
  public grailController: HolyGrailController = new HolyGrailController();

  public registerRoutes(app: Application): void {
    app.route("/api/grail").post(this.grailController.add);

    app
      .route("/api/grail/:address")
      .get(this.grailController.get)
      .put(this.grailController.update);
  }
}
