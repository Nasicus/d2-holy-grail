import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { Subscription } from "rxjs";
import { GrailMode } from "../../GrailMode";
import { ImportDialog } from "../ImportDialog";
import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";

interface IImportListItemState {
  isSaving?: boolean;
  showDialog?: boolean;
  hasChanges?: boolean;
}

export class ImportListItem extends React.Component<{}, IImportListItemState> {
  private localChangesSubscription: Subscription;

  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    this.localChangesSubscription = GrailManager.current.hasLocalChanges$.subscribe(
      hasChanges => this.setState({ hasChanges })
    );
  }

  public componentWillUnmount() {
    if (this.localChangesSubscription) {
      this.localChangesSubscription.unsubscribe();
    }
  }

  public render() {
    if (
      GrailManager.current.isReadOnly ||
      GrailManager.current.grailMode !== GrailMode.Holy
    ) {
      return null;
    }

    return (
      <div>
        <ListItemWithProgress
          onClick={() => this.onImportButtonClick()}
          isDisabled={this.state.hasChanges}
          primaryText="Import from CSV"
          firstIcon="backup"
        />
        {this.state.showDialog && (
          <ImportDialog
            onDialogClosed={() => this.setState({ showDialog: false })}
          />
        )}
      </div>
    );
  }

  private onImportButtonClick = () => {
    this.setState({ showDialog: true });
  };
}
