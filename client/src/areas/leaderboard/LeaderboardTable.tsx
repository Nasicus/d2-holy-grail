import * as React from "react";
import Table, { TableProps } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { ILeaderboardTableProps } from "./LeaderboardTable";
import styled from "../../TypedStyledComponents";
import { ILeaderboardData } from "../../common/definitions/union/ILeaderboardData";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import { DataTableColumnHeader } from "./components/DataTableColumnHeader";
import { LeaderboardManager } from "./LeaderboardManager";
import { IconWithProgress } from "./components/IconWithProgress";

export interface ILeaderboardTableProps {
  data: ILeaderboardData;
}

interface ILeaderboardTableState {
  data: ILeaderboardData;
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

export class LeaderboardTable extends React.Component<
  ILeaderboardTableProps,
  ILeaderboardTableState
> {
  public constructor(props: ILeaderboardTableProps) {
    super(props);
    this.state = {
      data: props.data,
      sorted: "total",
      isLoading: false
    };
  }

  public static getDerivedStateFromProps(
    props: ILeaderboardTableProps,
    state: ILeaderboardTableState
  ) {
    state.data = props.data;
    return state;
  }

  public render() {
    let stats: Stats[] = [];
    for (let i = 0; i < this.state.data.users.length; i++) {
      var user = this.state.data.users[i];
      var statRow = new Stats(user.username);
      statRow.uniqArm = user.data.uniqueArmor.missing;
      statRow.uniqWep = user.data.uniqueWeapons.missing;
      statRow.uniqOth = user.data.uniqueOther.missing;
      statRow.set = user.data.sets.missing;
      statRow.itemScore = user.data.itemScore;
      statRow.total =
        statRow.uniqArm + statRow.uniqWep + statRow.uniqOth + statRow.set;
      stats.push(statRow);
    }
    this.sortData(stats, this.state.sorted);

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
                <TableCell>&nbsp;</TableCell>
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
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.length != 0 &&
                stats.map((s, i) => LeaderboardTable.renderRow(s, i % 2 == 0))}
              {stats.length == 0 && LeaderboardTable.renderEmptyRow()}
            </TableBody>
          </StyledTable>
        </StyledPaper>
      </div>
    );
  }

  private static renderRow(stats: Stats, isSelected?: boolean) {
    return (
      <TableRow key={`${stats.name}Stat`} hover={true} selected={isSelected}>
        <TableCell component="th" scope="row">
          <RowHeader>
            {stats.total == 0 && (
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
        </TableCell>
        <TableCell>{stats.total}</TableCell>
        <TableCell>{stats.uniqArm}</TableCell>
        <TableCell>{stats.uniqWep}</TableCell>
        <TableCell>{stats.uniqOth}</TableCell>
        <TableCell>{stats.set}</TableCell>
        <TableCell>{stats.itemScore}</TableCell>
      </TableRow>
    );
  }

  private static renderEmptyRow() {
    return (
      <TableRow key={`$EmptyStat`} hover={true}>
        <TableCell component="th" scope="row" colSpan={7}>
          <RowHeader>"No users yet! Ask them to join."</RowHeader>
        </TableCell>
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
      return key == "itemScore" ? b[key] - a[key] : a[key] - b[key];
    });
  };

  private refreshData = () => {
    this.setState({
      isLoading: true
    });
    LeaderboardManager.current.refreshData().subscribe(
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
    margin: ${p => p.theme.spacing.unit * 3}px auto auto;
    overflow-x: auto;
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
