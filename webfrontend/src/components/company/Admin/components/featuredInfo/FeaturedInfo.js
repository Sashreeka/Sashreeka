import React,{useState,useEffect} from "react";
import "./featuredInfo.css";
import axios from 'axios';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {

  const [thisMonthCost,setThisMonthCost]=useState({});
  const [lastMonthCost,setLastMonthCost]=useState({});

  const [thisMonthSales,setThisMonthSales]=useState({})

  const [lastMonthSales,setLastMonthSales]=useState({});


  const [thisMonthRevenue,setThisMonthRevenue]=useState({})

  const [lastMonthRevenue,setLastMonthRevenue]=useState({});

  

  const getThisMonthCost= ()=>{
    axios.get('http://localhost:4000/adminHome/getThisMonthCost').then((response)=>{

   // console.log(response.data[0].deliveryCharge);
    setThisMonthCost(response.data[0]);
    
    })

  }

  const getLastMonthCost= ()=>{
    axios.get('http://localhost:4000/adminHome/getLastMonthCost').then((response)=>{

   // console.log(response.data[0].deliveryCharge);
    setLastMonthCost(response.data[0]);
    
    })

  }


  const getThisMonthSales= ()=>{
    axios.get('http://localhost:4000/adminHome/getThisMonthSales').then((response)=>{

   // console.log(response.data[0].deliveryCharge);
    setThisMonthSales(response.data[0]);
    
    })

  }

  const getLastMonthSales= ()=>{
    axios.get('http://localhost:4000/adminHome/getLastMonthSales').then((response)=>{

   // console.log(response.data[0].deliveryCharge);
    setLastMonthSales(response.data[0]);
    
    })

  }

  const getThisMonthRevenue= ()=>{
    axios.get('http://localhost:4000/adminHome/getThisMonthRevenue').then((response)=>{

   // console.log(response.data[0].deliveryCharge);
    setThisMonthRevenue(response.data[0]);
    
    })

  }

  const getLastMonthRevenue= ()=>{
    axios.get('http://localhost:4000/adminHome/getLastMonthRevenue').then((response)=>{

   // console.log(response.data[0].deliveryCharge);
    setLastMonthRevenue(response.data[0]);
    
    })

  }


//getThisMonthRevenue
 
  useEffect(()=>{
    getThisMonthCost();
    getLastMonthCost();

    //call sales
    getThisMonthSales();
    getLastMonthSales();

    //call the Revenue
    getThisMonthRevenue();
    getLastMonthRevenue();
    

    console.log(thisMonthRevenue.month)
    console.log(lastMonthRevenue.month)
    
  },[]);





  return (
    <div className="featured">

      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs {thisMonthRevenue.amount}</span>
          {
            (thisMonthRevenue.amount - lastMonthRevenue.amount)>0 ?<span className="featuredMoneyRate">
            + {thisMonthRevenue.amount -lastMonthRevenue.amount} <ArrowUpward className="featuredIcon" /> </span>:
            <span className="featuredMoneyRate">
            -{thisMonthRevenue.amount -lastMonthRevenue.amount} <ArrowDownward className="featuredIcon negative" />
          </span>

          }
        </div>
        <span className="featuredSub">{lastMonthRevenue.month} - {thisMonthRevenue.month} ({thisMonthRevenue.year}) </span>
      </div>



      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs {thisMonthSales.amount}</span>
          {
            (thisMonthSales.amount - lastMonthSales.amount)>0 ?<span className="featuredMoneyRate">
            + {thisMonthSales.amount -lastMonthSales.amount} <ArrowUpward className="featuredIcon" /> </span>:
            <span className="featuredMoneyRate">
            -{thisMonthSales.amount -lastMonthSales.amount} <ArrowDownward className="featuredIcon negative" />
          </span>

          }
        
        </div>
        <span className="featuredSub">{lastMonthSales.month} - {thisMonthSales.month} ({thisMonthSales.year}) </span>
      </div>



      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs {thisMonthCost.deliveryCharge}</span>
          {
            (thisMonthCost.deliveryCharge -lastMonthCost.lastdeliveryCharge) >0 ? <span className="featuredMoneyRate">
            + {thisMonthCost.deliveryCharge -lastMonthCost.lastdeliveryCharge} <ArrowUpward className="featuredIcon" /> </span> : <span className="featuredMoneyRate">
            - {thisMonthCost.deliveryCharge -lastMonthCost.lastdeliveryCharge} <ArrowDownward className="featuredIcon negative" />
          </span>
         
          }
         
        </div>
        <span className="featuredSub">{lastMonthCost.lastMonth} - {thisMonthCost.month} ({thisMonthCost.year})</span>
      </div>


    </div>
  );
}
