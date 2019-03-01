import * as React from "react";
import { Util } from "../../../common/utils/Util";
import { DataRenderer, ILevels } from "./DataRenderer";
import { IHolyGrailData } from "../../../common/definitions/union/IHolyGrailData";
import { GrailManager } from "../GrailManager";
import { ChoiceDialog } from "../../../common/components/ChoiceDialog";

export interface ILevelRendererProps {
  levelKey: string;
  nextData: any;
  levels: ILevels;
  ancestorKeys?: string[];
}

interface ILevelRendererState {
  showDialog?: boolean;
}

export class LevelRenderer extends React.Component<
  ILevelRendererProps,
  ILevelRendererState
> {
  public constructor(props: ILevelRendererProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { nextData, levelKey } = this.props;

    const ancestorKeys = this.props.ancestorKeys
      ? this.props.ancestorKeys.map(k => k)
      : [];
    ancestorKeys.push(levelKey);

    return (
      <div>
        {this.state.showDialog && this.getChoiceDialog(ancestorKeys, nextData)}
        {this.renderLevelHeader()}
        <DataRenderer
          data={nextData}
          levels={this.props.levels}
          isRecursive={true}
          ancestorKeys={ancestorKeys}
        />
      </div>
    );
  }

  private getChoiceDialog(
    ancestorKeys: string[],
    data: Partial<IHolyGrailData>
  ) {
    const buttons = [
      {
        value: true,
        text: "Mark all items as 'found'"
      },
      {
        value: false,
        text: "Mark all items as 'not found'"
      },
      {
        value: null,
        text: "Nothing"
      }
    ];

    return (
      <ChoiceDialog
        isOpen={true}
        content={`What action do you want to execute on '${ancestorKeys
          .map(k => k.charAt(0).toUpperCase() + k.slice(1))
          .join(" - ")}'`}
        buttons={buttons}
        onClose={markAsFound => this.onDialogClose(markAsFound, data)}
      />
    );
  }

  private onDialogClose = (
    markAsFound: boolean,
    data: Partial<IHolyGrailData>
  ) => {
    if (markAsFound != null) {
      Util.toggleData(markAsFound, data);
      this.setState({ showDialog: false });
      GrailManager.current.updateGrailCache();
    } else {
      this.setState({ showDialog: false });
    }
  };

  private renderLevelHeader() {
    if (GrailManager.current.isReadOnly) {
      return <span>{this.props.levelKey}</span>;
    }

    return (
      <span
        onClick={() => this.setState({ showDialog: true })}
        title="Toggle items in this category as found"
        style={{ cursor: "pointer" }}
      >
        {this.props.levelKey}
      </span>
    );
  }
}
