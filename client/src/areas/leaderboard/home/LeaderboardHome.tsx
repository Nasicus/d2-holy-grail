import * as React from "react";
import { LeaderboardLoginForm } from "./LeaderboardLoginForm";
import { HomeButton } from "../../../common/components/HomeButton";
import styled from "styled-components";

export class LeaderboardHome extends React.Component {
  public render() {
    return (
      <div>
        <LeaderboardLoginForm />

        <LeftSideButtons>
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
