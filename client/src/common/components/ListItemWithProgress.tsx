import { WithStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import { StyleRulesCallback, ListItem, ListItemIcon, ListItemText, Icon } from "@material-ui/core";
import * as React from "react";
import * as classNames from "classnames";

type ClassesType = "root" | "secondIcon" | "buttonProgress";

const styles: StyleRulesCallback<ClassesType> = () => ({
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

export interface IListItemWithProgressProps {
  isLoading?: boolean;
  onClick: () => any;
  showSecondIcon?: boolean;
  firstIcon?: string;
  secondIcon?: string;
  text: string;
  isDisabled?: boolean;
}

type Props = IListItemWithProgressProps & WithStyles<ClassesType>;

const ListItemWithProgress: React.SFC<Props> = props => {
  const { isLoading } = props;
  const { classes } = props;

  const buttonClassName = classNames({
    [classes.secondIcon]: props.showSecondIcon
  });

  return (
    <div className={classes.root}>
      {
        <ListItem button={true} onClick={props.onClick} disabled={props.isDisabled}>
          <ListItemIcon>
            <Icon className={buttonClassName}>{props.showSecondIcon ? props.secondIcon : props.firstIcon}</Icon>
          </ListItemIcon>
          <ListItemText primary={props.text} />
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </ListItem>
      }
    </div>
  );
};

export default withStyles(styles)<IListItemWithProgressProps>(ListItemWithProgress);
