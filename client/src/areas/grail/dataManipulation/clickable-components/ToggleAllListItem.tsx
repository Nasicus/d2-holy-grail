import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ChoiceDialog, { IChoiceDialogButton } from "../../../../common/components/ChoiceDialog";
import { Util } from "../../../../common/utils/Util";
import { IHolyGrailData } from "../../../../common/definitions/IHolyGrailData";
import ListItemWithProgress from "../../../../common/components/ListItemWithProgress";
import { IEthGrailData } from "../../../../common/definitions/IEthGrailData";

export interface IToggleAllListItemProps {
  onToggle(data: IHolyGrailData | IEthGrailData): any;
}

export interface IToggleAllListItemState {
  showConfirm?: boolean;
}

class ToggleAllListItem extends React.Component<IToggleAllListItemProps, IToggleAllListItemState> {
  public constructor(props: IToggleAllListItemProps) {
    super(props);
    this.state = {};
  }

  public render() {
    if (HolyGrailDataManager.current.isReadOnly) {
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
      Util.toggleData(markAsFound, HolyGrailDataManager.current.grail);
      this.setState({ showConfirm: false });
      HolyGrailDataManager.current.updateGrailCache();
      this.props.onToggle(HolyGrailDataManager.current.grail);
    } else {
      this.setState({ showConfirm: false });
    }
  };
}

export default ToggleAllListItem;
