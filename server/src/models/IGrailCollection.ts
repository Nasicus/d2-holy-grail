export interface IGrailCollection {
  address: string;
  password: string;
  token: string;
  version: string;
  created: Date;
  modified: Date;
  updateCount: number;
  data?: any;
  ethData?: any;
  runewordData?: any;
  partyData?: any;
  settings?: any;
}
