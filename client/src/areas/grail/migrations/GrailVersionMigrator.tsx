import * as React from "react";
import { FC } from "react";
import { GrailManager } from "../GrailManager";
import { FacetMigrator } from "./FacetMigrator";

export const GrailVersionMigrator: FC = () => {
  const manager = GrailManager.current;

  if (manager.isReadOnly || !manager.hasNewVersion) {
    return null;
  }

  if (manager.grailVersion < "1.1.0") {
    return (
      <FacetMigrator onMigrationCompleted={() => updateVersion("1.1.0")} />
    );
  }

  return null;

  function updateVersion(newVersion: string) {
    manager.updateVersion(newVersion);
    window.setTimeout(() => window.location.reload());
  }
};
