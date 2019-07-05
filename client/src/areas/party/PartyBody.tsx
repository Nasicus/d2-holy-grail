import * as React from "react";
import Tabs from "@material-ui/core/Tabs/Tabs";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tab from "@material-ui/core/Tab/Tab";
import Typography from "@material-ui/core/Typography/Typography";
import { PartyManager } from "./PartyManager";
import { PartyTable } from "./PartyTable";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { LocationDescriptorObject } from "history";
import { IPartyAreaRouterParams, RouteManager } from "../../RouteManager";
import { PartyTabType } from "./PartyTabType";
import { UserManagerRenderer } from "./UserManagerRenderer";
import { JoinFormRenderer } from "./JoinFormRenderer";
import { IPartyUserData } from "../../common/definitions/union/IPartyUserData";

export interface IPartyBodyProps {
  data: any;
  users: IPartyUserData;
}

interface IPartyBodyState {
  activeTab: PartyTabType;
}

type Props = IPartyBodyProps & RouteComponentProps<IPartyAreaRouterParams>;

class PartyBodyInternal extends React.Component<Props, IPartyBodyState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: PartyTabType.Leaderboard
    };
  }

  public render() {
    if (
      this.props.match.params.tabType === PartyTabType.Manage &&
      PartyManager.current.isReadOnly
    ) {
      const to: LocationDescriptorObject = {
        pathname: `/party/${this.props.match.params.address}`
      };
      return <Redirect to={to} push={true} />;
    }
    return (
      <RootContainer>
        <AppBar position="sticky">
          <Tabs
            value={this.props.match.params.tabType || PartyTabType.Leaderboard}
            onChange={this.handleChange}
            centered={true}
          >
            <Tab label="leaderboard" value={"leaderboard"} />
            <Tab label="join" value={"join"} />
            {!PartyManager.current.isReadOnly && (
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

  private getBody(activeTab: PartyTabType) {
    switch (activeTab) {
      case PartyTabType.Leaderboard:
        return <PartyTable data={this.props.data} />;
      case PartyTabType.Join:
        return <JoinFormRenderer />;
      case PartyTabType.Manage:
        return <UserManagerRenderer users={this.props.users} />;
      default:
        return <PartyTable data={this.props.data} />;
    }
  }

  private handleChange = (event: any, nextTab: PartyTabType) => {
    this.setState({ activeTab: nextTab });
    RouteManager.updatePartyTabType(this.props, nextTab);
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

export const PartyBody = withRouter(PartyBodyInternal);
