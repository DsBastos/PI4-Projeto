import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menuadmin } from "../../components/Menuadmin";
import { ModalUtilizadores} from "../../components/ModalUtilizadores"

function utilizadoresAdmin() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menuadmin nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard"
        nome2="Website" icon2="./assets/icon-filetext.svg" link2="/website"
        nome3="Responsáveis das regiões turísticas" icon3="./assets/icon-filetext.svg" link3="/responsaveisDaRegiao"
        nome4="Regiões turísticas" icon4="./assets/icon-filetext.svg" link4="/regioesturisticas"
        nome5="Utilizadores" icon5="./assets/icon-user.svg"/>
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5 p-3">
          <h2 className="mt-5">Utilizadores</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome completo</th>
                <th scope="col">Email</th>
                <th scope="col">Cargo</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>
        <ModalUtilizadores />
      </main>
    </div>
  );
}

export default utilizadoresAdmin;