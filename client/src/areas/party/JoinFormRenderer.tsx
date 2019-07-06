import * as React from "react";
import TextField, {
  TextFieldProps
} from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import {
  ButtonWithProgress,
  IButtonWithProgressProps
} from "../../common/components/ButtonWithProgress";
import styled from "styled-components";
import { PartyManager } from "./PartyManager";

export interface IJoinInfo {
  address?: string;
  password?: string;
  join_address?: string;
}

interface IJoinFormState extends IJoinInfo {
  doLogin?: boolean;
  renderRegisterDialog?: boolean;
  isLoading?: boolean;
  error?: string;
  success?: boolean;
  joinButtonText: string;
}

export class JoinFormRenderer extends React.Component<{}, IJoinFormState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      joinButtonText: "Party please!"
    };
  }

  public render() {
    return (
      <RootContainer>
        <Typography variant="h6">Enter your holygrail info to join</Typography>
        <FormContainer>
          <div>
            <StyledTextField
              label="Holy Grail address"
              onChange={e => this.handleAddressChange(e)}
              onKeyPress={e => this.onKeyPress(e)}
            />
          </div>
        </FormContainer>

        <JoinButtonContainer>
          {this.state.error && (
            <ErrorContainer>{this.state.error}</ErrorContainer>
          )}
          <JoinButtonWithProgressWrapper
            isLoading={this.state.isLoading}
            isDisabled={!this.state.join_address}
            onClick={this.join}
            text={this.state.joinButtonText}
            secondIcon="check"
            showSecondIcon={this.state.success}
          />
        </JoinButtonContainer>
      </RootContainer>
    );
  }

  private handleAddressChange = (e: any) => {
    this.setState({ join_address: e.target.value });
    if (this.state.success) {
      // We just successfully saved, so reset the button state on new grail address
      this.resetJoinButtonState();
    }
  };

  private resetJoinButtonState = () => {
    this.setState({
      isLoading: false,
      joinButtonText: "Party please!",
      success: false
    });
  };

  private onKeyPress = (e: any) => {
    if (e.key !== "Enter") {
      return;
    }
    this.join();
  };

  private join = () => {
    if (!this.state.join_address) {
      return;
    }

    this.setState({ isLoading: true });

    PartyManager.current.signupUserToParty(this.state.join_address).subscribe(
      r => {
        this.setState({
          isLoading: false,
          success: true,
          joinButtonText: "Partied!"
        });
        PartyManager.current.refreshData().subscribe();
      },
      res => {
        if (res.status === 404) {
          this.setState({
            isLoading: false,
            error: "No grail exists with this username."
          });
        } else if (res.status === 409) {
          this.setState({
            isLoading: false,
            error:
              "There is already a grail with this username signed up to the party.\n If you are not shown on the party yet, contact the owner of the party to become an accepted user."
          });
        } else {
          this.setState({
            isLoading: false,
            error: "An error occurred when trying to validate your password."
          });
        }
      }
    );
  };
}

const RootContainer = styled.div`
  width: 350px;
  margin: auto;
`;

const StyledTextField: React.ComponentType<TextFieldProps> = styled(TextField)`
  && {
    width: 300px;
    margin-top: ${p => p.theme.spacing(1) * 2}px;
  }
` as any;

const JoinButtonContainer = styled.div`
  margin-left: 0;
`;

const JoinButtonWithProgressWrapper: React.ComponentType<
  IButtonWithProgressProps
> = styled(ButtonWithProgress)`
  && {
    & > div {
      margin-left: 0;
    }
  }
`;

const FormContainer = styled.div`
  text-align: left;
`;

const ErrorContainer = styled.div`
  color: ${p => p.theme.palette.error.main};
`;
