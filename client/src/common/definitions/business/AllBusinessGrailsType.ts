import { IHolyGrailData } from "../union/IHolyGrailData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IRunewordGrailBusinessData } from "./IRunewordGrailBusinessData";

export type AllBusinessGrailsType =
  | IHolyGrailData
  | IEthGrailData
  | IRunewordGrailBusinessData;
