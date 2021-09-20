// import React, { useState,useEffect } from "react";
// import "./salesDetails.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../../dummyData";
// import { Link } from "react-router-dom";






// export default function SalesDetails() {
// //   const [data, setData] = useState(userRows);

// //   useEffect(()=>{
// //       setData(userRows)

// //   },[])
  
// // const userRows = [
// //     { id: 1, 
// //         username: 'sanduni', 
// //         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
// //         email: 'sanduni@gmail.com',
// //         status: 'active',
// //         transaction: 'Rs120.00',
// //      },
// //      { id: 2, 
// //         username: 'anuki', 
// //         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
// //         email: 'anuki@gmail.com',
// //         status: 'active',
// //         transaction: 'Rs120.00',
// //      },
// //      { id: 3, 
// //         username: 'chamodhi', 
// //         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
// //         email: 'chamodhi@gmail.com',
// //         status: 'active',
// //         transaction: 'Rs120.00',
// //      },
// //      { id: 4, 
// //         username: 'shamali', 
// //         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
// //         email: 'shamali@gmail.com',
// //         status: 'active',
// //         transaction: 'Rs120.00',
// //      },
// //      { id: 5, 
// //         username: 'ishan', 
// //         avater: 'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png', 
// //         email: 'ishan@gmail.com',
// //         status: 'active',
// //         transaction: 'Rs120.00',
// //      },
     

// //   ];


// const [data, setData] = useState(userRows);

// const handleDelete = (id) => {
//   setData(data.filter((item) => item.id !== id));
// };


// const columns = [
//   { field: "id", headerName: "ID", width: 100 },
//   {
//     field: "user",
//     headerName: " User",
//     width: 200,
//     renderCell: (params) => {
//       return (
//         <div classNameName="salesDetailsUser">
//           <img classNameName="salesDetailsImg" src={params.row.avater} alt="" />
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
//             <button classNameName="salesDetailsEdit">Edit</button>
//           </Link>

//           <DeleteOutline
//             classNameName="salesDetailsDelete"
//             onClick={() => handleDelete(params.row.id)}
//           />
//         </>
//       );
//     },
//   },
// ];

//   return (
    
      
//       <div classNameName="salesDetails">
//         <DataGrid
//           rows={data}
//           disableSelectionOnClick
//           columns={columns}
//           pageSize={8}
//           checkboxSelection
//         />
//       </div>
   
//   );
// }


import  React,{useState,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './salesDetails.css';
import {Link} from 'react-router-dom';
import {DeleteOutline} from '@material-ui/icons';
import axios from 'axios';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 100 },
//   { field: 'amount', headerName: ' Amount (Rs)', width: 160, 
//   // renderCell: (params)=>{
//   //     return (
//   //         <div classNameName="productListItem">
//   //             <img classNameName="productListImg" src={params.row.img} alt=""/>
//   //             {params.row.name}
//   //         </div>
//   //     )
//   // } 
// },
//   { field: 'deliverAddress', headerName: 'Delivery Address', width: 250 },
//   {
//     field: 'offer',
//     headerName: 'Offer',
//     width: 120,
//   },
//   {
//       field: 'deliverCharge',
//       headerName: 'Delivery Charge(Rs)',
//       width: 220,
//     },
//     {
//       field: 'status',
//       headerName: 'Status',
//       width: 150,
//       // renderCell: (params)=>{
//       //     return(
//       //         <>
//       //             <Link to={"/product/"+params.row.id}>
//       //                <button classNameName='productListEdit'>Edit</button>

//       //             </Link>
                
//       //             <DeleteOutline classNameName='productListDelete' onClick={()=> handleDelete(params.row.id)}/>
//       //         </>
//       //     )
//       // }
//     },  

// ];



// const productRows = [
//   { id: 1, 
//       amount: '21790.00', 
//       // img: 'https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 
//       deliverAddress:'No.950/A, Kottawa(East), Pannipitiya',
//       offer: '5%',
//       deliverCharge: '150',
//       status: '1',
//    },
//    { id: 2, 
//       amount: '15740.00', 
//       // img: 'https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 
//       deliverAddress:'No. 363/1, Mawathahena, Meegahathanna',
//       offer: '10%',
//       deliverCharge: '1000',
//       status: '1',
//    },
//    { id: 3, 
//       amount: '36584.00', 
//       // img: 'https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 
//       deliverAddress:'No. 25/5, Polgasowita Rd, Maththegoda',
//       offer: '0%',
//       deliverCharge: '150',
//       status: '0',
//    },
//    { id: 4, 
//       amount: '12990.00', 
//       // img: 'https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 
//       deliverAddress:'No. 224, Jalthara, Hanwella',
//       offer: '8%',
//       deliverCharge: '360',
//       status: '1',
//    },
//    { id: 5, 
//       amount: '17490.00', 
//       // img: 'https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', 
//       deliverAddress:'No. 143B, Ambagaswewa, Rideebendiella',
//       offer: '20%',
//       deliverCharge: '1500',
//       status: '0',
//    },



// ];



export default function SalesDetails() {

  const [income,setIncome]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/adminSales/getIncomeAnalytics').then((response)=>{
      console.log(response.data);
      setIncome(response.data);
      
    })

    
  },[])


  return (
    <div style={{ height: 400, width: '98%',marginLeft:5 }}>

<table className="table table-hover">
  <thead>
    <tr className="table-success">
      <th scope="col">#</th>
      {
        income.map((item)=>(
         
          <th scope="col">{item.name}</th>

        
        ))
      }
      </tr>
      </thead>
    
  

  <tbody>
    <tr>
      <th scope="row">Sales income (Rs)</th>
      {
        income.map((sales)=>(
          <td>{Math.round(sales.salesIncome)}</td>

        ))
      }
     </tr>

     <tr>
      <th scope="row">Delivery income (Rs)</th>
      {
        income.map((del)=>(
          <td>{Math.round(del.deliveryIncome)}</td>

        ))
      }
     </tr>

     <tr>
      <th scope="row">Total income (Rs)</th>
      {
        income.map((total)=>(
          <td>{Math.round(total.totalIncome)}</td>

        ))
      }
     </tr>


    </tbody>    

  </table>  
  

      
    </div>
  );
}
