import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  title,
  data,
  dataKey,
  grid,
  line2 = false,
  dataKey2,
  line3 = false,
  dataKey3,
}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke=" #737373" />
          {/* monotone means drew chart */}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#0000ff"
            strokeWidth={2}
          />
          {line2 ? (
            <Line
              type="monotone"
              dataKey={dataKey2}
              stroke="#00cc00"
              strokeWidth={2}
            />
          ) : (
            ""
          )}
          {line3 ? (
            <Line
              type="monotone"
              dataKey={dataKey3}
              stroke="#cc0000"
              strokeWidth={2}
            />
          ) : (
            ""
          )}
          {/* tooltip means show mesurement */}
          <Tooltip />
          {/* show the cartesean */}
          {grid && <CartesianGrid stroke=" #b3b3b3" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
