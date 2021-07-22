import React, { useState } from "react";
import "./delivery.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import LineChart from "../../components/chart/LineChart";
import DoughnutChart from "../../components/chart/DoughnutChart";

export default function Delivery() {

    return(
        <div className="deliveryCon">
            <Sidebar title="delivery"/>
            <div className="delivery">
                <h1>hello : this is delivery page</h1>
                <div  className="chartdiv">
                        <div className="lineChart">
                            <LineChart/>
                        </div>
                        <div className="doughnutChart">
                            <DoughnutChart/>
                        </div>
                </div>
                
            </div>
            
        </div>
    )
}