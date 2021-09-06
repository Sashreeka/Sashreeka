import React from "react";
import { Button as MuiButtom } from "@material-ui/core";

export default function Button(props) {
  const { title, variant, color, ...other } = props;
  return (
    <div>
      <MuiButtom
        variant={variant || "contained"}
        color={color || "primary"}
        {...other}
      >
        {title}
      </MuiButtom>
    </div>
  );
}
