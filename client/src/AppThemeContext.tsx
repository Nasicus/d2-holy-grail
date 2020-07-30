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

export function darkThemeIsEnabled(): boolean {
  return localStorage.getItem("d2-holy-grail-useDarkTheme") === "true";
}

export function getDefaultTheme(): IAppTheme {
  return {
    theme: createMuiTheme({
      typography: {},
      palette: {
        primary: purple,
        secondary: green,
        type: darkThemeIsEnabled() ? "dark" : "light"
      }
    }),
    title: "Diablo II - Holy Grail"
  };
}

export function getEthTheme(): IAppTheme {
  return {
    theme: createMuiTheme({
      typography: {},
      palette: {
        primary: brown,
        secondary: grey,
        type: darkThemeIsEnabled() ? "dark" : "light"
      }
    }),
    title: "Diablo II - Eth Grail"
  };
}

export function getRunewordTheme(): IAppTheme {
  return {
    theme: createMuiTheme({
      typography: {},
      palette: {
        primary: grey,
        secondary: brown,
        type: darkThemeIsEnabled() ? "dark" : "light"
      }
    }),
    title: "Diablo II - Runeword Grail"
  };
}

export function getPartyTheme(): IAppTheme {
  return {
    theme: createMuiTheme({
      typography: {},
      palette: {
        primary: blue,
        secondary: grey,
        type: darkThemeIsEnabled() ? "dark" : "light"
      }
    }),
    title: "Diablo II - Holy Grail Party"
  };
}
