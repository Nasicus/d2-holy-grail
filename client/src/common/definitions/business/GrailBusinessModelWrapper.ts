import { IHolyGrailBusinessModel } from "./IHolyGrailBusinessModel";
import { IHolyGrailApiModel } from "../api/IHolyGrailApiModel";
import { IGrailSettings } from "../union/IGrailSettings";
import { IRunewordGrailBusinessData } from "./IRunewordGrailBusinessData";
import { IEthGrailData } from "../union/IEthGrailData";
import { IHolyGrailData } from "../union/IHolyGrailData";
import { runewordGrailDefinitions } from "./RunewordGrailDefinitions";
import { Runeword } from "./Runeword";

export class GrailBusinessModelWrapper implements IHolyGrailBusinessModel {
  public get address(): string {
    return this._data.address;
  }
  public get password(): string {
    return this._data.password;
  }
  public get data(): IHolyGrailData {
    return this._data.data;
  }
  public get ethData(): IEthGrailData {
    return this._data.ethData;
  }

  public get settings(): IGrailSettings {
    return this._data.settings;
  }
  public get token(): string {
    return this._data.token;
  }

  public readonly runewordData: IRunewordGrailBusinessData;

  constructor(private _data: IHolyGrailApiModel) {
    this.runewordData = {};
    if (_data.runewordData) {
      Object.keys(_data.runewordData).forEach(
        k =>
          (this.runewordData[k] = new Runeword(
            runewordGrailDefinitions[k],
            _data.runewordData[k]
          ))
      );
    }
  }
}
