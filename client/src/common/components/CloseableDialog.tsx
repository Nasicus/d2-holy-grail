import * as React from "react";
import { createStyles, WithStyles, Theme, withStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Icon from "@material-ui/core/Icon/Icon";

export interface ISettingsDialogProps {
  onDialogClosed: () => any;
  title: string;
  actions?: () => JSX.Element;
  className?: string;
}

type Props = ISettingsDialogProps & WithStyles<typeof styles>;

const CloseableDialogInternal: React.SFC<Props> = props => {
  return (
    <Dialog open={true} onClose={() => props.onDialogClosed()}>
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <div className={props.className}>
          <Icon className={props.classes.closeIcon} onClick={() => props.onDialogClosed()}>
            close
          </Icon>
          {props.children}
        </div>
      </DialogContent>
      {props.actions && <DialogActions>{props.actions()}</DialogActions>}
    </Dialog>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    closeIcon: {
      position: "absolute",
      top: theme.spacing.unit,
      right: theme.spacing.unit,
      cursor: "pointer"
    }
  });

export const CloseableDialog = withStyles(styles)(CloseableDialogInternal);
