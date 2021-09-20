import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function ContactUSNew() {
    const [data,setData]=useState([]);

    useEffect(()=>{

        axios
        .get("http://localhost:4000/adminContactUS/getDetails")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    },[])

    return (
        <div>
       
             {
                 data.map((item)=>(
                     <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.phoneNumber}</p>
                        <p>{item.massage}</p>

                     </div>
                 ))
             }
        </div>
    )
}
