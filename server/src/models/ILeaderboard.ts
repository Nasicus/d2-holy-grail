export interface ILeaderboard {
  address: string;
  password: string;
  token: string;
  created: Date;
  modified: Date;
  updateCount: number;
  userlist?: any;
  pendingUserlist?: any;
  data?: any;
  settings?: any;
}
