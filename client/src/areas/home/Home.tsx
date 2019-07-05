import * as React from "react";
import { LoginForm } from "./LoginForm";
import { PartyButton } from "../../common/components/PartyButton";
import styled from "styled-components";

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <LoginForm />

        <LeftSideButtons>
          <PartyButton />
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
