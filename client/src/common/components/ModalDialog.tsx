import * as React from "react";
import { FC } from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

export interface IModalDialogProps {
  title: string;
  actions?: () => JSX.Element;
  className?: string;
}

export const ModalDialog: FC<IModalDialogProps> = props => {
  return (
    <Dialog open={true}>
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <div className={props.className}>{props.children}</div>
      </DialogContent>
      {props.actions && <DialogActions>{props.actions()}</DialogActions>}
    </Dialog>
  );
};
