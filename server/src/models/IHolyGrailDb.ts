export interface IHolyGrailDb {
  address: string;
  password: string;
  token: string;
  created: Date;
  modified: Date;
  updateCount: number;
  data?: any;
  ethData?: any;
  settings?: any;
}
