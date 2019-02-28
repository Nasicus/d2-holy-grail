import * as React from "react";
import { Item } from "../../../common/definitions/union/Item";
import { ItemPropsDialog } from "./ItemPropsDialog";
import { Icon } from "@material-ui/core";
import { GrailManager } from "../GrailManager";
import { IItemNameProps } from "./ItemNameRenderer";
import { IconProps } from "@material-ui/core/Icon";
import styled from "../../../TypedStyledComponents";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IGrailAreaRouterParams, RouteManager } from "../../../RouteManager";

export interface IItemNameProps {
  item: Item;
  itemName: string;
}

interface IItemNameState {
  item: Item;
}

type Props = IItemNameProps & RouteComponentProps<IGrailAreaRouterParams>;

class ItemNameRendererInternal extends React.PureComponent<Props, IItemNameState> {
  public constructor(props: Props) {
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
        {this.props.itemName === RouteManager.getQuery(this.props).itemName && (
          <ItemPropsDialog onDialogClosed={this.closeDialog} item={this.props.item} itemName={this.props.itemName} />
        )}
        <RootContainer onClick={this.openDialog}>
          <span>{this.props.itemName}</span>
          {this.props.item.isPerfect && <PropsIcon title="This item is perfect!">star</PropsIcon>}
          {this.props.item.note && <PropsIcon title="This item has notes.">info</PropsIcon>}
        </RootContainer>
      </>
    );
  }

  private openDialog = () => {
    this.updateQuery(true);
  };

  private updateQuery(appendItemName: boolean) {
    const query = RouteManager.getQuery(this.props);

    delete query.itemName;

    if (appendItemName) {
      query.itemName = this.props.itemName;
    }

    RouteManager.updateQuery(this.props, query);
  }

  private closeDialog = (changedProps: { itemNote: string; isPerfect: boolean }) => {
    const newState: Partial<IItemNameState> = {};

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
    this.updateQuery(false);
  };
}

export const ItemNameRenderer = withRouter(ItemNameRendererInternal);

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
