export type ChangeLogCollection = {
  [version: string]: (string | { change: string; children: string[] })[];
};

export const changeLogs: ChangeLogCollection = {
  "1.10.0": [
    `Split Rainbow Facets into "Level Up" and "Die" category (now 506 instead of 502 Holy Grail Items are needed)`
  ],
  "1.9.0": [
    {
      change: `Sharing just got way better! Now whenever you click on something it will update the URL in your browser and you can directly point a friend to a specific place or refresh the page without losing context. Some examples:`,
      children: [
        "Link directly to Unique Armors: https://d2-holy-grail.herokuapp.com/Nasicus/holy/unique-armor",
        "Link directly to the search for the runeword 'Enigma': http://d2-holy-grail.herokuapp.com/Nasicus/runeword/search?q=Enigma",
        "Link which directly opens the item 'TombReaver: http://d2-holy-grail.herokuapp.com/Nasicus/holy/unique-weapons?itemName=Tomb%20Reaver"
      ]
    }
  ],
  "1.8.0": [
    {
      change: `Add stats / props for all items and runewords:`,
      children: [
        "Click to an item or runeword to see its stats!",
        "There are probably still a lot of errors => report them to me on Discord or via Github!",
        "Item Infos taken from: http://www.d2tomb.com/",
        "Runeword Infos taken from: https://diablo2.diablowiki.net/Runewords"
      ]
    }
  ],
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
  "1.4.0": [
    {
      change: `Introduce keyboard shortcuts:`,
      children: ["Save: CTRL + S", "Search: CTRL + F"]
    }
  ],
  "1.3.0": [`Introduce "Notes for items" (click on an item name to add notes)`],
  "1.2.0": [`Introduce "Eth Grail" (toggable via button and from the sidebar)`],
  "1.1.0": [
    `Introduce "Settings" (can be found in the sidebar)`,
    `Introduce "Item Counter" mode (can be found in Settings)`
  ]
};
