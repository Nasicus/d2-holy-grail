import { LocalStorageHandler } from "../../common/utils/LocalStorageHandler";
import { Api, IHolyGrailApiModel, IHolyGrailSettings } from "../../common/utils/Api";
import { holyGrailSeedData } from "./HolyGrailSeedData";
import { ReplaySubject, Observable, Subscriber } from "rxjs";
import { IHolyGrailData } from "../../common/IHolyGrailData";

export class HolyGrailDataManager {
  public static get current(): HolyGrailDataManager {
    return this._current;
  }
  private static _current: HolyGrailDataManager;

  private data: IHolyGrailApiModel;
  private grailLocalStorage: LocalStorageHandler<IHolyGrailApiModel>;
  private hasLocalChangesStorage: LocalStorageHandler<boolean>;

  private dataInitializer = new ReplaySubject<void>(1);

  private hasLocalChanges = new ReplaySubject<boolean>(1);
  public hasLocalChanges$ = this.hasLocalChanges.asObservable();

  public get isReadOnly(): boolean {
    return !this.password;
  }

  public get settings(): IHolyGrailSettings {
    return this.data.settings;
  }

  public get grail(): IHolyGrailData {
    return this.data.data;
  }

  public static createInstance(address: string, password?: string, savePassword?: boolean): HolyGrailDataManager {
    return (this._current = new HolyGrailDataManager(address, password, savePassword));
  }

  private constructor(public readonly address: string, private password?: string, savePassword?: boolean) {
    if (!address) {
      throw new Error("Address must be specified");
    }

    this.grailLocalStorage = new LocalStorageHandler(`holyGrail-${this.address}`);
    this.hasLocalChangesStorage = new LocalStorageHandler(`holyGrail-hasLocalChanges-${this.address}`);
    this.hasLocalChanges.next(this.hasLocalChangesStorage.getValue());

    this.setPassword(savePassword);
    this.initializeGrailData();
  }

  public updateGrailCache = () => {
    const cachedData = this.grailLocalStorage.getValue();
    cachedData.data = this.grail;
    this.updateLocaleStorage(cachedData, true);
  };

  public discardGrailCache = () => {
    this.updateLocaleStorage(null, false);
  };

  public initialize(): Observable<void> {
    return this.dataInitializer.asObservable();
  }

  public saveGrailToServer = (): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.updateGrail(this.address, this.password, this.data.token, this.grail).subscribe(
        response => {
          this.updateLocaleStorage(response.data, false);
          // update the token for the current object which we keep by reference everywhere
          // we could also do this.with ready$ next, however this would trigger state chances, even though the ui doesn't care
          this.data.token = response.data.token;
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  public saveSettingsToServer = (): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.updateSettings(this.address, this.password, this.data.token, this.settings).subscribe(
        response => {
          // we have to set back the data to the current grail data, or else we update the local storage with wrong data
          response.data.data = this.grail;
          this.data.token = response.data.token;
          this.grailLocalStorage.setValue(response.data);
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  private updateLocaleStorage = (data: IHolyGrailApiModel, hasLocalChanges: boolean) => {
    this.grailLocalStorage.setValue(data);
    this.hasLocalChangesStorage.setValue(hasLocalChanges);
    this.hasLocalChanges.next(hasLocalChanges);
  };

  private setPassword(savePassword?: boolean) {
    const passwordLocalStorageHandler = new LocalStorageHandler<string>(`holyGrail-password-${this.address}`);
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
        if (!apiData.data) {
          apiData.data = holyGrailSeedData;
        }

        if (!cachedData || (cachedData.token !== apiData.token && !this.hasLocalChangesStorage.getValue())) {
          this.grailLocalStorage.setValue(apiData);
          this.emitData(apiData);
          return;
        }

        // cache has the same data as we got from the server - no need to do anything
        if (cachedData.token === apiData.token) {
          return;
        }

        this.dataInitializer.error({ type: "conflict", serverToken: apiData.token, localToken: cachedData.token });
      },
      err => this.dataInitializer.error(err)
    );
  }

  private emitData(data: IHolyGrailApiModel) {
    if (!data.settings) {
      data.settings = {} as any;
    }
    this.data = data;
    this.dataInitializer.next();
  }
}
