import * as React from "react";
import { GrailManager } from "../GrailManager";
import { Icon } from "@material-ui/core";
import { Item } from "../../../common/definitions/union/Item";
import { ItemNameRenderer } from "./ItemNameRenderer";
import { IItemProps } from "./CountItemRenderer";
import { IconProps } from "@material-ui/core/Icon";
import styled from "styled-components";
import { FC, useState, useEffect } from "react";

export interface IItemProps {
  item: Item;
  itemName: string;
  ancestorKeys: string[];
}

export const CountItemRenderer: FC<IItemProps> = ({
  item,
  itemName,
  ancestorKeys
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => setCount(Number(item.wasFound || 0)), [item, item.wasFound]);

  const ArrowIcon = isHovered ? VisibleArrowIcon : InvisibleArrowIcon;

  return (
    <RootContainer>
      <span onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <ArrowIcon onClick={() => onArrowClick(-1)}>
          keyboard_arrow_down
        </ArrowIcon>
        <ItemTextContainer>{count}</ItemTextContainer>
        <ArrowIcon onClick={() => onArrowClick(1)}>keyboard_arrow_up</ArrowIcon>
      </span>
      <ItemNameRenderer
        itemName={itemName}
        item={item}
        ancestorKeys={ancestorKeys}
      />
    </RootContainer>
  );

  function handleHover() {
    if (GrailManager.current.isReadOnly) {
      return;
    }

    setIsHovered(!isHovered);
  }

  function onArrowClick(increment: number) {
    let newCount = count + increment;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);

    // should also not be done like this
    item.wasFound = newCount;

    GrailManager.current.updateGrailCache();
  }
};

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

const VisibleArrowIcon: React.ComponentType<IconProps> = styled(
  InvisibleArrowIcon
)`
  && {
    visibility: visible;
  }
`;

const ItemTextContainer = styled.span`
  min-width: 15px;
  display: inline-block;
  text-align: center;
`;
