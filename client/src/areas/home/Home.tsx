import * as React from "react";
import { LoginForm } from "./LoginForm";
import { PartyButton } from "../../common/components/PartyButton";
import styled from "styled-components";
import { FC, useContext, useEffect } from "react";
import { AppThemeContext } from "../../AppThemeContext";

export const Home: FC = () => {
  const { setAppTheme } = useContext(AppThemeContext);

  useEffect(() => setAppTheme(), []);

  return (
    <div>
      <LoginForm />

      <LeftSideButtons>
        <PartyButton />
      </LeftSideButtons>
    </div>
  );
};

const LeftSideButtons = styled.div`
  position: fixed;
  left: ${p => p.theme.spacing(1)}px;
  bottom: ${p => p.theme.spacing(1)}px;
`;
