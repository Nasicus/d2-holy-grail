import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ButtonWithProgress } from "./ButtonWithProgress";
import { FC, useContext } from "react";
import { partyTheme, ThemeContext } from "../../ThemeContext";

const PartyButtonInternal: FC<RouteComponentProps<{}>> = props => {
  const { setTheme } = useContext(ThemeContext);
  function handleClick() {
    props.history.push("/party/");
    setTheme(partyTheme, "Diablo II - Holy Grail Party");
  }

  return (
    <div>
      <ButtonWithProgress
        onClick={handleClick}
        text="Go to party login page"
        firstIcon="format_list_numbered"
      />
    </div>
  );
};

export const PartyButton = withRouter(PartyButtonInternal);
