export class DbConfig {
  private defaultMongoUrl = "mongodb://localhost/HolyGrail";

  public readonly holyGrailCollection = "holygrails";
  public readonly partyCollection = "parties";

  private _mongoUrl: string;
  public get mongoUrl(): string {
    return (
      this._mongoUrl ||
      (this._mongoUrl = process.env.MONGODB_URI || this.defaultMongoUrl)
    );
  }
}

export class ConfigManager {
  private static defaultPort = 5000;

  private static _port: number;
  public static get port(): number {
    return (
      this._port || (this._port = Number(process.env.PORT) || this.defaultPort)
    );
  }

  private static _db: DbConfig;
  public static get db(): DbConfig {
    return this._db || (this._db = new DbConfig());
  }
}
