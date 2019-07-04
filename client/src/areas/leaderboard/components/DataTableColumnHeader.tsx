import * as React from "react";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import styled from "styled-components";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";

export interface IDataTableColumnHeaderProps {
  onClick?: (text) => any;
  showIcon?: boolean;
  text?: string;
  sortText?: string;
}

export const DataTableColumnHeader: React.FunctionComponent<
  IDataTableColumnHeaderProps
> = props => {
  const onClick = () => {
    props.onClick(props.sortText);
  };

  return (
    <ColHeader onClick={onClick}>
      {props.text}
      {props.showIcon && <DropDownIcon>arrow_drop_down</DropDownIcon>}
    </ColHeader>
  );
};

const ColHeader: React.ComponentType<TableCellProps> = styled(TableCell)`
  && {
    padding: 4px 20px 4px 20px;
  }
`;

const DropDownIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    float: left;
    font-size: 1rem;
  }
`;
