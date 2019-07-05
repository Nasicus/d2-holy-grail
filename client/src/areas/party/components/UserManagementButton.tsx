import * as React from "react";
import { ButtonWithProgress } from "../../../common/components/ButtonWithProgress";

export interface IUserManagementButtonProps {
  onClick: (user) => any;
  user: string;
  text: string;
}

export const UserManagementButton: React.FunctionComponent<
  IUserManagementButtonProps
> = props => {
  const onClick = () => {
    props.onClick(props.user);
  };

  return (
    <div>
      <ButtonWithProgress onClick={onClick} text={props.text} />
    </div>
  );
};
