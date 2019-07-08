import * as React from "react";
import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ButtonWithProgress } from "./ButtonWithProgress";

const PartyButtonInternal: FC<RouteComponentProps<{}>> = props => {
  return (
    <div>
      <ButtonWithProgress
        onClick={handleClick}
        text="Go to party login page"
        firstIcon="format_list_numbered"
      />
    </div>
  );

  function handleClick() {
    props.history.push("/party/");
  }
};

export const PartyButton = withRouter(PartyButtonInternal);
