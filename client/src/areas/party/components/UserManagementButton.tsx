import * as React from "react";
import { FC, useState, useEffect } from "react";
import { ButtonWithProgress } from "../../../common/components/ButtonWithProgress";

export interface IUserManagementButtonProps {
  onClick: (user, method) => any;
  user: string;
  text: string;
  isDisabled: boolean;
}

export const UserManagementButton: FC<IUserManagementButtonProps> = ({
  onClick,
  user,
  text,
  isDisabled
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [isDisabled]);

  const handleClick = () => {
    setIsLoading(true);
    onClick(user, text.toLowerCase());
  };

  return (
    <div>
      <ButtonWithProgress
        onClick={handleClick}
        text={text}
        isLoading={isLoading}
        isDisabled={isDisabled}
      />
    </div>
  );
};
