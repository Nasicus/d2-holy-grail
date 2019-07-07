import { IItem } from "../definitions/IItem";
import { Item } from "../definitions/Item";
import { ItemScores } from "../ItemScores";

export class MissingItems {
  public missing: number = 0;
  public score: number = 0;
  public found: number = 0;

  public constructor() {}
}

export class StatisticsController {
  public constructor() {}

  public static formatGrailForParty = (data: any): any => {
    let partyGrailData = {
      uniqueArmor: {
        missing: 123
      },
      uniqueWeapons: {
        missing: 197
      },
      uniqueOther: {
        missing: 59
      },
      sets: {
        missing: 127
      },
      itemScore: 0
    };
    if (data && data.uniques) {
      if (data.uniques.weapons) {
        let missingWeps = StatisticsController.sumMissing(
          () => data.uniques.weapons,
          new MissingItems()
        );
        partyGrailData.uniqueWeapons.missing = missingWeps.missing;
        partyGrailData.itemScore += missingWeps.score;
      }
      if (data.uniques.armor) {
        let missingArmor = StatisticsController.sumMissing(
          () => data.uniques.armor,
          new MissingItems()
        );
        partyGrailData.uniqueArmor.missing = missingArmor.missing;
        partyGrailData.itemScore += missingArmor.score;
      }
      if (data.uniques.other) {
        let missingOther = StatisticsController.sumMissing(
          () => data.uniques.other,
          new MissingItems()
        );
        partyGrailData.uniqueOther.missing = missingOther.missing;
        partyGrailData.itemScore += missingOther.score;
      }
    }
    if (data && data.sets) {
      let missingSets = StatisticsController.sumMissing(
        () => data.sets,
        new MissingItems()
      );
      partyGrailData.sets.missing = missingSets.missing;
      partyGrailData.itemScore += missingSets.score;
    }
    return partyGrailData;
  };

  public static sumMissing = (
    dataFunc: () => any,
    missing: MissingItems,
    category?: string
  ): MissingItems => {
    let data = {};
    try {
      data = dataFunc();
    } catch (e) {
      // ignore error
    }

    if (!data) {
      return missing;
    }

    Object.keys(data).forEach(key => {
      const possibleItem = data[key] as IItem;
      if (StatisticsController.isItem(possibleItem)) {
        if (!possibleItem.wasFound) {
          missing.missing++;
        } else {
          missing.found++;
          let itemScore = ItemScores[key];
          if (!itemScore) {
            // This is a facet
            if (category === "all") {
              // Using the original method, count each facet as two
              itemScore = 2 * ItemScores["Rainbow Facet"];
            } else {
              // using the new split facet system, count each as one
              itemScore = ItemScores["Rainbow Facet"];
            }
          }
          missing.score += itemScore;
        }
      } else {
        StatisticsController.sumMissing(() => possibleItem, missing, key);
      }
    });
    return missing;
  };

  public static isItem(data: any): boolean {
    const itemProto = new Item();
    return (
      data &&
      typeof data === "object" &&
      (!Object.keys(data).length ||
        Object.keys(itemProto).some(k => data.hasOwnProperty(k)))
    );
  }
}
