import React, { useState, useEffect } from "react";
import "./delivery.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

import LineChart_Deliveries from "../../components/chart/LineChart_Deliveries";
import DoughnutChart from "../../components/chart/DoughnutChart";
import MaterialTable from "material-table";
import DeliveryHistoryNew from "./DeliveryHistoryNew";

export default function Delivery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/viewDeliveryDetails")
      .then((response) => {
        console.log("hi", response.data);
        setData(response.data);
      });
  }, []);

  const columns = [
    {
      title: "Id",
      field: "orderId",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "Farmer",
      field: "famerPhoneNumber",
      cellStyle: {
        width: "20%",
      },
    },
    {
      title: "Farmer-Tel",
      field: "famerPhoneNumber",
      cellStyle: {
        width: "13%",
      },
    },
    {
      title: "delivery Load",
      field: "deliveryLoad",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "distance",
      field: "distance",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "delivering date",
      field: "dateTime",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "status",
      field: "ConfirmationFlag",
      cellStyle: {
        width: "10%",
      },
    },
  ];

  return (
    <div className="deliveryCon">
      <div style={{ flex: 4 }}>
        {/* *******charts**************** */}
        
        <div style={{ display: "flex" }}>
          <div className="lineChart">
            <LineChart_Deliveries />
          </div>
          {/* <div className="doughnutChart">
            <DoughnutChart />
          </div> */}
        </div>

        {/* *******table****************** */}
        <div className="delivery">
        <DeliveryHistoryNew/>
          <MaterialTable
            title="Company delivery Details"
            data={data}
            columns={columns}
            options={{
              search: true,
              paging: true,
              filtering: false,
              exportButton: true,
              backgroundColor: "#EEE",
              actionsColumnIndex: -1,
              headerStyle: {
                color: "#000",
                fontWeight: "bold",
                width: "15%",
              },
            }}
            actions={[
              {
                icon: "edit",
                tooltip: "Edit",
                onClick: (event, rowData) => {
                  window.location.href = "/deliveryCheck/" + rowData.userId;
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
