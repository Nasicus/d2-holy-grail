import * as React from "react";
import { GrailManager } from "../GrailManager";
import { Icon } from "@material-ui/core";
import { Item } from "../../../common/definitions/union/Item";
import { ItemNameRenderer } from "./ItemNameRenderer";
import { IItemProps } from "./CountItemRenderer";
import styled from "src/TypedStyledComponents";
import { IconProps } from "@material-ui/core/Icon";

export interface IItemProps {
  item: Item;
  itemName: string;
}

interface IItemState {
  item: Item;
  isHovered?: boolean;
}

export class CountItemRenderer extends React.Component<IItemProps, IItemState> {
  public constructor(props: IItemProps) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  public render() {
    const ArrowIcon = this.state.isHovered ? VisibleArrowIcon : InvisibleArrowIcon;

    return (
      <RootContainer>
        <span onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <ArrowIcon onClick={() => this.onArrowClick(-1)}>keyboard_arrow_down</ArrowIcon>
          <ItemTextContainer>{Number(this.state.item.wasFound || 0)}</ItemTextContainer>
          <ArrowIcon onClick={() => this.onArrowClick(1)}>keyboard_arrow_up</ArrowIcon>
        </span>
        <ItemNameRenderer itemName={this.props.itemName} item={this.props.item} />
      </RootContainer>
    );
  }

  private handleHover = () => {
    if (GrailManager.current.isReadOnly) {
      return;
    }

    this.setState({
      isHovered: !this.state.isHovered
    });
  };

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

const RootContainer = styled.div`
  padding: 3px 0 3px 0;
  display: flex;
`;

const InvisibleArrowIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    vertical-align: middle;
    cursor: pointer;
    visibility: hidden;
  }
`;

const VisibleArrowIcon: React.ComponentType<IconProps> = styled(InvisibleArrowIcon)`
  && {
    visibility: visible;
  }
`;

const ItemTextContainer = styled.span`
  min-width: 15px;
  display: inline-block;
  text-align: center;
`;
