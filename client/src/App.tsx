import * as React from "react";
import { FC, useState } from "react";
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

import { defaultTheme, IAppTheme, AppThemeContext } from "./AppThemeContext";

export const App: FC = () => {
  const [appTheme, setAppTheme] = useState<IAppTheme>(defaultTheme);

  return (
    <AppThemeContext.Provider value={{ appTheme, setAppTheme: handleSetTheme }}>
      <MuiThemeProvider theme={appTheme.theme}>
        <ThemeProvider theme={appTheme.theme}>
          <>
            <CssBaseline />
            <BrowserRouter>
              <RootContainer>
                <HeaderContainer>
                  <Typography variant="h5">{appTheme.title}</Typography>
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

  function handleSetTheme(appTheme?: IAppTheme) {
    setAppTheme(appTheme || defaultTheme);
  }
};

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
