import * as React from "react";
import { Theme, WithStyles, createStyles, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import withRoot from "./withRoot";
import { Route, Switch } from "react-router-dom";
import GrailArea from "./areas/grail/GrailArea";
import { Home } from "./areas/home/Home";

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

class App extends React.Component<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.header}>
          <Typography variant="headline">Diablo II - Holy Grail</Typography>
        </div>
        <div className={this.props.classes.content}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/:address" component={GrailArea} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
