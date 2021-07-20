import React from 'react';
import './sales.css';
import Sidebar from '../../components/sidebar/Sidebar';
import {UserData} from '../../dummyData';
import Chart from '../../components/chart/Chart';
import SalesDetails from './salesDetails/SalesDetails';

export default function Sales() {
    return (
        <div className="Salescon">
            <Sidebar/>

             <div className="sales">

             <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
             <SalesDetails/>
            

             </div> 


            
        </div>
    )
}
