import React,{useState,useEffect} from 'react'
import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import { productRows } from '../../dummyData';
import {Link} from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import MaterialTable from 'material-table';


export default function ProductList() {
    const [data,setData]=useState(productRows);

    // const handleDelete= (id)=>{
    //     setData(data.filter((item)=>item.id !==id));
    // }

    useEffect(()=>{

        axios.get('http://localhost:4000/getfertilizer').then((response)=>{
            setData(response.data);
        })
    },[]);

    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 100 },
    //     { field: 'product', headerName: ' Product', width: 200, renderCell: (params)=>{
    //         return (
    //             <div className="productListItem">
    //                 <img className="productListImg" src={params.row.img} alt=""/>
    //                 {params.row.name}
    //             </div>
    //         )
    //     } },
    //     { field: 'stock', headerName: 'Stock', width: 200 },
    //     {
    //       field: 'status',
    //       headerName: 'Status',
    //       width: 120,
    //     },
    //     {
    //         field: 'price',
    //         headerName: 'Price',
    //         width: 160,
    //       },
    //       {
    //         field: 'action',
    //         headerName: 'Action',
    //         width: 150,
    //         renderCell: (params)=>{
    //             return(
    //                 <>
    //                     <Link to={"/product/"+params.row.id}>
    //                        <button className='productListEdit'>Edit</button>

    //                     </Link>
                      
    //                     <DeleteOutline className='productListDelete' onClick={()=> handleDelete(params.row.id)}/>
    //                 </>
    //             )
    //         }
    //       },  

    //   ];




    const columns=[
        {title:'Id',field:'fertilizerId',
    
    
        cellStyle:{
    
          //  backgroundColor:'red',
            width:'10%',
        }
    
        
    
      
    },

    { title: '', field: 'photo',
     render: item => <img src={item.photo} alt=""  height="30" width="30" style={{borderRadius:20}}

     
      />,
      
      cellStyle:{
         
    
       //  backgroundColor:'green',
        width:'0%',
        paddingRight:0,
     }},

        {title:'Product',field:'name',
    
        cellStyle:{
    
         //backgroundColor:'red',
           width:'22%',
           paddingLeft:0
        }
      
    
    },
        {title:'Stock',field:'stock',
    
    
        cellStyle:{
    
            // backgroundColor:'red',
            width:'20%',
            
         }
    },
        {title:'Price',field:'unitPrice',
    
    
        cellStyle:{
    
            // backgroundColor:'red',
            width:'20%',
         }},
        {title:'Offer',field:'offer',
    
    
        cellStyle:{
    
            // backgroundColor:'red',
            width:'15%',
         }},
       
      
      ]
    


    return (
        <div className='productListCon'>
        <Sidebar title="products"/>
        <div className="productList">
                {/* <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection /> */}


              

                <MaterialTable

                    title="Product & Categories Details"
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
