import * as React from "react";
import { Typography } from "@material-ui/core";
import { LeaderboardManager } from "./LeaderboardManager";
import { ILeaderboardError } from "./ILeaderboardError";
import { ILeaderboardErrorHandlerProps } from "./LeaderboardErrorHandler";
import styled from "styled-components";

export interface ILeaderboardErrorHandlerProps {
  error: ILeaderboardError;
}

export const LeaderboardErrorHandler: React.FunctionComponent<
  ILeaderboardErrorHandlerProps
> = props => {
  return (
    <RootContainer>
      <Typography variant="body1">{getErrorMessage(props.error)}</Typography>
    </RootContainer>
  );
};

function getErrorMessage(error: ILeaderboardError) {
  if (error.status === 404) {
    return `No leaderboard for the address '${LeaderboardManager.current.address}' exists!`;
  }

  return "There was an error getting the Leaderboard Data from the server. Please try again.";
}

const RootContainer = styled.div`
  max-width: 700px;
  margin: auto;
`;
