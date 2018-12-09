import { Observable, Subscriber } from "rxjs";
import { IHolyGrailData } from "../definitions/union/IHolyGrailData";
import { IEthGrailData } from "../definitions/union/IEthGrailData";
import { IRunewordGrailApiData } from "../definitions/api/IRunewordGrailApiData";
import { IHolyGrailApiModel } from "../definitions/api/IHolyGrailApiModel";
import { IGrailSettings } from "../definitions/union/IGrailSettings";

export interface IApiResponse<T> {
  status: number;
  data: T;
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
    grail: IHolyGrailData,
    ethGrail: IEthGrailData,
    runewordGrail: IRunewordGrailApiData
  ): Observable<IApiResponse<IHolyGrailApiModel>> {
    return this.fetchToObservable(
      fetch(Api.apiUrl + address, {
        method: "put",
        body: JSON.stringify({ grail, ethGrail, runewordGrail, password, token }),
        headers: { "Content-Type": "application/json" }
      })
    );
  }
  public static updateSettings(
    address: string,
    password: string,
    token: string,
    settings: IGrailSettings
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
    return this.fetchToObservable(
      fetch(Api.apiUrl, {
        method: "post",
        body: JSON.stringify({ address, password }),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  public static validatePassword(address: string, password: string): Observable<IApiResponse<boolean>> {
    return this.fetchToObservable(
      fetch(`${Api.apiUrl}${address}/password/validate`, {
        method: "put",
        body: JSON.stringify({ password }),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  private static fetchToObservable = <T>(fetchPromise: Promise<Response>): Observable<IApiResponse<T>> => {
    return Observable.create(async (observer: Subscriber<IApiResponse<T>>) => {
      try {
        const response = await fetchPromise;
        if (!response) {
          observer.error({ status: 500, data: undefined });
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
