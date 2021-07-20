import React, { useState } from "react";
import "./deliveryAgent.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { PageShiftButton } from "../userList/userListComponents/userListComponents";

export default function DeliveryAgent() {

    return(
        <div className="deliveryAgentCon">
            <Sidebar/>
            {/* <PageShiftButton/> */}
            <div className="deliveryAgent">
                <h1>hello : this is deliveryAgent page</h1>
            </div>
            
        </div>
    )
}