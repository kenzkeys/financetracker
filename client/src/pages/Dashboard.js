import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./Dashboard.module.css";


function Dashboard() {
const { transactions } = useContext(FinanceContext);
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const categoryData = transactions.reduce((acc, t) => {
acc[t.category] = (acc[t.category] || 0) + t.amount;
return acc;
}, {});


const chartData = Object.keys(categoryData).map((key) => ({
name: key,
value: categoryData[key],
}));


return (
<div className={styles.container}>
<h2>Dashboard</h2>
<div className={styles.chart}>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie data={chartData} dataKey="value" label>
{chartData.map((entry, index) => (
<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip />
</PieChart>
</ResponsiveContainer>
</div>
<ul>
{transactions.map((t) => (
export default Dashboard;
