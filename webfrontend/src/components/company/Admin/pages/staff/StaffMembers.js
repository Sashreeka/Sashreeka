import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import { BarChart } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart2 from "../../components/chart/BarChart2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#d6f5d6",
  },
  selecting: {
    width: 400,
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    // backgroundColor: "red",
    float: "right",
  },
  boxcontainer: {
    marginTop: 30,
  },
  selectinputtag: {
    // height: 35,
  },
  selectinginner: {
    marginLeft: 20,
  },
  cards: {
    backgroundColor: "green",
  },
  imgbox: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: "100%",
  },

  rolename: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 14,
    color: "black",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
  },
  email: {
    fontSize: 12,
    color: "black",
  },
}));

export default function StaffMembers() {
  const classes = useStyles();
  const [roles, setRoles] = useState([]);
  const [staff, setStaff] = useState([]);
  const [roleId, setRoleId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAll_privilages_and_roles")
      .then((res) => {
        console.log(res.data);
        setRoles(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:4000/admin/viewCStaffDetailsSortByRole", roleId)
      .then((res) => {
        console.log("data anuki :", res.data);
        setStaff(res.data);
      })
      .catch((err) => console.log("thattttt:", err));
  }, []);

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setvalues({ ...values, [name]: value });
    var roleId = parseInt(e.target.value);
    // console.log(id);
    // console.log(typeof id);
    // setRoleId(id);
    // console.log(roleId);
    axios
      .post("http://localhost:4000/admin/viewCStaffDetailsSortByRole", {
        roleId,
      })
      .then((res) => {
        console.log("data ishan :", res.data);
        setStaff(res.data);
      })
      .catch((err) => console.log("this:", err));
  };

  return (
    <div>
      <div>
        <div className={classes.root}>
          <div style={{ backgroundColor: "yellow" }}>
            <div className={classes.selecting}>
              <div>sort by</div>
              <div className={classes.selectinginner}>
                <select
                  class="browser-default custom-select border-success"
                  name="roleId"
                  size="small"
                  // className={classes.selectinputtag}
                  value={roleId}
                  onChange={handleInputChange}
                >
                  <option selected key="all">
                    All
                  </option>
                  {roles.map((role) => (
                    <option key={role.roleId} value={role.roleId}>
                      {role.roleId}. &nbsp;&nbsp;&nbsp;{role.roleName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Grid container spacing={3} className={classes.boxcontainer}>
            {staff.map((member) => (
              <Grid key={member.userId} item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>
                  <div>
                    <img src={member.profileimage} className={classes.imgbox} />
                  </div>
                  <div>
                    <span className={classes.rolename}>{member.roleName}</span>
                  </div>
                  <div>
                    <span className={classes.name}>{member.name}</span>
                  </div>
                  <div>
                    <span className={classes.email}>{member.email}</span>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
