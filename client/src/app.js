import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import Reports from "./pages/Reports";
import styles from "./App.module.css";


function App() {
return (
<div className={styles.container}>
<nav className={styles.navbar}>
<Link to="/">Dashboard</Link>
<Link to="/add">Add</Link>
<Link to="/goals">Goals</Link>
<Link to="/reports">Reports</Link>
</nav>
<main>
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/add" element={<AddTransaction />} />
<Route path="/goals" element={<Goals />} />
<Route path="/reports" element={<Reports />} />
</Routes>
</main>
</div>
);
}


export default App;
