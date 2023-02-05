import React from 'react'
import { Routes, Route } from 'react-router-dom'
import router from './routes/index'
import RequireAuth from './components/RequireAuth'
import PersistLogin from './components/PersistLogin'
import Layout from './components/Layout'
import Unauthorized from './components/Unauthorized'

const ROLES = {
  Admin: 1,
  ResponsavelRT: 2,
  AgenteT: 3,
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<router.login />} />
        <Route
          path="/recuperarPalavraPasse"
          element={<router.forgotPassword />}
        />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/*Rotas Protegidas ⬇️*/}

        {/*Persist Login*/}
        {/*Admin*/}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
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
        <Route element={<RequireAuth allowedRoles={[ROLES.ResponsavelRT]} />}>
          <Route
            path="/dashboardRRT"
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
          <Route path="/recompensas" element={<router.recompensasRT />} />
        </Route>

        {/*Agente Turistico*/}
        <Route element={<RequireAuth allowedRoles={[ROLES.AgenteT]} />}>
          <Route path="/dashboardAT" element={<router.dashboardAT />} />
          <Route path="criarvisita" element={<router.criarVisitaAT />} />
          <Route
            path="/consultarReservas"
            element={<router.consultarReservasAT />}
          />
        </Route>
      </Route>
    </Routes>
  )
}
