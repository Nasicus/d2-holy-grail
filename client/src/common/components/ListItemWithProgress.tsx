import CircularProgress, {
  CircularProgressProps
} from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { IconProps } from "@material-ui/core/Icon";

export interface IListItemWithProgressProps {
  isLoading?: boolean;
  onClick?: () => any;
  showSecondIcon?: boolean;
  firstIcon?: string;
  secondIcon?: string;
  primaryText: string;
  secondaryText?: string;
  isDisabled?: boolean;
}

export const ListItemWithProgress: React.FunctionComponent<
  IListItemWithProgressProps
> = props => {
  const { isLoading } = props;

  const IconToRender = props.showSecondIcon ? SecondIcon : Icon;

  return (
    <RootContainer>
      {
        <ListItem
          button={!!props.onClick as any}
          onClick={props.onClick}
          disabled={props.isDisabled}
        >
          <ListItemIcon>
            <IconToRender>
              {props.showSecondIcon ? props.secondIcon : props.firstIcon}
            </IconToRender>
          </ListItemIcon>
          <ListItemText
            primary={props.primaryText}
            secondary={props.secondaryText}
          />
          {isLoading && <StyledCircularProgress size={24} />}
        </ListItem>
      }
    </RootContainer>
  );
};

const RootContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCircularProgress: React.ComponentType<
  CircularProgressProps
> = styled(CircularProgress)`
  && {
    color: ${() => green[500]};
    vertical-align: middle;
  }
`;

const SecondIcon: React.ComponentType<IconProps> = styled(Icon)`
  && {
    color: ${() => green[500]};
    &:hover {
      ${() => green[700]};
    }
  }
`;
