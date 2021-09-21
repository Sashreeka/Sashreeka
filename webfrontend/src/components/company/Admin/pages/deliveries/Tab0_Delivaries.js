import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import { blue, green, orange } from "@material-ui/core/colors";
import {
  AddToPhotosRounded,
  AllInboxRounded,
  ArrowForward,
  ArrowForwardIos,
  BeenhereOutlined,
  LocalShippingOutlined,
  LocalShippingRounded,
  Pageview,
  PeopleOutline,
  Warning,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paperbox1: {
    // padding: 30,
    backgroundColor: "#ededed",
    display: "flex",
    // backgroundColor: "#FF6384",
  },
  paperbox2: {
    // padding: 30,
    backgroundColor: "#ededed",
    // backgroundColor: "#9966ff",
  },
  paperbox3: {
    // padding: 30,
    backgroundColor: "#ededed",
    // backgroundColor: "#FF5D56",
  },
  paperbox4: {
    // padding: 30,
    backgroundColor: "#ededed",
    // backgroundColor: "#ff9f40",
  },

  large1: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: green[500],
  },
  large2: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: orange[500],
  },
  large3: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: "red",
  },
  large4: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: blue[500],
  },
  box: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boxnumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: "grey",
  },
  boxtext: {
    fontSize: 17,
    fontWeight: "bold",
    color: "grey",
  },
  links: {
    padding: 10,
    cursor: "grab",
    "&:hover": {
      background: "#efefef",
    },
  },
}));
export default function Tab0_Delivaries() {
  const classes = useStyles();
  return (
    <div>
      <h2>Deliveries</h2>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginTop: 110 }}>
          <Paper elevation={0}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Paper className={classes.links}>
                  <ArrowForwardIos /> Assign
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.links}>
                  {" "}
                  <ArrowForwardIos />
                  History
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.links}>
                  <ArrowForwardIos /> Agents
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div style={{ flex: 2 }}>
          <Paper elevation={0} style={{ margin: 40 }}>
            <h2 style={{ alignSelf: "center", marginBottom: 20 }}>
              Today Summary
            </h2>
            <Grid container spacing={5}>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paperbox1}>
                  <Avatar variant="square" className={classes.large1}>
                    <AllInboxRounded style={{ fontSize: 60 }} />
                  </Avatar>
                  <div className={classes.box}>
                    <div className={classes.boxnumber}>6</div>
                    <div className={classes.boxtext}>New orders</div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paperbox1}>
                  <Avatar variant="square" className={classes.large2}>
                    <PeopleOutline style={{ fontSize: 60 }} />
                  </Avatar>
                  <div className={classes.box}>
                    <div className={classes.boxnumber}>6</div>
                    <div className={classes.boxtext}>Agents</div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paperbox1}>
                  <Avatar variant="square" className={classes.large3}>
                    <LocalShippingOutlined style={{ fontSize: 60 }} />
                  </Avatar>
                  <div className={classes.box}>
                    <div className={classes.boxnumber}>6</div>
                    <div className={classes.boxtext}>Unassigned Deliveries</div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper className={classes.paperbox1}>
                  <Avatar variant="square" className={classes.large4}>
                    <BeenhereOutlined style={{ fontSize: 60 }} />
                  </Avatar>
                  <div className={classes.box}>
                    <div className={classes.boxnumber}>6</div>
                    <div className={classes.boxtext}>Assigned deliveries</div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}
