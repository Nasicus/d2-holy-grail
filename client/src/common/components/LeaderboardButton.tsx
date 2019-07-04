import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ButtonWithProgress } from "./ButtonWithProgress";

const LeaderboardButtonInternal: React.FunctionComponent<
  RouteComponentProps<{}>
> = props => {
  return (
    <div>
      <ButtonWithProgress
        onClick={() => props.history.push("/leaderboard/")}
        text="Go to leaderboard login page"
        firstIcon="format_list_numbered"
      />
    </div>
  );
};

export const LeaderboardButton = withRouter(LeaderboardButtonInternal);
