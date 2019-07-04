export interface ILeaderboardData {
  users?: IUserData[];
}

export interface IUserData {
  username: string;
  data: IUserGrailData;
}

export interface IUserGrailData {
  uniqueArmor?: ILBStatsData;
  uniqueWeapons?: ILBStatsData;
  uniqueOther?: ILBStatsData;
  sets?: ILBStatsData;
  itemScore?: number;
}

export interface ILBStatsData {
  missing: number;
}
