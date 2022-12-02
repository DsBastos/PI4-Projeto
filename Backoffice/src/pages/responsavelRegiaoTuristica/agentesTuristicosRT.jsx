import React from "react";

import { Topnav } from "../../components/Topnav";
import { Menuadmin } from "../../components/Menuadmin";

function agentesturisticosRT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menuadmin
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard1"
        nome2="Agentes turísticos"
        icon2="./assets/icon-filetext.svg"
        nome3="Pontos de interesse"
        icon3="./assets/icon-filetext.svg"
        link3="/pontosDeInteresse"
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg"
        link4="/recompensas"
      />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Agentes turísticos</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome completo</th>
                <th scope="col">Email</th>
                <th scope="col">Localidade</th>
                <th scope="col">Distrito</th>
                <th scope="col">Ponto turístico</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>icones</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default agentesturisticosRT;
