import { Api } from "../../common/utils/Api";
import { ILeaderboardApiModel } from "../../common/definitions/api/ILeaderboardApiModel";
import { LocalStorageHandler } from "../../common/utils/LocalStorageHandler";
import { Observable, ReplaySubject, Subscriber } from "rxjs";
import { ILeaderboardError } from "./ILeaderboardError";
import { ILeaderboardData } from "../../common/definitions/union/ILeaderboardData";
import { ILeaderboardSettings } from "../../common/definitions/union/ILeaderboardSettings";
import { ILeaderboardUserData } from "../../common/definitions/union/ILeaderboardUserData";
import { ILeaderboardAreaData } from "../../common/definitions/union/ILeaderboardAreaData";

export class LeaderboardManager {
  public static get current(): LeaderboardManager {
    return this._current;
  }
  private static _current: LeaderboardManager;

  private leaderboardData: ILeaderboardAreaData;
  private leaderboardLocalStorage: LocalStorageHandler<ILeaderboardAreaData>;
  private hasLocalChangesStorage: LocalStorageHandler<boolean>;

  private dataInitializer = new ReplaySubject<void>(1);

  private hasLocalChanges = new ReplaySubject<boolean>(1);
  public hasLocalChanges$ = this.hasLocalChanges.asObservable();

  private constructor(
    public readonly address: string,
    private password?: string,
    savePassword?: boolean
  ) {
    if (!address) {
      throw new Error("Address must be specified");
    }

    this.leaderboardLocalStorage = new LocalStorageHandler(
      `leaderboard-${this.address}`
    );
    this.hasLocalChangesStorage = new LocalStorageHandler(
      `leaderboard-hasLocalChanges-${this.address}`
    );
    this.hasLocalChanges.next(this.hasLocalChangesStorage.getValue());

    this.setPassword(savePassword);
    this.initializeLeaderboardData();
  }

  public static createInstance(
    address: string,
    password?: string,
    savePassword?: boolean
  ): LeaderboardManager {
    return (this._current = new LeaderboardManager(
      address,
      password,
      savePassword
    ));
  }

  public get leaderboard(): ILeaderboardData {
    return this.leaderboardData.data;
  }

  public get users(): ILeaderboardUserData {
    return this.leaderboardData.users;
  }

  public get isReadOnly(): boolean {
    return !this.password;
  }

  public get settings(): ILeaderboardSettings {
    return this.leaderboardData.settings;
  }

  private updateLocaleStorage = (
    data: ILeaderboardAreaData,
    hasLocalChanges: boolean
  ) => {
    this.leaderboardLocalStorage.setValue(data);
    this.hasLocalChangesStorage.setValue(hasLocalChanges);
    this.hasLocalChanges.next(hasLocalChanges);
  };

  public updateCache = () => {
    const cachedData = this.leaderboardLocalStorage.getValue();
    cachedData.data = this.leaderboardData.data;
    cachedData.users = this.leaderboardData.users;
    this.updateLocaleStorage(cachedData, true);
  };

  public discardCache = () => {
    this.updateLocaleStorage(null, false);
  };

  public initialize(): Observable<void> {
    return this.dataInitializer.asObservable();
  }

  private setPassword(savePassword?: boolean) {
    const passwordLocalStorageHandler = new LocalStorageHandler<string>(
      `leaderboard-password-${this.address}`
    );
    if (!this.password) {
      this.password = passwordLocalStorageHandler.getValue();
    } else if (savePassword) {
      passwordLocalStorageHandler.setValue(this.password);
    }
  }

  public updateUserlistOnServer = (): Observable<void> => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.updateUsersForLeaderboard(
        this.address,
        this.password,
        this.leaderboardData.token,
        this.leaderboardData.users.acceptedUserlist,
        this.leaderboardData.users.deniedUserlist,
        this.leaderboardData.users.removedUserlist,
        this.leaderboardData.users.userlist
      ).subscribe(
        response => {
          // update with latest leaderboard data
          this.updateLocaleStorage(
            this.convertToAreaData(response.data),
            false
          );
          this.leaderboardData.data = response.data.data;
          this.leaderboardData.token = response.data.token;
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  public signupUserToLeaderboard = (
    userAddress: string,
    userPassword: string
  ) => {
    return Observable.create((observer: Subscriber<void>) => {
      Api.addUserToLeaderboard(
        this.address,
        userAddress,
        userPassword
      ).subscribe(
        response => {
          observer.next();
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  };

  private convertToAreaData = (
    data: ILeaderboardApiModel
  ): ILeaderboardAreaData => {
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
      Api.getLeaderboard(this.address).subscribe(
        response => {
          const apiData = this.convertToAreaData(response.data);
          // Always take the API data over local data
          this.leaderboardLocalStorage.setValue(apiData);
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

  private initializeLeaderboardData() {
    const cachedData = this.leaderboardLocalStorage.getValue();
    if (cachedData) {
      this.emitData(cachedData);
    }
    this.getApiDataAndEmit().subscribe(
      () => {
        // Dont need to do anything
      },
      err => {
        this.dataInitializer.error(err as ILeaderboardError);
      }
    );
  }

  private emitData(data: ILeaderboardAreaData) {
    if (!data.data) {
      data.data = {
        users: []
      };
    }

    if (!data.users) {
      data.users = {
        userlist: [],
        pendingUserlist: [],
        acceptedUserlist: [],
        deniedUserlist: [],
        removedUserlist: []
      };
    }

    if (!data.users.userlist) {
      data.users.userlist = [];
    }

    if (!data.users.pendingUserlist) {
      data.users.pendingUserlist = [];
    }

    if (!data.users.acceptedUserlist) {
      data.users.acceptedUserlist = [];
    }

    if (!data.users.deniedUserlist) {
      data.users.deniedUserlist = [];
    }

    if (!data.users.removedUserlist) {
      data.users.removedUserlist = [];
    }

    if (!data.settings) {
      data.settings = {} as any;
    }
    this.leaderboardData = data;
    this.dataInitializer.next();
  }
}
