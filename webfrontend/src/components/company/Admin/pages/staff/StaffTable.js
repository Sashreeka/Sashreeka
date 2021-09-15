import React, { useState, useEffect } from "react";
import "./staff.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import Control from "../../../../common/Control";

import MaterialTable from "material-table";
import { PersonAdd } from "@material-ui/icons";
import CreateStaff from "./CreateStaff";
import { Avatar } from "@material-ui/core";

export default function StaffTable() {
  const [data, setData] = useState([]);
  const [create, setCreate] = useState(false);
  // const [data1, setData1] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/viewCStaffDetails")
      .then((response) => {
        console.log("hi", response.data);
        setData(response.data);
        //  setData1(response.data);
      });
  }, []);

  const onClickCreateButton = () => {
    // alert("clicked onclickBut");
    setCreate(true);
  };
  // "select userId,concat(firstName,' ',lastName) as name,phoneNumber,email,nic,address,role.roleName as role,STR_TO_DATE(appointedDate, '%d/%m/%Y') FROM companystaff INNER JOIN role ON companystaff.roleId=role.roleId ORDER BY staffId ASC";
  // render:(row)=> <div className={row.active?"Factive":"deactive"}>{row.active?"Active":"Deactive"}</div>
  const columns = [
    {
      title: "Id",
      field: "userId",
      cellStyle: {
        width: "5%",
      },
    },
    {
      title: "",
      field: "profileimage",
      cellStyle: {
        width: "3%",
      },
      render: (row) => (
        <div>
          <Avatar alt="Remy Sharp" src={row.profileimage} />
        </div>
      ),
    },
    {
      title: "Full Name",
      field: "name",
      cellStyle: {
        width: "20%",
      },
    },
    {
      title: "Position",
      field: "role",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "Phone Number",
      field: "phoneNumber",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "Email",
      field: "email",
      cellStyle: {
        width: "10%",
      },
    },
    {
      title: "Appointed Date",
      field: "appointedDate",
      cellStyle: {
        width: "10%",
      },
    },
  ];

  return (
    <div>
      {create == false ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <div style={{ marginRight: 30, marginBottom: 10 }}>
              <Control.Button
                varient="contained"
                size="large"
                color="primary"
                onClick={onClickCreateButton}
                text="add new staff"
                startIcon={<PersonAdd />}
              />
            </div>
          </div>

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
      ) : (
        <div className="createStaff">
          <CreateStaff />
        </div>
      )}
    </div>
  );
}
