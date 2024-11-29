import React, { useState, useEffect } from "react";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { fetchBarChart } from "../api";

const BarChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBarChart(month).then((res) => setData(res.data));
  }, [month]);

  return (
    <div>
      <h2>Price Range Chart</h2>
      <ReBarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </ReBarChart>
    </div>
  );
};

export default BarChart;