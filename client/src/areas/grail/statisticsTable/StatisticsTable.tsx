import * as React from "react";
import { Util } from "../../../common/utils/Util";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createStyles, Theme, WithStyles, withStyles, Icon } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import { GrailManager } from "../GrailManager";
import { GrailMode } from "../GrailMode";
import { IItem } from "../../../common/definitions/union/IItem";

export interface IStatisticsTableProps {
  data: any;
}

export interface IStatisticsTableSTate {
  data: any;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 700,
      margin: "auto",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      maxWidth: 700
    },
    total: {
      ...theme.typography.subheading
    },
    rowHeader: {
      display: "flex"
    }
  });

type Props = IStatisticsTableProps & WithStyles<typeof styles>;

class Stats {
  public total: number = 0;
  public found: number = 0;
  public perfects: number = 0;

  public get renderValue(): number {
    return this.usePerfects ? this.perfects : this.found;
  }

  public constructor(
    public name: string,
    public icon?: string,
    public iconTooltip?: string,
    public usePerfects?: boolean
  ) {}
}

class StatisticsTable extends React.Component<Props, IStatisticsTableSTate> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  public static getDerivedStateFromProps(props: Props, state: IStatisticsTableSTate) {
    state.data = props.data;
    return state;
  }

  public render() {
    let stats: Stats[];

    switch (GrailManager.current.grailMode) {
      case GrailMode.Eth:
        stats = [
          this.calculateStats(() => this.state.data.uniques.armor, new Stats("Unique Armors")),
          this.calculateStats(() => this.state.data.uniques.weapons, new Stats("Unique Weapons")),
          this.calculateStats(() => this.state.data.uniques.other, new Stats("Unique Other"))
        ];
        break;
      case GrailMode.Runeword:
        stats = [this.calculateStats(() => this.state.data, new Stats("Runewords"))];
        break;
      default:
        stats = [
          this.calculateStats(() => this.state.data.uniques.armor, new Stats("Unique Armors")),
          this.calculateStats(() => this.state.data.uniques.weapons, new Stats("Unique Weapons")),
          this.calculateStats(() => this.state.data.uniques.other, new Stats("Unique Other")),
          this.calculateStats(() => this.state.data.sets, new Stats("Sets"))
        ];
        break;
    }
    const totalStats = new Stats("Total");
    stats.reduce((accumulator, currentValue) => {
      accumulator.found += currentValue.found;
      accumulator.perfects += currentValue.perfects;
      accumulator.total += currentValue.total;
      return accumulator;
    }, totalStats);

    const totalPerfectStats = new Stats("Total Perfects");
    totalPerfectStats.usePerfects = true;
    totalPerfectStats.icon = "star";
    totalPerfectStats.iconTooltip = "Perfect items";
    totalPerfectStats.perfects = totalStats.perfects;
    totalPerfectStats.total = totalStats.total;

    const classes = this.props.classes;

    return (
      <div>
        <Typography variant="h6" align={"center"}>
          Statistics
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell numeric={true}>Exist</TableCell>
                <TableCell numeric={true}>Owned</TableCell>
                <TableCell numeric={true}>Remaining</TableCell>
                <TableCell numeric={true}>% Completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.map(s => this.renderRow(s))}
              {this.renderRow(totalStats, true, classes.total)}
              {this.renderRow(totalPerfectStats)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  private renderRow(stats: Stats, isSelected?: boolean, className?: string) {
    return (
      <TableRow key={`${stats.name}Stat`} hover={true} selected={isSelected} className={className}>
        <TableCell component="th" scope="row">
          <div className={this.props.classes.rowHeader}>
            {stats.icon && <Icon title={stats.iconTooltip}>{stats.icon}</Icon>}
            {!stats.icon && stats.name}
          </div>
        </TableCell>
        <TableCell numeric={true}>{stats.total}</TableCell>
        <TableCell numeric={true}>{stats.renderValue}</TableCell>
        <TableCell numeric={true}>{stats.total - stats.renderValue}</TableCell>
        <TableCell numeric={true}>{(stats.total ? (stats.renderValue * 100) / stats.total : 0).toFixed(2)}</TableCell>
      </TableRow>
    );
  }

  private calculateStats(dataFunc: () => any, stats: Stats): Stats {
    let data = {};
    try {
      data = dataFunc();
    } catch (e) {
      // ignore error
    }

    if (!data) {
      return stats;
    }

    Object.keys(data).forEach(key => {
      const possibleItem = data[key] as IItem;
      if (Util.isItem(possibleItem)) {
        stats.total++;
        if (possibleItem.wasFound) {
          stats.found++;
        }
        if (possibleItem.isPerfect) {
          stats.perfects++;
        }
      } else {
        this.calculateStats(() => possibleItem, stats);
      }
    });
    return stats;
  }
}

export default withStyles(styles)(StatisticsTable);
