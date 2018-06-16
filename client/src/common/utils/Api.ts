import { Observable, Subscriber } from "rxjs";

export interface IHolyGrailApiModel {
  address: string;
  data: any;
  modified: Date;
}

export interface IRegistration {
  address: string;
  privateKey: string;
}

export class Api {
  private static readonly apiUrl = "/api/grail/";

  public static getGrail(address: string): Observable<IHolyGrailApiModel> {
    return this.fetchToObservable(fetch(Api.apiUrl + address));
  }

  public static updateGrail(address: string, password: string, data: any): Observable<IHolyGrailApiModel> {
    // set the private key to the body
    data.privateKey = password;
    return this.fetchToObservable(
      fetch(Api.apiUrl + address, {
        method: "put",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  public static createGrail(address: string, password: string): Observable<IHolyGrailApiModel> {
    const data: IRegistration = { address, privateKey: password };

    return this.fetchToObservable(
      fetch(Api.apiUrl, {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
    );
  }

  private static fetchToObservable = (fetchPromise: Promise<Response>): Observable<IHolyGrailApiModel> => {
    return Observable.create((observer: Subscriber<IHolyGrailApiModel>) => {
      fetchPromise
        .then(response => {
          if (!response) {
            observer.error({ status: 500, data: null });
            return;
          }

          response.json().then(
            json => {
              if (response.status < 400) {
                observer.next(json);
                observer.complete();
              } else {
                observer.error({ status: response.status, data: json });
              }
            },
            () => observer.error({ status: 500, data: null })
          );
        })
        .catch(err => observer.error({ status: 500, data: err }));
    });
  };
}
