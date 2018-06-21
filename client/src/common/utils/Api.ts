import { Observable, Subscriber } from "rxjs";

export interface IHolyGrailApiModel {
  address: string;
  password?: string;
  data: any;
  token: string;
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
    data: IHolyGrailApiModel
  ): Observable<IApiResponse<IHolyGrailApiModel>> {
    // set the password to the body
    data.password = password;
    return this.fetchToObservable(
      fetch(Api.apiUrl + address, {
        method: "put",
        body: JSON.stringify(data),
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
    return Observable.create((observer: Subscriber<IApiResponse<IHolyGrailApiModel>>) => {
      fetchPromise
        .then(response => {
          if (!response) {
            observer.error({ status: 500, data: null });
            return;
          }

          response.json().then(
            json => {
              if (response.status < 400) {
                observer.next({ status: response.status, data: json });
                observer.complete();
              } else {
                observer.error({ status: response.status, data: json });
              }
            },
            () => observer.error({ status: 500, data: null })
          );
        })
        .catch(err => observer.error({ status: 500, message: err }));
    });
  };
}
