import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { UserData } from '../../dummyData';

export default function Home() {
    return (
        <div className="home"> 

        <FeaturedInfo/>
        <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
            
        </div>
    )
}
