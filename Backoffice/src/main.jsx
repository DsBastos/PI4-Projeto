import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
