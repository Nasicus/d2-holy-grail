import { IHolyGrailData, Item } from "../IHolyGrailData";

export class Util {
  public static isItem(data: any): boolean {
    const itemProto = new Item();
    return (
      data &&
      typeof data === "object" &&
      (!Object.keys(data).length || Object.keys(itemProto).some(k => data.hasOwnProperty(k)))
    );
  }

  public static getMissingItems(data: IHolyGrailData): Partial<IHolyGrailData> {
    return this.findData((k, d) => this.isItem(d) && !d.wasFound, data);
  }

  public static findData(
    condition: (key: string, value: any) => boolean,
    dataToSearch: any,
    dataResultFunc?: () => any
  ): Partial<IHolyGrailData> {
    if (!dataToSearch) {
      return null;
    }

    let resultObj = {};
    if (!dataResultFunc) {
      resultObj = {};
      dataResultFunc = () => resultObj;
    }

    Object.keys(dataToSearch).forEach(key => {
      const subData = dataToSearch[key];
      if (condition(key, subData)) {
        dataResultFunc()[key] = subData;
      } else {
        this.findData(condition, subData, () => {
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
      item.wasFound = false;
    } else if (markAsFound && !item.wasFound) {
      item.wasFound = true;
    }
  }
}
