import React, { useState,useEffect } from "react";
import "./userList.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { PageShiftButton } from "./userListComponents/userListComponents";
import axios from "axios";
import MaterialTable from "material-table";



export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/getFarmerDetails").then((response)=>{
      setData(response.data);
    });

  },[]);

  const columns = [
    { title: "Id", field: "userId",cellStyle:{width:"5%"} },
    { title: "Name", field: "name",cellStyle:{width:"15%"} },
    {title:"Email",field:"email"},
    { title: "Address", field: "address",cellStyle:{width:"40%"} },
    { title: "Phone Number", field: "phoneNumber",cellStyle:{width:"15%"} },
    { title: "Status", field: "active",render:(row)=> <div className={row.active?"Factive":"deactive"}>{row.active?"Active":"Deactive"}</div> },
  ];


  


  return (
    <div className="userListCon">
      <Sidebar title="users"/>
      
      <div className="userList">
      
      <PageShiftButton/>

      <MaterialTable
        title="Farmer Details"
        columns={columns}
        data={data}
        options={{
          paging:true,
          search:true,
          exportButton:true
        }}
      />
  

      </div>
    </div>
  );
}
