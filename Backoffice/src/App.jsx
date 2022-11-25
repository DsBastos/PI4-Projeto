import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./routes/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<router.login />} />
        <Route path="/dashboard" element={<router.dashboardAdmin />} />
        <Route path="/website" element={<router.websiteAdmin />} />
        <Route path="/responsaveisDaRegiao" element={<router.responsaveisDaRegiaoAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
