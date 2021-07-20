import React, { useState } from "react";
import "../userList.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeliveryAgent from "../../deliveryAgents/DeliveryAgent";

export function PageShiftButton() {

    return(
        <div className="pageShift">
          <div className="pageShiftButton_Active">
          <Button>Customers</Button>
          </div>

          <Link to={"/deliveryagent"}>
            <div className="pageShiftButton">
            <Button>Delivery Agent</Button>
            </div>
          </Link> 
        </div>
    )
}



