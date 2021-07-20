import React, { useState } from "react";
import "../userList.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";


export function PageShiftButton() {

    return(
        <div className="pageShift">
        
          <div className="pageShiftButton_Active">
          <Button>Farmers</Button>
          </div>

          <Link to={"/deliveryagent"} className="link">
            <div className="pageShiftButton">
            <Button>Delivery Agents</Button>
            </div>
          </Link> 
        </div>
    )
}



