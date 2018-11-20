import * as React from "react";
import { Button, Theme, WithStyles, createStyles, withStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";
import { Redirect } from "react-router";
import { LocationDescriptorObject } from "history";
import Typography from "@material-ui/core/Typography/Typography";
import RegisterFormDialog from "../registerForm/RegisterFormDialog";
import Icon from "@material-ui/core/Icon/Icon";
import Paper from "@material-ui/core/Paper/Paper";
import { Api } from "../../../common/utils/Api";
import ButtonWithProgress from "../../../common/components/ButtonWithProgress";

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

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 350,
      margin: "auto"
    },
    textField: {
      width: 300,
      marginTop: theme.spacing.unit * 2
    },
    loginButtonContainer: {
      marginLeft: 0
    },
    loginButtonWithProgressWrapper: {
      "& > div": {
        marginLeft: 0
      }
    },
    createInfo: {
      width: 300,
      margin: "auto",
      marginTop: theme.spacing.unit * 4,
      padding: theme.spacing.unit,
      textAlign: "center"
    },
    createInfoLink: {
      marginTop: theme.spacing.unit
    },
    formValues: {
      textAlign: "left"
    },
    passwordRow: {
      display: "flex"
    },
    infoIcon: {
      alignSelf: "center"
    },
    error: {
      color: theme.palette.error.main
    },
    keepMeLoggedInBox: {
      paddingLeft: 0
    }
  });

type Props = WithStyles<typeof styles>;

class LoginForm extends React.Component<Props, ILoginFormState> {
  public constructor(props: Props) {
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
      <div className={this.props.classes.root}>
        {this.state.renderRegisterDialog && (
          <RegisterFormDialog onDialogClosed={(loginInfo: ILoginInfo) => this.onRegisterDialogClosed(loginInfo)} />
        )}
        <Typography variant="h6">Login</Typography>
        <div className={this.props.classes.formValues}>
          <div>
            <TextField
              className={this.props.classes.textField}
              label="Holy Grail address"
              onChange={e => this.setState({ address: e.target.value })}
              onKeyPress={e => this.onKeyPress(e)}
            />
          </div>
          <div className={this.props.classes.passwordRow}>
            <TextField
              className={this.props.classes.textField}
              type="password"
              label="Optional: Password"
              onChange={e => this.setState({ password: e.target.value })}
              onKeyPress={e => this.onKeyPress(e)}
            />
            <Icon
              className={this.props.classes.infoIcon}
              title="You only have to enter a password if you want to edit the Holy Grail. You can also leave this blank and view the Holy Grail in a read-only mode!"
            >
              info
            </Icon>
          </div>
          <div>
            {this.state.password && (
              <div>
                <Checkbox
                  onChange={e => this.setState({ keepLoggedIn: e.target.checked })}
                  className={this.props.classes.keepMeLoggedInBox}
                />{" "}
                Keep me logged in
              </div>
            )}
          </div>
        </div>

        <div className={this.props.classes.loginButtonContainer}>
          {this.state.error && <div className={this.props.classes.error}>{this.state.error}</div>}
          <ButtonWithProgress
            className={this.props.classes.loginButtonWithProgressWrapper}
            isLoading={this.state.isLoading}
            isDisabled={!this.state.address}
            onClick={this.login}
            text={this.state.password ? "Login" : "View"}
          />
        </div>
        <Paper className={this.props.classes.createInfo}>
          Don't have an own Holy Grail yet?
          <Button
            onClick={() => this.setState({ renderRegisterDialog: true })}
            className={this.props.classes.createInfoLink}
          >
            Create one!
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
