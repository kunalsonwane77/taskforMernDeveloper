import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const fetchTransactions = (params) =>
  axios.get(`${API_BASE}/transactions`, { params });

export const fetchStatistics = (month) =>
  axios.get(`${API_BASE}/statistics`, { params: { month } });

export const fetchBarChart = (month) =>
  axios.get(`${API_BASE}/bar-chart`, { params: { month } });

export const fetchPieChart = (month) =>
  axios.get(`${API_BASE}/pie-chart`, { params: { month } });
