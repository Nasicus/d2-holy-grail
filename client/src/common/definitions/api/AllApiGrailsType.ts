import { IHolyGrailData } from "../union/IHolyGrailData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IRunewordGrailApiData } from "./IRunewordGrailApiData";

export type AllApiGrailsType =
  | IHolyGrailData
  | IEthGrailData
  | IRunewordGrailApiData;
