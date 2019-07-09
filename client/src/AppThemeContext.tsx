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
