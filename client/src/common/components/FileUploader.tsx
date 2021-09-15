import * as React from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

export interface IFileUploaderProps {
  allowMultiple?: boolean;
  onFilesDropped: (files: File[]) => any;
  mimeTypes?: string[];
}

interface IFileUploaderState {
  activeFileNames?: string[];
}

export class FileUploader extends React.Component<
  IFileUploaderProps,
  IFileUploaderState
> {
  public constructor(props: IFileUploaderProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Dropzone
          accept={this.props.mimeTypes ? this.props.mimeTypes.join(", ") : null}
          multiple={this.props.allowMultiple}
          onDropAccepted={(files: File[]) => {
            this.setState({ activeFileNames: files.map(f => f.name) });
            this.props.onFilesDropped(files);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <DropZoneContainer {...getRootProps()}>
              <input {...getInputProps()} />

              {!this.state.activeFileNames
                ? "Drop files here or click to choose a file from your computer."
                : this.state.activeFileNames.join(" ")}
            </DropZoneContainer>
          )}
        </Dropzone>
      </div>
    );
  }
}

const DropZoneContainer = styled.div`
  vertical-align: middle;
  line-height: 50px;
  padding: 0 ${p => p.theme.spacing(1)}px;
  height: 50px;
  border-width: 2px;
  border-style: dashed;
  border-radius: ${p => p.theme.spacing(1)}px;
  border-color: ${p => p.theme.palette.primary.main};
  font-family: ${p => p.theme.typography.fontFamily};
  color: ${p => p.theme.palette.text.primary};
  cursor: pointer;
  margin-top: ${p => p.theme.spacing(1)}px;
  margin-bottom: ${p => p.theme.spacing(1)}px;
`;
