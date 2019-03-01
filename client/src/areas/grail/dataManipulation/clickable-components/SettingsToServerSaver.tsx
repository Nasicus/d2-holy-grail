import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { ErrorNotification } from "../../../../common/components/ErrorNotification";
import { ButtonWithProgress } from "../../../../common/components/ButtonWithProgress";

interface IServerSaveButtonState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
  error?: string;
}

export class SettingsToServerSaver extends React.Component<
  {},
  IServerSaveButtonState
> {
  private secondIconTimeoutHandler: any;

  public constructor(props: {}) {
    super(props);
    this.state = { isEnabled: true };
  }

  public componentWillUnmount() {
    clearTimeout(this.secondIconTimeoutHandler);
  }

  public render() {
    return (
      <>
        {this.state.error && (
          <div>
            <ErrorNotification
              error={this.state.error}
              onDismiss={() => this.setState({ error: null })}
            />
          </div>
        )}
        <ButtonWithProgress
          isLoading={this.state.isSaving}
          onClick={() => this.onSaveButtonClick()}
          text="Save"
          isDisabled={!this.state.isEnabled}
          secondIcon="check"
          showSecondIcon={this.state.showSecondIcon}
        />
      </>
    );
  }

  private onSaveButtonClick = () => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isSaving: true });
    GrailManager.current
      .saveSettingsToServer()
      .subscribe(this.onSaveSuccessful, error =>
        this.setState({
          showSecondIcon: false,
          isSaving: false,
          error:
            error.status === 401
              ? "Access denied! You are not allowed to save data for this grail! Are you sure your password is correct? Try to log out and log in again!"
              : "An error occurred while trying to save your grail data on the server."
        })
      );
  };

  private onSaveSuccessful = () => {
    this.setState({ showSecondIcon: true, isSaving: false });

    // reset to the default icon (this should go together with the dismissing of a success message, once we have any)
    clearTimeout(this.secondIconTimeoutHandler);
    this.secondIconTimeoutHandler = setTimeout(
      () => this.setState({ showSecondIcon: false }),
      500000
    );
  };
}
