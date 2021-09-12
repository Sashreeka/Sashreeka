import React from "react";
import { TextField } from "@material-ui/core";
import { MDBInput } from "mdbreact";

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;

  return (
    <MDBInput
      outline
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      style={{ margintop: -20 }}
    />

    // <TextField
    //   variant="outlined"
    //   label={label}
    //   name={name}
    //   value={value}
    //   onChange={onChange}
    //   {...other}
    //   {...(error && { error: true, helperText: error })}
    // />
  );
}
