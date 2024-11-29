import React, { useState, useEffect } from "react";
import { PieChart as RePieChart, Pie, Tooltip, Cell } from "recharts";
import { fetchPieChart } from "../api";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPieChart(month).then((res) => setData(res.data));
  }, [month]);

  return (
    <div>
      <h2>Category Distribution</h2>
      <RePieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="count"
          nameKey="_id"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RePieChart>
    </div>
  );
};

export default PieChart;
