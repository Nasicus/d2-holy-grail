export class Util {
  public static isItem(data: any): boolean {
    return data && (!Object.keys(data).length || data.hasOwnProperty("wasFound"));
  }
}
