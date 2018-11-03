import { Observable, Subscriber } from "rxjs";
import { IHolyGrailData } from "../IHolyGrailData";

export interface IHolyGrailApiModel {
  address: string;
  password?: string;
  data: IHolyGrailData;
  token: string;
  settings: IHolyGrailSettings;
}

export interface IHolyGrailSettings {
  useItemCountMode: boolean;
}

export interface IApiResponse<T> {
  status: number;
  data: T;
}

export interface IRegistration {
  address: string;
  password: string;
}

export class Api {
  private static readonly apiUrl = "/api/grail/";

  public static getGrail(address: string): Observable<IApiResponse<IHolyGrailApiModel>> {
    return this.fetchToObservable(fetch(Api.apiUrl + address));
  }

  public static updateGrail(
    address: string,
    password: string,
    token: string,
    grail: IHolyGrailData
  ): Observable<IApiResponse<IHolyGrailApiModel>> {
    return this.fetchToObservable(
      fetch(Api.apiUrl + address, {
        method: "put",
        body: JSON.stringify({ grail, password, token }),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  public static updateSettings(
    address: string,
    password: string,
    token: string,
    settings: IHolyGrailSettings
  ): Observable<IApiResponse<IHolyGrailApiModel>> {
    return this.fetchToObservable(
      fetch(`${Api.apiUrl}${address}/settings`, {
        method: "put",
        body: JSON.stringify({ settings, password, token }),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  public static createGrail(address: string, password: string): Observable<IApiResponse<IHolyGrailApiModel>> {
    const data: IRegistration = { address, password };

    return this.fetchToObservable(
      fetch(Api.apiUrl, {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  private static fetchToObservable = (
    fetchPromise: Promise<Response>
  ): Observable<IApiResponse<IHolyGrailApiModel>> => {
    return Observable.create(async (observer: Subscriber<IApiResponse<IHolyGrailApiModel>>) => {
      try {
        const response = await fetchPromise;
        if (!response) {
          observer.error({ status: 500, data: null });
          return;
        }

        const json = await response.json();
        if (response.status < 400) {
          observer.next({ status: response.status, data: json });
          observer.complete();
        } else {
          observer.error({ status: response.status, data: json });
        }
      } catch (err) {
        observer.error({ status: 500, data: err });
      }
    });
  };
}
