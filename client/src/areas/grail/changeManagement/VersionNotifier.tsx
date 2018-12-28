import * as React from "react";
import { Button, Icon, IconButton, Snackbar } from "@material-ui/core";
import { VersionManager } from "./VersionManager";
import { ChangelogDialog } from "./ChangelogDialog";
import styled from "src/TypedStyledComponents";
import { IconButtonProps } from "@material-ui/core/IconButton";

interface IVersionNotifierState {
  showNotification?: boolean;
  showChangelog?: boolean;
}

export class VersionNotifier extends React.Component<{}, IVersionNotifierState> {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const versionManager = VersionManager.initialize();
    this.setState({
      showNotification: versionManager.hasNewVersion && versionManager.hasNewChangeLog
    });
  }

  private handleClose = () => {
    VersionManager.upgradeStorage();
    this.setState({ showNotification: false });
  };

  private showChangeLog = () => {
    VersionManager.upgradeStorage();
    this.setState({ showNotification: false, showChangelog: true });
  };

  public render() {
    if (this.state.showChangelog) {
      return <ChangelogDialog onClose={() => this.setState({ showChangelog: false })} />;
    }

    if (!this.state.showNotification) {
      return null;
    }

    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={true}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {!VersionManager.current.hasStoredVersion
              ? "Current version "
              : `Upgraded version from ${VersionManager.current.storedVersion} to `}
            {VersionManager.currentVersion}
          </span>
        }
        action={[
          <Button key="undo" color="secondary" size="small" onClick={this.showChangeLog}>
            Show changes
          </Button>,
          <CloseButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
            <Icon>close</Icon>
          </CloseButton>
        ]}
      />
    );
  }
}

const CloseButton: React.ComponentType<IconButtonProps> = styled(IconButton)`
  && {
    padding: ${p => p.theme.spacing.unit / 2}px;
  }
`;
