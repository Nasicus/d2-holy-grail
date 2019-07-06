import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ButtonWithProgress } from "./ButtonWithProgress";
import { FC, useContext } from "react";
import { normalTheme, ThemeContext } from "../../ThemeContext";

export interface IHomeButtonProps {
  switchToBaseTheme?: boolean;
}

type Props = IHomeButtonProps & RouteComponentProps<{}>;

const HomeButtonInternal: FC<Props> = props => {
  const { setTheme } = useContext(ThemeContext);
  function handleClick() {
    props.history.push("/");
    if (props.switchToBaseTheme) {
      setTheme(normalTheme, "Diablo II - Holy Grail");
    }
  }
  return (
    <div>
      <ButtonWithProgress
        onClick={handleClick}
        text="Go to login page"
        firstIcon="home"
      />
    </div>
  );
};

export const HomeButton = withRouter(HomeButtonInternal);
