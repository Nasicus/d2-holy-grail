import { Item } from "../IHolyGrailData";

export class Util {
  public static isItem(data: any): boolean {
    const itemProto = new Item();
    return data && (!Object.keys(data).length || Object.keys(itemProto).some(k => data.hasOwnProperty(k)));
  }
}
