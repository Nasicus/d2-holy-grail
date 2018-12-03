import * as React from "react";
import { Item } from "../../../common/definitions/union/Item";
import CloseableDialog from "../../../common/components/CloseableDialog";
import { GrailManager } from "../GrailManager";
import { TextField, Button, WithStyles, withStyles, createStyles, Theme } from "@material-ui/core";

export interface IItemPropsDialogProps {
  item: Item;
  itemName: string;
  onDialogClosed: (changedProps: { itemNote: string }) => any;
}

export interface IItemPropsDialogState {
  itemNote?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    textArea: {
      minWidth: "400px",
      fontFamily: theme.typography.fontFamily
    },
    readOnlyContainer: {
      minWidth: "400px",
      fontFamily: theme.typography.fontFamily,
      whiteSpace: "pre-line"
    }
  });

type Props = IItemPropsDialogProps & WithStyles<typeof styles>;

class ItemPropsDialogComponent extends React.PureComponent<Props, IItemPropsDialogState> {
  public constructor(props: Props) {
    super(props);
    this.state = { itemNote: props.item.note };
  }

  private closeDialog = (passbackChanges: boolean) => {
    this.props.onDialogClosed(passbackChanges ? { itemNote: this.state.itemNote } : null);
  };

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
        {GrailManager.current.isReadOnly ? (
          <div className={this.props.classes.readOnlyContainer}>{this.state.itemNote || "No notes for this item."}</div>
        ) : (
          <TextField
            className={this.props.classes.textArea}
            value={this.state.itemNote}
            onChange={e => this.setState({ itemNote: e.target.value })}
            multiline={true}
            placeholder="Enter your notes about this item..."
          />
        )}
      </CloseableDialog>
    );
  }
}

export const ItemPropsDialog = withStyles(styles)(ItemPropsDialogComponent);
