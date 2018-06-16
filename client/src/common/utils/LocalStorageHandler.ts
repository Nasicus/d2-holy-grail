export class LocalStorageHandler {
  public constructor(private key: string) {}

  public getValue = (): any => {
    return LocalStorageHandler.getValue(this.key);
  };

  public setValue = (value: any): void => {
    LocalStorageHandler.setValue(this.key, value);
  };

  public static getValue(key: string): any {
    const storageData = localStorage.getItem(key);
    if (!storageData) {
      return null;
    }

    return JSON.parse(storageData);
  }

  public static setValue(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
