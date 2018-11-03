import * as React from "react";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import { HolyGrailDataManager } from "../HolyGrailDataManager";
import { Item } from "../../../common/IHolyGrailData";

export interface IItemProps {
  item: Item;
  itemName: string;
}

interface IItemState {
  item: Item;
}

export class CheckboxItemRenderer extends React.Component<IItemProps, IItemState> {
  public constructor(props: IItemProps) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  public render() {
    return (
      <div>
        <Checkbox
          disabled={HolyGrailDataManager.current.isReadOnly}
          checked={!!this.state.item.wasFound}
          onChange={event => this.onItemCheckBoxChanged(this.state.item, event)}
          value={this.props.itemName}
        />
        {this.props.itemName}
      </div>
    );
  }

  private onItemCheckBoxChanged = (item: Item, event: any) => {
    item.wasFound = event.target.checked;
    this.setState({ item: this.state.item });
    HolyGrailDataManager.current.updateGrailCache();
  };
}
