import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ImportDialog from "../ImportDialog";
import { Subscription } from "rxjs";
import MenuListItem from "../../../../common/components/ListItemWithProgress";

export interface IImportListItemState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showDialog?: boolean;
  hasChanges?: boolean;
}

class ImportListItem extends React.Component<{}, IImportListItemState> {
  private localChangesSubscription: Subscription;

  public constructor(props: {}) {
    super(props);
    this.state = { isEnabled: true };
  }

  public componentWillMount() {
    this.localChangesSubscription = HolyGrailDataManager.current.hasLocalChanges$.subscribe(hasChanges =>
      this.setState({ hasChanges })
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
        <MenuListItem
          onClick={() => this.onImportButtonClick()}
          isDisabled={!this.state.isEnabled || this.state.hasChanges}
          text="Import from CSV"
          firstIcon="backup"
        />
        {this.state.showDialog && <ImportDialog onDialogClosed={() => this.setState({ showDialog: false })} />}
      </div>
    );
  }

  private onImportButtonClick = () => {
    this.setState({ showDialog: true });
  };
}

export default ImportListItem;
