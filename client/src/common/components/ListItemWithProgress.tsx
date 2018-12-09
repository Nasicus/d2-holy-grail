import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import { ListItem, ListItemIcon, ListItemText, Icon, createStyles, WithStyles, withStyles } from "@material-ui/core";
import * as React from "react";
import * as classNames from "classnames";

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

type Props = IListItemWithProgressProps & WithStyles<typeof styles>;

const ListItemWithProgressInternal: React.FunctionComponent<Props> = props => {
  const { isLoading } = props;
  const { classes } = props;

  const buttonClassName = classNames({
    [classes.secondIcon]: props.showSecondIcon
  });

  return (
    <div className={classes.root}>
      {
        <ListItem button={!!props.onClick} onClick={props.onClick} disabled={props.isDisabled}>
          <ListItemIcon>
            <Icon className={buttonClassName}>{props.showSecondIcon ? props.secondIcon : props.firstIcon}</Icon>
          </ListItemIcon>
          <ListItemText primary={props.primaryText} secondary={props.secondaryText} />
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </ListItem>
      }
    </div>
  );
};

const styles = () =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    secondIcon: {
      color: green[500],
      "&:hover": {
        color: green[700]
      }
    },
    buttonProgress: {
      color: green[500],
      verticalAlign: "middle"
    }
  });

export const ListItemWithProgress = withStyles(styles)(ListItemWithProgressInternal);
