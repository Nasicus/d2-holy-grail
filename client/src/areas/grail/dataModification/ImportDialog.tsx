import * as React from "react";
import { StyleRulesCallback, WithStyles, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Icon from "@material-ui/core/Icon/Icon";
import { withStyles } from "@material-ui/core/styles";
import ButtonWithProgress from "../../../common/components/ButtonWithProgress";
import { HolyGrailDataManager } from "../HolyGrailDataManager";
import { first } from "rxjs/operators";
import { Util } from "../../../common/utils/Util";
import FileUploader from "../../../common/components/FIleUploader";
import { ImageFile } from "react-dropzone";

interface IImportDialogProps {
  onDialogClosed: () => any;
}

interface IImportDialogState {
  armor?: string;
  weapons?: string;
  other?: string;
  sets?: string;
  isImporting?: boolean;
  numberOfImportedItems?: number;
}

type ClassesType = "closeIcon" | "successMessage" | "uploadContainer";
type Props = IImportDialogProps & WithStyles<ClassesType>;

const styles: StyleRulesCallback<ClassesType> = theme => ({
  closeIcon: {
    position: "absolute",
    top: theme.spacing.unit,
    right: theme.spacing.unit,
    cursor: "pointer"
  },
  uploadContainer: {
    marginTop: theme.spacing.unit
  },
  successMessage: {
    color: theme.palette.secondary.main
  }
});

class ImportDialog extends React.Component<Props, IImportDialogState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  private import = () => {
    this.setState({ isImporting: true });
    HolyGrailDataManager.current.data$.pipe(first()).subscribe(r => {
      const data = r.data;
      const importedFoundItems: string[] = [];
      this.importSection(data.uniques.armor, this.state.armor, importedFoundItems);
      this.importSection(data.uniques.weapons, this.state.weapons, importedFoundItems);
      this.importSection(data.uniques.other, this.state.other, importedFoundItems);
      this.importSection(data.sets, this.state.sets, importedFoundItems);
      if (importedFoundItems.length) {
        HolyGrailDataManager.current.updateCache();
      }
      this.setState({ isImporting: false, numberOfImportedItems: importedFoundItems.length });
    });
  };

  private importSection(possibleItem: any, importData: string, importedFoundItems: string[], itemName?: string) {
    if (!importData || !possibleItem) {
      return;
    }

    if (!Util.isItem(possibleItem) || !itemName) {
      Object.keys(possibleItem).forEach(possibleItemName =>
        this.importSection(possibleItem[possibleItemName], importData, importedFoundItems, possibleItemName)
      );
      return;
    }

    const values = importData.split(",");
    for (let i = 0; i < values.length; i++) {
      if (values[i] === itemName) {
        const previousIndex = i - 1;
        if (previousIndex > 0 && values[previousIndex]) {
          possibleItem.wasFound = true;
          importedFoundItems.push(itemName);
        }
        break;
      }
    }
  }

  private getContent(type: string, files: ImageFile[]) {
    if (!files || !files.length) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const stateUpdate = {};
      stateUpdate[type] = fileReader.result;
      this.setState(stateUpdate);
    };
    fileReader.readAsText(files[0]);
  }

  private getFileUploader(title: string, stateKey: string) {
    return (
      <div className={this.props.classes.uploadContainer}>
        <Typography variant="subheading">{title}</Typography>
        <FileUploader onFilesDropped={files => this.getContent(stateKey, files)} />
      </div>
    );
  }

  public render() {
    return (
      <Dialog open={true} onClose={() => this.props.onDialogClosed()}>
        <DialogTitle id="form-dialog-title">Import from CSV</DialogTitle>
        <DialogContent>
          <div>
            <Icon className={this.props.classes.closeIcon} onClick={() => this.props.onDialogClosed()}>
              close
            </Icon>
            {this.state.numberOfImportedItems != null && (
              <DialogContentText className={this.props.classes.successMessage}>
                The import was done! We imported {this.state.numberOfImportedItems} items! Close this dialog and check
                if the data is correct. If it is, simply save the data to the server, if not just discard it!
              </DialogContentText>
            )}
            {this.state.numberOfImportedItems == null && (
              <DialogContentText>
                You can import the data from the Google Holy Grail Sheet here. You have to download each tab as CSV (<span
                  style={{ fontStyle: "italic", fontSize: "0.8em" }}
                >
                  File => Download as => Comma-separated values (.csv current sheet)
                </span>) and then upload the file here. You can also only import the tabs you want.
              </DialogContentText>
            )}
            <div>
              {this.getFileUploader("Unique Armor", "armor")}
              {this.getFileUploader("Unique Weapons", "weapons")}
              {this.getFileUploader("Unique Other", "other")}
              {this.getFileUploader("Sets", "sets")}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <ButtonWithProgress
            isLoading={this.state.isImporting}
            onButtonClick={() => this.import()}
            text="Import"
            isDisabled={
              this.state.numberOfImportedItems != null ||
              (!this.state.armor && !this.state.weapons && !this.state.other && !this.state.sets)
            }
          />
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)<IImportDialogProps>(ImportDialog);
