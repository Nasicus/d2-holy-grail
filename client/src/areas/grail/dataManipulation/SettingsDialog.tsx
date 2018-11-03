import * as React from "react";
import { createStyles, WithStyles, Theme, withStyles, Checkbox } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import { HolyGrailDataManager } from "../HolyGrailDataManager";
import { IHolyGrailSettings } from "../../../common/utils/Api";
import CloseableDialog from "../../../common/components/CloseableDialog";
import SaveSettingsToServerButton from "./clickable-components/SaveSettingsToServerButton";

interface ISettingsDialogProps {
  onDialogClosed: (wasUpdated: boolean) => any;
}

interface ISettingsDialogState {
  settings?: IHolyGrailSettings;
  wasSaved?: boolean;
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
    }
  });

type Props = ISettingsDialogProps & WithStyles<typeof styles>;

class SettingsDialog extends React.Component<Props, ISettingsDialogState> {
  public constructor(props: Props) {
    super(props);
    this.state = { settings: HolyGrailDataManager.current.settings };
  }

  private onItemCountModeChange = (event: any) => {
    HolyGrailDataManager.current.settings.useItemCountMode = event.target.checked;
    HolyGrailDataManager.current.updateGrailCache();
    this.setState({ settings: HolyGrailDataManager.current.settings, wasSaved: true });
  };

  public render() {
    return (
      <CloseableDialog
        onDialogClosed={() => this.props.onDialogClosed(this.state.wasSaved)}
        title="Settings"
        actions={() => <SaveSettingsToServerButton />}
      >
        <DialogContentText>You can change your settings here.</DialogContentText>
        <div className={this.props.classes.dialogContent}>
          <Checkbox
            checked={HolyGrailDataManager.current.settings.useItemCountMode}
            onChange={event => this.onItemCountModeChange(event)}
            value="Use counter instead of checkbox for items"
          />
          Use counters instead of checkboxes for items
        </div>
      </CloseableDialog>
    );
  }
}

export default withStyles(styles)(SettingsDialog);
