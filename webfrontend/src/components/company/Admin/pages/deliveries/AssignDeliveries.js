import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Avatar, Chip, Grid, makeStyles, Paper } from "@material-ui/core";
import Control from "../../../../common/Control";
import { deepOrange } from "@material-ui/core/colors";
import Button from "../../../../common/form_Elements/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "rgba(255, 7, 0, 0.55)",
    },
  },
  outer: {
    display: "flex",
  },
  innerdiv1: {
    flex: 5,
    margin: 5,
    backgroundColor: "#D8D8D8",
  },
  innerdiv2: {
    flex: 2,
    margin: 5,
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: 12,
  },
  quickboxes: {
    padding: 12,
    backgroundColor: deepOrange[50],
    display: "flex",
    fontSize: 15,
    marginBottom: 15,
  },
  month: {
    fontSize: 11,
  },
  load: {
    lineHeightStep: -3,
    fontSize: 12,
  },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdowncontainer: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  citydropdowndiv: {
    width: "36%",
    marginLeft: 20,
  },
  paper: {
    height: 85,
    width: 150,
    marginRight: 20,
    backgroundColor: "#00cc00",
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "address",
    headerName: "Address",
    width: 170,
    // editable: true,
  },
  {
    field: "district",
    headerName: "District",
    width: 150,
    // editable: true,
  },
  {
    field: "quickFlag",
    headerName: "Quick",
    width: 80,
    // render: (row) => (
    //   <div>{row.quickFlag == 1 ? <Chip size="small" label="Quick" /> : ""}</div>
    // ),
    // editable: true,
  },
  {
    field: "loads",
    headerName: "Load",
    width: 80,
    // editable: true,
  },
  {
    field: "graceenddate",
    headerName: "Delivery Deadline",
    width: 110,
    // editable: true,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];
export default function AssignDeliveries() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAllunssigedorders")
      .then((res) => {
        console.log("success :", res.data);
        setRows(res.data);
        console.log(rows);
      })
      .catch((err) => console.log("err :", err));
  }, []);
  return (
    <div className={classes.outer}>
      <div className={classes.innerdiv1}>
        <Paper elevation={5} className={classes.papers}>
          <div className={classes.topbar}>
            <div>
              <h5>Assign Delivery</h5>
            </div>
            <div className={classes.dropdowncontainer}>
              sort by
              <div className={classes.citydropdowndiv}>
                <select
                  class="browser-default custom-select border-success"
                  name="roleId"
                  size="small"
                  // className={classes.selectinputtag}
                  // value={roleId}
                  // onChange={handleInputChange}
                >
                  <option selected key="all">
                    All
                  </option>
                  {/* {roles.map((role) => (
                    <option key={role.roleId} value={role.roleId}>
                      {role.roleId}. &nbsp;&nbsp;&nbsp;{role.roleName} */}
                  {/* </option> */}
                  {/* ))} */}
                </select>
              </div>
              <div className={classes.citydropdowndiv}>
                <select
                  class="browser-default custom-select border-success"
                  name="roleId"
                  size="small"
                  // className={classes.selectinputtag}
                  // value={roleId}
                  // onChange={handleInputChange}
                >
                  <option selected key="all">
                    All
                  </option>
                  {/* {roles.map((role) => (
                    <option key={role.roleId} value={role.roleId}>
                      {role.roleId}. &nbsp;&nbsp;&nbsp;{role.roleName} */}
                  {/* </option> */}
                  {/* ))} */}
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div style={{ backgroundColor: "#ecf9ec", height: 290 }}>
            <div style={{ height: 290, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                // pageSize={5}
                // rowsPerPageOptions={[5]}
                checkboxSelection
                // disableSelectionOnClick
                // scrollbarSize={5}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#dedede",
              height: 110,
              marginTop: 20,
              paddingTop: 14,
              paddingRight: 20,
              paddingLeft: 20,
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                // backgroundColor: "red",
                display: "flex",
                height: 90,
                // overflowx: "scroll",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
              </Grid>
              {/* <Paper className={classes.paper}>hello</Paper>
              <Paper className={classes.paper}>hello</Paper>
              <Paper className={classes.paper}>hello</Paper>
              <br/>
              <Paper className={classes.paper}>hello</Paper>
              <Paper className={classes.paper}>hello</Paper>
              <Paper className={classes.paper}>hello</Paper> */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              height: 40,
              marginTop: 20,
            }}
          >
            <Control.Button
              variant="contained"
              color="primary"
              text="ASsign"
              type="submit"
              size="large"
              style={{
                marginTop: 0,
              }}
            />
          </div>
        </Paper>
      </div>

      <div className={classes.innerdiv2}>
        <Paper elevation={4} className={classes.papers}>
          <div>
            <div>
              <h5>Quick Deliveries</h5>
            </div>
            <hr />
            <div>
              <Paper className={classes.quickboxes}>
                <div>
                  <Avatar variant="square" className={classes.square}>
                    <div className={classes.date}>14th</div>
                  </Avatar>
                </div>
                <div>
                  September 2021
                  <br />
                  <b>Hambanthota</b>
                  <br />
                  <span className={classes.load}>25kg load</span>
                </div>
              </Paper>
              <Paper className={classes.quickboxes}>
                <div>
                  <Avatar variant="square" className={classes.square}>
                    <div className={classes.date}>15th</div>
                  </Avatar>
                </div>
                <div>
                  September 2021
                  <br />
                  <b>Sigiriya</b>
                  <br />
                  <span className={classes.load}>100kg load</span>
                </div>
              </Paper>
              <Chip size="small" label="Basic" />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
