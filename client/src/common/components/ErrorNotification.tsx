import * as React from "react";
import { Snackbar } from "@material-ui/core";
import { IErrorNotificationProps } from "./ErrorNotification";
import styled from "../../TypedStyledComponents";

export interface IErrorNotificationProps {
  error: string;
  onDismiss: () => any;
}

interface IErrorNotificationState {
  isOpen: boolean;
}

export class ErrorNotification extends React.PureComponent<
  IErrorNotificationProps,
  IErrorNotificationState
> {
  public constructor(props: IErrorNotificationProps) {
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
          <ErrorContainer id="message-id">{this.props.error}</ErrorContainer>
        }
      />
    );
  }
}

const ErrorContainer = styled.span`
  color: ${p => p.theme.palette.error.main};
`;
