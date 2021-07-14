import React from 'react';
import "./topbar.css";
import {NotificationsNone,Settings,Language} from '@material-ui/icons';

export default function Topbar() {
    return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
               <span className="logo"> 
                   AdminPanel
               </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span> 

                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className='topIconBadge'>2</span> 

                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    

                </div>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar"/>
            </div>
  
        </div>
  
    </div>
    )
}
