import * as React from "react";
import { AppVersionManager } from "./AppVersionManager";
import { DialogContentText } from "@material-ui/core";
import { CloseableDialog } from "../../../common/components/CloseableDialog";

export interface IChangelogDialogProps {
  onClose: () => any;
}

export const ChangelogDialog: React.FunctionComponent<
  IChangelogDialogProps
> = props => {
  const changeLog = AppVersionManager.current.fullChangeLog;

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
      {children.length > 0 && (
        <ul>{children.map(childEntry => renderEntry(childEntry))}</ul>
      )}
    </li>
  );
}
