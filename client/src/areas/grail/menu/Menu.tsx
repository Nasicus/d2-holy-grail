import { Drawer, withStyles, WithStyles, List, createStyles } from "@material-ui/core";
import * as React from "react";

export interface IMenuProps {
  onClose(): any;
  isOpen?: boolean;
}
type Props = IMenuProps & WithStyles<typeof styles>;

const MenuInternal: React.FunctionComponent<Props> = props => {
  return (
    <Drawer anchor="right" open={!!props.isOpen} onClose={() => props.onClose()}>
      <div tabIndex={0} role="button">
        <div className={props.classes.list}>
          <List>{props.children}</List>
        </div>
      </div>
    </Drawer>
  );
};

const styles = () =>
  createStyles({
    list: {
      width: 300
    }
  });

export const Menu = withStyles(styles)(MenuInternal);
