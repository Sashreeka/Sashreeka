import { FormControlLabel, Checkbox as MuiCheckbox } from "@material-ui/core";
import React from "react";

export default function Checkbox(props) {
  const { name, label, onChange, color, value } = props;

  return (
    <div>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={value}
            onChange={onChange}
            name={name}
            color="Primary"
          />
        }
        label={label}
      />
    </div>
  );
}
