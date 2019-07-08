import * as React from "react";
import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ButtonWithProgress } from "./ButtonWithProgress";

type Props = RouteComponentProps<{}>;

const HomeButtonInternal: FC<Props> = props => {
  return (
    <div>
      <ButtonWithProgress
        onClick={handleClick}
        text="Go to login page"
        firstIcon="home"
      />
    </div>
  );

  function handleClick() {
    props.history.push("/");
  }
};

export const HomeButton = withRouter(HomeButtonInternal);
