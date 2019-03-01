import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ButtonWithProgress } from "../../common/components/ButtonWithProgress";

const HomeButtonInternal: React.FunctionComponent<
  RouteComponentProps<{}>
> = props => {
  return (
    <div>
      <ButtonWithProgress
        onClick={() => props.history.push("/")}
        text="Go to login page"
        firstIcon="home"
      />
    </div>
  );
};

export const HomeButton = withRouter(HomeButtonInternal);
