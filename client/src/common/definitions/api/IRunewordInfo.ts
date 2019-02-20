import { ItemCategory } from "./ItemCategory";

export interface IRunewordInfo {
  props: (string | { description: string; props: string[] })[];
  category: ItemCategory;
  sockets: number;
  runes: string[];
  detailTypes: string[];
}
