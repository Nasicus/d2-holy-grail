import { createContext } from "react";
import { Theme, createMuiTheme } from "@material-ui/core";
import { purple, green, brown, grey, blue } from "@material-ui/core/colors";

export const AppThemeContext = createContext<{
  appTheme: IAppTheme;
  setAppTheme: (theme?: IAppTheme) => any;
}>(null);

export interface IAppTheme {
  theme: Theme;
  title: string;
}

let darkThemeEnabled = false;

export function toggleDarkThemeEnabled() {
  darkThemeEnabled = !darkThemeEnabled;
}

export function darkThemeIsEnabled() {
  return darkThemeEnabled;
}

export const defaultTheme: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: purple,
      secondary: green
    }
  }),
  title: "Diablo II - Holy Grail"
};

export const defaultThemeDark: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: purple,
      secondary: green,
      type: "dark"
    }
  }),
  title: "Diablo II - Holy Grail"
};

export const ethTheme: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: brown,
      secondary: grey
    }
  }),
  title: "Diablo II - Eth Grail"
};

export const ethThemeDark: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: brown,
      secondary: grey,
      type: "dark"
    }
  }),
  title: "Diablo II - Eth Grail"
};

export const runewordTheme: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: grey,
      secondary: brown
    }
  }),
  title: "Diablo II - Runeword Grail"
};

export const runewordThemeDark: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: grey,
      secondary: brown,
      type: "dark"
    }
  }),
  title: "Diablo II - Runeword Grail"
};

export const partyTheme: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: blue,
      secondary: grey
    }
  }),
  title: "Diablo II - Holy Grail Party"
};

export const partyThemeDark: IAppTheme = {
  theme: createMuiTheme({
    typography: {},
    palette: {
      primary: blue,
      secondary: grey,
      type: "dark"
    }
  }),
  title: "Diablo II - Holy Grail Party"
};
