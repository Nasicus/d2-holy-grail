import { IItems } from "./IItems";
import { IUniqueTypes } from "./IUniqueTypes";

export interface IHolyGrailData {
  uniques: IUniqueItems;
  sets: ISetItems;
}

export interface IUniqueItems {
  armor: IUniqueArmors;
  weapons: IUniqueWeapons;
  other: IUniqueOther;
}

export interface IUniqueArmors {
  chest: IUniqueTypes;
  helm: IUniqueTypes;
  circlet: IUniqueTypes;
  gloves: IUniqueTypes;
  belts: IUniqueTypes;
  boots: IUniqueTypes;
  shields: IUniqueTypes;
}

export interface IUniqueWeapons {
  "axe (1-h)": IUniqueTypes;
  "axe (2-h)": IUniqueTypes;
  bow: IUniqueTypes;
  crossbow: IUniqueTypes;
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

export interface IUniqueOther {
  jewelry: IUniqueJewelry;
  charms: IUniqueCharms;
  "rainbow facet (jewel)": IUniqueJewels;
  classes: IUniqueClasses;
}

export interface IUniqueJewelry {
  rings: IItems;
  amulets: IItems;
}

export interface IUniqueCharms {
  all: IItems;
}

export interface IUniqueClasses {
  amazon: IItems;
  assasin: IItems;
  barbarian: IItems;
  druid: IItems;
  necromancer: IItems;
  paladin: IItems;
  sorceress: IItems;
}

export interface IUniqueJewels {
  "level up": IItems;
  die: IItems;
}

export interface ISetItems {
  "Angelic Raiment": IItems;
  "Arcanna's Tricks": IItems;
  "Arctic Gear": IItems;
  "Berserker's Arsenal": IItems;
  "Cathan's Traps": IItems;
  "Civerb's Vestments": IItems;
  "Cleglaw's Brace": IItems;
  "Death's Disguise": IItems;
  "Hsaru's Defense": IItems;
  "Infernal Tools": IItems;
  "Iratha's Finery": IItems;
  "Isenhart's Armory": IItems;
  "Milabrega's Regalia": IItems;
  "Sigon's Complete Steel": IItems;
  "Tancred's Battlegear": IItems;
  "Vidala's Rig": IItems;
  "Aldur's Watchtower": IItems;
  "Bul-Kathos' Children": IItems;
  "Cow King's Leathers": IItems;
  "Griswold's Legacy": IItems;
  "Heaven's Brethren": IItems;
  "Hwanin's Majesty": IItems;
  "Immortal King": IItems;
  "M'avina's Battle Hymn": IItems;
  "Naj's Ancient Vestige": IItems;
  "Natalya's Odium": IItems;
  "Orphan's Call": IItems;
  "Sander's Folly": IItems;
  "Sazabi's Grand Tribute": IItems;
  "Tal Rasha's Wrappings": IItems;
  "The Disciple": IItems;
  "Trang-Oul's Avatar": IItems;
}
