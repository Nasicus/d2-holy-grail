import * as React from "react";
import { createStyles, WithStyles, Theme, withStyles, Snackbar } from "@material-ui/core";

export interface IErrorNotificationProps {
  error: string;
  onDismiss: () => any;
}

type Props = IErrorNotificationProps & WithStyles<typeof styles>;

interface IErrorNotificationState {
  isOpen: boolean;
}

class ErrorNotificationInternal extends React.PureComponent<Props, IErrorNotificationState> {
  public constructor(props: Props) {
    super(props);
    this.state = { isOpen: true };
  }

  private handleClose = () => {
    this.setState({ isOpen: false });
    this.props.onDismiss();
  };

  public render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={this.state.isOpen}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id" className={this.props.classes.message}>
            {this.props.error}
          </span>
        }
      />
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    message: {
      color: theme.palette.error.main
    }
  });

export const ErrorNotification = withStyles(styles)(ErrorNotificationInternal);
