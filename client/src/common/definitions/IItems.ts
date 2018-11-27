export interface IItems {
  [itemName: string]: Item;
}

export class Item {
  public note?: string;
  public constructor(public wasFound?: number) {}
}
