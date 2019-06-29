import { LocalStorageHandler } from "../../../common/utils/LocalStorageHandler";
import { ChangeLogCollection, changeLogs } from "./ChangeLogs";
const packageJson = require("../../../../package.json");

export class AppVersionManager {
  private static readonly versionStorage: LocalStorageHandler<
    string
  > = new LocalStorageHandler<string>("appVersion");

  public static get current(): AppVersionManager {
    return this._current;
  }
  private static _current: AppVersionManager;

  public static get currentVersion(): string {
    return packageJson.version;
  }

  public get fullChangeLog(): ChangeLogCollection {
    return changeLogs;
  }

  private constructor(
    public readonly storedVersion: string,
    public readonly hasStoredVersion: boolean,
    public readonly hasNewVersion: boolean,
    public readonly hasNewChangeLog: boolean
  ) {}

  public static initialize(): AppVersionManager {
    const storedVersion = AppVersionManager.versionStorage.getValue();
    const hasStoredVersion = !!storedVersion;
    const hasNewVersion = storedVersion !== AppVersionManager.currentVersion;
    const hasNewChangelog =
      hasNewVersion && changeLogs[AppVersionManager.currentVersion];
    return (AppVersionManager._current = new AppVersionManager(
      storedVersion,
      hasStoredVersion,
      hasNewVersion,
      !!hasNewChangelog
    ));
  }

  public static upgradeStorage() {
    AppVersionManager.versionStorage.setValue(AppVersionManager.currentVersion);
  }
}
