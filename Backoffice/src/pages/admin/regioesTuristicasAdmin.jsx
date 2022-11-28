import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menuadmin } from "../../components/Menuadmin";

function regioesturisticasAdmin() {
  return (
    <div className="d-flex">
      <Menuadmin nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard"
        nome2="Website" icon2="./assets/icon-filetext.svg" link2="/website"
        nome3="Responsáveis das regiões turísticas" icon3="./assets/icon-filetext.svg" link3="/responsaveisDaRegiao"
        nome4="Regiões turísticas" icon4="./assets/icon-filetext.svg"
        nome5="Utilizadores" icon5="./assets/icon-user.svg" link5="/utilizadores" />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
      </main>

    </div>
  );
}

export default regioesturisticasAdmin;
