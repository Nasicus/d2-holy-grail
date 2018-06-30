import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import * as React from "react";

export interface IButtonWithProgressProps {
  title?: string;
  content?: string;
  buttonOk?: string;
  buttonCancel?: string;
  onClose: (isOk?: boolean) => any;
}

const ConfirmDialog: React.SFC<IButtonWithProgressProps> = props => {
  return (
    <Dialog
      open={true}
      onClose={() => props.onClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {props.title && <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>}
      {props.content && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{props.content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={() => props.onClose(false)} color="primary">
          {props.buttonCancel || "Cancel"}
        </Button>
        <Button onClick={() => props.onClose(true)} color="primary" autoFocus={true}>
          {props.buttonOk || "Ok"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
