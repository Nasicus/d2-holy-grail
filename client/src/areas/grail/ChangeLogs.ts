export type ChangeLogCollection = { [version: string]: string[] };

export const changeLogs: ChangeLogCollection = {
  "1.1.0": [
    `Introduce "Settings" (can be found in the sidebar)`,
    `Introduce "Item Counter" mode (can be found in Settings)`
  ]
};
