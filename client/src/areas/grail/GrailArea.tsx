import * as React from "react";
import TabRenderer from "./tabRenderer/TabRenderer";
import SearchBox from "./searchBox/SearchBox";
import { HolyGrailDataManager } from "./HolyGrailDataManager";
import { CircularProgress, createStyles, Divider, Theme, withStyles, WithStyles } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import { ILoginInfo } from "../home/loginForm/LoginForm";
import SaveGrailToServerComponent from "./dataManipulation/clickable-components/SaveGrailToServerComponent";
import { IHolyGrailData } from "../../common/definitions/IHolyGrailData";
import HomeButton from "./homeButton/HomeButton";
import MenuButton from "./menu/MenuButton";
import ExportListItem from "./dataManipulation/clickable-components/ExportListItem";
import ImportListItem from "./dataManipulation/clickable-components/ImportListItem";
import ToggleAllListItem from "./dataManipulation/clickable-components/ToggleAllListItem";
import DiscardChangesComponent from "./dataManipulation/clickable-components/DiscardChangesComponent";
import ListItemWithProgress from "../../common/components/ListItemWithProgress";
import { SettingsListItem } from "./dataManipulation/clickable-components/SettingsListItem";
import VersionNotifier from "./VersionNotifier";
import { IEthGrailData } from "../../common/definitions/IEthGrailData";
import { GrailTypeToggler } from "./dataManipulation/clickable-components/GrailTypeToggler";
import { IPassDownAppProps } from "../../App";

export interface IGrailAreaState {
  searchResult?: Partial<IHolyGrailData>;
  data?: IHolyGrailData | IEthGrailData;
  error?: string;
  loading?: boolean;
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
    },
    loader: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  });

export interface IGrailAreaRouterParams {
  address: string;
  grailMode: string;
}

type Props = IPassDownAppProps & WithStyles<typeof styles> & RouteComponentProps<IGrailAreaRouterParams>;

class GrailArea extends React.Component<Props, IGrailAreaState> {
  public constructor(props: Props) {
    super(props);
    this.state = { loading: true };
  }

  public static getDerivedStateFromProps(props: Props, state: IGrailAreaState) {
    const isNowEthMode = props.match.params.grailMode === "eth";
    if (HolyGrailDataManager.current && HolyGrailDataManager.current.isEthMode !== isNowEthMode) {
      state.loading = true;
      state.data = null;
      state.searchResult = null;
      HolyGrailDataManager.current.setGrailMode(isNowEthMode);
      props.onGrailModeChange(isNowEthMode);
    }

    return state;
  }

  public componentDidMount() {
    const loginInfo = (this.props.location.state || {}) as ILoginInfo;
    const address = loginInfo.address || this.props.match.params.address;
    const isEthMode = this.props.match.params.grailMode === "eth";
    this.props.onGrailModeChange(isEthMode);
    const dataManager = HolyGrailDataManager.createInstance(
      isEthMode,
      address,
      loginInfo.password,
      loginInfo.keepLoggedIn
    );
    dataManager.initialize().subscribe(
      () => this.setState({ data: dataManager.grail, loading: false }),
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
        <Typography variant="body1" align="center">
          {this.state.error}
        </Typography>
      );
    }

    if (this.state.loading) {
      return (
        <div className={this.props.classes.loader}>
          <CircularProgress size={100} />
        </div>
      );
    }

    if (!this.state.data) {
      return null;
    }
    return (
      <div>
        <VersionNotifier />
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
            <SaveGrailToServerComponent />
          </div>
          <div className={this.props.classes.buttonRow}>
            <DiscardChangesComponent />
          </div>
          <div className={this.props.classes.buttonRow}>
            <GrailTypeToggler isEthMode={HolyGrailDataManager.current.isEthMode} />
          </div>
          <div className={this.props.classes.buttonRow}>
            <MenuButton>
              <ListItemWithProgress
                primaryText={HolyGrailDataManager.current.address}
                secondaryText={HolyGrailDataManager.current.isReadOnly ? "Read-only" : null}
                firstIcon="person"
              />
              <Divider />
              <SaveGrailToServerComponent renderAsListItem={true} />
              <DiscardChangesComponent renderAsListItem={true} />
              <ToggleAllListItem onToggle={d => this.setState({ data: d })} />
              <ImportListItem />
              <ExportListItem />
              <GrailTypeToggler renderAsListItem={true} isEthMode={HolyGrailDataManager.current.isEthMode} />
              <SettingsListItem onSettingsChanged={() => this.setState({ data: HolyGrailDataManager.current.grail })} />
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
