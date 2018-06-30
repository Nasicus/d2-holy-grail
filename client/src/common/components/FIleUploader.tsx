import * as React from "react";
import Dropzone, { ImageFile } from "react-dropzone";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { StyleRulesCallback } from "@material-ui/core";

export interface IFileUploaderProps {
  allowMultiple?: boolean;
  onFilesDropped: (files: ImageFile[]) => any;
  mimeTypes?: string[];
}

interface IFileUploaderState {
  activeFileNames?: string[];
}

type ClassesType = "dropZone" | "dropZoneText";

const styles: StyleRulesCallback<ClassesType> = theme => ({
  dropZone: {
    height: 50,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: theme.spacing.unit,
    borderColor: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    cursor: "pointer",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  dropZoneText: {
    verticalAlign: "middle",
    lineHeight: "50px",
    padding: theme.spacing.unit
  }
});

type Props = IFileUploaderProps & WithStyles<ClassesType>;

class FileUploader extends React.Component<Props, IFileUploaderState> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Dropzone
          accept={this.props.mimeTypes ? this.props.mimeTypes.join(", ") : null}
          className={this.props.classes.dropZone}
          multiple={this.props.allowMultiple}
          onDropAccepted={(files: ImageFile[]) => {
            this.setState({ activeFileNames: files.map(f => f.name) });
            this.props.onFilesDropped(files);
          }}
        >
          <span className={this.props.classes.dropZoneText}>
            {!this.state.activeFileNames
              ? "Drop files here or click to choose a file from your computer."
              : this.state.activeFileNames.join(" ")}
          </span>
        </Dropzone>
      </div>
    );
  }
}

export default withStyles(styles)<IFileUploaderProps>(FileUploader);
