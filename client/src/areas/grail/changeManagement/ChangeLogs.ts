export type ChangeLogCollection = { [version: string]: (string | { change: string; children: string[] })[] };

export const changeLogs: ChangeLogCollection = {
  "1.7.0": [
    {
      change: `Improve the 'Missing items' functionality":`,
      children: [
        "Add a checkbox 'Missing items only' (if the checkbox is checked, then in each tab only the missing items are shown)",
        "Remove the missing items tab (rendering was ugly there)"
      ]
    }
  ],
  "1.6.0": [
    {
      change: `Introduce "Perfect Grails":`,
      children: [
        "Click on an item to mark it as perfect",
        "Perfect items are displayed with a start right next to it",
        "Perfect items are contained in the statistics table",
        "Perfect items can be found by searching for 'perfect'"
      ]
    }
  ],
  "1.5.0": [
    {
      change: `Introduce the "Runeword Grail":`,
      children: [
        "Switch to it by clicking the icon on the right side",
        "You can search for a combination of runes and it will find the corresponding runeword (try 'Jah Ber' or 'Shael' for example)",
        "You can also search for 'Armor', 'Weapons', 'Headgear', 'Shields' etc. to list all runewords of a type",
        "You can also search for the number of sockets, e.g. 5"
      ]
    }
  ],
  "1.4.0": [{ change: `Introduce keyboard shortcuts:`, children: ["Save: CTRL + S", "Search: CTRL + F"] }],
  "1.3.0": [`Introduce "Notes for items" (click on an item name to add notes)`],
  "1.2.0": [`Introduce "Eth Grail" (toggable via button and from the sidebar)`],
  "1.1.0": [
    `Introduce "Settings" (can be found in the sidebar)`,
    `Introduce "Item Counter" mode (can be found in Settings)`
  ]
};
