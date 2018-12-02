import * as React from "react";
import { VersionManager } from "./VersionManager";
import CloseableDialog from "../../common/components/CloseableDialog";
import { DialogContentText } from "@material-ui/core";

export interface IChangelogDialogProps {
  onClose: () => any;
}

function renderEntry(entry: string | { change: string; children: string[] }) {
  const withChildren = entry as { change: string; children: string[] };
  let change = entry as string;
  let children: string[] = [];
  if (typeof entry !== "string") {
    change = withChildren.change;
    children = withChildren.children;
  }

  return (
    <li key={change}>
      {change}
      {children.length > 0 && <ul>{children.map(childEntry => renderEntry(childEntry))}</ul>}
    </li>
  );
}
export const ChangelogDialog: React.SFC<IChangelogDialogProps> = props => {
  const changeLog = VersionManager.current.fullChangeLog;

  return (
    <CloseableDialog onDialogClosed={props.onClose} title="Changelog">
      <DialogContentText>
        {Object.keys(changeLog).map(version => {
          return (
            <div key={version}>
              <h3>{version}</h3>
              <ul>
                {changeLog[version].map(versionEntry => {
                  return renderEntry(versionEntry);
                })}
              </ul>
            </div>
          );
        })}
      </DialogContentText>
    </CloseableDialog>
  );
};
