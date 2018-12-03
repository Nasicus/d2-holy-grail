import * as React from "react";
import Tabs from "@material-ui/core/Tabs/Tabs";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tab from "@material-ui/core/Tab/Tab";
import StatisticsTable from "../statisticsTable/StatisticsTable";
import Typography from "@material-ui/core/Typography/Typography";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { DataRenderer, ILevels } from "../dataRenderer/DataRenderer";
import { Util } from "../../../common/utils/Util";
import { GrailManager } from "../GrailManager";
import { GrailMode } from "../GrailMode";

export interface ITabRendererProps {
  allData: any;
  searchData: any;
}

export interface ITabRendererState {
  activeTab: TabType;
  hasActiveSearch: boolean;
}

enum TabType {
  Statistics,
  UniqueArmor,
  UniqueWeapons,
  UniqueOther,
  Sets,
  SearchResults,
  MissingItems,
  Runewords
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  });

type Props = ITabRendererProps & WithStyles<typeof styles>;

const TabContainer: React.SFC<{}> = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const runewordLevels: ILevels = { variantLevel: 4, level: 1 };

class TabRenderer extends React.Component<Props, ITabRendererState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: TabType.Statistics,
      hasActiveSearch: !!this.props.searchData
    };
  }

  public static getDerivedStateFromProps(props: Props, state: ITabRendererState) {
    if (props.searchData && !state.hasActiveSearch) {
      state.activeTab = TabType.SearchResults;
    } else if (!props.searchData && state.hasActiveSearch) {
      state.activeTab = TabType.Statistics;
    }
    state.hasActiveSearch = !!props.searchData;

    return state;
  }

  public render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="sticky">
          <Tabs value={this.state.activeTab} onChange={this.handleChange} centered={true}>
            <Tab label="Statistics" value={TabType.Statistics} />
            {this.getCategoryTabs()}
            {this.props.searchData && <Tab label="Search Results" value={TabType.SearchResults} />}
          </Tabs>
        </AppBar>
        <TabContainer>{this.getData()}</TabContainer>
      </div>
    );
  }

  private handleChange = (event: any, nextTab: TabType) => {
    this.setState({ activeTab: nextTab });
  };

  private getCategoryTabs() {
    if (this.props.searchData) {
      return null;
    }

    switch (GrailManager.current.grailMode) {
      case GrailMode.Eth:
        return [
          <Tab label="Unique Armor" key="tabUniqueArmor" value={TabType.UniqueArmor} />,
          <Tab label="Unique Weapons" key="tabUniqueWeapons" value={TabType.UniqueWeapons} />,
          <Tab label="Unique Other" key="tabUniqueOther" value={TabType.UniqueOther} />,
          <Tab label="Missing Items" key="tabMissingItems" value={TabType.MissingItems} />
        ];
      case GrailMode.Runeword:
        return [
          <Tab label="Runewords" key="tabRunewords" value={TabType.Runewords} />,
          <Tab label="Missing Items" key="tabMissingItems" value={TabType.MissingItems} />
        ];
      default:
        return [
          <Tab label="Unique Armor" key="tabUniqueArmor" value={TabType.UniqueArmor} />,
          <Tab label="Unique Weapons" key="tabUniqueWeapons" value={TabType.UniqueWeapons} />,
          <Tab label="Unique Other" key="tabUniqueOther" value={TabType.UniqueOther} />,
          <Tab label="Sets" key="tabSets" value={TabType.Sets} />,
          <Tab label="Missing Items" key="tabMissingItems" value={TabType.MissingItems} />
        ];
    }
  }

  private getData() {
    const { allData, searchData } = this.props;

    switch (this.state.activeTab) {
      case TabType.SearchResults:
        return (
          <DataRenderer
            data={searchData}
            modifyLevels={this.modifyLevelsForSearch}
            levels={TabRenderer.getLevelsForSearch()}
          />
        );
      case TabType.UniqueArmor:
        return (
          <DataRenderer data={allData.uniques.armor} levels={{ variantLevel: 2 }} ancestorKeys={["Uniques", "Armor"]} />
        );
      case TabType.UniqueWeapons:
        return (
          <DataRenderer
            data={allData.uniques.weapons}
            levels={{ variantLevel: 2 }}
            ancestorKeys={["Uniques", "Weapons"]}
          />
        );
      case TabType.UniqueOther:
        return (
          <DataRenderer data={allData.uniques.other} levels={{ variantLevel: 2 }} ancestorKeys={["Uniques", "Other"]} />
        );
      case TabType.Sets:
        return <DataRenderer data={allData.sets} levels={{ variantLevel: 3, level: 1 }} ancestorKeys={["Sets"]} />;
      case TabType.Runewords:
        return <DataRenderer data={allData} levels={runewordLevels} />;
      case TabType.MissingItems:
        return (
          <DataRenderer
            data={Util.getMissingItems(allData)}
            modifyLevels={this.modifyLevelsForSearch}
            levels={TabRenderer.getLevelsForSearch()}
          />
        );
      default:
        return <StatisticsTable data={searchData || allData} />;
    }
  }

  private modifyLevelsForSearch = (nextLevels: ILevels, key: string) => {
    if (key === "uniques") {
      nextLevels.level += 1;
    } else if (key === "sets") {
      nextLevels.level += 1;
      nextLevels.variantLevel += 2;
    }
    return nextLevels;
  };

  private static getLevelsForSearch(): ILevels {
    if (GrailManager.current.grailMode !== GrailMode.Runeword) {
      return null;
    }

    return runewordLevels;
  }
}

export default withStyles(styles)(TabRenderer);
