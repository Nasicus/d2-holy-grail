import { IItems } from "./IItems";
import { IUniqueTypes } from "./IUniqueTypes";

export interface IEthGrailData {
  uniques: IEthUniqueItems;
}

export interface IEthUniqueItems {
  armor: IEthUniqueArmors;
  weapons: IEthUniqueWeapons;
  other: IEthUniqueOther;
}

export interface IEthUniqueArmors {
  chest: IUniqueTypes;
  helm: IUniqueTypes;
  circlet: IUniqueTypes;
  gloves: IUniqueTypes;
  belts: IUniqueTypes;
  boots: IUniqueTypes;
  shields: IUniqueTypes;
}

export interface IEthUniqueWeapons {
  "axe (1-h)": IUniqueTypes;
  "axe (2-h)": IUniqueTypes;
  dagger: IUniqueTypes;
  "clubs (1-h)": IUniqueTypes;
  "clubs (2-h)": IUniqueTypes;
  polearms: IUniqueTypes;
  scepters: IUniqueTypes;
  spears: IUniqueTypes;
  staves: IUniqueTypes;
  "swords (1-h)": IUniqueTypes;
  "swords (2-h)": IUniqueTypes;
  wands: IUniqueTypes;
  throwing: IUniqueTypes;
}

export interface IEthUniqueOther {
  classes: IEthUniqueClasses;
}

export interface IEthUniqueClasses {
  amazon: IItems;
  assasin: IItems;
  barbarian: IItems;
  druid: IItems;
  necromancer: IItems;
  paladin: IItems;
  sorceress: IItems;
}
