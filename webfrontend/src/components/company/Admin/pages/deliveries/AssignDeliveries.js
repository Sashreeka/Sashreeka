import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  Avatar,
  CardActionArea,
  Chip,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import Control from "../../../../common/Control";
import { deepOrange, green, orange } from "@material-ui/core/colors";
import Button from "../../../../common/form_Elements/Button";
import axios from "axios";
import { FiberManualRecord, LocalShipping } from "@material-ui/icons";
import ReuseDialog from "../deliveries/ReuseDialog";

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
    flex: 3,
    marginTop: 5,
    marginLeft: -15,
    backgroundColor: "#D8D8D8",
  },
  innerdiv2: {
    flex: 1,
    marginLeft: 15,
    marginTop: 5,
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: orange[500],
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: 12,
  },
  quickboxes: {
    padding: 12,
    backgroundColor: orange[50],
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
    top: -6,
  },
  citydropdowndiv: {
    width: "36%",
    marginLeft: 20,
  },
  papers: {
    padding: 20,
  },
  paper: {
    height: 70,
    width: 150,
    backgroundColor: "#40bf40",
    padding: 10,
  },
  paperselected: {
    height: 70,
    width: 150,
    backgroundColor: "#9fdf9f",
    padding: 10,
  },
  datepicker: {
    border: "1px solid",
    padding: 6,
    borderRadius: 5,
    borderColor: green[400],
  },
  filter: {
    fontSize: 12,
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 110 },
  {
    field: "address",
    headerName: "Address",
    width: 240,
    // editable: true,
  },
  {
    field: "district",
    headerName: "District",
    width: 120,
    // editable: true,
  },
  {
    field: "quickFlag",
    headerName: "Quick",
    renderCell: (params) => {
      return <div>{params.value ? <Quick /> : "-"}</div>;
    },
    width: 90,
  },
  {
    field: "loads",
    headerName: "Load",
    width: 80,
    valueFormatter: (params) => {
      // const valueFormatted = Number(params.value).toLocaleString();
      return `${params.value} Kg`;
    },
  },
  {
    field: "graceenddate",
    headerName: "Delivery Deadline",
    width: 110,
  },
];

const Quick = () => (
  <Control.Label
    label="quick"
    colour="red"
    icon={<FiberManualRecord />}
  ></Control.Label>
);

const NotQuick = () => (
  <Control.Label
    label=""
    colour="green"
    icon={<FiberManualRecord />}
  ></Control.Label>
);
// https://stackoverflow.com/questions/64232909/how-to-delete-a-specific-row-in-material-ui-datagrid-reactjs?rq=1

export default function AssignDeliveries() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [listDistricts, setListDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [dilOrders, setDilOrders] = useState([
    { id: 1, name: "xxx", age: "33" },
    { id: 2, name: "xxx", age: "38" },
    { id: 3, name: "xxx", age: "43" },
    { id: 4, name: "xxx", age: "23" },
  ]);

  const [deletedRows, setDeletedRows] = useState([]);
  const [load, setload] = useState(0);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [agentlist, setAgentlist] = useState([]);
  const [deliverydetails, setDeliverydetails] = useState([]);
  const [vehicle, setVehicle] = useState("");
  const [errors, setErrors] = useState([]);

  const handleRowSelection = (e) => {
    console.log("selected : ", e.isSelected);
    // console.log("loads : ", e.data);
    setload(calcLoad(load, e.data.loads, e.isSelected));
    console.log("my total : ", load);
    console.log("rows : ", rows);

    console.log("hello :", [rows.map((x) => x.id == e.data.id)]);
    console.log("hello 2 :", [
      rows.map((x) => x.id == e.data.id).findIndex((item) => item == true),
    ]);

    if (e.isSelected) {
      setSelectedOrders([
        ...selectedOrders,
        rows[
          rows.map((x) => x.id == e.data.id).findIndex((item) => item == true)
        ],
      ]);
      console.log("selectedOrders : ", selectedOrders);
    } else {
      setSelectedOrders(selectedOrders.filter((r) => r.id !== e.data.id));
      console.log("selectedOrders : ", selectedOrders);
    }

    // setDeletedRows([...deletedRows, ...rows.filter((r) => r.id === e.data.id)]);
  };

  const calcLoad = (tot, newval, isSelected) => {
    if (isSelected) {
      return (tot = tot + newval);
    } else {
      return (tot = tot - newval);
    }
  };

  const calculatedate = (n) => {
    var date = new Date();
    var n = date.setDate(date.getDate() + n);
    console.log(date.toISOString());
    console.log(n.toString());
    // var x = n.toISOString();
    // return x.slice(0, 10);
  };

  const handleVehicleSelect = (userId) => {
    console.log(userId);
    console.log(agentlist.filter((r) => r.userId == userId)[0]);
    setVehicle(agentlist.filter((r) => r.userId == userId)[0]);
  };

  const [vehicledetail, setVehicleDetail] = useState([]);
  const [deliveryidPre, setDeliveryidPre] = useState("");

  const handleAssign = () => {
    console.log("hello assigned");
    var x = validate();
    if (x) {
      console.log("valid");
      openSuccessPop();

      console.log("selectedOrders: ", selectedOrders);
      console.log("vehicle: ", vehicle);
      console.log("agents: ", agentlist);

      console.log("delivery date : ", deliveryDate);
      setVehicleDetail(agentlist.filter((r) => r.userId == vehicle.userId)[0]);
      console.log("agentfilter: ", vehicledetail);

      axios
        .get("http://localhost:4000/assign/getpreviousdeliveryId")
        .then((res) => {
          console.log("last delid:", res.data[0]);
          setDeliveryidPre(res.data[0]);
        })
        .catch((err) => console.log("err:", err));
      axios
        .post("http://localhost:4000/dummy/deletableapi", {
          dilOrders,
          selectedOrders,
          vehicledetail,
          deliveryDate,
          deliveryidPre,
        })
        .then((res) => console.log("suvvess :", res))
        .catch((err) => console.log("failed:", err));
    } else {
      console.log("NOT valid");
      openErrPop();
      console.log(
        dilOrders.map((item) => [item["id"], item["name"], item["age"]])
      );

      // const values = dilOrders.map((item) => [
      //   item["id"],
      //   item["name"],
      //   item["age"],
      // ]);
    }
  };

  const [valid, setvalid] = useState(false);
  const validate = () => {
    console.log(vehicle ? true : false);
    console.log(deliveryDate ? true : false);
    console.log(load > 0 && load < vehicle.maxLoad * 1000 ? true : false);

    const a = vehicle
      ? true
      : setErrors(...errors, "You haven't selected a vehicle");
    const b = deliveryDate
      ? true
      : setErrors(...errors, "You haven't assigned a delivery date");
    const c =
      load > 0 && load < vehicle.maxLoad * 1000
        ? true
        : setErrors(...errors, "Vehicle is overloded");
    const d =
      load > 0 ? true : setErrors(...errors, "No load added to vehicle!");

    a === true && b === true && c === true && d === true
      ? setvalid(true)
      : setvalid(false);

    return a === true && b === true && c === true && d === true;
  };

  const [errpop, SetErrpop] = useState(false);
  const [sucesspop, SetSuccesspop] = useState(false);

  const openErrPop = () => {
    console.log("visivle to you");
    SetErrpop(true);
  };
  const closeErrPop = () => {
    console.log("visivle to you -closed");
    SetErrpop(false);
  };
  const openSuccessPop = () => {
    console.log("Editable content");
    SetSuccesspop(true);
  };
  const closeSuccessPop = () => {
    console.log("Editable content closed");
    SetSuccesspop(false);
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAllunssigedorders")
      .then((res) => setRows(res.data))
      .catch((err) => console.log("err :", err));

    axios
      .get("http://localhost:4000/admin/getAllunssigedordersDistrictList")
      .then((res) => setListDistricts(res.data))
      .catch((err) => console.log("err :", err));

    axios
      .get("http://localhost:4000/admin/getdeliveyagentetailsvehicalsorted")
      .then((res) => {
        setAgentlist(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("err :", err));

    axios
      .get("http://localhost:4000/admin/viewDeliveryDetailsOfOrders")
      .then((res) => setDeliverydetails(res.data))
      .catch((err) => console.log("err :", err));
  }, []);

  // const selectedDistrictFun = () => {
  //   axios
  //     .post(
  //       "http://localhost:4000/admin/getAllunssigedorders",
  //       selectedDistrict
  //     )
  //     .then((res) => {
  //       setRows(res.data);
  //     })
  //     .catch((err) => console.log("err :", err));
  // };

  const func = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className={classes.outer}>
        <div className={classes.innerdiv1}>
          <Paper elevation={5} className={classes.papers}>
            <div className={classes.topbar}>
              <div>
                <h5>Assign Delivery</h5>
              </div>
              <div className={classes.dropdowncontainer}>
                <div className={classes.citydropdowndiv}>
                  <span className={classes.filter}>Assign delivery date</span>
                  <input
                    type="date"
                    value={deliveryDate}
                    className={classes.datepicker}
                    onChange={(e) => {
                      setDeliveryDate(e.target.value);
                      console.log("type:", e.target.value.toString());
                      console.log("deldate:", deliveryDate.toString());
                    }}
                    min={"2021-09-20"}
                    max={"2021-09-27"}
                  />
                  {/* <select
                  class="browser-default custom-select border-success"
                  name="roleId"
                  size="small"
                  className={classes.selectinputtag}
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
                </select> */}
                </div>
                <div className={classes.citydropdowndiv}>
                  <span className={classes.filter}>filter </span>
                  <select
                    class="browser-default custom-select border-success"
                    name="roleId"
                    size="small"
                    placeholder="my dist"
                    // className={classes.selectinputtag}
                    value={selectedDistrict}
                    onChange={(e) => {
                      setSelectedDistrict(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option selected key="all" value="all">
                      District -All
                    </option>
                    {listDistricts.map((item, index) => (
                      <option key={item.index} value={item.district}>
                        {item.district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ backgroundColor: "#ecf9ec", height: 290 }}>
              <div style={{ height: 290, width: "100%" }}>
                <DataGrid
                  rows={
                    selectedDistrict == "all"
                      ? rows
                      : rows.filter((r) => r.district == selectedDistrict)
                  }
                  columns={columns}
                  // pageSize={5}
                  // rowsPerPageOptions={[5]}
                  onRowSelected={handleRowSelection}
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
                  {agentlist.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <CardActionArea
                        onClick={() => {
                          handleVehicleSelect(item.userId);
                          // console.log("clicked", item.userId);
                        }}
                      >
                        <Paper
                          className={
                            item.userId == vehicle.userId
                              ? classes.paper
                              : classes.paperselected
                          }
                        >
                          <div style={{ fontSize: 13 }}>
                            <LocalShipping />
                            &nbsp;&nbsp;&nbsp; {item.vehicleId}
                          </div>
                          <div style={{ alignItems: "center" }}>
                            Max Load : {item.maxLoad}T
                          </div>
                        </Paper>
                      </CardActionArea>
                    </Grid>
                  ))}
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
                justifyContent: "space-between",
                height: 40,
                marginTop: 20,
                // backgroundColor: "red",
              }}
            >
              <div
                style={{
                  marginLeft: 20,
                  display: "flex",
                }}
              >
                <div>
                  Total Load :{load} Kg
                  <br />
                  {vehicle ? (
                    <div>max load : {vehicle.maxLoad * 1000} Kg</div>
                  ) : (
                    <div>No vehicle selected</div>
                  )}
                </div>
                <div style={{ paddingLeft: 20 }}>
                  {deliveryDate ? (
                    <div>Delivery Date : {deliveryDate}</div>
                  ) : (
                    <div>No delivery date selected</div>
                  )}
                </div>
              </div>
              {validate}

              <Control.Button
                variant="contained"
                color="primary"
                text="ASsign"
                type="submit"
                size="large"
                style={{
                  marginTop: 0,
                }}
                onClick={handleAssign}
              />
            </div>
          </Paper>
        </div>

        <div className={classes.innerdiv2}>
          <Paper elevation={4} className={classes.papers}>
            <div>
              <div>
                <h5>
                  Quick Deliveries&nbsp;&nbsp;&nbsp;
                  <Quick />
                </h5>
              </div>
              <hr />
              <div>
                {rows
                  .filter((r) => r.quickFlag == 1)
                  .map((item, index) => (
                    <Paper key={index} className={classes.quickboxes}>
                      <div>
                        <Avatar variant="square" className={classes.square}>
                          <div className={classes.date}>
                            {parseInt(item.graceenddate.slice(0, 2))}
                          </div>
                        </Avatar>
                      </div>
                      <div>
                        {item.graceenddate}
                        <br />
                        <b>{item.district}</b>
                        <br />
                        <span className={classes.load}>
                          {item.loads} Kg load
                        </span>
                      </div>
                    </Paper>
                  ))}

                <Chip size="small" label="Basic" />
              </div>
            </div>
          </Paper>
        </div>
      </div>

      {/* popup dialog box 1 - err details */}
      <div>
        <ReuseDialog
          onclose={closeErrPop}
          open={errpop}
          dialogTitle={"Problem in assigning deliveries"}
        >
          <div>
            <b>Please check before assigning delivery: </b>
          </div>
          {vehicle ? "" : <div>You haven't selected a vehicle</div>}
          {deliveryDate ? "" : <div>You haven't assigned a delivery date</div>}
          {load > 0 && load < vehicle.maxLoad * 1000 ? (
            ""
          ) : (
            <div>Vehicle is overloded</div>
          )}
          {load > 0 ? "" : <div>No load added to vehicle!</div>}
        </ReuseDialog>
      </div>

      {/* popup dialog box 2 - sucess details */}
      <div>
        <ReuseDialog
          onclose={closeSuccessPop}
          open={sucesspop}
          dialogTitle={"Delivery"}
        >
          <h3>
            <b>Sucessfully Assigned!</b>
          </h3>
        </ReuseDialog>
      </div>
    </div>
  );
}
