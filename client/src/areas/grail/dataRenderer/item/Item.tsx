import * as React from "react";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import { dataManagerContext } from "../../GrailArea";

export interface IItemProps {
  item: any;
  itemName: string;
}

interface IItemState {
  item: any;
}

export class Item extends React.Component<IItemProps, IItemState> {
  public constructor(props: IItemProps) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  public render() {
    return (
      <dataManagerContext.Consumer>
        {dataManager => {
          return (
            <div className="item">
              <Checkbox
                disabled={dataManager.isReadOnly}
                checked={this.state.item.wasFound}
                onChange={event => this.onItemCheckBoxChanged(this.state.item, event, dataManager)}
                value={this.props.itemName}
              />
              {this.props.itemName}
            </div>
          );
        }}
      </dataManagerContext.Consumer>
    );
  }

  private onItemCheckBoxChanged = (item: any, event: any, dataManager: HolyGrailDataManager) => {
    item.wasFound = event.target.checked;
    this.setState({ item: this.state.item });
    dataManager.updateCache();
  };
}
