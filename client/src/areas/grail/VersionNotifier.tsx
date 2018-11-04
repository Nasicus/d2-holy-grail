import * as React from "react";
import { Button, createStyles, Icon, IconButton, Snackbar, Theme, withStyles, WithStyles } from "@material-ui/core";
import { VersionManager } from "./VersionManager";
import { ChangelogDialog } from "./ChangelogDialog";

export interface IVersionNotifierState {
  showNotification?: boolean;
  showChangelog?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing.unit / 2
    }
  });

type Props = WithStyles<typeof styles>;

class VersionNotifier extends React.Component<Props, IVersionNotifierState> {
  public constructor(props: Props) {
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
    VersionManager.current.upgradeStorage();
    this.setState({ showNotification: false });
  };

  private showChangeLog = () => {
    VersionManager.current.upgradeStorage();
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
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={this.props.classes.close}
            onClick={this.handleClose}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    );
  }
}

export default withStyles(styles)(VersionNotifier);
