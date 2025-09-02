import React, { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";


function AddTransaction() {
const { setTransactions } = useContext(FinanceContext);
const [form, setForm] = useState({ description: "", amount: 0, category: "General" });


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
e.preventDefault();
const res = await fetch("http://localhost:5000/api/transactions", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});
const data = await res.json();
setTransactions((prev) => [...prev, data]);
setForm({ description: "", amount: 0, category: "General" });
};


return (
<form onSubmit={handleSubmit}>
<h2>Add Transaction</h2>
<input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
<input name="amount" type="number" value={form.amount} onChange={handleChange} />
<input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
<button type="submit">Add</button>
</form>
);
}


export default AddTransaction;
