import CircularProgress, {
  CircularProgressProps
} from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import * as React from "react";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import styled from "styled-components";

export interface IIconWithProgressProps {
  isLoading?: boolean;
  title?: string;
  icon?: string;
  onClick: () => any;
}

export const IconWithProgress: React.FunctionComponent<
  IIconWithProgressProps
> = props => {
  const onClick = () => {
    if (props.isLoading) {
      return;
    }
    props.onClick();
  };

  const { isLoading } = props;

  return (
    <>
      {isLoading && <IconProgress size={"1.5rem"} />}
      {!isLoading && (
        <CustomIcon title={props.title} onClick={onClick}>
          {props.icon}
        </CustomIcon>
      )}
    </>
  );
};

const IconProgress: React.ComponentType<CircularProgressProps> = styled(
  CircularProgress
)`
  && {
    color: ${() => green[500]};
    vertical-align: middle;
    margin-left: 10px;
  }
`;

const CustomIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    font-size: 1.75rem;
    margin-left: 5px;
    margin-bottom: -0.4rem;
  }
`;
