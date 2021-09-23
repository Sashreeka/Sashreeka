import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function ComplainNew() {
    const [data,setData]=useState([]);

    useEffect(()=>{

        axios
        .get("http://localhost:4000/adminComplaints/getDetails")
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
                     <div key={item.complaintId }>
                        <p>{item.orderId}</p>
                        <p>{item.phoneNumber}</p>
                        <p>{item.deliveryNotRecieved}</p>
                        <p>{item.wrongQualityOfOrderedProducts}</p>
                        <p>{item.differentProductsRecieved}</p>
                        <p>{item.billingOrPaymentMatters}</p>
                        <p>{item.other}</p>
                        <p>{item.content}</p>

                     </div>
                 ))
             }
        </div>
    )
}