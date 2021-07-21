import React from 'react'
import {Bar} from "react-chartjs-2"

function BarChart() {

    const data={
        labels:['13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd'],
        datasets:[
            {
                label: "Cash on deliveries",
                data:[3,2,2,1,5,7,6,8,4,3],
                borderColor:['rgba(255,206,86,0.5'],
                backgroundColor:['rgba(255,206,86,0.5'],
                pointBackgroundColor:['rgba(255,206,86,0.8'],
                pointBorderColor:['rgba(255,206,86,0.5'],
            },
            {
                label: "online Payment deliveries",
                data:[4,5,2,4,1,6,7,6,4,2],
                borderColor:['rgba(6,206,86,0.5'],
                backgroundColor:['rgba(6,206,86,0.5'],
                pointBackgroundColor:['rgba(6,206,86,0.8'],
                pointBorderColor:['rgba(6,206,86,0.5'],
            }
        ]
    }


    // const options={
    //     title:{
    //         display:true,
    //         text:"Recent delivery Status"
    //     },
        
    //         scales:{
    //             yAxes:{
                
    //                     ticks:{
    //                         min:0,
    //                         max:6,
    //                         stepSize:1
    //                     }
    //                 }
                
    //         }   
    // }


    return (

            <Bar data={data} />
 
    )
}

export default BarChart
