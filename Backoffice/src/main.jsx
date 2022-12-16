import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthProvider";

import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
