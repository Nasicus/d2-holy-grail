import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import { Subscription } from "rxjs";
import ConfirmDialog from "../../../../common/components/ConfirmDialog";

export interface IDiscardChangesButtonState {
  isEnabled?: boolean;
  showConfirm?: boolean;
}

class DiscardChangesButton extends React.Component<{}, IDiscardChangesButtonState> {
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
    return (
      <div>
        {this.state.showConfirm && (
          <ConfirmDialog
            content="Are you sure you want to discard all your local changes?"
            buttonOk="Yes"
            buttonCancel="No"
            onClose={this.onConfirmDialogClose}
          />
        )}
        <ButtonWithProgress
          onButtonClick={() => this.setState({ showConfirm: true })}
          isDisabled={!this.state.isEnabled}
          text="Discard local changes"
          firstIcon="cancel"
        />
      </div>
    );
  }

  private onConfirmDialogClose = (ok?: boolean) => {
    if (ok) {
      HolyGrailDataManager.current.discardCache();
      location.reload();
    }
    this.setState({ showConfirm: false });
  };
}

export default DiscardChangesButton;
