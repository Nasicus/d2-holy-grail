import * as React from "react";
import { createStyles, WithStyles, withStyles, Typography } from "@material-ui/core";
import { HolyGrailDataManager, IGrailError } from "./HolyGrailDataManager";
import DiscardChangesComponent from "./dataManipulation/clickable-components/DiscardChangesComponent";
import SaveGrailToServerComponent from "./dataManipulation/clickable-components/SaveGrailToServerComponent";
import ExportListItem from "./dataManipulation/clickable-components/ExportListItem";
import { IGrailData } from "../../common/definitions/IGrailData";

interface IGrailErrorHandlerProps {
  error: IGrailError;
}

const styles = () =>
  createStyles({
    container: {
      maxWidth: "700px",
      margin: "auto"
    }
  });

type Props = IGrailErrorHandlerProps & WithStyles<typeof styles>;

const ConflictHandler: React.SFC<IGrailErrorHandlerProps> = props => {
  return (
    <div>
      <DiscardChangesComponent renderAsListItem={true} text="Discard local changes and use server data" />
      <SaveGrailToServerComponent
        renderAsListItem={true}
        text="Ignore server changes and use local data"
        token={props.error.serverToken}
        reload={true}
      />
      You can also download backups of all data and compare them locally:
      <ExportListItem
        text="Download local data"
        fileName="Local Data"
        data={
          {
            grailData: HolyGrailDataManager.current.normalGrail,
            ethData: HolyGrailDataManager.current.ethGrail
          } as IGrailData
        }
      />
      <ExportListItem text="Download server data" fileName="Server Data" data={props.error.serverData} />
    </div>
  );
};

function getErrorMessage(error: IGrailError) {
  if (error.status === 404) {
    return `No Holy Grail for the address '${HolyGrailDataManager.current.address}' exists!`;
  }

  if (error.type === "conflict") {
    return (
      "There was a conflict! The server data changed, but you also have local changes." +
      " Please choose one of the following actions:"
    );
  }

  return "There was an error getting the Holy Grail Data from the server. Please try again.";
}

const GrailErrorHandlerComponent: React.SFC<Props> = props => {
  return (
    <div className={props.classes.container}>
      <Typography variant="body1">{getErrorMessage(props.error)}</Typography>
      {props.error.type === "conflict" && <ConflictHandler error={props.error} />}
    </div>
  );
};

export const GrailErrorHandler = withStyles(styles)(GrailErrorHandlerComponent);
