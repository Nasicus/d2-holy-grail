import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { FC } from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import Table, { TableProps } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export interface IInfoProps {
  onDialogClosed: () => any;
}

export const ItemScoreInfoDialog: FC<IInfoProps> = ({ onDialogClosed }) => {
  return (
    <Dialog open={true} onClose={onDialogClosed}>
      <DialogContent>
        <div>
          <CloseIcon onClick={onDialogClosed}>close</CloseIcon>
          <TitleText variant="h4">
            Introducing ItemScore! <br />
            <br />
          </TitleText>
          <Typography variant="body1">
            A unique or set item's "Item Score" is based on it's relative rarity
            to that ultimate Holy Grail in Diablo II: Tyrael's Might. <br />
            A list of example ItemScores can be found below: <br />
          </Typography>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell>Score</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>Nokozan Relic</StyledTableCell>
                <StyledTableCell>1</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Nagelring</StyledTableCell>
                <StyledTableCell>1</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Venom Ward</StyledTableCell>
                <StyledTableCell>1</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>...</StyledTableCell>
                <StyledTableCell>...</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Mara's Kaleidoscope</StyledTableCell>
                <StyledTableCell>30</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Windforce</StyledTableCell>
                <StyledTableCell>110</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Crown of Ages</StyledTableCell>
                <StyledTableCell>130</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Astreon's Iron Ward</StyledTableCell>
                <StyledTableCell>335</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>Tyrael's Might</StyledTableCell>
                <StyledTableCell>1155</StyledTableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
          <BottomText>
            The values have been slightly increased across the board so that
            each item has a value of 1 or more. <br />
            Some items were so common compared to Tyrael's that they would round
            down to 0.
          </BottomText>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CloseIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    position: absolute;
    top: ${p => p.theme.spacing(1)}px;
    right: ${p => p.theme.spacing(1) * 2}px;
    cursor: pointer;
  }
`;

const StyledTableCell: React.ComponentType<TableCellProps> = styled(TableCell)`
  && {
    padding: 14px 40px 14px 24px;
  }
`;

const StyledTable: React.ComponentType<TableProps> = styled(Table)`
  && {
    max-width: 800px;
    text-align: center;
  }
`;

const TitleText = styled(Typography)`
  && {
    margin-top: 10px;
  }
`;

const BottomText = styled(Typography)`
  && {
    margin-top: 10px;
    font-size: 1em;
  }
`;
