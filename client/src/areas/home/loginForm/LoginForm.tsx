import * as React from "react";
import { Button, StyleRulesCallback, WithStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TextField from "@material-ui/core/TextField/TextField";
import { Redirect } from "react-router";
import { LocationDescriptorObject } from "history";
import Typography from "@material-ui/core/Typography/Typography";
import RegisterFormDialog from "../registerForm/RegisterFormDialog";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon/Icon";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Paper from "@material-ui/core/Paper/Paper";

export interface ILoginInfo {
  address?: string;
  password?: string;
  keepLoggedIn?: boolean;
}

interface ILoginFormState extends ILoginInfo {
  doLogin?: boolean;
  renderRegisterDialog?: boolean;
}

type ClassesType = "textField" | "button" | "createInfo" | "createInfoLink" | "root" | "formValues";
type Props = WithStyles<ClassesType>;

const styles: StyleRulesCallback<ClassesType> = theme => ({
  root: {
    width: 350,
    margin: "auto"
  },
  textField: {
    width: 300,
    marginTop: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  createInfo: {
    width: 300,
    margin: "auto",
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit
  },
  createInfoLink: {
    marginTop: theme.spacing.unit
  },
  formValues: {
    textAlign: "left"
  }
});

class LoginForm extends React.Component<Props, ILoginFormState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private login = () => {
    if (!this.state.address) {
      return;
    }

    this.setState({ doLogin: true });
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

    if (this.state.renderRegisterDialog) {
      return <RegisterFormDialog onDialogClosed={loginInfo => this.onRegisterDialogClosed(loginInfo)} />;
    }

    return (
      <div className={this.props.classes.root}>
        <Typography variant={"title"}>Login</Typography>
        <div className={this.props.classes.formValues}>
          <div>
            <TextField
              className={this.props.classes.textField}
              label="Holy Grail address"
              onChange={e => this.setState({ address: e.target.value })}
              onKeyPress={e => this.onKeyPress(e)}
            />
          </div>
          <div>
            <TextField
              className={this.props.classes.textField}
              type="password"
              label="Optional: Password"
              onChange={e => this.setState({ password: e.target.value })}
              onKeyPress={e => this.onKeyPress(e)}
            />
            <Tooltip
              title="You only have to enter a password if you want to edit the Holy Grail.
            You can also leave this blank and view the Holy Grail in a read-only mode!"
            >
              <Icon>info</Icon>
            </Tooltip>
          </div>
          <div>
            {this.state.password && (
              <div>
                <Checkbox onChange={e => this.setState({ keepLoggedIn: e.target.checked })} /> Keep me logged in
              </div>
            )}
          </div>
        </div>
        <Button className={this.props.classes.button} disabled={!this.state.address} onClick={this.login}>
          {this.state.password ? "Login" : "View"}
        </Button>
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

export default withStyles(styles)<{}>(LoginForm);
