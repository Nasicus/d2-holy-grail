import * as React from "react";
import { FC, useState, useMemo } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./areas/home/Home";
import { GithubRibbon } from "./common/components/GithubRibbon";
import { GrailArea } from "./areas/grail/GrailArea";
import styled, { ThemeProvider } from "styled-components";
import { GrailStatistics } from "./areas/GrailStatistics";
import { Party } from "./areas/party/Party";
import { PartyHome } from "./areas/party/home/PartyHome";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Theme, createMuiTheme } from "@material-ui/core";
import { AppThemeContext, IAppTheme, defaultTheme } from "./AppThemeContext";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { LocalStorageHandler } from "./common/utils/LocalStorageHandler";

interface IBuiltAppTheme {
  theme: Theme;
  title: string;
}

const darkThemeStorageHandler = new LocalStorageHandler<boolean>(
  `is-dark-theme`
);

export const App: FC = () => {
  const [theme, setTheme] = useState<IAppTheme>(defaultTheme);
  const builtTheme = useMemo(() => buildTheme(theme), [theme]);

  return (
    <AppThemeContext.Provider
      value={{
        appTheme: builtTheme,
        setAppTheme: handleSetTheme,
        toggleDarkTheme: handleToggleDarkTheme
      }}
    >
      <MuiThemeProvider theme={builtTheme.theme}>
        <ThemeProvider theme={builtTheme.theme}>
          <>
            <CssBaseline />
            <BrowserRouter>
              <RootContainer>
                <HeaderContainer>
                  <Typography variant="h5">{builtTheme.title}</Typography>
                </HeaderContainer>
                <GithubRibbon url="https://github.com/Nasicus/d2-holy-grail" />
                <ContentContainer>
                  <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route
                      exact={true}
                      path="/stats"
                      component={GrailStatistics}
                    />
                    <Route exact={true} path="/party" component={PartyHome} />
                    <Route
                      exact={true}
                      path="/party/:address/:tabType?"
                      component={Party}
                    />
                    <Route
                      path="/:address/:grailMode?/:tabType?"
                      component={GrailArea}
                    />
                  </Switch>
                </ContentContainer>
              </RootContainer>
            </BrowserRouter>
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    </AppThemeContext.Provider>
  );

  function handleSetTheme(newTheme?: IAppTheme) {
    if (!newTheme) {
      newTheme = defaultTheme;
    }

    setTheme({ ...newTheme });
  }

  function handleToggleDarkTheme() {
    darkThemeStorageHandler.setValue(!isDarkThemeEnabled());
    handleSetTheme(theme);
  }

  function buildTheme(newTheme: IAppTheme): IBuiltAppTheme {
    return {
      title: newTheme.title,
      theme: createMuiTheme({
        ...newTheme.theme,
        palette: {
          ...newTheme.theme.palette,
          ...(isDarkThemeEnabled() && ({ type: "dark" } as PaletteOptions))
        }
      })
    };
  }
};

function isDarkThemeEnabled() {
  return darkThemeStorageHandler.getValue() === true;
}

const RootContainer = styled.div`
  font-family: ${p => p.theme.typography.fontFamily};
`;

const HeaderContainer = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding-top: ${p => p.theme.spacing(1) * 2}px;
`;

const ContentContainer = styled.div`
  padding-top: ${p => p.theme.spacing(1) * 6}px;
`;
