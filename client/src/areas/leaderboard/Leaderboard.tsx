import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ILeaderboardError } from "./ILeaderboardError";
import { LeaderboardManager } from "./LeaderboardManager";
import { ILoginInfo } from "./home/LeaderboardLoginForm";
import { ILeaderboardData } from "../../common/definitions/union/ILeaderboardData";
import { LeaderboardBody } from "./LeaderboardBody";
import styled from "../../TypedStyledComponents";
import { CircularProgress, Divider } from "@material-ui/core";
import { VersionNotifier } from "../grail/changeManagement/VersionNotifier";
import { HomeButton } from "../../common/components/HomeButton";
import { LeaderboardButton } from "../../common/components/LeaderboardButton";
import { ILeaderboardAreaRouterParams } from "../../RouteManager";
import { LeaderboardToServerSaver } from "./components/LeaderboardToServerSaver";
import { ILeaderboardUserData } from "../../common/definitions/union/ILeaderboardUserData";
import { LeaderboardErrorHandler } from "./LeaderboardErrorHandler";

interface ILeaderboardAreaState {
  data?: ILeaderboardData;
  users?: ILeaderboardUserData;
  error?: ILeaderboardError;
  loading?: boolean;
}

type Props = RouteComponentProps<ILeaderboardAreaRouterParams>;

class LeaderboardAreaInternal extends React.Component<
  Props,
  ILeaderboardAreaState
> {
  public constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  public componentDidMount() {
    const loginInfo = (this.props.location.state || {}) as ILoginInfo;
    const address = loginInfo.address || this.props.match.params.address;
    const dataManager = LeaderboardManager.createInstance(
      address,
      loginInfo.password,
      loginInfo.keepLoggedIn
    );
    dataManager.initialize().subscribe(
      () =>
        this.setState({
          data: dataManager.leaderboard,
          users: dataManager.users,
          loading: false
        }),
      // todo: if we have local storage data, and an error occurs, only show a warning instead of an error
      // so you can also use the app offline
      (err: ILeaderboardError) => this.setState({ error: err })
    );
  }

  public render() {
    if (this.state.error) {
      return <LeaderboardErrorHandler error={this.state.error} />;
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
          <LeaderboardBody data={this.state.data} users={this.state.users} />
        </div>

        <LeftSideButtons>
          <LeaderboardButton />
          <HomeButton />
        </LeftSideButtons>

        <RightSideButtons>
          <ButtonRow>
            <LeaderboardToServerSaver registerShortCut={true} />
          </ButtonRow>
        </RightSideButtons>
      </div>
    );
  }
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

export const Leaderboard = withRouter(LeaderboardAreaInternal);
