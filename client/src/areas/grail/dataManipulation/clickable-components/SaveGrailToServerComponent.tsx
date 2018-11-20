import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import { Subscription } from "rxjs";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";
import { ErrorNotification } from "../../../../common/components/ErrorNotification";

export interface IServerSaveButtonState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
  error?: string;
}

export interface IServerSaveButtonProps {
  renderAsListItem?: boolean;
}

class SaveGrailToServerComponent extends React.Component<IServerSaveButtonProps, IServerSaveButtonState> {
  private secondIconTimeoutHandler: any;
  private localChangesSubscription: Subscription;

  public constructor(props: IServerSaveButtonProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    this.localChangesSubscription = HolyGrailDataManager.current.hasLocalChanges$.subscribe(hasChanges =>
      this.setState({ isEnabled: hasChanges })
    );
  }

  public componentWillUnmount() {
    if (this.localChangesSubscription) {
      this.localChangesSubscription.unsubscribe();
    }
  }

  private onSaveButtonClick = () => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isSaving: true });
    HolyGrailDataManager.current.saveGrailToServer().subscribe(this.onSaveSuccessful, error =>
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
    this.secondIconTimeoutHandler = setTimeout(() => this.setState({ showSecondIcon: false }), 5000);
  };

  private renderError() {
    return <ErrorNotification error={this.state.error} onDismiss={() => this.setState({ error: null })} />;
  }

  public render() {
    if (HolyGrailDataManager.current.isReadOnly) {
      return null;
    }

    if (this.props.renderAsListItem) {
      return (
        <>
          {this.state.error && this.renderError()}
          <ListItemWithProgress
            onClick={() => this.onSaveButtonClick()}
            firstIcon="save"
            secondIcon="check"
            showSecondIcon={this.state.showSecondIcon}
            primaryText={"Save to server"}
            isDisabled={!this.state.isEnabled}
            isLoading={this.state.isSaving}
          />
        </>
      );
    }

    return (
      <div>
        {this.state.error && this.renderError()}
        <ButtonWithProgress
          onClick={() => this.onSaveButtonClick()}
          isLoading={this.state.isSaving}
          showSecondIcon={this.state.showSecondIcon}
          isDisabled={!this.state.isEnabled}
          text="Save to server"
          firstIcon="save"
          secondIcon="check"
        />
      </div>
    );
  }
}

export default SaveGrailToServerComponent;
