import * as React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import { Route, Switch } from "react-router-dom";
import { Home } from "./areas/home/Home";
import { GithubRibbon } from "./common/components/GithubRibbon";
import { GrailMode } from "./areas/grail/GrailMode";
import { GrailArea } from "./areas/grail/GrailArea";
import { IWithRootPassDownProps, withRoot } from "./withRoot";

export interface IPassDownAppProps {
  onGrailModeChange: (grailMode: GrailMode) => void;
}

type Props = WithStyles<typeof styles> & IWithRootPassDownProps;

interface IAppState {
  grailMode?: GrailMode;
}

class AppInternal extends React.Component<Props, IAppState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private onGrailModeChange = (grailMode: GrailMode) => {
    if (this.state.grailMode !== grailMode) {
      this.setState({ grailMode });
      this.props.onGrailModeChange(grailMode);
    }
  };

  private getAppTitle() {
    switch (this.state.grailMode) {
      case GrailMode.Eth:
        return "Diablo II - Eth Grail";
      case GrailMode.Runeword:
        return "Diablo II - Runeword Grail";
      default:
        return "Diablo II - Holy Grail";
    }
  }

  public render() {
    const passDownProps = { onGrailModeChange: this.onGrailModeChange } as IPassDownAppProps;
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.header}>
          <Typography variant="h5">{this.getAppTitle()}</Typography>
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

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily
    },
    header: {
      maxWidth: 700,
      margin: "auto",
      textAlign: "center",
      paddingTop: theme.spacing.unit * 2
    },
    content: {
      paddingTop: theme.spacing.unit * 6
    }
  });

export const App = withRoot(withStyles(styles)(AppInternal));
