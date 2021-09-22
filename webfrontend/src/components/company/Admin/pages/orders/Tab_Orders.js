import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import MaterialTable from "material-table";

const columns = [
  {
    title: "Id",
    field: "id",
    cellStyle: {
      width: "5%",
    },
  },
  {
    title: "Farmer Telephone",
    field: "farmerPhoneNumber",

    cellStyle: {
      width: "22%",
      paddingLeft: 0,
    },
  },
  {
    title: "Delivery Address",
    field: "address",
    cellStyle: {
      width: "20%",
    },
    // render: (row)=><div className={row.stock>row.reOrderLevel?row.stock:"deactive"}>{row.stock?row.stock:row.stock}</div>
  },
  {
    title: "Status",
    field: "status",
    cellStyle: {
      width: "20%",
    },
  },
  {
    title: "Amount (Rs)",
    field: "amount",
    cellStyle: {
      width: "20%",
    },
  },
  {
    title: "Order Date",
    field: "ordereddate",
    cellStyle: {
      width: "15%",
    },
  },
];

export default function TabOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/getAllassigedorders")
      .then((res) => {
        console.log("success :", res.data);
        setOrders(res.data);
        console.log(orders);
      })
      .catch((err) => console.log("err :", err));
  }, []);

  return (
    <div>
      <div style={{ marginLeft: -20, width: "100%" }}>
        <MaterialTable
          title="Order Details"
          data={orders}
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
        />
      </div>
    </div>
  );
}
