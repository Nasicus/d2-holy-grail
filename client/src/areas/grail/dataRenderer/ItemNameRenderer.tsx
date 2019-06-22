import * as React from "react";
import { Item } from "../../../common/definitions/union/Item";
import { ItemPropsDialog } from "./ItemPropsDialog";
import { Icon } from "@material-ui/core";
import { GrailManager } from "../GrailManager";
import { IItemNameProps } from "./ItemNameRenderer";
import { IconProps } from "@material-ui/core/Icon";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IGrailAreaRouterParams, RouteManager } from "../../../RouteManager";
import { FC } from "react";

export interface IItemNameProps {
  item: Item;
  itemName: string;
}

type Props = IItemNameProps & RouteComponentProps<IGrailAreaRouterParams>;

const ItemNameRendererInternal: FC<Props> = props => {
  const item = props.item;
  const itemName = props.itemName;

  return (
    <>
      {itemName === RouteManager.getQuery(props).itemName && (
        <ItemPropsDialog
          onDialogClosed={closeDialog}
          item={item}
          itemName={itemName}
        />
      )}
      <RootContainer onClick={openDialog}>
        <span>{itemName}</span>
        {item.isPerfect && (
          <PropsIcon title="This item is perfect!">star</PropsIcon>
        )}
        {item.note && <PropsIcon title="This item has notes.">info</PropsIcon>}
      </RootContainer>
    </>
  );

  function openDialog() {
    updateQuery(true);
  }

  function updateQuery(appendItemName: boolean) {
    const query = RouteManager.getQuery(props);

    delete query.itemName;

    if (appendItemName) {
      query.itemName = itemName;
    }

    RouteManager.updateQuery(props, query);
  }

  function closeDialog(changedProps: { itemNote: string; isPerfect: boolean }) {
    if (
      changedProps &&
      (changedProps.itemNote !== item.note ||
        changedProps.isPerfect !== item.isPerfect)
    ) {
      item.note = changedProps.itemNote;
      item.isPerfect = changedProps.isPerfect;
      GrailManager.current.updateGrailCache();
    }

    updateQuery(false);
  }
};

export const ItemNameRenderer = withRouter(ItemNameRendererInternal);

const RootContainer = styled.div`
  cursor: pointer;
  display: flex;
`;

const PropsIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    font-size: 1.5em;
    margin-left: ${p => p.theme.spacing(1)}px;
  }
`;
