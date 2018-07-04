import { Drawer, StyleRulesCallback, withStyles, WithStyles, List } from "@material-ui/core";
import * as React from "react";

export interface IMenuProps {
  onClose(): any;
  isOpen?: boolean;
}

type ClassTypes = "list";

const styles: StyleRulesCallback<ClassTypes> = () => ({
  list: {
    width: 300
  }
});

type Props = WithStyles<ClassTypes> & IMenuProps;

const Menu: React.SFC<Props> = props => {
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

export default withStyles(styles)<IMenuProps>(Menu);
