import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

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

export default function TabOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAllunssigedorders")
      .then((res) => {
        console.log("success :", res.data);
        setOrders(res.data);
        console.log(orders);
      })
      .catch((err) => console.log("err :", err));
  }, []);

  return (
    <div>
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
