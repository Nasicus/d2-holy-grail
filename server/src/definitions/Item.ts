import { IItem } from "./IItem";

export class Item implements IItem {
  public constructor(
    public wasFound?: number,
    public note?: string,
    public isPerfect?: boolean
  ) {}
}
