import { ILeaderboardData } from "./ILeaderboardData";
import { ILeaderboardSettings } from "./ILeaderboardSettings";
import { ILeaderboardUserData } from "./ILeaderboardUserData";

export interface ILeaderboardAreaData {
  address: string;
  password?: string;
  data: ILeaderboardData;
  users: ILeaderboardUserData;
  token: string;
  settings: ILeaderboardSettings;
}
