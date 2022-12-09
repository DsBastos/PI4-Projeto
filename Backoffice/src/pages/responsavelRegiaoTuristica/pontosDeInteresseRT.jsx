import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalEditarPontoInteresse } from "../../components/responsavelRegiaoTuristica/ModalEditarPontoInteresse";

function pontosdeinteresseRT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard1"
        nome2="Agentes turísticos"
        icon2="./assets/icon-filetext.svg"
        link2="/agentesTuristicos"
        nome3="Pontos de interesse"
        icon3="./assets/icon-filetext.svg"
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg"
        link4="/recompensas"
      />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5">
          <div className="d-flex justify-content-between mt-5">
            <h2>Pontos de interesse</h2>
            <button type="button" className="btn btn-success">
              Consultar lista de reservas
            </button>
          </div>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Local</th>
                <th scope="col">Informação adicional</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Sé de Viseu</th>
                <td>Viseu</td>
                <td>
                  <a
                    type="button"
                    className="text-color-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Ver/editar detalhes
                  </a>
                </td>
                <td>
                  <button
                    style={{ border: "none", background: "none" }}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <img src="../../assets/icon-penfill.svg" alt="" />
                  </button>
                  <button style={{ border: "none", background: "none" }}>
                    <img src="../../assets/icon-trashfill.svg" alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default pontosdeinteresseRT;
