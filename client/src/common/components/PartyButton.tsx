import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ButtonWithProgress } from "./ButtonWithProgress";

const PartyButtonInternal: React.FunctionComponent<
  RouteComponentProps<{}>
> = props => {
  return (
    <div>
      <ButtonWithProgress
        onClick={() => props.history.push("/party/")}
        text="Go to party login page"
        firstIcon="format_list_numbered"
      />
    </div>
  );
};

export const PartyButton = withRouter(PartyButtonInternal);
