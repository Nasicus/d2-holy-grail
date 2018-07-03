import * as React from "react";
import { HolyGrailDataManager } from "../../HolyGrailDataManager";
import ButtonWithProgress from "../../../../common/components/ButtonWithProgress";
import ChoiceDialog, { IChoiceDialogButton } from "../../../../common/components/ChoiceDialog";
import { first } from "rxjs/operators";
import { Util } from "../../../../common/utils/Util";
import { IHolyGrailData, Item } from "../../../../common/IHolyGrailData";

export interface IToggleAllButtonProps {
  onToggle(data: IHolyGrailData): any;
}

export interface IToggleAllButtonState {
  showConfirm?: boolean;
}

class ToggleAllButton extends React.Component<IToggleAllButtonProps, IToggleAllButtonState> {
  public constructor(props: IToggleAllButtonProps) {
    super(props);
    this.state = {};
  }

  public render() {
    if (HolyGrailDataManager.current.isReadOnly) {
      return null;
    }

    return (
      <div>
        {this.state.showConfirm && (
          <ChoiceDialog
            content={`What do you want to do?`}
            buttons={ToggleAllButton.createButtons()}
            onClose={this.onConfirmDialogClose}
          />
        )}
        <ButtonWithProgress
          onButtonClick={() => this.setState({ showConfirm: true })}
          text="Mark / unmark all items as found"
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
      HolyGrailDataManager.current.data$.pipe(first()).subscribe(d => {
        this.toggleData(markAsFound, d.data);
        this.setState({ showConfirm: false });
        HolyGrailDataManager.current.updateCache();
        this.props.onToggle(d.data);
      });
    } else {
      this.setState({ showConfirm: false });
    }
  };

  private toggleData(markAsFound: boolean, data: any) {
    if (!data) {
      return;
    }

    if (!Util.isItem(data)) {
      Object.keys(data).forEach(k => this.toggleData(markAsFound, data[k]));
      return;
    }

    const item = data as Item;
    if (!markAsFound && item.wasFound) {
      item.wasFound = false;
    } else if (markAsFound && !item.wasFound) {
      item.wasFound = true;
    }
  }
}

export default ToggleAllButton;
