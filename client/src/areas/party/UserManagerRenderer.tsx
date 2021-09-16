import * as React from "react";
import Table, { TableProps } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import styled from "styled-components";
import { UserManagementButton } from "./components/UserManagementButton";
import { PartyManager } from "./PartyManager";
import { IPartyUserData } from "../../common/definitions/union/IPartyUserData";
import { useState, FC, useEffect } from "react";

export interface IUserManagerRendererProps {
  users: IPartyUserData;
}

export const UserManagerRenderer: FC<IUserManagerRendererProps> = props => {
  const [users, setUsers] = useState<IPartyUserData>(props.users);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (JSON.stringify(users) === JSON.stringify(props.users)) {
      return;
    }
    setUsers(props.users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.users]);

  return (
    <div>
      <Typography variant="h6" align={"center"}>
        Pending Users
      </Typography>
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.pendingUserlist.length !== 0 &&
              users.pendingUserlist.map(s => renderPendingUserRow(s))}
            {users.pendingUserlist.length === 0 && renderEmptyPendingUserRow()}
          </TableBody>
        </StyledTable>
      </StyledPaper>
      <br />
      <Typography variant="h6" align={"center"}>
        Current Users
      </Typography>
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.userlist.length !== 0 &&
              users.userlist.map(s => renderUserRow(s))}
            {users.userlist.length === 0 && renderEmptyUserRow()}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    </div>
  );

  function renderEmptyPendingUserRow() {
    return (
      <TableRow key={`$EmptyPendingUser`} hover={true}>
        <TableCell component="th" scope="row" colSpan={3}>
          <RowHeader>No pending users.</RowHeader>
        </TableCell>
      </TableRow>
    );
  }

  function renderEmptyUserRow() {
    return (
      <TableRow key={`$EmptyUser`} hover={true}>
        <TableCell component="th" scope="row" colSpan={2}>
          <RowHeader>No users yet!</RowHeader>
        </TableCell>
      </TableRow>
    );
  }

  function renderPendingUserRow(user: string, isSelected?: boolean) {
    return (
      <TableRow key={`${user}PendingUser`} hover={true} selected={isSelected}>
        <TableCell component="th" scope="row">
          <RowHeader>
            <UserLink
              href={"/" + user}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user}
            </UserLink>
          </RowHeader>
        </TableCell>
        <TableCell>
          <UserButtonContainer>
            <UserManagementButton
              onClick={modifyUser}
              text={"Accept"}
              user={user}
              isDisabled={isLoading}
            />
          </UserButtonContainer>
        </TableCell>
        <TableCell>
          <UserButtonContainer>
            <UserManagementButton
              onClick={modifyUser}
              text={"Deny"}
              user={user}
              isDisabled={isLoading}
            />
          </UserButtonContainer>
        </TableCell>
      </TableRow>
    );
  }

  function renderUserRow(user: string, isSelected?: boolean) {
    return (
      <TableRow key={`${user}User`} hover={true} selected={isSelected}>
        <TableCell component="th" scope="row">
          <RowHeader>
            <UserLink
              href={"/" + user}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user}
            </UserLink>
          </RowHeader>
        </TableCell>
        <TableCell align="right">
          <UserButtonContainer>
            <UserManagementButton
              onClick={modifyUser}
              text={"Remove"}
              user={user}
              isDisabled={isLoading}
            />
          </UserButtonContainer>
        </TableCell>
      </TableRow>
    );
  }

  function modifyUser(user: string, method: string) {
    PartyManager.current.updateCache();
    setIsLoading(true);
    PartyManager.current.modifyPartyUser(user, method).subscribe(
      result => {
        setUsers(result.users);
        setIsLoading(false);
      },
      err => {
        // Couldnt modify user for some reason
        // Display an error message to the user?
        // TODO
      }
    );
  }
};

const StyledPaper: React.ComponentType<PaperProps> = styled(Paper)`
  && {
    max-width: 800px;
    margin: ${p => p.theme.spacing(1) * 3}px auto auto;
    overflow-x: auto;
  }
`;

const StyledTable: React.ComponentType<TableProps> = styled(Table)`
  && {
    max-width: 800px;
  }
`;

const UserLink = styled.a`
  text-decoration: none;
  color: #000000;
`;

const RowHeader = styled.div`
  display: flex;
`;

const UserButtonContainer = styled.div`
  margin-left: 0;
`;
