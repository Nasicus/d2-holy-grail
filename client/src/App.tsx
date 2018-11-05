import * as React from "react";
import { Theme, WithStyles, createStyles, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import withRoot, { IWithRootPassDownProps } from "./withRoot";
import { Route, Switch } from "react-router-dom";
import GrailArea from "./areas/grail/GrailArea";
import { Home } from "./areas/home/Home";
import { GithubRibbon } from "./common/components/GithubRibbon";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily
    },
    header: {
      maxWidth: 700,
      margin: "auto",
      textAlign: "center",
      paddingTop: theme.spacing.unit * 4
    },
    content: {
      paddingTop: theme.spacing.unit * 6
    }
  });

interface IAppState {
  isEthMode?: boolean;
}

export interface IPassDownAppProps {
  onGrailModeChange: (isEth: boolean) => void;
}

type Props = WithStyles<typeof styles> & IWithRootPassDownProps;

class App extends React.Component<Props, IAppState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private onGrailModeChange = (isEthMode: boolean) => {
    if (this.state.isEthMode !== isEthMode) {
      this.setState({ isEthMode });
      this.props.onGrailModeChange(isEthMode);
    }
  };

  public render() {
    const passDownProps = { onGrailModeChange: this.onGrailModeChange } as IPassDownAppProps;
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.header}>
          <Typography variant="h5">
            {this.state.isEthMode ? "Diablo II - Eth Grail" : "Diablo II - Holy Grail"}
          </Typography>
        </div>
        <GithubRibbon url="https://github.com/Nasicus/d2-holy-grail" />
        <div className={this.props.classes.content}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/:address/:grailMode?" render={props => <GrailArea {...props as any} {...passDownProps} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
