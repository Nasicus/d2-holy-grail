import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import * as React from "react";

export interface IChoiceDialogButton {
  text: string;
  value: any;
}

export interface IChoiceDialogProps {
  title?: string;
  content?: string;
  buttons?: IChoiceDialogButton[];
  onClose: (value?: any) => any;
}

export const createDefaultConfirmButtons = (okText?: string, cancelText?: string): IChoiceDialogButton[] => [
  { text: okText || "Ok", value: true },
  { text: cancelText || "Cancel", value: false }
];

const ChoiceDialog: React.SFC<IChoiceDialogProps> = props => {
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
        {(props.buttons || createDefaultConfirmButtons()).reverse().map((button, index) => (
          <Button key={index} onClick={() => props.onClose(button.value)} color="primary" autoFocus={index === 0}>
            {button.text}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ChoiceDialog;
