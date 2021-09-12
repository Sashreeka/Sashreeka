import React from "react";
import { makeStyles, Button as MuiButton } from "@material-ui/core";

const usestyles = makeStyles({
  root: {
    margin: 10,
    marginTop: 30,
  },
});

export default function Button(props) {
  const { varient, size, color, onClick, text, ...other } = props;
  const classes = usestyles();

  return (
    <MuiButton
      variant={varient || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      className={classes.root}
    >
      {text}
    </MuiButton>
  );
}
