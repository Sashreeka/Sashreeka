import React,{useEffect,useState} from 'react';
import './staffCheck.css';
import axios from 'axios';
import Sidebar from '../../../components/sidebar/Sidebar';


export default function StaffCheck(props) {

    const [data,setData]=useState([]);

    useEffect(()=>{
        const userId=props.match.params.userId
        axios.get("http://localhost:4000/admin/viewStafffDetails/"+userId).then((response)=>{
      console.log('hi',response.data);
      setData(response.data);

    //  setData1(response.data);
    })
    },[])
    
    return (

        <div className="staffCon">
            <Sidebar/>

        <div className="staffCheck">
         <p>Anu data tike display kara</p>
        {
            data.map((item)=>(
                <div>
                    <p>{item.userId}</p>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.nic}</p>
                    <p>{item.phoneNumber}</p>
                </div>
            ))
        }  
        </div>

        </div>
    )
}


