// Uniques & Set Item Infos taken from: http://www.d2tomb.com/ => all credits to this site
// Runeword Infos taken from https://diablo2.diablowiki.net/Runewords => all credits to this site
const uniqueItems = {
  Greyform: {
    name: "Greyform",
    type: "Quilted Armor",
    image: "uniques/greyform.gif",
    props: [
      "Defense: 28-31",
      "Durability: 20",
      "Req Strength: 12",
      "Req Level: 7",
      "5% Life Stolen per Hit",
      "Magic damage reduced by 3",
      "Cold resist 20%",
      "Fire resist 20%",
      "+20 to Defense",
      "+10 to Dexterity"
    ],
    category: "Unique Armor"
  },
  "Blinkbat's Form": {
    name: "Blinkbat's Form",
    type: "Leather Armor",
    image: "uniques/blinkbatsform.gif",
    props: [
      "Defense: 39-42",
      "Durability: 24",
      "Req Strength: 15",
      "Req Level: 12",
      "10% Faster Run/Walk",
      "Add 3-6 Fire Damage",
      "40% Faster Hit Recovery",
      "+50 Defense vs. missles",
      "+25 Defense"
    ],
    category: "Unique Armor"
  },
  "The Centurion": {
    name: "The Centurion",
    type: "Hard Leather Armor",
    image: "uniques/thecenturion.gif",
    props: [
      "Defense: 51-54",
      "Durability: 28",
      "Req Strength: 20",
      "Req Level: 14",
      "Damage reduced by 2",
      "+30 Defense",
      "Replenish Life +5",
      "+50 to Attack Rating",
      "25% Slower Stamina Drain",
      "+15 to Mana",
      "+15 to max Stamina",
      "+15 to Life"
    ],
    category: "Unique Armor"
  },
  Twitchthroe: {
    name: "Twitchthroe",
    type: "Studded Leather",
    image: "uniques/twitchthroe.gif",
    props: [
      "Defense: 57-60",
      "Durability: 32",
      "Req Strength: 27",
      "Req Level: 16",
      "25% increased chance of blocking",
      "20% Faster Hit Recovery",
      "20% Increased Attack Speed",
      "+25 to Defense",
      "+10 to Dexterity",
      "+10 to Strength"
    ],
    category: "Unique Armor"
  },
  Darkglow: {
    name: "Darkglow",
    type: "Ring Mail",
    image: "uniques/darkglow.gif",
    props: [
      "Defense: 83-98",
      "Durability: 26",
      "Req Strength: 36",
      "Req Level: 14",
      "+3 to Light Radius",
      "+70-100% Enhanced Defense",
      "5% to max Poison resist",
      "5% to max Cold resist",
      "5% to max Lightning resist",
      "5% to max Fire resist",
      "+50 Defense vs. Melee",
      "+20 to Attack Rating",
      "All Resistances +10"
    ],
    category: "Unique Armor"
  },
  Hawkmail: {
    name: "Hawkmail",
    type: "Scale Mail",
    image: "uniques/hawkmail.gif",
    props: [
      "Defense: 109-122",
      "Durability: 36",
      "Req Strength: 44",
      "Req Level: 15",
      "Cannot be Frozen",
      "15% to max Cold Resist",
      "+15% Cold Resist",
      "+80-100% Enhanced Defense",
      "10% Faster Run/Walk"
    ],
    category: "Unique Armor"
  },
  "Venom Ward": {
    name: "Venom Ward",
    type: "Breast Plate",
    image: "uniques/venomsward.gif",
    props: [
      "Defense: 110-138",
      "Durability: 50",
      "Req Strength: 30",
      "Req Level: 20",
      "+2 to Light Radius",
      "+60-100% Enhanced Defense",
      "15% to max Poison Resist",
      "+90% Poison Resist",
      "Poison Length reduced by 50%"
    ],
    category: "Unique Armor"
  },
  "Sparking Mail": {
    name: "Sparking Mail",
    type: "Chain Mail",
    image: "uniques/sparklingmail.gif",
    props: [
      "Defense: 133-140",
      "Durability: 45",
      "Req Strength: 48",
      "Req Level: 17",
      "Attacker takes 10-14 Lightning Damage",
      "Adds 1-20 Lightning Damage",
      "+75-85% Enhanced Defense",
      "+30% Lightning Resist"
    ],
    category: "Unique Armor"
  },
  Iceblink: {
    name: "Iceblink",
    type: "Splint Mail",
    image: "uniques/iceblink.gif",
    props: [
      "Defense: 163-172",
      "Durability: 30",
      "Req Strength: 51",
      "Req Level: 22",
      "Freezes Target",
      "+4 to Light Radius",
      "+70-80% Enhanced Defense",
      "Magic damage reduced by 1",
      "+30% Cold Resist"
    ],
    category: "Unique Armor"
  },
  "Heavenly Garb": {
    name: "Heavenly Garb",
    type: "Light Plate",
    image: "uniques/heavenlygarb.gif",
    props: [
      "Defense: 216",
      "Durability: 60",
      "Req Strength: 41",
      "Req Level: 29",
      "+100% Enhanced Defense",
      "+15 to Energy",
      "+50% Damage to Undead",
      "+100 to Attack Rating against Undead",
      "Regenerate Mana 25%",
      "All Resistances +10"
    ],
    category: "Unique Armor"
  },
  Boneflesh: {
    name: "Boneflesh",
    type: "Plate Mail",
    image: "uniques/boneflesh.gif",
    props: [
      "Defense: 234-257",
      "Durability: 60",
      "Req Strength: 65",
      "Req Level: 26",
      "5% Life stolen per hit",
      "+100-120% Enhanced Defense",
      "25% Chance of Open Wounds",
      "+35 to Attack Rating"
    ],
    category: "Unique Armor"
  },
  Rockfleece: {
    name: "Rockfleece",
    type: "Field Plate",
    image: "uniques/rockfleece.gif",
    props: [
      "Defense: 212-243",
      "Durability: 48",
      "Req Strength: 50",
      "Req Level: 28",
      "Requirements -10%",
      "Damage reduced by 10%",
      "+100-130% Enhanced Defense",
      "+5 to Strength",
      "Damage reduced by 5"
    ],
    category: "Unique Armor"
  },
  Rattlecage: {
    name: "Rattlecage",
    type: "Gothic Plate",
    image: "uniques/rattlecage.gif",
    props: [
      "Defense: 328-335",
      "Durability: 55",
      "Req Strength: 70",
      "Req Level: 29",
      "+200 to Defense",
      "25% Chance of Crushing Blow",
      "40% Hit causes monsters to flee",
      "+45 to Attack Rating"
    ],
    category: "Unique Armor"
  },
  Goldskin: {
    name: "Goldskin",
    type: "Full Plate Mail",
    image: "uniques/goldskin.gif",
    props: [
      "Defense: 356-405",
      "Durability: 70",
      "Req Strength: 80",
      "Req Level: 28",
      "+2 to Light Radius",
      "+35 to All Resistances",
      "+120-150% Enhanced Defense",
      "100% Extra Gold from Monsters",
      "Attacker takes damage of 10"
    ],
    category: "Unique Armor"
  },
  "Silks of the Victor": {
    name: "Silks of the Victor",
    type: "Ancient Armor",
    image: "uniques/victorssilk.gif",
    props: [
      "Defense: 468-514",
      "Durability: 60",
      "Req Strength: 100",
      "Req Level: 28",
      "+2 to Light Radius",
      "+100-120% Enhanced Defense",
      "+1 to all Skills",
      "5% Mana stolen per hit"
    ],
    category: "Unique Armor"
  },
  "The Spirit Shroud": {
    name: "The Spirit Shroud",
    type: "Ghost Armor",
    image: "items/quilted.gif",
    props: [
      "Defense: 295",
      "Durability: 20",
      "Req Strength: 38",
      "Req Level: 28",
      "+150% Enhanced Defense",
      "Cannot be Frozen",
      "+1 to All Skills",
      "+10 Replenish Life",
      "Magic Damage Reduced by 7-11"
    ],
    category: "Exceptional Unique Armor"
  },
  "Skin of the Vipermagi": {
    name: "Skin of the Vipermagi",
    type: "Serpentskin Armor",
    image: "items/leather.gif",
    props: [
      "Defense: 279",
      "Durability: 24",
      "Req Strength: 43",
      "Req Level: 29",
      "+120% Enhanced Defense",
      "+1 to All skills",
      "30% Faster Cast Rate",
      "Magic Damage Reduced by 9-13",
      "+20-35 to All Resistances"
    ],
    category: "Exceptional Unique Armor"
  },
  "Skin of the Flayed One": {
    name: "Skin of the Flayed One",
    type: "Demonhide Armor",
    image: "items/hardleather.gif",
    props: [
      "Defense: 342-397",
      "Durability: 58",
      "Req Strength: 50",
      "Req Level: 31",
      "+150-190% Enhanced Defense",
      "Repairs 1 Durability in 10 sec",
      "5-7% Life Stolen per Hit",
      "+15-25 Replenish Life",
      "Attacker takes Damage of 15"
    ],
    category: "Exceptional Unique Armor"
  },
  "Iron Pelt": {
    name: "Iron Pelt",
    type: "Trellised Armor",
    image: "items/studdedleather.gif",
    props: [
      "Defense: 234-605",
      "Durability: 157",
      "Req Strength: 61",
      "Req Level: 33",
      "+50-100% Enhanced Defense",
      "+3 per character level to Defense",
      "Damage reduced by 15-20",
      "Magic Damage reduced by 10-16",
      "+25 to Life"
    ],
    category: "Exceptional Unique Armor"
  },
  "Spirit Forge": {
    name: "Spirit Forge",
    type: "Linked Mail",
    image: "items/ringmail.gif",
    props: [
      "Defense: 380-449",
      "Durability: 26",
      "Req Strength: 74",
      "Req Level: 35",
      "+120-160% Enhanced Defense",
      "+1.25 per character level to Life",
      "+5% Fire Resist",
      "Adds 20-65 Fire Damage",
      "+15 to Strength",
      "+4 to Light Radius",
      "2 sockets"
    ],
    category: "Exceptional Unique Armor"
  },
  "Crow Caw": {
    name: "Crow Caw",
    type: "Tigulated Mail",
    image: "items/scalemail.gif",
    props: [
      "Defense: 477-534",
      "Durability: 36",
      "Req Strength: 86",
      "Req Level: 37",
      "+150-180% Enhanced Defense",
      "15% Increased Attack Speed",
      "15% Faster Hit recovery",
      "35% Chance of Open Wounds",
      "+15 to Dexterity"
    ],
    category: "Exceptional Unique Armor"
  },
  "Duriel's Shell": {
    name: "Duriel's Shell",
    type: "Cuirass",
    image: "items/breastplate.gif",
    props: [
      "Defense: 528-732",
      "Durability: 150",
      "Req Strength: 65",
      "Req Level: 41",
      "+160-200% Enhanced Defense",
      "+1 per character level to Life",
      "+1.25 per character level to Defense",
      "+20% to Fire, Lightning, Posion Resist",
      "+50% to Cold Resist",
      "Cannot be Frozen",
      "+15 to Strength"
    ],
    category: "Exceptional Unique Armor"
  },
  Shaftstop: {
    name: "Shaftstop",
    type: "Mesh Armor",
    image: "items/chainmail.gif",
    props: [
      "Defense: 599-684",
      "Durability: 45",
      "Req Strength: 92",
      "Req Level: 38",
      "+180-220% Enhanced Defense",
      "Damage Reduced by 30%",
      "+250 Defense against missles",
      "+60 to Life"
    ],
    category: "Exceptional Unique Armor"
  },
  "Skullder's Ire": {
    name: "Skullder's Ire",
    type: "Russet Armor",
    image: "items/splintmail.gif",
    props: [
      "Defense: 634-732",
      "Durability: 90",
      "Req Strength: 97",
      "Req Level: 42",
      "+160-200% Enhanced Defense",
      "Repairs 1 durability in 5 seconds",
      "+1.25 per character level % better chance of getting Magic Items",
      "+1 to all Skill Levels",
      "Magic Damage reduced by 10"
    ],
    category: "Exceptional Unique Armor"
  },
  "Que-Hegan's Wisdom": {
    name: "Que-Hegan's Wisdom",
    type: "Mage Plate",
    image: "items/lightplate.gif",
    props: [
      "Defense: 628-681",
      "Durability: 60",
      "Req Strength: 55",
      "Req Level: 51",
      "+140-160% Enhanced Defense",
      "+1 to all Skill Levels",
      "+3 to Mana after each kill",
      "20% Faster Cast Rate",
      "20% Faster Hit Recovery",
      "Magic Damage reduced by 6-10",
      "+15 to Energy"
    ],
    category: "Exceptional Unique Armor"
  },
  "Guardian Angel": {
    name: "Guardian Angel",
    type: "Templar Coat",
    image: "items/platemail.gif",
    props: [
      "Defense: 770-825",
      "Durability: 60",
      "Req Strength: 118",
      "Req Level: 45",
      "+180-200% Enhanced Defense",
      "+20% increased chance of blocking",
      "+30% faster Block Rate",
      "+2.5 per character level to Attack Rating against demons",
      "+1 to Paladin Skill Levels",
      "+4 to Light Radius",
      "15% to all maximum Resistances"
    ],
    category: "Exceptional Unique Armor"
  },
  Toothrow: {
    name: "Toothrow",
    type: "Sharktooth Armor",
    image: "items/fieldplate.gif",
    props: [
      "Defense: 713-888",
      "Durability: 63",
      "Req Strength: 103",
      "Req Level: 48",
      "+160-220% Enhanced Defense",
      "+40-60 Defense",
      "40% chance of Open Wounds",
      "+15% Fire Resist",
      "+10 Strength",
      "Attacker takes damage of 20-40"
    ],
    category: "Exceptional Unique Armor"
  },
  "Atma's Wail": {
    name: "Atma's Wail",
    type: "Embossed Plate",
    image: "items/gothicplate.gif",
    props: [
      "Defense: 670-988",
      "Durability: 105",
      "Req Strength: 115",
      "Req Level: 51",
      "+120-160% Enhanced Defense",
      "+2 per character level to Defense",
      "30% Faster Hit Recovery",
      "+10 Replenish Life",
      "15% increased maximum Mana",
      "+15 Dexterity",
      "20% better chance of getting Magic Items"
    ],
    category: "Exceptional Unique Armor"
  },
  "Black Hades": {
    name: "Black Hades",
    type: "Chaos Armor",
    image: "items/fullplate.gif",
    props: [
      "Defense: 823-1029",
      "Durability: 70",
      "Req Strength: 140",
      "Req Level: 53",
      "140-200% Enhanced Defense",
      "+30-60% Damage to Demons",
      "+200-250 to Attack Rating against Demons",
      "Half Freeze Duration",
      "-2 to Light Radius",
      "3 sockets"
    ],
    category: "Exceptional Unique Armor"
  },
  Corpsemourn: {
    name: "Corpsemourn",
    type: "Ornate Armor",
    image: "items/ancientarmor.gif",
    props: [
      "Defense: 1127-1262",
      "Durability: 60",
      "Req Strength: 170",
      "Req Level: 55",
      "+150-180% Enhanced Defense",
      "40 charges level 5 Corpse Explosion",
      "+12-36 Fire Damage",
      "6% chance to cast level 2 Iron Maiden",
      "+35% Cold Resist",
      "+10 to Vitality",
      "+8 to Strength"
    ],
    category: "Exceptional Unique Armor"
  },
  "Ormus' Robes": {
    name: "Ormus' Robes",
    type: "Dusk Shroud",
    image: "items/quilted.gif",
    props: [
      "Defense: 371-487",
      "Durability: 20",
      "Req Strength: 77",
      "Type: Light",
      "Req Level: 75",
      "+10-20 Defense",
      "20% Faster Cast Rate",
      "+10-15% to Cold Skill Damage",
      "+10-15% to Fire Skill Damage",
      "+10-15% to Lightning Skill Damage",
      "+3 to a random Sorceress Skill",
      "10-15% Regenerate Mana"
    ],
    category: "Elite Unique Armor"
  },
  "The Gladiator's Bane": {
    name: "The Gladiator's Bane",
    type: "Wire Fleece",
    image: "items/studdedleather.gif",
    props: [
      "Defense: 1255-1496",
      "Req Strength: 111",
      "Req Level: 85",
      "+150-200% Enhanced Defense",
      "+50 Defense",
      "Durability: 135",
      "Cannot be Frozen",
      "Poison Length reduced by 50%",
      "30% Faster Hit Recovery",
      "Damage reduced by 15-20",
      "Magic damage reduced by 15-20",
      "Attacker takes damage of 20"
    ],
    category: "Elite Unique Armor"
  },
  "Arkaine's Valor": {
    name: "Arkaine's Valor",
    type: "Balrog Skin",
    image: "items/splintmail.gif",
    props: [
      "Defense: 1295-1450",
      "Durability: 30",
      "Req Strength: 165",
      "Req Level: 85",
      "+150-180% Enhanced Defense",
      "+1-2 to all Skill Levels",
      "+(0.5 per character level) to Vitality",
      "30% Faster Hit Recovery",
      "Damage Reduced by 10-15"
    ],
    category: "Elite Unique Armor"
  },
  Leviathan: {
    name: "Leviathan",
    type: "Kraken Shell",
    image: "items/fieldplate.gif",
    props: [
      "Defense: 1514-1722",
      "Indestructible",
      "Req Strength: 174",
      "Type: Medium",
      "Req Level: 65",
      "+170-200% Enhanced Defense",
      "+100-150 Defense",
      "+40-50 to Strength",
      "Damage Reduced by 15-25%"
    ],
    category: "Elite Unique Armor"
  },
  "Steel Carapace": {
    name: "Steel Carapace",
    type: "Shadow Plate",
    image: "items/fullplate.gif",
    props: [
      "Defense: 1618-1785",
      "Durability: 70",
      "Req Strength: 230",
      "Type: Heavy",
      "Req Level: 66",
      "+190-220% Enhanced Defense",
      "10-15% Regenerate Mana",
      "20% Faster Hit Recovery",
      "+40-60% Cold Resist",
      "Damage Reduced by 9-14",
      "Repairs 1 Durability in 20 seconds",
      "8% Chance to cast Level 6 Iron Maiden when struck"
    ],
    category: "Elite Unique Armor"
  },
  "Templar's Might": {
    name: "Templar's Might",
    type: "Sacred Armor",
    image: "items/ancientarmor.gif",
    props: [
      "Defense: 1622-1923",
      "Durability: 60",
      "Req Strength: 232",
      "Type: Medium",
      "Req Level: 74",
      "+170-220% Enhanced Defense",
      "+250-300 Defense vs. Missile",
      "+10-15 to Strength",
      "+10-15 to Vitality",
      "20% Faster Hit Recovery",
      "+40-50 Maximum Stamina",
      "+1-2 to Offensive Auras (Paladin only)"
    ],
    category: "Elite Unique Armor"
  },
  "Tyrael's Might": {
    name: "Tyrael's Might",
    type: "Sacred Armor",
    image: "items/ancientarmor.gif",
    props: [
      "Defense: 1322-1502",
      "Indestructible",
      "Req Strength: none",
      "Type: Medium",
      "Req Level: 84",
      "+120-150% Enhanced Defense",
      "+50-100% Damage to Demons",
      "20% Faster Run/Walk",
      "+20-30 to Strength",
      "+20-30 to all Resistances",
      "Cannot be Frozen",
      "-100% Requirements",
      "Slain Monsters Rest in Peace"
    ],
    category: "Elite Unique Armor"
  },
  "The Gnasher": {
    name: "The Gnasher",
    type: "Hand Axe",
    image: "uniques/thegnasher.gif",
    props: [
      "Damage: 4-10",
      "Durability: 28",
      "Req Level: 5",
      "20% Chance of Crushing Blow",
      "50% Chance of Open Wounds",
      "+60-70% Enhanced Damage",
      "+8 to Strength"
    ],
    category: "Unique Axes"
  },
  Deathspade: {
    name: "Deathspade",
    type: "Axe",
    image: "uniques/deathspade.gif",
    props: [
      "Req Strength: 32",
      "Damage: 14-18",
      "Durability: 24",
      "Req Level: 9",
      "+60-70% Enhanced Damage",
      "+4 Mana after each kill",
      "15% Bonus to Attack Rating",
      "Hit Blinds Target",
      "+8 to minimum Damage"
    ],
    category: "Unique Axes"
  },
  Bladebone: {
    name: "Bladebone",
    type: "Double Axe",
    image: "uniques/bladebone.gif",
    props: [
      "Req Strength: 43",
      "Damage: 6-19",
      "Durability: 24",
      "Req Level: 15",
      "+30-50% Enhanced Damage",
      "20% Increased Attack Speed",
      "+40 to Attack Rating vs. Undead",
      "100% Damage to Undead",
      "Adds 8-12 Fire Damage",
      "+20 Defense"
    ],
    category: "Unique Axes"
  },
  "Skull Splitter": {
    name: "Skull Splitter",
    type: "Military Pick",
    image: "uniques/skullsplitter.gif",
    props: [
      "Req Strength: 49",
      "Req Dexterity: 33",
      "Damage: 11-22",
      "Durability: 26",
      "Req Level: 21",
      "Hit Blinds Target +2",
      "Regenerate Mana 20%",
      "Adds 1-15 Lightning Damage",
      "+60-100% Enhanced Damage",
      "+50-100 to Attack Rating",
      "15% Chance of Open Wounds"
    ],
    category: "Unique Axes"
  },
  Rakescar: {
    name: "Rakescar",
    type: "War Axe",
    image: "uniques/rakescar.gif",
    props: [
      "Req Strength: 67",
      "Damage: 17-45",
      "Durability: 26",
      "Req Level: 27",
      "Poison Resist + 50%",
      "+75-150% Enhanced Damage",
      "+38 Poison Damage for 3 sec",
      "30% Increased Attack Speed",
      "+50 to Attack Rating"
    ],
    category: "Unique Axes"
  },
  "Axe of Fechmar": {
    name: "Axe of Fechmar",
    type: "Large Axe",
    image: "uniques/axeoffechmar.gif",
    props: [
      "Req Strength: 35",
      "Damage: 10-24",
      "Durability: 30",
      "Req Level: 8",
      "+3 Freezes Target",
      "+2 to Light Radius",
      "+70-90% Enhanced Damage",
      "+50% Cold Resist"
    ],
    category: "Unique Axes"
  },
  Goreshovel: {
    name: "Goreshovel",
    type: "Broad Axe",
    image: "uniques/goreshovel.gif",
    props: [
      "Req Strength: 48",
      "Damage: 14-36",
      "Durability: 35",
      "Req Level: 14",
      "60% Chance of Open Wounds",
      "+25 to Strength",
      "30% Increased Attack Speed",
      "+40-50% Enhanced Damage",
      "+9 to maximum Damage"
    ],
    category: "Unique Axes"
  },
  "The Chieftain": {
    name: "The Chieftain",
    type: "Battle Axe",
    image: "uniques/thechieftan.gif",
    props: [
      "Req Strength: 54",
      "Damage: 24-64",
      "Durability: 40",
      "Req Level: 19",
      "+100% Enhanced Damage",
      "+10-20 to Resist All",
      "20% Increased Attack Speed",
      "Adds 1-40 Lightning Damage",
      "+6 Mana after each Kill"
    ],
    category: "Unique Axes"
  },
  Brainhew: {
    name: "Brainhew",
    type: "Great Axe",
    image: "uniques/brainhew.gif",
    props: [
      "Req Strength: 63",
      "Req Dexterity: 39",
      "Damage: 27-54",
      "Durability: 50",
      "Req Level: 25",
      "Adds 15-35 Fire Damage",
      "+50-80% Enhanced Damage",
      "+4 to Light Radius",
      "10-13% Mana stolen per hit",
      "+25 to Mana",
      "+14 to minimum Damage"
    ],
    category: "Unique Axes"
  },
  Humongous: {
    name: "Humongous",
    type: "Giant Axe",
    image: "uniques/thehumongous.gif",
    props: [
      "Req Strength: 84",
      "Damage: 47-124",
      "Durability: 50",
      "Req Level: 29",
      "+80-120% Enhanced Damage",
      "33% Chance of Crushing Blow",
      "+20% to Requirements",
      "Adds 8-25 Damage",
      "+20-30 to Strength"
    ],
    category: "Unique Axes"
  },
  Coldkill: {
    name: "Coldkill",
    type: "Hatchet",
    image: "items/handaxe.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 25",
      "Damage: 25-60",
      "Durability: 28",
      "Req Level: 36",
      "+150-190% Enhanced Damage",
      "30% Increased Attack Speed",
      "10% Chance to cast level 10 Ice Blast on striking",
      "10% Chance to cast level 5 Frost Nova when struck",
      "+40 Cold Damage for 2 sec",
      "15% to maximum Cold Resist",
      "+15% Cold Resist"
    ],
    category: "Exceptional Unique Axes"
  },
  "Butcher's Pupil": {
    name: "Butcher's Pupil",
    type: "Cleaver",
    image: "items/axe.gif",
    props: [
      "Req Strength: 68",
      "Damage: 55-149",
      "Durability: Indestructible",
      "Req Level: 39",
      "+150-200% Enhanced Damage",
      "Adds 30-50 Damage",
      "35% Deadly Strike",
      "25% Chance of Open Wounds",
      "30% Increased Attack Speed"
    ],
    category: "Exceptional Unique Axes"
  },
  Islestrike: {
    name: "Islestrike",
    type: "Twin Axe",
    image: "items/doubleaxe.gif",
    props: [
      "Req Strength: 85",
      "Damage: 35-110",
      "Durability: 24",
      "Req Level: 43",
      "+170-190% Enhanced Damage",
      "25% Chance of Crushing Blow",
      "+2 to Druid Skills",
      "+50 Defense vs. Missles",
      "+10 to Energy, Vitality, Dexterity and Strength",
      "+1 to Fury (Druid only)",
      "+1 to Maul (Druid only)"
    ],
    category: "Exceptional Unique Axes"
  },
  "Pompeii's Wrath": {
    name: "Pompeii's Wrath",
    type: "Crowbill",
    image: "items/militarypick.gif",
    props: [
      "Req Strength: 94",
      "Req Dexterity: 70",
      "Damage: 33-91",
      "Durability: 26",
      "Req Level: 45",
      "+140-170% Enhanced Damage",
      "Adds 35-150 Fire Damage",
      "Slows Target by 50%",
      "4% Chance to cast level 8 Volcano on striking",
      "Knockback"
    ],
    category: "Exceptional Unique Axes"
  },
  "Guardian Naga": {
    name: "Guardian Naga",
    type: "Naga",
    image: "items/waraxe.gif",
    props: [
      "Req Strength: 121",
      "Damage: 40-145",
      "Durability: 26",
      "Req Level: 48",
      "+150-180% Enhanced Damage",
      "+20 to maximum Damage",
      "+250 Poison Damage over 10 sec",
      "5% Chance to cast level 8 Poison Nova on striking",
      "+30% Poison resist",
      "Attacker takes damage of 15"
    ],
    category: "Exceptional Unique Axes"
  },
  "Warlord's Trust": {
    name: "Warlord's Trust",
    type: "Military Axe",
    image: "items/largeaxe.gif",
    props: [
      "Req Strength: 73",
      "Damage: 38-93",
      "Durabiltiy: 30",
      "Req Level: 35",
      "+175% Enhanced Damage",
      "Repairs 1 durability in 4 sec",
      "+0.5 per character level to Vitality",
      "+20 Replenish Life",
      "+10 to All Resistances",
      "+75 Defense"
    ],
    category: "Exceptional Unique Axes"
  },
  Spellsteel: {
    name: "Spellsteel",
    type: "Beared Axe",
    image: "items/broadaxe.gif",
    props: [
      "Req Strength: 37",
      "Damage: 55-129",
      "Durability: 35",
      "Req Level: 39",
      "+165% Enhanced Damage",
      "10% Faster Cast Rate",
      "-60% Requirements",
      "25% Regenerate Mana",
      "+100 to Mana",
      "60 charges level 12 Firestorm",
      "100 charges level 10 Holy Bolt",
      "30 charges level 3 Decrepify",
      "20 charges level 1 Teleport",
      "Magic Damage reduced by 12-15"
    ],
    category: "Exceptional Unique Axes"
  },
  Stormrider: {
    name: "Stormrider",
    type: "Tabar",
    image: "items/battleaxe.gif",
    props: [
      "Req Strength: 101",
      "Damage: 83-229",
      "Durability: 90",
      "Req Level: 41",
      "+100% Enhanced Damage",
      "Adds 35-75 Damage",
      "Adds 1-200 Lightning Damage",
      "15% Chance to cast level 5 Charged Bolt when struck",
      "10% Chance to cast level 13-20 Charged Bolt on striking",
      "5% Chance to cast level 10 Chain Lightning on striking",
      "Attacker takes lightning Damage of 15"
    ],
    category: "Exceptional Unique Axes"
  },
  "Boneslayer Blade": {
    name: "Boneslayer Blade",
    type: "Gothic Axe",
    image: "items/greataxe.gif",
    props: [
      "Req Strength: 115",
      "Req Dexterity: 79",
      "Damage: 50-224",
      "Durability: 50",
      "Req Level: 42",
      "+180-220% Enhanced Damage",
      "+5 per character level to Attack Rating vs. undead",
      "+2.5 per character level to Damage to Undead",
      "50% Chance to cast level 12-20 Holy Bolt when struck",
      "20% Increased Attack Speed",
      "35% Bonus to Attack Rating",
      "200 charges Level 20 Holy Bolt",
      "+8 to Strength"
    ],
    category: "Exceptional Unique Axes"
  },
  "The Minotaur": {
    name: "The Minotaur",
    type: "Ancient Axe",
    image: "items/giantaxe.gif",
    props: [
      "Req Strength: 125",
      "Damage: 123-285",
      "Durability: 50",
      "Req Level: 45",
      "+140-200% Enhanced Damage",
      "Adds 20-30 Damage",
      "Slows Target by 50%",
      "30% chance of Crushing Blow",
      "+2 Hit Blinds Target",
      "Half Freeze Duration",
      "+15-20 to Strength"
    ],
    category: "Exceptional Unique Axes"
  },
  "Razor's Edge": {
    name: "Razor's Edge",
    type: "Tomahawk",
    image: "items/handaxe.gif",
    props: [
      "Req Strength: 125",
      "Req Dexterity: 67",
      "Damage: 90-188",
      "Durability: 28",
      "Req Level: 67",
      "2-Handed",
      "+175-225% Enhanced Damage",
      "+40% Increased Attack Speed",
      "-33% Target Defense",
      "50% Deadly Strike",
      "50% Chance of Open Wounds"
    ],
    category: "Elite Unique Axes"
  },
  "Rune Master": {
    name: "Rune Master",
    type: "Ettin Axe",
    image: "items/doubleaxe.gif",
    props: [
      "Req Strength: 145",
      "Req Dexterity: 45",
      "Damage: 105-244 Avg: 149",
      "Durability: 24",
      "Req Level: 72",
      "2-Handed",
      "+220-270% Enhanced Damage",
      "+5% Maximum Cold Resist",
      "Cannot be Frozen",
      "3-5 Sockets"
    ],
    category: "Elite Unique Axes"
  },
  Cranebeak: {
    name: "Cranebeak",
    type: "War Spike",
    image: "items/militarypick.gif",
    props: [
      "Req Strength: 133",
      "Req Dexterity: 54",
      "Damage: 102-192",
      "Durability: 26",
      "Req Level: 63",
      "2-Handed",
      "+240-300% Enhanced Damage",
      "+40% Increased Attack Speed",
      "-25% Target Defense",
      "Adds 1-305 Lightning Damage",
      "20-50% Better Chance of Magic Items",
      "15 Charges of Level 8 Raven"
    ],
    category: "Elite Unique Axes"
  },
  "Death Cleaver": {
    name: "Death Cleaver",
    type: "Berserker Axe",
    image: "items/waraxe.gif",
    props: [
      "Req Strength: 138",
      "Req Dexterity: 59",
      "Damage: 79-269",
      "Durability: 26",
      "Req Level: 70",
      "2-Handed",
      "+230-280% Enhanced Damage",
      "+40% Increased Attack Speed",
      "-33% Target Defense",
      "66% Deadly Strike",
      "+6-9 Life after each Kill"
    ],
    category: "Elite Unique Axes"
  },
  "Ethereal Edge": {
    name: "Ethereal Edge",
    type: "Silver Edged Axe",
    image: "items/broadaxe.gif",
    props: [
      "Req Strength: 156",
      "Req Dexterity: 55",
      "Damage: 232-462",
      "Indestructible",
      "Req Level: 74",
      "2-Handed",
      "+150-180% Enhanced Damage",
      "+150-200% Damage to Demons",
      "+270-350 to Attack Rating",
      "+25% Increased Attack Speed",
      "+10-12 Fire Absorb",
      "+5-10 Life after each Demon Kill",
      "Ethereal"
    ],
    category: "Elite Unique Axes"
  },
  Hellslayer: {
    name: "Hellslayer",
    type: "Decapitator",
    image: "uniques/chieftain.gif",
    props: [
      "Req Strength: 189",
      "Req Dexterity: 33",
      "Durability: 40",
      "Damage: 98-680",
      "2-Handed",
      "Req Level:  66",
      "+100% Enhanced Damage",
      "+(3 per character level) to maximum Damage",
      "Adds 150-250 Fire Damage",
      "+0.5 per character level to Strength and Vitality",
      "10% chance to cast level 16-20 Fire Ball on attack",
      "+25 to Life"
    ],
    category: "Elite Unique Axes"
  },
  "Messerschmidt's Reaver": {
    name: "Messerschmidt's Reaver",
    type: "Champion Axe",
    image: "uniques/brainhew.gif",
    props: [
      "Req Strength: 167",
      "Req Dexterity: 59",
      "Damage: 177-514",
      "Durability: 75",
      "2-Handed",
      "Req Level: 70",
      "+200% Enhanced Damage",
      "Adds 20-240 Fire Damage",
      "+15 to Energy",
      "+15 to Vitality",
      "+15 to Dexterity",
      "+15 to Strength",
      "+2.5 per character level to Maximum Damage",
      "100% Bonus to Attack Rating"
    ],
    category: "Elite Unique Axes"
  },
  "Executioner's Justice": {
    name: "Executioner's Justice",
    type: "Glorious Axe",
    image: "items/giantaxe.gif",
    props: [
      "Req Strength: 164",
      "Req Dexterity: 55",
      "Damage: 204-483",
      "Durability: 50",
      "Req Level: 75",
      "2-Handed",
      "+240-290% Enhanced Damage",
      "25% Chance of Crushing Blow",
      "30% Increased Attack Speed",
      "-33% Target's Defense",
      "50% Chance to cast Level 6 Decrepify when you kill an enemy"
    ],
    category: "Elite Unique Axes"
  },
  Lenymo: {
    name: "Lenymo",
    type: "Sash",
    image: "uniques/lenymscord.gif",
    props: [
      "Capacity: 8",
      "Defense: 2",
      "Durability: 12",
      "Req Strength: none",
      "Req Level: 7",
      "+1 to Light Radius",
      "Regenerate Mana 30%",
      "All Resistances +5",
      "+15 to Mana"
    ],
    category: "Unique Belts"
  },
  Snakecord: {
    name: "Snakecord",
    type: "Light Belt",
    image: "uniques/snakecord.gif",
    props: [
      "Capacity: 8",
      "Defense: 14-15",
      "Durability: 14",
      "Req Strength: none",
      "Req Level: 12",
      "Replenish Life +5",
      "Poison Resist +25%",
      "+20-30% Enhanced Defense",
      "Poison length reduced by 50%",
      "+12 Poison Damage for 3 sec",
      "+10 Defense"
    ],
    category: "Unique Belts"
  },
  Nightsmoke: {
    name: "Nightsmoke",
    type: "Belt",
    image: "uniques/nightsmoke.gif",
    props: [
      "Capacity: 12",
      "Defense: 22-24",
      "Durability: 16",
      "Req Strength: 25",
      "Req Level: 20",
      "50% Damage taken goes to Mana",
      "Damage reduced by 2",
      "All Resistances +10",
      "+15 Defense",
      "+30-50% Enhanced Defense",
      "+20 to Mana"
    ],
    category: "Unique Belts"
  },
  Goldwrap: {
    name: "Goldwrap",
    type: "Heavy Belt",
    image: "uniques/goldwrap.gif",
    props: [
      "Capacity: 12",
      "Defense: 34-36",
      "Durability: 18",
      "Req Strength: 45",
      "Req Level: 27",
      "+2 to Light Radius",
      "+25 Defense",
      "10% Increased Attack Speed",
      "+40-60% Enhanced Defense",
      "50-80% Extra Gold from Monsters",
      "30% better chance of getting magic item"
    ],
    category: "Unique Belts"
  },
  Bladebuckle: {
    name: "Bladebuckle",
    type: "Plated Belt",
    image: "uniques/bladebuckle.gif",
    props: [
      "Capacity: 16",
      "Defense: 51-54",
      "Durability: 24",
      "Req Strength: 60",
      "Req Level: 29",
      "Damage reduced by 3",
      "+80-100% Enhanced Defense",
      "+30% Faster Hit Recovery",
      "+30 Defense",
      "+10 to Dexterity",
      "+5 to Strength",
      "Attacker takes damage of 8"
    ],
    category: "Unique Belts"
  },
  "String of Ears": {
    name: "String of Ears",
    type: "Demonhide Sash",
    image: "items/sash.gif",
    props: [
      "Capacity: 16",
      "Defense: 102-113",
      "Durability: 22",
      "Req Stength: 20",
      "Req Level: 29",
      "+150-180% Enhanced Defense",
      "+15 Defense",
      "6-8% Life Stolen per Hit",
      "Damage Reduced by 10-15%",
      "Magic Damage reduced by 10-15"
    ],
    category: "Exceptional Unique Belts"
  },
  Razortail: {
    name: "Razortail",
    type: "Sharkskin Belt",
    image: "items/lightbelt.gif",
    props: [
      "Capacity: 16",
      "Defense: 96-107",
      "Durability: 14",
      "Req Strength: 20",
      "Req Level: 32",
      "+120-150% Enhanced Defense",
      "+15 Defense",
      "+10 to maximum Damage",
      "Piercing Attack",
      "+15 to Dexterity",
      "Attacker takes Damage of 1 per character level"
    ],
    category: "Exceptional Unique Belts"
  },
  "Gloom's Trap": {
    name: "Gloom's Trap",
    type: "Mesh Belt",
    image: "items/belt.gif",
    props: [
      "Capacity: 16",
      "Defense: 90-102",
      "Durability: 16",
      "Req Strength: 58",
      "Req Level: 36",
      "+120-150% Enhanced Defense",
      "5% Mana Stolen per hit",
      "15% increased Maximum Mana",
      "15% Regenerate Mana",
      "+15 to Vitality",
      "-3 to Light Radius"
    ],
    category: "Exceptional Unique Belts"
  },
  Snowclash: {
    name: "Snowclash",
    type: "Battle Belt",
    image: "items/heavybelt.gif",
    props: [
      "Capacity: 16",
      "Defense: 98-116",
      "Durability: 18",
      "Req Strength: 88",
      "Req Level: 42",
      "+130-170% Enhanced Defense",
      "5% chance to cast level 7-20 Blizzard when struck",
      "+15 Cold Absorb",
      "15% to maximum Cold Resist",
      "Adds 13-21 Cold Damage for 3 sec",
      "+2 to Chilling Armor (Sorceress only)",
      "+2 to Blizzard (Sorceress only)",
      "+3 to Glacial Spike (Sorceress only)"
    ],
    category: "Exceptional Unique Belts"
  },
  "Thundergod's Vigor": {
    name: "Thundergod's Vigor",
    type: "War Belt",
    image: "items/girdle.gif",
    props: [
      "Capacity: 16",
      "Defense: 137-159",
      "Durability: 24",
      "Req Strength: 110",
      "Req Level: 47",
      "+160-200% Enhanced Defense",
      "Adds 1-50 Lightning Damage",
      "5% chance to cast level 7 Fist of Heavens when struck",
      "+20 Lightning Absorb",
      "10% to maximum Lightning Resist",
      "+20 to Strength and Vitality",
      "+3 to Lightning Fury (Amazon only)",
      "+3 to Lightning Strike (Amazon only)"
    ],
    category: "Exceptional Unique Belts"
  },
  "Arachnid Mesh": {
    name: "Arachnid Mesh",
    type: "Spiderweb Sash",
    image: "items/sash.gif",
    props: [
      "Capacity: 16",
      "Defense: 119-138",
      "Durability: 12",
      "Req Strength: 50",
      "Req Level: 80",
      "+90-120% Enhanced Defense",
      "Slows Target by 10%",
      "+1 to all Skills",
      "+20% Faster Cast Rate",
      "5% Increased Maximum Mana",
      "11 Charges Level 3 Venom"
    ],
    category: "Elite Unique Belts"
  },
  "Nosferatu's Coil": {
    name: "Nosferatu's Coil",
    type: "Vampirefang Belt",
    image: "items/lightbelt.gif",
    props: [
      "Capacity: 16",
      "Defense: 56-63",
      "Durability: 14",
      "Req Strength: 50",
      "Req Level: 51",
      "Slows Target by 10%",
      "+2 to Mana after each kill",
      "-3 to Light Radius",
      "5-7% Life Stolen per Hit",
      "+15 to Strength",
      "10% increased Attack Speed"
    ],
    category: "Elite Unique Belts"
  },
  "Verdungo's Hearty Cord": {
    name: "Verdungo's Hearty Cord",
    type: "Mithril Coil",
    image: "items/belt.gif",
    props: [
      "Capacity: 16",
      "Defense: 125-158",
      "Durability: 16",
      "Req Strength: 106",
      "Req Level: 63",
      "+90-140% Enhanced Defense",
      "10% Faster Hit Recovery",
      "+30-40 to Vitality",
      "+10-13 Replenish Life",
      "+100-120 Maximum Stamina",
      "Damage Reduced by 10-15%"
    ],
    category: "Elite Unique Belts"
  },
  Hotspur: {
    name: "Hotspur",
    type: "Boots",
    image: "uniques/hotspur.gif",
    props: [
      "Assassin Kick Damage: 3-8",
      "Defense: 10",
      "Durability: 12",
      "Req Strength: none",
      "Req Level: 5",
      "+10-20% Enhanced Defense",
      "+6 Defense",
      "+45% Fire Resist",
      "Adds 3-6 Fire Damage",
      "+15 to Life",
      "15% to maximum Fire Resist"
    ],
    category: "Unique Boots"
  },
  Gorefoot: {
    name: "Gorefoot",
    type: "Heavy Boots",
    image: "uniques/gorefoot.gif",
    props: [
      "Assassin Kick Damage: 4-10",
      "Defense: 20-21",
      "Durability: 14",
      "Req Strength: 18",
      "Req Level: 9",
      "+20-30% Enhanced Defense",
      "+2 to Leap (Barbarian only)",
      "20% Faster Run/Walk",
      "2% Mana stolen per hit",
      "+12 to Defense",
      "Attacker takes damage of 2"
    ],
    category: "Unique Boots"
  },
  "Treads of Cthon": {
    name: "Treads of Cthon",
    type: "Chain Boots",
    image: "uniques/treadsofcthon.gif",
    props: [
      "Assassin Kick Damage: 6-12",
      "Defense: 25-26",
      "Durability: 16",
      "Req Strength: 30",
      "Req Level: 15",
      "+30-40% Enhanced Defense",
      "+12 Defense",
      "50% slower Stamina Drain",
      "30% Faster Run/Walk",
      "+50 Defense vs. missle",
      "+10 to Life"
    ],
    category: "Unique Boots"
  },
  "Goblin Toe": {
    name: "Goblin Toe",
    type: "Light Plated Boots",
    image: "uniques/goblintoe.gif",
    props: [
      "Assassin Kick Damage: 8-16",
      "Defense: 33-34",
      "Durability: 18",
      "Req Strength: 50",
      "Req Level: 22",
      "+50-60% Enhanced Defense",
      "25% chance of Crushing Blow",
      "-1 to Light Radius",
      "Damage Reduced by 1",
      "Magic damage reduced by 1",
      "+15 to Defense"
    ],
    category: "Unique Boots"
  },
  Tearhaunch: {
    name: "Tearhaunch",
    type: "Greaves",
    image: "uniques/tearhaunch.gif",
    props: [
      "Assassin Kick Damage: 10-20",
      "Defense: 60-63",
      "Durability: 24",
      "Req Strength: 70",
      "Req Level: 29",
      "+60-80% Enhanced Defense",
      "20% Faster Run/Walk",
      "+10 to All Resistances",
      "+35 Defense",
      "+5 to Dexterity",
      "+5 to Strength",
      "+2 to Vigor (Paladin only)"
    ],
    category: "Unique Boots"
  },
  Infernostride: {
    name: "Infernostride",
    type: "Demonhide Boots",
    image: "items/leatherboots.gif",
    props: [
      "Assassin Kick Damage: 26-46",
      "Defense: 94-105",
      "Durability: 12",
      "Req Strength: 20",
      "Req Level: 29",
      "+120-150% Enhanced Defense",
      "Adds 12-33 Fire Damage",
      "+15 Defense",
      "20% Faster Run/Walk",
      "5% chance to cast level 8 Blaze when struck",
      "+30% Fire Resist",
      "10% to maximum Fire Resist",
      "40-70% extra Gold from monsters",
      "+2 to Light Radius"
    ],
    category: "Exceptional Unique Boots"
  },
  Waterwalk: {
    name: "Waterwalk",
    type: "Sharkskin Boots",
    image: "items/heavyboots.gif",
    props: [
      "Assassin Kick Damage: 28-50",
      "Defense: 112-124",
      "Durability: 14",
      "Req Strength: 47",
      "Req Level: 32",
      "+180-210% Enhanced Defense",
      "20% Faster Run/Walk",
      "+100 Defense vs. missles",
      "+15 to Dexterity",
      "+5% to maximum Fire Resist",
      "+50% Heal Stamina",
      "+40 to maximum Stamina",
      "+45-65 to Life"
    ],
    category: "Exceptional Unique Boots"
  },
  Silkweave: {
    name: "Silkweave",
    type: "Mesh Boots",
    image: "items/chainboots.gif",
    props: [
      "Assassin Kick Damage: 23-52",
      "Defense: 112-130",
      "Durability: 16",
      "Req Strength: 65",
      "Req Level: 36",
      "+150-190% Enhanced Defense",
      "30% Faster",
      "Run/Walk",
      "+5 to Mana after each kill",
      "10% increased maximum Mana",
      "+200 Defense vs. missles"
    ],
    category: "Exceptional Unique Boots"
  },
  "War Traveler": {
    name: "War Traveler",
    type: "Battle Boots",
    image: "items/lightplateboots.gif",
    props: [
      "Assassin Kick Damage: 37-64",
      "Defense: 120-139",
      "Durability: 48",
      "Req Strength: 95",
      "Req Level: 42",
      "+150-190% Enhanced Defense",
      "25% Faster Run/Walk",
      "+10 to Vitality and Strength",
      "Adds 15-25 Damage",
      "40% Slower Stamina Drain",
      "Attacker takes Damage of 5-10",
      "30-50% better chance of getting Magic Items"
    ],
    category: "Exceptional Unique Boots"
  },
  "Gore Rider": {
    name: "Gore Rider",
    type: "War Boots",
    image: "items/plateboots.gif",
    props: [
      "Assassin Kick Damage: 39-80",
      "Defense: 140-162",
      "Durability: 34",
      "Req Strength: 94",
      "Req Level: 47",
      "+160-200% Enhanced Defense",
      "30% Faster Run/Walk",
      "10% chance of Open Wounds",
      "15% chance of Crushing Blow",
      "15% chance of Deadly Strike",
      "-25% Requirements",
      "+20 to maximum Stamina"
    ],
    category: "Exceptional Unique Boots"
  },
  "Sandstorm Trek": {
    name: "Sandstorm Trek",
    type: "Scarabshell Boots",
    image: "items/heavyboots.gif",
    props: [
      "Assassin Kick Damage: 60-110",
      "Defense: 158-178",
      "Durability: 14",
      "Req Strength: 91",
      "Req Level: 64",
      "+140-170% Enhanced Defense",
      "+20% Faster Hit Recovery",
      "+20% Faster Run/Walk",
      "+1 per character level to maximum Stamina",
      "+10-15 to Strength",
      "+10-15 to Vitality",
      "50% Slower Stamina Drain",
      "+40-70% Poison Resist",
      "Repairs 1 Durability in 20 seconds"
    ],
    category: "Elite Unique Boots"
  },
  Marrowwalk: {
    name: "Marrowwalk",
    type: "Boneweave Boots",
    image: "items/chainboots.gif",
    props: [
      "Assassin Kick Damage: 69-118",
      "Defense: 183-204",
      "Durability: 16",
      "Req Strength: 118",
      "Req Level: 66",
      "+170-200% Enhanced Defense",
      "+20% Faster Run/Walk",
      "+1-2 Skeleton Mastery (Necro only)",
      "+10-20 to Strength",
      "+17 to Dexterity",
      "10% Regenerate Mana",
      "+10% Heal Stamina",
      "Half Freeze Duration",
      "13 Charges Level 33 Bone Prison",
      "10 Charges Level 12 Life Tap"
    ],
    category: "Elite Unique Boots"
  },
  "Shadow Dancer": {
    name: "Shadow Dancer",
    type: "Myrmidon Greaves",
    image: "items/plateboots.gif",
    props: [
      "Assassin Kick Damage: 83-149",
      "Defense: 122-144",
      "Durability: 24",
      "Req Strength: 167",
      "Req Level: 71",
      "+70-100% Enhanced Defense",
      "+1-2 to Shadow Disciplines (Assassin only)",
      "+30% Faster Run/Walk",
      "+30% Faster Hit Recovery",
      "+15-25 to Dexterity",
      "-20% Requirements"
    ],
    category: "Elite Unique Boots"
  },
  Pluckeye: {
    name: "Pluckeye",
    type: "Short Bow",
    image: "uniques/pluckeye.gif",
    props: [
      "Damage: 2-8",
      "Req Dexterity: 15",
      "Req Level: 7",
      "+2 to Light Radius",
      "3% Mana stolen per hit",
      "+100% Enhanced Damage",
      "+28 to Attack Rating",
      "+2 to Mana after each kill",
      "+10 to Life"
    ],
    category: "Unique Bows"
  },
  Witherstring: {
    name: "Witherstring",
    type: "Hunter Bow",
    image: "uniques/witherstring.gif",
    props: [
      "Damage: 3-12",
      "Req Dexterity: 28",
      "Req Level: 13",
      "+40-50% Enhanced Damage",
      "Fires level 3 Magic Arrows",
      "+50 to Attack Rating",
      "Adds 1-3 Damage",
      "30% increased attack speed"
    ],
    category: "Unique Bows"
  },
  "Raven Claw": {
    name: "Raven Claw",
    type: "Long Bow",
    image: "uniques/ravensclaw.gif",
    props: [
      "Damage: 4-17",
      "Req Dexterity: 19",
      "Req Strength: 22",
      "Req Level: 15",
      "+60-70% Enhanced Damage",
      "Fires level 3 Explosive Arrows",
      "50% bonus to Attack Rating",
      "+3 to Dexterity",
      "+3 to Strength"
    ],
    category: "Unique Bows"
  },
  "Rogue's Bow": {
    name: "Rogue's Bow",
    type: "Composite Bow",
    image: "uniques/roguesbow.gif",
    props: [
      "Damage: 5-12",
      "Req Dexterity: 35",
      "Req Strength: 25",
      "Req Level: 20",
      "+40-60% Enhanced Damage",
      "30% Deadly Strike",
      "+100% Damage to Undead",
      "+10 to all Resistances",
      "+60 to Attack Rating",
      "50% Increased Attack Speed"
    ],
    category: "Unique Bows"
  },
  Stormstrike: {
    name: "Stormstrike",
    type: "Short Battle Bow",
    image: "uniques/stormstrike.gif",
    props: [
      "Damage: 8-20",
      "Req Dexterity: 40",
      "Req Strength: 30",
      "Req Level: 25",
      "+70-90% Enhanced Damage",
      "Piercing attack",
      "+25% Lightning Resist",
      "+28 to Attack Rating",
      "Adds 1-30 Lightning Damage",
      "+8 to Strength"
    ],
    category: "Unique Bows"
  },
  Wizendraw: {
    name: "Wizendraw",
    type: "Long Battle Bow",
    image: "uniques/wizendraw.gif",
    props: [
      "Damage: 5-32",
      "Req Dexterity: 50",
      "Req Strength: 40",
      "Req Level: 26",
      "+70-80% Enhanced Damage",
      "Fires level 5 Magic Arrows",
      "Cold Resist 26%",
      "+50-100 to Attack Rating",
      "+15 to Energy",
      "+30 to Mana",
      "20% Increased Attack Speed",
      "-20-35% to enemy Cold Resist"
    ],
    category: "Unique Bows"
  },
  Hellclap: {
    name: "Hellclap",
    type: "Short War Bow",
    image: "uniques/hellclap.gif",
    props: [
      "Damage: 10-26",
      "Req Dexterity: 55",
      "Req Strength: 35",
      "Req Level: 27",
      "+70-90% Enhanced Damage",
      "+40% Fire Resist",
      "Adds 15-50 Fire Damage",
      "+50-75 to Attack Rating",
      "+12 to Dexterity",
      "10% increased attack speed",
      "+1 to Fire Skills"
    ],
    category: "Unique Bows"
  },
  Blastbark: {
    name: "Blastbark",
    type: "Long War Bow",
    image: "uniques/blastbark.gif",
    props: [
      "Damage: 5-52",
      "Req Dexterity: 65",
      "Req Strength: 50",
      "Req Level: 28",
      "+70-130% Enhanced Damage",
      "+1 to Amazon Skill levels",
      "3% Mana stolen per hit",
      "+5 to Strength",
      "+2 to Exploding Arrow (Amazon only)"
    ],
    category: "Unique Bows"
  },
  Skystrike: {
    name: "Skystrike",
    type: "Edge Bow",
    image: "items/shortbow.gif",
    props: [
      "Req Dexterity: 43",
      "Req Strength: 25",
      "Damage: 17-60",
      "Req Level: 28",
      "+150-200% Enhanced Damage",
      "Adds 1-250 Lightning Damage",
      "2% chance to cast level 6 Meteor on striking",
      "30% Increased Attack Rate",
      "+100 to Attack Rating",
      "+1 to Amazon Skill Levels (Amazon only)",
      "+10 to Energy"
    ],
    category: "Exceptional Unique Bows"
  },
  Riphook: {
    name: "Riphook",
    type: "Razor Bow",
    image: "items/huntersbow.gif",
    props: [
      "Req Dexterity: 62",
      "Req Strength: 25",
      "Damage: 22-70",
      "Req Level: 31",
      "+180-220% Enhanced Damage",
      "Slows Target by 30%",
      "30% chance of Open Wounds",
      "30% Increased Attack Speed",
      "7-10% Life stolen per hit",
      "+35 to Mana"
    ],
    category: "Exceptional Unique Bows"
  },
  "Kuko Shakaku": {
    name: "Kuko Shakaku",
    type: "Cedar Bow",
    image: "items/longbow.gif",
    props: [
      "Req Dexterity: 49",
      "Req Strength: 53",
      "Damage: 25-81",
      "Req Level: 33",
      "+150-180% Enhanced Damage",
      "Fires level 7 Explosive Arrows",
      "Piercing Attack",
      "Adds 40-180 Fire Damage",
      "+3 to Immolation Arrow (Amazon only)",
      "+3 to Bow and Crossbow Skills (Amazon only)"
    ],
    category: "Exceptional Unique Bows"
  },
  Endlesshail: {
    name: "Endlesshail",
    type: "Double Bow",
    image: "items/compositebow.gif",
    props: [
      "Req Dexterity: 73",
      "Req Strength: 58",
      "Damage: 30-83",
      "Req Level: 36",
      "+180-220% Enhanced Damage",
      "Adds 15-30 Cold Damage for 3 sec",
      "+35% Cold Resist",
      "+50 Defense vs. missles",
      "+40 to Mana",
      "+3-5 to Strafe (Amazon only)"
    ],
    category: "Exceptional Unique Bows"
  },
  "Witchwild String": {
    name: "Witchwild String",
    type: "Short Siege Bow",
    image: "items/shortbattlebow.gif",
    props: [
      "Req Dexterity: 80",
      "Req Strength: 65",
      "Damage: 32-81",
      "Req Level: 39",
      "+150-170% Enhanced Damage",
      "Fires level 20 Magic Arrows",
      "2% chance to cast level 5 Amplify Damage on striking",
      "+1 per character level % Deadly strike",
      "+40 to all Resistances",
      "2 sockets"
    ],
    category: "Exceptional Unique Bows"
  },
  Cliffkiller: {
    name: "Cliffkiller",
    type: "Large Siege Bow",
    image: "items/longbattlebow.gif",
    props: [
      "Req Dexterity: 95",
      "Req Strength: 80",
      "Damage: 34-168",
      "Req Level: 41",
      "+190-230% Enhanced Damage",
      "Adds 5-30 Damage",
      "+80 Defense vs. missles",
      "+50 to Life",
      "Knockback",
      "+2 to Amazon Skill Levels"
    ],
    category: "Exceptional Unique Bows"
  },
  Magewrath: {
    name: "Magewrath",
    type: "Rune Bow",
    image: "items/shortwarbow.gif",
    props: [
      "Req Dexterity: 103",
      "Req Strength: 73",
      "Damage: 55-137",
      "Req Level: 43",
      "+120-150% Enhanced Damage",
      "Adds 20-50 Damage",
      "+200-250 to Attack Rating",
      "Hit Blinds Target",
      "15% Mana stolen per hit",
      "Magic Damage reduced by 9-13",
      "+10 to Dexterity",
      "+3 to Guided Arrow (Amazon only)",
      "+1 to Amazon Skill Levels"
    ],
    category: "Exceptional Unique Bows"
  },
  "Goldstrike Arch": {
    name: "Goldstrike Arch",
    type: "Gothic Bow",
    image: "items/longwarbow.gif",
    props: [
      "Req Dexterity: 118",
      "Req Strength: 95",
      "Damage: 30-175",
      "Req Level: 46",
      "+200-250% Enhanced Damage",
      "+100-200% Damage to Demons",
      "+100-200% Damage to Undead",
      "50% Increased Attack Speed",
      "5% chance to cast level 7 Fist of Heavens on striking",
      "+12 Replenish Life",
      "+100-150% Bonus to Attack Rating"
    ],
    category: "Exceptional Unique Bows"
  },
  Eaglehorn: {
    name: "Eaglehorn",
    type: "Crusader Bow",
    image: "uniques/blastbark.gif",
    props: [
      "Damage: 45-313",
      "Req Dexterity: 121",
      "Req Strength: 97",
      "Req Level: 69",
      "+200% Enhanced Damage",
      "+(2 per character level) to maximum Damage",
      "+(6 per character level) to Attack Rating",
      "Ignore's Target Defense",
      "+25 to Dexterity",
      "+1 to Amazon Skills"
    ],
    category: "Elite Unique Bows"
  },
  Widowmaker: {
    name: "Widowmaker",
    type: "Ward Bow",
    image: "items/shortwarbow.gif",
    props: [
      "Req Strength: 146",
      "Req Dexterity: 72",
      "Damage: 50-159",
      "Req Level: 65",
      "+150-200% Enhanced Damage",
      "Ignore Target's Defense",
      "33% Deadly Strike",
      "+3-5 to Guided Arrow",
      "Fires level 11 Magic Arrows"
    ],
    category: "Elite Unique Bows"
  },
  Windforce: {
    name: "Windforce",
    type: "Hydra Bow",
    image: "uniques/blastbark.gif",
    props: [
      "Damage: 35-547",
      "Req Dexterity: 167",
      "Req Strength: 134",
      "Req Level: 73",
      "+250% Enhanced Damage",
      "+10 to Strength",
      "+(3.125 per character level) to maximum Damage",
      "20% increased Attack Speed",
      "6-8% Mana stolen per hit",
      "+30% Heal Stamina",
      "+5 to Dexterity",
      "Knockback"
    ],
    category: "Elite Unique Bows"
  },
  Leadcrow: {
    name: "Leadcrow",
    type: "Light Crossbow",
    image: "uniques/leadcrow.gif",
    props: [
      "Damage: 10-15",
      "Req Dexterity: 27",
      "Req Strength: 21",
      "Req Level: 9",
      "25% Deadly strike",
      "70% Enhanced Damage",
      "+30% Poison Resist",
      "+40 to Attack Rating",
      "+10 to Life",
      "+10 to Dexterity"
    ],
    category: "Unique Crossbows"
  },
  Ichorsting: {
    name: "Ichorsting",
    type: "Crossbow",
    image: "uniques/ichorsting.gif",
    props: [
      "Damage: 13-24",
      "Req Dexterity: 33",
      "Req Strength: 40",
      "Req Level: 18",
      "+50% Enhanced Damage",
      "20% Increased Attack Speed",
      "Piercing Attack",
      "Adds 30 Poison Damage for 3 seconds",
      "+50 to Attack Rating",
      "+20 to Dexterity"
    ],
    category: "Unique Crossbows"
  },
  Hellcast: {
    name: "Hellcast",
    type: "Heavy Crossbow",
    image: "uniques/hellcast.gif",
    props: [
      "Damage: 23-46",
      "Req Dexterity: 40",
      "Req Strength: 60",
      "Req Level: 27",
      "+70-80% Enhanced Damage",
      "Adds 15-35 Fire Damage",
      "Fires level 5 Explosive Arrows",
      "15% to Max Fire resist",
      "15% Fire Resist",
      "+70 to Attack Rating",
      "20% Increased Attack Speed"
    ],
    category: "Unique Crossbows"
  },
  Doomslinger: {
    name: "Doomslinger",
    type: "Repeating Crossbow",
    image: "uniques/doomslinger.gif",
    props: [
      "Damage: 9-24",
      "Req Dexterity: 50",
      "Req Strength: 40",
      "Req Level: 28",
      "+60-100% Enhanced Damage",
      "Piercing Attack",
      "+1 to Amazon Skill levels",
      "+15 to Life",
      "+30% increased Attack Speed"
    ],
    category: "Unique Crossbows"
  },
  "Langer Briser": {
    name: "Langer Briser",
    type: "Arbalest",
    image: "items/lightcrossbow.gif",
    props: [
      "Req Dexterity:  61",
      "Req Strength: 52",
      "Damage: 37-111",
      "Req Level: 32",
      "+170-200% Enhanced Damage",
      "+10-30 to maximum Damage",
      "33% chance of Open Wounds",
      "Adds 1-212 Lightning Damage",
      "+30 to Life",
      "Knockback",
      "30-60% better chance of getting Magic item"
    ],
    category: "Exceptional Unique Crossbows"
  },
  "Pus Spitter": {
    name: "Pus Spitter",
    type: "Siege Crossbow",
    image: "items/crossbow.gif",
    props: [
      "Req Dexterity: 28",
      "Req Strength: 32",
      "Damage: 50-134",
      "Req Level: 36",
      "+150-200% Enhanced Damage",
      "+150 Poison Damage for 8 sec",
      "-60% Requirements",
      "9% chance to cast level 6 Poison Nova when struck",
      "4% chance to cast level 1 Lower Resist",
      "+5 per character level to Attack Rating",
      "+2 to Necromancer Skill Levels"
    ],
    category: "Exceptional Unique Crossbows"
  },
  "Buriza-Do Kyanon": {
    name: "Buriza-Do Kyanon",
    type: "Ballista",
    image: "items/heavycrossbow.gif",
    props: [
      "Req Dexterity: 80",
      "Req Strength: 110",
      "Damage: 82-412",
      "Req Level: 41",
      "+150-200% Enhanced Damage",
      "+2.5 per character level to maximum Damage",
      "Adds 32-196 Cold Damage for 8 sec",
      "Piercing Attack",
      "+3 Freezes Target",
      "+75-150 Defense",
      "+35 to Dexterity",
      "80% Increased Attack Speed"
    ],
    category: "Exceptional Unique Crossbows"
  },
  "Demon Machine": {
    name: "Demon Machine",
    type: "Chu-Ko-Nu",
    image: "items/repeatingcrossbow.gif",
    props: [
      "Req Dexterity: 95",
      "Req Strength: 80",
      "Damage: 31-137",
      "Req Level: 49",
      "+123% Enhanced Damage",
      "+66 to maximum Damage",
      "Fires level 6 Explosive Bolts",
      "+632 to Attack Rating",
      "Piercing Attack",
      "+321 Defense",
      "+36 to Mana"
    ],
    category: "Exceptional Unique Crossbows"
  },
  Hellrack: {
    name: "Hellrack",
    type: "Colossus Crossbow",
    image: "items/heavycrossbow.gif",
    props: [
      "Req Dexterity: 77",
      "Req Strength: 163",
      "Damage: 89-300",
      "Sockets: 2",
      "Req Level: 76",
      "+180-230% Enhanced Damage",
      "100-150% Bonus to Attack Rating",
      "Adds 63-324 Fire Damage",
      "Adds 63-324 Cold Damage",
      "Adds 63-324 Lightning Damage",
      "+20% Increased Attack Speed",
      "150 Charges Level 18 Immolation Arrow"
    ],
    category: "Elite Unique Crossbows"
  },
  "Gut Siphon": {
    name: "Gut Siphon",
    type: "Demon Crossbow",
    image: "items/repeatingcrossbow.gif",
    props: [
      "Req Dexterity: 98",
      "Req Strength: 141",
      "Damage: 67-128",
      "Req Level: 71",
      "+160-220% Enhanced Damage",
      "Piercing Attack",
      "12-18% Life Stolen per Hit",
      "33% Chance of Open Wounds",
      "Slows Target by 25%"
    ],
    category: "Elite Unique Crossbows"
  },
  Gull: {
    name: "Gull",
    type: "Dagger",
    image: "uniques/gull.gif",
    props: [
      "Damage: 2-19",
      "Durability: 16",
      "Req Level: 4",
      "-5 to Mana",
      "Adds 1-15 to Damage",
      "100% better chance of getting magic items"
    ],
    category: "Unique Daggers"
  },
  "The Diggler": {
    name: "The Diggler",
    type: "Dirk",
    image: "uniques/thediggler.gif",
    props: [
      "Damage: 4-13",
      "Durability: 20",
      "Req Dexterity: 25",
      "Req Level: 11",
      "+50% Enhanced Damage",
      "+25% Cold Resist",
      "+25% Fire Resist",
      "+10 to Dexterity",
      "30% increased attack speed",
      "Ignores Target Defense"
    ],
    category: "Unique Daggers"
  },
  "The Jade Tan Do": {
    name: "The Jade Tan Do",
    type: "Kris",
    image: "uniques/thejadetando.gif",
    props: [
      "Damage: 2-11",
      "Durability: 24",
      "Req Dexterity: 45",
      "Req Level: 19",
      "+100-150 to Attack Rating",
      "Cannot be Frozen",
      "+180 Poison Damage for 4 sec",
      "+95% Poison Resist",
      "+20% to maximum Poison Resist"
    ],
    category: "Unique Daggers"
  },
  "Spectral Shard": {
    name: "Spectral Shard",
    type: "Blade",
    image: "uniques/spectralshard.gif",
    props: [
      "Damage: 4-15",
      "Durability: 24",
      "Req Strength: 35",
      "Req Dexterity: 51",
      "Req Level: 25",
      "50% Faster Cast Rate",
      "+10 to All Resistances",
      "+55 to Attack Rating",
      "+50 to Mana"
    ],
    category: "Unique Daggers"
  },
  Spineripper: {
    name: "Spineripper",
    type: "Poignard",
    image: "items/dagger.gif",
    props: [
      "Req Strength: 25",
      "Damage: 33-88",
      "Durability: 16",
      "Req Level: 32",
      "+200-240% Enhanced Damage",
      "Adds 15-27 Damage",
      "15% Increased Attack Speed",
      "+1 to Necromancer Skill Levels",
      "Prevent Monster Heal",
      "Ignore Targets Defense",
      "8% Life stolen per hit",
      "+10 to Dexterity"
    ],
    category: "Exceptional Unique Daggers"
  },
  "Heart Carver": {
    name: "Heart Carver",
    type: "Rondel",
    image: "items/dirk.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 58",
      "Damage: 44-123",
      "Durability: 20",
      "Req Level: 36",
      "+190-240% Enhanced Damage",
      "Adds 15-35 Damage",
      "35% Deadly Strike",
      "Ignores targets defense",
      "+4 to Grim Ward (Barbarian only)",
      "+4 to Find Item (Barbarian only)",
      "+4 to Find Potion (Barbarian only)"
    ],
    category: "Exceptional Unique Daggers"
  },
  "Blackbog's Sharp": {
    name: "Blackbog's Sharp",
    type: "Cinquedeas",
    image: "items/kriss.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 88",
      "Damage: 30-76",
      "Durability: 24",
      "Req Level: 38",
      "+488 Poison Damage for 10 sec",
      "Adds 15-45 Damage",
      "30% increased Attack Speed",
      "Slows Target by 50%",
      "+50 Defense",
      "+4 to Poison Nova (Necromancer only)",
      "+4 to Poison Explosion (Necromancer only)",
      "+5 to Poison Dagger (Necromancer only)"
    ],
    category: "Exceptional Unique Daggers"
  },
  Stormspike: {
    name: "Stormspike",
    type: "Stilleto",
    image: "items/blade.gif",
    props: [
      "Req Strength: 47",
      "Req Dexterity: 97",
      "Damage: 47-90",
      "Durability: 24",
      "Req Level: 41",
      "+150% Enhanced Damage",
      "Adds 1-120 Lightning Damage",
      "25% chance to cast level 3 Charged Bolt when struck",
      "+1 per character level to Lightning Resist",
      "Attacker takes Lightning Damage of 20"
    ],
    category: "Exceptional Unique Daggers"
  },
  Wizardspike: {
    name: "Wizardspike",
    type: "Bone Knife",
    image: "items/dagger.gif",
    props: [
      "Damage: 23-49",
      "Req Strength: 38",
      "Req Dexterity: 75",
      "Req Level: 61",
      "+(2 per character level) to Mana",
      "50% faster Cast Rate",
      "15% Regenerate Mana",
      "15% increased maximum Mana",
      "+75 to all Resistances",
      "Indestructible"
    ],
    category: "Elite Unique Daggers"
  },
  Fleshripper: {
    name: "Fleshripper",
    type: "Fanged Knife",
    image: "items/kriss.gif",
    props: [
      "Req Strength: 42",
      "Req Dexterity: 86",
      "Damage: 45-228",
      "Durability: 36",
      "Req Level: 68",
      "+200-300% Enhanced Damage",
      "-50% Target's Defense",
      "25% Chance of Crushing Blow",
      "33% Deadly Strike",
      "50% Chance of Open Wounds",
      "Prevent Monster Heal",
      "Slows Target by 20%"
    ],
    category: "Elite Unique Daggers"
  },
  Ghostflame: {
    name: "Ghostflame",
    type: "Legend Spike",
    image: "items/blade.gif",
    props: [
      "Req Strength: 55",
      "Req Dexterity: 57",
      "Damage: 133-238",
      "Indestructible",
      "Req Level: 66",
      "+190-240% Enhanced Damage",
      "Ignore Target's Defense",
      "+108 Magic Damage",
      "10-15% Mana Stolen per Hit",
      "+2 to Light Radius",
      "Ethereal"
    ],
    category: "Elite Unique Daggers"
  },
  "The Hand of Broc": {
    name: "The Hand of Broc",
    type: "Leather Gloves",
    image: "uniques/thehandofbroc.gif",
    props: [
      "Defense: 14",
      "Durability: 12",
      "Req Strength: none",
      "Req Level: 5",
      "+10-20% Enhanced Defense",
      "+10 Defense",
      "3% Life Stolen per hit",
      "3% Mana Stolen per hit",
      "+10% Poison Resist",
      "+20 to Mana"
    ],
    category: "Unique Gloves"
  },
  Bloodfist: {
    name: "Bloodfist",
    type: "Heavy Gloves",
    image: "uniques/bloodfist.gif",
    props: [
      "Defense: 17-18",
      "Durability: 14",
      "Req Strength: none",
      "Req Level: 9",
      "+10-20% Enhanced Defense",
      "+10 to Defense",
      "10% Increased Attack Speed",
      "30% Faster Hit Recovery",
      "+40 to Life",
      "+5 to min Damage"
    ],
    category: "Unique Gloves"
  },
  "Chance Guards": {
    name: "Chance Guards",
    type: "Chain Gloves",
    image: "uniques/chanceguards.gif",
    props: [
      "Defense: 27-28",
      "Durability: 16",
      "Req Strength: 25",
      "Req Level: 15",
      "+20-30% Enhanced Defense",
      "+2 to Light Radius",
      "+15 to Defense",
      "+25 to Attack Rating",
      "25-40% better chance of getting Magic Item",
      "200% extra Gold from monsters"
    ],
    category: "Unique Gloves"
  },
  Magefist: {
    name: "Magefist",
    type: "Light Gauntlets",
    image: "uniques/magefist.gif",
    props: [
      "Defense: 24-25",
      "Durability: 18",
      "Req Strength: 45",
      "Req Level: 23",
      "+20-30% Enhanced Defense",
      "+10 to Defense",
      "+1 to Fire Skills",
      "20% Faster Cast Rate",
      "Regenerate Mana 25%",
      "Add 1-6 Fire Damage"
    ],
    category: "Unique Gloves"
  },
  Frostburn: {
    name: "Frostburn",
    type: "Gauntlets",
    image: "uniques/frostburn.gif",
    props: [
      "Defense: 47-49",
      "Durability: 24",
      "Req Strength: 60",
      "Req Level: 29",
      "+10-20% Enhnaced Defense",
      "5% Enhanced Damage",
      "Increased maximum Mana 40%",
      "Adds 1-6 Cold Damage for 2 seconds",
      "+30 Defense"
    ],
    category: "Unique Gloves"
  },
  "Venom Grip": {
    name: "Venom Grip",
    type: "Demonhide Gloves",
    image: "items/leathergloves.gif",
    props: [
      "Defense: 97-118",
      "Durability: 12",
      "Req Strength: 20",
      "Req Level: 29",
      "+130-160% Enhanced Defense",
      "+15-25 Defense",
      "5% chance of Crushing Blow",
      "+60 Poison Damage for 4 sec",
      "5% Life Stolen per hit",
      "5% to maximum Poison Resist",
      "+30% Poison Resist"
    ],
    category: "Exceptional Unique Gloves"
  },
  Gravepalm: {
    name: "Gravepalm",
    type: "Sharkskin Gloves",
    image: "items/heavygloves.gif",
    props: [
      "Defense: 96-112",
      "Durability: 14",
      "Req Strength: 20",
      "Req Level: 32",
      "+140-180% Enhanced Defense",
      "+100-200% Damage to Undead",
      "+100-200 to Attack Rating vs. Undead",
      "+10 to Energy and Strength"
    ],
    category: "Exceptional Unique Gloves"
  },
  Ghoulhide: {
    name: "Ghoulhide",
    type: "Heavy Bracers",
    image: "items/chaingloves.gif",
    props: [
      "Defense: 112-130",
      "Durability: 16",
      "Req Strength: 58",
      "Req Level: 36",
      "+150-190% Enhanced Defense",
      "+8 per character level to Attack Rating vs. Undead",
      "+2 per character level to % Damage vs. Undead",
      "4-5% Mana stolen per hit",
      "+20 to Life"
    ],
    category: "Exceptional Unique Gloves"
  },
  "Lava Gout": {
    name: "Lava Gout",
    type: "Battle Gauntlets",
    image: "items/lightgauntlets.gif",
    props: [
      "Defense: 120-144",
      "Durability: 38",
      "Req Strength: 88",
      "Req Level: 42",
      "+150-200% Enhanced Defense",
      "2% chance to cast level 10 Enchant on striking",
      "Half Freeze Duration",
      "Adds 13-46 Fire Damage",
      "20% Increased Attack Speed",
      "+24% Fire Resist"
    ],
    category: "Exceptional Unique Gloves"
  },
  Hellmouth: {
    name: "Hellmouth",
    type: "War Gauntlets",
    image: "items/gauntlets.gif",
    props: [
      "Defense: 135-162",
      "Durability: 39",
      "Req Strength: 110",
      "Req Level: 47",
      "+150-200% Enhanced Defense",
      "4% chance to cast level 12 Firestorm on striking",
      "2% chance to cast level 4 Meteor on striking",
      "+15 Fire Absorb",
      "Adds 15-72 Fire Damage"
    ],
    category: "Exceptional Unique Gloves"
  },
  "Dracul's Grasp": {
    name: "Dracul's Grasp",
    type: "Vampirebone Gloves",
    image: "items/heavygloves.gif",
    props: [
      "Defense: 125-145",
      "Durability: 14",
      "Req Strength: 50",
      "Req Level: 76",
      "+90-120% Enhanced Defense",
      "+10-15 to Strength",
      "+5-10 Life after each Kill",
      "25% Chance of Open Wounds",
      "7-10% Life Stolen per Hit",
      "5% Chance to cast Level 10 Life Tap on striking"
    ],
    category: "Elite Unique Gloves"
  },
  "Soul Drainer": {
    name: "Soul Drainer",
    type: "Vambraces",
    image: "items/chaingloves.gif",
    props: [
      "Defense: 129-149",
      "Durability: 16",
      "Req Strength: 106",
      "Req Level: 74",
      "+90-120% Enhanced Defense",
      "4-7% Mana Stolen per Hit",
      "4-7% Life Stolen per Hit",
      "-50 to Monster Defense",
      "8% Chance to cast Level 3 Weaken on striking"
    ],
    category: "Elite Unique Gloves"
  },
  Steelrend: {
    name: "Steelrend",
    type: "Ogre Gauntlets",
    image: "items/gauntlets.gif",
    props: [
      "Defense: 232-281",
      "Durability: 24",
      "Req Strength: 185",
      "Req Level: 70",
      "+170-210 Defense",
      "+30-60% Enhanced Damage",
      "10% Chance of Crushing Blow",
      "+15-20 to Strength"
    ],
    category: "Elite Unique Gloves"
  },
  "Biggin's Bonnet": {
    name: "Biggin's Bonnet",
    type: "Cap",
    image: "uniques/warbonet.gif",
    props: [
      "Defense: 17-19",
      "Durability: 12",
      "Req Level: 3",
      "+30% Enhanced Damage",
      "+30 to Attack Rating",
      "+15 to Mana",
      "+14 to Defense",
      "+15 to Life"
    ],
    category: "Unique Helms"
  },
  Tarnhelm: {
    name: "Tarnhelm",
    type: "Skull Cap",
    image: "uniques/tarnhelm.gif",
    props: [
      "Defense: 8-11",
      "Durability: 18",
      "Req Strength: 15",
      "Req Level: 15",
      "+1 to all Skill Levels",
      "25-50% chance of getting Magic item",
      "75% extra gold from Monsters"
    ],
    category: "Unique Helms"
  },
  "Coif of Glory": {
    name: "Coif of Glory",
    type: "Helm",
    image: "uniques/coifofglory.gif",
    props: [
      "Defense: 25-28",
      "Durability: 24",
      "Req Strength: 26",
      "Req Level: 14",
      "Attacker takes lightning damage of 7",
      "+10 to Defense",
      "Hit blinds target",
      "Lightning Resist +15%",
      "+100% Defense against missles"
    ],
    category: "Unique Helms"
  },
  Duskdeep: {
    name: "Duskdeep",
    type: "Full Helm",
    image: "uniques/duskdeep.gif",
    props: [
      "Defense: 45-60",
      "Durability: 30",
      "Req Strength: 41",
      "Req Level: 17",
      "+30-50% Enhanced Defense",
      "-2 to Light Radius",
      "Damage reduced by 7",
      "+8 to maximum Damage",
      "+10-20 to Defense",
      "+15 to All Resistances"
    ],
    category: "Unique Helms"
  },
  Howltusk: {
    name: "Howltusk",
    type: "Great Helm",
    image: "uniques/howltusk.gif",
    props: [
      "Defense: 64",
      "Durability: 40",
      "Req Strength: 63",
      "Req Level: 25",
      "35% Damage taken goes to Mana",
      "+80% Enhanced Defense",
      "Knockback",
      "25% Hit causes monster to flee",
      "Magic Damage Reduced by 2",
      "Attacker takes damage of 3"
    ],
    category: "Unique Helms"
  },
  "The Face of Horror": {
    name: "The Face of Horror",
    type: "Mask",
    image: "uniques/mask.gif",
    props: [
      "Defense: 34-52",
      "Durability: 20",
      "Req Strength: 23",
      "Req Level: 20",
      "+50% damage to Undead",
      "50% Hit causes monsters to flee",
      "+10 to All Resistances",
      "+25 to Defense",
      "+20 to Strength"
    ],
    category: "Unique Helms"
  },
  "Undead Crown": {
    name: "Undead Crown",
    type: "Crown",
    image: "uniques/undeadcrown.gif",
    props: [
      "Defense: 99-113",
      "Durability: 50",
      "Req Strength: 55",
      "Req Level: 29",
      "+30-60% Enhanced Defense",
      "+50% Damage vs. Undead",
      "+50-100 to Attack Rating vs. Undead",
      "+3 to Skeleton Mastery (Necro only)",
      "Half Freeze Duration",
      "5% Life Stolen per hit",
      "+50% Poison Resist",
      "+40 to Defense"
    ],
    category: "Unique Helms"
  },
  Wormskull: {
    name: "Wormskull",
    type: "Bone Helm",
    image: "uniques/wormskull.gif",
    props: [
      "Defense: 33-36",
      "Durability: 40",
      "Req Strength: 25",
      "Req Level: 21",
      "+1 to Necromancer skill levels",
      "5% Life stolen per hit",
      "+80 Poison Damage over 8 sec",
      "+25% Poison Resist",
      "+10 to Mana"
    ],
    category: "Unique Helms"
  },
  "Peasant Crown": {
    name: "Peasant Crown",
    type: "War Hat",
    image: "items/cap.gif",
    props: [
      "Defense: 108",
      "Durability: 12",
      "Req Strength: 20",
      "Req Level: 28",
      "+100% Enhanced Defense",
      "+1 to all Skills",
      "15% Faster Run/Walk",
      "+6-12 Replenish Life",
      "+20 to Energy and Vitality"
    ],
    category: "Unique Exceptional Helms"
  },
  Rockstopper: {
    name: "Rockstopper",
    type: "Sallet",
    image: "items/skullcap.gif",
    props: [
      "Defense: 163-201",
      "Durability: 18",
      "Req Strength: 43",
      "Req Level: 31",
      "+160-220% Enhanced Defense",
      "Damage Reduced by 10%",
      "30% Faster Hit Recovery",
      "+20-40% Cold Resist",
      "+20-50% Fire Resist",
      "+20-40% Lightning Resist",
      "+15 to Vitality"
    ],
    category: "Unique Exceptional Helms"
  },
  Stealskull: {
    name: "Stealskull",
    type: "Casque",
    image: "items/helm.gif",
    props: [
      "Defense: 219-248",
      "Durability: 24",
      "Req Strength: 59",
      "Req Level: 35",
      "+200-240% Enhanced Defense",
      "10% Increased Attack Speed",
      "10% Faster Hit Recovery",
      "5% Life Stolen per hit",
      "5% Mana stolen per hit",
      "30-50% better chance of getting Magic Items"
    ],
    category: "Unique Exceptional Helms"
  },
  "Darksight Helm": {
    name: "Darksight Helm",
    type: "Basinet",
    image: "items/fullhelm.gif",
    props: [
      "Defense: 77-282",
      "Durability: 30",
      "Req Strength: 82",
      "Req Level: 38",
      "+2 per character level to Defense",
      "6% chance to cast level 3 Dim Vision when struck",
      "30 charges Level 5 Cloak of Shadows",
      "Cannot be Frozen",
      "+20-40% Fire Resist",
      "5% Mana Stolen per hit",
      "-4 to Light Radius"
    ],
    category: "Unique Exceptional Helms"
  },
  "Valkyrie Wing": {
    name: "Valkyrie Wing",
    type: "Winged Helm",
    image: "items/greathelm.gif",
    props: [
      "Defense: 247-297",
      "Durability: 40",
      "Req Strength: 115",
      "Req Level: 44",
      "+150-200% Enhanced Defense",
      "+1-2 to Amazon Skill Levels",
      "20% Faster Run/Walk",
      "20% Faster Hit Recovery",
      "+2-4 to Mana after each kill"
    ],
    category: "Unique Exceptional Helms"
  },
  "Blackhorn's Face": {
    name: "Blackhorn's Face",
    type: "Death Mask",
    image: "items/mask.gif",
    props: [
      "Defense: 243-278",
      "Durability: 20",
      "Req Strength: 55",
      "Req Level: 41",
      "+180-220% Enhanced Defense",
      "Slows target by 20%",
      "Attacker takes Lightning Damage of 25",
      "Prevent Monster Heal",
      "+20 Lightning Absorb",
      "+15% Lightning Resist"
    ],
    category: "Unique Exceptional Helms"
  },
  "Crown of Thieves": {
    name: "Crown of Thieves",
    type: "Grand Crown",
    image: "items/crown.gif",
    props: [
      "Defense: 296-342",
      "Durability: 50",
      "Req Strength: 103",
      "Req Level: 49",
      "+160-200% Enhanced Defense",
      "9-12% Life stolen per Hit",
      "+33% Fire Resist",
      "+35 to Mana",
      "+50 to Life",
      "+25 to Dexterity",
      "80-100% Extra Gold from Monsters"
    ],
    category: "Unique Exceptional Helms"
  },
  "Vampire Gaze": {
    name: "Vampire Gaze",
    type: "Grim Helm",
    image: "items/bonehelm.gif",
    props: [
      "Defense: 252",
      "Durability: 40",
      "Req Strength: 58",
      "Req Level: 41",
      "+100% Enhanced Defense",
      "Adds 6-22 Cold Damage for 4 sec",
      "15% slower Stamina Drain",
      "6-8% Life stolen per hit",
      "6-8% Mana stolen per hit",
      "Damage reduced by 15-20%",
      "Magic Damage reduced by 10-15"
    ],
    category: "Unique Exceptional Helms"
  },
  "Harlequin Crest": {
    name: "Harlequin Crest",
    type: "Shako",
    image: "items/cap.gif",
    props: [
      "Defense: 98-141",
      "Req Strength: 50",
      "Durability: 12",
      "Req Level: 62",
      "+2 to all Skills",
      "+1.5 per character level to Life",
      "+1.5 per character level to Mana",
      "Damage reduced by 10%",
      "+2 to Strength",
      "+2 to Dexterity",
      "+2 to Vitality",
      "+2 to Energy",
      "50% better chance to get Magic Items"
    ],
    category: "Unique Elite Helms"
  },
  "Steel Shade": {
    name: "Steel Shade",
    type: "Armet",
    image: "items/helm.gif",
    props: [
      "Defense: 300-345",
      "Durability: 24",
      "Req Strength: 109",
      "Req Level: 62",
      "+100-130% Enhanced Defense",
      "+10-18 Replenish Life",
      "+4-8% Mana Stolen per Hit",
      "+5-11 Fire Absorb"
    ],
    category: "Unique Elite Helms"
  },
  "Veil of Steel": {
    name: "Veil of Steel",
    type: "Spired Helm",
    image: "items/greathelm.gif",
    props: [
      "Defense: 396",
      "Req Strength: 192",
      "Durability: 60",
      "Req Level: 73",
      "+60% Enhanced Defense",
      "-4 to Light Radius",
      "+50 to all Resistances",
      "+140 to Defense",
      "+15 to Strength and Vitality"
    ],
    category: "Unique Elite Helms"
  },
  "Nightwing's Veil": {
    name: "Nightwing's Veil",
    type: "Spired Helm",
    image: "items/greathelm.gif",
    props: [
      "Defense: 304-352",
      "Req Strength: 96",
      "Durability: 40",
      "Req Level: 67",
      "+90-120% Enhanced Defense",
      "+2 to all Skills",
      "+8-15% to Cold Skill Damage",
      "+10-20 to Dexterity",
      "+5-9 Cold Absorb",
      "Half Freeze Duration",
      "-50% Requirements"
    ],
    category: "Unique Elite Helms"
  },
  "Andariel's Visage": {
    name: "Andariel's Visage",
    type: "Demonhead Mask",
    image: "items/mask.gif",
    props: [
      "Defense: 310-387",
      "Durability: 20",
      "Req Strength: 102",
      "Req Level: 83",
      "+100-150% Enhanced Defense",
      "+2 to all Skills",
      "20% Increased Attack Speed",
      "8-10% Life Stolen per Hit",
      "+25-30 to Strength",
      "+10% to Maximum Poison Resist",
      "-30% Fire Resist",
      "+70% Poison Resist",
      "15% Chance to cast Level 15 Poison Nova when struck",
      "20 Charges Level 3 Venom"
    ],
    category: "Unique Elite Helms"
  },
  "Crown of Ages": {
    name: "Crown of Ages",
    type: "Corona",
    image: "items/crown.gif",
    props: [
      "Defense: 349-399",
      "Indestructible",
      "Req Strength: 174",
      "Req Level: 82",
      "+50% Enhanced Defense",
      "+100-150 Defense",
      "+1 to all Skills",
      "Damage Reduced by 10-15%",
      "+20-30 to all Resistances",
      "+30% Faster Hit Recovery",
      "1-2 Sockets"
    ],
    category: "Unique Elite Helms"
  },
  "Giant Skull": {
    name: "Giant Skull",
    type: "Bone Visage",
    image: "items/bonehelm.gif",
    props: [
      "Defense: 350-477",
      "Durability: 40",
      "Req Strength: 106",
      "Sockets: 1-2",
      "Req Level: 65",
      "+250-320 Defense",
      "10% Chance of Crushing Blow",
      "Knockback",
      "+25-35 to Strength"
    ],
    category: "Unique Elite Helms"
  },
  "Kira's Guardian": {
    name: "Kira's Guardian",
    type: "Tiara",
    image: "items/tiara.gif",
    props: [
      "Defense: 90-170",
      "Durability: 25",
      "Req Level: 77",
      "+50-120 Defense",
      "+20% Faster Hit Recovery",
      "Cannot be Frozen",
      "+50-70 to all Resistances"
    ],
    category: "Elite Unique Circlets"
  },
  "Griffon's Eye": {
    name: "Griffon's Eye",
    type: "Diadem",
    image: "items/diadem.gif",
    props: [
      "Defense: 150-260",
      "Durability: 20",
      "Req Level: 76",
      "+100-200 Defense",
      "+1 to all Skills",
      "+25% Faster Cast Rate",
      "-15-20% to Enemy Lightning Resistance",
      "+10-15% to Lightning Skill Damage"
    ],
    category: "Elite Unique Circlets"
  },
  "War Treachery": {
    name: "War Treachery",
    type: "Javelin",
    image: "items/javelin.gif",
    props: [
      "Throw Damage: 16-38",
      "OneHand Damage: 2-13",
      "Quantity: 57",
      "Req Level: 2",
      "+175% Enhanced Damage",
      "-50% Target Defense",
      "20% Bonus to Attack Rating",
      "+81 to Attack Rating",
      "+97 to Attack Rating (based on Character Level)",
      "Prevent Monster Heal",
      "Increased Stack Size"
    ],
    category: "Unique Javelins"
  },
  "Terror Sting": {
    name: "Terror Sting",
    type: "Pilum",
    image: "items/pilum.gif",
    props: [
      "Throw Damage: 16-46",
      "OneHand Damage: 9-20",
      "Quantity: 50",
      "Required Dexterity: 45",
      "Required Level: 7",
      "50% chance to cast level 3 Terror on Striking",
      "+40% Increased Attack Speed",
      "+130% Enhanced Damage",
      "Ignore Target's Defense",
      "Prevent Monster Heal",
      "+8 to Light Radius"
    ],
    category: "Unique Javelins"
  },
  Truth: {
    name: "Truth",
    type: "Short Spear",
    image: "items/shortspear.gif",
    props: [
      "Throw Damage: 12-27",
      "OnHand Damage: 2-16",
      "Quantity: 40",
      "Required Dexterity: 40",
      "Required Strength: 40",
      "Required Level: 13",
      "+25% Enhanced Damage",
      "+12 Damage",
      "25% chance of Crushing Blow",
      "25% Deadly Strike",
      "20% chance of Open Wounds"
    ],
    category: "Unique Javelins"
  },
  "Demon's Arch": {
    name: "Demon's Arch",
    type: "Balrog Spear",
    image: "items/shortspear.gif",
    props: [
      "Req Strength: 127",
      "Req Dexterity: 95",
      "Throw Damage: 104-192",
      "Damage: 85-195",
      "Req Level: 68",
      "+160-210% Enhanced Damage",
      "Adds 232-323 Fire Damage",
      "Adds 23-333 Lightning Damage",
      "+30% Increased Attack Speed",
      "6-12% Life Stolen per hit",
      "Replenishes Quantity",
      "Max stack: 80"
    ],
    category: "Elite Unique Javelins"
  },
  "Wraith Flight": {
    name: "Wraith Flight",
    type: "Ghost Glaive",
    image: "items/glaive.gif",
    props: [
      "Req Strength: 79",
      "Req Dexterity: 127",
      "Throw Damage: 112-368",
      "Damage: 70-261",
      "Req Level: 76",
      "+150-190% Enhanced Damage",
      "9-13% Life Stolen per Hit",
      "+15 to Mana after each Kill",
      "Replenishes Quantity",
      "Ethereal",
      "Max stack: 75"
    ],
    category: "Elite Unique Javelins"
  },
  "Gargoyle's Bite": {
    name: "Gargoyle's Bite",
    type: "Winged Harpoon",
    image: "items/throwingspear.gif",
    props: [
      "Req Strength: 76",
      "Req Dexterity: 145",
      "Throw Damage: 30-254",
      "Damage: 75-115",
      "Req Level: 70",
      "+180-230% Enhanced Damage",
      "+293 Poison Damage over 10 seconds",
      "60 Charges Level 11 Plague Javelin",
      "9-15% Life stolen per Hit",
      "Replenishes Quantity",
      "Max stack: 80"
    ],
    category: "Elite Unique Javelins"
  },
  "Nokozan Relic": {
    name: "Nokozan Relic",
    type: "",
    image: "uniques/amu2.gif",
    props: [
      "Req Level: 10",
      "+3 to Light Radius",
      "+10% to max Fire Resist",
      "+20% Faster Hit Recovery",
      "+50% Fire Resist",
      "Adds 3-6 Fire Damage<"
    ],
    category: "Unique Amulets"
  },
  "The Eye of Etlich": {
    name: "The Eye of Etlich",
    type: "",
    image: "uniques/amu2.gif",
    props: [
      "Req Level: 15",
      "+1-5 to Light Radius",
      "+1 to Skill Levels",
      "3-7% Life stolen per hit",
      "Adds 1-5 Cold Damage for 2-10 sec",
      "+10-40 Defense vs. Missles"
    ],
    category: "Unique Amulets"
  },
  "The Mahim-Oak Curio": {
    name: "The Mahim-Oak Curio",
    type: "",
    image: "uniques/amu3.gif",
    props: [
      "Req Level: 25",
      "+10 Defense",
      "+10 to Vitality, Dexterity, Energy, and Strength",
      "+10% Enhanced Defense",
      "+10% bonus to Attack Rating",
      "+10 to all Resistances"
    ],
    category: "Unique Amulets"
  },
  "Saracen's Chance": {
    name: "Saracen's Chance",
    type: "",
    image: "uniques/amu1.gif",
    props: [
      "Req Level: 47",
      "10% chance to cast level 2 Iron Maiden when struck",
      "+15-25 to All Resistances",
      "+12 to Dexterity, Strength, Vitality, and Energy"
    ],
    category: "Unique Amulets"
  },
  "The Cat's Eye": {
    name: "The Cat's Eye",
    type: "",
    image: "uniques/amu2.gif",
    props: [
      "Req Level: 50",
      "+30% Faster Run/Walk",
      "+100 Defense against missles",
      "+100 Defense",
      "+25 to Dexterity",
      "+20% Increased Attack Speed"
    ],
    category: "Unique Amulets"
  },
  "Crescent Moon": {
    name: "Crescent Moon",
    type: "",
    image: "uniques/amu3.gif",
    props: [
      "Req Level: 50",
      "10% Damage taken goes to Mana",
      "3-6% Life stolen per hit",
      "-2 to Light Radius",
      "11-15% Mana stolen per hit",
      "Magic Damage is reduced by 10",
      "+45 to Mana"
    ],
    category: "Unique Amulets"
  },
  "Atma's Scarab": {
    name: "Atma's Scarab",
    type: "",
    image: "uniques/amu2.gif",
    props: [
      "Req Level: 60",
      "5% chance to cast level 2 Amplify Damage on striking",
      "20% bonus to Attack Rating",
      "+3 to Light Radius",
      "+75% Poison Resist",
      "Attacker takes damage of 5",
      "+40 Poison Damage over 4 sec"
    ],
    category: "Unique Amulets"
  },
  "The Rising Sun": {
    name: "The Rising Sun",
    type: "",
    image: "uniques/amu3.gif",
    props: [
      "Req Level: 65",
      "2% chance to cast level 13-19 Meteor when struck",
      "+2 to Fire Skills",
      "+10 Replenish Life",
      "+4 to Light Radius",
      "Adds 24-48 Fire Damage",
      "Adds 0.75 per character level to Fire Absorb"
    ],
    category: "Unique Amulets"
  },
  "Highlord's Wrath": {
    name: "Highlord's Wrath",
    type: "",
    image: "uniques/amu3.gif",
    props: [
      "Req Level: 65",
      "+20% Increased Attack Speed",
      "+1 to all Skill Levels",
      "+35% Lightning Resist",
      "Adds 1-30 Lightning Damage",
      "+0.375 per character level to Deadly Strike",
      "Attacker takes Lightning damage of 15"
    ],
    category: "Unique Amulets"
  },
  "Mara's Kaleidoscope": {
    name: "Mara's Kaleidoscope",
    type: "",
    image: "uniques/amu1.gif",
    props: [
      "Req Level: 67",
      "+2 to all Skill Levels",
      "+20-30 to all Resistances",
      "+5 to Energy",
      "+5 to Vitality",
      "+5 to Dexterity",
      "+5 to Strength"
    ],
    category: "Unique Amulets"
  },
  "Seraph's Hymn": {
    name: "Seraph's Hymn",
    type: "",
    image: "uniques/amu1.gif",
    props: [
      "Req Level: 65",
      "+2 to all Skill",
      "+1-2 to Defense Auras (Paladin only)",
      "+20-50% Damage to Demons",
      "+150-250 to Attack Rating vs. Demons",
      "+20-50% Damage to Undead",
      "+150-250 to Attack Rating vs. Undead",
      "+2 to Light Radius"
    ],
    category: "Unique Amulets"
  },
  Metalgrid: {
    name: "Metalgrid",
    type: "",
    image: "uniques/amu1.gif",
    props: [
      "Req Level: 81",
      "+400-450 to Attack Rating",
      "11 Charges Level 22 Iron Golem",
      "20 Charges Level 12 Iron Maiden",
      "+25-35 to all Resistances",
      "+300-350 Defense"
    ],
    category: "Unique Amulets"
  },
  Nagelring: {
    name: "Nagelring",
    type: "",
    image: "uniques/ring4.gif",
    props: [
      "Req Level: 7",
      "Magic Damage reduced by 3",
      "+50-75 to Attack Rating",
      "Attacker takes 3 Damage",
      "15-30% better chance of getting magic item"
    ],
    category: "Unique Rings"
  },
  "Manald Heal": {
    name: "Manald Heal",
    type: "",
    image: "uniques/ring4.gif",
    props: [
      "Req Level: 15",
      "4-7% Mana stolen per hit",
      "+5-8 Replenish Life",
      "20% Regenerate Mana",
      "+20 to Life"
    ],
    category: "Unique Rings"
  },
  "Stone of Jordan": {
    name: "Stone of Jordan",
    type: "",
    image: "uniques/ring4.gif",
    props: [
      "Req Level: 29",
      "+1 to all Skill levels",
      "Increase max Mana 25%",
      "Adds 1-12 Lightning damage",
      "+20 to Mana"
    ],
    category: "Unique Rings"
  },
  "Dwarf Star": {
    name: "Dwarf Star",
    type: "",
    image: "uniques/ring2.gif",
    props: [
      "Req Level: 45",
      "Magic Damage reduced by 12-15",
      "+15% heal Stamina",
      "+40 to maximum Stamina",
      "+40 to Life",
      "15% Fire Absorb",
      "100% extra gold from Monsters"
    ],
    category: "Unique Rings"
  },
  "Raven Frost": {
    name: "Raven Frost",
    type: "",
    image: "uniques/ring3.gif",
    props: [
      "Req Level: 45",
      "+150-250 to Attack Rating",
      "+15-20 to Dexterity",
      "+40 to Mana",
      "20% Cold Absorb",
      "Cannot be frozen",
      "Adds 15-45 Cold Damage for 4 sec"
    ],
    category: "Unique Rings"
  },
  "Bul-Kathos' Wedding Band": {
    name: "Bul-Kathos' Wedding Band",
    type: "",
    image: "uniques/ring1.gif",
    props: [
      "Req Level: 58",
      "+1 to all Skill Levels",
      "3-5% Life stolen per hit",
      "+50 to maximum Stamina",
      "+0.5 per character level to Life"
    ],
    category: "Unique Rings"
  },
  "Carrion Wind": {
    name: "Carrion Wind",
    type: "",
    image: "uniques/ring3.gif",
    props: [
      "Req Level: 60",
      "10% Chance to Cast Level 10 Poison Nova when struck",
      "8% Chance to Cast Level 13 Twister on striking",
      "6-9% Life Stolen per Hit",
      "+100-160 Defense vs. Missile",
      "+55% Poison Resist",
      "10% Damage taken goes to Mana",
      "15 Charges Level 21 Poison Creeper"
    ],
    category: "Unique Rings"
  },
  "Nature's Peace": {
    name: "Nature's Peace",
    type: "",
    image: "uniques/ring3.gif",
    props: [
      "Req Level: 69",
      "Slain Monsters Rest in Peace",
      "Prevent Monster Heal",
      "+20-30% Poison Resist",
      "Damage Reduced by 7-11",
      "27 Charges Level 5 Oak Sage"
    ],
    category: "Unique Rings"
  },
  "Wisp Projector": {
    name: "Wisp Projector",
    type: "",
    image: "uniques/ring3.gif",
    props: [
      "Req Level: 76",
      "10% Chance to Cast Level 16 Lightning Bolt on striking",
      "10-20% Lightning Absorb",
      "10-20% better chance for getting Magic Items",
      "11 Charges Level 7 Spirit of Barbs",
      "13 Charges Level 5 Heart of Wolverine",
      "15 Charges Level 2 Oak Sage"
    ],
    category: "Unique Rings"
  },
  Felloak: {
    name: "Felloak",
    type: "Club",
    image: "uniques/felloak.gif",
    props: [
      "Damage: 1-10",
      "Durability: 24",
      "Req Level: 3",
      "+70-80% Enhanced Damage",
      "+60% Lightning Resist",
      "+20% Fire Resist",
      "Adds 6-8 Fire Damage",
      "Knockback",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  Stoutnail: {
    name: "Stoutnail",
    type: "Spiked Club",
    image: "uniques/stoutnail.gif",
    props: [
      "Damage: 10-16",
      "Durability: 36",
      "Req Level: 5",
      "+100% Enhanced Damage",
      "+7 to Vitality",
      "Magic Damage reduced by 2",
      "Attacker takes Damage of 3-10",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  Crushflange: {
    name: "Crushflange",
    type: "Mace",
    image: "uniques/crushflange.gif",
    props: [
      "Damage: 4-16",
      "Durability: 60",
      "Req Strength: 27",
      "Req Level: 9",
      "+50-60% Enhanced Damage",
      "33% chance of Crushing Blow",
      "+2 to Light radius",
      "+50% Fire Resist",
      "+15 to Strength",
      "Knockback",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  Bloodrise: {
    name: "Bloodrise",
    type: "Morning Star",
    image: "uniques/bloodrise.gif",
    props: [
      "Damage: 15-35",
      "Durability: 72",
      "Req Strength: 36",
      "Req Level: 15",
      "+120% Enhanced Damage",
      "25% chance of Open Wounds",
      "10% Increased Attack Speed",
      "5% Life Stolen per hit",
      "50% bonus to Attack Rating",
      "+2 to Light Radius",
      "+3 to Sacrifice (Paladin only)",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  "The General's Tan Do Li Ga": {
    name: "The General's Tan Do Li Ga",
    type: "Flail",
    image: "uniques/thegeneralstandoliga.gif",
    props: [
      "Damage: 2-58",
      "Durability: 30",
      "Req Strength: 41",
      "Req Dexterity: 35",
      "Req Level: 21",
      "+50-60% Enhanced Damage",
      "20% Increased Attack Speed",
      "Slows Target by 50%",
      "5% Mana stolen per hit",
      "+25 Defense",
      "Adds 1-20 Damage",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  Ironstone: {
    name: "Ironstone",
    type: "War Hammer",
    image: "uniques/ironstone.gif",
    props: [
      "Damage: 38-72",
      "Durability: 55",
      "Req Strength: 53",
      "Req Level: 27",
      "+100-150% Enhanced Damage",
      "+100-150 to Attack Rating",
      "+10 to Strength",
      "Adds 1-10 Lightning Damage",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  Bonesnap: {
    name: "Bonesnap",
    type: "Maul",
    image: "uniques/bonesnap.gif",
    props: [
      "Damage: 90-172",
      "Durabilty: 60",
      "Req Strength: 69",
      "Req Level: 24",
      "+200-300% Enhanced Damage",
      "+100% Damage to Undead",
      "40% chance of Crushing Blow",
      "30% Cold Resist",
      "30% Fire Resist"
    ],
    category: "Unique Maces"
  },
  Steeldriver: {
    name: "Steeldriver",
    type: "Great Maul",
    image: "uniques/steeldriver.gif",
    props: [
      "Damage: 95-203",
      "Durability: 60",
      "Req Strength: 50",
      "Req Level: 29",
      "+150-250% Enhanced Damage",
      "40% increased Attack Speed",
      "Requirements -50%",
      "Heal Stamina +25%",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Maces"
  },
  "Dark Clan Crusher": {
    name: "Dark Clan Crusher",
    type: "Cudgel",
    image: "items/club.gif",
    props: [
      "Req Strength: 25",
      "Damage: 17-61",
      "Durability: 24",
      "Req Level: 34",
      "+195% Enhanced Damage",
      "+200% Damage to Demons",
      "+20-25% bonus to Attack Rating",
      "+15 to Life after each demon kill",
      "+2 to Druid Skill Levels",
      "+50% Damage to Undead",
      "+200 to Attack Rating against Demons"
    ],
    category: "Exceptional Unique Maces"
  },
  Fleshrender: {
    name: "Fleshrender",
    type: "Barbed Club",
    image: "items/spikedclub.gif",
    props: [
      "Req Strength: 30",
      "Damage: 64-125",
      "Durability: 56",
      "Req Level: 38",
      "+130-200% Enhanced Damage",
      "Adds 35-50 Damage",
      "+50% Damage to Undead",
      "20% Deadly Strike",
      "20% chance of Crushing Blow",
      "25% chance of Open Wounds",
      "+1 to Druid Skills",
      "+2 to Shape Shifting Skills (Druid only)",
      "Prevent Monster Heal"
    ],
    category: "Exceptional Unique Maces"
  },
  "Sureshrill Frost": {
    name: "Sureshrill Frost",
    type: "Flanged Mace",
    image: "items/mace.gif",
    props: [
      "Req Strength: 61",
      "Damage: 42-74",
      "Durability: 60",
      "Req Level: 39",
      "+150-180% Enhanced Damage",
      "Adds 5-10 Damage",
      "+50% Damage to Undead",
      "Adds 63-112 Cold Damage for 5 sec",
      "+3 Freezes Target",
      "50 charges Level 9 Frozen Orb",
      "Cannot be frozen"
    ],
    category: "Exceptional Unique Maces"
  },
  Moonfall: {
    name: "Moonfall",
    type: "Jagged Star",
    image: "items/morningstar.gif",
    props: [
      "Req Strength: 74",
      "Damage: 54-92",
      "Durability: 72",
      "Req Level: 42",
      "+120-150% Enhanced Damage",
      "Adds 10-15 Damage",
      "+50% Damage to undead",
      "Adds 55-115 Fire Damage",
      "+2 to Light Radius",
      "5% chance to cast level 6 Meteor on striking",
      "60 charges Level 11 Meteor",
      "Magic damage reduced by 9-12"
    ],
    category: "Exceptional Unique Maces"
  },
  "Baezil's Vortex": {
    name: "Baezil's Vortex",
    type: "Knout",
    image: "items/flail.gif",
    props: [
      "Req Strength: 82",
      "Req Dexterity: 73",
      "Damage: 33-105",
      "Durability: 30",
      "Req Level: 45",
      "+160-200% Enhanced Damage",
      "+50% Damage to Undead",
      "Adds 1-150 Lightning Damage",
      "20% Increased Attack Speed",
      "5% chance to cast level 8 Nova on striking",
      "80 charges level 15 Nova",
      "25% Lightning Resist",
      "+100 to Mana"
    ],
    category: "Exceptional Unique Maces"
  },
  Earthshaker: {
    name: "Earthshaker",
    type: "Battle Hammer",
    image: "items/warhammer.gif",
    props: [
      "Req Strength: 100",
      "Damage: 98-162",
      "Durability: 105",
      "Req Level: 43",
      "+180% Enhanced Damage",
      "+50% Damage to Undead",
      "5% chance to cast level 7 Fissure on striking",
      "30% Increase Attack Speed",
      "Hit Blinds Target",
      "Knockback",
      "+3 to Elemental Skills (Druid only)"
    ],
    category: "Exceptional Unique Maces"
  },
  "Bloodtree Stump": {
    name: "Bloodtree Stump",
    type: "War Club",
    image: "items/maul.gif",
    props: [
      "Req Strength: 124",
      "Damage: 148-249",
      "Durability: 100",
      "Req Level: 48",
      "+180-220% Enhanced Damage",
      "+50% Damage to Undead",
      "50% chance of Crushing Blow",
      "+20 to all Resistances",
      "+25 to Strength",
      "+2 to Masteries (Barbarian only)",
      "+3 to Mace Masteries (Barbarian only)"
    ],
    category: "Exceptional Unique Maces"
  },
  "The Gavel of Pain": {
    name: "The Gavel of Pain",
    type: "Martel de Fer",
    image: "items/greatmaul.gif",
    props: [
      "Req Strength: 169",
      "Damage: 152-286",
      "Indestructible",
      "Req Level: 45",
      "+130-160% Enhanced Damage",
      "Adds 12-30 Damage",
      "+50% Damage to Undead",
      "5% chance to cast level 1 Iron Maiden when struck",
      "5% chance to cast level 1 Amplify Damage on striking",
      "3 charges level 8 Amplify Damage",
      "Attacker takes Damage of 26"
    ],
    category: "Exceptional Unique Maces"
  },
  "Nord's Tenderizer": {
    name: "Nord's Tenderizer",
    type: "Truncheon",
    image: "items/club.gif",
    props: [
      "Req Strength: 88",
      "Req Dexterity: 43",
      "Damage: 129-184",
      "Durability: 55",
      "Req Level: 68",
      "1-Handed",
      "+270-330% Enhanced Damage",
      "+50% Damage to Undead",
      "Adds 205-455 Cold Damage for 5 sec",
      "+2-4 Freezes Target",
      "5-15% Cold Absorb",
      "+25% Increased Attack Speed",
      "12 Charges Level 16 Blizzard",
      "+150-180% Bonus to Attack Rating"
    ],
    category: "Elite Unique Maces"
  },
  "Demon Limb": {
    name: "Demon Limb",
    type: "Tyrant Club",
    image: "items/spikedclub.gif",
    props: [
      "Req Strength: 133",
      "Damage: 89-191",
      "Durability: 65",
      "Req Level: 63",
      "1-Handed",
      "+180-230% Enhanced Damage",
      "+50% Damage to Undead",
      "+123% Damage to Demons",
      "Adds 222-333 Fire Damage",
      "7-13% Life Stolen per Hit",
      "+15-20% Fire Resist",
      "20 Charges Level 23 Enchant",
      "Repairs 1 Durability in 20 seconds"
    ],
    category: "Elite Unique Maces"
  },
  "Baranar's Star": {
    name: "Baranar's Star",
    type: "Devil Star",
    image: "uniques/bloodrise.gif",
    props: [
      "Damage: 129-159",
      "Durability: 172",
      "Req Strength: 153",
      "Req Dexterity: 44",
      "Req Level: 65",
      "+200% Enhanced Damage",
      "+50% Damage to Undead",
      "50% increased Attack Speed",
      "200% bonus to Attack Rating",
      "Adds 1-200 Fire Damage",
      "Adds 1-200 Lightning Damage",
      "Adds 1-200 Cold Damage",
      "+15 to Dexterity and Strength"
    ],
    category: "Elite Unique Maces"
  },
  "Horizon's Tornado": {
    name: "Horizon's Tornado",
    type: "Scourge",
    image: "items/flail.gif",
    props: [
      "Req Strength: 100",
      "Req Dexterity: 62",
      "Damage: 9-304",
      "Durability: 65",
      "Req Level: 64",
      "1-Handed",
      "+230-280% Enhanced Damage",
      "+50% Damage to Undead",
      "+50% Increased Attack Speed",
      "Slows Target by 20%",
      "20% Chance to cast Level 15 Tornado on striking",
      "-20% Requirements"
    ],
    category: "Elite Unique Maces"
  },
  Stormlash: {
    name: "Stormlash",
    type: "Scourge",
    image: "items/flail.gif",
    props: [
      "Req Strength: 125",
      "Req Dexterity: 77",
      "Damage: 10-320",
      "Durability: 65",
      "Req Level: 82",
      "1-Handed",
      "+240-300% Enhanced Damage",
      "+50% Damage to Undead",
      "Adds 1-473 Lightning Damage",
      "+30% Increased Attack Speed",
      "+33% Chance of Crushing Blow",
      "15% chance to cast level 10 Static Field on striking",
      "+3-9 Lightning Absorb",
      "Attacker takes Lightning Damage of 30",
      "20% chance to cast level 18 Tornado on striking"
    ],
    category: "Elite Unique Maces"
  },
  "Schaefer's Hammer": {
    name: "Schaefer's Hammer",
    type: "Legendary Mallet",
    image: "uniques/ironstone.gif",
    props: [
      "Damage: 100-338",
      "Req Strength: 189",
      "Indestructible",
      "Req Level: 79",
      "+100-130% Enhanced Damage",
      "+2 per character level to maximum Damage",
      "+50% Damage to Undead",
      "20% chance to cast level 10 Static Field on striking",
      "20% increased Attack Speed",
      "+(8 per character level) to Attack Rating",
      "+75% Lightning Resist",
      "Adds 50-200 Lightning Damage",
      "+1 to Light Radius",
      "+50 to Life"
    ],
    category: "Elite Unique Maces"
  },
  "Stone Crusher": {
    name: "Stone Crusher",
    type: "Legendary Mallet",
    image: "uniques/ironstone.gif",
    props: [
      "Req Strength: 189",
      "Damage: 190-256",
      "Durability: 65",
      "Req Level: 68",
      "1-Handed",
      "+280-320% Enhanced Damage",
      "+10-30 Damage",
      "+50% Damage to Undead",
      "-25% Targets Defense",
      "40% Chance of Crushing Blow",
      "-100 to Monster Defense per Hit",
      "+20-30 to Strength"
    ],
    category: "Elite Unique Maces"
  },
  Windhammer: {
    name: "Windhammer",
    type: "Ogre Maul",
    image: "items/maul.gif",
    props: [
      "Req Strength: 225",
      "Damage: 215-349",
      "Durability: 60",
      "Req Level: 68",
      "2-Handed",
      "+180-230% Enhanced Damage",
      "50% Chance of Crushing Blow",
      "60% Increased Attack Speed",
      "33% Chance to cast Level 22 Twister on striking",
      "+50% Damage to Undead"
    ],
    category: "Elite Unique Maces"
  },
  "The Cranium Basher": {
    name: "The Cranium Basher",
    type: "Thunder Maul",
    image: "uniques/steeldriver.gif",
    props: [
      "Damage: 119-632",
      "Indestructible",
      "Req Strength: 253",
      "Req Level: 87",
      "+200-240% Enhanced Damage",
      "+20 to min and max Damage",
      "+50% Damage to Undead",
      "75% Chance of Crushing Blow",
      "4% chance to cast level 4 Amplify Damage on striking",
      "20% increased Attack Speed",
      "+25 to all Resistances",
      "+25 to Strength"
    ],
    category: "Elite Unique Maces"
  },
  "Earth Shifter": {
    name: "Earth Shifter",
    type: "Thunder Maul",
    image: "uniques/steeldriver.gif",
    props: [
      "Req Strength: 253",
      "Damage: 115-720",
      "Durability: 60",
      "Req Level: 69",
      "1-Handed",
      "+250-300% Enhanced Damage",
      "+50% Damage to Undead",
      "+7 to Elemental Skills (Druid only)",
      "25% Chance to cast Level 14 Fissure on striking",
      "10% Increased Attack Speed",
      "33% Chance of Crushing Blow",
      "30 Charges Level 14 Volcano",
      "10% Faster Cast Rate"
    ],
    category: "Elite Unique Maces"
  },
  "Dimoak's Hew": {
    name: "Dimoak's Hew",
    type: "Bardiche",
    image: "uniques/dimoakshew.gif",
    props: [
      "Damage: 2-54",
      "Durability:  50",
      "Req Dexterity: 0",
      "Req Strength: 40",
      "Req Level: 8",
      "+100% Enhanced Damage",
      "-8 Defense",
      "+15 Dexterity",
      "+20% Increased Attack Speed"
    ],
    category: "Unique Polearms"
  },
  Steelgoad: {
    name: "Steelgoad",
    type: "Voulge",
    image: "uniques/steelgoad.gif",
    props: [
      "Damage: 9-37",
      "Durability: 70-90",
      "Req Dexterity: 0",
      "Req Strength: 50",
      "Req Level: 14",
      "+60-80% Enhanced Damage",
      "30% Deadly Strike",
      "75% Hit causes monster to flee",
      "+5 to All Resistances",
      "+30 to Attack Rating"
    ],
    category: "Unique Polearms"
  },
  "Soul Harvest": {
    name: "Soul Harvest",
    type: "Scythe",
    image: "uniques/soulharvest.gif",
    props: [
      "Damage: 12-38",
      "Durability: 65",
      "Req Dexterity: 41",
      "Req Strength: 41",
      "Req Level: 19",
      "+50-90% Enhanced Damage",
      "30% Chance of open wounds",
      "10% Mana Stolen per hit",
      "+20 to All Resistances",
      "+5 to Energy",
      "+45 to Attack Rating"
    ],
    category: "Unique Polearms"
  },
  "The Battlebranch": {
    name: "The Battlebranch",
    type: "Poleaxe",
    image: "uniques/battlebranch.gif",
    props: [
      "Damage: 27-66",
      "Durability: 65",
      "Req Dexterity: 0",
      "Req Strength: 62",
      "Req Level: 25",
      "+50-70% Enhanced Damage",
      "7% Life Stolen per hit",
      "+50-100 to Attack Rating",
      "+10 to Dexterity",
      "+30% increased Attack Speed"
    ],
    category: "Unique Polearms"
  },
  Woestave: {
    name: "Woestave",
    type: "Halberd",
    image: "uniques/woestave.gif",
    props: [
      "Damage: 14-62",
      "Durability: 55",
      "Req Dexterity: 47",
      "Req Strength: 75",
      "Req Level: 28",
      "Slows Target by 50%",
      "+20-40% Enhanced Damage",
      "50% chance of Open Wounds",
      "+3 Hit Blinds Target",
      "-50 to Monster defense",
      "Hit Freezes target",
      "Prevent Monster Heal",
      "-3 to Light Radius"
    ],
    category: "Unique Polearms"
  },
  "The Grim Reaper": {
    name: "The Grim Reaper",
    type: "War Scythe",
    image: "uniques/thegrimreaper.gif",
    props: [
      "Damage: 33-43",
      "Durability: 55",
      "Req Dexterity: 80",
      "Req Strength: 80",
      "Req Level: 29",
      "100% Deadly Strike",
      "Prevent Monster Heal",
      "5% Mana stolen per hit",
      "+20% Enhanced Damage",
      "+15 to minimum Damage"
    ],
    category: "Unique Polearms"
  },
  "The Meat Scraper": {
    name: "The Meat Scraper",
    type: "Lochaber Axe",
    image: "items/bardiche.gif",
    props: [
      "Req Strength: 80",
      "Req Dexterity: 0",
      "Damage: 15-174",
      "Durability: 50",
      "Req Level: 41",
      "+150-200% Enhanced Damage",
      "50% chance of Open Wounds",
      "30% increased Attack Speed",
      "10% Life Stolen per hit",
      "25% better chance of getting Magic items",
      "+3 to Masteries (Barbarian only)"
    ],
    category: "Exceptional Unique Polearms"
  },
  "Blackleach Blade": {
    name: "Blackleach Blade",
    type: "Bill",
    image: "items/voulge.gif",
    props: [
      "Req Strength: 72",
      "Req Dexterity: 0",
      "Damage: 28-250",
      "Durability: 50",
      "Req Level: 42",
      "+100-140% Enhanced Damage",
      "+1.25 per character level to maximum Damage",
      "5% chance to cast level 5 Weaken on striking",
      "-25% Requirements",
      "-2 to Light Radius",
      "8% Life Stolen per hit"
    ],
    category: "Exceptional Unique Polearms"
  },
  "Athena's Wrath": {
    name: "Athena's Wrath",
    type: "Battle Scythe",
    image: "items/scythe.gif",
    props: [
      "Req Strength: 82",
      "Req Dexterity: 82",
      "Damage: 45-224",
      "Durability: 65",
      "Req Level: 42",
      "+150-180% Enhanced Damage",
      "+1 per character level to maximum Damage",
      "+1 per character level to Life",
      "30% Increased Attack Speed",
      "+1-3 to Druid Skill levels",
      "+15 to Dexterity"
    ],
    category: "Exceptional Unique Polearms"
  },
  "Pierre Tombale Couant": {
    name: "Pierre Tombale Couant",
    type: "Partizan",
    image: "items/poleaxe.gif",
    props: [
      "Req Strength: 113",
      "Req Dexterity: 67",
      "Damage: 100-260",
      "Durability: 65",
      "Req Level: 43",
      "+160-220% Enhanced Damage",
      "Adds 12-20 Damage",
      "55% Deadly Strike",
      "+100-200 to Attack Rating",
      "+3 to Barbarian Skill Levels",
      "6% Mana stolen per hit",
      "30% Faster Hit Recovery"
    ],
    category: "Exceptional Unique Polearms"
  },
  "Husoldal Evo": {
    name: "Husoldal Evo",
    type: "Bec-de-Corbin",
    image: "items/halberd.gif",
    props: [
      "Req Strength: 133",
      "Req Dexterity: 91",
      "Damage: 53-287",
      "Durability: 55",
      "Req Level: 44",
      "+160-200% Enhanced Damage",
      "Adds 20-32 Damage",
      "20% Increased Attack Speed",
      "+200-250 to Attack Rating",
      "Prevent Monster Heal",
      "+20 Replenish Life"
    ],
    category: "Exceptional Unique Polearms"
  },
  "Grim's Burning Dead": {
    name: "Grim's Burning Dead",
    type: "Grim Scythe",
    image: "items/warscythe.gif",
    props: [
      "Req Strength: 70",
      "Req Dexterity: 70",
      "Damage: 72-196",
      "Durability: 55",
      "Req Level: 45",
      "+140-180% Enhanced Damage",
      "Adds 131-232 Fire Damage",
      "+3 to Necromancer Skill Levels",
      "-50% Target Defense",
      "+20% Enhanced Defense",
      "+200-250 to Attack Rating",
      "+45% Fire Resist",
      "-50% Requirements",
      "Attacker takes Damage of 8"
    ],
    category: "Exceptional Unique Polearms"
  },
  Bonehew: {
    name: "Bonehew",
    type: "Ogre Axe",
    image: "items/bardiche.gif",
    props: [
      "Req Strength: 195",
      "Req Dexterity: 75",
      "Damage: 103-609",
      "Durability: 50",
      "Sockets: 2",
      "Req Level: 64",
      "+270-320% Enhanced Damage",
      "30 Charges Level 14 Corpse Explosion",
      "Prevent Monster Heal",
      "30% Increased Attack Speed",
      "50% Chance to Cast Level 16 Bone Spear on striking"
    ],
    category: "Elite Unique Polearms"
  },
  "The Reaper's Toll": {
    name: "The Reaper's Toll",
    type: "Thresher",
    image: "items/scythe.gif",
    props: [
      "Req Strength: 114",
      "Req Dexterity: 89",
      "Damage: 34-479",
      "Durability: 65",
      "Req Level: 75",
      "+190-240% Enhanced Damage",
      "Ignores Target's Defense",
      "Adds 4-44 Cold Damage",
      "11-15% Life Stolen per Hit",
      "33% Deadly Strike",
      "33% Chance to cast Level 1 Decrepify on striking",
      "-25% Requirements"
    ],
    category: "Elite Unique Polearms"
  },
  "Tomb Reaver": {
    name: "Tomb Reaver",
    type: "Cryptic Axe",
    image: "items/poleaxe.gif",
    props: [
      "Req Strength: 165",
      "Req Dexterity: 103",
      "Damage: 99-570",
      "Durability: 65",
      "Sockets: 1-3",
      "Req Level: 84",
      "+200-280% Enhanced Damage",
      "+150-230% Damage to Undead",
      "+60% Increased Attack Speed",
      "+250-350% to Attack Rating Against Undead",
      "+30-50 to all Resistances",
      "10% Chance to reanimate a corpse as Undead",
      "+10-14 Life after each Kill",
      "+50-80% Better Chance to getting Magic Items",
      "+4 to Light Radius"
    ],
    category: "Elite Unique Polearms"
  },
  Stormspire: {
    name: "Stormspire",
    type: "Giant Thresher",
    image: "items/warscythe.gif",
    props: [
      "Req Strength: 188",
      "Req Dexterity: 140",
      "Damage: 100-399",
      "Indestructible",
      "Req Level: 70",
      "+150-250% Enhanced Damage",
      "Adds 1-237 Lightning Damage",
      "30% Increased Attack Speed",
      "+50% Lightning Resist",
      "+10 to Strength",
      "Attacker takes Lightning Damage of 27",
      "5% Chance to cast Level 5 Chain Lightning when struck",
      "2% Chance to cast Level 20 Charged Bolt when struck"
    ],
    category: "Elite Unique Polearms"
  },
  "Knell Striker": {
    name: "Knell Striker",
    type: "Scepter",
    image: "items/scepter.gif",
    props: [
      "Damage: 10-19",
      "Durability: 50",
      "Req Strength: 25",
      "Req Level: 5",
      "+70-80% Enhanced Damage",
      "25% Chance of Crushing Blow",
      "+20% Poison resist",
      "+20% Fire Resist",
      "+35 to Attack Rating",
      "+15 to Mana",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Scepters"
  },
  Rusthandle: {
    name: "Rusthandle",
    type: "Grand Scepter",
    image: "items/grandscepter.gif",
    props: [
      "Damage: 15-35",
      "Durability: 60",
      "Req Strength: 37",
      "Req Level: 18",
      "+50-60% Enhanced Damage",
      "+100-110% Damage to Undead",
      "+3 to Thorns (Paladin only)",
      "+1-3 to Vengeance (Paladin only)",
      "+1 to Paladin Skill levels",
      "8% Life stolen per hit",
      "Magic damage reduced by 1",
      "Adds 3-7 Damage"
    ],
    category: "Unique Scepters"
  },
  Stormeye: {
    name: "Stormeye",
    type: "War Scepter",
    image: "items/warscepter.gif",
    props: [
      "Damage: 18-37",
      "Durability: 70",
      "Req Strength: 55",
      "Req Level: 30",
      "+80-120% Enhanced Damage",
      "+1 to Fist of Heavens (Paladin only)",
      "+3 to Holy Shock (Paladin only)",
      "+3-5 to Resist Lightning (Paladin only)",
      "Replenish Life +10",
      "Adds 3-5 Cold Damage for 3 sec",
      "Adds 1-6 Lightning Damage",
      "+50% Damage vs. Undead"
    ],
    category: "Unique Scepters"
  },
  "Zakarum's Hand": {
    name: "Zakarum's Hand",
    type: "Rune Scepter",
    image: "items/scepter.gif",
    props: [
      "Req Strength: 58",
      "Damage: 36-76",
      "Durability: 50",
      "Req Level: 37",
      "+180-220% Enhanced Damage",
      "+50% Damage to Undead",
      "30% Increased Attack Speed",
      "6% chance to cast level 5 Blizzard on striking",
      "8% Mana stolen per hit",
      "Ignore target defense",
      "10% Regenerate Mana",
      "15% Heal Stamina",
      "+2 to Holy Shock (Paladin only)",
      "+2 to Holy Freeze (Paladin only)"
    ],
    category: "Exceptional Unique Scepters"
  },
  "The Fetid Sprinkler": {
    name: "The Fetid Sprinkler",
    type: "Holy Water Sprinkler",
    image: "items/grandscepter.gif",
    props: [
      "Req Strength: 76",
      "Damage: 51-129",
      "Durability: 60",
      "Req Level: 38",
      "+160-190% Enhanced Damage",
      "Adds 15-25 Damage",
      "+50% Damage to Undead",
      "+2 to Paladin skill levels",
      "10% chance to cast level 1 Confuse on striking",
      "5% chance to cast level 1 Decrepify on striking",
      "+160 Poison Damage for 4 sec",
      "+150-200 to Attack Rating"
    ],
    category: "Exceptional Unique Scepters"
  },
  "Hand of Blessed Light": {
    name: "Hand of Blessed Light",
    type: "Divine Scepter",
    image: "items/warscepter.gif",
    props: [
      "Req Strength: 103",
      "Damage: 56-143",
      "Durability: 70",
      "Req Level: 42",
      "+130-160% Enhanced Damage",
      "Adds 20-45 Damage",
      "+50% Damage to Undead",
      "+2 to Paladin Skill levels",
      "100% bonus to Attack Rating",
      "15% Regenerate Mana",
      "+50 Defense",
      "5% chance to cast level 4 Fist of Heavens on striking",
      "+2 to Fist of Heavens (Paladin only)",
      "+4 Holy Bolt (Paladin only)",
      "+4 to Light Radius"
    ],
    category: "Exceptional Unique Scepters"
  },
  "Heaven's Light": {
    name: "Heaven's Light",
    type: "Mighty Scepter",
    image: "items/scepter.gif",
    props: [
      "Req Strength: 125",
      "Req Dexterity: 65",
      "Damage: 140-208",
      "Durability: 50",
      "Sockets: 1-2",
      "Req Level: 61",
      "+250-300% Enhanced Damage",
      "+50% Damage to Undead",
      "-33% Target's Defense",
      "+20% Increased Attack Speed",
      "33% Chance of Crushing Blow",
      "+15-20 Life after Each Demon Kill",
      "+2-3 to Paladin Skill Levels",
      "+3 to Light Radius"
    ],
    category: "Elite Unique Scepters"
  },
  "The Redeemer": {
    name: "The Redeemer",
    type: "Mighty Scepter",
    image: "items/scepter.gif",
    props: [
      'img src="images/buttons/data_icon2.gif" height="14" width="14" border="0">',
      "Req Strength: 50",
      "Req Dexterity: 26",
      "Damage: 140-208",
      "Durability: 50",
      "Req Level: 72",
      "+250-300% Enhanced Damage",
      "+60-120 Damage",
      "+50% Damage to Undead",
      "+200-250% Damage to Demons",
      "+2 to Paladin Skill Levels",
      "-33% Target's Defense",
      "+2-4 to Redemption (Paladin only)",
      "+2-4 to Holy Bolt (Paladin only)",
      "+3 to Light Radius",
      "-60% Requirements"
    ],
    category: "Elite Unique Scepters"
  },
  "Astreon's Iron Ward": {
    name: "Astreon's Iron Ward",
    type: "Caduceus",
    image: "items/warscepter.gif",
    props: [
      "Req Strength: 97",
      "Req Dexterity: 70",
      "Damage: 125-167",
      "Durability: 70",
      "Req Level: 66",
      "+240-290% Enhanced Damage",
      "+40-85 Damage",
      "+50% Damage to Undead",
      "Adds 80-240 Magic Damage",
      "33% Chance of Crushing Blow",
      "Slows Target by 25%",
      "Damage Reduced by 4-7",
      "+2-4 to Combat Skills (Paladin only)",
      "+10% Increased Attack Speed",
      "150-200% Bonus to Attack Rating"
    ],
    category: "Elite Unique Scepters"
  },
  "Pelta Lunata": {
    name: "Pelta Lunata",
    type: "Buckler",
    image: "uniques/peltalunata.gif",
    props: [
      "Defense: 39",
      "Durability: 20-24",
      "Req Strength: 12",
      "% Block: Paladin 50%Amazon, Assassin, Barbarian 45%Druid, Necromancer, Sorceress 40%",
      "Req Level: 2",
      "+30-40% Enhanced Defense",
      "+30 to Defense",
      "20% increased chance of Blocking",
      "40% Faster Block Rate",
      "+10 to Energy and Vitality",
      "+2 to Strength"
    ],
    category: "Unique Shields"
  },
  "Umbral Disk": {
    name: "Umbral Disk",
    type: "Small Shield",
    image: "uniques/umbraldisk.gif",
    props: [
      "Defense: 45-46",
      "Durability: 26-31",
      "Req Strength: 22",
      "% Block: Paladin 65%Amazon, Assassin, Barbarian 60%Druid, Necromancer, Sorceress 55%",
      "Req Level: 9",
      "+40-50% Enhanced Defense",
      "30% increased chance of Blocking",
      "Hit blinds target",
      "-2 to Light Radius",
      "+30 to Defense",
      "+20 to Life",
      "+10 to Dexterity",
      "+10-15 to Durability"
    ],
    category: "Unique Shields"
  },
  Stormguild: {
    name: "Stormguild",
    type: "Large Shield",
    image: "uniques/stormguild.gif",
    props: [
      "Defense: 52-54",
      "Durability: 34-39",
      "Req Strength: 34",
      "% Block: Paladin 72%Amazon, Assassin, Barbarian 67%Druid, Necromancer, Sorceress 62%",
      "Req Level: 13",
      "+50-60% Enhanced Defense",
      "+30 to Defense",
      "+30% increased chance of Blocking",
      "+25% Lightning Resist",
      "Attacker takes Lightning damage of 3",
      "Magic damage reduced by 1",
      "Adds 1-6 Lightning damage"
    ],
    category: "Unique Shields"
  },
  Steelclash: {
    name: "Steelclash",
    type: "Kite Shield",
    image: "uniques/steelclash.gif",
    props: [
      "Defense: 50-58",
      "Durability: 45-50",
      "Req Strength: 47",
      "% Block: Paladin 63%Amazon, Assassin, Barbarian 58%Druid, Necromancer, Sorceress 53%",
      "Req Level: 17",
      "+60-100% Enhanced Defense",
      "+20 to Defense",
      "25% faster Block Rate",
      "+15 to all Resistances",
      "25% Increased chance of blocking",
      "+3 to Light radius",
      "+1 to Paladin skills",
      "Damage reduced by 3"
    ],
    category: "Unique Shields"
  },
  "Swordback Hold": {
    name: "Swordback Hold",
    type: "Spiked Shield",
    image: "uniques/swordbackhold.gif",
    props: [
      "Defense: 43-51",
      "Durabilty: 40",
      "Req Strength: 30",
      "% Block: Paladin 60%Amazon, Assassin, Barbarian 55%Druid, Necromancer, Sorceress 50%",
      "Req Level: 15",
      "+30-60% enhanced Defense",
      "+10 to Defense",
      "20% increased chance of blocking",
      "50% chance of open wounds",
      "Attacker takes Damage of 10"
    ],
    category: "Unique Shields"
  },
  "Bverrit Keep": {
    name: "Bverrit Keep",
    type: "Tower Shield",
    image: "uniques/bverritkeep.gif",
    props: [
      "Defense: 76-87",
      "Durability: 140-160",
      "Req Strength: 75",
      "% Block: Paladin 64%Amazon, Assassin, Barbarian 59%Druid, Necromancer, Sorceress 54%",
      "Req Level: 19",
      "+80-120% Enhanced Defense",
      "10% increased chance of Blocking",
      "Magic damage reduced by 5",
      "+75% Fire resist",
      "+30 Defense",
      "+5 to Strength"
    ],
    category: "Unique Shields"
  },
  "Wall of the Eyeless": {
    name: "Wall of the Eyeless",
    type: "Bone Shield",
    image: "uniques/walloftheeyeless.gif",
    props: [
      "Defense: 50-53",
      "Durability: 40",
      "Req Strength: 25",
      "% Block: Paladin 50%Amazon, Assassin, Barbarian 45%Druid, Necromancer, Sorceress 40%",
      "Req Level: 20",
      "+30-40% Enhanced Defense",
      "+10 to Defense",
      "+5 to Mana after each kill",
      "20% Faster Cast Rate",
      "3% Mana stolen per hit",
      "+20% Poison resist"
    ],
    category: "Unique Shields"
  },
  "The Ward": {
    name: "The Ward",
    type: "Gothic Shield",
    image: "uniques/theward.gif",
    props: [
      "Defense: 112",
      "Durability: 40",
      "Req Strength: 60",
      "% Block: Paladin 56%Amazon, Assassin, Barbarian 51%Druid, Necromancer, Sorceress 46%",
      "Req Level: 26",
      "+100% Enhanced Defense",
      "10% increased chance of blocking",
      "+30-50 to all Resistances",
      "Magic damage reduced by 2",
      "+40 Defense",
      "+10 to Strength"
    ],
    category: "Unique Shields"
  },
  Visceratuant: {
    name: "Visceratuant",
    type: "Defender",
    image: "items/buckler.gif",
    props: [
      "Defense: 100-125",
      "Durability: 68",
      "Req Strength: 38",
      "% Block: Paladin 70%Amazon, Assassin, Barbarian 65%Druid, Necromancer, Sorceress 60%",
      "Req Level: 28",
      "+100-150% Enhanced Defense",
      "30% increased chance of Blocking",
      "30% Faster Block Rate",
      "+1 to Sorceress Skill Levels",
      "Attacker takes Lightning Damage of 10"
    ],
    category: "Exceptional Unique Shields"
  },
  "Moser's Blessed Circle": {
    name: "Moser's Blessed Circle",
    type: "Round Shield",
    image: "items/smallshield.gif",
    props: [
      "Defense: 156-179",
      "Durability: 64",
      "Req Strength: 53",
      "% Block: Paladin 67%Amazon, Assassin, Barbarian 62%Druid, Necromancer, Sorceress 57%",
      "Req Level: 31",
      "+180-220% Enhanced Defense",
      "+25% Increase chance of Blocking",
      "30% Faster Block Rate",
      "+25 to all Resistances",
      "2 sockets"
    ],
    category: "Exceptional Unique Shields"
  },
  Stormchaser: {
    name: "Stormchaser",
    type: "Scutum",
    image: "items/largeshield.gif",
    props: [
      "Defense: 161-198",
      "Durability: 62",
      "Req Strength: 71",
      "% Block: Paladin 64%Amazon, Assassin, Barbarian 59%Druid, Necromancer, Sorceress 54%",
      "Req Level: 35",
      "+160-220% Enhanced Defense",
      "+20% increased chance of Blocking",
      "4% chance to cast level 5 Tornado when struck",
      "4% chance to cast level 5 Blizzard when struck",
      "10% Faster Block Rate",
      "+150 to Attack Rating",
      "+50% Lightning Resist",
      "Half Freeze Duration",
      "Adds 1-60 Lightning Damage"
    ],
    category: "Exceptional Unique Shields"
  },
  "Tiamat's Rebuke": {
    name: "Tiamat's Rebuke",
    type: "Dragon Shield",
    image: "items/kiteshield.gif",
    props: [
      "Defense: 163-204",
      "Durability: 116",
      "Req Strength: 91",
      "% Block: Paladin 48%Amazon, Assassin, Barbarian 43%Druid, Necromancer, Sorceress 38%",
      "Req Level: 38",
      "+140-200% Enhanced Defense",
      "Adds 27-53 Cold Damage",
      "Adds 35-95 Fire Damage",
      "Adds 1-120 Lightning Damage",
      "3% chance to cast level 6 Hydra when struck",
      "5% chance to cast level 7 Nova when struck",
      "5% chance to cast level 9 Frost Nova when struck",
      "+25-35% to all Resistances"
    ],
    category: "Exceptional Unique Shields"
  },
  "Lance Guard": {
    name: "Lance Guard",
    type: "Barbed Shield",
    image: "items/spikedshield.gif",
    props: [
      "Defense: 134-173",
      "Durability: 55",
      "Req Strength: 65",
      "% Block: Paladin 47%Amazon, Assassin, Barbarian 42%Druid, Necromancer, Sorceress 37%",
      "Req Level: 35",
      "+70-120% Enhanced Defense",
      "15% Damage taken goes to Mana",
      "30% Faster Hit recovery",
      "20% Deadly Strike",
      "+50 to Life",
      "Attacker takes damage of 47"
    ],
    category: "Exceptional Unique Shields"
  },
  "Gerke's Sanctuary": {
    name: "Gerke's Sanctuary",
    type: "Pavise",
    image: "items/towershield.gif",
    props: [
      "Defense: 221-268",
      "Durability: 172",
      "Req Strength: 133",
      "% Block: Paladin 84%Amazon, Assassin, Barbarian 79%Druid, Necromancer, Sorceress 74%",
      "Req Level: 44",
      "+180-240% Enhanced Defense",
      "+30% Increased chance of Blocking",
      "+20-30 to all Resistances",
      "+15 Replenish Life",
      "Damage reduced by 11-16",
      "Magic Damage reduced by 14-18"
    ],
    category: "Exceptional Unique Shields"
  },
  "Lidless Wall": {
    name: "Lidless Wall",
    type: "Grim Shield",
    image: "items/boneshield.gif",
    props: [
      "Defense: 271-347",
      "Durability: 70",
      "Req Strength: 58",
      "% Block: Paladin 50%Amazon, Assassin, Barbarian 45%Druid, Necromancer, Sorceress 40%",
      "Req Level: 41",
      "+80-130% Enhanced Defense",
      "+1 to all Skill Levels",
      "10% increased maximum Mana",
      "20% faster Cast Rate",
      "+3-5 to Mana after each kill",
      "+10 to Energy",
      "+1 to Light Radius"
    ],
    category: "Exceptional Unique Shields"
  },
  "Radament's Sphere": {
    name: "Radament's Sphere",
    type: "Ancient Shield",
    image: "items/gothicshield.gif",
    props: [
      "Defense: 244-282",
      "Durability: 100",
      "Req Strength: 110",
      "% Block: Paladin 66%Amazon, Assassin, Barbarian 61%Druid, Necromancer, Sorceress 56%",
      "Req Level: 50",
      "+160-200% Enhanced Defense",
      "+20% increased chance of Blocking",
      "+20% faster Block Rate",
      "5% chance to cast level 5 Poison Nova when struck",
      "40 charges level 6 Poison Explosion",
      "+75% Poison Resist",
      "+80 Poison Damage for 4 sec"
    ],
    category: "Exceptional Unique Shields"
  },
  "Blackoak Shield": {
    name: "Blackoak Shield",
    type: "Luna",
    image: "uniques/umbraldisk.gif",
    props: [
      "Defense: 322-372",
      "Durability: 129",
      "Req Strength: 100",
      "% Block: Paladin 50%Amazon, Assassin, Barbarian 45%Druid, Necromancer, Sorceress 40%",
      "Req Level: 61",
      "+160-200% Enhanced Defense",
      "0.5 per character level to Dexterity",
      "0.625 per character level to Cold Absorb",
      "1.25 per character level to Life",
      "+50% faster Block Rate",
      "Half Freeze Duration",
      "4% chance to cast level 5 Weaken when struck"
    ],
    category: "Unique Elite Shields"
  },
  Stormshield: {
    name: "Stormshield",
    type: "Monarch",
    image: "uniques/steelclash.gif",
    props: [
      "Defense: 136-519",
      "Req Strength: 156",
      "% Block: Paladin 77%Amazon, Assassin, Barbarian 72%Druid, Necromancer, Sorceress 67%",
      "Req Level: 73",
      "Indestructible",
      "+3.75 per character level to Defense",
      "attacker takes Lightning Damage of 10",
      "+25% increased chance of blocking",
      "35% Faster Block Rate",
      "Damage reduced by 35%",
      "+60% Cold Resist",
      "+25% Lightning Resist",
      "+30 to Strength"
    ],
    category: "Unique Elite Shields"
  },
  "Spike Thorn": {
    name: "Spike Thorn",
    type: "Blade Barrier",
    image: "items/spikedshield.gif",
    props: [
      "Defense: 360-410",
      "Durability: 333",
      "Req Strength: 118",
      "% Block: Paladin 50%Amazon, Assassin, Barbarian 45%Druid, Necromancer, Sorceress 40%",
      "Sockets: 1",
      "Req Level: 70",
      "+120-150% Enhanced Defense",
      "+30% Faster Hit Recovery",
      "Damage Reduced by 15-20%",
      "+1.375 per character level to Damage taken by attacker"
    ],
    category: "Unique Elite Shields"
  },
  "Medusa's Gaze": {
    name: "Medusa's Gaze",
    type: "Aegis",
    image: "items/towershield.gif",
    props: [
      "Defense: 405-453",
      "Durability: 92",
      "Req Strength: 219",
      "% Block: Paladin 54%Amazon, Assassin, Barbarian 49%Druid, Necromancer, Sorceress 44%",
      "Req Level: 76",
      "+150-180% Enhanced Defense",
      "5-9% Life Stolen per Hit",
      "Slows Target by 20%",
      "+40-80% Cold Resist",
      "10% Chance to cast Level 7 Lower Resist when struck",
      "100% Chance to cast Level 44 Nova when you die"
    ],
    category: "Unique Elite Shields"
  },
  "Head Hunter's Glory": {
    name: "Head Hunter's Glory",
    type: "Troll Nest",
    image: "items/boneshield.gif",
    props: [
      "Defense: 478-593",
      "Durability: 74",
      "Req Strength: 106",
      "% Block: Paladin 50%Amazon, Assassin, Barbarian 45%Druid, Necromancer, Sorceress 40%",
      "Sockets: 1-3",
      "Req Level: 75",
      "+320-420 Defense",
      "+300-350 Defense vs. Missile",
      "+20-30% Fire Resist",
      "+30-40% Poison Resist",
      "+5-7 Life after each Kill"
    ],
    category: "Unique Elite Shields"
  },
  "Spirit Ward": {
    name: "Spirit Ward",
    type: "Ward",
    image: "items/gothicshield.gif",
    props: [
      "Defense: 393-478",
      "Durability: 100",
      "Req Strength: 185",
      "% Block: Paladin 74-84%Amazon, Assassin, Barbarian 69-79%Druid, Necromancer, Sorceress 64-74%",
      "Req Level: 68",
      "+130-180% Enhanced Defense",
      "+25% Faster Block Rate",
      "20-30% Increased Chance of Blocking",
      "+30-40 to all Resistances",
      "+6-11 Cold Absorb",
      "5% Chance to cast Level 8 Fade when struck"
    ],
    category: "Unique Elite Shields"
  },
  "The Dragon Chang": {
    name: "The Dragon Chang",
    type: "Spear",
    image: "uniques/thedragonchang.gif",
    props: [
      "Damage: 13-15",
      "Dexterity: 20",
      "Durability: 30",
      "Req Level: 8",
      "Adds 3-6 Fire Damage",
      "100% Damage vs. Undead",
      "+2 to Light Radius",
      "+35 to Attack Rating",
      "+10 to minimum damage"
    ],
    category: "Unique Spears"
  },
  Razortine: {
    name: "Razortine",
    type: "Trident",
    image: "uniques/razortine.gif",
    props: [
      "Req Strength: 38",
      "Req Dexterity: 24",
      "Damage: 11-22",
      "Durability: 35",
      "Req Level: 12",
      "+30-50% Enhanced Damage",
      "Slows target by 25%",
      "50% target defense",
      "+8 to Dexterity",
      "+15 to Strength",
      "30% increased attack speed"
    ],
    category: "Unique Spears"
  },
  Bloodthief: {
    name: "Bloodthief",
    type: "Brandistock",
    image: "uniques/bloodthief.gif",
    props: [
      "Req Strength: 40",
      "Req Dexterity: 50",
      "Damage: 10-28",
      "Durability: 28",
      "Req Level: 17",
      "+50-70% Enhanced Damage",
      "35% chance of Open Wounds",
      "8-12% Life stolen per hit",
      "+26 to Life",
      "+10 to Strength"
    ],
    category: "Unique Spears"
  },
  "Lance of Yaggai": {
    name: "Lance of Yaggai",
    type: "Spetum",
    image: "uniques/lanceofyaggai.gif",
    props: [
      "Req Strength: 54",
      "Req Dexterity: 35",
      "Damage: 15-23",
      "Durability: 28",
      "Req Level: 22",
      "Adds 1-60 Lightning Damage",
      "+15 to All Resistances",
      "+40% increased Attack Speed",
      "Attacker takes 8 Damage"
    ],
    category: "Unique Spears"
  },
  "The Tannr Gorerod": {
    name: "The Tannr Gorerod",
    type: "Pike",
    image: "uniques/thetannrgorerod.gif",
    props: [
      "Req Strength: 60",
      "Req Dexterity: 45",
      "Damage: 25-126",
      "Durability: 25",
      "Req Level: 27",
      "+80-100% Enhanced Damage",
      "+3 to Light Radius",
      "15% to max Fire Resist",
      "15% Fire Resist",
      "Adds 23-54 Fire Damage",
      "+60 to Attack Rating",
      "+30 to Life"
    ],
    category: "Unique Spears"
  },
  "The Impaler": {
    name: "The Impaler",
    type: "War Spear",
    image: "items/spear.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 25",
      "Damage: 24-99",
      "Durability: 30",
      "Req Level: 31",
      "+140-170% Enhanced Damage",
      "40% chance of Open Wounds",
      "+20% increased Attack Speed",
      "Ignore Targets Defense",
      "+150 to Attack Rating",
      "Prevent Monster Heal",
      "+5 to Impale (Amazon only)",
      "+3 to Power Strike (Amazon only)"
    ],
    category: "Exceptional Unique Spears"
  },
  "Kelpie Snare": {
    name: "Kelpie Snare",
    type: "Fuscina",
    image: "items/trident.gif",
    props: [
      "Req Strength: 77",
      "Req Dexterity: 25",
      "Damage: 75-153",
      "Durability: 35",
      "Req Level: 33",
      "+140-180% Enhanced Damage",
      "Adds 30-50 Damage",
      "Slows Target by 75%",
      "+1.25 per character level to Life",
      "+50% Fire Resist",
      "+10 to Strength"
    ],
    category: "Exceptional Unique Spears"
  },
  "Soulfeast Tine": {
    name: "Soulfeast Tine",
    type: "War Fork",
    image: "items/brandistock.gif",
    props: [
      "Req Strength: 64",
      "Req Dexterity: 76",
      "Damage: 40-116",
      "Durability: 43",
      "Req Level: 35",
      "+150-250 to Attack Rating",
      "+150-190% Enhanced Damage",
      "-20% Requirements",
      "7% Life stolen per hit",
      "7% Mana stolen per hit",
      "20% Stamina Drain"
    ],
    category: "Exceptional Unique Spears"
  },
  "Hone Sundan": {
    name: "Hone Sundan",
    type: "Yari",
    image: "items/spetum.gif",
    props: [
      "Req Strength: 101",
      "Damage: 95-217",
      "Durability: 28",
      "Req Level: 37",
      "+160-200% Enhanced Damage",
      "Adds 20-40 Damage",
      "45% chance of Crushing Blow",
      "Repairs 1 durability in 10 seconds",
      "3 sockets"
    ],
    category: "Exceptional Unique Spears"
  },
  "Spire of Honor": {
    name: "Spire of Honor",
    type: "Lance",
    image: "items/pike.gif",
    props: [
      "Req Strength: 110",
      "Req Dexterity: 88",
      "Damage: 87-382",
      "Durabilty: 25",
      "Req Level: 39",
      "+150-200% Enhanced Damage",
      "Adds 20-40 Damage",
      "+1.5 per character level % Damage to demons",
      "20% Faster Hit Recovery",
      "+20 Replenish Life",
      "+25% Bonus to Attack Rating",
      "+25% Enhanced defense",
      "+3 to Combat Skills (Paladin only)",
      "+3 to Light Radius"
    ],
    category: "Exceptional Unique Spears"
  },
  "Arioc's Needle": {
    name: "Arioc's Needle",
    type: "Hyperion Spear",
    image: "items/spear.gif",
    props: [
      "Req Strength: 155",
      "Req Dexterity: 120",
      "Damage: 98-392",
      "Durability: 30",
      "Req Level: 81",
      "+180-230% Enhanced Damage",
      "50% Deadly Strike",
      "+394 Poison Damage over 10 seconds",
      "+30% Increased Attack Speed",
      "+2-4 to all Skills",
      "Ignores Target's Defense"
    ],
    category: "Elite Unique Spears"
  },
  Viperfork: {
    name: "Viperfork",
    type: "Mancatcher",
    image: "items/brandistock.gif",
    props: [
      "Req Strength: 132",
      "Req Dexterity: 134",
      "Damage: 121-312",
      "Durability: 28",
      "Req Level: 71",
      "+190-240% Enhanced Damage",
      "+200-250 to Attack Rating",
      "+50% Increased Attack Speed",
      "+325 Poison Damage over 10 seconds",
      "+30-50% Poison Resist",
      "15% Chance to cast Level 9 Poison Explosion on striking"
    ],
    category: "Elite Unique Spears"
  },
  "Steel Pillar": {
    name: "Steel Pillar",
    type: "War Pike",
    image: "items/pike.gif",
    props: [
      "Req Strength: 165",
      "Req Dexterity: 106",
      "Damage: 102-640",
      "Indestructible",
      "Req Level: 69",
      "+210-260% Enhanced Damage",
      "25% Chance of Crushing Blow",
      "-20% Target Defense",
      "+25% Increased Attack Speed",
      "+50-80% Enhanced Defense"
    ],
    category: "Elite Unique Spears"
  },
  "Bane Ash": {
    name: "Bane Ash",
    type: "Short Staff",
    image: "uniques/baneash.gif",
    props: [
      "Damage: 1-8",
      "Durability: 20",
      "Req Level: 5",
      "+50-60% Enhanced Damage",
      "+50% Damage to Undead",
      "+50% Fire Resist",
      "Adds 4-6 Fire Damage",
      "+30 to Mana",
      "20% Increased Attack Speed",
      "+5 to Fire Bolt (Sorceress only)",
      "+2 to Warmth (Sorceress only)"
    ],
    category: "Unique Staves"
  },
  "Serpent Lord": {
    name: "Serpent Lord",
    type: "Long Staff",
    image: "uniques/serpentlord.gif",
    props: [
      "Damage: 2-11",
      "Durability: 30",
      "Req Level: 9",
      "+30-40% Enhanced Damage",
      "+50% Damage to Undead",
      "100% Mana stolen per hit",
      "-50% to Target Defense",
      "-1 to Light Radius",
      "+50% Poison Resist",
      "Adds 12 Poison Damage for 3 seconds",
      "+10 to Mana"
    ],
    category: "Unique Staves"
  },
  "Spire of Lazarus": {
    name: "Spire of Lazarus",
    type: "Gnarled Staff",
    image: "uniques/spireoflazarus.gif",
    props: [
      "Damage: 4-12",
      "Durability: 35",
      "Req Level: 18",
      "+50% Damage to Undead",
      "Adds 1-28 Lightning Damage",
      "43% Regenerate Mana",
      "+ 1 to Sorceress Skill Levels",
      "+15 to Energy",
      "Damage reduced by 5",
      "+75% Lightning Resistance",
      "+2 to Lightning (Sorceress only)",
      "+1 to Chain Lightning (Sorceress only)",
      "+3 to Static Field (Sorceress only)"
    ],
    category: "Unique Staves"
  },
  "The Salamander": {
    name: "The Salamander",
    type: "Battle Staff",
    image: "uniques/thesalamander.gif",
    props: [
      "Damage: 6-13",
      "Durability: 40",
      "Req Level: 21",
      "+50% Damage to Undead",
      "+2 to Fire Ball (Sorceress only)",
      "+1 to Fire Wall (Sorceress only)",
      "+2 to Fire Skills",
      "+30% Fire Resist",
      "Adds 15-32 Fire Damage",
      "+3 to Warmth (Sorceress only)"
    ],
    category: "Unique Staves"
  },
  "The Iron Jang Bong": {
    name: "The Iron Jang Bong",
    type: "War Staff",
    image: "uniques/theironiangbong.gif",
    props: [
      "Damage: 24-56",
      "Durability: 50",
      "Req Level: 28",
      "+100% Enhanced Damage",
      "+50% Damage to Undead",
      "50% bonus to Attack Rating",
      "20% Faster Cast Rate",
      "+2 to Sorceress Skill Level",
      "+30 Defense",
      "+3 to Frost Nova (Sorceress only)",
      "+2 to Blaze (Sorceress only)",
      "+2 to Nova (Sorceress only)"
    ],
    category: "Unique Staves"
  },
  Razorswitch: {
    name: "Razorswitch",
    type: "Jo Staff",
    image: "items/shortstaff.gif",
    props: [
      "Damage: 6-21",
      "Durability: 20",
      "Req Strength: 25",
      "Req Level: 28",
      "+50% Damage to Undead",
      "+1 to All Skill Levels",
      "30% Faster Cast Rate",
      "Magic Damage reduced by 15",
      "+50 to all Resistances",
      "+175 to Mana",
      "+80 to Life",
      "Attacker takes damage of 15"
    ],
    category: "Exceptional Unique Staves"
  },
  Ribcracker: {
    name: "Ribcracker",
    type: "Quarterstaff",
    image: "items/longstaff.gif",
    props: [
      "Damage: 54-169",
      "Durability: 130",
      "Req Strength: 25",
      "Req Level: 31",
      "+200-300% Enhanced Damage",
      "Adds 30-65 Damage",
      "+50% Damage to Undead",
      "50% chance of Crushing Blow",
      "50% Increased Attack Speed",
      "50% Faster Hit Recovery",
      "100% Enhanced Defense",
      "+100 Defense",
      "+15 to Dexterity"
    ],
    category: "Exceptional Unique Staves"
  },
  "Chromatic Ire": {
    name: "Chromatic Ire",
    type: "Cedar Staff",
    image: "items/gnarledstaff.gif",
    props: [
      "Damage: 11-32",
      "Durability: 35",
      "Req Strength: 25",
      "Req Level: 35",
      "+50% Damage to Undead",
      "20% Faster Cast Rate",
      "+3 to Sorceress Skill Levels",
      "20-25% increased maximum Life",
      "+20-40 to all Resistances",
      "Attacker takes Lightning Damage of 20",
      "+1 to Cold Mastery (Sorceress only)",
      "+1 to Lightning Mastery (Sorceress only)",
      "+1 to Fire Mastery (Sorceress only)"
    ],
    category: "Exceptional Unique Staves"
  },
  Warpspear: {
    name: "Warpspear",
    type: "Gothic Staff",
    image: "items/battlestaff.gif",
    props: [
      "Damage: 14-34",
      "Durability: 40",
      "Req Strength: 25",
      "Req Level: 39",
      "+50% Damage to Undead",
      "Ignore Targets Defense",
      "+250 Defense vs. Missles",
      "+3 to Sorceress Skill Levels",
      "+3 to Energy Shield (Sorceress only)",
      "+3 to Telekinesis (Sorceress only)",
      "+3 to Teleport (Sorceress only)"
    ],
    category: "Exceptional Unique Staves"
  },
  "Skull Collector": {
    name: "Skull Collector",
    type: "Rune Staff",
    image: "items/warstaff.gif",
    props: [
      "Damage: 24-58",
      "Durability: 50",
      "Req Strength: 25",
      "Req Level: 41",
      "+50% Damage to Undead",
      "+20 to Mana after each kill",
      "20% increased maximum Mana",
      "+1 per character level better chance of getting Magic items",
      "+2 to all Skill Levels"
    ],
    category: "Exceptional Unique Staves"
  },
  "Ondal's Wisdom": {
    name: "Ondal's Wisdom",
    type: "Elder Staff",
    image: "items/gnarledstaff.gif",
    props: [
      "Req Strength: 44",
      "Req Dexterity: 37",
      "Damage: 80-93",
      "Durability: 35",
      "Req Level: 66",
      "+2-4 to all Skills",
      "+45% Faster Cast Rate",
      "+450-550 Defense",
      "+40-50 to Energy",
      "Magic Damage reduced by 5-8",
      "+5% to Experience Gained",
      "+50% Damage to Undead"
    ],
    category: "Elite Unique Staves"
  },
  "Mang Song's Lesson": {
    name: "Mang Song's Lesson",
    type: "Archon Staff",
    image: "items/warstaff.gif",
    props: [
      "Req Strength: 34",
      "Damage: 83-99",
      "Durability: 26",
      "Req Level: 82",
      "+5 to all Skills",
      "+30% Faster Cast Rate",
      "-7-15% to Enemy Lightning Resistance",
      "-7-15% to Enemy Cold Resistance",
      "-7-15% to Enemy Fire Resistance",
      "10% Regenerate Mana",
      "+50% Damage to Undead"
    ],
    category: "Elite Unique Staves"
  },
  "Rixot's Keen": {
    name: "Rixot's Keen",
    type: "Short Sword",
    image: "uniques/rixotskeen.gif",
    props: [
      "Damage: 9-14",
      "Durability: 24",
      "Req Level: 2",
      "1-Handed",
      "+100% Enhanced Damage",
      "25% chance of Crushing Blow",
      "20% Bonus to Attack Rating",
      "+2 to Light Radius",
      "+5 to Minimum Damage",
      "+25 Defense"
    ],
    category: "Unique Swords"
  },
  "Blood Crescent": {
    name: "Blood Crescent",
    type: "Scimitar",
    image: "uniques/bloodcrescent.gif",
    props: [
      "Req Dexterity: 21",
      "Damage: 3-10",
      "Durability: 22",
      "Req Level: 7",
      "1-Handed",
      "+60-80% Enhanced Damage",
      "33% Chance of Open Wounds",
      "15% Increased Attack Speed",
      "15% Life stolen per hit",
      "+4 to Light Radius",
      "+15 to All Resistances",
      "+15 to Life"
    ],
    category: "Unique Swords"
  },
  "Skewer of Krintiz": {
    name: "Skewer of Krintiz",
    type: "Sabre",
    image: "uniques/skewerofkrintiz.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 25",
      "Damage: 7-19",
      "Durability: 32",
      "Req Level: 10",
      "1-Handed",
      "Ignores Target's Defense",
      "7% Mana stolen per hit",
      "+50% Enhanced Damage",
      "Adds 3-7 Damage",
      "+10 to Dexterity",
      "+10 to Strength"
    ],
    category: "Unique Swords"
  },
  Gleamscythe: {
    name: "Gleamscythe",
    type: "Falchion",
    image: "uniques/gleamscythe.gif",
    props: [
      "Req Strength: 33",
      "Damage: 14-34",
      "Durability: 32",
      "Req Level: 13",
      "1-Handed",
      "+60-100% Enhanced Damage",
      "Adds 3-5 Cold Damage for 2 sec",
      "+3 to Light Radius",
      "+20 Defense",
      "+30 to Mana",
      "20% Increased Attack Speed"
    ],
    category: "Unique Swords"
  },
  "Griswold's Edge": {
    name: "Griswold's Edge",
    type: "Broad Sword",
    image: "uniques/griswoldsedge.gif",
    props: [
      "Req Strength: 48",
      "Damage: 12-30",
      "Durability: 32",
      "Req Level: 17",
      "1-Handed",
      "+80-120% Enhanced Damage",
      "+12 to Strength",
      "Adds 10-25 Fire Damage",
      "+100 to Attack Rating",
      "10% Increased Attack Speed",
      "Knockback"
    ],
    category: "Unique Swords"
  },
  Hellplague: {
    name: "Hellplague",
    type: "Long Sword",
    image: "uniques/hellplague.gif",
    props: [
      "Req Strength: 55",
      "Req Dexterity: 39",
      "Damage: 5-34",
      "Durability: 44",
      "Req Level: 22",
      "1-Handed",
      "+70-80% Enhanced Damage",
      "+2 to Fire Skills",
      "Adds 25-75 Fire Damage",
      "5% Life stolen per hit",
      "5% Mana stolen per hit",
      "Adds 28-56 Poison damage for 3 seconds"
    ],
    category: "Unique Swords"
  },
  "Culwen's Point": {
    name: "Culwen's Point",
    type: "War Sword",
    image: "uniques/culwenspoint.gif",
    props: [
      "Req Strength: 71",
      "Req Dexterity: 45",
      "Damage: 13-36",
      "Durability: 44",
      "Req Level: 29",
      "1-Handed",
      "+70-80% Enhanced Damage",
      "20% Increased Attack Speed",
      "Poison Length reduced by 50%",
      "20% Faster Hit Recovery",
      "+1 to all Skill Levels",
      "+60 to Attack Rating"
    ],
    category: "Unique Swords"
  },
  Shadowfang: {
    name: "Shadowfang",
    type: " 2-Handed Sword",
    image: "uniques/shadowfang.gif",
    props: [
      "Req Strength: 35",
      "Req Dexterity: 27",
      "Damage: 16-34",
      "Durability: 44",
      "Req Level: 12",
      "2-Handed",
      "+100% Enhanced Damage",
      "9% Life stolen per hit",
      "-2 to Light Radius",
      "9% Mana stolen per hit",
      "Cold Resist 20%",
      "Adds 10-30 Cold Damage for 6 sec"
    ],
    category: "Unique Swords"
  },
  Soulflay: {
    name: "Soulflay",
    type: "Claymore",
    image: "uniques/soulflay.gif",
    props: [
      "Req Strength: 47",
      "Damage: 22-60",
      "Durability: 50",
      "Req Level: 19",
      "2-Handed",
      "4% Life stolen per hit",
      "4-10% Mana stolen per hit",
      "+70-100% Enhanced Damage",
      "10% Increased Attack Speed",
      "5 to All Resistances"
    ],
    category: "Unique Swords"
  },
  "Kinemil's Awl": {
    name: "Kinemil's Awl",
    type: "Giant Sword",
    image: "uniques/kinemilsawl.gif",
    props: [
      "Req Strength: 56",
      "Req Dexterity: 34",
      "Damage: 16-56",
      "Durability: 50",
      "Req Level: 23",
      "2-Handed",
      "+80-100% Enhanced Damage",
      "+100-150 to Attack Rating",
      "Adds 6-40 Fire Damage",
      "+6 to Holy Fire (Paladin only)",
      "+20 to Mana"
    ],
    category: "Unique Swords"
  },
  Blacktongue: {
    name: "Blacktongue",
    type: "Bastard Sword",
    image: "uniques/blacktongue.gif",
    props: [
      "Req Strength: 62",
      "Damage: 30-44",
      "Durability: 40",
      "Req Level: 26",
      "2-Handed",
      "+50-60% Enhanced Damage",
      "+113 Poison Damage for 6 sec",
      "+50 to Attack Rating",
      "Prevent Monster Heal",
      "50% Poison Resist"
    ],
    category: "Unique Swords"
  },
  Ripsaw: {
    name: "Ripsaw",
    type: "Flamberge",
    image: "uniques/ripsaw.gif",
    props: [
      "Req Strength: 70",
      "Req Dexterity: 49",
      "Damage: 22-67",
      "Durability: 50",
      "Req Level: 26",
      "2-Handed",
      "+80-100% Enhanced Damage",
      "80% chance of Open Wounds",
      "6% Mana stolen per hit",
      "+15 to max Damage"
    ],
    category: "Unique Swords"
  },
  "The Patriarch": {
    name: "The Patriarch",
    type: "Great Sword",
    image: "uniques/thepatriarch.gif",
    props: [
      "Req Strength: 100",
      "Req Dexterity: 60",
      "Damage: 50-92",
      "Durability: 50",
      "Req Level: 29",
      "2-Handed",
      "+100-120% Enhanced Damage",
      "Hit Blinds Target",
      "Damage reduced by 3",
      "Magic Damage reduced by 3",
      "100% extra gold from monsters",
      "+10 to Strength"
    ],
    category: "Unique Swords"
  },
  Bloodletter: {
    name: "Bloodletter",
    type: "Gladius",
    image: "items/shortsword.gif",
    props: [
      "Req Strength: 25",
      "Damage: 31-97",
      "Durability: 54",
      "Req Level: 30",
      "1-Handed",
      "+140% Enhanced Damage",
      "Adds 12-45 Damage",
      "+90 to Attack Rating",
      "20% Increased Attack Speed",
      "10% Slower Stamina Drain",
      "8% Life Stolen per Hit",
      "+1-3 to Whirlwind (Barbarian only)",
      "+2-4 to Sword Mastery (Barbarian only)"
    ],
    category: "Exceptional Unique Swords"
  },
  "Coldsteel Eye": {
    name: "Coldsteel Eye",
    type: "Cutlass",
    image: "items/scimitar.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 52",
      "Damage: 24-73",
      "Durability: 72",
      "Req Level: 31",
      "1-Handed",
      "+200-250% Enhanced Damage",
      "50% Chance of Deadly Strike",
      "20% Increased Attack Speed",
      "6% Mana stolen per hit",
      "Slows Target by 30%",
      "Hit Blinds Target"
    ],
    category: "Exceptional Unique Swords"
  },
  Hexfire: {
    name: "Hexfire",
    type: "Shamshir",
    image: "items/saber.gif",
    props: [
      "Req Strength: 58",
      "Req Dexterity: 58",
      "Damage: 59-102",
      "Durability: 32",
      "Req Level: 33",
      "1-Handed",
      "+140-160% Enhanced Damage",
      "Adds 35-40 Damage",
      "+3 to Fire Skills",
      "36 charges level 6 Hydra",
      "Ignore Targets Defense",
      "+25% Fire Resist",
      "10% to maximum Fire Resist"
    ],
    category: "Exceptional Unique Swords"
  },
  "Blade of Ali Baba": {
    name: "Blade of Ali Baba",
    type: "Tulwar",
    image: "items/falchion.gif",
    props: [
      "Req Strength: 70",
      "Req Dexterity: 42",
      "Damage: 25-77",
      "Durability: 32",
      "Req Level: 35",
      "1-Handed",
      "+60-120% Enhanced Damage",
      "+2.5 per character level extra gold from monsters",
      "+1 per character level % better chance of getting magic items",
      "+15 to Mana",
      "+5-15 to Dexterity",
      "2 Sockets"
    ],
    category: "Exceptional Unique Swords"
  },
  "Ginther's Rift": {
    name: "Ginther's Rift",
    type: "Dimensional Blade",
    image: "items/crystalsword.gif",
    props: [
      "Req Strength: 85",
      "Req Dexterity: 60",
      "Damage: 26-87",
      "Durability: 60",
      "Req Level: 37",
      "1-Handed",
      "+100-150% Enhanced Damage",
      "Adds 50-120 Magic Damage",
      "30% Increased Attack Rate",
      "Magic Damage reduced by 7-12",
      "Repairs 1 durability in 5 seconds"
    ],
    category: "Exceptional Unique Swords"
  },
  Headstriker: {
    name: "Headstriker",
    type: "Battle Sword",
    image: "items/broadsword.gif",
    props: [
      "Req Strength: 92",
      "Req Dexterity: 43",
      "Damage: 40-184",
      "Durability: 32",
      "Req Level: 39",
      "1-Handed",
      "150% Enhanced Damage",
      "+1 per character level to maximum Damage",
      "+1.5 per character level to % Deadly Strike",
      "Prevent Monster Heal",
      "+15 to Strength"
    ],
    category: "Exceptional Unique Swords"
  },
  "Plague Bearer": {
    name: "Plague Bearer",
    type: "Rune Sword",
    image: "items/longsword.gif",
    props: [
      "Req Strength: 103",
      "Req Dexterity: 79",
      "Damage: 35-150",
      "Durability: 44",
      "Req Level: 41",
      "1-Handed",
      "150% Enhanced Damage",
      "Adds 10-45 Damage",
      "+300 Poison Damage over 8 seconds",
      "5% chance to cast level 4 Poison Nova on striking",
      "+45% Poison Resist",
      "+5 to Rabies (Druid only)"
    ],
    category: "Exceptional Unique Swords"
  },
  "The Atlantean": {
    name: "The Atlantean",
    type: "Ancient Sword",
    image: "items/warsword.gif",
    props: [
      "Req Strength: 127",
      "Req Dexterity: 88",
      "Damage: 54-150",
      "Durability: 144",
      "Req Level: 42",
      "1-Handed",
      "+200-250% Enhanced Damage",
      "+2 to Paladin Skill Levels",
      "50% Bonus to Attack Rating",
      "+75 Defense",
      "+8 to Vitality",
      "+12 to Dexterity",
      "+16 to Strength"
    ],
    category: "Exceptional Unique Swords"
  },
  "Crainte Vomir": {
    name: "Crainte Vomir",
    type: "Espandon",
    image: "items/twohandedsword.gif",
    props: [
      "Req Strength: 73",
      "Req Dexterity: 61",
      "Damage: 46-120",
      "Durability: 44",
      "Req Level: 42",
      "2-Handed",
      "+160-200% Enhanced Damage",
      "50% Increased Attack Speed",
      "Slows Target by 35%",
      "-70 to Monster Defense per hit",
      "20% Faster Run/Walk",
      "Damage reduced by 10%"
    ],
    category: "Exceptional Unique Swords"
  },
  "Bing Sz Wang": {
    name: "Bing Sz Wang",
    type: "Dacian Falx",
    image: "items/claymore.gif",
    props: [
      "Req Strength: 64",
      "Req Dexterity: 14",
      "Damage: 59-158",
      "Durability: 50",
      "Req Level: 43",
      "2-Handed",
      "+130-160% Enhanced Damage",
      "Adds 50-140 Cold Damage for 3 seconds",
      "5% chance to cast level 3 Frozen Orb on striking",
      "+2 Freezes Target",
      "-30% Requirements",
      "+20 to Strength"
    ],
    category: "Exceptional Unique Swords"
  },
  "The Vile Husk": {
    name: "The Vile Husk",
    type: "Tusk Sword",
    image: "items/giantsword.gif",
    props: [
      "Req Strength: 104",
      "Req Dexterity: 71",
      "Damage: 47-174",
      "Durability: 50",
      "Req Level: 44",
      "2-Handed",
      "+150-200% Enhanced Damage",
      "+7.5 per character level to % Damage to Undead",
      "+10 per character level to Attack Rating",
      "+250 Poison Damage over 6 seconds",
      "6% chance to cast level 1 Amplify Damage on striking",
      "+50% Poison Resist"
    ],
    category: "Exceptional Unique Swords"
  },
  Cloudcrack: {
    name: "Cloudcrack",
    type: "Gothic Sword",
    image: "items/bastardsword.gif",
    props: [
      "Req Strength: 113",
      "Req Dexterity: 20",
      "Damage: 97-180",
      "Durability: 40",
      "Req Level: 45",
      "2-Handed",
      "+150-200% Enhanced Damage",
      "6% chance to cast Level 7 Fist of Heavens on striking",
      "Adds 1-240 Lightning Damage",
      "10% to maximum Lightning Resist",
      "+30 to Defense",
      "Attacker takes Lightning Damage of 15",
      "+2 to Defensive Auras (Paladin only)",
      "+2 to Offensive Auras (Paladin only)",
      "+2 to Light Radius"
    ],
    category: "Exceptional Unique Swords"
  },
  "Todesfaelle Flamme": {
    name: "Todesfaelle Flamme",
    type: "Zweihander",
    image: "items/flamberge.gif",
    props: [
      "Req Strength: 125",
      "Req Dexterity: 94",
      "Damage: 63-140",
      "Durability: 50",
      "Req Level: 46",
      "2-Handed",
      "+120-160% Enhanced Damage",
      "Adds 50-200 Fire Damage",
      "10% chance to cast level 6 Fire Ball on attack",
      "20 charges level 10 Fire Wall",
      "45 charges level 10 Enchant",
      "+10 Fire Absorb",
      "+40% Fire Resist"
    ],
    category: "Exceptional Unique Swords"
  },
  Swordguard: {
    name: "Swordguard",
    type: "Executioner Sword",
    image: "items/greatsword.gif",
    props: [
      "Req Strength: 85",
      "Req Dexterity: 55",
      "Damage: 126-224",
      "Durability: 50",
      "Req Level: 48",
      "2-Handed",
      "+170-180% Enhanced Damage",
      "+5 per character level to Defense",
      "30% Damage taken goes to Mana",
      "-50% Requirements",
      "+10-20 to All Resistances",
      "20% Faster Hit Recovery",
      "20% Increased chance of Blocking",
      "+100 Defense against Missles",
      "+200 Defense against Melee"
    ],
    category: "Exceptional Unique Swords"
  },
  "Djinn Slayer": {
    name: "Djinn Slayer",
    type: "Ataghan",
    image: "items/scimitar.gif",
    props: [
      "Req Strength: 138",
      "Req Dexterity: 95",
      "Damage: 75-156",
      "Durability: 22",
      "Sockets: 1-2",
      "Req Level: 65",
      "1-Handed",
      "+190-240% Enhanced Damage",
      "+100-150% Damage to Demons",
      "Adds 250-500 Fire Damage",
      "3-6% Mana Stolen per Hit",
      "+3-7 Lightning Damage",
      "+200-300 to Attack Rating vs. Demons"
    ],
    category: "Elite Unique Swords"
  },
  Bloodmoon: {
    name: "Bloodmoon",
    type: "Elegant Blade",
    image: "items/saber.gif",
    props: [
      "Req Strength: 109",
      "Req Dexterity: 122",
      "Damage: 102-162",
      "Durability: 32",
      "Req Level: 61",
      "1-Handed",
      "+210-260% Enhanced Damage",
      "10-15% Life Stolen per Hit",
      "50% Chance of Open Wounds",
      "+7-13 Life after each Kill",
      "9 Charges Level 15 Blood Golem"
    ],
    category: "Elite Unique Swords"
  },
  Azurewrath: {
    name: "Azurewrath",
    type: "Phase Blade",
    image: "items/crystalsword.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 136",
      "Damage: 102-129",
      "Indestructible",
      "Req Level: 85",
      "1-Handed",
      "+230-270% Enhanced Damage",
      "+30% Increased Attack Speed",
      "Adds 250-500 Magic Damage",
      "Adds 250-500 Cold Damage for 10 sec",
      "+1 to all Skills",
      "+5-10 to all Attributes",
      "Level 10-13 Sanctuary Aura when equipped",
      "+3 to Light Radius"
    ],
    category: "Elite Unique Swords"
  },
  Lightsabre: {
    name: "Lightsabre",
    type: "Phase Blade",
    image: "uniques/azurewrath.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 136",
      "Damage: 87-135",
      "Durability: Indestructible",
      "Req Level: 58",
      "1-Handed",
      "+150-200% Enhanced Damage",
      "5% chance to cast level 14-20 Chain Lightning on attack",
      "20% increased Attack Speed",
      "Ignore Target's Defense",
      "+7 to Light Radius",
      "25% Lightning Absorb",
      "Adds 10-30 Damage",
      "Adds 60-120 Magic Damage",
      "Adds 1-200 Lightning Damage",
      "5-7% Mana stolen per hit"
    ],
    category: "Elite Unique Swords"
  },
  Frostwind: {
    name: "Frostwind",
    type: "Cryptic Sword",
    image: "items/longsword.gif",
    props: [
      "Req Strength: 99",
      "Req Dexterity: 109",
      "Damage: 14-254",
      "Durability: 44",
      "Req Level: 70",
      "1-Handed",
      "+180-230% Enhanced Damage",
      "Adds 237-486 Cold Damage for 6 sec",
      "+7-14 to Arctic Blast",
      "+4 to Freezes Target",
      "7-15% Cold Absorb",
      "Half Freeze Duration",
      "+25% Increased Attack Speed"
    ],
    category: "Elite Unique Swords"
  },
  Flamebellow: {
    name: "Flamebellow",
    type: "Balrog Blade",
    image: "items/giantsword.gif",
    props: [
      "Req Strength: 185",
      "Req Dexterity: 87",
      "Damage: 148-401",
      "Durability: 50",
      "Req Level: 71",
      "2-Handed",
      "+170-240% Enhanced Damage",
      "Adds 233-482 Fire Damage",
      "+3 to Fire Skills",
      "+12-18 to Inferno",
      "+10-20 to Strength",
      "+5-10 to Vitality",
      "12% Chance to cast level 16 Firestorm on striking",
      "20-30% Fire Absorb"
    ],
    category: "Elite Unique Swords"
  },
  Doombringer: {
    name: "Doombringer",
    type: "Champion Sword",
    image: "uniques/blacktongue.gif",
    props: [
      "Req Strength: 163",
      "Req Dexterity: 103",
      "Damage: 228-390",
      "Durability: Indestructible",
      "Req Level: 69",
      "2-Handed",
      "+180-250% Enhanced Damage",
      "Adds 30-100 Damage",
      "8% chance to cast level 3 Weaken on striking",
      "40% bonus to Attack Rating",
      "5-7% Life stolen per hit",
      "20% increased maximum Life"
    ],
    category: "Elite Unique Swords"
  },
  "The Grandfather": {
    name: "The Grandfather",
    type: "Colossus Blade",
    image: "uniques/thepatriarch.gif",
    props: [
      "Req Strength: 189",
      "Req Dexterity: 110",
      "Damage: 145-649",
      "Durability: Indestructible",
      "Req Level: 81",
      "2-Handed",
      "+150-250% Enhanced Damage",
      "+(2.5 per character level) to maximum Damage",
      "50 % bonus to Attack Rating",
      "+80 to Life",
      "+20 to Dexterity, Strength, Vitality, and Energy"
    ],
    category: "Elite Unique Swords"
  },
  "Accuracy of Heaven": {
    name: "Accuracy of Heaven",
    type: "Throwing Knife",
    image: "items/throwingknife.gif",
    props: [
      "Throw Damage: 6-14",
      "OneHand Damage: 1-20",
      "Quantity: 220",
      "Required Dexterity: 51",
      "Required Level: 21",
      "+50% Increased Attack Speed",
      "+36% Enhanced Maximum Damage (based on char lvl)",
      "Adds 20-36 Cold Damage",
      "+1 to Double Throw",
      "Increased Stack Size",
      "Replenishes Quantity"
    ],
    category: "Unique Throwing Weapons"
  },
  "Smoke Rift": {
    name: "Smoke Rift",
    type: "Balanced Axe",
    image: "items/balancedaxe.gif",
    props: [
      "Throw Damage: 71-88",
      "OneHand Damage: 29-59",
      "Quantity: 140",
      "Required Dexterity: 57",
      "Required Level: 22",
      "+493% Enhanced Damage",
      "Adds 1-20 Magic Damage",
      "Adds 1-20 Fire Damage",
      "Adds 1-20 Lightning Damage",
      "Adds 10-20 Cold Damage",
      "Increased Stack Size"
    ],
    category: "Unique Throwing Weapons"
  },
  "Star Venom": {
    name: "Star Venom",
    type: "Throwing Knife",
    image: "items/throwingknife.gif",
    props: [
      "Throw Damage: 18-36",
      "OneHand Damage: 16-30",
      "Quantity: 52",
      "Required Dexterity: 21",
      "Required Level: 3",
      "+25% Increased Attack Speed",
      "Adds 14-27 Damage",
      "Adds 22-33 Cold Damage",
      "+19 Poison Damage over 6 seconds"
    ],
    category: "Unique Throwing Weapons"
  },
  "Stone Splitter": {
    name: "Stone Splitter",
    type: "Balanced Axe",
    image: "items/balancedaxe.gif",
    props: [
      "Throw Damage: 23-34",
      "OneHand Damage: 11-20",
      "Quantity: 160",
      "Required Dexterity: 40",
      "Required Level: 6",
      "+1 to all Skills",
      "+40% Increased Attack Speed",
      "+190% Enhanced Damage",
      "Damage +27",
      "Adds 7-14 Magic Damage",
      "Increased Stack Size",
      "Replenishes Quantity"
    ],
    category: "Unique Throwing Weapons"
  },
  Deathbit: {
    name: "Deathbit",
    type: "Battle Dart",
    image: "items/throwingknife.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 52",
      "Throwing Damage: 25-67",
      "Damage: 18-44",
      "Req Level: 44",
      "+130-180% Enhanced Damage",
      "40% Deadly Strike",
      "+200-450 to Attack Rating",
      "7-9% Life stolen per hit",
      "4-6% Mana stolen per hit",
      "Replenishes quantity (1 in 4 sec)",
      "Max stack: 160"
    ],
    category: "Exceptional Unique Throwing Weapons"
  },
  "The Scalper": {
    name: "The Scalper",
    type: "Francisca",
    image: "items/balancedaxe.gif",
    props: [
      "Req Strength: 25",
      "Req Dexterity: 80",
      "Throwing Damage: 45-99",
      "Damage: 27-66",
      "Req Level: 57",
      "+150-200% Enhanced Damage",
      "33% Chance of Open Wounds",
      "+4 Mana after each kill",
      "20% increased Attack Speed",
      "25% bonus to Attack Rating",
      "4-6% Life stolen per hit",
      "Replenishes quantity (1 in 3 sec)",
      "Max stack: 130"
    ],
    category: "Exceptional Unique Throwing Weapons"
  },
  Warshrike: {
    name: "Warshrike",
    type: "Winged Knife",
    image: "items/balancedknife.gif",
    props: [
      "Req Strength: 45",
      "Req Dexterity: 142",
      "Throwing Damage: 69-136",
      "Damage: 81-122",
      "Req Level: 75",
      "+200-250% Enhanced Damage",
      "50% Deadly Strike",
      "+30% Increased Attack Speed",
      "Piercing Attack",
      "25% Chance to cast Level 9 Nova on striking",
      "Replenishes Quantity (1 in 3 sec)",
      "Max stack: 200"
    ],
    category: "Elite Unique Throwing Weapons"
  },
  Gimmershred: {
    name: "Gimmershred",
    type: "Flying Axe",
    image: "items/throwingaxe.gif",
    props: [
      "Req Strength: 88",
      "Req Dexterity: 108",
      "Throwing Damage: 39-204",
      "Damage: 44-201",
      "Req Level: 70",
      "+160-210% Enhanced Damage",
      "Adds 218-483 Fire Damage",
      "Adds 29-501 Lightning Damage",
      "Adds 176-397 Cold Damage",
      "+30% Increased Attack Speed",
      "Increased Stack Size",
      "Max stack: 240"
    ],
    category: "Elite Unique Throwing Weapons"
  },
  Lacerator: {
    name: "Lacerator",
    type: "Winged Axe",
    image: "items/balancedaxe.gif",
    props: [
      "Req Strength: 96",
      "Req Dexterity: 122",
      "Throwing Damage: 17-186",
      "Damage: 27-173",
      "Req Level: 68",
      "+150-210% Enhanced Damage",
      "+30% Increased Attack Speed",
      "Prevent Monster Heal",
      "50% Hit Causes Monster to Flee",
      "33% Chance to cast Level 3 Amplify Damage on striking",
      "33% chance of Open Wounds",
      "Max stack: 180",
      "Replenishes Quantity (1 in 4 sec)"
    ],
    category: "Elite Unique Throwing Weapons"
  },
  "Torch of Iro": {
    name: "Torch of Iro",
    type: "Wand",
    image: "uniques/torchofiro.gif",
    props: [
      "Damage: 2-4",
      "Durability: 15",
      "Req Level: 5",
      "+1 to Necromancer Skill Levels",
      "6% Life stolen per hit",
      "Adds 5-9 Fire Damage",
      "+50% Damage vs. Undead",
      "+10 to Energy",
      "5% Regenerate Mana",
      "+3 to Light Radius"
    ],
    category: "Unique Wands"
  },
  Maelstrom: {
    name: "Maelstrom",
    type: "Yew Wand",
    image: "uniques/maelstrom.gif",
    props: [
      "Damage: 2-8",
      "Durability: 15",
      "Req Level: 14",
      "30% Faster Cast Rate",
      "+40% Lightning Resist",
      "Adds 1-9 Lightning Damage",
      "+13 to Mana",
      "+50% Damage vs. Undead",
      "+1-3 to Iron Maiden (Necro only)",
      "+1-3 to Amplify Damage (Necro only)",
      "+1-3 to Terror (Necro only)",
      "+1-3 to Corpse Explosion (Necro only)"
    ],
    category: "Unique Wands"
  },
  Gravenspine: {
    name: "Gravenspine",
    type: "Bone Wand",
    image: "uniques/gravenspine.gif",
    props: [
      "Damage: 3-7",
      "Durabiilty: 15",
      "Req Level: 20",
      "5% Mana Stolen per hit",
      "Adds 4-8 Cold Damage for 3 sec",
      "+10 to Dexterity",
      "+10 to Strength",
      "+25-50 Mana",
      "+50% Damage vs. Undead",
      "+2 to Necromancer Skill Levels"
    ],
    category: "Unique Wands"
  },
  "Ume's Lament": {
    name: "Ume's Lament",
    type: "Grim Wand",
    image: "uniques/umeslament.gif",
    props: [
      "Damage: 5-11",
      "Durability: 15",
      "Req Level: 28",
      "50% Hit causes monster to flee",
      "20% Faster Cast Rate",
      "+2 to Necromancer Skill Levels",
      "+40 to Mana",
      "+50% Damage vs. Undead",
      "+2 to Decrepify (Necro only)",
      "+3 to Terror (Necro only)"
    ],
    category: "Unique Wands"
  },
  "Suicide Branch": {
    name: "Suicide Branch",
    type: "Burnt Wand",
    image: "items/wand.gif",
    props: [
      "Req Strength: 25",
      "Damage: 8-18",
      "Durability: 15",
      "Req Level: 33",
      "+50% Damage to Undead",
      "+1 to All Skills",
      "50% Faster Cast Rate",
      "10% increase maximum Mana",
      "+10 to all Resistances",
      "+40 to Life",
      "Attacker takes Damage of 25"
    ],
    category: "Exceptional Unique Wands"
  },
  "Carin Shard": {
    name: "Carin Shard",
    type: "Petrified Wand",
    image: "items/yewwand.gif",
    props: [
      "Req Strength: 25",
      "Damage: 8-24",
      "Durability: 15",
      "Req Level: 35",
      "+50% Damage to Undead",
      "+1.25 per character level to Mana",
      "+1.25 per character level to Life",
      "+1 to Necromancer Skill Levels",
      "+2 to Summoning Skills (Necro only)",
      "10% Faster Cast Rate",
      "30% Faster Hit Recovery",
      "+5 Replenish Life"
    ],
    category: "Exceptional Unique Wands"
  },
  "Arm of King Leoric": {
    name: "Arm of King Leoric",
    type: "Tomb Wand",
    image: "items/bonewand.gif",
    props: [
      "Req Strength: 25",
      "Damage: 10-22",
      "Durability: 15",
      "Req Level: 36",
      "+50% Damage to Undead",
      "10% chance to cast level 2 Bone Prison when struck",
      "5% chance to cast level 10 Bone Spirit when struck",
      "+1.25 per character level to Mana",
      "10% Faster Cast Rate",
      "+2 to Terror (Necro only)",
      "+2 to Raise Skeletal Mage (Necro only)",
      "+3 to Skeleton Mastery (Necro only)",
      "+3 to Raise Skeleton (Necro only)",
      "+2 to Summoning Skills (Necro only)",
      "+2 to Poison and Bone Skills (Necro only)"
    ],
    category: "Exceptional Unique Wands"
  },
  "Blackhand Key": {
    name: "Blackhand Key",
    type: "Grave Wand",
    image: "items/grimwand.gif",
    props: [
      "Req Strength: 25",
      "Damage: 13-29",
      "Durability: 15",
      "Req Level: 41",
      "+50% Damage to Undead",
      "+2 to Necromancer Skill Levels",
      "+1 to Curses (Necro only)",
      "20% Damage take goes to Mana",
      "30% Faster Cast Rate",
      "+37% Fire Resist",
      "+50 to Life",
      "30 charges level 13 Grim Ward",
      "-2 to Light Radius"
    ],
    category: "Exceptional Unique Wands"
  },
  Boneshade: {
    name: "Boneshade",
    type: "Lich Wand",
    image: "items/bonewand.gif",
    props: [
      "Req Strength: 25",
      "Damage: 10-31",
      "Durability: 17",
      "Req Level: 79",
      "+50% Damage to Undead",
      "+2 to Necromancer Skill Levels",
      "+1-2 to Bone Spirit (Necro only)",
      "+2-3 to Bone Spear (Necro only)",
      "+2-3 to Bone Wall (Necro only)",
      "+4-5 to Bone Armor (Necro only)",
      "+4-5 to Teeth (Necro only)",
      "25% Faster Cast Rate"
    ],
    category: "Elite Unique Wands"
  },
  "Death's Web": {
    name: "Death's Web",
    type: "Unearthed Wand",
    image: "items/grimwand.gif",
    props: [
      "Req Strength: 25",
      "Damage: 22-28",
      "Durability: 18",
      "Req Level: 66",
      "50% Damage to Undead",
      "-40-50% to Enemy Poison Resistance",
      "+7-12 to Mana after each Kill",
      "+7-12 Life after each Kill",
      "+2 to all Skills",
      "+2 to Poison and Bone Skills (Necro only)"
    ],
    category: "Elite Unique Wands"
  },
  Stoneraven: {
    name: "Stoneraven",
    type: "Matriarchal Spear",
    image: "items/maidenspear.gif",
    props: [
      "Damage: 214-361",
      "Req Strength: 114",
      "Req Dexterity: 142",
      "Durability: 28",
      "Req Level: 64",
      "+230-280% Enhanced Damage",
      "Adds 101-187 Magic Damage",
      "+400-600 Defense",
      "+30-50 to all Resistances",
      "+1-3 to Javelin and Spear Skills (Amazon only)"
    ],
    category: "Unique Amazon Weapons"
  },
  "Lycander's Flank": {
    name: "Lycander's Flank",
    type: "Ceremonial Pike",
    image: "items/lycanders_flank.gif",
    props: [
      "Damage: 130-353",
      "Req Strength: 115",
      "Req Dexterity: 98",
      "Durability: 25",
      "Req Level: 42",
      "+150-200% Enhanced Damage",
      "Adds 25-50 Damage",
      "+2 to Amazon Skills Levels",
      "30% increased Attack Speed",
      "5-9% Life stolen per hit",
      "+20 to Strength and Vitality",
      "+20% Enhanced Defense",
      "+2 to Javelin and Spear Skills"
    ],
    category: "Unique Amazon Weapons"
  },
  "Lycander's Aim": {
    name: "Lycander's Aim",
    type: "Ceremonial Bow",
    image: "items/lycanders_aim.gif",
    props: [
      "Damage: 72-173",
      "Req Strength: 73",
      "Req Dexterity: 110",
      "Req Level: 42",
      "+150-200% Enhanced damage",
      "Adds 25-50 Damage",
      "+2 to Amazon Skill Levels",
      "20% increased Attack Speed",
      "5-8% Mana stolen per hit",
      "+20 to Energy and Dexterity",
      "+20% Enhanced Defense",
      "+2 to Bow and Crossbow Skills"
    ],
    category: "Unique Amazon Weapons"
  },
  "Titan's Revenge": {
    name: "Titan's Revenge",
    type: "Ceremonial Javelin",
    image: "items/titans_revenge.gif",
    props: [
      "Damage: 70-155",
      "Throw Damage: 70-212",
      "Req Strength: 25",
      "Req Dexterity: 109",
      "Max Stack: 140",
      "Req Level: 42",
      "Replenishes 1 quantity in 3 seconds",
      "+2 to Amazon Skill Levels",
      "+150-200% Enhanced Damage",
      "Adds 25-50 Damage",
      "5-9% Life stolen per hit",
      "30% Faster Run/Walk",
      "+20 to Strength and Dexterity",
      "+2 to Javelin and Spear Skills"
    ],
    category: "Unique Amazon Weapons"
  },
  Thunderstroke: {
    name: "Thunderstroke",
    type: "Matriarchal Javelin",
    image: "items/maidenjavelin.gif",
    props: [
      "Damage: 75-162",
      "Throw Damage: 87-198",
      "Req Strength: 107",
      "Req Dexterity: 151",
      "Req Level: 69",
      "+150-200% Enhanced Damage",
      "Adds 1-511 Lightning Damage",
      "15% Increased Attack Speed",
      "-15% to Enemy Lightning Resistance",
      "20% Chance to cast Level 14 Lightning on striking",
      "+2-4 to Javelin and Spear Skills (Amazon only)",
      "+3 to Lightning Bolt (Amazon only)"
    ],
    category: "Unique Amazon Weapons"
  },
  "Blood Raven's Charge": {
    name: "Blood Raven's Charge",
    type: "Matriarchal Bow",
    image: "items/stagbow.gif",
    props: [
      "Damage: 56-155",
      "Req Strength: 87",
      "Req Dexterity: 187",
      "Req Level: 71",
      "+180-230% Enhanced Damage",
      "200-300% Bonus to Attack Rating",
      "Fires level 13 Explosive Arrows",
      "30 Charges Level 5 Revive",
      "+2-4 to Bow and Crossbow Skills (Amazon only)"
    ],
    category: "Unique Amazon Weapons"
  },
  "Shadow Killer": {
    name: "Shadow Killer",
    type: "Battle Cestus",
    image: "items/hatchethands.gif",
    props: [
      "Damage: 145-201",
      "Indestructible",
      "Req Strength: 100",
      "Req Dexterity: 100",
      "Req Level: 78",
      "+170-220% Enhanced Damage",
      "-25% Target's Defense",
      "+2 Freezes Target",
      "+10-15 Mana after each Kill",
      "33% Chance to Cast Level 8 Frost Nova on striking",
      "Ethereal"
    ],
    category: "Unique Assassin Katars"
  },
  "Bartuc's Cut-Throat": {
    name: "Bartuc's Cut-Throat",
    type: "Greater Talons",
    image: "items/bartucs_cutthroat.gif",
    props: [
      "Damage: 77-155",
      "Durability: 69",
      "Req Strength: 79",
      "Req Dexterity: 79",
      "Req Level: 42",
      "+150-200% Enhanced Damage",
      "Adds 25-50 Damage",
      "30% Faster Hit Recovery",
      "20% bonus to Attack Rating",
      "5-9% Life stolen per hit",
      "+20 to Strength and Dexterity",
      "+2 to Assassin Skill Levels",
      "+1 to Martial Arts Skills"
    ],
    category: "Unique Assassin Katars"
  },
  "Jade Talon": {
    name: "Jade Talon",
    type: "Wrist Sword",
    image: "items/katar.gif",
    props: [
      "Damage: 98-153",
      "Durability: 56",
      "Req Strength: 105",
      "Req Dexterity: 105",
      "Req Level: 66",
      "+190-240% Enhanced Damage",
      "+1-2 to Martial Arts (Assassin only)",
      "+1-2 to Shadow Disciplines (Assassin only)",
      "+30% Faster Hit Recovery",
      "10-15% Mana Stolen per Hit",
      "+40-50 to all Resistances"
    ],
    category: "Unique Assassin Katars"
  },
  "Firelizard's Talons": {
    name: "Firelizard's Talons",
    type: "Feral Claws",
    image: "items/claws.gif",
    props: [
      "Damage: 66-196",
      "Durability: 52",
      "Req Strength: 113",
      "Req Dexterity: 113",
      "Req Level: 67",
      "+200-270% Enhanced Damage",
      "Adds 236-480 Fire Damage",
      "+15% Increased Attack Speed",
      "+1-3 to Martial Arts (Assassin only)",
      "+1-2 to Wake of Inferno (Assassin only)",
      "+1-2 to Wake of Fire (Assassin only)",
      "+40-70% Fire Resist"
    ],
    category: "Unique Assassin Katars"
  },
  "Arreat's Face": {
    name: "Arreat's Face",
    type: "Slayer Guard",
    image: "items/arreats_face.gif",
    props: [
      "Defense: 302-363",
      "Durability: 55",
      "Req Strength: 118",
      "Req Level: 42",
      "+150-200% Enhanced Defense",
      "30% Faster Hit Recovery",
      "20% Bonus to Attack Rating",
      "+2 to Barbarian Skill Levels",
      "3-6% Life stolen per hit",
      "+30 to all Resistances",
      "+20 to Strength and Dexterity",
      "+2 to Combat Skills"
    ],
    category: "Unique Barbarian Helms"
  },
  Wolfhowl: {
    name: "Wolfhowl",
    type: "Fury Visor",
    image: "items/fangedhelm.gif",
    props: [
      "Defense: 332-377",
      "Durability: 35",
      "Req Strength: 129",
      "Req Level: 79",
      "+120-150% Enhanced Defense",
      "+2-3 to Warcries (Barbarian only)",
      "+3-6 to Feral Rage",
      "+3-6 to Lycanthropy",
      "+3-6 to Werewolf",
      "+8-15 to Strength",
      "+8-15 to Dexterity",
      "+8-15 to Vitality",
      "18 Charges Level 15 Summon Dire Wolf"
    ],
    category: "Unique Barbarian Helms"
  },
  "Demonhorn's Edge": {
    name: "Demonhorn's Edge",
    type: "Destroyer Helm",
    image: "items/hornedhelm.gif",
    props: [
      "Defense: 345-408",
      "Durability: 45",
      "Req Strength: 151",
      "Req Level: 61",
      "+120-160% Enhanced Defense",
      "10% Increased Attack Speed",
      "3-6% Life Stolen per Hit",
      "Attacker takes Damage of 55-77",
      "+1-3 to Warcries (Barbarian only)",
      "+1-3 to Masteries (Barbarian only)",
      "+1-3 to Combat Skills (Barbarian only)"
    ],
    category: "Unique Barbarian Helms"
  },
  "Halaberd's Reign": {
    name: "Halaberd's Reign",
    type: "Conqueror Crown",
    image: "items/assaulthelm.gif",
    props: [
      "Defense: 384-432",
      "Durability: 50",
      "Req Strength: 174",
      "Req Level: 77",
      "+140-170% Enhanced Defense",
      "+15-23 Replenish Life",
      "+20% Faster Hit Recovery",
      "+2 to Barbarian Skill Levels",
      "+1 to Masteries (Barbarian only)",
      "+1-2 to Battle Commands (Barbarian only)",
      "+1-2 to Battle Orders (Barbarian only)"
    ],
    category: "Unique Barbarian Helms"
  },
  "Jalal's Mane": {
    name: "Jalal's Mane",
    type: "Totemic Mask",
    image: "items/ialals_mane.gif",
    props: [
      "Defense: 247-297",
      "Durability: 20",
      "Req Strength: 65",
      "Req Level: 42",
      "+150-200% Enhanced Defense",
      "30% Faster Hit Recovery",
      "20% bonus to Attack Rating",
      "+2 to Druid Skills",
      "+30 to all Resistances",
      "+5 to Mana after each kill",
      "+20 to Strength",
      "+2 to Shapeshifting Skills",
      "+20 to Energy"
    ],
    category: "Unique Druid Pelts"
  },
  "Cerebus' Bite": {
    name: "Cerebus' Bite",
    type: "Blood Spirit",
    image: "items/wolfhead.gif",
    props: [
      "Defense: 335-350",
      "Durability: 20",
      "Req Strength: 86",
      "Req Level: 63",
      "+130-140% Enhanced Defense",
      "60-120% Bonus to Attack Rating",
      "7-10% Life Stolen per Hit",
      "33% Chance of Open Wounds",
      "+2-4 to Shape Shifting Skills (Druid only)",
      "+1-2 to Feral Rage (Druid only)"
    ],
    category: "Unique Druid Pelts"
  },
  "Spirit Keeper": {
    name: "Spirit Keeper",
    type: "Earth Spirit",
    image: "items/antlers.gif",
    props: [
      "Defense: 413-443",
      "Durability: 20",
      "Req Strength: 104",
      "Req Level: 67",
      "+170-190% Enhanced Defense",
      "+1-2 to Druid Skills",
      "+20% Faster Hit Recovery",
      "+10% to Maximum Poison Resist",
      "+30-40% Fire Resist",
      "+9-14% Lightning Absorb",
      "15-25% Cold Absorb"
    ],
    category: "Unique Druid Pelts"
  },
  Ravenlore: {
    name: "Ravenlore",
    type: "Sky Spirit",
    image: "items/falconmask.gif",
    props: [
      "Defense: 343-390",
      "Durability: 20",
      "Req Strength: 113",
      "Req Level: 74",
      "+120-150% Enhanced Defense",
      "+7 to Raven (Druid only)",
      "+3 to Elemental Skills (Druid only)",
      "+20-30 to Energy",
      "-10-20% to Enemy Fire Resistance",
      "+15-25 to all Resistances"
    ],
    category: "Unique Druid Pelts"
  },
  Homunculus: {
    name: "Homunculus",
    type: "Hierophant Trophy",
    image: "items/homunculus.gif",
    props: [
      "Defense: 177-213",
      "Durability: 20",
      "Req Strength: 58",
      "Chance to Block: 72%",
      "Req Level: 42",
      "+150-200% Enhanced Defense",
      "+5 Mana after each kill",
      "40% increased chance of Blocking",
      "30% Faster Block rate",
      "+2 to Necromancer Skill Levels",
      "+20 to Energy",
      "33% Regenerate Mana",
      "+40 to All Resistances",
      "+2 to Curses Skills"
    ],
    category: "Unique Necromancer Shrunken Heads"
  },
  Boneflame: {
    name: "Boneflame",
    type: "Succubus Skull",
    image: "items/gargoylehead.gif",
    props: [
      "Defense: 323-367",
      "Durability: 20",
      "Req Strength: 95",
      "Chance to Block: 30%",
      "Req Level: 72",
      "+120-150% Enhanced Defense",
      "+20% Faster Run/Walk",
      "+2-3 to Necro Skill Levels",
      "+20-30 to all Resistances",
      "15% Chance to cast Level 3 Terror when struck"
    ],
    category: "Unique Necromancer Shrunken Heads"
  },
  "Darkforce Spawn": {
    name: "Darkforce Spawn",
    type: "Bloodlord Skull",
    image: "items/demonhead.gif",
    props: [
      "Defense: 357-417",
      "Durability: 20",
      "Req Strength: 106",
      "Chance to Block: 32%",
      "Req Level: 65",
      "+140-180% Enhanced Defense",
      "+1-3 to Summoning Skills (Necro only)",
      "+1-3 to Poison and Bone Skills (Necro only)",
      "+1-3 to Curses (Necro only)",
      "+30% Faster Cast Rate",
      "10% Increase Maximum Mana"
    ],
    category: "Unique Necromancer Shrunken Heads"
  },
  "Horadrim Skull": {
    name: "Horadrim Skull",
    type: "Unraveller Head",
    image: "items/unravellerhead.gif",
    props: [
      "Defense: 6",
      "Chance to Block: 33%",
      "Durability: 20",
      "Required Strength: 18",
      "Required Level: 29",
      "+2 to Necro Skill Levels",
      "10% Faster Block Rate",
      "+50 Defense vs Melee",
      "15% Regenerate Mana",
      "+25 to all Resistances",
      "2 Sockets"
    ],
    category: "Unique Necromancer Shrunken Heads"
  },
  "Herald of Zakarum": {
    name: "Herald of Zakarum",
    type: "Gilded Shield",
    image: "items/herald_of_zakarum.gif",
    props: [
      "Defense: 422-507",
      "Durability: 50",
      "Req Strength: 89",
      "Chance to Block: 82%",
      "Req Level: 42",
      "+150-200% Enhanced Defense",
      "30% Increased Chance of Blocking",
      "30% Faster Block Rate",
      "20% bonus to Attack Rating",
      "+20 to Strength and Vitality",
      "+50 to all Resistances",
      "+2 to Paladin Skill Levels",
      "+2 to Combat Skills"
    ],
    category: "Unique Paladin Shields"
  },
  "Alma Negra": {
    name: "Alma Negra",
    type: "Sacred Rondache",
    image: "items/rondache.gif",
    props: [
      "Defense: 461-511",
      "Durability: 68",
      "Req Strength: 109",
      "Chance to Block: 78%",
      "Req Level: 77",
      "+180-210% Enhanced Defense",
      "+1-2 to Paladin Skill Levels",
      "20% Increased Chance of Blocking",
      "+40-75% Enhanced Damage",
      "+40-75% Bonus to Attack Rating",
      "Magic Damage Reduced by 5-9",
      "30% Faster Block Rate"
    ],
    category: "Unique Paladin Shields"
  },
  Dragonscale: {
    name: "Dragonscale",
    type: "Zakarum Shield",
    image: "items/aerinshield.gif",
    props: [
      "Defense: 523-582",
      "Durability: 65",
      "Req Strength: 142",
      "Chance to Block: 52%",
      "Req Level: 80",
      "+170-200% Enhanced Defense",
      "Adds 211-371 Fire Damage",
      "+15% to Fire Skill Damage",
      "+10 to Hydra",
      "+5% to Maximum Fire Resist",
      "+15-25 to Strength",
      "10-20% Fire Absorb"
    ],
    category: "Unique Paladin Shields"
  },
  "Protector's Gleam": {
    name: "Protector's Gleam",
    type: "Targe",
    image: "items/targe.gif",
    props: [
      "Defense: 23",
      "Chance to Block: 35%",
      "Durability: 20",
      "Required Strength: 16",
      "Required Level: 3",
      "+1 to Paladin Skill Levels",
      "+20% Faster Block Rate",
      "+36% Enhanced Damage",
      "+80% Enhanced Defense",
      "+10 to all Resistances"
    ],
    category: "Unique Paladin Shields"
  },
  "The Oculus": {
    name: "The Oculus",
    type: "Swirling Crystal",
    image: "items/the_oculus.gif",
    props: [
      "Damage: 18-42",
      "Durability: 50",
      "Req Level: 42",
      "+3 to Sorceress Skill Levels",
      "+5 to Mana after each kill",
      "+20 to all Resistances",
      "25% chance to cast level 1 Teleport when struck",
      "30% Faster Cast Rate",
      "+20 to Vitality and Energy",
      "+20% Enhanced Defense",
      "50% better chance of getting Magic Items"
    ],
    category: "Unique Sorceress Orbs"
  },
  "Eschuta's Temper": {
    name: "Eschuta's Temper",
    type: "Eldritch Orb",
    image: "items/sacredglobe.gif",
    props: [
      "Damage: 18-50",
      "Durability: 30",
      "Req Level: 72",
      "+1-3 to Sorceress Skill Levels",
      "40% Faster Cast Rate",
      "+10-20% Fire Skill Damage",
      "+10-20% Lightning Skill Damage",
      "+20-30 to Energy"
    ],
    category: "Unique Sorceress Orbs"
  },
  "Death's Fathom": {
    name: "Death's Fathom",
    type: "Dimensional Shard",
    image: "items/dragonstone.gif",
    props: [
      "Damage: 30-53",
      "Durability: 50",
      "Req Level: 73",
      "+3 to all Sorceress Skill Levels",
      "+20% Faster Cast Rate",
      "+15-30% to Cold Skill Damage",
      "+25-40% Lightning Resist",
      "+25-40% Fire Resist"
    ],
    category: "Unique Sorceress Orbs"
  },
  Annihilus: {
    name: "Annihilus",
    type: "Small Charm",
    image: "charms/anni.gif",
    props: [
      "+1 To All Skills",
      "+10-20 To All Attributes",
      "All Resistances +10-20",
      "+5-10% To Experience Gained",
      "Required Level: 70"
    ],
    category: "Unique Charms"
  },
  "Gheed's Fortune": {
    name: "Gheed's Fortune",
    type: "Grand Charm",
    image: "charms/gheeds.gif",
    props: [
      "80-160% Extra Gold From Monsters",
      "Reduces All Vendor Prices 10-15%",
      "20-40% Better Chance of Getting Magic Items",
      "Required Level: 62"
    ],
    category: "Unique Charms"
  },
  "Hellfire Torch": {
    name: "Hellfire Torch",
    type: "Large Charm",
    image: "charms/torch.jpg",
    props: [
      "5% Chance to cast level 10 Firestorm on attack",
      "+3 to (Random Class) Skill Levels",
      "+10-20 to All Attributes",
      "All Resistances +10-20%",
      "+8 to Light Radius",
      "Level 30 Hydra (10 Charges)",
      "Required Level: 75"
    ],
    category: "Unique Charms"
  },
  Cold: {
    name: "Rainbow Facet Cold",
    type: "Jewel",
    image: "jewels/cold.gif",
    props: [
      "100% Chance to Cast Level 43 Frost Nova When You Level Up or 100% Chance to Cast Level 37 Blizzard When You Die\n",
      "Adds 24-38 Cold Damage - 0.12 Second Duration",
      "+3-5% to Cold Skill Damage (varies)",
      "-3-5% to Enemy Cold Resistance (varies)",
      "Required Level: 49"
    ],
    category: "Unique Jewels"
  },
  Fire: {
    name: "Rainbow Facet Fire",
    type: "Jewel",
    image: "jewels/fire.gif",
    props: [
      "100% Chance to Cast Level 29 Blaze When You Level Up or 100% Chance to Cast Level 31 Meteor When You Die",
      "Adds 17-45 Fire Damage",
      "+3-5% to Fire Skill Damage (varies)",
      "-3-5% to Enemy Fire Resistance (varies)",
      "Required Level: 49"
    ],
    category: "Unique Jewels"
  },
  Light: {
    name: "Rainbow Facet Lightning",
    type: "Jewel",
    image: "jewels/lightning.gif",
    props: [
      "100% Chance to Cast Level 41 Nova When You Level Up or 100% Chance to Cast Level 47 Chain Lightning When You Die",
      "Adds 1-74 Lightning Damage",
      "+3-5% to Lightning Skill Damage (varies)",
      "-3-5% to Enemy Lightning Resistance (varies)",
      "Required Level: 49"
    ],
    category: "Unique Jewels"
  },
  Poison: {
    name: "Rainbow Facet Poison",
    type: "Jewel",
    image: "jewels/poison.gif",
    props: [
      "100% Chance to Cast Level 23 Venom When You Level Up or 100% Chance to Cast Level 51 Poison Nova When You Die",
      "+37 Poison Damage Over 2 Seconds",
      "+3-5% to Poison Skill Damage (varies)",
      "-3-5% to Enemy Poison Resistance (varies)",
      "Required Level: 49"
    ],
    category: "Unique Jewels"
  }
};

const setItems = {
  "Angelic Mantle": {
    name: "Angelic Mantle",
    type: "Ring Mail",
    image: "setitems/angelic_mantle.gif",
    props: [
      "Defense: 68-218",
      "Durability: 26",
      "Required Strength: 36",
      "Required Level: 12",
      "40% Enhanced Defense",
      "Damage Reduced by 3",
      "+150 Defense (2 set items)",
      "+50% Fire Resist (3 set items)"
    ],
    category: "Angelic Raiment"
  },
  "Angelic Sickle": {
    name: "Angelic Sickle",
    type: "Sabre",
    image: "setitems/angelic_sickle.gif",
    props: [
      "One Hand Damage: 3-14",
      "Durability: 32",
      "Required Dexterity: 25",
      "Required Strength: 25",
      "Required Level: 12",
      "250% Damage to Undead",
      "+75 to Attack Rating",
      "+75% Enhanced Damage (2 set items)",
      "30% increased attack speed (3 set items)"
    ],
    category: "Angelic Raiment"
  },
  "Angelic Halo": {
    name: "Angelic Halo",
    type: "Ring",
    image: "setitems/ring2.gif",
    props: [
      "Required Level: 12",
      "Replenish Life +6",
      "+20 to Life",
      "+ 12 per character level to Attack Rating (2 set items)",
      "+50% better chance of getting magic items (3 set items)"
    ],
    category: "Angelic Raiment"
  },
  "Angelic Wings": {
    name: "Angelic Wings",
    type: "Amulet",
    image: "setitems/amu2.gif",
    props: [
      "Required Level: 12",
      "20% Damage taken goes to Mana",
      "+3 to Light Radius",
      "+75 to Life (2 set items)",
      "+1 to all Skill levels (3 set items)"
    ],
    category: "Angelic Raiment"
  },
  "Arcanna's Head": {
    name: "Arcanna's Head",
    type: "Skull Cap",
    image: "setitems/arcannas_head.gif",
    props: [
      "Defense: 8-308",
      "Required Level: 15",
      "Durability: 18",
      "Required Strength: 15",
      "+4 Replenish Life",
      "Attacker takes damage of 2",
      "+3 per character level to Defense (2 set items)",
      "+15% resist Lightning (3 set items)"
    ],
    category: "Arcanna's Tricks"
  },
  "Arcanna's Flesh": {
    name: "Arcanna's Flesh",
    type: "Light Plate",
    image: "setitems/arcannas_flesh.gif",
    props: [
      "Defense: 90-207",
      "Durability: 60",
      "Required Level: 15",
      "Required Strength: 41",
      "+2 to Light Radius",
      "Damage reduced by 3",
      "+100 to Defense (2 set items)",
      "+10 to Energy (3 set items)"
    ],
    category: "Arcanna's Tricks"
  },
  "Arcanna's Deathwand": {
    name: "Arcanna's Deathwand",
    type: "War Staff",
    image: "setitems/arcannas_deathwand.gif",
    props: [
      "Two-Hand Damage: 12-28",
      "Durability: 50",
      "Required Level: 15",
      "+1 to all Sorceress Skills",
      "25% Deadly Strike",
      "+50% Damage to Undead",
      "+50 to Mana (2 set items)",
      "+5% regenerate Mana (3 set items)"
    ],
    category: "Arcanna's Tricks"
  },
  "Arcanna's Sign": {
    name: "Arcanna's Sign",
    type: "Amulet",
    image: "setitems/amu3.gif",
    props: [
      "20% regenerate Mana",
      "Required Level: 15",
      "+15 to Mana",
      "+50% better chance to find magic items (2 set items)",
      "+20% Fire Resist (3 set items)"
    ],
    category: "Arcanna's Tricks"
  },
  "Arctic Furs": {
    name: "Arctic Furs",
    type: "Quilted Armor",
    image: "setitems/arctic_furs.gif",
    props: [
      "Defense: 45-348",
      "Durability: 20",
      "Required Strength: 12",
      "Required Level: 2",
      "+275-325% Enhanced Defense",
      "+10 to all Resistances 10%",
      "+3 per character level to Defense (2 set items)",
      "+15% Cold Resist (3 set items)"
    ],
    category: "Arctic Gear"
  },
  "Arctic Binding": {
    name: "Arctic Binding",
    type: "Light Belt",
    image: "setitems/arctic_binding.gif",
    props: [
      "Defense: 33",
      "Durability: 14",
      "Required Level: 2",
      "+40% Cold Resist",
      "+30 Defense",
      "+40% better chance of getting magic items (2 set items)",
      "+10% Cold Resist (3 set items)"
    ],
    category: "Arctic Gear"
  },
  "Arctic Mitts": {
    name: "Arctic Mitts",
    type: "Light Gauntlets",
    image: "setitems/arctic_mitts.gif",
    props: [
      "Defense: 9-11",
      "Durability: 18",
      "Required Strength: 45",
      "Required Level: 2",
      "+20 to Life",
      "10% increased Attack Speed",
      "+50 to Attack Rating (2 set items)",
      "+10 to Dexterity (3 set items)"
    ],
    category: "Arctic Gear"
  },
  "Arctic Horn": {
    name: "Arctic Horn",
    type: "Short War Bow",
    image: "setitems/arctic_horn.gif",
    props: [
      "Two-Hand Damage: 9-21",
      "Required Dexterity: 55",
      "Required Strength: 35",
      "Required Level: 2",
      "20% Bonus to Attack Rating",
      "+50% Enhanced Damage",
      "+8 per character level to Attack Rating (2 set items)",
      "+20-30 Cold Damage (3 set items)"
    ],
    category: "Arctic Gear"
  },
  "Berserker's Headgear": {
    name: "Berserker's Headgear",
    type: "Helm",
    image: "setitems/berserkers_headgear.gif",
    props: [
      "Defense: 30-33",
      "Durability: 24",
      "Required Strength: 26",
      "Required Level: 3",
      "25% Fire Resist",
      "+15 Defense",
      "+8 per character level to Attack Rating (2 set items)"
    ],
    category: "Berserker's Arsenal"
  },
  "Berserker's Hauberk": {
    name: "Berserker's Hauberk",
    type: "Splint Mail",
    image: "setitems/berserkers_hauberk.gif",
    props: [
      "Defense: 90-392",
      "Durability: 30",
      "Required Strength: 51",
      "Required Level: 3",
      "+1 to all Barbarian Skills",
      "Magic Damage Reduced by 2",
      "+3 per character level to Defense (2 set items)"
    ],
    category: "Berserker's Arsenal"
  },
  "Berserker's Hatchet": {
    name: "Berserker's Hatchet",
    type: "Double Axe",
    image: "setitems/berserkers_hatchet.gif",
    props: [
      "One-Hand Damage: 5-13",
      "Durability: 24",
      "Required Strength: 43",
      "Required Level: 3",
      "30% Bonus to Attack Rating",
      "5% Mana stolen per hit",
      "+50% Enhanced Defense (2 set items)"
    ],
    category: "Berserker's Arsenal"
  },
  "Cathan's Visage": {
    name: "Cathan's Visage",
    type: "Mask",
    image: "setitems/cathans_visage.gif",
    props: [
      "Defense: 9-225",
      "Durability: 20",
      "Required Strength: 23",
      "Required Level: 11",
      "+25% Cold Resist",
      "+20 to Mana",
      "+2 per character level to Defense (2 set items)"
    ],
    category: "Cathan's Traps"
  },
  "Cathan's Mesh": {
    name: "Cathan's Mesh",
    type: "Chain Mail",
    image: "setitems/cathans_mesh.gif",
    props: [
      "Defense: 87-90",
      "Durability: 45",
      "Required Strength: 24",
      "Required Level: 11",
      "-50% to Requirements",
      "+15 Defense",
      "Attacker takes damage of 5 (2 set items)",
      "+30% Resist Fire (3 set items)"
    ],
    category: "Cathan's Traps"
  },
  "Cathan's Rule": {
    name: "Cathan's Rule",
    type: "Battle Staff",
    image: "setitems/cathans_rule.gif",
    props: [
      "Two-Hand Damage: 6-13",
      "Durability: 40",
      "Required Level: 11",
      "+1 to Fire Skills",
      "+10 maximum Fire Damage",
      "+50% Damage to Undead",
      "+50 to Mana (2 set items)",
      "+10 to all Resistances (3 set items)"
    ],
    category: "Cathan's Traps"
  },
  "Cathan's Sigil": {
    name: "Cathan's Sigil",
    type: "Amulet",
    image: "setitems/amu1.gif",
    props: [
      "Attack takes 5 Lightning Damage",
      "Required Level: 11",
      "10% Faster Hit Recovery",
      "+50 to Attack Rating (2 set items)",
      "+25% better chance of finding magic items (3 set items)"
    ],
    category: "Cathan's Traps"
  },
  "Cathan's Seal": {
    name: "Cathan's Seal",
    type: "Ring",
    image: "setitems/ring4.gif",
    props: [
      "6% Life stolen per hit",
      "Required Level: 11",
      "Damage reduced by 2",
      "+10 to Strength (2 set items)"
    ],
    category: "Cathan's Traps"
  },
  "Civerb's Cudgel": {
    name: "Civerb's Cudgel",
    type: "Grand Scepter",
    image: "setitems/civerbs_cudgel.gif",
    props: [
      "One-Hand Damage:8-140",
      "Durability: 60",
      "Required Strength: 37",
      "Required Level: 9",
      "+75 to Attack Rating",
      "+17-23 to max Damage",
      "+50% Damage to Undead",
      "+1 per character level to maximum Damage"
    ],
    category: "Civerb's Vestments"
  },
  "Civerb's Icon": {
    name: "Civerb's Icon",
    type: "Amulet",
    image: "setitems/amu1.gif",
    props: [
      "Replenish Life +4",
      "Required Level: 9",
      "Regenerate Mana 40%",
      "+25% Cold Resist (2 set items)",
      "+25 Defense (complete set)"
    ],
    category: "Civerb's Vestments"
  },
  "Civerb's Ward": {
    name: "Civerb's Ward",
    type: "Large Shield",
    image: "setitems/civerbs_ward.gif",
    props: [
      "Defense: 27-29",
      "52% Chance to block",
      "Durability: 24",
      "Required Strength: 34",
      "Required Level: 9",
      "+15 Defense",
      "15% increased block",
      "+21-22 Mana (when worn with Civerb's Icon)",
      "+25-26% Poison Resist (when worn with Civerb's Cudgel)"
    ],
    category: "Civerb's Vestments"
  },
  "Cleglaw's Tooth": {
    name: "Cleglaw's Tooth",
    type: "Long Sword",
    image: "setitems/cleglaws_tooth.gif",
    props: [
      "One-Hand Damage: 3-142",
      "Durability: 44",
      "Required Strength: 55",
      "Required Dexterity: 39",
      "Required Level: 4",
      "50% Deadly Strike",
      "30% Bonus to Attack rating",
      "+1.25 per character level to maximum Damage (2 set items)"
    ],
    category: "Cleglaw's Brace"
  },
  "Cleglaw's Pincers": {
    name: "Cleglaw's Pincers",
    type: "Chain Gloves",
    image: "setitems/cleglaws_pincers.gif",
    props: [
      "Defense: 8-9",
      "Durability: 16",
      "Required Strength: 25",
      "Required Level: 4",
      "Slows Target by 25%",
      "Knockback",
      "+10 per character level to Attack Rating (2 set items)"
    ],
    category: "Cleglaw's Brace"
  },
  "Cleglaw's Claw": {
    name: "Cleglaw's Claw",
    type: "Small Shield",
    image: "setitems/cleglaws_claw.gif",
    props: [
      "Defense: 25-27",
      "30% Chance to Block",
      "Durability: 16",
      "Required Strength: 22",
      "Required Level: 4",
      "Poison Length reduced by 75%",
      "+17 Defense",
      "+15 to all Resistances (2 set items)"
    ],
    category: "Cleglaw's Brace"
  },
  "Death's Touch": {
    name: "Death's Touch",
    type: "War Sword",
    image: "setitems/deaths_touch.gif",
    props: [
      "One-Hand Damage: 10-25",
      "Durability: 44",
      "Required Strength: 71",
      "Required Dexterity: 45",
      "Required Level: 6",
      "4% Life stolen per hit",
      "+25% Enhanced Damage",
      "Adds 25-75 Cold Damage (2 set items)"
    ],
    category: "Death's Disguise"
  },
  "Death's Hand": {
    name: "Death's Hand",
    type: "Leather Gloves",
    image: "setitems/deaths_hand.gif",
    props: [
      "Defense: 2-3",
      "Durability: 12",
      "Required Level: 6",
      "Poison Length reduced by 75%",
      "50% Poison Resist",
      "30% increased attack speed (2 set items)"
    ],
    category: "Death's Disguise"
  },
  "Death's Guard": {
    name: "Death's Guard",
    type: "Sash",
    image: "setitems/deaths_guard.gif",
    props: [
      "Defense: 22",
      "Durability: 12",
      "Required Level: 6",
      "Cannot be frozen",
      "+20 Defense",
      "+15 to all Resistances (2 set items)"
    ],
    category: "Death's Disguise"
  },
  "Hsarus' Iron Fist": {
    name: "Hsarus' Iron Fist",
    type: "Buckler",
    image: "setitems/hsarus_ironfist.gif",
    props: [
      "Defense: 4-253",
      "25% chance to Block",
      "Durability: 12",
      "Required Strength: 12",
      "Required Level: 3",
      "Damage reduced by 2",
      "+10 to Strength",
      "+2.5 per character level to Defense (2 set items)"
    ],
    category: "Hsaru's Defense"
  },
  "Hsarus' Iron Stay": {
    name: "Hsarus' Iron Stay",
    type: "Belt",
    image: "setitems/hsarus_ironstay.gif",
    props: [
      "Defense: 5-252",
      "Durability: 16",
      "Required Strength: 25",
      "Required Level: 3",
      "+20% Cold Resist",
      "+20 to Life",
      "+2.5 per character level to Defense (2 set items)"
    ],
    category: "Hsaru's Defense"
  },
  "Hsarus' Iron Heel": {
    name: "Hsarus' Iron Heel",
    type: "Chain Boots",
    image: "setitems/hsarus_ironheel.gif",
    props: [
      "Defense: 8-9",
      "Assassin Kick Damage: 6-12",
      "Durability: 16",
      "Required Strength: 30",
      "Required Level: 3",
      "20% Faster Run/Walk",
      "+25% Fire Resist",
      "+10 per character level to Attack Rating (2 set items)"
    ],
    category: "Hsaru's Defense"
  },
  "Infernal Cranium": {
    name: "Infernal Cranium",
    type: "Cap",
    image: "setitems/infernal_cranium.gif",
    props: [
      "Defense: 3-203",
      "Durability: 12",
      "Required Level: 5",
      "20% Damage taken goes to Mana",
      "+10 to all Resistances",
      "+2 per character level to Defense (2 set items)"
    ],
    category: "Infernal Tools"
  },
  "Infernal Sign": {
    name: "Infernal Sign",
    type: "Heavy Belt",
    image: "setitems/infernal_buckle.gif",
    props: [
      "Defense: 31",
      "Durability: 18",
      "Required Strength: 45",
      "Required Level: 5",
      "+25 Defense",
      "+20 to Life",
      "+25% Poison Resist (2 set items)",
      "Half Freeze Duration (3 set items)"
    ],
    category: "Infernal Tools"
  },
  "Infernal Torch": {
    name: "Infernal Torch",
    type: "Grim Wand",
    image: "setitems/infernal_torch.gif",
    props: [
      "One-Hand Damage: 13-14",
      "Durability: 15",
      "Required Level: 5",
      "+1 to Necromancer Skill Levels",
      "+8 to minimum Damage",
      "150% Damage to Undead",
      "+10 per character level to Attack Rating (2 set items)"
    ],
    category: "Infernal Tools"
  },
  "Iratha's Coil": {
    name: "Iratha's Coil",
    type: "Crown",
    image: "setitems/irathas_coil.gif",
    props: [
      "Defense: 25-243",
      "Durability: 50",
      "Required Strength: 55",
      "Required Level:  15",
      "+30% Lightning Resist",
      "+30% Fire Resist",
      "+2 per character level to Defense (2 set items)"
    ],
    category: "Iratha's Finery"
  },
  "Iratha's Collar": {
    name: "Iratha's Collar",
    type: "Amulet",
    image: "setitems/amu1.gif",
    props: [
      "Required Level: 15",
      "Poison Length reduced by 75%",
      "+30% Poison Resist",
      "+15 to all Resistances (2 set items)"
    ],
    category: "Iratha's Finery"
  },
  "Iratha's Cord": {
    name: "Iratha's Cord",
    type: "Heavy Belt",
    image: "setitems/irathas_cord.gif",
    props: [
      "Defense: 31",
      "Durability: 18",
      "Required Strength: 45",
      "Required Level: 15",
      "+25 Defense",
      "+5 to Minimum Damage",
      "+10 to Dexterity (2 set items)"
    ],
    category: "Iratha's Finery"
  },
  "Iratha's Cuff": {
    name: "Iratha's Cuff",
    type: "Light Gauntlets",
    image: "setitems/irathas_cuff.gif",
    props: [
      "Defense: 9-11",
      "Durability: 18",
      "Required Strength: 45",
      "Required Level: 15",
      "Half Freeze Duration",
      "+30% Cold Resist",
      "20% Increased Attack Speed (2 set items)"
    ],
    category: "Iratha's Finery"
  },
  "Isenhart's Lightbrand": {
    name: "Isenhart's Lightbrand",
    type: "Broad Sword",
    image: "setitems/isenharts_lightbrand.gif",
    props: [
      "One-Hand Damage: 17-18",
      "Durability: 32",
      "Required Strength: 48",
      "Required Level: 8",
      "20% Increased Attack Speed",
      "+10 to min Damage",
      "+5 per character level to Attack Rating (2 set items)"
    ],
    category: "Isenhart's Armory"
  },
  "Isenhart's Horns": {
    name: "Isenhart's Horns",
    type: "Full Helm",
    image: "setitems/isenharts_horns.gif",
    props: [
      "Defense: 23-26",
      "Durability: 30",
      "Required Strength: 41",
      "Required Level: 8",
      "Damage reduced by 2",
      "+6 to Dexterity",
      "+8 to all Resistances (2 set items)"
    ],
    category: "Isenhart's Armory"
  },
  "Isenhart's Case": {
    name: "Isenhart's Case",
    type: "Breast Plate",
    image: "setitems/isenharts_case.gif",
    props: [
      "Defense: 105-306",
      "Durability: 50",
      "Required Strength: 30",
      "Required Level: 8",
      "Magic damage reduced by 2",
      "+40 Defense",
      "+2 per character level to Defense (2 set items)"
    ],
    category: "Isenhart's Armory"
  },
  "Isenhart's Parry": {
    name: "Isenhart's Parry",
    type: "Gothic Shield",
    image: "setitems/isenharts_parry.gif",
    props: [
      "Defense: 70-75",
      "41% chance to block",
      "Durability: 40",
      "Required Strength: 60",
      "Required Level: 8",
      "Attacker takes 4 Lightning Damage",
      "+40 Defense",
      "+8 to all Resistances (2 set items)"
    ],
    category: "Isenhart's Armory"
  },
  "Milabrega's Diadem": {
    name: "Milabrega's Diadem",
    type: "Crown",
    image: "setitems/milabregas_diadem.gif",
    props: [
      "Defense: 25-45",
      "Durability: 50",
      "Required Strength: 55",
      "Required Level: 17",
      "+15 to Mana",
      "+15 to Life",
      "+40% Cold Resist (2 set items)"
    ],
    category: "Milabrega's Regalia"
  },
  "Milabrega's Robe": {
    name: "Milabrega's Robe",
    type: "Ancient Armor",
    image: "setitems/milabregas_robe.gif",
    props: [
      "Defense: 218-468",
      "Durability: 60",
      "Required Strength: 100",
      "Required Level: 17",
      "Damage Reduced by 2",
      "Attacker takes 3 Damage",
      "+100% Enhanced Defense (2 set items)"
    ],
    category: "Milabrega's Regalia"
  },
  "Milabrega's Orb": {
    name: "Milabrega's Orb",
    type: "Kite Shield",
    image: "setitems/milabregas_orb.gif",
    props: [
      "Defense: 44-53",
      "33% chance to block",
      "Durability: 30",
      "Required Strength: 47",
      "Required Level: 17",
      "+25 Defense",
      "20% better chance of getting magic item",
      "+50 to Life (2 set items)",
      "+50% Enhanced Defense (3 set items)"
    ],
    category: "Milabrega's Regalia"
  },
  "Milabrega's Rod": {
    name: "Milabrega's Rod",
    type: "War Scepter",
    image: "setitems/milabregas_rod.gif",
    props: [
      "One-Hand Damage: 15-25",
      "Durability: 70",
      "Required Strength: 55",
      "Required Level: 17",
      "+2 to Light Radius",
      "+1 to Paladin Skills",
      "+50% Enhanced Damage",
      "+50% Damage to Undead"
    ],
    category: "Milabrega's Regalia"
  },
  "Sigon's Visor": {
    name: "Sigon's Visor",
    type: "Great Helm",
    image: "setitems/sigons_visor.gif",
    props: [
      "Defense: 55-60",
      "Durability: 40",
      "Required Level: 6",
      "Required Strength: 63",
      "+25 to Defense",
      "+30 to Mana",
      "+8 per character level to Attack Rating (2 set items)"
    ],
    category: "Sigon's Complete Steel"
  },
  "Sigon's Shelter": {
    name: "Sigon's Shelter",
    type: "Gothic Plate",
    image: "setitems/sigons_shelter.gif",
    props: [
      "Defense: 128-170",
      "Durability: 55",
      "Required Strength: 70",
      "Required Level: 6",
      "+25% Enhanced Defense",
      "+30% Lightning Resist",
      "Attacker takes damage of 20 (2 set items)"
    ],
    category: "Sigon's Complete Steel"
  },
  "Sigon's Sabot": {
    name: "Sigon's Sabot",
    type: "Greaves",
    image: "setitems/sigons_sabot.gif",
    props: [
      "Defense: 12-15",
      "Durability: 24",
      "Assassin Kick Damage: 10-20",
      "Required Strength: 70",
      "Required Level: 6",
      "20% Faster Run/Walk",
      "+40% Cold Resist",
      "+50 to Attack Rating (2 set items)",
      "+50% better chance to find magic items (3 set items)"
    ],
    category: "Sigon's Complete Steel"
  },
  "Sigon's Guard": {
    name: "Sigon's Guard",
    type: "Tower Shield",
    image: "setitems/sigons_guard.gif",
    props: [
      "Defense: 22-25",
      "69% Chance to Block",
      "Durability: 60",
      "Required Strength: 75",
      "Required Level: 6",
      "+20% Chance to Block",
      "+1 to all Skills"
    ],
    category: "Sigon's Complete Steel"
  },
  "Sigon's Wrap": {
    name: "Sigon's Wrap",
    type: "Plated Belt",
    image: "setitems/sigons_wrap.gif",
    props: [
      "Defense: 8-209",
      "Durability: 24",
      "Required Strength: 60",
      "Required Level: 6",
      "+20% Fire Resist",
      "+20 to Life",
      "+2 per character level Defense (2 set items)"
    ],
    category: "Sigon's Complete Steel"
  },
  "Sigon's Gage": {
    name: "Sigon's Gage",
    type: "Gauntlets",
    image: "setitems/sigons_gage.gif",
    props: [
      "Defense: 12-15",
      "Durability: 24",
      "Required Strength: 60",
      "Required Level: 6",
      "+20 to Attack Rating",
      "+10 to Strength",
      "30% Increased Attack Speed ( 2 set items)"
    ],
    category: "Sigon's Complete Steel"
  },
  "Tancred's Skull": {
    name: "Tancred's Skull",
    type: "Bone Helm",
    image: "setitems/tancreds_skull.gif",
    props: [
      "Defense: 33-36",
      "Durability: 40",
      "Required Strength: 25",
      "Required Level: 20",
      "+10% Enhanced Damage",
      "+40 to Attack Rating",
      "+10 to all Resistances (2 set items)"
    ],
    category: "Tancred's Battlegear"
  },
  "Tancred's Spine": {
    name: "Tancred's Spine",
    type: "Full Plate Mail",
    image: "setitems/tancreds_spine.gif",
    props: [
      "Defense: 150-359",
      "Durability: 70",
      "Required Strength: 80",
      "Required Level: 20",
      "+40 to Life",
      "+15 to Strength",
      "+2 to character level to Defense (2 set items)"
    ],
    category: "Tancred's Battlegear"
  },
  "Tancred's Hobnails": {
    name: "Tancred's Hobnails",
    type: "Boots",
    image: "setitems/tancreds_hobnails.gif",
    props: [
      "Defense: 2-3",
      "Durability: 12",
      "Required Level: 20",
      "Assassin Kick Damage: 3-8",
      "+25% Heal Stamina",
      "+10 to Dexterity",
      "30% Faster Run/Walk (2 set items)",
      "+10 to Strength (3 set items)"
    ],
    category: "Tancred's Battlegear"
  },
  "Tancred's Crowbill": {
    name: "Tancred's Crowbill",
    type: "Military Pick",
    image: "setitems/tancreds_crowbill.gif",
    props: [
      "One-Hand Damage: 12-19",
      "Durability: 26",
      "Required Dexterity: 33",
      "Required Strength: 49",
      "Required Level: 20",
      "+80% Enhanced Damage",
      "+75 to Attack Rating",
      "+20 to Mana (2 set items)",
      "20% Increased Attack Speed (3 set items)"
    ],
    category: "Tancred's Battlegear"
  },
  "Tancred's Weird": {
    name: "Tancred's Weird",
    type: "Amulet",
    image: "setitems/amu3.gif",
    props: [
      "Required Level: 20",
      "Damage Reduced by 2",
      "Magic Damage reduced by 1",
      "+78% better chance of getting magic items (2 set items)",
      "+60 to Attack Rating (3 set items)"
    ],
    category: "Tancred's Battlegear"
  },
  "Vidala's Barb": {
    name: "Vidala's Barb",
    type: "Long Battle Bow",
    image: "setitems/vidalas_barb.gif",
    props: [
      "Two-Hand Damage: 3-18",
      "Required Dexterity: 50",
      "Required Strength: 40",
      "Required Level: 14",
      "Adds 1-20 Lightning Damage",
      "+8 to character level to Attack Rating (2 set items)"
    ],
    category: "Vidala's Rig"
  },
  "Vidala's Ambush": {
    name: "Vidala's Ambush",
    type: "Leather Armor",
    image: "setitems/vidalas_ambush.gif",
    props: [
      "Defense: 64-314",
      "Durability: 24",
      "Required Strength: 15",
      "Required Level: 14",
      "+50 Defense",
      "+11 to Dexterity",
      "+24% Fire Resist (2 set items)",
      "+2.5 per character level to Defense (3 set items)"
    ],
    category: "Vidala's Rig"
  },
  "Vidala's Fetlock": {
    name: "Vidala's Fetlock",
    type: "Light Plated Boots",
    image: "setitems/vidalas_fetlock.gif",
    props: [
      "Defense: 9-11",
      "Durability: 18",
      "Assassin Kick Damage: 8-16",
      "Required Level: 14",
      "Required Strength: 50",
      "30% Faster Run/Walk",
      "+150 to max Stamina",
      "+8 to all Resistances (2 set items)"
    ],
    category: "Vidala's Rig"
  },
  "Vidala's Snare": {
    name: "Vidala's Snare",
    type: "Amulet",
    image: "setitems/amu2.gif",
    props: [
      "Required Level: 14",
      "20% Cold Resist",
      "+15 to Life",
      "50% better chance of getting magic items (2 set items)"
    ],
    category: "Vidala's Rig"
  },
  "Aldur's Stony Gaze": {
    name: "Aldur's Stony Gaze",
    type: "Hunter's Guise",
    image: "setitems/aldurs_stoney_gaze.gif",
    props: [
      "Defense:  157-171",
      "Required Strength:  56",
      "Required Level:  36",
      "Durability:  20",
      "25% Faster Hit Recovery",
      "+5 to Light Radius",
      "17% Regenerate Mana",
      "+40-50% Cold Resist",
      "+90 Defense",
      "2 Sockets",
      "Druid Only"
    ],
    category: "Aldur's Watchtower"
  },
  "Aldur's Advance": {
    name: "Aldur's Advance",
    type: "Battle Boots",
    image: "setitems/aldurs_advance.gif",
    props: [
      "Defense:  39-47",
      "Required Strength:  95",
      "Required Level:  45",
      "Indestructible",
      "Assassin Kick Damage:  37-64",
      "10% Damage taken goes to Mana",
      "40% Faster Run/Walk",
      "+32% Heal Stamina",
      "+180 to max Stamina",
      "+50 to Life",
      "+40-50% Fire Resist"
    ],
    category: "Aldur's Watchtower"
  },
  "Aldur's Deception": {
    name: "Aldur's Deception",
    type: "Shadow Plate",
    image: "setitems/aldurs_deception.gif",
    props: [
      "Defense:  746-857",
      "Required Strength:  115",
      "Required Level:  76",
      "Durability:   70",
      "-50% to Requirements",
      "+40-50% Lightning Resist",
      "+300 to Defense",
      "+15 to Dexterity",
      "+20 to Strength",
      "+1 to Elemental Skills - Druid Only",
      "+1 to ShapeShifting Skills - Druid Only"
    ],
    category: "Aldur's Watchtower"
  },
  "Aldur's Rhythm": {
    name: "Aldur's Rhythm",
    type: "Jagged Star",
    image: "setitems/aldurs_rhythm.gif",
    props: [
      "Damage:  60-93",
      "Durability:  72",
      "Required Strength:  74",
      "Required Level:  42",
      "+200% Damage to Demons",
      "10% Life Stolen per hit",
      "5% Mana stolen per hit",
      "Adds 50-75 Lightning Damage",
      "30% Increased Attack Speed",
      "+50% Damage to Undead",
      "Adds 40-62 Damage",
      "2-3 Sockets"
    ],
    category: "Aldur's Watchtower"
  },
  "Bul-Kathos' Sacred Charge": {
    name: "Bul-Kathos' Sacred Charge",
    type: "Colossus Blade",
    image: "setitems/bulkathos_sacred_charge.gif",
    props: [
      "One-handed Damage: 75-195",
      "Two-handed Damage: 174-345",
      "Required Strength: 189",
      "Required Dexterity: 110",
      "Required Level: 63",
      "Durability: 50",
      "35% chance of crushing blow",
      "+200% Enhanced Damage",
      "+20 to all Resistances",
      "20% increased attack speed",
      "Knockback"
    ],
    category: "Bul-Kathos' Children"
  },
  "Bul-Kathos' Tribal Guardian": {
    name: "Bul-Kathos' Tribal Guardian",
    type: "Mythical Sword",
    image: "setitems/bulkathos_tribal_guardian.gif",
    props: [
      "One-handed Damage: 120-156",
      "Required Strength: 147",
      "Required Dexterity: 124",
      "Required Level: 66",
      "Durability: 44",
      "+50% Fire Resist",
      "+200% Enhanced Damage",
      "+50 Poison Damage for 2 seconds",
      "+20 to Strength",
      "+20% increased attack speed"
    ],
    category: "Bul-Kathos' Children"
  },
  "Cow King's Horns": {
    name: "Cow King's Horns",
    type: "War Hat",
    image: "setitems/cowkings_horns.gif",
    props: [
      "Defense: 120-128",
      "Required Strength: 20",
      "Required Level: 25",
      "Durability: 12",
      "35% Damage taken goes to Mana",
      "Half Freeze Duration",
      "+75 to Defense",
      "Attacker takes damage of 10"
    ],
    category: "Cow King's Leathers"
  },
  "Cow King's Hide": {
    name: "Cow King's Hide",
    type: "Studded Leather",
    image: "setitems/cowkings_hide.gif",
    props: [
      "Defense: 57",
      "Required Strength: 27",
      "Required Level: 18",
      "Durability: 32",
      "18% chance to cast level 5 Chain Lightning when struck",
      "+60% Defense",
      "+18 to all Resistances",
      "+30 to Life"
    ],
    category: "Cow King's Leathers"
  },
  "Cow King's Hooves": {
    name: "Cow King's Hooves",
    type: "Heavy Boots",
    image: "setitems/cowkings_hooves.gif",
    props: [
      "Defense: 30-41",
      "Required Strength: 18",
      "Required Level: 13",
      "Durability: 14",
      "Assassin Kick Damage: 4-10",
      "+30% Faster Run/Walk",
      "Adds 25-35 Fire Damage",
      "+25-35 Defense",
      "+20 to Dexterity",
      "25% better chance of getting magic items"
    ],
    category: "Cow King's Leathers"
  },
  "Telling of Beads": {
    name: "Telling of Beads",
    type: "Amulet",
    image: "setitems/amu2.gif",
    props: [
      "Required Level: 30",
      "+1 to all Skill levels",
      "+35-50% Poison Resist",
      "+18% Cold Resist",
      "Attacker takes damage of 8-10"
    ],
    category: "The Disciple"
  },
  "Laying of Hands": {
    name: "Laying of Hands",
    type: "Bramble Mitts",
    image: "setitems/laying_of_hands.gif",
    props: [
      "Defense: 79-87",
      "Required Strength: 50",
      "Required Level: 63",
      "Durability: 12",
      "10% chance to cast level 3 Holy Bolt on striking",
      "+350% Damage to Demons",
      "+50% Fire Resist",
      "+25 to Defense",
      "+20% increased Attack Speed"
    ],
    category: "The Disciple"
  },
  "Dark Adherent": {
    name: "Dark Adherent",
    type: "Dusk Shroud",
    image: "setitems/dark_adherent.gif",
    props: [
      "Defense 666-882",
      "Required Strength: 77",
      "Required Level: 49",
      "Durability: 20",
      "25% chance to cast level 3 Nova when struck",
      "Adds 24-34 Poison Damage for 2 seconds",
      "+24% Fire Resist",
      "+305-415 to Defense"
    ],
    category: "The Disciple"
  },
  "Rite of Passage": {
    name: "Rite of Passage",
    type: "Demonhide Boots",
    image: "setitems/rite_of_passage.gif",
    props: [
      "Defense: 53-60",
      "Required Strength: 20",
      "Required Level: 29",
      "Durability: 12",
      "Assassin Kick Damage: 26-46",
      "Half Freeze Duration",
      "30% Faster Run/Walk",
      "+25 to Defense",
      "+15-25 to maximum Stamina"
    ],
    category: "The Disciple"
  },
  Credendum: {
    name: "Credendum",
    type: "Mithril Coil",
    image: "setitems/credendum.gif",
    props: [
      "Defense: 108-115",
      "Required Strength: 106",
      "Required Level: 65",
      "Durability: 16",
      "+15 to all Resistances",
      "+50 to Defense",
      "+10 to Dexterity",
      "+10 to Strength"
    ],
    category: "The Disciple"
  },
  "Griswold's Heart": {
    name: "Griswold's Heart",
    type: "Ornate Armor",
    image: "setitems/griswolds_heart.gif",
    props: [
      "Defense 917-950",
      "Required Strength:  102",
      "Required Level:  45",
      "Durability:  60",
      "-40% Requirements",
      "+500 Defense",
      "+20 to Strength",
      "+2 to Paladin Defensive Aura Skills",
      "3 Sockets"
    ],
    category: "Griswold's Legacy"
  },
  "Griswold's Valor": {
    name: "Griswold's Valor",
    type: "Corona",
    image: "setitems/griswolds_valor.gif",
    props: [
      "Defense:  249-290",
      "Required Strength:  105",
      "Required Level:  69",
      "Durability:  50",
      "-40% Requirements",
      "+50-70% Enhanced Defense",
      "+5 to all Resistances",
      "20-30% better chance of getting Magic items",
      "+0.25 per character level to Absorbs Cold",
      "2 Sockets"
    ],
    category: "Griswold's Legacy"
  },
  "Griswold's Redemption": {
    name: "Griswold's Redemption",
    type: "Caduceus",
    image: "setitems/griswolds_redemption.gif",
    props: [
      "Damage:  114-129",
      "Required Strength:  78",
      "Required Dexterity:  56",
      "Required Level:  66",
      "Durability:  70",
      "+200-240% Enhanced Damage",
      "-20% Requirements",
      "40% increased Attack Speed",
      "+250% damage to Undead",
      "3 or 4 Sockets"
    ],
    category: "Griswold's Legacy"
  },
  "Griswold's Honor": {
    name: "Griswold's Honor",
    type: "Vortex Shield",
    image: "setitems/griswolds_honor.gif",
    props: [
      "Defense:  290-333",
      "Required Strength:  148",
      "Required Level:  68",
      "Durability:  90",
      "69% Chance to Block",
      "5-87 Paladin Smite Damage",
      "65% Faster Block Rate",
      "20% Increased Chance of Blocking",
      "+108 Defense",
      "+45 to all Resistances",
      "3 Sockets"
    ],
    category: "Griswold's Legacy"
  },
  "Haemosu's Adamant": {
    name: "Haemosu's Adamant",
    type: "Cuirass",
    image: "setitems/haemosus_adament.gif",
    props: [
      "Defense: 688-702",
      "Required Strength: 52",
      "Required Level: 44",
      "Durability: 50",
      "-20% Requirements",
      "+40 defense against melee",
      "+35 defense against missile",
      "+500 Defense",
      "+75 to Life"
    ],
    category: "Heaven's Brethren"
  },
  "Dangoon's Teaching": {
    name: "Dangoon's Teaching",
    type: "Reinforced Mace",
    image: "setitems/dangoons_teaching.gif",
    props: [
      "Damage: 41-197",
      "Required Strength: 145",
      "Required Dexterity: 46",
      "Required Level: 68",
      "Durability: 60",
      "10% chance to cast level 3 Frost Nova on striking",
      "+1.5 per character level to maximum Damage",
      "Adds 20-30 Fire Damage",
      "+40% increased Attack Speed",
      "+50% damage to Undead"
    ],
    category: "Heaven's Brethren"
  },
  "Taebaek's Glory": {
    name: "Taebaek's Glory",
    type: "Ward",
    image: "setitems/taebaeks_glory.gif",
    props: [
      "Defense: 203-220",
      "Required Strength: 185",
      "Required Level: 81",
      "Indestructible",
      "30% Faster Block Rate",
      "+25% increased chance of Blocking",
      "+30% Lightning Resist",
      "+50 to Defense",
      "+100 to Mana",
      "Attacker takes damage of 30"
    ],
    category: "Heaven's Brethren"
  },
  "Ondal's Almighty": {
    name: "Ondal's Almighty",
    type: "Spired Helm",
    image: "setitems/ondals_almighty.gif",
    props: [
      "Defense: 164-209",
      "Required Strength: 116",
      "Required Level: 69",
      "Durability: 40",
      "10% chance to cast level 3 Weaken on striking",
      "24% Faster Hit Recovery",
      "-40% Requirements",
      "+50 Defense",
      "+15 to Dexterity",
      "+10 to Strength"
    ],
    category: "Heaven's Brethren"
  },
  "Hwanin's Splendor": {
    name: "Hwanin's Splendor",
    type: "Grand Crown",
    image: "setitems/hwanins_splendor.gif",
    props: [
      "Defense: 156-226",
      "Required Strength: 103",
      "Required Level: 45",
      "Durability: 50",
      "+100% Enhanced Defense",
      "+20 Replenish Life",
      "Magic Damage Reduced by 10",
      "+37% Cold Resist"
    ],
    category: "Hwanin's Majesty"
  },
  "Hwanin's Justice": {
    name: "Hwanin's Justice",
    type: "Bill",
    image: "setitems/hwanins_justice.gif",
    props: [
      "Damage: 42-159",
      "Required Strength: 95",
      "Required Level: 28",
      "Indestructible",
      "10% chance to cast level 3 Ice Blast on striking",
      "+200% Enhanced Damage",
      "Adds 5-25 Lightning Damage",
      "+330 to Attacl Rating",
      "40% increased Attack Speed"
    ],
    category: "Hwanin's Majesty"
  },
  "Hwanin's Refuge": {
    name: "Hwanin's Refuge",
    type: "Tigulated Mail",
    image: "setitems/hwanins_refuge.gif",
    props: [
      "Defense: 375-390",
      "Required Strength: 86",
      "Required Level: 30",
      "Durability: 36",
      "10% chance to cast level 3 Static Field when struck",
      "+27% to Poison Resist",
      "+200 Defense",
      "+100 to Life"
    ],
    category: "Hwanin's Majesty"
  },
  "Hwanin's Blessing": {
    name: "Hwanin's Blessing",
    type: "Belt",
    image: "setitems/hwanins_blessing.gif",
    props: [
      "Defense: 6-153",
      "Required Strength: 25",
      "Required Level: 35",
      "Durability: 16",
      "+1.5 per character level to Defense",
      "Prevent Monster Heal",
      "12% Damage taken goes to Mana",
      "Adds 3-33 Lightning Damage"
    ],
    category: "Hwanin's Majesty"
  },
  "Immortal King's Will": {
    name: "Immortal King's Will",
    type: "Avenger Guard",
    image: "setitems/immortal_kings_will.gif",
    props: [
      "Defense:  160-175",
      "Required Strength:  65",
      "Required Level:  47",
      "Durability:  55",
      "+4 to Light Radius",
      "+125 to Defense",
      "37% extra Gold from monsters",
      "25-40% better chance of finding Magic items",
      "+2 to Warcries Skills (Barbarian)",
      "2 Sockets"
    ],
    category: "Immortal King"
  },
  "Immortal King's Stone Crusher": {
    name: "Immortal King's Stone Crusher",
    type: "Ogre Maul",
    image: "setitems/immortal_kings_stone_crusher.gif",
    props: [
      "Damage:  231-318",
      "Required Strength:  225",
      "Required Level:  76",
      "Indestructible",
      "35-40% chance of Crushing Blow",
      "+250% Damage to Undead",
      "+200% Damage to Demons",
      "+200% Enhanced Damage",
      "40% increased Attack Speed",
      "2 Sockets"
    ],
    category: "Immortal King"
  },
  "Immortal King's Soul Cage": {
    name: "Immortal King's Soul Cage",
    type: "Sacred Armor",
    image: "setitems/immortal_kings_soul_cage.gif",
    props: [
      "Defense:  487-1301",
      "Required Strength:  232",
      "Required Level:  76",
      "Durability:  60",
      "5% chance to cast level 5 Enchant when struck",
      "+50% Poison Resist",
      "+400 to Defense",
      "+2 to Combat Skills (Barbarian)"
    ],
    category: "Immortal King"
  },
  "Immortal King's Detail": {
    name: "Immortal King's Detail",
    type: "War Belt",
    image: "setitems/immortal_kings_detail.gif",
    props: [
      "Defense:  89-247",
      "Required Strength:  110",
      "Required Level:  29",
      "Durability:  24",
      "+31% Lightning Resist",
      "+28% Fire Resist",
      "+36 to Defense",
      "+25 to Strength"
    ],
    category: "Immortal King"
  },
  "Immortal King's Forge": {
    name: "Immortal King's Forge",
    type: "War Gauntlets",
    image: "setitems/immortal_kings_forge.gif",
    props: [
      "Defense:  108-238",
      "Required Strength:  110",
      "Required Level:  30",
      "Durability:  24",
      "12% chance to cast level 4 Charged Bolt when struck",
      "+65 to Defense",
      "+20 to Dexterity",
      "+20 to Strength"
    ],
    category: "Immortal King"
  },
  "Immortal King's Pillar": {
    name: "Immortal King's Pillar",
    type: "War Boots",
    image: "setitems/immortal_kings_pillar.gif",
    props: [
      "Defense:  118-288",
      "Required Strength:  125",
      "Required Level:  31",
      "Durability:  24",
      "40% Faster Run/Walk",
      "+75 to Defense",
      "+110 to Attack Rating",
      "+44 to Life"
    ],
    category: "Immortal King"
  },
  "M'avina's True Sight": {
    name: "M'avina's True Sight",
    type: "Diadem",
    image: "setitems/mavinas_true_sight.gif",
    props: [
      "Defense:  200-210",
      "Required Level:  64",
      "Durability:  20",
      "+10 Replenish Life",
      "+150 to Defense",
      "+25 to Mana",
      "+30% increased Attack Speed"
    ],
    category: "M'avina's Battle Hymn"
  },
  "M'avina's Caster": {
    name: "M'avina's Caster",
    type: "Grand Matron BowAmazon only",
    image: "setitems/mavinas_caster.gif",
    props: [
      "Damage 40-207",
      "Required Strength:  108",
      "Required Dexterity:  152",
      "Required Level:  70",
      "+188% Enhanced Damage",
      "+50 to Attack Rating",
      "+40% increased Attack Speed",
      "Fires Magic Arrows"
    ],
    category: "M'avina's Battle Hymn"
  },
  "M'avina's Embrace": {
    name: "M'avina's Embrace",
    type: "Kraken Shell",
    image: "setitems/mavinas_embrace.gif",
    props: [
      "Defense:  771-1269",
      "Required Strength:  122",
      "Required Level:  70",
      "Durability:  48",
      "-30% Requirements",
      "10% chance to cast level 3 Glacial Spike when struck",
      "Magic Damage reduced by 5-12",
      "+4 per character level to Defense",
      "+2 to Passive and Magic Skills (Amazon)",
      "+350 to Defense"
    ],
    category: "M'avina's Battle Hymn"
  },
  "M'avina's Icy Clutch": {
    name: "M'avina's Icy Clutch",
    type: "Battle Gauntlets",
    image: "setitems/mavinas_icy_clutch.gif",
    props: [
      "Defense:  84-97",
      "Required Strength: 88",
      "Required Level:  32",
      "Durability:  18",
      "+45-50 to Defense",
      "6-18 Cold Damage for 6 seconds",
      "Half Freeze Duration",
      "56% extra Gold from Monsters",
      "+10 to Strength",
      "+15 to Dexterity"
    ],
    category: "M'avina's Battle Hymn"
  },
  "M'avina's Tenet": {
    name: "M'avina's Tenet",
    type: "Sharkskin Belt",
    image: "setitems/mavinas_tenet.gif",
    props: [
      "Defense:  81-86",
      "Required Strength:  20",
      "Required Level:  45",
      "Durability:  14",
      "+20% Faster Run/Walk",
      "+5 to Light Radius",
      "5% Mana stolen per hit",
      "+50 to Defense"
    ],
    category: "M'avina's Battle Hymn"
  },
  "Naj's Circlet": {
    name: "Naj's Circlet",
    type: "Circlet",
    image: "setitems/najs_circlet.gif",
    props: [
      "Defense: 95-105",
      "Required Level: 28",
      "Durability: 35",
      "+75 to Defense",
      "+25-35 Fire Damage",
      "+5 to Light Radius",
      "12% chance to cast level 5 Chain Lightning when struck",
      "+15 to Strength"
    ],
    category: "Naj's Ancient Vestige"
  },
  "Naj's Light Plate": {
    name: "Naj's Light Plate",
    type: "Hellforge Plate",
    image: "setitems/najs_light_plate.gif",
    props: [
      "Defense: 721-830",
      "Required Strength: 79",
      "Required Level: 71",
      "Durability: 60",
      "45% Damage taken goes to Mana",
      "-60% Requirements",
      "+1 to all Skill Levels",
      "+25 to all Resistances",
      "+300 to Defense",
      "+65 to Life"
    ],
    category: "Naj's Ancient Vestige"
  },
  "Naj's Puzzler": {
    name: "Naj's Puzzler",
    type: "Elder Staff",
    image: "setitems/najs_puzzler.gif",
    props: [
      "Damage: 200-232",
      "Required Strength: 44",
      "Required Dexterity: 37",
      "Required Level: 78",
      "Durability: 35",
      "+1 to all Skill Levels",
      "+30% Faster Cast Rate",
      "+150% Enhanced Damage",
      "69 charges level 11 Teleport",
      "Adds 6-45 Lightning Damage",
      "+70 to Mana",
      "+35 to Energy",
      "40% increased Attack Speed",
      "50% Damage to Undead"
    ],
    category: "Naj's Ancient Vestige"
  },
  "Natalya's Totem": {
    name: "Natalya's Totem",
    type: "Grim Helm",
    image: "setitems/natalyas_totem.gif",
    props: [
      "Defense: 195-300",
      "Required Strength: 58",
      "Required Level: 59",
      "Durability: 40",
      "Magic Damage reduced by 3",
      "+10-20 to all Resistances",
      "+135-175 to Defense",
      "+20-30 to Dexterity",
      "+10-20 to Strength"
    ],
    category: "Natalya's Odium"
  },
  "Natalya's Mark": {
    name: "Natalya's Mark",
    type: "Scissors SuwayyahAssassin only",
    image: "setitems/natalyas_mark.gif",
    props: [
      "Damage: 120-153",
      "Required Strength: 118",
      "Required Dexterity: 118",
      "Required Level: 79",
      "Durability: 68",
      "+200% Damage to Undead",
      "+200% Damage to Demons",
      "Ignores Target's Defense",
      "+200% Enhanced Damage",
      "+50 Cold Damage for 4 seconds",
      "Adds 12-17 Fire Damage",
      "+40% increased Attack Speed"
    ],
    category: "Natalya's Odium"
  },
  "Natalya's Shadow": {
    name: "Natalya's Shadow",
    type: "Loricated Mail",
    image: "setitems/natalyas_shadow.gif",
    props: [
      "Defense: 540-721",
      "Required Strength: 149",
      "Required Level: 73",
      "Durability: 36",
      "+1 to Life per character level",
      "Poison duration reduced by 75%",
      "+25% Poison resist",
      "+150-225 to Defense",
      "1-3 sockets",
      "+2 to Shadow Disciplines Skills (Assassin only)"
    ],
    category: "Natalya's Odium"
  },
  "Natalya's Soul": {
    name: "Natalya's Soul",
    type: "Mesh Boots",
    image: "setitems/natalyas_soul.gif",
    props: [
      "Defense: 112-169",
      "Required Strength: 65",
      "Required Level: 25",
      "Durability: 66",
      "Assassin Kick Damage: 23-52",
      "Heal Stamina Plus (0.25 Per Character Level) 0-24% (Based On Character Level)",
      "+40% Faster Run/Walk",
      "+15-25% Cold Resist",
      "+15-25% Lightning Resist",
      "+75-125 to Defense"
    ],
    category: "Natalya's Odium"
  },
  "Guillaume's Face": {
    name: "Guillaume's Face",
    type: "Winged Helm",
    image: "setitems/guillaumes_face.gif",
    props: [
      "Defense: 187-217",
      "Required Strength: 115",
      "Required Level: 34",
      "Durability: 40",
      "15% Deadly Strike",
      "35% chance of Crushing Blow",
      "+30% Faster Hit Recovery",
      "+120% Enhanced Defense",
      "+15 to Strength"
    ],
    category: "Orphan's Call"
  },
  "Whitstan's Guard": {
    name: "Whitstan's Guard",
    type: "Round Shield",
    image: "setitems/whitstans_guard.gif",
    props: [
      "Defense: 154",
      "Required Strength: 53",
      "Required Level: 29",
      "Durability: 64",
      "Half Freeze Duration",
      "92% Chance to Block",
      "40% Faster Block Rate",
      "+55% increased chance of Blocking",
      "+5 to Light Radius",
      "+175% Enhanced Defense"
    ],
    category: "Orphan's Call"
  },
  "Magnus' Skin": {
    name: "Magnus' Skin",
    type: "Sharkskin Glove",
    image: "setitems/magnus_skin.gif",
    props: [
      "Defense: 60",
      "Required Strength: 20",
      "Required Level: 37",
      "Durability: 14",
      "+3 to Light Radius",
      "+50% Enhanced Defense",
      "+15% Fire Resist",
      "+100 to Attack Rating",
      "+20% increased Attack Speed"
    ],
    category: "Orphan's Call"
  },
  "Wilhelm's Pride": {
    name: "Wilhelm's Pride",
    type: "Battle Belt",
    image: "setitems/wilhelms_pride.gif",
    props: [
      "Defense: 75",
      "Required Strength: 88",
      "Required Level: 42",
      "Durability: 18",
      "5% Life stolen per hit",
      "5% Mana stolen per hit",
      "+75% Enhanced Defense",
      "+10% Cold Resist"
    ],
    category: "Orphan's Call"
  },
  "Sander's Paragon": {
    name: "Sander's Paragon",
    type: "Cap",
    image: "setitems/sanders_paragon.gif",
    props: [
      "Defense: 4-104",
      "Required Level: 25",
      "Durability: 12",
      "+1 per character level to Defense",
      "Attacker takes Damage of 8",
      "35% better chance of getting Magic items"
    ],
    category: "Sander's Folly"
  },
  "Sander's Superstition": {
    name: "Sander's Superstition",
    type: "Bone Wand",
    image: "setitems/sanders_superstition.gif",
    props: [
      "Damage: 5-12",
      "Required Level: 25",
      "Durability: 15",
      "+75% Enhanced Damage",
      "8% Mana steal per hit",
      "20% Faster Cast Rate",
      "25-75 Cold Damage for 2 seconds",
      "+25 to Mana",
      "50% Damage to Undead"
    ],
    category: "Sander's Folly"
  },
  "Sander's Taboo": {
    name: "Sander's Taboo",
    type: "Heavy Gloves",
    image: "setitems/sanders_taboo.gif",
    props: [
      "Defense: 25-31",
      "Required Level: 28",
      "Durability: 14",
      "Adds 9-11 Poison Damage for 3 seconds",
      "+20-25 Defense",
      "+40 to Life",
      "+20% increased Attack Speed"
    ],
    category: "Sander's Folly"
  },
  "Sander's Riprap": {
    name: "Sander's Riprap",
    type: "Heavy Boots",
    image: "setitems/sanders_riprap.gif",
    props: [
      "Defense: 5-6",
      "Assassin Kick Damage: 4-10",
      "Required Strength: 18",
      "Required Level: 20",
      "Durability: 14",
      "40% Faster Run/Walk",
      "+100 to Attack Rating",
      "+10 to Dexterity",
      "+5 to Strength"
    ],
    category: "Sander's Folly"
  },
  "Sazabi's Mental Sheath": {
    name: "Sazabi's Mental Sheath",
    type: "Basinet",
    image: "setitems/sazabis_mental_sheath.gif",
    props: [
      "Defense: 175-184",
      "Required Strength: 82",
      "Required Level: 43",
      "Durability: 30",
      "+1 to all Skill levels",
      "+15-20% Lightning Resist",
      "+15-20% Fire Resist",
      "+100 Defense"
    ],
    category: "Sazabi's Grand Tribute"
  },
  "Sazabi's Cobalt Redeemer": {
    name: "Sazabi's Cobalt Redeemer",
    type: "Cryptic Sword",
    image: "setitems/sazabis_cobalt_redeemer.gif",
    props: [
      "Damage: 12-192",
      "Required Strength: 99",
      "Required Dexterity: 109",
      "Required Level: 73",
      "Indestructible",
      "+318% Damage to Demons",
      "+150% Enhanced Damage",
      "Adds 25-35 Cold Damage for 2 seconds",
      "+15 to Dexterity",
      "+5 to Strength",
      "+40% increased Attack Speed"
    ],
    category: "Sazabi's Grand Tribute"
  },
  "Sazabi's Ghost Liberator": {
    name: "Sazabi's Ghost Liberator",
    type: "Balrog Skin",
    image: "setitems/sazabis_ghost_liberator.gif",
    props: [
      "Defense: 810-917",
      "Required Strength: 165",
      "Required Level: 67",
      "Durability: 30",
      "+300 to Attack Rating against Demons",
      "+30% Faster Hit Recovery",
      "+400 to Defense",
      "+50-75 to Life",
      "+25 to Strength"
    ],
    category: "Sazabi's Grand Tribute"
  },
  "Tal Rasha's Lidless Eye": {
    name: "Tal Rasha's Lidless Eye",
    type: "Swirling Crystal",
    image: "setitems/talrashas_lidless_eye.gif",
    props: [
      "Damage:  18-42",
      "Required Strength:",
      "Required Dexterity:",
      "Required Level:  65",
      "Durability:  50",
      "20% Faster Cast Rate",
      "+77 to Mana",
      "+57 to Life",
      "+10 to Energy",
      "+1-2 to Lightning Mastery (Sorceress only)",
      "+1-2 to Cold Mastery (Sorceress only)",
      "+1-2 to Fire Mastery (Sorceress only)"
    ],
    category: "Tal Rasha's Wrappings"
  },
  "Tal Rasha's Horadric Crest": {
    name: "Tal Rasha's Horadric Crest",
    type: "Death Mask",
    image: "setitems/talrashas_horadric_crest.gif",
    props: [
      "Defense:  99-131",
      "Required Strength:  55",
      "Required level:  66",
      "Durability:  20",
      "10% Life stolen per hit",
      "10% Mana stolen per hit",
      "+15 to all Resistances",
      "+45 to Defense",
      "+30 to Mana",
      "+60 to Life"
    ],
    category: "Tal Rasha's Wrappings"
  },
  "Tal Rasha's Guardianship": {
    name: "Tal Rasha's Guardianship",
    type: "Lacquered Plate",
    image: "setitems/talrashas_guardianship.gif",
    props: [
      "Defense:  833-941",
      "Required Strength:  84",
      "Required Level:  71",
      "Durability:  55",
      "-60% to Requirements",
      "Magic damage reduced by 15",
      "+40% Cold Resist",
      "+40% Lightning Resist",
      "+40% Fire Resist",
      "+400 to Defense",
      "88% better chance of getting Magic items"
    ],
    category: "Tal Rasha's Wrappings"
  },
  "Tal Rasha's Fine Spun Cloth": {
    name: "Tal Rasha's Fine Spun Cloth",
    type: "Mesh Belt",
    image: "setitems/talrashas_fine_spun_cloth.gif",
    props: [
      "Defense:  35-100",
      "Required Strength:  47",
      "Required Level:  53",
      "Durability:  16",
      "37% damage taken goes to Mana",
      "-20% to Requirements",
      "+30 to Mana",
      "+20 to Dexterity",
      "10-15% better chance of Magic items"
    ],
    category: "Tal Rasha's Wrappings"
  },
  "Tal Rasha's Adjudication": {
    name: "Tal Rasha's Adjudication",
    type: "Amulet",
    image: "setitems/amu2.gif",
    props: [
      "Required Level:  67",
      "+2 to Sorceress Skill Levels",
      "+33% Lightning Resist",
      "Adds 3-32 Lightning Damage",
      "+42 to Mana",
      "+50 to Life"
    ],
    category: "Tal Rasha's Wrappings"
  },
  "Trang-Oul's Guise": {
    name: "Trang-Oul's Guise",
    type: "Bone Visage",
    image: "setitems/trangouls_guise.gif",
    props: [
      "Defense:  180-257",
      "Required Strength:  106",
      "Required Level:  65",
      "Durability:  40",
      "25% Faster Hit Recovery",
      "+5 Replenish Life",
      "+80-100 to Defense",
      "+150 to Mana",
      "Attack takes damage of 20"
    ],
    category: "Trang-Oul's Avatar"
  },
  "Trang-Oul's Scales": {
    name: "Trang-Oul's Scales",
    type: "Chaos Armor",
    image: "setitems/trangouls_scales.gif",
    props: [
      "Defense:  857",
      "Required Strength:  84",
      "Required Level:  49",
      "Durability:  70",
      "40% faster Run/Walk",
      "-40% to Requirements",
      "+150% Enhanced Defense",
      "+40% Poison Resist",
      "+100 Defense against Missiles",
      "+2 to Summoning Skills (Necro only)"
    ],
    category: "Trang-Oul's Avatar"
  },
  "Trang-Oul's Wing": {
    name: "Trang-Oul's Wing",
    type: "Cantor Trophy",
    image: "setitems/trangouls_wing.gif",
    props: [
      "Defense:  175-189",
      "Required Strength:  50",
      "Required Level:  54",
      "Durability:  20",
      "+30% increased chance of Blocking",
      "+40% Poison Resist",
      "+38-45% Fire Resist",
      "+125 to Defense",
      "+15 to Dexterity",
      "+25 to Strength",
      "+2 to Poison and Bone Skills (Necro only)"
    ],
    category: "Trang-Oul's Avatar"
  },
  "Trang-Oul's Girth": {
    name: "Trang-Oul's Girth",
    type: "Troll Belt",
    image: "setitems/trangouls_girth.gif",
    props: [
      "Defense:  134-166",
      "Required Strength:  91",
      "Required Level:  62",
      "Durability:  18",
      "Cannot be Frozen",
      "-40% to Requirements",
      "+5 Replenish Life",
      "+75-100 to Defense",
      "+25-50 to Mana",
      "+30 to maximum Stamina",
      "+66 to Life"
    ],
    category: "Trang-Oul's Avatar"
  },
  "Trang-Oul's Claws": {
    name: "Trang-Oul's Claws",
    type: "Heavy Bracers",
    image: "setitems/trangouls_claws.gif",
    props: [
      "Defense:  67-74",
      "Required Strength:  58",
      "Required Level:  45",
      "Durability:  16",
      "+20% Faster Cast Rate",
      "+30% Cold Resist",
      "+30 to Defense",
      "+25% Poison Skill Damage",
      "+2 to Curses (Necro only)"
    ],
    category: "Trang-Oul's Avatar"
  }
};

const runewords = {
  "Ancient's Pledge": {
    runes: ["Ral", "Ort", "Tal"],
    types: ["Shields"],
    detailTypes: ["Shields"],
    sockets: 3,
    props: [
      "+50% Enhanced Defense",
      "Cold Resist +43%",
      "Lightning Resist +48%",
      "Fire Resist +48%",
      "Poison Resist +48%",
      "10% Damage Taken Goes to Mana"
    ]
  },
  Beast: {
    runes: ["Ber", "Tir", "Um", "Mal", "Lum"],
    types: ["Weapons"],
    detailTypes: ["Axes", "Hammers", "Scepters"],
    sockets: 5,
    props: [
      "Level 9 Fanaticism Aura When Equipped",
      "+40% Increased Attack Speed",
      "+240-270% Enhanced Damage (varies)",
      "20% Chance of Crushing Blow",
      "25% Chance of Open Wounds",
      "+3 To Werebear",
      "+3 To Lycanthropy",
      "Prevent Monster Heal",
      "+25-40 To Strength (varies)",
      "+10 To Energy",
      "+2 To Mana After Each Kill",
      "Level 13 Summon Grizzly (5 Charges)"
    ]
  },
  Black: {
    runes: ["Thul", "Io", "Nef"],
    types: ["Weapons"],
    detailTypes: ["Clubs", "Hammers", "Maces"],
    sockets: 3,
    props: [
      "+15% Increased Attack Speed",
      "+120% Enhanced Damage",
      "+200 to Attack Rating",
      "Adds 3-14 Cold Damage (3 sec)",
      "40% Chance of Crushing Blow",
      "Knockback",
      "+10 to Vitality",
      "Magic Damage Reduced By 2",
      "Level 4 Corpse Explosion (12 Charges)"
    ]
  },
  Bone: {
    runes: ["Sol", "Um", "Um"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "15% Chance To Cast level 10 Bone Armor When Struck",
      "15% Chance To Cast level 10 Bone Spear On Striking",
      "+2 To Necromancer Skill Levels",
      "+100-150 To Mana (varies)",
      "All Resistances +30",
      "Damage Reduced By 7"
    ]
  },
  Bramble: {
    runes: ["Ral", "Ohm", "Sur", "Eth"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 4,
    props: [
      "Level 15-21 Thorns Aura When Equipped (varies)",
      "+50% Faster Hit Recovery",
      "+25-50% To Poison Skill Damage (varies)",
      "+300 Defense",
      "Increase Maximum Mana 5%",
      "Regenerate Mana 15%",
      "+5% To Maximum Cold Resist",
      "Fire Resist +30%",
      "Poison Resist +100%",
      "+13 Life After Each Kill",
      "Level 13 Spirit of Barbs (33 Charges)"
    ]
  },
  Brand: {
    runes: ["Jah", "Lo", "Mal", "Gul"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 4,
    props: [
      "35% Chance To Cast Level 14 Amplify Damage When Struck",
      "100% Chance To Cast Level 18 Bone Spear On Striking",
      "Fires Explosive Arrows or Bolts (15)",
      "+260-340% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "20% Bonus to Attack Rating",
      "+280-330% Damage To Demons (varies)",
      "20% Deadly Strike",
      "Prevent Monster Heal",
      "Knockback"
    ]
  },
  "Breath of the Dying": {
    runes: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
    types: ["Weapons"],
    detailTypes: ["All Weapons"],
    sockets: 6,
    props: [
      "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
      "Indestructible",
      "+60% Increased Attack Speed",
      "+350-400% Enhanced Damage (varies)",
      "-25% Target Defense",
      "+50 To Attack Rating",
      "+200% Damage To Undead",
      "+50 To Attack Rating Against Undead",
      "7% Mana Stolen Per Hit",
      "12-15% Life Stolen Per Hit (varies)",
      "Prevent Monster Heal",
      "+30 To All Attributes",
      "+1 To Light Radius",
      "Requirements -20%"
    ]
  },
  "Call to Arms": {
    runes: ["Amn", "Ral", "Mal", "Ist", "Ohm"],
    types: ["Weapons"],
    detailTypes: ["All Weapons"],
    sockets: 5,
    props: [
      "+1 To All Skills",
      "+40% Increased Attack Speed",
      "+240-290% Enhanced Damage (varies)",
      "Adds 5-30 Fire Damage",
      "7% Life Stolen Per Hit",
      "+2-6 To Battle Command (varies)",
      "+1-6 To Battle Orders (varies)",
      "+1-4 To Battle Cry (varies)",
      "Prevent Monster Heal",
      "Replenish Life +12",
      "30% Better Chance of Getting Magic Items"
    ]
  },
  "Chains of Honor": {
    runes: ["Dol", "Um", "Ber", "Ist"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 4,
    props: [
      "+2 To All Skills",
      "+200% Damage To Demons",
      "+100% Damage To Undead",
      "8% Life Stolen Per Hit",
      "+70% Enhanced Defense",
      "+20 To StrengthReplenish Life +7",
      "All Resistances +65",
      "Damage Reduced By 8%",
      "25% Better Chance of Getting Magic Items"
    ]
  },
  Chaos: {
    runes: ["Fal", "Ohm", "Um"],
    types: ["Weapons"],
    detailTypes: ["Claws"],
    sockets: 3,
    props: [
      "9% Chance To Cast Level 11 Frozen Orb On Striking",
      "11% Chance To Cast Level 9 Charged Bolt On Striking",
      "+35% Increased Attacked Speed",
      "+240-290% Enhanced Damage (varies)",
      "Adds 216-471 Magic Damage",
      "25% Chance of Open Wounds",
      "+1 To Whirlwind",
      "+10 To Strength",
      "+15 Life After Each Demon Kill"
    ]
  },
  "Crescent Moon": {
    runes: ["Shael", "Um", "Tir"],
    types: ["Weapons"],
    detailTypes: ["Axes", "Polearms", "Swords"],
    sockets: 3,
    props: [
      "10% Chance To Cast Level 17 Chain Lightning On Striking",
      "7% Chance To Cast Level 13 Static Field On Striking",
      "+20% Increased Attack Speed",
      "+180-220% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "-35% To Enemy Lightning Resistance",
      "25% Chance of Open Wounds",
      "+9-11 Magic Absorb (varies)",
      "+2 To Mana After Each Kill",
      "Level 18 Summon Spirit Wolf (30 Charges)"
    ]
  },
  Death: {
    runes: ["Hel", "El", "Vex", "Ort", "Gul"],
    types: ["Weapons"],
    detailTypes: ["Swords", "Axes"],
    sockets: 5,
    props: [
      "Indestructible",
      "100% Chance To Cast Level 44 Chain Lightning When You Die",
      "25% Chance To Cast Level 18 Glacial Spike On Attack",
      "+300-385% Enhanced Damage (varies)",
      "20% Bonus To Attack Rating",
      "+50 To Attack Rating",
      "Adds 1-50 Lightning Damage",
      "7% Mana Stolen Per Hit",
      "50% Chance of Crushing Blow",
      "(0.5*Clvl)% Deadly Strike (Based on Character Level)",
      "+1 To Light Radius",
      "Level 22 Blood Golem (15 Charges)",
      "Requirements -20%"
    ]
  },
  Delirium: {
    runes: ["Lem", "Ist", "Io"],
    types: ["Headgear"],
    detailTypes: ["Headgear"],
    sockets: 3,
    props: [
      "1% Chance To Cast lvl 50 Delirium When Struck",
      "6% Chance To Cast lvl 14 Mind Blast When Struck",
      "14% Chance To Cast lvl 13 Terror When Struck",
      "11% Chance To Cast lvl 18 Confuse On Striking",
      "+2 To All Skills",
      "+261 Defense",
      "+10 To Vitality",
      "50% Extra Gold From Monsters",
      "25% Better Chance of Getting Magic Items",
      "Level 17 Attract (60 Charges)"
    ]
  },
  Destruction: {
    runes: ["Vex", "Lo", "Ber", "Jah", "Ko"],
    types: ["Weapons"],
    detailTypes: ["Polearms", "Swords"],
    sockets: 5,
    props: [
      "23% Chance To Cast Level 12 Volcano On Striking",
      "5% Chance To Cast Level 23 Molten Boulder On Striking",
      "100% Chance To Cast level 45 Meteor When You Die",
      "15% Chance To Cast Level 22 Nova On Attack",
      "+350% Enhanced Damage",
      "Ignore Target's Defense",
      "Adds 100-180 Magic Damage",
      "7% Mana Stolen Per Hit",
      "20% Chance Of Crushing Blow",
      "20% Deadly Strike",
      "Prevent Monster Heal",
      "+10 To Dexterity"
    ]
  },
  Doom: {
    runes: ["Hel", "Ohm", "Um", "Lo", "Cham"],
    types: ["Weapons"],
    detailTypes: ["Axes", "Hammers", "Polearms"],
    sockets: 5,
    props: [
      "5% Chance To Cast Level 18 Volcano On Striking",
      "Level 12 Holy Freeze Aura When Equipped",
      "+2 To All Skills",
      "+45% Increased Attack Speed",
      "+330-370% Enhanced Damage (varies)",
      "-40-60% To Enemy Cold Resistance (varies)",
      "20% Deadly Strike",
      "25% Chance of Open Wounds",
      "Prevent Monster Heal",
      "Freezes Target +3",
      "Requirements -20%"
    ]
  },
  Dragon: {
    runes: ["Sur", "Lo", "Sol"],
    types: ["Armor", "Shields"],
    detailTypes: ["Armor", "Shields"],
    sockets: 3,
    props: [
      "Both",
      "20% Chance to Cast Level 18 Venom When Struck",
      "12% Chance To Cast Level 15 Hydra On Striking",
      "Level 14 Holy Fire Aura When Equipped",
      "+360 Defense",
      "+230 Defense Vs. Missile",
      "+3-5 To All Attributes (varies)",
      "+(0.375*Clvl) To Strength (Based on Character Level)",
      "+5% To Maximum Lightning Resist",
      "Damage Reduced by 7",
      "Armor",
      "Increase Maximum Mana 5%",
      "Shields",
      "+50 To Mana"
    ]
  },
  Dream: {
    runes: ["Io", "Jah", "Pul"],
    types: ["Headgear", "Shields"],
    detailTypes: ["Headgear", "Shields"],
    sockets: 3,
    props: [
      "Both",
      "10% Chance To Cast Level 15 Confuse When Struck",
      "Level 15 Holy Shock Aura When Equipped",
      "+20-30% Faster Hit Recovery (varies)",
      "+30% Enhanced Defense",
      "+150-220 Defense (varies)",
      "+10 To Vitality",
      "+(0.625*Clvl) To Mana (Based On Character Level)",
      "All Resistances +5-20 (varies)",
      "12-25% Better Chance of Getting Magic Items (varies)",
      "Headgear",
      "Increase Maximum Life 5%",
      "Shields",
      "+50 To Life"
    ]
  },
  Duress: {
    runes: ["Shael", "Um", "Thul"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "40% faster hit Recovery",
      "+10-20% Enhanced Damage (varies)",
      "Adds 37-133 Cold Damage",
      "15% Crushing Blow",
      "33% Open Wounds",
      "+150-200% Enhanced Defense (varies)",
      "-20% Slower Stamina Drain",
      "Cold Resist +45%",
      "Lightning Resist +15%",
      "Fire Resist +15%",
      "Poison Resist +15%"
    ]
  },
  Edge: {
    runes: ["Tir", "Tal", "Amn"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 3,
    props: [
      "Level 15 Thorns Aura When Equipped",
      "+35% Increased Attack Speed",
      "+320-380% Damage To Demons (varies)",
      "+280% Damage To Undead",
      "+75 Poison Damage Over 5 Seconds",
      "7% Life Stolen Per Hit",
      "Prevent Monster Heal",
      "+5-10 To All Attributes (varies)",
      "+2 To Mana After Each Kill",
      "Reduces All Vendor Prices 15%"
    ]
  },
  Enigma: {
    runes: ["Jah", "Ith", "Ber"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "+2 To All Skills",
      "+45% Faster Run/Walk",
      "+1 To Teleport",
      "+750-775 Defense (Varies)",
      "+(0.75*Clvl) To Strength (Based On Character Level)",
      "Increase Maximum Life 5%",
      "Damage Reduced By 8%",
      "+14 Life After Each Kill",
      "15% Damage Taken Goes To Mana",
      "(1*Clvl)% Better Chance of Getting Magic Items (Based On Character Level)"
    ]
  },
  Enlightenment: {
    runes: ["Pul", "Ral", "Sol"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "5% Chance To Cast Level 15 Blaze When Struck",
      "5% Chance To Cast level 15 Fire Ball On Striking",
      "+2 To Sorceress Skill Levels",
      "+1 To Warmth",
      "+30% Enhanced Defense",
      "Fire Resist +30%",
      "Damage Reduced By 7"
    ]
  },
  Eternity: {
    runes: ["Amn", "Ber", "Ist", "Sol", "Sur"],
    types: ["Weapons"],
    detailTypes: ["All Melee Weapons"],
    sockets: 5,
    props: [
      "Indestructible",
      "+260-310% Enhanced Damage (varies)",
      "+9 To Minimum Damage",
      "7% Life Stolen Per Hit",
      "20% Chance of Crushing Blow",
      "Hit Blinds Target",
      "Slows Target By 33%",
      "Replenish Mana 16%",
      "Cannot Be Frozen",
      "30% Better Chance Of Getting Magic Items",
      "Level 8 Revive (88 Charges)"
    ]
  },
  Exile: {
    runes: ["Vex", "Ohm", "Ist", "Dol"],
    types: ["Shields"],
    detailTypes: ["Shields"],
    sockets: 4,
    props: [
      "15% Chance To Cast Level 5 Life Tap On Striking",
      "Level 13-16 Defiance Aura When Equipped (varies)",
      "+2 To Offensive Auras (Paladin Only)",
      "+30% Faster Block Rate",
      "Freezes Target",
      "+220-260% Enhanced Defense (varies)",
      "Replenish Life +7",
      "+5% To Maximum Cold Resist",
      "+5% To Maximum Fire Resist",
      "25% Better Chance Of Getting Magic Items",
      "Repairs 1 Durability every 4 seconds"
    ]
  },
  Faith: {
    runes: ["Ohm", "Jah", "Lem", "Eld"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 4,
    props: [
      "Level 12-15 Fanaticism Aura When Equipped (varies)",
      "+1-2 To All Skills (varies)",
      "+330% Enhanced Damage",
      "Ignore Target's Defense",
      "300% Bonus To Attack Rating",
      "+75% Damage To Undead",
      "+50 To Attack Rating Against Undead",
      "+120 Fire Damage",
      "All Resistances +15",
      "10% Reanimate As: Returned",
      "75% Extra Gold From Monsters"
    ]
  },
  Famine: {
    runes: ["Fal", "Ohm", "Ort", "Jah"],
    types: ["Weapons"],
    detailTypes: ["Axes", "Hammers"],
    sockets: 4,
    props: [
      "+30% Increased Attack Speed",
      "+320-370% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "Adds 180-200 Magic Damage",
      "Adds 50-200 Fire Damage",
      "Adds 51-250 Lightning Damage",
      "Adds 50-200 Cold Damage",
      "12% Life Stolen Per Hit",
      "Prevent Monster Heal",
      "+10 To Strength"
    ]
  },
  "Flickering Flame": {
    runes: ["Nef", "Pul", "Vex"],
    types: ["Headgear"],
    detailTypes: ["Headgear"],
    sockets: 3,
    props: [
       "Level 4-8 Resist Fire Aura When Equipped",
       "+3 To Fire Skills",
       "-10-15% to Enemy Fire Resist",
       "+30% Enhanced Defense",
       "+30 Defense vs. Missile",
       "+50-75 To Mana",
       "Half Freeze Duration",
       "+5% To Maximum Fire Resist",
       "Poison Length Reduced by 50%"
    ]
  },
  Fortitude: {
    runes: ["El", "Sol", "Dol", "Lo"],
    types: ["Weapons", "Armor"],
    detailTypes: ["Weapons", "Armor"],
    sockets: 4,
    props: [
      "Both",
      "20% Chance To Cast Level 15 Chilling Armor when Struck",
      "+25% Faster Cast Rate",
      "+300% Enhanced Damage",
      "+200% Enhanced Defense",
      "+((8-12)*0.125*Clvl) To Life (Based on Character Level) (varies)",
      "All Resistances +25-30 (varies)",
      "12% Damage Taken Goes To Mana",
      "+1 To Light Radius",
      "Weapons",
      "+9 To Minimum Damage",
      "+50 To Attack Rating",
      "20% Deadly Strike",
      "Hit Causes Monster To Flee 25%",
      "Armor",
      "+15 Defense",
      "Replenish Life +7",
      "+5% To Maximum Lightning Resist",
      "Damage Reduced By 7"
    ]
  },
  Fury: {
    runes: ["Jah", "Gul", "Eth"],
    types: ["Weapons"],
    detailTypes: ["All Melee Weapons"],
    sockets: 3,
    props: [
      "40% Increased Attack Speed",
      "+209% Enhanced Damage",
      "Ignores Target Defense",
      "-25% Target Defense",
      "20% Bonus to Attack Rating",
      "6% Life Stolen Per Hit",
      "33% Chance Of Deadly Strike",
      "66% Chance Of Open Wounds",
      "+5 To Frenzy (Barbarian Only)",
      "Prevent Monster Heal"
    ]
  },
  Gloom: {
    runes: ["Fal", "Um", "Pul"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "15% Chance To Cast Level 3 Dim Vision When Struck",
      "+10% Faster Hit Recovery",
      "+200-260% Enhanced Defense (varies)",
      "+10 To Strength",
      "All Resistances +45",
      "Half Freeze Duration",
      "5% Damage Taken Goes To Mana",
      "-3 To Light Radius"
    ]
  },
  Grief: {
    runes: ["Eth", "Tir", "Lo", "Mal", "Ral"],
    types: ["Weapons"],
    detailTypes: ["Swords", "Axes"],
    sockets: 5,
    props: [
      "35% Chance To Cast Level 15 Venom On Striking",
      "+30-40% Increased Attack Speed (varies)",
      "Damage +340-400 (varies)",
      "Ignore Target's Defense",
      "-25% Target Defense",
      "+(1.875*Clvl)% Damage To Demons (Based on Character Level)",
      "Adds 5-30 Fire Damage",
      "-20-25% To Enemy Poison Resistance (varies)",
      "20% Deadly Strike",
      "Prevent Monster Heal",
      "+2 To Mana After Each Kill",
      "+10-15 Life After Each Kill (varies)"
    ]
  },
  "Hand of Justice": {
    runes: ["Sur", "Cham", "Amn", "Lo"],
    types: ["Weapons"],
    detailTypes: ["All Weapons"],
    sockets: 4,
    props: [
      "100% Chance To Cast Level 36 Blaze When You Level-Up",
      "100% Chance To Cast Level 48 Meteor When You Die",
      "Level 16 Holy Fire Aura When Equipped",
      "+33% Increased Attack Speed",
      "+280-330% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "-20% To Enemy Fire Resistance",
      "7% Life Stolen Per Hit",
      "20% Deadly Strike",
      "Hit Blinds Target",
      "Freezes Target +3"
    ]
  },
  Harmony: {
    runes: ["Tir", "Ith", "Sol", "Ko"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 4,
    props: [
      "Level 10 Vigor Aura When Equipped",
      "+200-275% Enhanced Damage (varies)",
      "+9 To Minimum Damage",
      "+9 To Maximum Damage",
      "Adds 55-160 Fire Damage",
      "Adds 55-160 Lightning Damage",
      "Adds 55-160 Cold Damage",
      "+2-6 To Valkyrie (varies)",
      "+10 To Dexterity",
      "Regenerate Mana 20%",
      "+2 To Mana After Each Kill",
      "+2 To Light Radius",
      "Level 20 Revive (25 Charges)"
    ]
  },
  "Heart of the Oak": {
    runes: ["Ko", "Vex", "Pul", "Thul"],
    types: ["Weapons"],
    detailTypes: ["Staves", "Maces"],
    sockets: 4,
    props: [
      "+3 To All Skills",
      "+40% Faster Cast Rate",
      "+75% Damage To Demons",
      "+100 To Attack Rating Against Demons",
      "Adds 3-14 Cold Damage",
      "7% Mana Stolen Per Hit",
      "+10 To Dexterity",
      "Replenish Life +20",
      "Increase Maximum Mana 15%",
      "All Resistances +30-40 (varies)",
      "Level 4 Oak Sage (25 Charges)",
      "Level 14 Raven (60 Charges)"
    ]
  },
  "Holy Thunder": {
    runes: ["Eth", "Ral", "Ort", "Tal"],
    types: ["Weapons"],
    detailTypes: ["Scepters"],
    sockets: 4,
    props: [
      "+60% Enhanced Damage",
      "+10 to Maximum Damage",
      "-25% Target Defense",
      "Adds 5-30 Fire Damage",
      "Adds 21-110 Lightning Damage",
      "+75 Poison Damage over 5 secs",
      "+3 to Holy Shock (Paladin Only)",
      "+5% to Maximum Lightning Resist",
      "Lightning Resist +60%",
      "Level 7 Chain Lightning (60 charges)"
    ]
  },
  Honor: {
    runes: ["Amn", "El", "Ith", "Tir", "Sol"],
    types: ["Weapons"],
    detailTypes: ["All Melee Weapons"],
    sockets: 5,
    props: [
      "+1 to all skills",
      "+160% Enhanced Damage",
      "+9 to Minimum Damage",
      "+9 to Maximum Damage",
      "+250 Attack Rating",
      "7% Life Stolen per Hit",
      "25% Deadly Strike",
      "+10 to Strength",
      "Replenish life +10",
      "+2 to Mana after each Kill",
      "+1 to Light Radius"
    ]
  },
  Ice: {
    runes: ["Amn", "Shael", "Jah", "Lo"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 4,
    props: [
      "100% Chance To Cast Level 40 Blizzard When You Level-up",
      "25% Chance To Cast Level 22 Frost Nova On Striking",
      "Level 18 Holy Freeze Aura When Equipped",
      "+20% Increased Attack Speed",
      "+140-210% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "+25-30% To Cold Skill Damage (varies)",
      "7% Life Stolen Per Hit",
      "-20% To Enemy Cold Resistance",
      "20% Deadly Strike",
      "(3.125*Clvl)% Extra Gold From Monsters (Based on Character Level)"
    ]
  },
  Infinity: {
    runes: ["Ber", "Mal", "Ber", "Ist"],
    types: ["Weapons"],
    detailTypes: ["Polearms"],
    sockets: 4,
    props: [
      "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
      "Level 12 Conviction Aura When Equipped",
      "+35% Faster Run/Walk",
      "+255-325% Enhanced Damage (varies)",
      "-(45-55)% To Enemy Lightning Resistance (varies)",
      "40% Chance of Crushing Blow",
      "Prevent Monster Heal",
      "+(0.5*Clvl) To Vitality (Based on Character Level)",
      "30% Better Chance of Getting Magic Items",
      "Level 21 Cyclone Armor (30 Charges)"
    ]
  },
  Insight: {
    runes: ["Ral", "Tir", "Tal", "Sol"],
    types: ["Weapons"],
    detailTypes: ["Polearms", "Staves"],
    sockets: 4,
    props: [
      "Level 12-17 Meditation Aura When Equipped (varies)",
      "+35% Faster Cast Rate",
      "+200-260% Enhanced Damage (varies)",
      "+9 To Minimum Damage",
      "180-250% Bonus to Attack Rating (varies)",
      "Adds 5-30 Fire Damage",
      "+75 Poison Damage Over 5 Seconds",
      "+1-6 To Critical Strike (varies)",
      "+5 To All Attributes",
      "+2 To Mana After Each Kill",
      "23% Better Chance of Getting Magic Items"
    ]
  },
  "King's Grace": {
    runes: ["Amn", "Ral", "Thul"],
    types: ["Weapons"],
    detailTypes: ["Swords", "Scepters"],
    sockets: 3,
    props: [
      "+100% Enhanced Damage",
      "+150 to Attack Rating",
      "+100% Damage to Demons",
      "+100 to Attack Rating against Demons",
      "+50% Damage to Undead",
      "+100 to Attack Rating against Undead",
      "Adds 5-30 Fire Damage",
      "Adds 3-14 Cold damage",
      "7% Life stolen per hit"
    ]
  },
  Kingslayer: {
    runes: ["Mal", "Um", "Gul", "Fal"],
    types: ["Weapons"],
    detailTypes: ["Swords", "Axes"],
    sockets: 4,
    props: [
      "+30% Increased Attack Speed",
      "+230-270% Enhanced Damage (varies)",
      "-25% Target Defense",
      "20% Bonus To Attack Rating",
      "33% Chance of Crushing Blow",
      "50% Chance of Open Wounds",
      "+1 To Vengeance",
      "Prevent Monster Heal",
      "+10 To Strength",
      "40% Extra Gold From Monsters"
    ]
  },
  "Last Wish": {
    runes: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
    types: ["Weapons"],
    detailTypes: ["Axes", "Hammers", "Swords"],
    sockets: 6,
    props: [
      "6% Chance To Cast Level 11 Fade When Struck",
      "10% Chance To Cast Level 18 Life Tap On Striking",
      "20% Chance To Cast Level 20 Charged Bolt On Attack",
      "Level 17 Might Aura When Equipped",
      "+330-375% Enhanced Damage (varies)",
      "Ignore Target's Defense",
      "60-70% Chance of Crushing Blow (varies)",
      "Prevent Monster Heal",
      "Hit Blinds Target",
      "(0.5*Clvl)% Chance of Getting Magic Items (Based on Character Level)"
    ]
  },
  Lawbringer: {
    runes: ["Amn", "Lem", "Ko"],
    types: ["Weapons"],
    detailTypes: ["Hammers", "Scepters", "Swords"],
    sockets: 3,
    props: [
      "20% Chance To Cast Level 15 Decrepify On Striking",
      "Level 16-18 Sanctuary Aura When Equipped (varies)",
      "-50% Target Defense",
      "Adds 150-210 Fire Damage",
      "Adds 130-180 Cold Damage",
      "7% Life Stolen Per Hit",
      "Slain Monsters Rest In Peace",
      "+200-250 Defense Vs. Missile (varies)",
      "+10 To Dexterity",
      "75% Extra Gold From Monsters"
    ]
  },
  Leaf: {
    runes: ["Tir", "Ral"],
    types: ["Weapons"],
    detailTypes: ["Staves"],
    sockets: 2,
    props: [
      "+3 to Fire Skills",
      "Adds 5-30 Fire Damage",
      "+3 to Inferno (Sorceress Only)",
      "+3 to Warmth (Sorceress Only)",
      "+3 to Fire Bolt (Sorceress Only)",
      "+(2*Clvl) Defence (Based on Character Level)",
      "Cold Resist +33%",
      "+2 to Mana after each Kill"
    ]
  },
  Lionheart: {
    runes: ["Hel", "Lum", "Fal"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "+20% Enhanced Damage",
      "+25 To Strength",
      "+15 To Dexterity",
      "+20 To Vitality",
      "+10 To Energy",
      "+50 To Life",
      "All Resistances +30",
      "Requirements -15%"
    ]
  },
  Lore: {
    runes: ["Ort", "Sol"],
    types: ["Headgear"],
    detailTypes: ["Headgear"],
    sockets: 2,
    props: [
      "+1 to All Skills",
      "+10 to Energy",
      "Lightning Resist +30%",
      "Damage Reduced by 7",
      "+2 to Mana after each Kill",
      "+2 to Light Radius"
    ]
  },
  Malice: {
    runes: ["Ith", "El", "Eth"],
    types: ["Weapons"],
    detailTypes: ["All Melee Weapons"],
    sockets: 3,
    props: [
      "+33% Enhanced Damage",
      "+9 to Maximum Damage",
      "-25% Target Defense",
      "+50 to Attack Rating",
      "100% Chance of Open wounds",
      "Prevent Monster Heal",
      "-100 to Monster Defense Per Hit",
      "Drain Life -5"
    ]
  },
  Melody: {
    runes: ["Shael", "Ko", "Nef"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 3,
    props: [
      "+3 To Bow and Crossbow Skills (Amazon Only)",
      "+20% Increased Attack Speed",
      "+50% Enhanced Damage",
      "+300% Damage To Undead",
      "+3 To Slow Missiles (Amazon Only)",
      "+3 To Dodge (Amazon Only)",
      "+3 To Critical Strike (Amazon Only)",
      "Knockback",
      "+10 To Dexterity"
    ]
  },
  Memory: {
    runes: ["Lum", "Io", "Sol", "Eth"],
    types: ["Weapons"],
    detailTypes: ["Staves"],
    sockets: 4,
    props: [
      "+3 To Sorceress Skill Levels",
      "+33% Faster Cast Rate",
      "+9 To Minimum Damage",
      "-25% Target Defence",
      "+3 To Energy Shield (Sorceress Only)",
      "+2 To Static Field (Sorceress Only)",
      "+50% Enhanced Defense",
      "+10 Vitality",
      "+10 Energy",
      "Increase Maximum Mana 20%",
      "Magic Damage Reduced By 7"
    ]
  },
  Mist: {
    runes: ["Cham", "Shael", "Gul", "Thul", "Ith"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 5,
    props: [
      "Level 8-12 Concentration Aura When Equipped (varies)",
      "+3 To All Skills",
      "20% Increased Attack Speed",
      "+100% Piercing Attack",
      "+325-375% Enhanced Damage (varies)",
      "+9 To Maximum Damage",
      "20% Bonus to Attack Rating",
      "Adds 3-14 Cold Damage",
      "All Resistances +40",
      "Freeze Target +3",
      "+24 Vitality"
    ]
  },
  Myth: {
    runes: ["Hel", "Amn", "Nef"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "3% Chance To Cast Level 1 Howl When Struck",
      "10% Chance To Cast Level 1 Taunt On Striking",
      "+2 To Barbarian Skill Levels",
      "+30 Defense Vs. Missile",
      "Replenish Life +10",
      "Attacker Takes Damage of 14",
      "Requirements -15%"
    ]
  },
  Nadir: {
    runes: ["Nef", "Tir"],
    types: ["Headgear"],
    detailTypes: ["Headgear"],
    sockets: 2,
    props: [
      "+50% Enhanced Defense",
      "+10 Defense",
      "+30 Defense vs. Missile",
      "+5 to Strength",
      "+2 to Mana after each Kill",
      "-33% Extra Gold from Monsters",
      "-3 to Light Radius",
      "Level 13 Cloak of Shadows (9 charges)"
    ]
  },
  Oath: {
    runes: ["Shael", "Pul", "Mal", "Lum"],
    types: ["Weapons"],
    detailTypes: ["Axes", "Maces", "Swords"],
    sockets: 4,
    props: [
      "Indestructible",
      "30% Chance To Cast Level 20 Bone Spirit On Striking",
      "+50% Increased Attack Speed",
      "+210-340% Enhanced Damage (varies)",
      "+75% Damage To Demons",
      "+100 To Attack Rating Against Demons",
      "Prevent Monster Heal",
      "+10 To Energy",
      "+10-15 Magic Absorb (varies)",
      "Level 16 Heart of Wolverine (20 Charges)",
      "Level 17 Iron Golem (14 Charges)"
    ]
  },
  Obedience: {
    runes: ["Hel", "Ko", "Thul", "Eth", "Fal"],
    types: ["Weapons"],
    detailTypes: ["Polearms"],
    sockets: 5,
    props: [
      "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
      "+40% Faster Hit Recovery",
      "+370% Enhanced Damage",
      "-25% Target Defense",
      "Adds 3-14 Cold Damage (3 Seconds Duration,Normal)",
      "-25% To Enemy Fire Resistance",
      "40% Chance of Crushing Blow",
      "+200-300 Defense (varies)",
      "+10 To Strength",
      "+10 To Dexterity",
      "All Resistances +20-30 (varies)",
      "Requirements -20%"
    ]
  },
  Obsession: {
    runes: ["Zod", "Ist", "Lem", "Lum", "Io", "Nef"],
    types: ["Weapons"],
    detailTypes: ["Staves"],
    sockets: 6,
    props: [
      "Indestructible",
      "24% Chance to cast level 10 Weaken when struck",
      "+4 To All Skills",
      "+65% Faster Cast Rate",
      "+60% Faster Hit Recovery",
      "Knockback",
      "+10 To Vitality",
      "+10 To Energy",
      "Increase Maximum Life 15-25% (varies)",
      "Regenerate Mana 15-30% (varies)",
      "All Resistances +60-70 (varies)",
      "75% Extra Gold from Monsters",
      "30% Better Chance of Getting Magic Items"
    ]
  },
  Passion: {
    runes: ["Dol", "Ort", "Eld", "Lem"],
    types: ["Weapons"],
    detailTypes: ["All Weapons"],
    sockets: 4,
    props: [
      "+25% Increased Attack Speed",
      "+160-210% Enhanced Damage (varies)",
      "50-80% Bonus To Attack Rating (varies)",
      "+75% Damage To Undead",
      "+50 To Attack Rating Against Undead",
      "Adds 1-50 Lightning Damage",
      "+1 To Berserk",
      "+1 To Zeal",
      "Hit Blinds Target +10",
      "Hit Causes Monster To Flee 25%",
      "75% Extra Gold From Monsters",
      "Level 3 Heart of Wolverine (12 Charges)"
    ]
  },
  Pattern: {
    runes: ["Tal", "Ort", "Thul"],
    types: ["Weapons"],
    detailTypes: ["Claws"],
    sockets: 3,
    props: [
      "+30% Faster Block Rate",
      "+40-80% Enhanced Damage (varies)",
      "10% Bonus to Attack Rating",
      "Adds 17-62 Fire Damage",
      "Adds 1-50 Lightning Damage",
      "Adds 3-14 Cold Damage",
      "+75 Poison Damage Over 5 Seconds",
      "+6 to Strength",
      "+6 to Dexterity",
      "All Resistances +15"
    ]
  },
  Peace: {
    runes: ["Shael", "Thul", "Amn"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "4% Chance To Cast Level 5 Slow Missiles When Struck",
      "2% Chance To Cast level 15 Valkyrie On Striking",
      "+2 To Amazon Skill Levels",
      "+20% Faster Hit Recovery",
      "+2 To Critical Strike",
      "Cold Resist +30%",
      "Attacker Takes Damage of 14"
    ]
  },
  Phoenix: {
    runes: ["Vex", "Vex", "Lo", "Jah"],
    types: ["Weapons", "Shields"],
    detailTypes: ["All Weapons", "Shields"],
    sockets: 4,
    props: [
      "Both",
      "100% Chance To Cast level 40 Blaze When You Level-up",
      "40% Chance To Cast Level 22 Firestorm On Striking",
      "Level 10-15 Redemption Aura When Equipped (varies)",
      "+350-400% Enhanced Damage (varies)",
      "-28% To Enemy Fire Resistance",
      "+350-400 Defense Vs. Missile (varies)",
      "+15-21 Fire Absorb (varies)",
      "Weapons",
      "Ignores Target's Defense",
      "14% Mana Stolen Per Hit",
      "20% Deadly Strike",
      "Shields",
      "+50 To Life",
      "+5% To Maximum Lightning Resist",
      "+10% To Maximum Fire Resist"
    ]
  },
  Plague: {
    runes: ["Cham", "Shael", "Um"],
    types: ["Weapons"],
    detailTypes: ["Claws", "Swords", "Daggers"],
    sockets: 3
    props: [
      "20% Chance to cast level 12 Lower Resist when struck",
      "25% Chance to cast level 15 Poison Nova on striking",
      "Level 13-17 Cleansing Aura When Equipped (varies)",
      "+1-2 All Skills",
      "+20% Increased Attack Speed",
      "+220-320% Enhanced Damage (varies)",
      "-23% To Enemy Poison Resistance",
      "0.3% (0-29.7) Deadly Strike (Based on Character Level)",
      "+25% Chance of Open Wounds",
      "Freezes Target +3"
    ]    
  },
  Pride: {
    runes: ["Cham", "Sur", "Io", "Lo"],
    types: ["Weapons"],
    detailTypes: ["Polearms"],
    sockets: 4,
    props: [
      "25% Chance To Cast Level 17 Fire Wall When Struck",
      "Level 16-20 Concentration Aura When Equipped (varies)",
      "260-300% Bonus To Attack Rating (varies)",
      "+(1*Clvl)% Damage To Demons (Based on Character Level)",
      "Adds 50-280 Lightning Damage",
      "20% Deadly Strike",
      "Hit Blinds Target",
      "Freezes Target +3",
      "+10 To Vitality",
      "Replenish Life +8",
      "(1.875*Clvl)% Extra Gold From Monsters (Based on Character Level)"
    ]
  },
  Principle: {
    runes: ["Ral", "Gul", "Eld"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "100% Chance To Cast Level 5 Holy Bolt On Striking",
      "+2 To Paladin Skill Levels",
      "+50% Damage to Undead",
      "+100-150 to Life (varies)",
      "15% Slower Stamina Drain",
      "+5% To Maximum Poison Resist",
      "Fire Resist +30%"
    ]
  },
  Prudence: {
    runes: ["Mal", "Tir"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 2,
    props: [
      "+25% Faster Hit Recovery",
      "+140-170% Enhanced Defense (varies)",
      "All Resistances +25-35 (varies)",
      "Damage Reduced by 3",
      "Magic Damage Reduced by 17",
      "+2 To Mana After Each Kill",
      "+1 To Light Radius",
      "Repairs Durability 1 In 4 Seconds"
    ]
  },
  Radiance: {
    runes: ["Nef", "Sol", "Ith"],
    types: ["Headgear"],
    detailTypes: ["Headgear"],
    sockets: 3,
    props: [
      "+75% Enhanced Defense",
      "+30 Defense vs. Missiles",
      "+10 to Vitality",
      "+10 to Energy",
      "+33 to Mana",
      "Damage Reduced by 7",
      "Magic Damage Reduced by 3",
      "15% Damage Taken Goes to Mana",
      "+5 to Light Radius"
    ]
  },
  Rain: {
    runes: ["Ort", "Mal", "Ith"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "5% Chance To Cast Level 15 Cyclone Armor When Struck",
      "5% Chance To Cast Level 15 Twister On Striking",
      "+2 To Druid Skills",
      "+100-150 To Mana (varies)",
      "Lightning Resist +30%",
      "Magic Damage Reduced By 7",
      "15% Damage Taken Goes to Mana"
    ]
  },
  Rhyme: {
    runes: ["Shael", "Eth"],
    types: ["Shields"],
    detailTypes: ["Shields"],
    sockets: 2,
    props: [
      "+40% Faster Block Rate",
      "20% Increased Chance of Blocking",
      "Regenerate Mana 15%",
      "All Resistances +25",
      "Cannot be Frozen",
      "50% Extra Gold from Monsters",
      "25% Better Chance of Getting Magic Items"
    ]
  },
  Rift: {
    runes: ["Hel", "Ko", "Lem", "Gul"],
    types: ["Weapons"],
    detailTypes: ["Polearms", "Scepters"],
    sockets: 4,
    props: [
      "20% Chance To Cast Level 16 Tornado On Striking",
      "16% Chance To Cast Level 21 Frozen Orb On Attack",
      "20% Bonus To Attack Rating",
      "Adds 160-250 Magic Damage",
      "Adds 60-180 Fire Damage",
      "+5-10 To All Attributes (varies)",
      "+10 To Dexterity",
      "38% Damage Taken Goes To Mana",
      "75% Extra Gold From Monsters",
      "Level 15 Iron Maiden (40 Charges)",
      "Requirements -20%"
    ]
  },
  Sanctuary: {
    runes: ["Ko", "Ko", "Mal"],
    types: ["Shields"],
    detailTypes: ["Shields"],
    sockets: 3,
    props: [
      "+20% Faster Hit Recovery",
      "+20% Faster Block Rate",
      "20% Increased Chance of Blocking",
      "+130-160% Enhanced Defense (varies)",
      "+250 Defense vs. Missile",
      "+20 To Dexterity",
      "All Resistances +50-70 (varies)",
      "Magic Damage Reduced By 7",
      "Level 12 Slow Missiles (60 Charges)"
    ]
  },
  Silence: {
    runes: ["Dol", "Eld", "Hel", "Ist", "Tir", "Vex"],
    types: ["Weapons"],
    detailTypes: ["All Weapons"],
    sockets: 6,
    props: [
      "+2 to All Skills",
      "+20% Increased Attack Speed",
      "+20% Faster Hit Recovery",
      "+200% Enhanced Damage",
      "+75% Damage To Undead",
      "+50 to Attack Rating Against Undead",
      "11% Mana Stolen Per Hit",
      "Hit Blinds Target +33",
      "Hit Causes Monster to Flee 25%",
      "All Resistances +75",
      "+2 to Mana After Each Kill",
      "30% Better Chance of Getting Magic Items",
      "Requirements -20%"
    ]
  },
  Smoke: {
    runes: ["Nef", "Lum"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 2,
    props: [
      "+20% Faster Hit Recovery",
      "+75% Enhanced Defense",
      "+280 Defense vs. Missiles",
      "+10 to Energy",
      "All Resistances +50",
      "-1 to Light Radius",
      "Level 6 Weaken (18 charges)"
    ]
  },
  Spirit: {
    runes: ["Tal", "Thul", "Ort", "Amn"],
    types: ["Weapons", "Shields"],
    detailTypes: ["Shields", "Swords"],
    sockets: 4,
    props: [
      {
        description: "Both",
        props: [
          "+2 To All Skills",
          "+25-35% Faster Cast Rate (varies)",
          "+55% Faster Hit Recovery",
          "+250 Defense Vs. Missile",
          "+22 To Vitality",
          "+89-112 To Mana (varies)",
          "+3-8 Magic Absorb (varies)"
        ]
      },
      {
        description: "Shields",
        props: [
          "Cold Resist +35%",
          "Lightning Resist +35%",
          "Poison Resist +35%",
          "Attacker Takes Damage of 14"
        ]
      },
      {
        description: "Swords",
        props: [
          "Adds 1-50 Lightning Damage",
          "Adds 3-14 Cold Damage (3 Sec,Normal)",
          "+75 Poison Damage Over 5 Seconds",
          "7% Life Stolen Per Hit"
        ]
      }
    ]
  },
  Splendor: {
    runes: ["Eth", "Lum"],
    types: ["Shields"],
    detailTypes: ["Shields"],
    sockets: 2,
    props: [
      "+1 To All Skills",
      "+10% Faster Cast Rate",
      "+20% Faster Block Rate",
      "+60-100% Enhanced Defense (varies)",
      "+10 To Energy",
      "Regenerate Mana 15%",
      "50% Extra Gold From Monsters",
      "20% Better Chance of Getting Magic Items",
      "+3 To Light Radius"
    ]
  },
  Stealth: {
    runes: ["Tal", "Eth"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 2,
    props: [
      "+25% Faster Run/Walk",
      "+25% Faster Casting Rate",
      "+25% Faster Hit Recovery",
      "+6 to Dexterity",
      "Regenerate Mana 15%",
      "+15 Maximum Stamina",
      "Poison Resist +30%",
      "Magic Damage Reduced by 3"
    ]
  },
  Steel: {
    runes: ["Tir", "El"],
    types: ["Weapons"],
    detailTypes: ["Swords", "Axes", "Maces"],
    sockets: 2,
    props: [
      "+25% Increased Attack Speed",
      "+20% Enhanced Damage",
      "+3 to Minimum Damage",
      "+3 to Maximum Damage",
      "+50 to Attack Rating",
      "50% Chance of Open Wounds",
      "+2 to Mana after each Kill",
      "+1 to Light Radius"
    ]
  },
  Stone: {
    runes: ["Shael", "Um", "Pul", "Lum"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 4,
    props: [
      "+60% Faster Hit Recovery",
      "+250-290% Enhanced Defense (varies)",
      "+300 Defense Vs. Missile",
      "+16 To Strength",
      "+16 To Vitality",
      "+10 To Energy",
      "All Resistances +15",
      "Level 16 Molten Boulder (80 Charges)",
      "Level 16 Clay Golem (16 Charges)"
    ]
  },
  Strength: {
    runes: ["Amn", "Tir"],
    types: ["Weapons"],
    detailTypes: ["Melee Weapons"],
    sockets: 2,
    props: [
      "+35% Enhanced Damage",
      "7% Life stolen per hit",
      "25% Chance of Crushing Blow",
      "+20 to Strength",
      "+10 to Vitality",
      "+2 to Mana after each Kill"
    ]
  },
  Treachery: {
    runes: ["Shael", "Thul", "Lem"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "5% Chance To Cast Level 15 Fade When Struck",
      "25% Chance To Cast level 15 Venom On Striking",
      "+2 To Assassin Skills",
      "+45% Increased Attack Speed",
      "+20% Faster Hit Recovery",
      "Cold Resist +30%",
      "50% Extra Gold From Monsters"
    ]
  },
  "Unbending Will": {
    runes: ["Fal", "Io", "Ith", "Eld", "El",  "Hel"],
    types: ["Weapons"],
    detailTypes: ["Swords"],
    sockets: 6
    props: [
      "18% Chance to cast Level 18 Taunt on striking",
      "+3 To Combat Skills (Barbarian Only)",
      "+20-30% Increased Attack Speed (varies)",
      "+300-350% Enhanced Damage (varies)",
      "+9 To Maximum Damage",
      "+50 To Attack Rating",
      "+75% Damage to Undead",
      "+50 Attack Rating Against Undead",
      "8-10% Life Stolen Per Hit (varies)",
      "Prevent Monster Heal",
      "+10 To Strength",
      "+10 To Vitality",
      "Damage Reduced By 8",
      "+1 Light Radius",
      "Requirements -20%"
    ]
  },
  Venom: {
    runes: ["Tal", "Dol", "Mal"],
    types: ["Weapons"],
    detailTypes: ["All Weapons"],
    sockets: 3,
    props: [
      "Ignore Target's Defense",
      "+273 Poison Damage Over 6 Seconds",
      "7% Mana Stolen Per Hit",
      "Prevent Monster Heal",
      "Hit Causes Monster To Flee 25%",
      "Level 13 Poison Nova (11 Charges)",
      "Level 15 Poison Explosion (27 Charges)"
    ]
  },
  "Voice of Reason": {
    runes: ["Lem", "Ko", "El", "Eld"],
    types: ["Weapons"],
    detailTypes: ["Maces", "Swords"],
    sockets: 4,
    props: [
      "15% Chance To Cast Level 13 Frozen Orb On Striking",
      "18% Chance To Cast Level 20 Ice Blast On Striking",
      "+50 To Attack Rating",
      "+220-350% Damage To Demons (varies)",
      "+355-375% Damage To Undead (varies)",
      "+50 To Attack Rating Against Undead",
      "Adds 100-220 Cold Damage",
      "-24% To Enemy Cold Resistance",
      "+10 To Dexterity",
      "Cannot Be Frozen",
      "75% Extra Gold From Monsters",
      "+1 To Light Radius"
    ]
  },
  Wealth: {
    runes: ["Lem", "Ko", "Tir"],
    types: ["Armor"],
    detailTypes: ["Armor"],
    sockets: 3,
    props: [
      "+10 to Dexterity",
      "+2 to Mana After Each Kill",
      "300% Extra Gold From Monsters",
      "100% Better Chance of Getting Magic Items"
    ]
  },
  White: {
    runes: ["Dol", "Io"],
    types: ["Weapons"],
    detailTypes: ["Wands"],
    sockets: 2,
    props: [
      "+3 to Poison and Bone Skills (Necromancer Only)",
      "+20% Faster Cast Rate",
      "+2 to Bone Spear (Necromancer Only)",
      "+4 to Skeleton Mastery (Necromancer Only)",
      "+3 to Bone Armor (Necromancer Only)",
      "Hit causes monster to flee 25%",
      "+10 to vitality",
      "+13 to mana",
      "Magic Damage Reduced by 4"
    ]
  },
  Wind: {
    runes: ["Sur", "El"],
    types: ["Weapons"],
    detailTypes: ["Melee Weapons"],
    sockets: 2,
    props: [
      "10% Chance To Cast Level 9 Tornado On Striking",
      "+20% Faster Run/Walk",
      "+40% Increased Attack Speed",
      "+15% Faster Hit Recovery",
      "+120-160% Enhanced Damage (varies)",
      "-50% Target Defense",
      "+50 To Attack Rating",
      "Hit Blinds Target",
      "+1 To Light Radius",
      "Level 13 Twister (127 Charges)"
    ]
  },
  Wisdom: {
    runes: ["Pul", "Ith", "Eld"],
    types: ["Headgear"],
    detailTypes: ["Headgear"],
    sockets: 3
    props: [
      "+33% Piercing Attack",
      "+15-25% Bonus to Attack Rating (varies)",
      "4-8% Mana Stolen Per Hit (varies)",
      "+30% Enhanced Defense",
      "+10 Energy",
      "15% Slower Stamina Drain",
      "Cannot Be Frozen",
      "+5 Mana After Each Kill",
      "15% Damage Taken Goes to Mana"
    ]
  },
  Wrath: {
    runes: ["Pul", "Lum", "Ber", "Mal"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 4,
    props: [
      "30% Chance To Cast Level 1 Decrepify On Striking",
      "5% Chance To Cast Level 10 Life Tap On Striking",
      "+375% Damage To Demons",
      "+100 To Attack Rating Against Demons",
      "+250-300% Damage To Undead (varies)",
      "Adds 85-120 Magic Damage",
      "Adds 41-240 Lightning Damage",
      "20% Chance of Crushing Blow",
      "Prevent Monster Heal",
      "+10 To Energy",
      "Cannot Be Frozen"
    ]
  },
  Zephyr: {
    runes: ["Ort", "Eth"],
    types: ["Weapons"],
    detailTypes: ["Missile Weapons"],
    sockets: 2,
    props: [
      "7% Chance to Cast Level 1 Twister When Struck",
      "+25% Faster Run/Walk",
      "+25% Increased Attack Speed",
      "+33% Enhanced Damage",
      "-25% Target Defense",
      "+66 to Attack Rating",
      "Adds 1-50 lightning damage",
      "+25 Defense"
    ]
  }
};

// fixes for old grail seed data, which contained typos
uniqueItems["Crow Cow"] = uniqueItems["Crow Caw"];
uniqueItems["Chance Gaurds"] = uniqueItems["Chance Guards"];
uniqueItems["Shawdow Dancer"] = uniqueItems["Shadow Dancer"];
uniqueItems["The Chieftan"] = uniqueItems["The Chieftain"];
uniqueItems["General's Tan Do Li Ga"] =
  uniqueItems["The General's Tan Do Li Ga"];
uniqueItems["Baranar's Star "] = uniqueItems["Baranar's Star"];
uniqueItems["Demon Limb "] = uniqueItems["Demon Limb"];
uniqueItems["Stormlash "] = uniqueItems.Stormlash;
uniqueItems["Horizon's Tornado "] = uniqueItems["Horizon's Tornado"];
uniqueItems["Stone Crusher "] = uniqueItems["Stone Crusher"];
uniqueItems["Schaefer's Hammer "] = uniqueItems["Schaefer's Hammer"];
uniqueItems["Culwen's point"] = uniqueItems["Culwen's Point"];
uniqueItems["Wraith's Flight"] = uniqueItems["Wraith Flight"];
uniqueItems["Eye of Etlich"] = uniqueItems["The Eye of Etlich"];
uniqueItems["Mahim-Oak Curio"] = uniqueItems["The Mahim-Oak Curio"];
uniqueItems["Cat's Eye"] = uniqueItems["The Cat's Eye"];
uniqueItems["Rising Sun"] = uniqueItems["The Rising Sun"];
uniqueItems["Highlords Wrath"] = uniqueItems["Highlord's Wrath"];
uniqueItems["Bloodraven's Charge"] = uniqueItems["Blood Raven's Charge"];
uniqueItems["Sparkling Mail"] = uniqueItems["Sparking Mail"];
(uniqueItems as any).Viscerataunt = uniqueItems.Visceratuant;
(uniqueItems as any).Steelshade = uniqueItems["Steel Shade"];

setItems["Tal Rasha's Fine-Spun Cloth"] =
  setItems["Tal Rasha's Fine Spun Cloth"];
setItems["Haemosu's Adament"] = setItems["Haemosu's Adamant"];

export const items = { uniqueItems, setItems, runewords };
