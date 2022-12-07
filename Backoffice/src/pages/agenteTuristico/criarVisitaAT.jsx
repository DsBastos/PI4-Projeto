import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";

function criarVisitaAT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard2"
      nome2="Criar visita" icon2="./assets/icon-filetext.svg" link2="/criarvisita"
      nome3="Consultar reservas" icon3="./assets/icon-filetext.svg" link3="/consultarReservas"/>
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Criar reserva</h2>
          <button type="button" className="btn btn-success">Confirmar</button>
        </div>
      </main>
    </div>
  );
}

export default criarVisitaAT;
  
  