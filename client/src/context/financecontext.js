import React, { createContext, useState, useEffect } from "react";


export const FinanceContext = createContext();


export const FinanceProvider = ({ children }) => {
const [transactions, setTransactions] = useState([]);
const [goals, setGoals] = useState([]);


useEffect(() => {
fetch("http://localhost:5000/api/transactions")
.then((res) => res.json())
.then(setTransactions)
.catch(() => setTransactions([]));


fetch("http://localhost:5000/api/goals")
.then((res) => res.json())
.then(setGoals)
.catch(() => setGoals([]));
}, []);


return (
<FinanceContext.Provider value={{ transactions, setTransactions, goals, setGoals }}>
{children}
</FinanceContext.Provider>
);
};
