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

  private grailLocalStorage: LocalStorageHandler;

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

    this.setPassword(savePassword);
    this.initializeGrailData();
  }

  public updateCache = (data?: IHolyGrailApiModel) => {
    const update = (d: IHolyGrailApiModel) => {
      d.modified = new Date();
      this.grailLocalStorage.setValue(d);
    };

    this.hasLocalChanges.next(true);

    if (data) {
      update(data);
      return;
    }

    this.data$.pipe(first()).subscribe(d => update(d));
  };

  public updateServer = (data?: IHolyGrailApiModel): Observable<IHolyGrailApiModel> => {
    return Observable.create((observer: Subscriber<IHolyGrailApiModel>) => {
      const update = (updateData: IHolyGrailApiModel) => {
        updateData.modified = new Date();
        this.grailLocalStorage.setValue(updateData);
        Api.updateGrail(this.address, this.password, updateData).subscribe(
          d => {
            this.hasLocalChanges.next(false);
            observer.next(d);
            observer.complete();
          },
          err => observer.error(err)
        );
      };

      if (data) {
        update(data);
        return;
      }

      this.data$.pipe(first()).subscribe(d => update(d));
    });
  };

  private setPassword(savePassword?: boolean) {
    const passwordLocalStorageHandler = new LocalStorageHandler(`holyGrail-password-${this.address}`);
    if (!this.password) {
      this.password = passwordLocalStorageHandler.getValue();
    } else if (savePassword) {
      passwordLocalStorageHandler.setValue(this.password);
    }
  }

  private initializeGrailData() {
    this.grailLocalStorage = new LocalStorageHandler(`holyGrail-${this.address}`);
    const cachedData = this.grailLocalStorage.getValue() as IHolyGrailApiModel;

    if (cachedData) {
      this.data.next(cachedData);
    }

    Api.getGrail(this.address).subscribe(
      serverData => {
        if (!serverData.data) {
          serverData.data = holyGrailSeedData;
        }

        if (!cachedData) {
          this.updateCache(serverData);
          this.data.next(serverData);
          return;
        }
        // todo: we need to cache the server date, and compare if it has changed, if it has someone changed it
        // on another browser or tab and we need to throw an exception or make a diff or something like that
        if (cachedData.modified < serverData.modified) {
          this.data.next(serverData);
        }
      },
      err => this.data.error(err)
    );
  }
}
