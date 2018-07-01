import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import ImportDialog from "../ImportDialog";
import { Subscription } from "rxjs";

export interface IImporterState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showDialog?: boolean;
  hasChanges?: boolean;
}

class ImportButton extends React.Component<{}, IImporterState> {
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
    if (HolyGrailDataManager.current.isReadOnly || (this.state.hasChanges && !this.state.showDialog)) {
      return null;
    }

    return (
      <div>
        <ButtonWithProgress
          onButtonClick={() => this.onImportButtonClick()}
          isLoading={false}
          showSecondIcon={false}
          isDisabled={!this.state.isEnabled}
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

export default ImportButton;
