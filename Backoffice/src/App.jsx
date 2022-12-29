import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./routes/index";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
  User: 3,
  Editor: 2,
  Admin: 1,
};
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Routes>
      <Route index element={<router.login />} />
      <Route
        path="/recuperarPalavraPasse"
        element={<router.forgotPassword />}
      />

      {/*Rotas Protegidas*/}
      <Route element={<RequireAuth />}>
        {/*Admin*/}
        <Route path="/dashboard" element={<router.dashboardAdmin />} />
        <Route path="/website" element={<router.websiteAdmin />} />
        <Route
          path="/responsaveisDaRegiao"
          element={<router.responsaveisDaRegiaoAdmin />}
        />
        <Route
          path="/regioesturisticas"
          element={<router.regioesturisticasAdmin />}
        />
        <Route path="/utilizadores" element={<router.utilizadoresAdmin />} />
        </Route>
        {/*Responsavel da Região Turistica*/}
        <Route path="/dashboard1" element={<router.dashboardRegiaoTuristica />} />
        <Route path="/agentesTuristicos" element={<router.agentesTuristicosRT />} />
        <Route path="/pontosDeInteresse" element={<router.pontosDeInteresseRT />} />
        <Route path="/recompensas" element={<router.recompensasRT/>} />
        {/*Agente Turistico*/}
        <Route path="/dashboard2" element={<router.dashboardAT />} />
        <Route path="/criarvisita" element={<router.criarVisitaAT />} />
        <Route path="/consultarReservas" element={<router.consultarReservasAT />} />
      </Routes>
  );
}