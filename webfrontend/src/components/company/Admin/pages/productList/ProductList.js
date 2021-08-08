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
    


    return (
        <div className='productListCon'>
        <Sidebar title="products"/>
        <div className="productList">
                {/* <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection /> */}


                {
                    data.map((item)=>(
                        <div>
                            <p>{item.name}</p>
                        </div>
                    ))
                }

            
        </div>
        </div>
    )
}
