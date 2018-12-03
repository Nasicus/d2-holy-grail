import { IEthGrailData } from "../union/IEthGrailData";
import { IHolyGrailData } from "../union/IHolyGrailData";
import { IRunewordGrailApiData } from "./IRunewordGrailApiData";

export interface IGrailData {
  grailData: IHolyGrailData;
  ethData: IEthGrailData;
  runewordData: IRunewordGrailApiData;
}
