import React, { useState, useEffect } from "react";
import { fetchStatistics } from "../api";

const Statistics = ({ month }) => {
  const [stats, setStats] = useState({
    totalSales: 0,
    soldCount: 0,
    notSoldCount: 0,
  });

  useEffect(() => {
    fetchStatistics(month).then((res) => setStats(res.data));
  }, [month]);

  return (
    <div>
      <h2>Statistics</h2>
      <div className="d-flex justify-content-between">
        <div className="stat-box">Total Sales: ${stats.totalSales}</div>
        <div className="stat-box">Sold Items: {stats.soldCount}</div>
        <div className="stat-box">Not Sold Items: {stats.notSoldCount}</div>
      </div>
    </div>
  );
};

export default Statistics;