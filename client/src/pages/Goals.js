import React, { useContext, useState } from "react";
import { FinanceContext } from "../context/FinanceContext";


function Goals() {
const { goals, setGoals } = useContext(FinanceContext);
const [form, setForm] = useState({ name: "", target: 0 });


const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
e.preventDefault();
const res = await fetch("http://localhost:5000/api/goals", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});
const data = await res.json();
setGoals((prev) => [...prev, data]);
setForm({ name: "", target: 0 });
};


return (
<div>
<h2>Savings Goals</h2>
<form onSubmit={handleSubmit}>
<input name="name" placeholder="Goal Name" value={form.name} onChange={handleChange} />
<input name="target" type="number" value={form.target} onChange={handleChange} />
<button type="submit">Add Goal</button>
</form>
<ul>
{goals.map((g) => (
<li key={g._id}>{g.name} — Target: ${g.target}</li>
))}
</ul>
</div>
);
}


export default Goals;
