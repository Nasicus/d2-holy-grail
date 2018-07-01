import * as React from "react";
import { Util } from "../../../common/utils/Util";
import { ItemRenderer } from "./ItemRenderer";
import { DataRenderer, ILevels } from "./DataRenderer";

export interface ILevelRendererProps {
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

export default LevelRenderer;
