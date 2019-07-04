import * as React from "react";
import Table, { TableProps } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper, { PaperProps } from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import styled from "../../TypedStyledComponents";
import {
  ButtonWithProgress,
  IButtonWithProgressProps
} from "../../common/components/ButtonWithProgress";
import { UserManagementButton } from "./components/UserManagementButton";
import { LeaderboardManager } from "./LeaderboardManager";
import { ILeaderboardUserData } from "../../common/definitions/union/ILeaderboardUserData";

export interface IUserManagerRendererProps {
  users: ILeaderboardUserData;
}

interface IUserManagerState {
  users: ILeaderboardUserData;
}

export class UserManagerRenderer extends React.Component<
  IUserManagerRendererProps,
  IUserManagerState
> {
  public constructor(props: IUserManagerRendererProps) {
    super(props);
    this.state = {
      users: props.users
    };
  }

  public render() {
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
              {this.state.users.pendingUserlist.length != 0 &&
                this.state.users.pendingUserlist.map(s =>
                  this.renderPendingUserRow(s)
                )}
              {this.state.users.pendingUserlist.length == 0 &&
                this.renderEmptyPendingUserRow()}
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
                <TableCell>&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.userlist.length != 0 &&
                this.state.users.userlist.map(s => this.renderUserRow(s))}
              {this.state.users.userlist.length == 0 &&
                this.renderEmptyUserRow()}
            </TableBody>
          </StyledTable>
        </StyledPaper>
      </div>
    );
  }

  private renderEmptyPendingUserRow() {
    return (
      <TableRow key={`$EmptyPendingUser`} hover={true}>
        <TableCell component="th" scope="row">
          <RowHeader>No pending users.</RowHeader>
        </TableCell>
      </TableRow>
    );
  }

  private renderEmptyUserRow() {
    return (
      <TableRow key={`$EmptyUser`} hover={true}>
        <TableCell component="th" scope="row">
          <RowHeader>No users yet!</RowHeader>
        </TableCell>
      </TableRow>
    );
  }

  private renderPendingUserRow(user: string, isSelected?: boolean) {
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
              onClick={this.acceptUser}
              text={"Accept"}
              user={user}
            />
          </UserButtonContainer>
        </TableCell>
        <TableCell>
          <UserButtonContainer>
            <UserManagementButton
              onClick={this.denyUser}
              text={"Deny"}
              user={user}
            />
          </UserButtonContainer>
        </TableCell>
      </TableRow>
    );
  }

  private renderUserRow(user: string, isSelected?: boolean) {
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
              onClick={this.removeUser}
              text={"Remove"}
              user={user}
            />
          </UserButtonContainer>
        </TableCell>
      </TableRow>
    );
  }

  private acceptUser = (user: string) => {
    var userIndex = this.state.users.pendingUserlist.indexOf(user);
    var newUsers = this.state.users;
    newUsers.pendingUserlist.splice(userIndex, 1);
    newUsers.userlist.push(user);
    newUsers.acceptedUserlist.push(user);
    this.setState({
      users: newUsers
    });
    LeaderboardManager.current.updateCache();
  };

  private denyUser = (user: string) => {
    var userIndex = this.state.users.pendingUserlist.indexOf(user);
    var newUsers = this.state.users;
    newUsers.pendingUserlist.splice(userIndex, 1);
    newUsers.deniedUserlist.push(user);
    this.setState({
      users: newUsers
    });
    LeaderboardManager.current.updateCache();
  };

  private removeUser = (user: string) => {
    var userIndex = this.state.users.userlist.indexOf(user);
    var newUsers = this.state.users;
    newUsers.userlist.splice(userIndex, 1);
    newUsers.removedUserlist.push(user);
    this.setState({
      users: newUsers
    });
    LeaderboardManager.current.updateCache();
  };
}

const StyledPaper: React.ComponentType<PaperProps> = styled(Paper)`
  && {
    max-width: 800px;
    margin: ${p => p.theme.spacing.unit * 3}px auto auto;
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

const UserButtonWithProgressWrapper: React.ComponentType<
  IButtonWithProgressProps
> = styled(ButtonWithProgress)`
  && {
    & > div {
      margin-left: 0;
    }
  }
`;
