import { IGrailData } from "../../common/definitions/api/IGrailData";

export interface IGrailError {
  status: number;
  type: string;
  serverToken?: string;
  localToken?: string;
  serverData?: IGrailData;
}
