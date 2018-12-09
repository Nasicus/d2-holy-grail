import * as React from "react";
import { createStyles, WithStyles, Theme, withStyles, Checkbox } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import { GrailManager } from "../GrailManager";
import { IGrailSettings } from "../../../common/definitions/union/IGrailSettings";
import { SettingsToServerSaver } from "./clickable-components/SettingsToServerSaver";
import { CloseableDialog } from "../../../common/components/CloseableDialog";

export interface ISettingsDialogProps {
  onDialogClosed: (wasUpdated: boolean) => any;
}

type Props = ISettingsDialogProps & WithStyles<typeof styles>;

interface ISettingsDialogState {
  settings?: IGrailSettings;
  wasSaved?: boolean;
}

class SettingsDialogInternal extends React.Component<Props, ISettingsDialogState> {
  public constructor(props: Props) {
    super(props);
    this.state = { settings: GrailManager.current.settings };
  }

  public render() {
    return (
      <CloseableDialog
        onDialogClosed={() => this.props.onDialogClosed(this.state.wasSaved)}
        title="Settings"
        actions={() => <SettingsToServerSaver />}
      >
        <DialogContentText>You can change your settings here.</DialogContentText>
        <div className={this.props.classes.dialogContent}>
          <div className={this.props.classes.settingsEntry}>
            <div>
              <Checkbox
                checked={GrailManager.current.settings.useItemCountMode}
                onChange={event => this.onItemCountModeChange(event)}
                value="Use counter instead of checkbox for items"
              />
            </div>
            <div>Use counters instead of checkboxes for items (you can switch between the modes without data loss)</div>
          </div>
        </div>
      </CloseableDialog>
    );
  }

  private onItemCountModeChange = (event: any) => {
    GrailManager.current.settings.useItemCountMode = event.target.checked;
    GrailManager.current.updateGrailCache();
    this.setState({ settings: GrailManager.current.settings, wasSaved: true });
  };
}

const styles = (theme: Theme) =>
  createStyles({
    closeIcon: {
      position: "absolute",
      top: theme.spacing.unit,
      right: theme.spacing.unit,
      cursor: "pointer"
    },
    dialogContent: {
      fontFamily: theme.typography.fontFamily
    },
    settingsEntry: {
      display: "flex",
      alignItems: "center"
    }
  });

export const SettingsDialog = withStyles(styles)(SettingsDialogInternal);
