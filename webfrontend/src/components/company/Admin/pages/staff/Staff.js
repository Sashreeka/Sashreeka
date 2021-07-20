import React, { useState } from "react";
import "./staff.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Staff() {

    return(
        <div className="staffCon">
            <Sidebar/>
            <div className="staff">
                <h1>hello : this is Staff page</h1>
            </div>
            
        </div>
    )
}