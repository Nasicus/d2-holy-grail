import { IHolyGrailData } from "../union/IHolyGrailData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IHolyGrailSettings } from "../union/IHolyGrailSettings";
import { IRunewordGrailBusinessData } from "./IRunewordGrailBusinessData";

export interface IHolyGrailBusinessModel {
  address: string;
  password?: string;
  data: IHolyGrailData;
  ethData: IEthGrailData;
  runewordData: IRunewordGrailBusinessData;
  token: string;
  settings: IHolyGrailSettings;
}
