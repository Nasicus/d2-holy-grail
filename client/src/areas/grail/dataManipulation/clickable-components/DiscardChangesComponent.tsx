import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import { Subscription } from "rxjs";
import ChoiceDialog, { createDefaultConfirmButtons } from "../../../../common/components/ChoiceDialog";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";

export interface IDiscardChangesButtonState {
  isEnabled?: boolean;
  showConfirm?: boolean;
}

export interface IDiscardChangesButtonProps {
  renderAsListItem?: boolean;
  text?: string;
}

class DiscardChangesComponent extends React.Component<IDiscardChangesButtonProps, IDiscardChangesButtonState> {
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

    return (
      <div>
        <ChoiceDialog
          isOpen={!!this.state.showConfirm}
          content="Are you sure you want to discard all your local changes?"
          buttons={createDefaultConfirmButtons("Yes", "No")}
          onClose={this.onConfirmDialogClose}
        />
        {this.props.renderAsListItem && (
          <ListItemWithProgress
            onClick={() => this.setState({ showConfirm: true })}
            isDisabled={!this.state.isEnabled}
            primaryText={this.props.text || "Discard local changes"}
            firstIcon="cancel"
          />
        )}
        {!this.props.renderAsListItem && (
          <ButtonWithProgress
            onClick={() => this.setState({ showConfirm: true })}
            isDisabled={!this.state.isEnabled}
            text={this.props.text || "Discard local changes"}
            firstIcon="cancel"
          />
        )}
      </div>
    );
  }

  private onConfirmDialogClose = (ok?: boolean) => {
    if (ok) {
      HolyGrailDataManager.current.discardGrailCache();
      location.reload();
    }
    this.setState({ showConfirm: false });
  };
}

export default DiscardChangesComponent;
