import React from 'react'
import {Doughnut} from "react-chartjs-2"

function DoughnutChart() {

    const data={
        labels:['13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd'],
        datasets:[
            {
                label: "Cash on deliveries",
                data:[3,2,2,1,5,7,6,8,4,3],
                backgroundColor:[
                    'rgba(255,99,132,0.5',
                    'rgba(255,206,86,0.5',
                    'rgba(54,169,235,0.5',
                    'rgba(255,159,64,0.5',
                    'rgba(153,102,255,0.5'

                ],
                
            }
        ]
    }


    const options={
        title:{
            display:true,
            text:"Recent delivery Status"
        },
    }


    return (

            <Doughnut data={data} options={options}/>
 
    )
}

export default DoughnutChart
