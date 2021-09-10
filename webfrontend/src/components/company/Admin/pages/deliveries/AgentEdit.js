import React from "react";
import Control from "../../../../common/Control";
import { MDBInput } from "mdbreact";
import { makeStyles, Paper, Button, TextField } from "@material-ui/core";

const handleInputChange = () => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaafffffff");
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
  const classes = useStyles();
  return (
    <div>
      <h1>Editing this page</h1>
      <div className={classes.maindiv}>
        <Paper className={classes.paperdiv}>
          <h6 style={{ fontWeight: "bold" }}>Agent Details</h6>
          <Control.Input
            variant="outlined"
            label="Agent Name"
            name="name"
            value=""
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            label="NIC"
            name="NIC"
            value=""
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            label="Phone Number"
            name="phoneNumber"
            value=""
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            label="Address"
            name="address"
            value=""
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            label="Driving Licence Number"
            name="drivingLicence"
            value=""
            onChange={handleInputChange}
          />
          <Control.Upload name="profileImg" label="profile Image upload" />
        </Paper>
        <Paper className={classes.paperdiv}>
          <h6 style={{ fontWeight: "bold" }}>Vehical Details</h6>
          <Control.Input
            variant="outlined"
            label="Vehical Number"
            placeholder="AAB-5433"
            name="vehicleNumber"
            value=""
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            label="Max Load"
            type="number"
            name="maxLoad"
            value=""
            style={{ width: 200 }}
            onChange={handleInputChange}
          />

          <p>vehicle type</p>
          <p>unit price</p>
          <p>fuel cont</p>
        </Paper>
      </div>
    </div>
  );
}
