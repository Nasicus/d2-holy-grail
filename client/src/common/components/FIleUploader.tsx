import * as React from "react";
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";
import Dropzone from "react-dropzone";

export interface IFileUploaderProps {
  allowMultiple?: boolean;
  onFilesDropped: (files: File[]) => any;
  mimeTypes?: string[];
}

type Props = IFileUploaderProps & WithStyles<typeof styles>;

interface IFileUploaderState {
  activeFileNames?: string[];
}

class FileUploaderInternal extends React.Component<Props, IFileUploaderState> {
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
          onDropAccepted={(files: File[]) => {
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

const styles = (theme: Theme) =>
  createStyles({
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

export const FileUploader = withStyles(styles)(FileUploaderInternal);
