import * as React from "react";
import { GrailManager } from "./GrailManager";
import { CircularProgress, Divider } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ILoginInfo } from "../home/LoginForm";
import { SettingsListItem } from "./dataManipulation/clickable-components/SettingsListItem";
import { GrailTypeToggler } from "./dataManipulation/clickable-components/GrailTypeToggler";
import { IPassDownAppProps } from "../../App";
import { GrailErrorHandler } from "./GrailErrorHandler";
import { GrailMode } from "./GrailMode";
import { AllBusinessGrailsType } from "../../common/definitions/business/AllBusinessGrailsType";
import { ToggleAllListItem } from "./dataManipulation/clickable-components/ToggleAllListItem";
import { ExportListItem } from "./dataManipulation/clickable-components/ExportListItem";
import { HomeButton } from "./HomeButton";
import { MenuButton } from "./menu/MenuButton";
import { GrailToServerSaver } from "./dataManipulation/clickable-components/GrailToServerSaver";
import { ChangeDiscarder } from "./dataManipulation/clickable-components/ChangeDiscarder";
import { ImportListItem } from "./dataManipulation/clickable-components/ImportListItem";
import { IGrailError } from "./IGrailError";
import { GrailFilters, IFilterResult } from "./GrailFilters";
import { VersionNotifier } from "./changeManagement/VersionNotifier";
import { TabRenderer } from "./TabRenderer";
import { ListItemWithProgress } from "../../common/components/ListItemWithProgress";
import styled from "../../TypedStyledComponents";

export interface IGrailAreaRouterParams {
  address: string;
  grailMode: string;
}

type Props = IPassDownAppProps & RouteComponentProps<IGrailAreaRouterParams>;

interface IGrailAreaState {
  filterResult?: IFilterResult;
  data?: AllBusinessGrailsType;
  error?: IGrailError;
  loading?: boolean;
}

class GrailAreaInternal extends React.Component<Props, IGrailAreaState> {
  public constructor(props: Props) {
    super(props);
    this.state = { loading: true };
  }

  public static getDerivedStateFromProps(props: Props, state: IGrailAreaState) {
    const newMode = GrailAreaInternal.getGrailModeFromRouteParams(props);
    if (GrailManager.current && GrailManager.current.grailMode !== newMode) {
      state.loading = true;
      state.data = null;
      state.filterResult = null;
      GrailManager.current.setGrailMode(newMode);
      props.onGrailModeChange(newMode);
    }

    return state;
  }

  public componentDidMount() {
    const loginInfo = (this.props.location.state || {}) as ILoginInfo;
    const address = loginInfo.address || this.props.match.params.address;
    const grailMode = GrailAreaInternal.getGrailModeFromRouteParams(this.props);
    this.props.onGrailModeChange(grailMode);
    const dataManager = GrailManager.createInstance(grailMode, address, loginInfo.password, loginInfo.keepLoggedIn);
    dataManager.initialize().subscribe(
      () => this.setState({ data: dataManager.grail, loading: false }),
      // todo: if we have local storage data, and an error occurs, only show a warning instead of an error
      // so you can also use the app offline
      (err: IGrailError) => this.setState({ error: err })
    );
  }

  public render() {
    if (this.state.error) {
      return <GrailErrorHandler error={this.state.error} />;
    }

    if (this.state.loading) {
      return (
        <LoaderContainer>
          <CircularProgress size={100} />
        </LoaderContainer>
      );
    }

    if (!this.state.data) {
      return null;
    }
    return (
      <div>
        <VersionNotifier />
        <div>
          <GrailFilters data={this.state.data} onFilterResult={this.onFilterResult} />
        </div>
        <div>
          <TabRenderer allData={this.state.data} filterResult={this.state.filterResult} />
        </div>

        <LeftSideButtons>
          <HomeButton />
        </LeftSideButtons>

        <RightSideButtons>
          <ButtonRow>
            <GrailToServerSaver registerShortCut={true} />
          </ButtonRow>
          <ButtonRow>
            <ChangeDiscarder />
          </ButtonRow>
          <ButtonRow>
            <GrailTypeToggler grailMode={GrailManager.current.grailMode} />
          </ButtonRow>
          <ButtonRow>
            <MenuButton>
              <ListItemWithProgress
                primaryText={GrailManager.current.address}
                secondaryText={GrailManager.current.isReadOnly ? "Read-only" : null}
                firstIcon="person"
              />
              <Divider />
              <GrailToServerSaver renderAsListItem={true} />
              <ChangeDiscarder renderAsListItem={true} />
              <ToggleAllListItem onToggle={d => this.setState({ data: d })} />
              <ImportListItem />
              <ExportListItem />
              <GrailTypeToggler renderAsListItem={true} grailMode={GrailManager.current.grailMode} />
              <SettingsListItem onSettingsChanged={() => this.setState({ data: GrailManager.current.grail })} />
            </MenuButton>
          </ButtonRow>
        </RightSideButtons>
      </div>
    );
  }

  private static getGrailModeFromRouteParams(props: Props) {
    switch (props.match.params.grailMode as GrailMode) {
      case GrailMode.Eth:
        return GrailMode.Eth;
      case GrailMode.Runeword:
        return GrailMode.Runeword;
      default:
        return GrailMode.Holy;
    }
  }

  private onFilterResult = (result: IFilterResult) => {
    this.setState({ filterResult: result });
  };
}

const RightSideButtons = styled.div`
  position: fixed;
  right: ${p => p.theme.spacing.unit}px;
  bottom: ${p => p.theme.spacing.unit}px;
`;

const LeftSideButtons = styled.div`
  position: fixed;
  left: ${p => p.theme.spacing.unit}px;
  bottom: ${p => p.theme.spacing.unit}px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const GrailArea = withRouter(GrailAreaInternal);
