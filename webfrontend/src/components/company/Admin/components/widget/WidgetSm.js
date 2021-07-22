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
            src="https://www.mckinsey.com/~/media/mckinsey/locations/asia/india/careers/our%20people/raman/india_careers_raman-sharma_quote-profile_1536x1152.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top"
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
            src="https://ucsc.acm.org/src/assets/img/anuki.4594f168.jpg"
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
            src="http://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2017/07/04/z_p07-I-want-to.jpg?itok=5aFB1bCX"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chamodhi Devindi</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://i1.rgstatic.net/ii/profile.image/985218127241217-1611905714297_Q512/Sanduni-Premaratne.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sanduni Fernando</span>
            <span className="widgetSmUserTitle">Project Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shamali Pathirana</span>
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
