import React, { useEffect, useState } from "react";
import "./roles_and_privilages.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Control from "../../../../common/Control";
import Button from "../../../../common/buttons/Button";
// import Update_Privilages from "./Update_Privilages";
import axios from "axios";
import MaterialTable from "material-table";
import { CheckCircle, FiberManualRecord } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import BarChart2 from "../../components/chart/BarChart2";

export default function Roles_and_privilages() {
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [columns, setColumns] = useState([]);
  // const [roles2, setRoles2] = useState({});
  // const [data2, setData2] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAll_privilages_and_roles")
      .then((response) => {
        setData(response.data);
        console.log("data is : ", response.data);
      })
      .catch((err) => console.log("error ishan: ", err));

    axios
      .get("http://localhost:4000/admin/getRoleNames")
      .then((response) => {
        setRoles(response.data);
        columnCreater();
        console.log("role names : ", response.data);
        console.log("created colums: ", columns);
      })
      .catch((err) => console.log("error occured anu :", err));
  }, []);

  const camelTospace = (text) => {
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const columnCreater = () => {
    setColumns(
      roles.map((item, index) => ({
        title: camelTospace(item.COLUMN_NAME),
        field: item.COLUMN_NAME,
        cellStyle: {
          width: "30px",
        },
      }))
    );
  };

  const Available = () => (
    <Control.Label
      label="Disabled"
      colour="red"
      icon={<FiberManualRecord />}
    ></Control.Label>
  );

  const Unavailable = () => (
    <Control.Label
      label="Enabled"
      colour="green"
      icon={<CheckCircle />}
    ></Control.Label>
  );

  return (
    <div className="rolesAndPrivilagesCon">
      <Sidebar title="roles&privilages" />
      <div className="rolesAndPrivilagesTitleContainer">
        {/* <Update_Privilages /> */}
        {/* <Control.Button title="control btn" color="secondary"></Control.Button> */}
        {/* <Available />
        <Unavailable /> */}
        <div style={{ width: 400 }}>
          <BarChart2 />
        </div>
        <div>
          <MaterialTable
            title="Company Staff Details"
            data={data}
            columns={columns}
            options={{
              search: true,
              paging: true,
              filtering: false,
              exportButton: true,
              backgroundColor: "#EEE",

              // showTitle: false,
              actionsColumnIndex: -1,
              headerStyle: {
                //width:20,
                //marginLeft:20,
                //  backgroundColor:'red',
                color: "#000",
                fontWeight: "bold",
                width: "15%",
              },
            }}
            actions={[
              {
                icon: "edit",
                tooltip: "Edit",
                onClick: (event, rowData) => {
                  window.location.href = "/staffCheck/" + rowData.userId;
                },
                //  <Link to={"/user/" + params.row.id}>
                //   <button className="userListEdit">Edit</button>
                // </Link>
                // alert('You are editing ' + rowData.userId)
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
