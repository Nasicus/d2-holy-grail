import { IPartyData } from "../../common/definitions/union/IPartyData";

export interface IPartyError {
  status: number;
  type: string;
  serverToken?: string;
  localToken?: string;
  serverData?: IPartyData;
}
