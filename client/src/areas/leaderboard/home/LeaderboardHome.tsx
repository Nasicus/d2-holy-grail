import * as React from "react";
import { LeaderboardLoginForm } from "./LeaderboardLoginForm";
import { HomeButton } from "../../../common/components/HomeButton";
import styled from "../../../TypedStyledComponents";

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
  left: ${p => p.theme.spacing.unit}px;
  bottom: ${p => p.theme.spacing.unit}px;
`;
