import * as React from "react";
import { HolyGrailDataManager } from "../HolyGrailDataManager";
import { dataManagerContext } from "../GrailArea";
import { StyleRulesCallback } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import ButtonWithProgress from "../../../common/components/ButtonWithProgress";

export interface IServerSaverState {
  isSaving?: boolean;
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

// todo: disable button when there are no locale changes
// we could already do this, however we are not notified if the "hasLocalChanges" flag changes...
class SaveToServerButton extends React.Component<Props, IServerSaverState> {
  private secondIconTimeoutHandler: any;

  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <dataManagerContext.Consumer>
        {dataManager => {
          if (dataManager.isReadOnly) {
            return null;
          }

          return (
            <div className={this.props.classes.button}>
              <ButtonWithProgress
                onButtonClick={() => this.onSaveButtonClick(dataManager)}
                isLoading={this.state.isSaving}
                showSecondIcon={this.state.showSecondIcon}
                text="Save to server"
                firstIcon="save"
                secondIcon="check"
              />
            </div>
          );
        }}
      </dataManagerContext.Consumer>
    );
  }

  private onSaveButtonClick = (dataManager: HolyGrailDataManager) => {
    clearTimeout(this.secondIconTimeoutHandler);
    this.setState({ showSecondIcon: false, isSaving: true });
    dataManager
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
