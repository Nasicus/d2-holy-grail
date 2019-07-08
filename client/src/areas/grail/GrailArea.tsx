import * as React from "react";
import { FC, useContext, useEffect, useState } from "react";
import { GrailManager } from "./GrailManager";
import { CircularProgress, Divider } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ILoginInfo } from "../home/LoginForm";
import { SettingsListItem } from "./dataManipulation/clickable-components/SettingsListItem";
import { GrailTypeToggler } from "./dataManipulation/clickable-components/GrailTypeToggler";
import { GrailErrorHandler } from "./GrailErrorHandler";
import { GrailMode } from "./GrailMode";
import { AllBusinessGrailsType } from "../../common/definitions/business/AllBusinessGrailsType";
import { ToggleAllListItem } from "./dataManipulation/clickable-components/ToggleAllListItem";
import { ExportListItem } from "./dataManipulation/clickable-components/ExportListItem";
import { HomeButton } from "../../common/components/HomeButton";
import { PartyButton } from "../../common/components/PartyButton";
import { MenuButton } from "./menu/MenuButton";
import { GrailToServerSaver } from "./dataManipulation/clickable-components/GrailToServerSaver";
import { ChangeDiscarder } from "./dataManipulation/clickable-components/ChangeDiscarder";
import { ImportListItem } from "./dataManipulation/clickable-components/ImportListItem";
import { IGrailError } from "./IGrailError";
import { GrailFilters, IFilterResult } from "./GrailFilters";
import { VersionNotifier } from "./changeManagement/VersionNotifier";
import { TabRenderer } from "./TabRenderer";
import { ListItemWithProgress } from "../../common/components/ListItemWithProgress";
import styled from "styled-components";
import { IGrailAreaRouterParams } from "../../RouteManager";
import { GrailVersionMigrator } from "./migrations/GrailVersionMigrator";
import {
  AppThemeContext,
  ethTheme,
  IAppTheme,
  runewordTheme
} from "../../AppThemeContext";

type Props = RouteComponentProps<IGrailAreaRouterParams>;

interface IGrailAreaState {
  filterResult?: IFilterResult;
  data?: AllBusinessGrailsType;
  error?: IGrailError;
  loading?: boolean;
  hasGrailVersionChange?: boolean;
}

const GrailAreaInternal: FC<Props> = props => {
  const [state, setState] = useState<IGrailAreaState>({ loading: true });
  const { setAppTheme } = useContext(AppThemeContext);

  const grailMode = getGrailModeFromRouteParams(props);

  useEffect(() => {
    const loginInfo = (props.location.state || {}) as ILoginInfo;
    const address = loginInfo.address || props.match.params.address;
    const dataManager = GrailManager.createInstance(
      grailMode,
      address,
      loginInfo.password,
      loginInfo.keepLoggedIn
    );
    dataManager.initialize().subscribe(
      () => {
        setState({
          ...state,
          data: dataManager.grail,
          loading: false,
          hasGrailVersionChange: dataManager.hasNewVersion
        });
      },
      // todo: if we have local storage data, and an error occurs, only show a warning instead of an error
      // so you can also use the app offline
      (err: IGrailError) => setState({ ...state, error: err })
    );
  }, []);

  useEffect(() => {
    if (GrailManager.current && GrailManager.current.grailMode !== grailMode) {
      setState({
        ...state,
        loading: true,
        data: null,
        filterResult: null
      });
      GrailManager.current.setGrailMode(grailMode);

      setThemeAndTitle();
    }
  }, [grailMode]);

  if (state.error) {
    return <GrailErrorHandler error={state.error} />;
  }

  if (state.loading) {
    return (
      <LoaderContainer>
        <CircularProgress size={100} />
      </LoaderContainer>
    );
  }

  if (!state.data) {
    return null;
  }

  return (
    <div>
      {!state.hasGrailVersionChange && <VersionNotifier />}
      {state.hasGrailVersionChange && <GrailVersionMigrator />}
      <div>
        <GrailFilters data={state.data} onFilterResult={onFilterResult} />
      </div>
      <div>
        <TabRenderer allData={state.data} filterResult={state.filterResult} />
      </div>

      <LeftSideButtons>
        <PartyButton />
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
              secondaryText={
                GrailManager.current.isReadOnly ? "Read-only" : null
              }
              firstIcon="person"
            />
            <Divider />
            <GrailToServerSaver renderAsListItem={true} />
            <ChangeDiscarder renderAsListItem={true} />
            <ToggleAllListItem
              onToggle={d => setState({ ...state, data: d })}
            />
            <ImportListItem />
            <ExportListItem />
            <GrailTypeToggler
              renderAsListItem={true}
              grailMode={GrailManager.current.grailMode}
            />
            <SettingsListItem
              onSettingsChanged={() =>
                setState({ ...state, data: GrailManager.current.grail })
              }
            />
          </MenuButton>
        </ButtonRow>
      </RightSideButtons>
    </div>
  );

  function getGrailModeFromRouteParams(props: Props) {
    switch (props.match.params.grailMode as GrailMode) {
      case GrailMode.Eth:
        return GrailMode.Eth;
      case GrailMode.Runeword:
        return GrailMode.Runeword;
      default:
        return GrailMode.Holy;
    }
  }

  function setThemeAndTitle() {
    let theme: IAppTheme = null;
    switch (grailMode) {
      case GrailMode.Eth:
        theme = ethTheme;
        break;
      case GrailMode.Runeword:
        theme = runewordTheme;
        break;
      default:
        break;
    }

    setAppTheme(theme);
  }

  function onFilterResult(result: IFilterResult) {
    setState({ ...state, filterResult: result });
  }
};

const RightSideButtons = styled.div`
  position: fixed;
  right: ${p => p.theme.spacing(1)}px;
  bottom: ${p => p.theme.spacing(1)}px;
`;

const LeftSideButtons = styled.div`
  position: fixed;
  left: ${p => p.theme.spacing(1)}px;
  bottom: ${p => p.theme.spacing(1)}px;
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
