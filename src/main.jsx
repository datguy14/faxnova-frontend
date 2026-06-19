import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Outbound from "./pages/Outbound";
import Inbound from "./pages/Inbound";
import Audit from "./pages/Audit";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="outbound" element={<Outbound />} />
        <Route path="inbound" element={<Inbound />} />
        <Route path="audit" element={<Audit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
