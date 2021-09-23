import React,{useState,useEffect} from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';


function LineChart_Deliveries() {
  const [label,setLabel]=useState([]);
  const [cash,setCash]=useState([]);
  const [online,setOnline]=useState([]);

  useEffect(()=>{

    axios.get('http://localhost:4000/adminDeliveries/getDeliveryCountLabel').then((response)=>{
      console.log("ishannnnnnnn",response.data);
      setLabel(response.data)
    //  console.log(label)
    })

    axios.get('http://localhost:4000/adminDeliveries/getDeliveryCountCash').then((response)=>{
     // console.log("ishannnnnnnn",response.data);
      setCash(response.data)
    //  console.log(label)
    })

    axios.get('http://localhost:4000/adminDeliveries/getDeliveryCountOnline').then((response)=>{
     // console.log("ishannnnnnnn",response.data);
      setOnline(response.data)
    // console.log(online)
    })
  },[])

  var names = label.map(function(item) {
    return item['dateD'];
  });

  var cashdata=cash.map(function(item){
    return item['data'];
  });


  var onlineData=online.map(function(item){
    return item['data'];
  })

  
  const data = {
    // labels: [
    //   "13th",
    //   "14th",
    //   "15th",
    //    "16th",
    //   // "17th",
    //   // "18th",
    //   // "19th",
    //   // "20th",
    //   // "21st",
    //   // "22nd",
    // ],
    labels: names,
    datasets: [
      {
        label: "Cash on deliveries",
        // data: [3, 2, 2, 1, 5, 7, 6, 8, 4, 3],
        data: cashdata,
        
        borderColor: ["rgba(255,206,86,0.5"],
        backgroundColor: ["rgba(255,206,86,0.5"],
        pointBackgroundColor: ["rgba(255,206,86,0.8"],
        pointBorderColor: ["rgba(255,206,86,0.5"],
       
      },
      {
        label: "online Payment deliveries",
        data: onlineData,
       // data: [4, 5, 2, 4, 1, 6, 7, 6, 4, 2],
        borderColor: ["rgba(6,206,86,0.5"],
        backgroundColor: ["rgba(6,206,86,0.5"],
        pointBackgroundColor: ["rgba(6,206,86,0.8"],
        pointBorderColor: ["rgba(6,206,86,0.5"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Recent delivery Status",

    },

    scales: {
      yAxes: {
        ticks: {
          min: 0,
          max: 6,
          stepSize: 1,
        },
      },
    },
  };

  return <div>
    <Line data={data} options={options} />

  </div>;
}

export default LineChart_Deliveries;
