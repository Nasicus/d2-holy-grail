import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { Subscription } from "rxjs";
import { ErrorNotification } from "../../../../common/components/ErrorNotification";
import * as Mousetrap from "mousetrap";
import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";
import { ButtonWithProgress } from "../../../../common/components/ButtonWithProgress";
require("mousetrap-global-bind");

export interface IGrailToServerSaverProps {
  renderAsListItem?: boolean;
  text?: string;
  token?: string;
  reload?: boolean;
  registerShortCut?: boolean;
}

interface IGrailToServerSaverState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
  error?: string;
}

export class GrailToServerSaver extends React.Component<
  IGrailToServerSaverProps,
  IGrailToServerSaverState
> {
  private secondIconTimeoutHandler: any;
  private localChangesSubscription: Subscription;

  public constructor(props: IGrailToServerSaverProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    this.localChangesSubscription = GrailManager.current.hasLocalChanges$.subscribe(
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
    GrailManager.current
      .saveGrailToServer(this.props.token)
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

    if (this.props.reload) {
      location.reload();
    }

    // reset to the default icon (this should go together with the dismissing of a success message, once we have any)
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
    if (GrailManager.current.isReadOnly) {
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
            primaryText={this.props.text || "Save to server"}
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
          text={this.props.text || "Save to server"}
          firstIcon="save"
          secondIcon="check"
        />
      </div>
    );
  }
}
