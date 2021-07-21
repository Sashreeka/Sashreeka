import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="WidgetSm">
      <span className="widgetSmTitle">Company Staff</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ishan Reshmika</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://writestylesonline.com/wp-content/uploads/2021/02/How-Clothing-Affects-Your-Confidence-and-Your-Mood.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anuki De Alwis</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chamodhi peris</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sanduni Fernandoo</span>
            <span className="widgetSmUserTitle">Project Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ishan Reshmika</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
