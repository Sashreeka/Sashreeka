import React, { useState, useEffect } from "react";
import "./productList.css";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import MaterialTable from "material-table";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/getfertilizer").then((response) => {
      setData(response.data);
    });
  }, []);

  const columns = [
    {
      title: "Id",
      field: "fertilizerId",
      cellStyle: {
        width: "5%",
      },
    },

    {
      title: "",
      field: "photo",
      render: (item) => (
        <img
          src={item.photo}
          alt=""
          height="30"
          width="30"
          style={{ borderRadius: 20 }}
        />
      ),

      cellStyle: {
        width: "0%",
        paddingRight: 0,
      },
    },

    {
      title: "Product",
      field: "name",

      cellStyle: {
        width: "22%",
        paddingLeft: 0,
      },
    },

    {
      title: "Stock",
      field: "stock",
      cellStyle: {
        width: "20%",
      },
      render: (row) => (
        <div className={row.stock > row.reOrderLevel ? row.stock : "deactive"}>
          {row.stock ? row.stock : row.stock}
        </div>
      ),
    },
    {
      title: "Unit",
      field: "unit",
      cellStyle: {
        width: "20%",
      },
    },

    {
      title: "Unit Price (Rs)",
      field: "unitPrice",
      cellStyle: {
        width: "20%",
      },
    },

    {
      title: "Offer",
      field: "offer",
      cellStyle: {
        width: "15%",
      },
    },
  ];

  //delete record
  const deleteProduct = (fertilizerId) => {
    axios
      .delete("/deleteProductItems/" + fertilizerId)
      .then((response) => {
        setData(data.filter((item) => item.fertilizerId !== fertilizerId));
      });
  };

  return (
    <div className="productListCon">
      {/* <Sidebar title="products" /> */}
      <div className="productList">
        <div className="productTitleContainer">
          <h1></h1>
          <button
            className="productAddButton"
            onClick={() => (window.location.href = "/newproduct")}
          >
            Add
          </button>
        </div>

        <MaterialTable
          title="Product & Categories Details"
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
                confirmAlert({
                  title: "Confirm to Delete",
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: () => {
                        deleteProduct(rowData.fertilizerId);
                      },
                    },
                    {
                      label: "No",
                    },
                  ],
                });
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
