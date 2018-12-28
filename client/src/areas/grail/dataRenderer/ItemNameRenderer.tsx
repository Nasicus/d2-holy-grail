import * as React from "react";
import { Item } from "../../../common/definitions/union/Item";
import { ItemPropsDialog } from "./ItemPropsDialog";
import { Icon } from "@material-ui/core";
import { GrailManager } from "../GrailManager";
import styled from "src/TypedStyledComponents";
import { IItemNameProps } from "./ItemNameRenderer";
import { IconProps } from "@material-ui/core/Icon";

export interface IItemNameProps {
  item: Item;
  itemName: string;
}

interface IItemNameState {
  isPropsDialogOpen?: boolean;
  item: Item;
}

export class ItemNameRenderer extends React.PureComponent<IItemNameProps, IItemNameState> {
  public constructor(props: IItemNameProps) {
    super(props);
    this.state = { item: this.props.item };
  }

  public static getDerivedStateFromProps(props: IItemNameProps, state: IItemNameState) {
    state.item = props.item;
    return state;
  }

  public render() {
    return (
      <>
        {this.state.isPropsDialogOpen && (
          <ItemPropsDialog onDialogClosed={this.toggleDialog} item={this.props.item} itemName={this.props.itemName} />
        )}
        <RootContainer onClick={() => this.toggleDialog(null)}>
          <span>{this.props.itemName}</span>
          {this.props.item.isPerfect && <PropsIcon title="This item is perfect!">star</PropsIcon>}
          {this.props.item.note && <PropsIcon title="This item has notes.">info</PropsIcon>}
        </RootContainer>
      </>
    );
  }

  private toggleDialog = (changedProps: { itemNote: string; isPerfect: boolean }) => {
    const newState: Partial<IItemNameState> = { isPropsDialogOpen: !this.state.isPropsDialogOpen };

    if (
      changedProps &&
      (changedProps.itemNote !== this.state.item.note || changedProps.isPerfect !== this.state.item.isPerfect)
    ) {
      this.state.item.note = changedProps.itemNote;
      this.state.item.isPerfect = changedProps.isPerfect;
      GrailManager.current.updateGrailCache();
      newState.item = this.state.item;
    }

    this.setState(newState as IItemNameState);
  };
}

const RootContainer = styled.div`
  cursor: pointer;
  display: flex;
`;

const PropsIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    font-size: 1.5em;
    margin-left: ${p => p.theme.spacing.unit}px;
  }
`;
