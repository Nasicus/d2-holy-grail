import * as React from "react";
import "./DataRenderer.css";
import Typography from "@material-ui/core/Typography/Typography";
import { Style } from "@material-ui/core/styles/createTypography";
import { ItemRenderer } from "./item/ItemRenderer";
import { Util } from "../../../common/utils/Util";
import * as classNames from "classnames";

export interface ILevels {
  level?: number;
  variantLevel?: number;
}

export interface IDataRendererProps {
  data: any;
  levels?: ILevels;
  isRecursive?: boolean;
  modifyLevels?: (level: ILevels, key: string) => ILevels;
}

const getNextLevels = (
  levels: ILevels,
  key: string,
  modifyLevels?: (levels: ILevels, key: string) => ILevels
): ILevels => {
  const nextLevels: ILevels = { level: levels.level + 1, variantLevel: levels.variantLevel + 1 };

  if (!modifyLevels) {
    return nextLevels;
  }

  return modifyLevels(nextLevels, key);
};

export const DataRenderer: React.SFC<IDataRendererProps> = props => {
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

  const classes = classNames(["level-renderer", `level-${levels.level}`, !props.isRecursive ? "root-level" : null]);

  return (
    <Typography component="div" variant={mapLevelToTypographyVariant(levels.variantLevel)} className={classes}>
      {Object.keys(props.data).map(key => {
        return (
          <div key={`${key}-${levels.level}`}>
            {
              <LevelRenderer
                levelKey={key}
                nextData={props.data[key]}
                levels={getNextLevels(levels, key, props.modifyLevels)}
              />
            }
          </div>
        );
      })}
    </Typography>
  );
};

interface ILevelRendererProps {
  levelKey: string;
  nextData: any;
  levels: ILevels;
}

const LevelRenderer: React.SFC<ILevelRendererProps> = props => {
  if (Util.isItem(props.nextData)) {
    return <ItemRenderer itemName={props.levelKey} item={props.nextData} />;
  }

  return (
    <div>
      <span>{props.levelKey}</span>
      <DataRenderer data={props.nextData} levels={props.levels} isRecursive={true} />
    </div>
  );
};

const mapLevelToTypographyVariant = (level: number): Style => {
  switch (level) {
    case 0:
      return "headline";
    case 1:
      return "title";
    case 2:
      return "subheading";
    case 3:
      return "body2";
    default:
      return "body1";
  }
};
