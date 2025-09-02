import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";


function Reports() {
const { transactions } = useContext(FinanceContext);


const exportCSV = () => {
const header = "Description,Category,Amount";
const rows = transactions.map((t) => `${t.description},${t.category},${t.amount}`);
const csv = [header, ...rows].join("\n");
const blob = new Blob([csv], { type: "text/csv" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "transactions.csv";
a.click();
};


return (
<div>
<h2>Reports</h2>
<button onClick={exportCSV}>Export CSV</button>
</div>
);
}


export default Reports;
