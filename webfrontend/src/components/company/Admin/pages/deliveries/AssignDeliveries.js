import React, { useEffect, useState } from "react";
import {
  Avatar,
  Chip,
  Fab,
  makeStyles,
  Paper,
  Tooltip,
} from "@material-ui/core";
import axios from "axios";
import Control from "../../../../common/Control";
import {
  Add,
  Autorenew,
  CheckCircle,
  Done,
  Face,
  PersonAdd,
  Remove,
  RemoveCircle,
  Today,
} from "@material-ui/icons";
import PieChart from "../../components/chart/PieChart";

const useStyles = makeStyles({
  outer: {
    display: "flex",
  },
  innerdiv1: {
    flex: 3,
    margin: 5,
  },
  innerdiv2: {
    flex: 2,
    margin: 5,
  },
  papers: {
    padding: 20,
  },
  absolute: {
    // position: "absolute",
    float: "right",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  Tooltips: {
    width: 34,
    height: 34,
  },
});

export default function AssignDeliveries() {
  const [availableAgents, setAvailableAgents] = useState([]);
  const [unassignedOrders, setUnassignedOrders] = useState([]);
  const [allOrderItems, setAllOrderItems] = useState([]);
  const [date, setDate] = useState("");
  const [agent, setAgent] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loads, setLoads] = useState([]);
  const [totalLoad, setTotalLoad] = useState(0);
  const [assigned, setAssighed] = useState(false);
  // const [select1, setSelect1] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getavailbledeliveyagentetails")
      .then((res) => {
        console.log("success available agent list :", res.data);
        setAvailableAgents(res.data);
        console.log("values :", availableAgents);
      })
      .catch((err) => console.log("Error available agent list :", err));

    axios
      .get("http://localhost:4000/admin/getunassignedorders")
      .then((res) => {
        console.log("success unassigned orders :", res.data);
        setUnassignedOrders(res.data);
        console.log("order values :", unassignedOrders);
      })
      .catch((err) => console.log("Error not assigned orders :", err));

    axios
      .get("http://localhost:4000/admin/getitemsofsunassignedordersall")
      .then((res) => {
        console.log("success All items :", res.data);
        setAllOrderItems(res.data);
        console.log("order values :", allOrderItems);
      })
      .catch((err) => console.log("Error All items :", err));
  }, []);

  const availableHandler = (e) => {
    console.log("agent selected : ", e.target.value);
    console.log("ieeeeeeeeee : ", availableAgents[e.target.value]);
    setAgent([]);
    setAgent(availableAgents[e.target.value]);
  };

  const itemListHandler = (e) => {
    console.log("item selected : ", e.target.value);
    console.log("ddddssssssss : ", unassignedOrders[e.target.value]);
    setOrders([...orders, unassignedOrders[e.target.value]]);
    const orderId = unassignedOrders[e.target.value].orderId;
    setUnassignedOrders(unassignedOrders.filter((x) => x.orderId != orderId));
    console.log("after setorder : ", orders);
    loading(unassignedOrders[e.target.value].orderId);
    // setTotalLoad();

    console.log("totalLoad :", totalLoad);
  };

  const removebtn = (orderId, index) => {
    setUnassignedOrders([...unassignedOrders, orders[index]]);
    setOrders(orders.filter((x) => x.orderId != orderId));
  };

  const loading = (orderId) => {
    // allOrderItems
    //   .filter((x) => x.orderId == orderId)
    //   .map((item) => {
    //     return item.weight * item.quantity;
    //   });
    const val = allOrderItems
      .filter((x) => x.orderId == orderId)
      .map((item) => {
        return item.weight * item.quantity;
      })
      .reduce(add, 0);
    setLoads([...loads, { orderId: orderId, weights: val }]);
    console.log("new load list : ", loads);
  };

  const add = (accumulator, a) => {
    return accumulator + a;
  };

  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <div className={classes.innerdiv1}>
        <Paper className={classes.papers}>
          <h5>Assign Deliveries</h5>
          <hr />
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fas fa-truck" style={{ paddingRight: 10 }}></i>

            <select
              class="form-select"
              aria-label="Default select example"
              onChange={availableHandler}
            >
              <option value="0" disabled selected>
                Available Agents
              </option>
              {availableAgents.map((agent, index) => (
                <option value={index}>{agent.name}</option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fas fa-hourglass-start" style={{ paddingRight: 20 }}></i>
            {/* <Control.DatePicker onChange={() => setDate} /> */}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", paddingTop: 20 }}
          >
            <i class="fas fa-box-open" style={{ paddingRight: 10 }}></i>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={itemListHandler}
            >
              <option value="0" disabled selected>
                Unassigned Orders list
              </option>
              {unassignedOrders.map((orders, index) => (
                <option value={index}>
                  {orders.district}&emsp;&emsp;{orders.receiverName}
                  &emsp;&emsp; quick : {orders.quickFlag}&emsp;&emsp;
                </option>
              ))}
            </select>
          </div>

          {/* <div style={{ display: "flex" }}>
            <div style={{ width: "15vw" }}>
              <PieChart />
            </div>
            <div></div>
          </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <div>
              {assigned ? (
                <div>
                  <Tooltip title="refresh" arrow>
                    <Control.Button
                      varient="contained"
                      size="medium"
                      color="primary"
                      onClick={() => console.log("reset button pressed!!")}
                      type="reset"
                      style={{ width: 50 }}
                      startIcon={<Autorenew />}
                      placement="right-end"
                    />
                  </Tooltip>
                  <Control.Button
                    disabled
                    varient="contained"
                    size="medium"
                    color="primary"
                    onClick={() => console.log("submit button pressed!!")}
                    text="Assigned"
                    type="submit"
                    style={{ width: 150 }}
                    startIcon={<CheckCircle />}
                    placement="right-end"
                  />
                </div>
              ) : (
                <Control.Button
                  varient="contained"
                  size="medium"
                  color="primary"
                  onClick={() => console.log("submit button pressed!!")}
                  text="Assign"
                  type="submit"
                  onClick={() => {
                    setAssighed(true);
                  }}
                  style={{ width: 150 }}
                  // startIcon={<PersonAdd />}
                  placement="right-end"
                />
              )}
            </div>
          </div>
        </Paper>
      </div>

      <div className={classes.innerdiv2}>
        <Paper className={classes.papers}>
          <div style={{ display: "flex" }}>
            <div>
              <h5>Delivery Summary</h5>
            </div>
            {assigned ? (
              <div style={{ paddingLeft: 10 }}>
                <Control.Label
                  label="Assigned"
                  colour="green"
                  icon={<CheckCircle />}
                  size="large"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <hr />
          Assigned To :<b>{agent.name}</b>
          <br />
          Vehical Number :
          <b>
            {agent.vehicleId}&nbsp;&nbsp;&nbsp;
            {agent.maxLoad ? (
              <Chip
                label={"max load :" + agent.maxLoad + "T"}
                // deleteIcon={<Done />}
                size="small"
                deleteIcon={<i class="fas fa-weight-hanging"></i>}
                style={{ backgroundColor: "#ffb3b3" }}
              />
            ) : (
              ""
            )}
          </b>
          <br />
          <br />
          Order Details :
          <hr style={{ color: "#C0C0C0" }} />
          {orders.map((item, index) => (
            <div>
              <div style={{ fontSize: 12, marginLeft: 30, marginRight: 30 }}>
                <span
                  style={{ fontSize: 14, fontWeight: "bold", marginLeft: -30 }}
                >
                  order {index + 1}{" "}
                  {item.quickFlag == 1 ? (
                    <Chip
                      label={"QD"}
                      // deleteIcon={<Done />}
                      size="small"
                      deleteIcon={<i class="fas fa-weight-hanging"></i>}
                      style={{
                        backgroundColor: "#ffb3b3",
                        fontSize: 12,
                        height: 20,
                      }}
                    />
                  ) : (
                    ""
                  )}
                </span>
                <p>
                  Name:{" "}
                  <b>
                    {item.receiverName} - {item.district}
                  </b>
                  <br />
                  Address:{" "}
                  <b>
                    {item.houseNumber},{item.streetName},{item.City}.
                  </b>
                  <br />
                  Order details:
                  <b>
                    <div
                      style={{
                        marginLeft: 30,
                        boxSizing: "borderbox",
                      }}
                    >
                      {allOrderItems
                        .filter((x) => x.orderId == item.orderId)
                        .map((item) => (
                          <span>
                            {item.fertilizerName} &nbsp;&nbsp;&nbsp;{" "}
                            {item.weight}kg x {item.quantity}
                            <br />
                          </span>
                        ))}
                    </div>
                  </b>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      marginTop: -15,
                      paddingTop: 5,
                    }}
                  >
                    <div style={{ flex: 6 }}> Payment status:</div>
                    <div style={{ flex: 1 }}>
                      <Tooltip
                        title="Remove"
                        aria-label="remove"
                        size="small"
                        placement="right-end"
                        className={classes.Tooltips}
                      >
                        <Fab
                          color="secondary"
                          className={classes.absolute}
                          onClick={() => {
                            removebtn(item.orderId, index);
                          }}
                        >
                          <Remove />
                        </Fab>
                      </Tooltip>
                    </div>
                  </div>
                </p>

                <hr style={{ color: "#C0C0C0" }} />
              </div>
            </div>
          ))}
        </Paper>
      </div>
    </div>
  );
}
