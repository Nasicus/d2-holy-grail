import * as React from "react";
import Typography, {
  TypographyProps
} from "@material-ui/core/Typography/Typography";
import { Util } from "../../../common/utils/Util";
import { CheckboxItemRenderer } from "./CheckboxItemRenderer";
import { ThemeStyle } from "@material-ui/core/styles/createTypography";
import { GrailManager } from "../GrailManager";
import { CountItemRenderer } from "./CountItemRenderer";
import { LevelRenderer } from "./LevelRenderer";
import styled, { css } from "styled-components";

export interface ILevels {
  level?: number;
  variantLevel?: number;
}

export interface IDataRendererProps {
  data: any;
  ancestorKeys?: string[];
  levels?: ILevels;
  isRecursive?: boolean;
  modifyLevels?: (level: ILevels, key: string) => ILevels;
}

function getDataRendererTypography(level: number): StyledLevelRenderer {
  switch (level) {
    case 1:
      return Level1Renderer;
    case 2:
      return Level2Renderer;
    case 3:
      return Level3Renderer;
    default:
      return BaseDataRenderer;
  }
}

export const DataRenderer: React.FunctionComponent<
  IDataRendererProps
> = props => {
  if (!props.data) {
    return null;
  }

  const levels = props.levels || { level: 0, variantLevel: 0 };
  if (!levels.level) {
    levels.level = 0;
  }
  if (!levels.variantLevel) {
    levels.variantLevel = 0;
  }

  const DataRendererTypography = getDataRendererTypography(levels.level);

  return (
    <DataRendererTypography
      component="div"
      variant={mapLevelToTypographyVariant(levels.variantLevel)}
      root={props.isRecursive ? undefined : true.toString()}
    >
      {Object.keys(props.data).map(key => {
        return (
          <div key={`${key}-${levels.level}`}>
            {
              <NextData
                levelKey={key}
                nextData={props.data[key]}
                ancestorKeys={props.ancestorKeys}
                levels={levels}
                modifyLevels={props.modifyLevels}
              />
            }
          </div>
        );
      })}
    </DataRendererTypography>
  );
};

const NextData: React.FunctionComponent<{
  levelKey: string;
  nextData: any;
  ancestorKeys: string[];
  levels: ILevels;
  modifyLevels: (level: ILevels, key: string) => ILevels;
}> = props => {
  if (Util.isItem(props.nextData)) {
    return GrailManager.current.settings.useItemCountMode ? (
      <CountItemRenderer itemName={props.levelKey} item={props.nextData} />
    ) : (
      <CheckboxItemRenderer itemName={props.levelKey} item={props.nextData} />
    );
  }

  return (
    <LevelRenderer
      levelKey={props.levelKey}
      ancestorKeys={props.ancestorKeys}
      nextData={props.nextData}
      levels={getNextLevels(props.levels, props.levelKey, props.modifyLevels)}
    />
  );
};

const getNextLevels = (
  levels: ILevels,
  key: string,
  modifyLevels?: (levels: ILevels, key: string) => ILevels
): ILevels => {
  const nextLevels: ILevels = {
    level: levels.level + 1,
    variantLevel: levels.variantLevel + 1
  };

  if (!modifyLevels) {
    return nextLevels;
  }

  return modifyLevels(nextLevels, key);
};

const mapLevelToTypographyVariant = (level: number): ThemeStyle => {
  switch (level) {
    case 0:
      return "h5";
    case 1:
      return "h6";
    case 2:
      return "subtitle1";
    case 3:
      return "body1";
    default:
      return "body2";
  }
};

interface IStyledLevelRendererProps {
  // note: must be all lowercase and a string because the Typography components writes it on the dom element
  // if it's not all lowercase and a boolean react will write a warning to the console
  root: string;
}
type StyledLevelRenderer = React.ComponentType<
  TypographyProps & IStyledLevelRendererProps
>;

const BaseDataRenderer: StyledLevelRenderer = styled(Typography)<
  IStyledLevelRendererProps
>`
  && {
    text-transform: capitalize;
    text-align: left;
    ${p =>
      p.root
        ? css`
            max-width: 1000px;
            margin: auto;
          `
        : null}
  }
`;

const Level1Renderer: StyledLevelRenderer = styled(BaseDataRenderer)<
  IStyledLevelRendererProps
>`
  && {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 0 0 33.3333%;
    }
  }
`;

const Level2Renderer: StyledLevelRenderer = styled(BaseDataRenderer)<
  IStyledLevelRendererProps
>`
  && {
    padding: ${p => p.theme.spacing(1)}px;
  }
`;

const Level3Renderer: StyledLevelRenderer = styled(BaseDataRenderer)<
  IStyledLevelRendererProps
>`
  && {
    padding-left: ${p => p.theme.spacing(1) * 0.75}px;
  }
`;
