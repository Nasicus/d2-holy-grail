import * as React from "react";

export interface IGithubRibbonProps {
  url: string;
}

export const GithubRibbon: React.SFC<IGithubRibbonProps> = props => {
  return (
    <a href={props.url} target="_blank">
      <img
        style={{ position: "absolute", top: 0, right: 0, border: 0 }}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
        alt="Fork me on GitHub"
      />
    </a>
  );
};
