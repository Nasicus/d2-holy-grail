import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { BrowserRouter } from "react-router-dom";

// A theme with custom primary and secondary color.
// It's optional.
const theme: Theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Component {...props} />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
