export type ChangeLogCollection = { [version: string]: string[] };

export const changeLogs: ChangeLogCollection = {
  "1.2.0": [`Introduce "Eth Grail" (toggable via button and from the sidebar)`],
  "1.1.0": [
    `Introduce "Settings" (can be found in the sidebar)`,
    `Introduce "Item Counter" mode (can be found in Settings)`
  ]
};
