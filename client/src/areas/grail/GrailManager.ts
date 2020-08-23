import { LocalStorageHandler } from "../../common/utils/LocalStorageHandler";
import { Api } from "../../common/utils/Api";
import { holyGrailSeedData } from "../../common/seeds/HolyGrailSeedData";
import { Observable, ReplaySubject, Subscriber } from "rxjs";
import { IHolyGrailData } from "../../common/definitions/union/IHolyGrailData";
import { IEthGrailData } from "../../common/definitions/union/IEthGrailData";
import { ethGrailSeedData } from "../../common/seeds/EthGrailSeedData";
import { GrailMode } from "./GrailMode";
import { runewordGrailSeedData } from "../../common/seeds/RunewordGrailSeedData";
import { IRunewordGrailApiData } from "../../common/definitions/api/IRunewordGrailApiData";
import { AllBusinessGrailsType } from "../../common/definitions/business/AllBusinessGrailsType";
import { IHolyGrailApiModel } from "../../common/definitions/api/IHolyGrailApiModel";
import { IGrailSettings } from "../../common/definitions/union/IGrailSettings";
import { IHolyGrailBusinessModel } from "../../common/definitions/business/IHolyGrailBusinessModel";
import { GrailBusinessModelWrapper } from "../../common/definitions/business/GrailBusinessModelWrapper";
import { AllApiGrailsType } from "../../common/definitions/api/AllApiGrailsType";
import { IGrailError } from "./IGrailError";

export class GrailManager {
  public static get current(): GrailManager {
    return this._current;
  }
  private static _current: GrailManager;

  private apiData: IHolyGrailApiModel;
  private businessData: IHolyGrailBusinessModel;
  private grailLocalStorage: LocalStorageHandler<IHolyGrailApiModel>;
  private hasLocalChangesStorage: LocalStorageHandler<boolean>;

  private dataInitializer = new ReplaySubject<void>(1);

  private hasLocalChanges = new ReplaySubject<boolean>(1);
  public hasLocalChanges$ = this.hasLocalChanges.asObservable();

  public get isReadOnly(): boolean {
    return !this.password;
  }

  public get allApiData(): IHolyGrailApiModel {
    return this.apiData;
  }

  public get settings(): IGrailSettings {
    return this.apiData.settings;
  }

  public static get currentVersion(): string {
    return "1.1.0";
  }

  public get grailVersion(): string {
    return this.apiData.version || "1.0.0";
  }

  public get hasNewVersion(): boolean {
    return this.grailVersion !== GrailManager.currentVersion;
  }

  public get grail(): AllBusinessGrailsType {
    switch (this.grailMode) {
      case GrailMode.Eth:
        return this.businessData.ethData;
      case GrailMode.Runeword:
        return this.businessData.runewordData;
      default:
        return this.businessData.data;
    }
  }

  public get grailData(): AllApiGrailsType {
    switch (this.grailMode) {
      case GrailMode.Eth:
        return this.apiData.ethData;
      case GrailMode.Runeword:
        return this.apiData.runewordData;
      default:
        return this.apiData.data;
    }
  }

  public get normalGrail(): IHolyGrailData {
    return this.apiData.data;
  }

  public get ethGrail(): IEthGrailData {
    return this.apiData.ethData;
  }

  public get runewordGrail(): IRunewordGrailApiData {
    return this.apiData.runewordData;
  }

  public get grailMode(): GrailMode {
    return this._grailMode;
  }

  public static createInstance(
    grailMode: GrailMode,
    address: string,
    password?: string,
    savePassword?: boolean
  ): GrailManager {
    return (this._current = new GrailManager(
      grailMode,
      address,
      password,
      savePassword
    ));
  }

  private constructor(
    private _grailMode: GrailMode,
    public readonly address: string,
    private password?: string,
    savePassword?: boolean
  ) {
    if (!address) {
      throw new Error("Address must be specified");
    }

    this.grailLocalStorage = new LocalStorageHandler(
      `holyGrail-${this.address}`
    );
    this.hasLocalChangesStorage = new LocalStorageHandler(
      `holyGrail-hasLocalChanges-${this.address}`
    );
    this.hasLocalChanges.next(this.hasLocalChangesStorage.getValue());

    this.setPassword(savePassword);
    this.initializeGrailData();
  }

  public setGrailMode(grailMode: GrailMode) {
    this._grailMode = grailMode;
    this.dataInitializer.next();
  }

  public updateVersion = (newVersion: string) => {
    this.apiData.version = newVersion;
    this.updateGrailCache();
  };

  public updateGrailCache = () => {
    const cachedData = this.grailLocalStorage.getValue();
    cachedData.version = this.apiData.version;
    cachedData.data = this.apiData.data;
    cachedData.ethData = this.apiData.ethData;
    cachedData.runewordData = this.apiData.runewordData;
    this.updateLocaleStorage(cachedData, true);
  };

  public discardGrailCache = () => {
    this.updateLocaleStorage(null, false);
  };

  public initialize(): Observable<void> {
    return this.dataInitializer.asObservable();
  }

  public saveGrailToServer = (tokenOverride?: string): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.updateGrail(
        this.address,
        this.password,
        tokenOverride || this.apiData.token,
        this.apiData.version,
        this.apiData.data,
        this.apiData.ethData,
        this.apiData.runewordData
      ).subscribe(
        response => {
          this.updateLocaleStorage(response.data, false);
          // update the token for the current object which we keep by reference everywhere
          // we could also do this.with ready$ next, however this would trigger state chances, even though the ui doesn't care
          this.apiData.token = response.data.token;
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  public saveSettingsToServer = (): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.updateSettings(
        this.address,
        this.password,
        this.apiData.token,
        this.settings
      ).subscribe(
        response => {
          // we have to set back the data to the current grail data, or else we update the local storage with wrong data
          response.data.data = this.apiData.data;
          response.data.version = this.apiData.version;
          response.data.ethData = this.apiData.ethData;
          response.data.runewordData = this.apiData.runewordData;
          this.apiData.token = response.data.token;
          this.grailLocalStorage.setValue(response.data);
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  private updateLocaleStorage = (
    data: IHolyGrailApiModel,
    hasLocalChanges: boolean
  ) => {
    this.grailLocalStorage.setValue(data);
    this.hasLocalChangesStorage.setValue(hasLocalChanges);
    this.hasLocalChanges.next(hasLocalChanges);
  };

  private setPassword(savePassword?: boolean) {
    const passwordLocalStorageHandler = new LocalStorageHandler<string>(
      `holyGrail-password-${this.address}`
    );
    if (!this.password) {
      this.password = passwordLocalStorageHandler.getValue();
    } else if (savePassword) {
      passwordLocalStorageHandler.setValue(this.password);
    }
  }

  private initializeGrailData() {
    const cachedData = this.grailLocalStorage.getValue();

    if (cachedData) {
      this.emitData(cachedData);
    }

    Api.getGrail(this.address).subscribe(
      response => {
        const apiData = response.data;
        if (
          !cachedData ||
          (cachedData.token !== apiData.token &&
            !this.hasLocalChangesStorage.getValue())
        ) {
          this.grailLocalStorage.setValue(apiData);
          this.emitData(apiData);
          return;
        }

        // cache has the same data as we got from the server - no need to do anything
        if (cachedData.token === apiData.token) {
          return;
        }

        this.dataInitializer.error({
          type: "conflict",
          serverToken: apiData.token,
          localToken: cachedData.token,
          serverData: {
            grailData: apiData.data,
            ethData: apiData.ethData,
            runewordData: apiData.runewordData
          }
        } as IGrailError);
      },
      err => this.dataInitializer.error(err as IGrailError)
    );
  }

  private emitData(data: IHolyGrailApiModel) {
    if (!data.data) {
      data.data = holyGrailSeedData;
    }

    if (!data.ethData) {
      data.ethData = ethGrailSeedData;
    }

    if (!data.runewordData) {
      data.runewordData = runewordGrailSeedData;
    }

    if (!data.settings) {
      data.settings = {} as any;
    }

    this.apiData = data;
    this.businessData = new GrailBusinessModelWrapper(data);
    this.dataInitializer.next();
  }
}
