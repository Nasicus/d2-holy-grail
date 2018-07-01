export class LocalStorageHandler<T> {
  public constructor(private key: string) {}

  public getValue = (): T => {
    return LocalStorageHandler.getValue(this.key) as T;
  };

  public setValue = (value: T): void => {
    LocalStorageHandler.setValue(this.key, value);
  };

  public static getValue<T>(key: string): T {
    const storageData = localStorage.getItem(key);
    if (!storageData) {
      return null;
    }

    return JSON.parse(storageData);
  }

  public static setValue<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
