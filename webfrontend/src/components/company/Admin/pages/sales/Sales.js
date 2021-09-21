import React,{useState,useEffect} from "react";
import "./sales.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { SalesData, UserData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import SalesDetails from "./salesDetails/SalesDetails";
import axios from 'axios';


import { BarChart } from "@material-ui/icons";

export default function Sales() {

  const [income,setIncome]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/adminSales/getIncomeAnalytics').then((response)=>{
      console.log(response.data);
      setIncome(response.data);
    })

    
  },[])
  return (
    <div className="Salescon">
      <Sidebar title="sales" />

      <div className="sales">
        {/* <div className="sales_analytics">
                <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
                </div> */}
        {/* <div className="sales_barchart">
                <BarChart/>
                </div> */}

       {/* <div style={{width:'800px'}}> */}
       <Chart
          data={income}
          title="Growth of Income"
          grid
          line2={true}
          dataKey="totalIncome"
          dataKey2="salesIncome"
          line3={true}
          dataKey3="deliveryIncome"
        />
       {/* </div> */}

        <SalesDetails />
      </div>
    </div>
  );
}
