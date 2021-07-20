import React, { useState } from "react";
import "../userList.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeliveryAgent from "../../deliveryAgents/DeliveryAgent";

export function PageShiftButtonOther() {

    return(
        <div className="pageShift">
        <Link to={"/users"} className="link">
            <div className="pageShiftButton">
            <Button>Farmers</Button>
            </div>
        </Link>
         

          
                <div className="pageShiftButton_Active">
                <Button>Delivery Agents</Button>
               
                </div>
            
       
        </div>
    )
}



