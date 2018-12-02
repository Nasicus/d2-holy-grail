export type ChangeLogCollection = { [version: string]: (string | { change: string; children: string[] })[] };

export const changeLogs: ChangeLogCollection = {
  "1.4.0": [{ change: `Introduce keyboard shortcuts:`, children: ["Save: CTRL + S", "Search: CTRL + F"] }],
  "1.3.0": [`Introduce "Notes for items" (click on an item name to add notes)`],
  "1.2.0": [`Introduce "Eth Grail" (toggable via button and from the sidebar)`],
  "1.1.0": [
    `Introduce "Settings" (can be found in the sidebar)`,
    `Introduce "Item Counter" mode (can be found in Settings)`
  ]
};
