import { IPartyData } from "../union/IPartyData";
import { IPartySettings } from "../union/IPartySettings";

export interface IPartyApiModel {
  address: string;
  password?: string;
  data: IPartyData;
  userlist: string[];
  pendingUserlist: string[];
  token: string;
  settings: IPartySettings;
}
