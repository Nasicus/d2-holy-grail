import * as React from "react";
import Tabs from "@material-ui/core/Tabs/Tabs";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tab from "@material-ui/core/Tab/Tab";
import Typography from "@material-ui/core/Typography/Typography";
import { LeaderboardManager } from "./LeaderboardManager";
import { LeaderboardTable } from "./LeaderboardTable";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { LocationDescriptorObject } from "history";
import { ILeaderboardAreaRouterParams, RouteManager } from "../../RouteManager";
import { LeaderboardTabType } from "./LeaderboardTabType";
import { UserManagerRenderer } from "./UserManagerRenderer";
import { JoinFormRenderer } from "./JoinFormRenderer";
import { ILeaderboardUserData } from "../../common/definitions/union/ILeaderboardUserData";

export interface ILeaderboardBodyProps {
  data: any;
  users: ILeaderboardUserData;
}

interface ILeaderboardBodyState {
  activeTab: LeaderboardTabType;
}

type Props = ILeaderboardBodyProps &
  RouteComponentProps<ILeaderboardAreaRouterParams>;

class LeaderboardBodyInternal extends React.Component<
  Props,
  ILeaderboardBodyState
> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: LeaderboardTabType.Leaderboard
    };
  }

  public render() {
    if (
      this.props.match.params.tabType === LeaderboardTabType.Manage &&
      LeaderboardManager.current.isReadOnly
    ) {
      const to: LocationDescriptorObject = {
        pathname: `/leaderboard/${this.props.match.params.address}`
      };
      return <Redirect to={to} push={true} />;
    }
    return (
      <RootContainer>
        <AppBar position="sticky">
          <Tabs
            value={
              this.props.match.params.tabType || LeaderboardTabType.Leaderboard
            }
            onChange={this.handleChange}
            centered={true}
          >
            <Tab label="leaderboard" value={"leaderboard"} />
            <Tab label="join" value={"join"} />
            {!LeaderboardManager.current.isReadOnly && (
              <Tab label="manage" value={"manage"} />
            )}
          </Tabs>
        </AppBar>
        <BodyContainer>
          {this.getBody(this.props.match.params.tabType)}
        </BodyContainer>
      </RootContainer>
    );
  }

  private getBody(activeTab: LeaderboardTabType) {
    switch (activeTab) {
      case LeaderboardTabType.Leaderboard:
        return <LeaderboardTable data={this.props.data} />;
      case LeaderboardTabType.Join:
        return <JoinFormRenderer />;
      case LeaderboardTabType.Manage:
        return <UserManagerRenderer users={this.props.users} />;
      default:
        return <LeaderboardTable data={this.props.data} />;
    }
  }

  private handleChange = (event: any, nextTab: LeaderboardTabType) => {
    this.setState({ activeTab: nextTab });
    RouteManager.updateLeaderboardTabType(this.props, nextTab);
  };
}

const RootContainer = styled.div`
  background-color: ${p => p.theme.palette.background.paper};
  margin-top: 40px;
`;

const BodyContainer: React.FunctionComponent<{}> = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

export const LeaderboardBody = withRouter(LeaderboardBodyInternal);
