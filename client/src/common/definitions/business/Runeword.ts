import { IItem } from "../union/IItem";
import { IRunewordDefinition } from "./IRunewordDefinition";

export class Runeword implements IItem, IRunewordDefinition {
  private _item: IItem;

  public runes: string[];
  public types: string[];
  public detailTypes: string[];
  public sockets: number;

  public get wasFound(): number {
    return this._item.wasFound;
  }

  public set wasFound(value: number) {
    this._item.wasFound = value;
  }

  public get note(): string {
    return this._item.note;
  }

  public set note(value: string) {
    this._item.note = value;
  }

  public get isPerfect(): boolean {
    return this._item.isPerfect;
  }

  public set isPerfect(value: boolean) {
    this._item.isPerfect = value;
  }

  public constructor(runewordDefinition: IRunewordDefinition, item: IItem) {
    this.runes = runewordDefinition.runes;
    this.types = runewordDefinition.types;
    this.detailTypes = runewordDefinition.detailTypes;
    this.sockets = runewordDefinition.sockets;

    this._item = item;
  }
}
