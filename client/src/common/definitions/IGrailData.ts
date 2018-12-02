import { IEthGrailData } from "./IEthGrailData";
import { IHolyGrailData } from "./IHolyGrailData";

export interface IGrailData {
  grailData: IHolyGrailData;
  ethData: IEthGrailData;
}
