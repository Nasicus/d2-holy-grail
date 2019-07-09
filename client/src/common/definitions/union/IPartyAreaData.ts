import { IPartyData } from "./IPartyData";
import { IPartyUserData } from "./IPartyUserData";

export interface IPartyAreaData {
  address: string;
  password?: string;
  data: IPartyData;
  users: IPartyUserData;
  token: string;
}
