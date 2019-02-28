import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { Route, Switch } from "react-router-dom";
import { Home } from "./areas/home/Home";
import { GithubRibbon } from "./common/components/GithubRibbon";
import { GrailMode } from "./areas/grail/GrailMode";
import { GrailArea } from "./areas/grail/GrailArea";
import { IWithRootPassDownProps, withRoot } from "./withRoot";
import styled from "./TypedStyledComponents";

export interface IPassDownAppProps {
  onGrailModeChange: (grailMode: GrailMode) => void;
}

interface IAppState {
  grailMode?: GrailMode;
}

class AppInternal extends React.Component<IWithRootPassDownProps, IAppState> {
  public constructor(props: IWithRootPassDownProps) {
    super(props);
    this.state = {};
  }

  private onGrailModeChange = (grailMode: GrailMode) => {
    if (this.state.grailMode !== grailMode) {
      this.setState({ grailMode });
      this.props.onGrailModeChange(grailMode);
    }
  };

  private getAppTitle() {
    switch (this.state.grailMode) {
      case GrailMode.Eth:
        return "Diablo II - Eth Grail";
      case GrailMode.Runeword:
        return "Diablo II - Runeword Grail";
      default:
        return "Diablo II - Holy Grail";
    }
  }

  public render() {
    const passDownProps = { onGrailModeChange: this.onGrailModeChange } as IPassDownAppProps;
    return (
      <RootContainer>
        <HeaderContainer>
          <Typography variant="h5">{this.getAppTitle()}</Typography>
        </HeaderContainer>
        <GithubRibbon url="https://github.com/Nasicus/d2-holy-grail" />
        <ContentContainer>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route
              path="/:address/:grailMode?/:tabType?"
              render={props => <GrailArea {...props as any} {...passDownProps} />}
            />
          </Switch>
        </ContentContainer>
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  font-family: ${p => p.theme.typography.fontFamily};
`;

const HeaderContainer = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding-top: ${p => p.theme.spacing.unit * 2}px;
`;

const ContentContainer = styled.div`
  padding-top: ${p => p.theme.spacing.unit * 6}px;
`;

export const App = withRoot(AppInternal);
