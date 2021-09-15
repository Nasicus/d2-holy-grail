import * as React from "react";
import { Typography } from "@material-ui/core";
import { PartyManager } from "./PartyManager";
import { IPartyError } from "./IPartyError";
import styled from "styled-components";

export interface IPartyErrorHandlerProps {
  error: IPartyError;
}

export const PartyErrorHandler: React.FunctionComponent<
  IPartyErrorHandlerProps
> = props => {
  return (
    <RootContainer>
      <Typography variant="body1">{getErrorMessage(props.error)}</Typography>
    </RootContainer>
  );
};

function getErrorMessage(error: IPartyError) {
  if (error.status === 404) {
    return `No party for the address '${PartyManager.current.address}' exists!`;
  }

  return "There was an error getting the Party Data from the server. Please try again.";
}

const RootContainer = styled.div`
  max-width: 700px;
  margin: auto;
`;
