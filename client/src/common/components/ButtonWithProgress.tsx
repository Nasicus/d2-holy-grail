import { WithStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import { StyleRulesCallback } from "@material-ui/core";
import * as React from "react";
import * as classNames from "classnames";
import Icon from "@material-ui/core/Icon/Icon";

type ClassesType = "root" | "wrapper" | "buttonSuccess" | "fabProgress" | "buttonProgress";

const styles: StyleRulesCallback<ClassesType> = theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    verticalAlign: "middle",
    marginRight: theme.spacing.unit
  }
});

export interface IButtonWithProgressProps {
  isLoading?: boolean;
  showSecondIcon?: boolean;
  onClick: () => any;
  firstIcon?: string;
  secondIcon?: string;
  text?: string;
  isDisabled?: boolean;
}

type Props = IButtonWithProgressProps & WithStyles<ClassesType>;

const ButtonWithProgress: React.SFC<Props> = props => {
  const onClick = () => {
    if (props.isLoading) {
      return;
    }
    props.onClick();
  };

  const { isLoading, showSecondIcon } = props;
  const { classes } = props;
  const buttonClassName = classNames({
    [classes.buttonSuccess]: showSecondIcon
  });

  return (
    <div className={classes.root}>
      {!!props.firstIcon && (
        <div className={classes.wrapper}>
          <div>
            <Button
              variant="fab"
              color="primary"
              className={buttonClassName}
              onClick={onClick}
              disabled={isLoading || props.isDisabled}
              title={props.text}
            >
              <Icon>{!showSecondIcon ? props.firstIcon : props.secondIcon}</Icon>
            </Button>
          </div>
          {isLoading && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      )}
      {!props.firstIcon && (
        <div className={classes.wrapper}>
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
          <Button
            variant="contained"
            color="primary"
            className={buttonClassName}
            disabled={isLoading || props.isDisabled}
            onClick={onClick}
          >
            {props.text}
          </Button>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)<IButtonWithProgressProps>(ButtonWithProgress);
