import React,{useEffect,useState} from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { UserData } from "../../dummyData";
import WidgetLg from "../../components/widget/WidgetLg";
import WidgetSm from "../../components/widget/WidgetSm";
import axios from 'axios';

///adminHome/getSalesAnalytics


export default function Home() {

  const [sales,setSales]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/adminHome/getSalesAnalytics').then((response)=>{
     // console.log(response.data);
      setSales(response.data);
    })

    
  },[])


  return (
    <div className="adminHome">
      <FeaturedInfo />
      <Chart
        data={sales}
        title="Sales Analytics"
        grid
        dataKey="count"
      />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
