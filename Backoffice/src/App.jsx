import React from 'react'
import { Routes, Route } from 'react-router-dom'
import router from './routes/index'
import Unauthorized from './components/Unauthorized'


export default function App() {
  return (
    <Routes>
        <Route index element={<router.login />} />
        <Route
          path="/recuperarPalavraPasse"
          element={<router.forgotPassword />}
        />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/*Rotas Protegidas ⬇️*/}

        {/*Persist Login*/}
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

        {/*Responsavel da Região Turistica*/}
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

        {/*Agente Turistico*/}
          <Route path="/dashboardAT" element={<router.dashboardAT />} />
          <Route path="criarvisita" element={<router.criarVisitaAT />} />
          <Route
            path="/consultarReservas"
            element={<router.consultarReservasAT />}
          />
    </Routes>
  )
}
