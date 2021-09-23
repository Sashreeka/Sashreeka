import React, { useState, useEffect } from "react";
import "./productList.css";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import MaterialTable from "material-table";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  selectinginner: {
    width: 200,
    marginTop: 20,
  },
  optionbox: {
    backgroundColor: "yellow",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function ProductSalesReport() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [reportType, setReportType] = useState("annual");
  useEffect(() => {
    axios
      .get("http://localhost:4000/reports/getallproductSales")
      .then((response) => {
        setData(response.data);
        console.log("response :  anu", response.data);
      });
  }, []);

  const handleChangeRadio = (e) => {
    console.log("eeee", e.target.value);
    setReportType(e.target.value);
  };

  const columns = [
    {
      title: "Id",
      field: "fertilizerId",
      cellStyle: {
        width: "7%",
      },
    },
    {
      title: "fertilizer Name",
      field: "fertilizerName",
      cellStyle: {
        width: "20%",
      },
    },
    {
      title: "Sales",
      field: "sales",
      cellStyle: {
        width: "20%",
      },
      render: (row) => <div>{row.sales ? row.sales : "0"}</div>,
    },
    {
      title: "Annual Productvise Income (Rs.)",
      field: "income",
      cellStyle: {
        width: "20%",
      },
      render: (row) => <div>{row.income ? row.income : "0"}</div>,
    },
  ];
  return (
    <div
      className="productReportCon"
      style={{ marginLeft: 40, marginRight: 40 }}
    >
      {/* <Sidebar title="products" /> */}
      <div className="productReport">
        <div className="productTitleContainer">
          <div></div>
          <div className={classes.optionbox}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="Report Type"
                name="row-radio-buttons-group"
                value={reportType}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="annual"
                  control={<Radio />}
                  label="Annual Report"
                />
                <FormControlLabel
                  value="monthly"
                  control={<Radio />}
                  label="Monthly Report"
                />
              </RadioGroup>
            </FormControl>
            <div className={classes.selectinginner}>
              <select
                class="browser-default custom-select border-success"
                name="roleId"
                size="small"
                // className={classes.selectinputtag}
                //   value={roleId}
                //   onChange={handleInputChange}
              >
                <option selected key="all">
                  All
                </option>
                {/* {roles.map((role) => (
                <option key={role.roleId} value={role.roleId}>
                  {role.roleId}. &nbsp;&nbsp;&nbsp;{role.roleName}
                </option>
              ))} */}
              </select>
            </div>
          </div>
        </div>

        <MaterialTable
          title={
            reportType === "annual"
              ? "Annual Product Sales & Income Report"
              : "Monthly Product Sales & Income Report"
          }
          data={data}
          columns={columns}
          options={{
            search: true,
            paging: true,
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
        />
      </div>
    </div>
  );
}
