export interface IParty {
  address: string;
  password: string;
  token: string;
  created: Date;
  modified: Date;
  updateCount: number;
  userlist?: any;
  pendingUserlist?: any;
}
