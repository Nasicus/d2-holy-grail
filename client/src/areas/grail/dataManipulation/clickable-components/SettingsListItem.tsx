import * as React from "react";
import { GrailManager } from "../../GrailManager";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";
import SettingsDialog from "../SettingsDialog";

export interface ISettingsListItemState {
  showDialog?: boolean;
}

export interface ISettingsListItemProps {
  onSettingsChanged: () => any;
}

export class SettingsListItem extends React.Component<ISettingsListItemProps, ISettingsListItemState> {
  public constructor(props: ISettingsListItemProps) {
    super(props);
    this.state = {};
  }

  public render() {
    if (GrailManager.current.isReadOnly) {
      return null;
    }

    return (
      <div>
        <ListItemWithProgress onClick={() => this.onClick()} primaryText="Settings" firstIcon="settings" />
        {this.state.showDialog && (
          <SettingsDialog
            onDialogClosed={wasUpdated => {
              this.setState({ showDialog: false });
              if (wasUpdated) {
                this.props.onSettingsChanged();
              }
            }}
          />
        )}
      </div>
    );
  }

  private onClick = () => {
    this.setState({ showDialog: true });
  };
}
