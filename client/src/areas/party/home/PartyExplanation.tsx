import * as React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FC, useState } from "react";
import { ItemScoreInfoDialog } from "./ItemScoreInfoDialog";

export const PartyExplanation: FC = () => {
  const [renderItemScoreInfo, setRenderItemScoreInfo] = useState(false);
  return (
    <Host>
      {renderItemScoreInfo && (
        <ItemScoreInfoDialog
          onDialogClosed={() => {
            setRenderItemScoreInfo(false);
          }}
        />
      )}
      <Typography variant="h4">
        Introducing Holy Grail Parties! <br />
      </Typography>
      <Typography variant="body1">
        Ever wanted to compare your grail progress to friends or other members
        of a community? <br />
        Simply create a Holy Grail Party above and invite your friends! <br />
        The party will automatically keep track of each member's grail progress
        as they enter new items. <br />
        Compare your progress with a simple table of all members' grails in your
        party. <br />
        <br />
        Also introducing ItemScore! A way to compare grail progress based on the
        rarity of items collected. <br />
        <span>
          You can
          <Button onClick={() => setRenderItemScoreInfo(true)}>
            Click Here
          </Button>
          to see more information about it.
        </span>
      </Typography>
    </Host>
  );
};

const Host = styled.div`
  margin: 50px auto;
  max-width: 700px;
`;
