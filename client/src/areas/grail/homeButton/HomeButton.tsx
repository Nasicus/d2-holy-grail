import * as React from "react";
import ButtonWithProgress from "../../../common/components/ButtonWithProgress";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ImporterButton: React.SFC<RouteComponentProps<{}>> = props => {
  return (
    <div>
      <ButtonWithProgress onClick={() => props.history.push("/")} text="Go to login page" firstIcon="home" />
    </div>
  );
};

export default withRouter(ImporterButton);
