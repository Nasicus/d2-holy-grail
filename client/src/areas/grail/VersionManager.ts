import { LocalStorageHandler } from "../../common/utils/LocalStorageHandler";
import { ChangeLogCollection, changeLogs } from "./ChangeLogs";
const packageJson = require("../../../package.json");

export class VersionManager {
  private static readonly versionStorage: LocalStorageHandler<string> = new LocalStorageHandler<string>("appVersion");

  public static get current(): VersionManager {
    return this._current;
  }
  private static _current: VersionManager;

  public static get currentVersion(): string {
    return packageJson.version;
  }

  public get fullChangeLog(): ChangeLogCollection {
    return changeLogs;
  }

  public get hasStoredVersion(): boolean {
    return this._hasStoredVersion;
  }

  public get hasNewVersion(): boolean {
    return this._hasNewVersion;
  }

  public get hasNewChangeLog(): boolean {
    return this._hasNewChangeLog;
  }

  public get storedVersion(): string {
    return this._storedVersion;
  }

  private constructor(
    private _storedVersion: string,
    private _hasStoredVersion: boolean,
    private _hasNewVersion: boolean,
    private _hasNewChangeLog: boolean
  ) {}

  public static initialize(): VersionManager {
    const storedVersion = VersionManager.versionStorage.getValue();
    const hasStoredVersion = !!storedVersion;
    const hasNewVersion = storedVersion !== VersionManager.currentVersion;
    const hasNewChangelog = hasNewVersion && changeLogs[VersionManager.currentVersion];
    return (VersionManager._current = new VersionManager(
      storedVersion,
      hasStoredVersion,
      hasNewVersion,
      !!hasNewChangelog
    ));
  }

  public upgradeStorage() {
    VersionManager.versionStorage.setValue(VersionManager.currentVersion);
  }
}
