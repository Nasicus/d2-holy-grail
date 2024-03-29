import * as React from "react";
import { PartyLoginForm } from "./PartyLoginForm";
import { PartyExplanation } from "./PartyExplanation";
import { HomeButton } from "../../../common/components/HomeButton";
import styled from "styled-components";
import { AppThemeContext, partyTheme } from "../../../AppThemeContext";
import { FC, useEffect, useContext } from "react";

export const PartyHome: FC = () => {
  const { setAppTheme } = useContext(AppThemeContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setAppTheme(partyTheme), []);

  return (
    <div>
      <PartyLoginForm />
      <PartyExplanation />
      <LeftSideButtons>
        <HomeButton />
      </LeftSideButtons>
    </div>
  );
};

const LeftSideButtons = styled.div`
  position: fixed;
  left: ${p => p.theme.spacing(1)}px;
  bottom: ${p => p.theme.spacing(1)}px;
`;
