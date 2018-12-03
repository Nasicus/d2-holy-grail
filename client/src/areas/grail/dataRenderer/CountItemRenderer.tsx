import * as React from "react";
import * as classNames from "classnames";
import { GrailManager } from "../GrailManager";
import { Icon, createStyles, WithStyles, withStyles } from "@material-ui/core";
import { Item } from "../../../common/definitions/union/Item";
import { ItemName } from "./ItemName";

export interface IItemProps {
  item: Item;
  itemName: string;
}

interface IItemState {
  item: Item;
  isHovered?: boolean;
}

const styles = () =>
  createStyles({
    container: {
      padding: "3px 0 3px 0",
      display: "flex"
    },
    arrow: {
      verticalAlign: "middle",
      cursor: "pointer",
      visibility: "hidden"
    },
    arrowVisible: {
      visibility: "visible"
    },
    itemText: {
      minWidth: "15px",
      display: "inline-block",
      textAlign: "center"
    }
  });

type Props = IItemProps & WithStyles<typeof styles>;

class CountItemRenderer extends React.Component<Props, IItemState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  private handleHover = () => {
    if (GrailManager.current.isReadOnly) {
      return;
    }

    this.setState({
      isHovered: !this.state.isHovered
    });
  };

  public render() {
    const arrowClassNames = classNames([
      this.props.classes.arrow,
      this.state.isHovered ? this.props.classes.arrowVisible : null
    ]);

    return (
      <div className={this.props.classes.container}>
        <span onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <Icon onClick={() => this.onArrowClick(-1)} className={arrowClassNames}>
            keyboard_arrow_down
          </Icon>

          <span className={this.props.classes.itemText}>{Number(this.state.item.wasFound || 0)}</span>

          <Icon onClick={() => this.onArrowClick(1)} className={arrowClassNames}>
            keyboard_arrow_up
          </Icon>
        </span>
        <ItemName itemName={this.props.itemName} item={this.props.item} />
      </div>
    );
  }

  private onArrowClick = (increment: number) => {
    let count = Number(this.state.item.wasFound || 0) + increment;
    if (count < 0) {
      count = 0;
    }
    this.state.item.wasFound = count;
    this.setState({ item: this.state.item });
    GrailManager.current.updateGrailCache();
  };
}

export default withStyles(styles)(CountItemRenderer);
