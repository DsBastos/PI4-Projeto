import React from "react";
import { Routes, Route } from "react-router-dom";
import router from "./routes/index";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
  Admin: 1,
  ResponsavelRT: 2,
  AgenteT: 3,
};

export default function App() {
  return (
    <Routes>
      <Route index element={<router.login />} />
      <Route
        path="/recuperarPalavraPasse"
        element={<router.forgotPassword />}
      />

      {/*Rotas Protegidas ⬇️*/}

      {/*Admin*/}
      <Route 
        element={
        <RequireAuth allowedRoles={[ROLES.Admin]} />
        }
      >
        <Route 
          path="/dashboard" 
          element={<router.dashboardAdmin />} 
        />
        <Route 
          path="/website" 
          element={<router.websiteAdmin />} 
        />
        <Route
          path="/responsaveisDaRegiao"
          element={<router.responsaveisDaRegiaoAdmin />}
        />
        <Route
          path="/regioesturisticas"
          element={<router.regioesturisticasAdmin />}
        />
        <Route 
          path="/utilizadores" 
          element={<router.utilizadoresAdmin />} 
        />
      </Route>

      {/*Responsavel da Região Turistica*/}
      <Route 
        element={<RequireAuth 
        allowedRoles={[ROLES.ResponsavelRT]} />
        }
      >
        <Route
          path="/dashboard1"
          element={<router.dashboardRegiaoTuristica />}
        />
        <Route
          path="/agentesTuristicos"
          element={<router.agentesTuristicosRT />}
        />
        <Route
          path="/pontosDeInteresse"
          element={<router.pontosDeInteresseRT />}
        />
        <Route 
          path="/recompensas" 
          element={<router.recompensasRT />} 
        />
      </Route>

      {/*Agente Turistico*/}
      <Route 
        element={
          <RequireAuth allowedRoles={[ROLES.AgenteT]} />
         }
      >
        <Route 
          path="/dashboard2" 
          element={<router.dashboardAT />} 
        />
        <Route 
          path="/criarvisita" 
          element={<router.criarVisitaAT />} 
        />
        <Route
          path="/consultarReservas"
          element={<router.consultarReservasAT />}
        />
      </Route>
    </Routes>
  );
}
