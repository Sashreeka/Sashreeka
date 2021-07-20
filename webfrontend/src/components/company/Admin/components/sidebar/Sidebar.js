import React,{useEffect} from 'react';
import "./sidebar.css";
import {LineStyle,Timeline,TrendingUp,Person, WebAsset,AttachMoney,BarChart,MailOutline,DynamicFeed,
    ChatBubbleOutline,WorkOutline,Report} from "@material-ui/icons";
 import ExitToAppIcon from '@material-ui/icons/ExitToApp';
 import HomeIcon from '@material-ui/icons/Home';
 import BarChartIcon from '@material-ui/icons/BarChart';
 import PeopleIcon from '@material-ui/icons/People';
 import NotificationsIcon from '@material-ui/icons/Notifications';
 import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'; 
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const Logout =()=>{

       
            localStorage.clear();
            window.location.href='/';

       


    }
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitleNew">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link" >
                            <li className="sidebarListItem active">
                                <HomeIcon className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li> */}
                        <Link to="/sales" className="link">
                        <li className="sidebarListItem">
                            <BarChartIcon className="sidebarIcon"/>
                            Sales
                        </li>
                        </Link>
                    </ul>

                </div>

            </div>



            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitleNew">Manage</h3>
                    <ul className="sidebarList">
                    <Link to="/users" className="link">
                         <li className="sidebarListItem">
                            <PeopleIcon className="sidebarIcon"/>
                            Users
                        </li>

                    </Link>
                    <Link to="/products" className="link">
                         <li className="sidebarListItem">
                            <WebAsset className="sidebarIcon"/>
                            Products & Categories
                        </li>

                    </Link>

                    <Link to="/delivery" className="link">
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Deliveries
                        </li>

                    </Link>

                      
                       

                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Orders
                        </li>
                    </ul>

                </div>

            </div>




            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitleNew">Company</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AccessibilityNewIcon className="sidebarIcon"/>
                            User Roles & Privilages
                        </li>
                        

                        <Link to="/staff" className="link">
                        <li className="sidebarListItem">
                            <PeopleIcon className="sidebarIcon"/>
                            Company Staff
                        </li>
                        </Link>


                        <li className="sidebarListItem">
                            <NotificationsIcon className="sidebarIcon"/>
                            Notifications
                        </li>

                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Announcements
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Revenue
                        </li>
                    </ul>

                </div>

            </div>



            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    
                    <ul className="sidebarList">
                       
                        
                        <Link onClick={Logout} className="link">
                        <li className="sidebarListItemLogout">
                            <ExitToAppIcon className="sidebarIcon"/>
                            LogOut
                        </li>
                        </Link>
                    </ul>

                </div>

            </div>


            


 
        </div>
    )
}
