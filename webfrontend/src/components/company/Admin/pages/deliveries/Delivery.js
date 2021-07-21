import React, { useState,useEffect } from "react";
import "./delivery.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';

import MaterialTable from 'material-table';

export default function Delivery() {


    
  const [data, setData] = useState([]);
 

  useEffect(()=>{

    axios.get("http://localhost:4000/admin/viewDeliveryDetails").then((response)=>{
      console.log('hi',response.data);
      setData(response.data);

    //  setData1(response.data);

    })

  },[])


  const columns=[
    {title:'Id',field:'orderId',


    cellStyle:{

      //  backgroundColor:'red',
        width:'10%',
    }

    

  
},
    {title:'Farmer',field:'famerPhoneNumber',

    cellStyle:{

       // backgroundColor:'red',
       width:'20%',
    }
  

}, 
{title:'Farmer-Tel',field:'famerPhoneNumber',

    cellStyle:{

       // backgroundColor:'red',
       width:'13%',
    }
  

},
    {title:'delivery Load',field:'deliveryLoad',


    cellStyle:{

        // backgroundColor:'red',
        width:'10%',
     }
},
    {title:'distance',field:'distance',


    cellStyle:{

        // backgroundColor:'red',
        width:'10%',
     }},
    {title:'delivering date',field:'dateTime',


    cellStyle:{

        // backgroundColor:'red',
        width:'10%',
     }},
     {title:'status',field:'ConfirmationFlag',


     cellStyle:{
 
         // backgroundColor:'red',
         width:'10%',
      }},
      
   
  
  ]


    return(
        <div className="deliveryCon">
            <Sidebar/>
            

            <div className="delivery">
           
            <MaterialTable

            title="Company delivery Details"
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


            //headerStyle: {  color:"#000",fontWeight:'bold', },
            
            
             
            }}

          
      
            actions={[
                {
            icon: 'edit',
           
            tooltip: 'Edit',
            onClick: (event, rowData) => {
                window.location.href='/deliveryCheck/'+rowData.userId
            }
            //  <Link to={"/user/" + params.row.id}>
            //   <button className="userListEdit">Edit</button>
            // </Link>
            
            // alert('You are editing ' + rowData.userId)
          },
          
            ]}

            
         
      
            />
                {/* <div style={{padddingtop:"margin_rignt_cont"}}> */}
                <button>Create New delivery</button>
                {/* </div> */}
                
            </div>
            
        </div>
    )
}