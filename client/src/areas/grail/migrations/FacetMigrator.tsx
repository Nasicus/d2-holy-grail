import * as React from "react";
import { FC } from "react";
import { ModalDialog } from "../../../common/components/ModalDialog";
import { GrailManager } from "../GrailManager";
import { IItem } from "../../../common/definitions/union/IItem";
import { Item } from "../../../common/definitions/union/Item";
import Button from "@material-ui/core/Button";

interface Facets {
  Cold: IItem;
  Light: IItem;
  Fire: IItem;
  Poison: IItem;

  [itemName: string]: Item;
}

enum UpdateMode {
  Migrate,
  MarkAsFound,
  MarksAsNotFound
}

export const FacetMigrator: FC<{ onMigrationCompleted: () => any }> = ({
  onMigrationCompleted
}) => {
  return (
    <ModalDialog
      title="Rainbow Facets"
      actions={() => (
        <>
          <Button onClick={() => updateFacets(UpdateMode.Migrate)}>
            Copy your existing values into the corresponding new versions
            (recommended)
          </Button>
          <Button onClick={() => updateFacets(UpdateMode.MarkAsFound)}>
            Mark all Rainbow Facets as "found"
          </Button>
          <Button onClick={() => updateFacets(UpdateMode.MarksAsNotFound)}>
            Mark all Rainbow Facets as "not found"
          </Button>
        </>
      )}
    >
      With this update, the Rainbow Facets have been split up into{" "}
      <strong>level up</strong> and <strong>die</strong>. This means as of now
      there are 506 instead of 502 items. Please select how you want to proceed.
      <p>
        Note that after this dialog you can simply update the values yourself.
        If you're interested why exactly the split was done, you can read more
        on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Nasicus/d2-holy-grail/issues/22"
        >
          github
        </a>
        .
      </p>
    </ModalDialog>
  );

  function updateFacets(mode: UpdateMode) {
    const grailData = GrailManager.current.normalGrail;

    if (
      grailData &&
      grailData.uniques &&
      grailData.uniques.other &&
      grailData.uniques.other["rainbow facet (jewel)"]
    ) {
      const facets = grailData.uniques.other["rainbow facet (jewel)"];
      const oldFacets = (facets["all"] || {}) as Facets;

      if (!facets["level up"]) {
        facets["level up"] = {};
        updateSpecificFacets(oldFacets, facets["level up"] as Facets, mode);
      }

      if (!facets.die) {
        facets.die = {};
        updateSpecificFacets(oldFacets, facets.die as Facets, mode);
      }

      delete facets["all"];
    }

    onMigrationCompleted();
  }

  function updateSpecificFacets(
    oldFacets: Facets,
    newFacets: Facets,
    mode: UpdateMode
  ) {
    newFacets.Cold = { ...(oldFacets.Cold || {}) };
    newFacets.Light = { ...(oldFacets.Light || {}) };
    newFacets.Fire = { ...(oldFacets.Fire || {}) };
    newFacets.Poison = { ...(oldFacets.Poison || {}) };

    switch (mode) {
      case UpdateMode.MarksAsNotFound: {
        newFacets.Cold.wasFound = 0;
        newFacets.Light.wasFound = 0;
        newFacets.Fire.wasFound = 0;
        newFacets.Poison.wasFound = 0;
        break;
      }
      case UpdateMode.MarkAsFound: {
        newFacets.Cold.wasFound = 1;
        newFacets.Light.wasFound = 1;
        newFacets.Fire.wasFound = 1;
        newFacets.Poison.wasFound = 1;
        break;
      }
    }
  }
};
