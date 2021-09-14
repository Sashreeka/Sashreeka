import axios from "axios";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  useEffect(() => {
    axios.get("");
  });
  const data = {
    labels: ["13th", "14th", "15th", "16th", "17th"],
    datasets: [
      {
        label: "Cash on deliveries",
        data: [3, 2, 2, 1, 3],
        backgroundColor: [
          "rgba(255,99,132,0.8",
          "rgba(255,206,86,0.8",
          "rgba(54,169,235,0.8",
          "rgba(255,159,64,0.8",
          "rgba(153,102,255,0.8",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Recent delivery Status",
    },
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
