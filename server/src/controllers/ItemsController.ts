import { Request, Response } from "express";
import { items } from "../ItemList.tsx";

enum ItemCategory {
  Unique = "unique",
  Set = "set",
  Runeword = "runeword"
}

export class ItemsController {
  public getItem = (req: Request, res: Response) => {
    const itemName = req.params.itemName;

    if (!itemName) {
      res.status(400).send();
      return;
    }

    let uniqueItem = items.uniqueItems[itemName];

    ItemsController.getItemValue(
      res,
      uniqueItem ? uniqueItem : items.setItems[itemName],
      uniqueItem ? ItemCategory.Unique : ItemCategory.Set
    );
  };

  public getRuneword = (req: Request, res: Response) => {
    const runewordName = req.params.runewordName;

    if (!runewordName) {
      res.status(400).send();
      return;
    }

    ItemsController.getItemValue(res, items.runewords[runewordName], ItemCategory.Runeword);
  };

  private static getItemValue(res: Response, item: any, category: ItemCategory) {
    if (!item) {
      res.status(404).send();
      return;
    }

    item.category = category;

    res.json(item);
  }
}
