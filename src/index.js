import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";

import Profile from "views/Profile.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/profile" replace />} />
    </Routes>
  </BrowserRouter>
);
