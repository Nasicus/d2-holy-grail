import * as React from "react";
import { Checkbox } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import { GrailManager } from "../GrailManager";
import { IGrailSettings } from "../../../common/definitions/union/IGrailSettings";
import { SettingsToServerSaver } from "./clickable-components/SettingsToServerSaver";
import { CloseableDialog } from "../../../common/components/CloseableDialog";
import { ISettingsDialogProps } from "./SettingsDialog";
import styled from "../../../TypedStyledComponents";

export interface ISettingsDialogProps {
  onDialogClosed: (wasUpdated: boolean) => any;
}

interface ISettingsDialogState {
  settings?: IGrailSettings;
  wasSaved?: boolean;
}

export class SettingsDialog extends React.Component<ISettingsDialogProps, ISettingsDialogState> {
  public constructor(props: ISettingsDialogProps) {
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
        <DialogContainer>
          <SettingsEntryContainer>
            <div>
              <Checkbox
                checked={GrailManager.current.settings.useItemCountMode}
                onChange={event => this.onItemCountModeChange(event)}
                value="Use counter instead of checkbox for items"
              />
            </div>
            <div>Use counters instead of checkboxes for items (you can switch between the modes without data loss)</div>
          </SettingsEntryContainer>
        </DialogContainer>
      </CloseableDialog>
    );
  }

  private onItemCountModeChange = (event: any) => {
    GrailManager.current.settings.useItemCountMode = event.target.checked;
    GrailManager.current.updateGrailCache();
    this.setState({ settings: GrailManager.current.settings, wasSaved: true });
  };
}

const DialogContainer = styled.div`
  font-family: ${p => p.theme.typography.fontFamily};
`;

const SettingsEntryContainer = styled.div`
  display: flex;
  align-items: center;
`;
