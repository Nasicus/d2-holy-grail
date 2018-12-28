import * as React from "react";
import { Button } from "@material-ui/core";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox/Checkbox";
import TextField, { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { Redirect } from "react-router";
import { LocationDescriptorObject } from "history";
import Typography from "@material-ui/core/Typography/Typography";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import Paper, { PaperProps } from "@material-ui/core/Paper/Paper";
import { Api } from "../../common/utils/Api";
import { RegisterFormDialog } from "./RegisterFormDialog";
import { ButtonWithProgress, IButtonWithProgressProps } from "../../common/components/ButtonWithProgress";
import styled from "../../TypedStyledComponents";
import { ButtonProps } from "@material-ui/core/Button";

export interface ILoginInfo {
  address?: string;
  password?: string;
  keepLoggedIn?: boolean;
}

interface ILoginFormState extends ILoginInfo {
  doLogin?: boolean;
  renderRegisterDialog?: boolean;
  isLoading?: boolean;
  error?: string;
}

export class LoginForm extends React.Component<{}, ILoginFormState> {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  private login = () => {
    if (!this.state.address) {
      return;
    }

    if (!this.state.password) {
      this.setState({ doLogin: true });
      return;
    }

    this.setState({ isLoading: true });
    Api.validatePassword(this.state.address, this.state.password).subscribe(
      r => {
        if (r.data) {
          this.setState({ doLogin: true });
        } else {
          this.setState({ isLoading: false, error: "The entered password is not correct." });
        }
      },
      res => {
        if (res.status === 404) {
          // if we have a 404 just do a login, because it will be handled there
          this.setState({ doLogin: true });
        } else {
          this.setState({ isLoading: false, error: "An error occurred when trying to validate your password." });
        }
      }
    );
  };

  private onKeyPress = (e: any) => {
    if (e.key !== "Enter") {
      return;
    }

    this.login();
  };

  private onRegisterDialogClosed = (loginInfo: ILoginInfo) => {
    if (!loginInfo) {
      this.setState({ renderRegisterDialog: false });
    } else {
      this.setState({ ...loginInfo, doLogin: true, renderRegisterDialog: false });
    }
  };

  public render() {
    if (this.state.doLogin) {
      const to: LocationDescriptorObject = {
        pathname: `/${this.state.address}`,
        state: this.state as ILoginInfo
      };
      return <Redirect to={to} push={true} />;
    }

    return (
      <RootContainer>
        {this.state.renderRegisterDialog && (
          <RegisterFormDialog onDialogClosed={(loginInfo: ILoginInfo) => this.onRegisterDialogClosed(loginInfo)} />
        )}
        <Typography variant="h6">Login</Typography>
        <FormContainer>
          <div>
            <StyledTextField
              label="Holy Grail address"
              onChange={e => this.setState({ address: e.target.value })}
              onKeyPress={e => this.onKeyPress(e)}
            />
          </div>
          <PasswordContainer>
            <StyledTextField
              type="password"
              label="Optional: Password"
              onChange={e => this.setState({ password: e.target.value })}
              onKeyPress={e => this.onKeyPress(e)}
            />
            <InfoIcon title="You only have to enter a password if you want to edit the Holy Grail. You can also leave this blank and view the Holy Grail in a read-only mode!">
              info
            </InfoIcon>
          </PasswordContainer>
          <div>
            {this.state.password && (
              <div>
                <KeepMeLoggedInCheckbox onChange={e => this.setState({ keepLoggedIn: e.target.checked })} /> Keep me
                logged in
              </div>
            )}
          </div>
        </FormContainer>

        <LoginButtonContainer>
          {this.state.error && <ErrorContainer>{this.state.error}</ErrorContainer>}
          <LoginButtonWithProgressWrapper
            isLoading={this.state.isLoading}
            isDisabled={!this.state.address}
            onClick={this.login}
            text={this.state.password ? "Login" : "View"}
          />
        </LoginButtonContainer>
        <StyledPaper>
          Don't have an own Holy Grail yet?
          <CreateButton onClick={() => this.setState({ renderRegisterDialog: true })}>Create one!</CreateButton>
        </StyledPaper>
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  width: 350px;
  margin: auto;
`;

const StyledTextField: React.ComponentType<TextFieldProps> = styled(TextField)`
  && {
    width: 300px;
    margin-top: ${p => p.theme.spacing.unit * 2}px;
  }
` as any;

const LoginButtonContainer = styled.div`
  margin-left: 0;
`;

const LoginButtonWithProgressWrapper: React.ComponentType<IButtonWithProgressProps> = styled(ButtonWithProgress)`
  && {
    & > div {
      margin-left: 0;
    }
  }
`;

const StyledPaper: React.ComponentType<PaperProps> = styled(Paper)`
  && {
    width: 300px;
    margin: ${p => p.theme.spacing.unit * 4}px auto auto;
    padding: ${p => p.theme.spacing.unit}px;
    text-align: center;
  }
`;

const CreateButton: React.ComponentType<ButtonProps> = styled(Button)`
  && {
    margin-top: ${p => p.theme.spacing.unit}px;
  }
`;

const FormContainer = styled.div`
  text-align: left;
`;

const ErrorContainer = styled.div`
  color: ${p => p.theme.palette.error.main};
`;

const PasswordContainer = styled.div`
  display: flex;
`;

const InfoIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    align-self: center;
  }
`;

const KeepMeLoggedInCheckbox: React.ComponentType<CheckboxProps> = styled(Checkbox)`
  && {
    padding-left: 0;
  }
`;
