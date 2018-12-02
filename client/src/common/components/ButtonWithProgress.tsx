import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import * as React from "react";
import * as classNames from "classnames";
import Icon from "@material-ui/core/Icon/Icon";
import Fab from "@material-ui/core/Fab";

const styles = (theme: Theme) =>
  createStyles({
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
    },
    secondIconNormalButton: {
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
  className?: string;
}

type Props = IButtonWithProgressProps & WithStyles<typeof styles>;

const ButtonWithProgress: React.SFC<Props> = props => {
  const onClick = () => {
    if (props.isLoading) {
      return;
    }
    props.onClick();
  };

  const { isLoading, showSecondIcon, className } = props;
  const { classes } = props;
  const buttonClassName = classNames({
    [classes.buttonSuccess]: showSecondIcon
  });

  return (
    <div className={classNames(classes.root, className)}>
      {!!props.firstIcon && (
        <div className={classes.wrapper}>
          <div>
            <Fab
              color="primary"
              className={buttonClassName}
              onClick={onClick}
              disabled={isLoading || props.isDisabled}
              title={props.text}
            >
              <Icon>{!showSecondIcon ? props.firstIcon : props.secondIcon}</Icon>
            </Fab>
          </div>
          {isLoading && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      )}
      {!props.firstIcon && (
        <div className={classes.wrapper}>
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
          {showSecondIcon && <Icon className={classes.secondIconNormalButton}>{props.secondIcon}</Icon>}
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

export default withStyles(styles)(ButtonWithProgress);
