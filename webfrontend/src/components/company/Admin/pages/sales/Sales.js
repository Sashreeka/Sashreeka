import React from 'react';
import './sales.css';
import Sidebar from '../../components/sidebar/Sidebar';
import {UserData} from '../../dummyData';
import Chart from '../../components/chart/Chart';
import SalesDetails from './salesDetails/SalesDetails';
<<<<<<< Updated upstream
import { BarChart } from '@material-ui/icons';
=======
import PieChartNew from '../../components/chart/pieChart/PieChartNew';
import BarChartNew from '../../components/chart/BarChartNew/BarChartNew';
>>>>>>> Stashed changes

export default function Sales() {
    return (
        <div className="Salescon">
            <Sidebar/>

             <div className="sales">
<<<<<<< Updated upstream
                   
                <div className="sales_analytics">
                <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
                </div>
                <div className="sales_barchart">
                <BarChart/>
                </div>
             
=======

             <div className="top">
                 <div className="pie">
                 <PieChartNew/>

                 </div>
                 <div className="bar">
                 <BarChartNew/>
                     
                 </div>
             </div>
             
            

             <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
>>>>>>> Stashed changes
             <SalesDetails/>
            

             </div> 


            
        </div>
    )
}
