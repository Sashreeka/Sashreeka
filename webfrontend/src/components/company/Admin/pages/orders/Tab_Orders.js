import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import MaterialTable from "material-table";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "address",
//     headerName: "Address",
//     width: 170,
//     // editable: true,
//   },
//   {
//     field: "district",
//     headerName: "District",
//     width: 150,
//     // editable: true,
//   },
//   {
//     field: "quickFlag",
//     headerName: "Quick",
//     width: 80,
//     // render: (row) => (
//     //   <div>{row.quickFlag == 1 ? <Chip size="small" label="Quick" /> : ""}</div>
//     // ),
//     // editable: true,
//   },
//   {
//     field: "loads",
//     headerName: "Load",
//     width: 80,
//     // editable: true,
//   },
//   {
//     field: "graceenddate",
//     headerName: "Delivery Deadline",
//     width: 110,
//     // editable: true,
//   },
// ];


const columns = [
  {
    title: "Id",
    field: "id",
    cellStyle: {
      width: "5%",
    },
  },

  // {
  //   title: "",
  //   field: "photo",
  //   render: (item) => (
  //     <img
  //       src={item.photo}
  //       alt=""
  //       height="30"
  //       width="30"
  //       style={{ borderRadius: 20 }}
  //     />
  //   ),

  //   cellStyle: {
  //     width: "0%",
  //     paddingRight: 0,
  //   },
  // },

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

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, "firstName") || ""} ${
//         params.getValue(params.id, "lastName") || ""
//       }`,
//   },
// ];

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

export default function TabOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/getAllunssigedorders")
      .then((res) => {
        console.log("success :", res.data);
        setOrders(res.data);
        console.log(orders);
      })
      .catch((err) => console.log("err :", err));
  }, []);

  return (
    <div>
      <div style={{  marginLeft:-20,width: "100%" }}>
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
          // actions={[
          //   {
          //     icon: "edit",
          //     tooltip: "Edit",
          //     onClick: (event, rowData) => {
          //       window.location.href = "/product/" + rowData.fertilizerId;
          //     },
          //   },

          //   {
          //     icon: "delete",
          //     tooltip: "Delete",
          //     onClick: (event, rowData) => {
          //       confirmAlert({
          //         title: "Confirm to Delete",
          //         message: "Are you sure to do this.",
          //         buttons: [
          //           {
          //             label: "Yes",
          //             onClick: () => {
          //               deleteProduct(rowData.fertilizerId);
          //             },
          //           },
          //           {
          //             label: "No",
          //           },
          //         ],
          //       });
          //     },
          //   },
          // ]}
        />

        {/* <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        /> */}
      </div>
    </div>
  );
}
