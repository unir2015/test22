import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { setCustomLogs } from "./CustomLogs/CustomLog";

setCustomLogs();

console.defaultLog("Welcome to my ts-app");



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />

    
  </React.StrictMode>
);

reportWebVitals();
