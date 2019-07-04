import * as React from "react";
import { LeaderboardManager } from "../LeaderboardManager";
import { Subscription } from "rxjs";
import { ErrorNotification } from "../../../common/components/ErrorNotification";
import * as Mousetrap from "mousetrap";
import { ButtonWithProgress } from "../../../common/components/ButtonWithProgress";
require("mousetrap-global-bind");

export interface ILeaderboardToServerSaverProps {
  text?: string;
  registerShortCut?: boolean;
}

interface ILeaderboardToServerSaverState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
  error?: string;
}

export class LeaderboardToServerSaver extends React.Component<
  ILeaderboardToServerSaverProps,
  ILeaderboardToServerSaverState
> {
  private secondIconTimeoutHandler: any;
  private localChangesSubscription: Subscription;

  public constructor(props: ILeaderboardToServerSaverProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    this.localChangesSubscription = LeaderboardManager.current.hasLocalChanges$.subscribe(
      hasChanges => this.setState({ isEnabled: hasChanges })
    );
  }

  public componentDidMount(): void {
    if (this.props.registerShortCut) {
      Mousetrap.bindGlobal(["command+s", "ctrl+s"], () => {
        this.onSaveButtonClick();
        return false;
      });
    }
  }

  public componentWillUnmount() {
    if (this.localChangesSubscription) {
      this.localChangesSubscription.unsubscribe();
    }

    if (this.props.registerShortCut) {
      Mousetrap.unbind(["command+s", "ctrl+s"]);
    }
  }

  private onSaveButtonClick = () => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isSaving: true });
    LeaderboardManager.current
      .updateUserlistOnServer()
      .subscribe(this.onSaveSuccessful, error =>
        this.setState({
          showSecondIcon: false,
          isSaving: false,
          error:
            error.status === 401
              ? "Access denied! You are not allowed to save data for this leaderboard! Are you sure your password is correct? Try to log out and log in again!"
              : "An error occurred while trying to save your leaderboard data on the server."
        })
      );
  };

  private onSaveSuccessful = () => {
    this.setState({ showSecondIcon: true, isSaving: false });
    LeaderboardManager.current.refreshData();
    clearTimeout(this.secondIconTimeoutHandler);
    this.secondIconTimeoutHandler = setTimeout(
      () => this.setState({ showSecondIcon: false }),
      5000
    );
  };

  private renderError() {
    return (
      <ErrorNotification
        error={this.state.error}
        onDismiss={() => this.setState({ error: null })}
      />
    );
  }

  public render() {
    if (LeaderboardManager.current.isReadOnly) {
      return null;
    }

    return (
      <div>
        {this.state.error && this.renderError()}
        <ButtonWithProgress
          onClick={() => this.onSaveButtonClick()}
          isLoading={this.state.isSaving}
          showSecondIcon={this.state.showSecondIcon}
          isDisabled={!this.state.isEnabled}
          text={this.props.text || "Save to server"}
          firstIcon="save"
          secondIcon="check"
        />
      </div>
    );
  }
}
