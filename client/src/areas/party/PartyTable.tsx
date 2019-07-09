import * as React from "react";
import Table, { TableProps } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { IPartyTableProps } from "./PartyTable";
import styled from "styled-components";
import { IPartyData } from "../../common/definitions/union/IPartyData";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import { DataTableColumnHeader } from "./components/DataTableColumnHeader";
import { PartyManager } from "./PartyManager";
import { IconWithProgress } from "../../common/components/IconWithProgress";
import { ItemTotal } from "./ItemTotal";

export interface IPartyTableProps {
  data: IPartyData;
}

interface IPartyTableState {
  data: IPartyData;
  sorted: string;
  isLoading: boolean;
}

class Stats {
  public uniqArm: number = 0;
  public uniqWep: number = 0;
  public uniqOth: number = 0;
  public set: number = 0;
  public total: number = 0;
  public itemScore: number = 0;

  public constructor(public name: string) {}
}

export class PartyTable extends React.Component<
  IPartyTableProps,
  IPartyTableState
> {
  public constructor(props: IPartyTableProps) {
    super(props);
    this.state = {
      data: props.data,
      sorted: "total",
      isLoading: false
    };
  }

  public static getDerivedStateFromProps(
    props: IPartyTableProps,
    state: IPartyTableState
  ) {
    state.data = props.data;
    return state;
  }

  public render() {
    let stats: Stats[] = [];
    if (this.state.data.users) {
      for (let i = 0; i < this.state.data.users.length; i++) {
        let user = this.state.data.users[i];
        let statRow = new Stats(user.username);
        statRow.uniqArm = user.data
          ? user.data.uniqueArmor.missing
          : ItemTotal.Armor;
        statRow.uniqWep = user.data
          ? user.data.uniqueWeapons.missing
          : ItemTotal.Weapons;
        statRow.uniqOth = user.data
          ? user.data.uniqueOther.missing
          : ItemTotal.Other;
        statRow.set = user.data ? user.data.sets.missing : ItemTotal.Sets;
        statRow.itemScore = user.data ? user.data.itemScore : 0;
        statRow.total =
          statRow.uniqArm + statRow.uniqWep + statRow.uniqOth + statRow.set;
        stats.push(statRow);
      }
      this.sortData(stats, this.state.sorted);
    }

    return (
      <div>
        <Typography variant="h6" align={"center"}>
          Holy Grail Leaders
          <IconWithProgress
            title="Refresh data"
            onClick={this.refreshData}
            isLoading={this.state.isLoading}
            icon="refresh"
          />
        </Typography>
        <StyledPaper>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <DataTableColumnHeader
                  onClick={this.changeSortingState}
                  text="Total"
                  sortText="total"
                  showIcon={this.state.sorted === "total"}
                />
                <DataTableColumnHeader
                  onClick={this.changeSortingState}
                  text="Unique Armor"
                  sortText="uniqArm"
                  showIcon={this.state.sorted === "uniqArm"}
                />
                <DataTableColumnHeader
                  onClick={this.changeSortingState}
                  text="Unique Weapons"
                  sortText="uniqWep"
                  showIcon={this.state.sorted === "uniqWep"}
                />
                <DataTableColumnHeader
                  onClick={this.changeSortingState}
                  text="Unique Other"
                  sortText="uniqOth"
                  showIcon={this.state.sorted === "uniqOth"}
                />
                <DataTableColumnHeader
                  onClick={this.changeSortingState}
                  text="Sets"
                  sortText="set"
                  showIcon={this.state.sorted === "set"}
                />
                <DataTableColumnHeader
                  onClick={this.changeSortingState}
                  text="Item Score"
                  sortText="itemScore"
                  showIcon={this.state.sorted === "itemScore"}
                  secondIcon={"info"}
                  secondIconText={
                    "ItemScore is a measure of the total rarity of the items found in each grail.\nRarer items like Tyrael's contribute a large ItemScore (1000 pts), while common items like Venom Ward contribute a small ItemScore (1 pt).\nA finished grail will have an ItemScore of 10000."
                  }
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.length !== 0 &&
                stats.map((s, i) => PartyTable.renderRow(s, i % 2 === 0))}
              {stats.length === 0 && PartyTable.renderEmptyRow()}
            </TableBody>
          </StyledTable>
          <TableFootNote variant="body2">
            Notes:
            <NoteList>
              <li>The numbers above are the number of missing items.</li>
              <li>
                A grail has to be saved at least once for numbers / scores to
                appear in the table.
              </li>
            </NoteList>
          </TableFootNote>
        </StyledPaper>
      </div>
    );
  }

  private static renderRow(stats: Stats, isSelected?: boolean) {
    return (
      <TableRow key={`${stats.name}Stat`} hover={true} selected={isSelected}>
        <StyledTableCell component="th" scope="row">
          <RowHeader>
            {stats.total === 0 && (
              <PerfectIcon title="This user has completed their grail!">
                star
              </PerfectIcon>
            )}
            <UserLink
              href={"/" + stats.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {stats.name}
            </UserLink>
          </RowHeader>
        </StyledTableCell>
        <StyledTableCell>{stats.total}</StyledTableCell>
        <StyledTableCell>{stats.uniqArm}</StyledTableCell>
        <StyledTableCell>{stats.uniqWep}</StyledTableCell>
        <StyledTableCell>{stats.uniqOth}</StyledTableCell>
        <StyledTableCell>{stats.set}</StyledTableCell>
        <StyledTableCell>{stats.itemScore}</StyledTableCell>
      </TableRow>
    );
  }

  private static renderEmptyRow() {
    return (
      <TableRow key={`$EmptyStat`} hover={true}>
        <StyledTableCell component="th" scope="row" colSpan={7}>
          <RowHeader>"No members yet! Ask them to join."</RowHeader>
        </StyledTableCell>
      </TableRow>
    );
  }

  private changeSortingState = (newState: string) => {
    if (newState !== this.state.sorted) {
      this.setState({
        sorted: newState
      });
    }
  };

  private sortData = (data: Stats[], key: string) => {
    data.sort((a: Stats, b: Stats) => {
      return key === "itemScore" ? b[key] - a[key] : a[key] - b[key];
    });
  };

  private refreshData = () => {
    this.setState({
      isLoading: true
    });
    PartyManager.current.refreshData().subscribe(
      () => {
        this.setState({
          isLoading: false
        });
      },
      err => {
        this.setState({
          isLoading: false
        });
      }
    );
  };
}

const StyledPaper: React.ComponentType<PaperProps> = styled(Paper)`
  && {
    max-width: 800px;
    margin: ${p => p.theme.spacing(1) * 3}px auto auto;
    overflow-x: auto;
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

const UserLink = styled.a`
  text-decoration: none;
  color: #000000;
`;

const RowHeader = styled.div`
  display: flex;
`;

const PerfectIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    float: left;
    font-size: 1rem;
    margin-left: -16px;
  }
`;

const TableFootNote = styled(Typography)`
  && {
    margin: ${p => p.theme.spacing(1)}px;
  }
`;

const NoteList = styled.ul`
  margin-top: 0;
  padding-left: ${p => p.theme.spacing(3)}px;
`;
