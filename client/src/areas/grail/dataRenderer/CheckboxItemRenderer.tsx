import * as React from "react";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import { GrailManager } from "../GrailManager";
import { Item } from "../../../common/definitions/union/Item";
import { ItemName } from "./ItemName";
import { withStyles, createStyles, WithStyles } from "@material-ui/core";

export interface IItemProps {
  item: Item;
  itemName: string;
}

interface IItemState {
  item: Item;
}
const styles = () =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center"
    }
  });

type Props = IItemProps & WithStyles<typeof styles>;

class CheckboxItemRendererComponent extends React.Component<Props, IItemState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  public render() {
    return (
      <div className={this.props.classes.container}>
        <Checkbox
          disabled={GrailManager.current.isReadOnly}
          checked={!!this.state.item.wasFound}
          onChange={event => this.onItemCheckBoxChanged(this.state.item, event)}
          value={this.props.itemName}
        />
        <ItemName itemName={this.props.itemName} item={this.props.item} />
      </div>
    );
  }

  private onItemCheckBoxChanged = (item: Item, event: any) => {
    item.wasFound = event.target.checked;
    this.setState({ item: this.state.item });
    GrailManager.current.updateGrailCache();
  };
}

export const CheckboxItemRenderer = withStyles(styles)(CheckboxItemRendererComponent);
