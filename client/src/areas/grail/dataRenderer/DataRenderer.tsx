import * as React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import * as classNames from "classnames";
import LevelRenderer from "./LevelRenderer";
import { WithStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { Util } from "../../../common/utils/Util";
import { ItemRenderer } from "./ItemRenderer";
import { ThemeStyle } from "@material-ui/core/styles/createTypography";

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

const styles = (theme: Theme) =>
  createStyles({
    dataRenderer: {
      textTransform: "capitalize",
      textAlign: "left"
    },
    rootLevel: {
      maxWidth: 1000,
      margin: "auto"
    },
    level1: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        flex: "0 0 33.3333%"
      }
    },
    level2: {
      padding: theme.spacing.unit
    },
    level3: {
      paddingLeft: theme.spacing.unit * 0.75
    }
  });

type Props = IDataRendererProps & WithStyles<typeof styles>;

const DataRendererComponent: React.SFC<Props> = props => {
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

  const classes = classNames([
    props.classes.dataRenderer,
    props.classes[`level${levels.level}`],
    !props.isRecursive ? props.classes.rootLevel : null
  ]);

  return (
    <Typography component="div" variant={mapLevelToTypographyVariant(levels.variantLevel)} className={classes}>
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
    </Typography>
  );
};

const NextData: React.SFC<{
  levelKey: string;
  nextData: any;
  ancestorKeys: string[];
  levels: ILevels;
  modifyLevels: (level: ILevels, key: string) => ILevels;
}> = props => {
  if (Util.isItem(props.nextData)) {
    return <ItemRenderer itemName={props.levelKey} item={props.nextData} />;
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
  const nextLevels: ILevels = { level: levels.level + 1, variantLevel: levels.variantLevel + 1 };

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

export const DataRenderer = withStyles(styles)(DataRendererComponent);
