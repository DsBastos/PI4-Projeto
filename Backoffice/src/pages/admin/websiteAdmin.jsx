import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menuadmin } from "../../components/Menuadmin";

function websiteAdmin() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menuadmin nome1="Dashboard" icon1="./assets/icon-barchartline.svg" 
      nome2="Website" icon2="./assets/icon-filetext.svg" 
      nome3="Responsáveis das regiões turísticas" icon3="./assets/icon-filetext.svg"
      nome4="Regiões turísticas" icon4="./assets/icon-filetext.svg"
      nome5="Utilizadores" icon5="./assets/icon-user.svg"/>
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5">
        </div>
      </main>
    </div>
  );
}

export default websiteAdmin;
