import React from "react";
import "./roles_and_privilages.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Control from "../../../../common/Control";
import Button from "../../../../common/buttons/Button";

export default function Roles_and_privilages() {
  return (
    <div className="rolesAndPrivilagesCon">
      <Sidebar title="roles&privilages" />
      <div className="rolesAndPrivilagesTitleContainer">
        <Control.Button title="control btn" color="secondary"></Control.Button>
      </div>
    </div>
  );
}
