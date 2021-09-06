import React, { useState, useEffect } from "react";
import "./deliveryAgent.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { PageShiftButtonOther } from "../userList/userListComponents/userListComponentsD";
import axios from "axios";

import MaterialTable from "material-table";

export default function DeliveryAgent() {
  const [data, setData] = useState([]);
  // const [data1, setData1] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/viewDAgentDetails")
      .then((response) => {
       // console.log("hi", response.data);
        setData(response.data);

        //  setData1(response.data);
      });
  }, []);

  // const columns = [
  //   { field: "id", headerName: "ID", width: 100 },
  //   {
  //     field: "user",
  //     headerName: " User",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.avater} alt="" />
  //           {params.row.username}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "transaction",
  //     headerName: "Transaction Volume",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/user/" + params.row.id}>
  //             <button className="userListEdit">Edit</button>
  //           </Link>

  //           <DeleteOutline
  //             className="userListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  const columns = [
    { title: "Id", field: "userId",cellStyle:{width:"10%"} },
    { title: "Name", field: "name" },
    {title:"Email",field:"email"},
   
    { title: "Address", field: "address",cellStyle:{width:"40%"} },
    // { title: "NAtional ID", field: "nic" },
    // { title: "Driving Licence", field: "drivingLicence" },
    { title: "Phone Number", field: "phoneNumber",cellStyle:{width:"20%"} },
    { title: "Status", field: "active" },
  ];

  return (
    <div className="userListCon">
      <Sidebar title="users" />

      <div className="userList">
        <PageShiftButtonOther />

        <MaterialTable
          title="Delivery Agent Details"
          data={data}
          columns={columns}
          options={{
            search: true,
            paging: true,
          //  filtering: true,
            exportButton: true,
          }}
        />
        {/* <table class="table">
      <thead>
        <tr class=".th-lg">
          <th scope="col">#</th>
        
          <th scope="col">Full Name</th>
          <th scope="col">NIC</th>
          <th scope="col">Driwing Licence</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
  <tbody>
        {

            data.map((item)=>(
              <tr class=".th-lg" 
              key={item.userId }>
              <td>{item.userId}</td>
              <th scope="row">{item.firstName}  {item.lastName}</th>
              <td>{item.nic}</td>
              <td>{item.drivingLicence}</td>
              <td>{item.phoneNumber}</td>
             
            </tr>
            ))



        }
  
   
   
  </tbody>
</table> */}

        {/* <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        /> */}
      </div>
    </div>
  );
}
