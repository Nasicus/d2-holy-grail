import CircularProgress, {
  CircularProgressProps
} from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button, { ButtonProps } from "@material-ui/core/Button";
import * as React from "react";
import Icon, { IconProps } from "@material-ui/core/Icon/Icon";
import Fab, { FabProps } from "@material-ui/core/Fab";
import styled from "styled-components";

export interface IButtonWithProgressProps {
  isLoading?: boolean;
  showSecondIcon?: boolean;
  onClick: () => any;
  firstIcon?: string;
  secondIcon?: string;
  text?: string;
  isDisabled?: boolean;
  className?: string;
}

export const ButtonWithProgress: React.FunctionComponent<
  IButtonWithProgressProps
> = props => {
  const onClick = () => {
    if (props.isLoading) {
      return;
    }
    props.onClick();
  };

  const { isLoading, showSecondIcon, className } = props;

  const FabButton = showSecondIcon ? FabSuccess : Fab;
  const NormalButton = showSecondIcon ? ButtonSuccess : Button;

  return (
    <RootContainer className={className}>
      {!!props.firstIcon && (
        <Wrapper>
          <div>
            <FabButton
              color="primary"
              onClick={onClick}
              disabled={isLoading || props.isDisabled}
              title={props.text}
            >
              <Icon>
                {!showSecondIcon ? props.firstIcon : props.secondIcon}
              </Icon>
            </FabButton>
          </div>
          {isLoading && <FabProgress size={68} />}
        </Wrapper>
      )}
      {!props.firstIcon && (
        <Wrapper>
          {isLoading && <ButtonProgress size={24} />}
          {showSecondIcon && (
            <SecondIconNormalButton>{props.secondIcon}</SecondIconNormalButton>
          )}
          <NormalButton
            variant="contained"
            color="primary"
            disabled={isLoading || props.isDisabled}
            onClick={onClick}
          >
            {props.text}
          </NormalButton>
        </Wrapper>
      )}
    </RootContainer>
  );
};

const RootContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: ${p => p.theme.spacing(1)}px;
  position: relative;
`;

const FabSuccess: React.ComponentType<FabProps> = styled(Fab)`
  && {
    background-color: ${() => green[500]};
    &:hover {
      background-color: ${() => green[700]};
    }
  }
`;

const ButtonSuccess: React.ComponentType<ButtonProps> = styled(Button)`
  && {
    background-color: ${() => green[500]};
    &:hover {
      background-color: ${() => green[700]};
    }
  }
`;

const SecondIconNormalButton: React.ComponentType<IconProps> = styled(Icon)`
  && {
    vertical-align: middle;
    margin-right: ${p => p.theme.spacing(1)}px;
  }
`;

const FabProgress: React.ComponentType<CircularProgressProps> = styled(
  CircularProgress
)`
  && {
    color: ${() => green[500]};
    position: absolute;
    top: -6px;
    left: -6px;
    z-index: 1;
  }
`;

const ButtonProgress: React.ComponentType<CircularProgressProps> = styled(
  CircularProgress
)`
  && {
    color: ${() => green[500]};
    vertical-align: middle;
    margin-right: ${p => p.theme.spacing(1)}px;
  }
`;
