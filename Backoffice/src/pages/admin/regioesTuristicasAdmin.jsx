import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { Cartaodistrito } from "../../components/admin/Cartaodistrito";
function regioesturisticasAdmin() {
  return (
    <div className="d-flex">
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard"
        nome2="Website"
        icon2="./assets/icon-filetext.svg"
        link2="/website"
        nome3="Responsáveis das regiões turísticas"
        icon3="./assets/icon-filetext.svg"
        link3="/responsaveisDaRegiao"
        nome4="Regiões turísticas"
        icon4="./assets/icon-filetext.svg"
        nome5="Utilizadores"
        icon5="./assets/icon-user.svg"
        link5="/utilizadores"
      />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5 mb-5">
          <h2 className="mt-5">Regiões turísticas</h2>
          <div className="d-flex justify-content-between flex-wrap mt-5">
            <Cartaodistrito />
            <Cartaodistrito />
            <Cartaodistrito />
          </div>
        </div>
      </main>
    </div>
  );
}

export default regioesturisticasAdmin;
