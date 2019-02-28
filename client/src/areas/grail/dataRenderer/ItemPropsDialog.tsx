import * as React from "react";
import { Item } from "../../../common/definitions/union/Item";
import { GrailManager } from "../GrailManager";
import { Button, Checkbox, Icon, TextField } from "@material-ui/core";
import { CloseableDialog } from "../../../common/components/CloseableDialog";
import { IItemPropsDialogProps } from "./ItemPropsDialog";
import styled from "../../../TypedStyledComponents";
import { TextFieldProps } from "@material-ui/core/TextField";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { GrailMode } from "../GrailMode";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RunewordInfoRenderer } from "./propsRenderer/RunewordInfoRenderer";
import { ItemInfoRenderer } from "./propsRenderer/ItemInfoRenderer";
import { IGrailAreaRouterParams } from "../../../RouteManager";

export interface IItemPropsDialogProps {
  item: Item;
  itemName: string;
  onDialogClosed: (changedProps: { itemNote: string; isPerfect: boolean }) => any;
}

type Props = IItemPropsDialogProps & RouteComponentProps<IGrailAreaRouterParams>;

interface IItemPropsDialogState {
  itemNote: string;
  isPerfect: boolean;
}

class ItemPropsDialogInternal extends React.PureComponent<Props, IItemPropsDialogState> {
  public constructor(props: Props) {
    super(props);
    this.state = { itemNote: props.item.note, isPerfect: props.item.isPerfect };
  }

  public render() {
    const grailMode = this.props.match.params.grailMode;

    return (
      <CloseableDialog
        title={this.props.itemName}
        onDialogClosed={() => this.closeDialog(false)}
        actions={() => (
          <>
            {!GrailManager.current.isReadOnly && (
              <>
                <Button onClick={() => this.closeDialog(true)}>Ok</Button>
                <Button onClick={() => this.closeDialog(false)}>Cancel</Button>
              </>
            )}
          </>
        )}
      >
        <ContentContainer>
          {this.renderContent()}
          {grailMode === GrailMode.Runeword ? (
            <RunewordInfoRenderer runewordName={this.props.itemName} />
          ) : (
            <ItemInfoRenderer itemName={this.props.itemName} />
          )}
        </ContentContainer>
      </CloseableDialog>
    );
  }

  private closeDialog = (passbackChanges: boolean) => {
    this.props.onDialogClosed(
      passbackChanges ? { itemNote: this.state.itemNote, isPerfect: this.state.isPerfect } : null
    );
  };

  private renderContent() {
    if (GrailManager.current.isReadOnly) {
      return (
        <>
          {this.state.isPerfect && (
            <ReadOnlyPerfectContainer>
              <Icon>star</Icon> This item is perfect! <Icon>star</Icon>
            </ReadOnlyPerfectContainer>
          )}
          <ReadOnlyNotesContainer>
            {this.state.itemNote && this.state.isPerfect && (
              <ReadOnlyNotesTitleContainer>Notes:</ReadOnlyNotesTitleContainer>
            )}
            {this.state.itemNote || (!this.state.isPerfect && "No notes for this item.")}
          </ReadOnlyNotesContainer>
        </>
      );
    }

    return (
      <>
        <PerfectContainer>
          <PerfectCheckbox
            checked={this.state.isPerfect}
            onChange={e => this.setState({ isPerfect: e.target.checked })}
          />
          <span>Is perfect</span>
        </PerfectContainer>
        <TextArea
          value={this.state.itemNote}
          onChange={e => this.setState({ itemNote: e.target.value })}
          multiline={true}
          placeholder="Enter your notes about this item..."
        />
      </>
    );
  }
}

export const ItemPropsDialog = withRouter(ItemPropsDialogInternal);

const TextArea: React.ComponentType<TextFieldProps> = styled(TextField)`
  && {
    min-width: 550px;
    font-family: ${p => p.theme.typography.fontFamily};
  }
` as any;

const ContentContainer = styled.div`
  min-width: 550px;
  font-family: ${p => p.theme.typography.fontFamily};
`;

const ReadOnlyNotesContainer = styled.div`
  white-space: pre-line;
`;

const ReadOnlyNotesTitleContainer = styled.div`
  padding-bottom: ${p => p.theme.spacing.unit * 2}px;
`;

const ReadOnlyPerfectContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${p => p.theme.spacing.unit * 4}px;
`;

const PerfectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PerfectCheckbox: React.ComponentType<CheckboxProps> = styled(Checkbox)`
  && {
    padding-left: 0;
  }
`;
