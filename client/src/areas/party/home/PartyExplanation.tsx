import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export class PartyExplanation extends React.Component {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <RootContainer>
        <Typography variant="h4">
          Introducing Holy Grail Parties! <br />
        </Typography>
        <Typography variant="body1">
          Ever wanted to compare your grail progress to friends or other members
          of a community? <br />
          Simply create a Holy Grail Party above and invite your friends! <br />
          The party will automatically keep track of each member's grail
          progress as they enter new items. <br />
          Compare your progress with a simple table of all users' grails in your
          party.
        </Typography>
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  width: 700px;
  margin: auto;
  padding-top: 50px;
`;
