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
    // backgroundColor: "yellow",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function ProductSalesReport() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [reportType, setReportType] = useState("annual");
  const [January, setjanuary] = useState([]);
  const [september, setSeptember] = useState([]);
  const [empty, setempty] = useState([]);
  const [selectedmonth, SetselectedMonth] = useState("January");
  const [datamonth, setdatamonth] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/reports/getallproductSales")
      .then((response) => {
        setData(response.data);
        console.log("response :  anu", response.data);
      });

    axios
      .get("http://localhost:4000/reports/janMonthlyproductSales")
      .then((response) => {
        setjanuary(response.data);
        console.log("response :  jannnnnn", response.data);
      });

    axios
      .get("http://localhost:4000/reports/sepMonthlyproductSales")
      .then((response) => {
        setSeptember(response.data);
        console.log("response :  sEpppppppppp", response.data);
      });
    axios
      .get("http://localhost:4000/reports/EmptyMonthlyproductSales")
      .then((response) => {
        setempty(response.data);
        console.log("response :  emptyyyyyyyyyyy", response.data);
      });

    console.log("jan", January);
    console.log("sep", september);
    console.log("emp", empty);
  }, []);

  const handleChangeRadio = (e) => {
    console.log("eeee", e.target.value);
    setReportType(e.target.value);
  };

  const handleselectmonth = (e) => {
    SetselectedMonth(e.target.value);
    console.log("month: ", selectedmonth);

    if (selectedmonth === "January" || "March" || "May" || "July") {
      console.log("val", January);
      console.log("se", selectedmonth);
      setdatamonth(January);
    } else if (
      selectedmonth === "September" ||
      "February" ||
      "April" ||
      "June" ||
      "August"
    ) {
      console.log("sep", september);
      console.log("se", selectedmonth);

      setdatamonth(september);
    } else {
      console.log("empty", empty);
      console.log("se", selectedmonth);

      setdatamonth(empty);
    }
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
      render: (row) => (
        <div>
          {row.sales
            ? row.sales + " x " + row.weight + "" + row.mesure
            : 0 + " x " + row.weight + "" + row.mesure}
        </div>
      ),
    },
    {
      title: "Sales",
      field: "sales",
      cellStyle: {
        width: "20%",
      },
      render: (row) => (
        <div>{row.sales ? row.sales * row.weight + "" + row.mesure : 0}</div>
      ),
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
  const columnsmonth = [
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
      field: "quantity",
      cellStyle: {
        width: "20%",
      },
      render: (row) => <div>{row.quantity ? row.quantity : "0"}</div>,
    },
    {
      title: "Monthly Income (Rs.)",
      field: "monthlyincome",
      cellStyle: {
        width: "20%",
      },
      render: (row) => <div>{row.monthlyincome ? row.monthlyincome : "0"}</div>,
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
              {/* <FormLabel component="legend">Gender</FormLabel> */}
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
                name="selectedmonth"
                size="small"
                // className={classes.selectinputtag}
                value={selectedmonth}
                onChange={handleselectmonth}
              >
                <option selected key="January">
                  January
                </option>
                <option key="February">February</option>
                <option key="March">March</option>
                <option key="April">April</option>
                <option key="May">May</option>
                <option key="June">June</option>
                <option key="June">June</option>
                <option key="July">July</option>
                <option key="September">September</option>
                <option key="October">October</option>
                <option key="November">November</option>
                <option key="December">December</option>
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
          data={reportType === "annual" ? data : datamonth}
          columns={reportType === "annual" ? columns : columnsmonth}
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
