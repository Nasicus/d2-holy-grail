import * as React from "react";
import "./DataRenderer.css";
import Typography from "@material-ui/core/Typography/Typography";
import { Style } from "@material-ui/core/styles/createTypography";
import { Item } from "./item/Item";
import { Util } from "../../../common/utils/Util";

export interface IDataRendererProps {
  data: any;
  level?: number;
  variantLevel?: number;
}

export const DataRenderer: React.SFC<IDataRendererProps> = props => {
  if (!props.data) {
    return null;
  }

  const level = props.level || 0;
  const variantLevel = props.variantLevel !== undefined ? props.variantLevel : level;

  return (
    <Typography
      component="div"
      variant={mapLevelToTypographyVariant(variantLevel)}
      className={`level-renderer level-${level}`}
    >
      {Object.keys(props.data).map(key => {
        return (
          <div key={`${key}-${level}`}>
            {
              <LevelRenderer
                levelKey={key}
                nextData={props.data[key]}
                newLevel={level + 1}
                variantLevel={variantLevel + 1}
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
  newLevel: number;
  variantLevel: number;
}

const LevelRenderer: React.SFC<ILevelRendererProps> = props => {
  if (Util.isItem(props.nextData)) {
    return <Item itemName={props.levelKey} item={props.nextData} />;
  }

  return (
    <div>
      <span>{props.levelKey}</span>
      <DataRenderer data={props.nextData} level={props.newLevel} variantLevel={props.variantLevel} />
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
