import TabRenderer from "./tabRenderer/TabRenderer";
import SearchBox from "./searchBox/SearchBox";
import { HolyGrailDataManager } from "./HolyGrailDataManager";
import { createStyles, WithStyles, Divider, Theme, withStyles } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import { ILoginInfo } from "../home/loginForm/LoginForm";
import SaveToServerComponent from "./dataManipulation/clickable-components/SaveToServerComponent";
import { IHolyGrailData } from "../../common/IHolyGrailData";
import HomeButton from "./homeButton/HomeButton";
import MenuButton from "./menu/MenuButton";
import ExportListItem from "./dataManipulation/clickable-components/ExportListItem";
import ImportListItem from "./dataManipulation/clickable-components/ImportListItem";
import ToggleAllListItem from "./dataManipulation/clickable-components/ToggleAllListItem";
import DiscardChangesComponent from "./dataManipulation/clickable-components/DiscardChangesComponent";
import ListItemWithProgress from "../../common/components/ListItemWithProgress";

export interface IGrailAreaState {
  searchResult?: Partial<IHolyGrailData>;
  data?: IHolyGrailData;
  dataManager?: HolyGrailDataManager;
  error?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    tabs: {
      marginTop: theme.spacing.unit * 4
    },
    searchContainer: {
      maxWidth: 700,
      margin: "auto",
      textAlign: "center"
    },
    rightButtonsContainer: {
      position: "fixed",
      right: theme.spacing.unit,
      bottom: theme.spacing.unit
    },
    leftButtonsContainer: {
      position: "fixed",
      left: theme.spacing.unit,
      bottom: theme.spacing.unit
    },
    buttonRow: {
      display: "flex",
      justifyContent: "flex-end"
    }
  });

export interface IGrailAreaRouterParams {
  address: string;
}

type Props = WithStyles<typeof styles> & RouteComponentProps<IGrailAreaRouterParams>;

class GrailArea extends React.Component<Props, IGrailAreaState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const loginInfo = (this.props.location.state || {}) as ILoginInfo;
    const address = loginInfo.address || this.props.match.params.address;
    const dataManager = HolyGrailDataManager.createInstance(address, loginInfo.password, loginInfo.keepLoggedIn);
    this.setState({ dataManager });
    dataManager.data$.subscribe(
      d => this.setState({ data: d.data }),
      // todo: if we have local storage data, and an error occurs, only show a warning instead of an error
      // so you can also use the app offline
      err =>
        this.setState({
          error:
            err.status === 404
              ? `No Holy Grail for the address '${address}' exists!`
              : err.type === "conflict"
                ? "There was a conflict! The server data changed, but you also have local changes"
                : "There was an error getting the Holy Grail Data from the server: "
        })
    );
  }

  public render() {
    if (this.state.error) {
      return (
        <Typography variant={"caption"} align={"center"}>
          {this.state.error}
        </Typography>
      );
    }

    if (!this.state.data) {
      return null;
    }
    return (
      <div>
        <div className={this.props.classes.searchContainer}>
          <SearchBox data={this.state.data} onSearchResult={this.onSearchResult} />
        </div>
        <div className={this.props.classes.tabs}>
          <TabRenderer allData={this.state.data} searchData={this.state.searchResult} />
        </div>

        <div className={this.props.classes.leftButtonsContainer}>
          <HomeButton />
        </div>

        <div className={this.props.classes.rightButtonsContainer}>
          <div className={this.props.classes.buttonRow}>
            <SaveToServerComponent />
          </div>
          <div className={this.props.classes.buttonRow}>
            <DiscardChangesComponent />
          </div>
          <div className={this.props.classes.buttonRow}>
            <MenuButton>
              <ListItemWithProgress
                primaryText={HolyGrailDataManager.current.address}
                secondaryText={HolyGrailDataManager.current.isReadOnly ? "Read-only" : null}
                firstIcon="person"
              />
              <Divider />
              <SaveToServerComponent renderAsListItem={true} />
              <DiscardChangesComponent renderAsListItem={true} />
              <ToggleAllListItem onToggle={d => this.setState({ data: d })} />
              <ImportListItem />
              <ExportListItem />
            </MenuButton>
          </div>
        </div>
      </div>
    );
  }

  private onSearchResult = (result: Partial<IHolyGrailData>) => {
    this.setState({ searchResult: result });
  };
}

export default withRouter(withStyles(styles)(GrailArea));
