import React, { useState,useEffect } from "react";
import "./salesDetails.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData";

import { Link } from "react-router-dom";






export default function SalesDetails() {
//   const [data, setData] = useState(userRows);

//   useEffect(()=>{
//       setData(userRows)

//   },[])
  
// const userRows = [
//     { id: 1, 
//         username: 'sanduni', 
//         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
//         email: 'sanduni@gmail.com',
//         status: 'active',
//         transaction: 'Rs120.00',
//      },
//      { id: 2, 
//         username: 'anuki', 
//         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
//         email: 'anuki@gmail.com',
//         status: 'active',
//         transaction: 'Rs120.00',
//      },
//      { id: 3, 
//         username: 'chamodhi', 
//         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
//         email: 'chamodhi@gmail.com',
//         status: 'active',
//         transaction: 'Rs120.00',
//      },
//      { id: 4, 
//         username: 'shamali', 
//         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
//         email: 'shamali@gmail.com',
//         status: 'active',
//         transaction: 'Rs120.00',
//      },
//      { id: 5, 
//         username: 'ishan', 
//         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
//         email: 'ishan@gmail.com',
//         status: 'active',
//         transaction: 'Rs120.00',
//      },
     

//   ];


const [data, setData] = useState(userRows);

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};


const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: " User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="salesDetailsUser">
          <img className="salesDetailsImg" src={params.row.avater} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="salesDetailsEdit">Edit</button>
          </Link>

          <DeleteOutline
            className="salesDetailsDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];

  return (
    
      
      <div className="salesDetails">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
   
  );
}
