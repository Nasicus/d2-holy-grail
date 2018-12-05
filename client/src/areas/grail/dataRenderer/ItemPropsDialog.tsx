import * as React from "react";
import { Item } from "../../../common/definitions/union/Item";
import CloseableDialog from "../../../common/components/CloseableDialog";
import { GrailManager } from "../GrailManager";
import { TextField, Button, WithStyles, withStyles, createStyles, Theme, Checkbox, Icon } from "@material-ui/core";

export interface IItemPropsDialogProps {
  item: Item;
  itemName: string;
  onDialogClosed: (changedProps: { itemNote: string; isPerfect: boolean }) => any;
}

export interface IItemPropsDialogState {
  itemNote: string;
  isPerfect: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    textArea: {
      minWidth: "550px",
      fontFamily: theme.typography.fontFamily
    },
    readOnlyContent: {
      minWidth: "550px",
      fontFamily: theme.typography.fontFamily
    },
    readOnlyNotesContainer: {
      whiteSpace: "pre-line"
    },
    readOnlyNotesTitle: {
      paddingBottom: theme.spacing.unit * 2
    },
    readOnlyPerfectContainer: {
      display: "flex",
      alignItems: "center",
      paddingBottom: theme.spacing.unit * 4
    },
    perfectCheckbox: {
      paddingLeft: 0
    },
    isPerfectContainer: {
      display: "flex",
      alignItems: "center"
    }
  });

type Props = IItemPropsDialogProps & WithStyles<typeof styles>;

class ItemPropsDialogComponent extends React.PureComponent<Props, IItemPropsDialogState> {
  public constructor(props: Props) {
    super(props);
    this.state = { itemNote: props.item.note, isPerfect: props.item.isPerfect };
  }

  private closeDialog = (passbackChanges: boolean) => {
    this.props.onDialogClosed(
      passbackChanges ? { itemNote: this.state.itemNote, isPerfect: this.state.isPerfect } : null
    );
  };

  private renderContent() {
    if (GrailManager.current.isReadOnly) {
      return (
        <>
          {this.state.isPerfect && (
            <div className={this.props.classes.readOnlyPerfectContainer}>
              <Icon>star</Icon> This item is perfect! <Icon>star</Icon>
            </div>
          )}
          <div className={this.props.classes.readOnlyNotesContainer}>
            {this.state.itemNote && this.state.isPerfect && (
              <div className={this.props.classes.readOnlyNotesTitle}>Notes:</div>
            )}
            {this.state.itemNote || (!this.state.isPerfect && "No notes for this item.")}
          </div>
        </>
      );
    }

    return (
      <>
        <div className={this.props.classes.isPerfectContainer}>
          <Checkbox
            className={this.props.classes.perfectCheckbox}
            checked={this.state.isPerfect}
            onChange={e => this.setState({ isPerfect: e.target.checked })}
          />
          <span>Is perfect</span>
        </div>
        <TextField
          className={this.props.classes.textArea}
          value={this.state.itemNote}
          onChange={e => this.setState({ itemNote: e.target.value })}
          multiline={true}
          placeholder="Enter your notes about this item..."
        />
      </>
    );
  }

  public render() {
    return (
      <CloseableDialog
        title={this.props.itemName}
        onDialogClosed={() => this.closeDialog(false)}
        actions={() => (
          <>
            {!GrailManager.current.isReadOnly && (
              <>
                <Button onClick={() => this.closeDialog(true)}>Ok</Button>
                <Button onClick={() => this.closeDialog(false)}>Cancel</Button>
              </>
            )}
          </>
        )}
      >
        <div className={this.props.classes.readOnlyContent}>{this.renderContent()}</div>
      </CloseableDialog>
    );
  }
}

export const ItemPropsDialog = withStyles(styles)(ItemPropsDialogComponent);
