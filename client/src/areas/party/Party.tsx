import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IPartyError } from "./IPartyError";
import { PartyManager } from "./PartyManager";
import { ILoginInfo } from "./home/PartyLoginForm";
import { IPartyData } from "../../common/definitions/union/IPartyData";
import { PartyBody } from "./PartyBody";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { VersionNotifier } from "../grail/changeManagement/VersionNotifier";
import { HomeButton } from "../../common/components/HomeButton";
import { PartyButton } from "../../common/components/PartyButton";
import { IPartyAreaRouterParams } from "../../RouteManager";
import { IPartyUserData } from "../../common/definitions/union/IPartyUserData";
import { PartyErrorHandler } from "./PartyErrorHandler";

interface IPartyAreaState {
  data?: IPartyData;
  users?: IPartyUserData;
  error?: IPartyError;
  loading?: boolean;
}

type Props = RouteComponentProps<IPartyAreaRouterParams>;

class PartyAreaInternal extends React.Component<Props, IPartyAreaState> {
  public constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  public componentDidMount() {
    const loginInfo = (this.props.location.state || {}) as ILoginInfo;
    const address = loginInfo.address || this.props.match.params.address;
    const dataManager = PartyManager.createInstance(
      address,
      loginInfo.password,
      loginInfo.keepLoggedIn
    );
    dataManager.initialize().subscribe(
      () => {
        this.setState({
          data: dataManager.party,
          users: dataManager.users,
          loading: false
        });
      },
      // todo: if we have local storage data, and an error occurs, only show a warning instead of an error
      // so you can also use the app offline
      (err: IPartyError) => this.setState({ error: err })
    );
  }

  public render() {
    if (this.state.error) {
      return <PartyErrorHandler error={this.state.error} />;
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
          <PartyBody data={this.state.data} users={this.state.users} />
        </div>
        <LeftSideButtons>
          <PartyButton />
          <HomeButton />
        </LeftSideButtons>
      </div>
    );
  }
}

const LeftSideButtons = styled.div`
  position: fixed;
  left: ${p => p.theme.spacing(1)}px;
  bottom: ${p => p.theme.spacing(1)}px;
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Party = withRouter(PartyAreaInternal);
