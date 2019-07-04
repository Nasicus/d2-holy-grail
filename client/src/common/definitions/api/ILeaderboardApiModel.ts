import { ILeaderboardData } from "../union/ILeaderboardData";
import { ILeaderboardSettings } from "../union/ILeaderboardSettings";

export interface ILeaderboardApiModel {
  address: string;
  password?: string;
  data: ILeaderboardData;
  userlist: string[];
  pendingUserlist: string[];
  token: string;
  settings: ILeaderboardSettings;
}
