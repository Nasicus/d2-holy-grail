import * as React from "react";
import { IRunewordInfo } from "../../../../common/definitions/api/IRunewordInfo";
import { Api } from "../../../../common/utils/Api";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import {
  ItemInfosContainer,
  ItemInfosDetails,
  NoMarginList
} from "./CommonStyles";

export interface IRunewordInfoRendererProps {
  runewordName: string;
}

interface IRunewordInfoRendererState {
  runewordInfos?: IRunewordInfo;
}

export class RunewordInfoRenderer extends React.PureComponent<
  IRunewordInfoRendererProps,
  IRunewordInfoRendererState
> {
  public constructor(props: IRunewordInfoRendererProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount(): void {
    Api.getRuneword(this.props.runewordName).subscribe(res =>
      this.setState({ runewordInfos: res.data })
    );
  }

  public render() {
    const runewordInfos = this.state.runewordInfos;

    if (!runewordInfos) {
      return null;
    }

    return (
      <ItemInfosContainer>
        <Typography variant="h6">Runeword Info</Typography>
        <ItemInfosDetails>
          <div>
            {runewordInfos.runes.map((r, i) => (
              <RuneContainer key={r + i}>
                <img
                  src={`http://www.d2tomb.com/images/runes/${RunewordInfoRenderer.getRuneImageName(
                    r
                  )}.gif`}
                  alt={r}
                  title={r}
                />
                <span>{r}</span>
              </RuneContainer>
            ))}
            <SocketsContainer>
              Can be placed in...
              <NoMarginList>
                {runewordInfos.detailTypes.map(d => (
                  <li key={d}>{d}</li>
                ))}
              </NoMarginList>
              ... with exactly <b>{runewordInfos.sockets}</b> sockets!
            </SocketsContainer>
          </div>
          <div>
            <NoMarginList>
              {runewordInfos.props.map(
                RunewordInfoRenderer.renderRunewordProps
              )}
            </NoMarginList>
          </div>
        </ItemInfosDetails>
      </ItemInfosContainer>
    );
  }

  private static getRuneImageName(rune: string) {
    rune = rune.toLowerCase();
    switch (rune) {
      case "jah":
        return "jo";
      case "shael":
        return "shae";
      default:
        return rune;
    }
  }

  private static renderRunewordProps(
    prop: string | { description: string; props: string[] }
  ) {
    if (typeof prop === "string") {
      return <li key={prop}>{prop as string}</li>;
    }

    const objProps = prop as { description: string; props: string[] };

    return (
      <li key={"top" + objProps.description}>
        {objProps.description}
        <NoMarginList>
          {objProps.props.map(p => (
            <li key={"child" + p}>{p}</li>
          ))}
        </NoMarginList>
      </li>
    );
  }
}

const SocketsContainer = styled.div`
  margin-top: ${p => p.theme.spacing(1)}px;
`;

const RuneContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-left: ${p => p.theme.spacing(1)}px;
  }
`;
