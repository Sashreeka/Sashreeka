import React, { useState } from "react";
import "./delivery.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Delivery() {

    return(
        <div className="deliveryCon">
            <Sidebar/>
            <div className="delivery">
                <h1>hello : this is delivery page</h1>
            </div>
            
        </div>
    )
}