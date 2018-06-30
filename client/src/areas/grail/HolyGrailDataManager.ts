import { LocalStorageHandler } from "../../common/utils/LocalStorageHandler";
import { Api, IHolyGrailApiModel } from "../../common/utils/Api";
import { first } from "rxjs/operators";
import { holyGrailSeedData } from "./HolyGrailSeedData";
import { ReplaySubject, Observable, Subscriber } from "rxjs";

export class HolyGrailDataManager {
  public static get current(): HolyGrailDataManager {
    return this._current;
  }
  private static _current: HolyGrailDataManager;

  private grailLocalStorage: LocalStorageHandler<IHolyGrailApiModel>;
  private hasLocalChangesStorage: LocalStorageHandler<boolean>;

  private data = new ReplaySubject<IHolyGrailApiModel>(1);
  public data$ = this.data.asObservable();

  private hasLocalChanges = new ReplaySubject<boolean>(1);
  public hasLocalChanges$ = this.hasLocalChanges.asObservable();

  public get isReadOnly(): boolean {
    return !this.password;
  }

  public static createInstance(address: string, password?: string, savePassword?: boolean): HolyGrailDataManager {
    return (this._current = new HolyGrailDataManager(address, password, savePassword));
  }

  private constructor(private address: string, private password?: string, savePassword?: boolean) {
    if (!address) {
      throw new Error("Address must be specified");
    }

    this.grailLocalStorage = new LocalStorageHandler(`holyGrail-${this.address}`);
    this.hasLocalChangesStorage = new LocalStorageHandler(`holyGrail-hasLocalChanges-${this.address}`);
    this.hasLocalChanges.next(this.hasLocalChangesStorage.getValue());

    this.setPassword(savePassword);
    this.initializeGrailData();
  }

  public updateCache = () => {
    // a little hacky: we get the current reference object of data from our subscriber object, since we update the item values
    // via reference, however we don't want to simply write the whole object into the cache, instead we only want to update
    // the data, and leave the token etc.alone
    this.data$.pipe(first()).subscribe(newData => {
      const cachedData = this.grailLocalStorage.getValue();
      cachedData.data = newData.data;
      this.updateLocaleStorage(cachedData, true);
    });
  };

  public discardCache = () => {
    this.updateLocaleStorage(null, false);
  };

  public updateServer = (): Observable<IHolyGrailApiModel> => {
    return Observable.create((observer: Subscriber<IHolyGrailApiModel>) => {
      this.data$.pipe(first()).subscribe(localData => {
        Api.updateGrail(this.address, this.password, localData).subscribe(
          response => {
            this.updateLocaleStorage(response.data, false);
            // update the token for the current object which we keep by reference everywhere
            // we could also do this.with data$ next, however this would trigger state chances, even though the ui doesn't care
            localData.token = response.data.token;
            observer.next(response.data);
            observer.complete();
          },
          err => observer.error(err)
        );
      });
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
      this.data.next(cachedData);
    }

    Api.getGrail(this.address).subscribe(
      response => {
        const apiData = response.data;
        if (!apiData.data) {
          apiData.data = holyGrailSeedData;
        }

        if (!cachedData || (cachedData.token !== apiData.token && !this.hasLocalChangesStorage.getValue())) {
          this.grailLocalStorage.setValue(apiData);
          this.data.next(apiData);
          return;
        }

        // cache has the same data as we got from the server - no need to do anything
        if (cachedData.token === apiData.token) {
          return;
        }

        this.data.error({ type: "conflict", serverToken: apiData.token, localToken: cachedData.token });
      },
      err => this.data.error(err)
    );
  }
}
