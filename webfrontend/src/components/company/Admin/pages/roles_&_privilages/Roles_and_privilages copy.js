import React, { useEffect, useState } from "react";
import "./roles_and_privilages.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Control from "../../../../common/Control";
import Button from "../../../../common/buttons/Button";
// import Update_Privilages from "./Update_Privilages";
import axios from "axios";
import MaterialTable from "material-table";
import { CheckCircle, FiberManualRecord } from "@material-ui/icons";

export default function Roles_and_privilages() {
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);
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
        console.log("role names : ", response.data);
      })
      .catch((err) => console.log("error occured anu :", err));
  }, []);

  const camelTospace = (text) => {
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const arr = [];
  const column = () => {
    roles.map((item) => {
      let element = {
        title: camelTospace(item.COLUMN_NAME),
        field: item.COLUMN_NAME,
        render: (row) => <div>{row}</div>,
        cellStyle: {
          width: "30px",
        },
      };
      arr.push(element);
    });
    console.log("arr is : ", arr);
  };

  return (
    <div className="rolesAndPrivilagesCon">
      <Sidebar title="roles&privilages" />
      <div className="rolesAndPrivilagesTitleContainer">
        {/* <Update_Privilages /> */}
        {/* <Control.Button title="control btn" color="secondary"></Control.Button> */}
        <Control.Label
          label="Disabled"
          colour="red"
          icon={<FiberManualRecord />}
        ></Control.Label>
        <Control.Label
          label="Enabled"
          colour="green"
          icon={<CheckCircle />}
        ></Control.Label>
        <MaterialTable
          title="Privilages of the Roles"
          data={data}
          columns={arr}
          options={{
            search: true,
            paging: false,
            filtering: false,
            exportButton: true,
            backgroundColor: "#EEE",
            actionsColumnIndex: -1,

            headerStyle: {
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
                window.location.href = "/product/" + rowData.fertilizerId;
              },
            },

            {
              icon: "delete",
              tooltip: "Delete",
              onClick: (event, rowData) => {
                // confirmAlert({
                //   title: "Confirm to Delete",
                //   message: "Are you sure to do this.",
                //   buttons: [
                //     {
                //       label: "Yes",
                //       onClick: () => {
                //         // deleteProduct(rowData.fertilizerId);
                //       },
                //     },
                //     {
                //       label: "No",
                //     },
                //   ],
                // });
              },
            },
          ]}
        />
        {/* {data.map((item) => (
          <div key={item.roleId}>{item.roleName}</div>
        ))} */}

        {column()}
      </div>
    </div>
  );
}
