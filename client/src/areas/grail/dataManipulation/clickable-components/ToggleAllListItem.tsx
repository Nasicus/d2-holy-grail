import * as React from "react";
import { GrailManager } from "../../GrailManager";
import { Util } from "../../../../common/utils/Util";
import { AllBusinessGrailsType } from "../../../../common/definitions/business/AllBusinessGrailsType";
import {
  ChoiceDialog,
  IChoiceDialogButton
} from "../../../../common/components/ChoiceDialog";
import { ListItemWithProgress } from "../../../../common/components/ListItemWithProgress";

export interface IToggleAllListItemProps {
  onToggle(data: AllBusinessGrailsType): any;
}

interface IToggleAllListItemState {
  showConfirm?: boolean;
}

export class ToggleAllListItem extends React.Component<
  IToggleAllListItemProps,
  IToggleAllListItemState
> {
  public constructor(props: IToggleAllListItemProps) {
    super(props);
    this.state = {};
  }

  public render() {
    if (GrailManager.current.isReadOnly) {
      return null;
    }

    return (
      <div>
        <ChoiceDialog
          isOpen={!!this.state.showConfirm}
          content={`What do you want to do?`}
          buttons={ToggleAllListItem.createButtons()}
          onClose={this.onConfirmDialogClose}
        />
        <ListItemWithProgress
          onClick={() => this.setState({ showConfirm: true })}
          primaryText="Toggle all items as found"
          firstIcon="check_box"
        />
      </div>
    );
  }

  private static createButtons(): IChoiceDialogButton[] {
    return [
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
  }

  private onConfirmDialogClose = (markAsFound?: boolean) => {
    if (markAsFound != null) {
      Util.toggleData(markAsFound, GrailManager.current.grail);
      this.setState({ showConfirm: false });
      GrailManager.current.updateGrailCache();
      this.props.onToggle(GrailManager.current.grail);
    } else {
      this.setState({ showConfirm: false });
    }
  };
}
