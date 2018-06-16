export class ConfigManager {
  private static defaultPort = 5000;
  private static defaultMongoUrl = "mongodb://localhost/HolyGrail";

  private static _port: number;
  public static get port(): number {
    return this._port || (this._port = Number(process.env.PORT) || this.defaultPort);
  }

  private static _mongoUrl: string;
  public static get mongoUrl(): string {
    return this._mongoUrl || (this._mongoUrl = process.env.MONGODB_URI || this.defaultMongoUrl);
  }
}
