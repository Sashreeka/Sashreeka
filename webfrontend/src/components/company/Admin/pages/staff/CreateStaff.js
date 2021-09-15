import { makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Control from "../../../../common/Control";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from "axios";
import { PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles({
  outerpaper: {
    display: "flex",
    margin: 30,
    marginTop: 10,
  },
  innerdividepaper: {
    flex: 2,
    margin: 30,
  },
  namefeild: {
    display: "flex",
    marginBottom: -20,
  },
  namefeilddivide: {
    flex: 1,
  },
  namefeilddividemid: {
    width: 20,
  },
  datepic: {
    marginTop: 20,
    marginBottom: 20,
  },
  spacer: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonset: {
    position: "relative",
    right: 0,
    bottom: 0,
  },
});

export default function CreateStaff() {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [roles, setRoles] = useState([]);
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nic: "",
    phoneNumber: "",
    address: "",
    temporaryAddress: "",
    profileImage: "",
    role: "",
    selectedDate: new Date(),
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAll_privilages_and_roles")
      .then((res) => {
        console.log(res.data);
        setRoles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
    console.log(values);
  };

  const formSubmit = () => {
    alert("Please confirm if you want to create a staff member");
    console.log("values :", values);
    axios
      .post("http://localhost:4000/admin/insertstaffmember", {
        values,
        selectedDate,
      })
      .then((res) => console.log("successfilly interted: ", res))
      .catch((err) => console.log("err : ", err));
  };
  return (
    <div>
      <h4 style={{ marginLeft: 40 }}>Add New Staff</h4>
      <div>
        <Paper elevation={5} className={classes.outerpaper}>
          <Paper elevation={0} className={classes.innerdividepaper}>
            <div>
              <div className={classes.namefeild}>
                <div className={classes.namefeilddivide}>
                  <Control.Input
                    variant="outlined"
                    label="First name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={classes.namefeilddividemid}></div>
                <div className={classes.namefeilddivide}>
                  <Control.Input
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <Control.Input
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              <Control.Input
                variant="outlined"
                label="NIC"
                name="nic"
                value={values.nic}
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
                label="Permenent Address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
              />
              <Control.Input
                variant="outlined"
                label="Temporary Address"
                name="temporaryAddress"
                value={values.temporaryAddress}
                onChange={handleInputChange}
              />
              <Control.Upload
                name="profileImage"
                label="profile Image upload"
              />
            </div>
          </Paper>
          <Paper elevation={0} className={classes.innerdividepaper}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.datepic}
                autoOk
                variant="inline"
                size="small"
                inputVariant="outlined"
                label="Appointed Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={(date) => handleDateChange(date)}
              />
            </MuiPickersUtilsProvider>
            <div className={classes.spacer}>
              <select
                class="browser-default custom-select"
                name="roleId"
                value={values.roleId}
                onChange={handleInputChange}
              >
                <option selected disabled>
                  Select Role
                </option>
                {roles.map((role) => (
                  <option key={role.roleId} value={role.roleId}>
                    {role.roleId}. &nbsp;&nbsp;&nbsp;{role.roleName}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.buttonset}>
              <Control.Button
                varient="contained"
                size="large"
                color="primary"
                onClick={formSubmit}
                text="Add to Staff"
                // startIcon={<PersonAdd />}
              />
            </div>
          </Paper>
        </Paper>
      </div>
    </div>
  );
}
