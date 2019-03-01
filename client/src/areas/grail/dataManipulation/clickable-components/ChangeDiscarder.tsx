import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { Subscription } from "rxjs";
import {
  ChoiceDialog,
  createDefaultConfirmButtons
} from "../../../../common/components/ChoiceDialog";
import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";
import { ButtonWithProgress } from "../../../../common/components/ButtonWithProgress";

export interface IChangeDiscarderProps {
  renderAsListItem?: boolean;
  text?: string;
}

interface IChangeDiscarderState {
  isEnabled?: boolean;
  showConfirm?: boolean;
}

export class ChangeDiscarder extends React.Component<
  IChangeDiscarderProps,
  IChangeDiscarderState
> {
  private localChangesSubscription: Subscription;

  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    this.localChangesSubscription = GrailManager.current.hasLocalChanges$.subscribe(
      hasChanges => this.setState({ isEnabled: hasChanges })
    );
  }

  public componentWillUnmount() {
    if (this.localChangesSubscription) {
      this.localChangesSubscription.unsubscribe();
    }
  }

  public render() {
    if (GrailManager.current.isReadOnly) {
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
      GrailManager.current.discardGrailCache();
      location.reload();
    }
    this.setState({ showConfirm: false });
  };
}
