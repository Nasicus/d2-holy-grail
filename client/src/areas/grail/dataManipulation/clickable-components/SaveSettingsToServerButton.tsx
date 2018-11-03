import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";

export interface IServerSaveButtonState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
}

class SaveSettingsToServerButton extends React.Component<{}, IServerSaveButtonState> {
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
      <ButtonWithProgress
        isLoading={this.state.isSaving}
        onClick={() => this.onSaveButtonClick()}
        text="Save"
        isDisabled={!this.state.isEnabled}
        secondIcon="check"
        showSecondIcon={this.state.showSecondIcon}
      />
    );
  }

  private onSaveButtonClick = () => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isSaving: true });
    HolyGrailDataManager.current
      .saveSettingsToServer()
      .subscribe(this.onSaveSuccessful, () => this.setState({ showSecondIcon: false, isSaving: false }));
  };

  private onSaveSuccessful = () => {
    this.setState({ showSecondIcon: true, isSaving: false });

    // reset to the default icon (this should go together with the dismissing of a success message, once we have any)
    clearTimeout(this.secondIconTimeoutHandler);
    this.secondIconTimeoutHandler = setTimeout(() => this.setState({ showSecondIcon: false }), 500000);
  };
}

export default SaveSettingsToServerButton;
