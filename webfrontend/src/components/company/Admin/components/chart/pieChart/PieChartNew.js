import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

export default function PieChartNew() {


    const data=[
        {name:"Facebook",value:20000},
        {name:"WhatsApp",value:10000},
        {name:"Insta",value:40000},
    ]


    return (
        <div>


<PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        
          <Tooltip />
        </PieChart>
            
        </div>
    )
}
