import * as React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import brown from "@material-ui/core/colors/brown";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { BrowserRouter } from "react-router-dom";
import { GrailMode } from "./areas/grail/GrailMode";
import { ThemeProvider } from "./TypedStyledComponents";

export interface IWithRootPassDownProps {
  onGrailModeChange: (grailMode: GrailMode) => any;
}

interface IWithRootState {
  grailMode: GrailMode;
}

export function withRoot(Component: React.ComponentType) {
  return class extends React.Component<{}, IWithRootState> {
    public constructor(props: {}) {
      super(props);
      this.state = { grailMode: GrailMode.Holy };
    }

    private onGrailModeChange = (grailMode: GrailMode) => {
      if (grailMode !== this.state.grailMode) {
        this.setState({ grailMode });
      }
    };

    private getTheme = () => {
      switch (this.state.grailMode) {
        case GrailMode.Eth:
          return ethTheme;
        case GrailMode.Runeword:
          return runewordTheme;
        default:
          return normalTheme;
      }
    };

    public render() {
      const passDownProps = {
        onGrailModeChange: this.onGrailModeChange
      } as IWithRootPassDownProps;

      const theme = this.getTheme();
      return (
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <>
              <CssBaseline />
              <BrowserRouter>
                <Component {...this.props} {...passDownProps} />
              </BrowserRouter>
            </>
          </ThemeProvider>
        </MuiThemeProvider>
      );
    }
  };
}

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

const runewordTheme: Theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: grey,
    secondary: brown
  }
});
