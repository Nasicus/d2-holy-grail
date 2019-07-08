export interface IParty {
  address: string;
  password: string;
  token: string;
  created: Date;
  modified: Date;
  userlist?: any;
  pendingUserlist?: any;
}
