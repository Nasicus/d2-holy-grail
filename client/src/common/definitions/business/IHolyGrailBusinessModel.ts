import { IHolyGrailData } from "../union/IHolyGrailData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IGrailSettings } from "../union/IGrailSettings";
import { IRunewordGrailBusinessData } from "./IRunewordGrailBusinessData";

export interface IHolyGrailBusinessModel {
  address: string;
  password?: string;
  data: IHolyGrailData;
  ethData: IEthGrailData;
  runewordData: IRunewordGrailBusinessData;
  token: string;
  settings: IGrailSettings;
}
