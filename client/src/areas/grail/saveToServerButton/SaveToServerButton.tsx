import * as React from "react";
import { HolyGrailDataManager } from "../HolyGrailDataManager";
import { StyleRulesCallback } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import ButtonWithProgress from "../../../common/components/ButtonWithProgress";
import { Subscription } from "rxjs";

export interface IServerSaverState {
  isSaving?: boolean;
  isEnabled?: boolean;
  showSecondIcon?: boolean;
}

type ClassesType = "button";

const styles: StyleRulesCallback<ClassesType> = theme => ({
  button: {
    position: "fixed",
    right: theme.spacing.unit,
    bottom: theme.spacing.unit
  }
});

type Props = WithStyles<ClassesType>;

class SaveToServerButton extends React.Component<Props, IServerSaverState> {
  private secondIconTimeoutHandler: any;
  private localChangesSubscription: Subscription;

  public constructor(props: Props) {
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
      <div className={this.props.classes.button}>
        <ButtonWithProgress
          onButtonClick={() => this.onSaveButtonClick()}
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

export default withStyles(styles)<{}>(SaveToServerButton);
