import { IHolyGrailData } from "../union/IHolyGrailData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IRunewordGrailApiData } from "./IRunewordGrailApiData";
import { IHolyGrailSettings } from "../union/IHolyGrailSettings";

export interface IHolyGrailApiModel {
  address: string;
  password?: string;
  data: IHolyGrailData;
  ethData: IEthGrailData;
  runewordData: IRunewordGrailApiData;
  token: string;
  settings: IHolyGrailSettings;
}
