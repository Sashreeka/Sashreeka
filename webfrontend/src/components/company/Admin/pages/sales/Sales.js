import React from "react";
import "./sales.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { SalesData, UserData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import SalesDetails from "./salesDetails/SalesDetails";

import { BarChart } from "@material-ui/icons";

export default function Sales() {
  return (
    <div className="Salescon">
      <Sidebar title="sales" />

      <div className="sales">
        {/* <div className="sales_analytics">
                <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
                </div> */}
        {/* <div className="sales_barchart">
                <BarChart/>
                </div> */}

        <Chart
          data={UserData}
          title="Growth of Income"
          grid
          line2={true}
          dataKey="Monthly Income Rs."
          dataKey2="Monthly sales income"
          line3={true}
          dataKey3="Delivery Income"
        />

        <SalesDetails />
      </div>
    </div>
  );
}
