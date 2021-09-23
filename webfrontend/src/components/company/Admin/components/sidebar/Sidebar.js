import React, { useEffect } from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  WebAsset,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import PeopleIcon from "@material-ui/icons/People";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { Link } from "react-router-dom";

export default function Sidebar({ title }) {
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitleNew">Dashboard</h3>
          <ul className="sidebarList">
            {title === "home" ? (
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <HomeIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
            ) : (
              <Link to="/" className="link">
                <li className="sidebarListItem">
                  <HomeIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
            )}

            {/* <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li> */}

            {title === "sales" ? (
              <Link to="/sales" className="link">
                <li className="sidebarListItem active">
                  <BarChartIcon className="sidebarIcon" />
                  Sales
                </li>
              </Link>
            ) : (
              <Link to="/sales" className="link">
                <li className="sidebarListItem">
                  <BarChartIcon className="sidebarIcon" />
                  Sales
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitleNew">Manage</h3>
          <ul className="sidebarList">
            {title === "users" ? (
              <Link to="/users" className="link">
                <li className="sidebarListItem active">
                  <PeopleIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
            ) : (
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PeopleIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
            )}

            {title === "productCategory" ? (
              <Link to="/productCategory" className="link">
                <li className="sidebarListItem active">
                  <WebAsset className="sidebarIcon" />
                  Products & Categories
                </li>
              </Link>
            ) : (
              <Link to="/productCategory" className="link">
                <li className="sidebarListItem">
                  <WebAsset className="sidebarIcon" />
                  Products & Categories
                </li>
              </Link>
            )}

            {title === "delivery" ? (
              <Link to="/delivery" className="link">
                <li className="sidebarListItem active">
                  <AttachMoney className="sidebarIcon" />
                  Deliveries
                </li>
              </Link>
            ) : (
              <Link to="/delivery" className="link">
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Deliveries
                </li>
              </Link>
            )}

            {title === "order" ? (
              <Link to="/orders" className="link">
                <li className="sidebarListItem active">
                  <BarChart className="sidebarIcon" />
                  Orders
                </li>
              </Link>
            ) : (
              <Link to="/orders" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Orders
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitleNew">Company</h3>
          <ul className="sidebarList">
            {title === "roles&privilages" ? (
              <Link to="/rolesPrivilages" className="link">
                <li className="sidebarListItem active">
                  <AccessibilityNewIcon className="sidebarIcon" />
                  User Roles & Privilages
                </li>
              </Link>
            ) : (
              <Link to="/rolesPrivilages" className="link">
                <li className="sidebarListItem">
                  <AccessibilityNewIcon className="sidebarIcon" />
                  User Roles & Privilages
                </li>
              </Link>
            )}

            {title === "staff" ? (
              <Link to="/staff" className="link">
                <li className="sidebarListItem active">
                  <PeopleIcon className="sidebarIcon" />
                  Company Staff
                </li>
              </Link>
            ) : (
              <Link to="/staff" className="link">
                <li className="sidebarListItem">
                  <PeopleIcon className="sidebarIcon" />
                  Company Staff
                </li>
              </Link>
            )}

            {title === "notification" ? (
              <Link to="/notification" className="link">
                <li className="sidebarListItem active">
                  <NotificationsIcon className="sidebarIcon" />
                  Notifications
                </li>
              </Link>
            ) : (
              <Link to="/notification" className="link">
                <li className="sidebarListItem">
                  <NotificationsIcon className="sidebarIcon" />
                  Notifications
                </li>
              </Link>
            )}

            {title === "announcements" ? (
              <Link to="/announcements" className="link">
                <li className="sidebarListItem active">
                  <ChatBubbleOutline className="sidebarIcon" />
                  Announcements
                </li>
              </Link>
            ) : (
              <Link to="/announcements" className="link">
                <li className="sidebarListItem">
                  <ChatBubbleOutline className="sidebarIcon" />
                  Announcements
                </li>
              </Link>
            )}
            {title === "complains" ? (
              <Link to="/complains" className="link">
                <li className="sidebarListItem active">
                  <AttachMoney className="sidebarIcon" />
                  Complains & Contact Us
                </li>
              </Link>
            ) : (
              <Link to="/complains" className="link">
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Complains & Contact Us
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link onClick={Logout} className="link">
              <li className="sidebarListItemLogout">
                <ExitToAppIcon className="sidebarIcon" />
                LogOut
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
