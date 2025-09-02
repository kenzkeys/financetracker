import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FinanceProvider } from "./context/FinanceContext";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<FinanceProvider>
<App />
</FinanceProvider>
</BrowserRouter>
);
