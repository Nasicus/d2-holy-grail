import { Drawer, List } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";

export interface IMenuProps {
  onClose(): any;
  isOpen?: boolean;
}

export const Menu: React.FunctionComponent<IMenuProps> = props => {
  return (
    <Drawer
      anchor="right"
      open={!!props.isOpen}
      onClose={() => props.onClose()}
    >
      <div tabIndex={0} role="button">
        <ListContainer>
          <List>{props.children}</List>
        </ListContainer>
      </div>
    </Drawer>
  );
};

const ListContainer = styled.div`
  width: 300px;
`;
