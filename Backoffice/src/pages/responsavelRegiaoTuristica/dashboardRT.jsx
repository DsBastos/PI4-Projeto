import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menuadmin } from "../../components/Menuadmin";

function dashboardRT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menuadmin nome1="Dashboard" icon1="./assets/icon-barchartline.svg"
      nome2="Agentes turísticos" icon2="./assets/icon-filetext.svg" link2="/agentesTuristicos"
      nome3="Pontos de interesse" icon3="./assets/icon-filetext.svg" link3="/pontosDeInteresse"
      nome4="Recompensas" icon4="./assets/icon-filetext.svg" link4="/recompensas"/>
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Agentes turísticos</h2>
        </div>
      </main>
    </div>
  );
}

export default dashboardRT;
  