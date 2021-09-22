import { Grid, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Box1_district from "../../components/chart/Box1_district";
import axios from "axios";

export default function Tab2() {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/reports/districtviseOrders")
      .then((response) => {
        setData1(response.data);
      });
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <Paper>
            <h2>Annual Delivery Report</h2>
            <h4>(Delivery Count Vs District)</h4>
            {/* <Box1_district
              data={data1}
              valueY={"orders"}
              ArgumentsX={"district"}
            /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
