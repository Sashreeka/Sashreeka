import React, { useState, useEffect } from "react";
import "../productList/productList.css";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import MaterialTable from "material-table";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function ProductList() {
  const [income, setIncome] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/adminSales/getIncomeAnalytics")
      .then((response) => {
        console.log(response.data);
        setIncome(response.data);
        console.log(response.data[0].tableData.id);
      });
  }, []);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("/getfertilizer").then((response) => {
  //     setData(response.data);
  //   });
  // }, []);

  const columns = [
    {
      title: "Number",
      field: "mName",
      cellStyle: {
        width: "22%",
        paddingLeft: 30,
      },
    },
    {
      title: "Month",
      field: "name",
      cellStyle: {
        width: "22%",
        paddingLeft: 0,
      },
    },

    {
      title: "Sales Income",
      field: "salesIncome",
      cellStyle: {
        width: "20%",
      },
    },
    {
      title: "Delivery Income",
      field: "deliveryIncome",
      cellStyle: {
        width: "20%",
      },
    },
    {
      title: "Total Income",
      field: "totalIncome",
      cellStyle: {
        width: "20%",
      },
    },
  ];

  return (
    <div className="productListCon">
      {/* <Sidebar title="products" /> */}
      <div className="productList">
        <div className="productTitleContainer">
          <h1></h1>
        </div>

        <MaterialTable
          title="Product & Categories Details"
          data={income}
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
