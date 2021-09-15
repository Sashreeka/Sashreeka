import { Chip, makeStyles } from "@material-ui/core";
import React from "react";
import { Done, Face, CheckCircle } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    primary: green[500],
    secondary: red[500],
  },
});

export default function Label(props) {
  const { label, colour, icon, size } = props;

  const classes = useStyles();

  return (
    <Chip
      className={classes.root}
      variant="outlined"
      size={size || "small"}
      icon={icon || <CheckCircle />}
      label={label}
      clickable
      color="primary"
      style={{
        color: colour,
        backgroundColor: colour[100],
        borderColor: colour,
      }}
    />
  );
}
