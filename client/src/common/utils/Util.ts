import { Item } from "../definitions/union/Item";
import { Runeword } from "../definitions/business/Runeword";
import { AllBusinessGrailsType } from "../definitions/business/AllBusinessGrailsType";

export class Util {
  public static isItem(data: any): boolean {
    const itemProto = new Item();
    return (
      data &&
      typeof data === "object" &&
      (data instanceof Runeword ||
        (!Object.keys(data).length || Object.keys(itemProto).some(k => data.hasOwnProperty(k))))
    );
  }

  public static findData(
    isMatch: (key: string, value: any) => boolean,
    dataToSearch: any,
    dataResultFunc?: () => any
  ): Partial<AllBusinessGrailsType> {
    if (!dataToSearch) {
      return null;
    }

    let resultObj = {};
    if (!dataResultFunc) {
      resultObj = {};
      dataResultFunc = () => resultObj;
    }

    if (typeof dataToSearch !== "object" || dataToSearch instanceof Array || Util.isItem(dataToSearch)) {
      return resultObj;
    }

    Object.keys(dataToSearch).forEach(key => {
      const subData = dataToSearch[key];
      if (isMatch(key, subData)) {
        dataResultFunc()[key] = subData;
      } else {
        this.findData(isMatch, subData, () => {
          const parentObj = dataResultFunc();
          return parentObj[key] || (parentObj[key] = {});
        });
      }
    });

    return resultObj;
  }

  public static toggleData(markAsFound: boolean, data: any) {
    if (!data) {
      return;
    }

    if (!Util.isItem(data)) {
      Object.keys(data).forEach(k => this.toggleData(markAsFound, data[k]));
      return;
    }

    const item = data as Item;
    if (!markAsFound && item.wasFound) {
      item.wasFound = 0;
    } else if (markAsFound && !item.wasFound) {
      item.wasFound = 1;
    }
  }

  public static capitalize(value: string) {
    if (!value) {
      return value;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
