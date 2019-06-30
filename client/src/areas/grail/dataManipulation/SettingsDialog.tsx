import * as React from "react";
import { Checkbox } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import { GrailManager } from "../GrailManager";
import { IGrailSettings } from "../../../common/definitions/union/IGrailSettings";
import { SettingsToServerSaver } from "./clickable-components/SettingsToServerSaver";
import { CloseableDialog } from "../../../common/components/CloseableDialog";
import { ISettingsDialogProps } from "./SettingsDialog";
import styled from "styled-components";

export interface ISettingsDialogProps {
  onDialogClosed: (wasUpdated: boolean) => any;
}

interface ISettingsDialogState {
  settings?: IGrailSettings;
  wasSaved?: boolean;
}

export class SettingsDialog extends React.Component<
  ISettingsDialogProps,
  ISettingsDialogState
> {
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
        <DialogContentText>
          You can change your settings here.
        </DialogContentText>
        <DialogContainer>
          <SettingsEntryContainer>
            <div>
              <Checkbox
                checked={GrailManager.current.settings.useItemCountMode}
                onChange={event => this.handleItemCountModeChange(event)}
              />
            </div>
            <div>
              Use counters instead of checkboxes for items (you can switch
              between the modes without data loss)
            </div>
          </SettingsEntryContainer>
          <SettingsEntryContainer>
            <div>
              <Checkbox
                checked={
                  GrailManager.current.settings.disableCustomSearchShortcut
                }
                onChange={event =>
                  this.handleDisableCustomSearchShortcut(event)
                }
              />
            </div>
            <div>
              Disable the custom <i>CTRL / COMMAND + F</i> function (which
              focuses on the searchbox) and use the built-in browser search
              function instead (page reload required).
            </div>
          </SettingsEntryContainer>
        </DialogContainer>
      </CloseableDialog>
    );
  }

  private handleItemCountModeChange = (event: any) => {
    GrailManager.current.settings.useItemCountMode = event.target.checked;
    this.updateSettings();
  };

  private handleDisableCustomSearchShortcut = (event: any) => {
    GrailManager.current.settings.disableCustomSearchShortcut =
      event.target.checked;
    this.updateSettings();
  };

  private updateSettings = () => {
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
