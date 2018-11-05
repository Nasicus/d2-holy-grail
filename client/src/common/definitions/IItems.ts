export interface IItems {
  [itemName: string]: Item;
}

export class Item {
  public constructor(public wasFound?: number) {}
}
