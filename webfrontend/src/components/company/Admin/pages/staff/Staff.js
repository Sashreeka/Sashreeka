import React, { useState,useEffect } from "react";
import "./staff.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';

import MaterialTable from 'material-table';

export default function Staff() {


    
  const [data, setData] = useState([]);
  // const [data1, setData1] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  useEffect(()=>{

    axios.get("http://localhost:4000/admin/viewCStaffDetails").then((response)=>{
      console.log('hi',response.data);
      setData(response.data);

    //  setData1(response.data);

    })

  },[])


  const columns=[
    {title:'Id',field:'userId',


    cellStyle:{

      //  backgroundColor:'red',
        width:'10%',
    }

    

  
},
    {title:'Full Name',field:'name',

    cellStyle:{

       // backgroundColor:'red',
       width:'18%',
    }
  

},
    {title:'Is present',field:'active',


    cellStyle:{

        // backgroundColor:'red',
        width:'20%',
        
     }
},
    {title:'NIC',field:'nic',


    cellStyle:{

        // backgroundColor:'red',
        width:'20%',
     }},
    {title:'Phone Number',field:'phoneNumber',


    cellStyle:{

        // backgroundColor:'red',
        width:'25%',
     }},
   
  
  ]


    return(
        <div className="staffCon">
            <Sidebar title="staff"/>

           
            

            <div className="staff">

            <button className="staff-button">Create New staff</button>
           
            <MaterialTable

            title="Company Staff Details"
            data={data}
            columns={columns}

            options={{
            search:true,
            paging:true,
            filtering:false,
            exportButton:true,
            backgroundColor: '#EEE',
           // showTitle: false,
           
            actionsColumnIndex: -1,
            headerStyle: {
        //width:20,
        //marginLeft:20,
       
     //  backgroundColor:'red',
      color:"#000",
      fontWeight:'bold',
      width:'15%',
      }


          
            
            
             
            }}

          
      
            actions={[
                {
            icon: 'edit',
           
            tooltip: 'Edit',
            onClick: (event, rowData) => {
                window.location.href='/staffCheck/'+rowData.userId
            }
            //  <Link to={"/user/" + params.row.id}>
            //   <button className="userListEdit">Edit</button>
            // </Link>
            
            // alert('You are editing ' + rowData.userId)
          },
          
            ]}

            
         
      
            />
               
                
            </div>
            
        </div>
    )
}