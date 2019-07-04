import { ILeaderboardData } from "../../common/definitions/union/ILeaderboardData";

export interface ILeaderboardError {
  status: number;
  type: string;
  serverToken?: string;
  localToken?: string;
  serverData?: ILeaderboardData;
}
