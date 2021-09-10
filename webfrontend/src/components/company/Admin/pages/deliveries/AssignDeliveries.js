import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

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
});

export default function AssignDeliveries() {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <div className={classes.innerdiv1}>
        <Paper className={classes.papers}>
          <h5>Assign Deliveries</h5>
          <hr />
        </Paper>
      </div>
      <div className={classes.innerdiv2}>
        <Paper className={classes.papers}>
          <h5>Delivery Summary</h5>
          <hr />
        </Paper>
      </div>
    </div>
  );
}
