import { IHolyGrailBusinessModel } from "../../common/definitions/business/IHolyGrailBusinessModel";
import { IHolyGrailApiModel } from "../../common/definitions/api/IHolyGrailApiModel";
import { IHolyGrailSettings } from "../../common/definitions/union/IHolyGrailSettings";
import { IRunewordGrailBusinessData } from "../../common/definitions/business/IRunewordGrailBusinessData";
import { IEthGrailData } from "../../common/definitions/union/IEthGrailData";
import { IHolyGrailData } from "../../common/definitions/union/IHolyGrailData";
import { runewordGrailDefinitions } from "../../common/definitions/business/RunewordGrailDefinitions";
import { Runeword } from "../../common/definitions/business/Runeword";

export class HolyGrailBusinessModelWrapper implements IHolyGrailBusinessModel {
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

  public get settings(): IHolyGrailSettings {
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
        k => (this.runewordData[k] = new Runeword(runewordGrailDefinitions[k], _data.runewordData[k]))
      );
    }
  }
}
