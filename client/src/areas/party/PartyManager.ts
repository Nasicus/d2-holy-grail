import { Api } from "../../common/utils/Api";
import { IPartyApiModel } from "../../common/definitions/api/IPartyApiModel";
import { LocalStorageHandler } from "../../common/utils/LocalStorageHandler";
import { Observable, ReplaySubject, Subscriber } from "rxjs";
import { IPartyError } from "./IPartyError";
import { IPartyData } from "../../common/definitions/union/IPartyData";
import { IPartySettings } from "../../common/definitions/union/IPartySettings";
import { IPartyUserData } from "../../common/definitions/union/IPartyUserData";
import { IPartyAreaData } from "../../common/definitions/union/IPartyAreaData";

export class PartyManager {
  public static get current(): PartyManager {
    return this._current;
  }
  private static _current: PartyManager;

  private partyData: IPartyAreaData;
  private partyLocalStorage: LocalStorageHandler<IPartyAreaData>;
  private dataInitializer = new ReplaySubject<void>(1);

  private constructor(
    public readonly address: string,
    private password?: string,
    savePassword?: boolean
  ) {
    if (!address) {
      throw new Error("Address must be specified");
    }

    this.partyLocalStorage = new LocalStorageHandler(`party-${this.address}`);

    this.setPassword(savePassword);
    this.initializePartyData();
  }

  public static createInstance(
    address: string,
    password?: string,
    savePassword?: boolean
  ): PartyManager {
    return (this._current = new PartyManager(address, password, savePassword));
  }

  public get party(): IPartyData {
    return this.partyData.data;
  }

  public get users(): IPartyUserData {
    return this.partyData.users;
  }

  public get isReadOnly(): boolean {
    return !this.password;
  }

  public get settings(): IPartySettings {
    return this.partyData.settings;
  }

  private updateLocaleStorage = (data: IPartyAreaData) => {
    this.partyLocalStorage.setValue(data);
  };

  public updateCache = () => {
    const cachedData = this.partyLocalStorage.getValue();
    cachedData.data = this.partyData.data;
    cachedData.users = this.partyData.users;
    this.updateLocaleStorage(cachedData);
  };

  public discardCache = () => {
    this.updateLocaleStorage(null);
  };

  public initialize(): Observable<void> {
    return this.dataInitializer.asObservable();
  }

  private setPassword(savePassword?: boolean) {
    const passwordLocalStorageHandler = new LocalStorageHandler<string>(
      `party-password-${this.address}`
    );
    if (!this.password) {
      this.password = passwordLocalStorageHandler.getValue();
    } else if (savePassword) {
      passwordLocalStorageHandler.setValue(this.password);
    }
  }

  public modifyPartyUser = (
    user: string,
    method: string
  ): Observable<IPartyAreaData> => {
    return Observable.create((observer: Subscriber<IPartyAreaData>) => {
      Api.modifyPartyUser(
        this.address,
        this.password,
        this.partyData.token,
        user,
        method
      ).subscribe(
        response => {
          // update with latest party data
          const areaData = this.convertToAreaData(response.data);
          this.updateLocaleStorage(areaData);
          this.emitData(areaData);
          observer.next(areaData);
          observer.complete();
        },
        err => {
          observer.error(err);
        }
      );
    });
  };

  public signupUserToParty = (userAddress: string) => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.addUserToParty(this.address, userAddress).subscribe(
        response => {
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  private convertToAreaData = (data: IPartyApiModel): IPartyAreaData => {
    const users = {
      userlist: data.userlist,
      pendingUserlist: data.pendingUserlist,
      resolvedUserlist: [],
      removedUserlist: []
    };
    const areaData = {
      address: data.address,
      password: data.password,
      token: data.token,
      users: users,
      data: data.data,
      settings: data.settings
    };
    return areaData;
  };

  public refreshData = (): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      this.discardCache();
      this.getApiDataAndEmit().subscribe(
        res => {
          observer.next();
          observer.complete();
        },
        err => {
          observer.error(err);
        }
      );
    });
  };

  private getApiDataAndEmit = (): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.getParty(this.address).subscribe(
        response => {
          const apiData = this.convertToAreaData(response.data);
          // Always take the API data over local data
          this.partyLocalStorage.setValue(apiData);
          this.emitData(apiData);
          observer.next();
          observer.complete();
        },
        err => {
          observer.error(err);
        }
      );
    });
  };

  private initializePartyData() {
    const cachedData = this.partyLocalStorage.getValue();
    if (cachedData) {
      this.emitData(cachedData);
    }
    this.getApiDataAndEmit().subscribe(
      () => {
        // Dont need to do anything
      },
      err => {
        this.dataInitializer.error(err as IPartyError);
      }
    );
  }

  private emitData(data: IPartyAreaData) {
    if (!data.data) {
      data.data = {
        users: []
      };
    }

    if (!data.users) {
      data.users = {
        userlist: [],
        pendingUserlist: []
      };
    }

    if (!data.users.userlist) {
      data.users.userlist = [];
    }

    if (!data.users.pendingUserlist) {
      data.users.pendingUserlist = [];
    }

    if (!data.settings) {
      data.settings = {} as any;
    }
    this.partyData = data;
    this.dataInitializer.next();
  }
}
