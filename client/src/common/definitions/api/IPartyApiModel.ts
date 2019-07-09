import { IPartyData } from "../union/IPartyData";

export interface IPartyApiModel {
  address: string;
  password?: string;
  data: IPartyData;
  userlist: string[];
  pendingUserlist: string[];
  token: string;
}
