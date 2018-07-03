import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import { Subscription } from "rxjs";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";

export interface IServerSaveButtonState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
}

export interface IServerSaveButtonProps {
  renderAsListItem?: boolean;
}

class SaveToServerComponent extends React.Component<IServerSaveButtonProps, IServerSaveButtonState> {
  private secondIconTimeoutHandler: any;
  private localChangesSubscription: Subscription;

  public constructor(props: {}) {
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

  public render() {
    if (HolyGrailDataManager.current.isReadOnly) {
      return null;
    }

    if (this.props.renderAsListItem) {
      return (
        <ListItemWithProgress
          onClick={() => this.onSaveButtonClick()}
          firstIcon="save"
          secondIcon="check"
          showSecondIcon={this.state.showSecondIcon}
          text={"Save to server"}
          isDisabled={!this.state.isEnabled}
          isLoading={this.state.isSaving}
        />
      );
    }

    return (
      <div>
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

  private onSaveButtonClick = () => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isSaving: true });
    HolyGrailDataManager.current
      .updateServer()
      .subscribe(this.onSaveSuccessful, () => this.setState({ showSecondIcon: false, isSaving: false }));
  };

  private onSaveSuccessful = () => {
    this.setState({ showSecondIcon: true, isSaving: false });

    // reset to the default icon (this should go together with the dismissing of a success message, once we have any)
    clearTimeout(this.secondIconTimeoutHandler);
    this.secondIconTimeoutHandler = setTimeout(() => this.setState({ showSecondIcon: false }), 5000);
  };
}

export default SaveToServerComponent;
