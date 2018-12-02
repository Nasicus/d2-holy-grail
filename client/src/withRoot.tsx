import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import brown from "@material-ui/core/colors/brown";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { BrowserRouter } from "react-router-dom";

const normalTheme: Theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple,
    secondary: green
  }
});

const ethTheme: Theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: brown,
    secondary: grey
  }
});

interface IWithRootState {
  isEthMode: boolean;
}

export interface IWithRootPassDownProps {
  onGrailModeChange: (isEthMode: boolean) => any;
}

function withRoot(Component: React.ComponentType) {
  return class extends React.Component<{}, IWithRootState> {
    public constructor(props: {}) {
      super(props);
      this.state = { isEthMode: false };
    }
    private onGrailModeChange = (isEthMode: boolean) => {
      if (isEthMode !== this.state.isEthMode) {
        this.setState({ isEthMode });
      }
    };

    public render() {
      const passDownProps = {
        onGrailModeChange: this.onGrailModeChange
      } as IWithRootPassDownProps;

      return (
        <MuiThemeProvider theme={this.state.isEthMode ? ethTheme : normalTheme}>
          <CssBaseline />
          <BrowserRouter>
            <Component {...this.props} {...passDownProps} />
          </BrowserRouter>
        </MuiThemeProvider>
      );
    }
  };
}

export default withRoot;
