import { createContext } from "react";
import { Theme, createMuiTheme } from "@material-ui/core";
import { purple, green, brown, grey, blue } from "@material-ui/core/colors";

export const ThemeContext = createContext<{
  theme: Theme;
  title: string;
  setTheme: (theme: Theme, title: string) => any;
}>(null);

export const normalTheme: Theme = createMuiTheme({
  typography: {},
  palette: {
    primary: purple,
    secondary: green
  }
});

export const ethTheme: Theme = createMuiTheme({
  typography: {},
  palette: {
    primary: brown,
    secondary: grey
  }
});

export const runewordTheme: Theme = createMuiTheme({
  typography: {},
  palette: {
    primary: grey,
    secondary: brown
  }
});

export const partyTheme: Theme = createMuiTheme({
  typography: {},
  palette: {
    primary: blue,
    secondary: grey
  }
});
