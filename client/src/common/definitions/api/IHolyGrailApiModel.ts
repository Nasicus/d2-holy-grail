import { IHolyGrailData } from "../union/IHolyGrailData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IRunewordGrailApiData } from "./IRunewordGrailApiData";
import { IGrailSettings } from "../union/IGrailSettings";

export interface IHolyGrailApiModel {
  address: string;
  password?: string;
  data: IHolyGrailData;
  ethData: IEthGrailData;
  runewordData: IRunewordGrailApiData;
  token: string;
  settings: IGrailSettings;
  version?: string;
}
