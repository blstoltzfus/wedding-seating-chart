import React from "react";
import { createRoot } from "react-dom/client";
import SeatingChart from "./SeatingChart.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SeatingChart />
  </React.StrictMode>
);
