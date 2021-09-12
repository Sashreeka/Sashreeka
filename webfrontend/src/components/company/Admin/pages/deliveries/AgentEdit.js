import React, { useEffect } from "react";
import Control from "../../../../common/Control";
import { MDBInput } from "mdbreact";
import { makeStyles, Paper, Button, TextField } from "@material-ui/core";
import { Form, ReuseForm } from "./ReuseForm";

const initialFValues = {
  name: "",
  NIC: "",
  phoneNumber: "",
  address: "",
  drivingLicence: "",
  profileImage: "",
  vehicalNumber: "",
  maxLoad: 0,
};

const useStyles = makeStyles({
  maindiv: {
    display: "flex",
  },
  paperdiv: {
    flex: 2,
    paddingRight: 30,
    paddingLeft: 30,
    margin: 10,
  },
});

export default function AgentEdit() {
  // useEffect(() => {
  //   axios.get('http://localhost:4000/admin/getdeliveyagentetailsById/2')
  // }, []);

  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    // if ("fullName" in fieldValues) {
    //   temp.fullName = fieldValues.fullName ? "" : "This field is required!";
    // }
    // if ("email" in fieldValues) {
    //   temp.email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
    //     fieldValues.email
    //   )
    //     ? ""
    //     : "Invalid email format!";
    // }
    // if ("mobile" in fieldValues) {
    //   temp.mobile =
    //     fieldValues.mobile.length > 9 ? "" : "Invalid length of mobile number!";
    // }
    // if ("deparmentid" in fieldValues) {
    //   temp.deparmentid =
    //     fieldValues.deparmentid.length != 0 ? "" : "This field is required!";
    // }
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == ""); // returns true or false
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    ReuseForm(initialFValues, true, validation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      window.alert(validation());
      // axois. function
      resetForm();
    }
  };

  const classes = useStyles();
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h5>Editing this page</h5>
        <div className={classes.maindiv}>
          <Paper className={classes.paperdiv}>
            <h6 style={{ fontWeight: "bold" }}>Agent Details</h6>
            <Control.Input
              variant="outlined"
              label="Agent Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
            <Control.Input
              variant="outlined"
              label="NIC"
              name="NIC"
              value={values.NIC}
              onChange={handleInputChange}
            />
            <Control.Input
              variant="outlined"
              label="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
            <Control.Input
              variant="outlined"
              label="Address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
            <Control.Input
              variant="outlined"
              label="Driving Licence Number"
              name="drivingLicence"
              value={values.drivingLicence}
              onChange={handleInputChange}
            />
            <Control.Upload name="profileImage" label="profile Image upload" />
          </Paper>
          <Paper className={classes.paperdiv}>
            <h6 style={{ fontWeight: "bold" }}>Vehical Details</h6>
            <Control.Input
              variant="outlined"
              label="Vehical Number"
              placeholder="AAB-5433"
              name="vehicalNumber"
              value={values.vehicalNumber}
              onChange={handleInputChange}
            />
            <Control.Input
              variant="outlined"
              label="Max Load"
              type="number"
              name="maxLoad"
              value={values.maxLoad}
              style={{ width: 200 }}
              onChange={handleInputChange}
            />

            <p>vehicle type</p>
            <p>unit price</p>
            <p>fuel cont</p>
          </Paper>
        </div>
      </div>
    </Form>
  );
}
