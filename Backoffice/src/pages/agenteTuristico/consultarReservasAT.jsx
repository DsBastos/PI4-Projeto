import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";

function consultarReservasAT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard2"
        nome2="Criar visita"
        icon2="./assets/icon-filetext.svg"
        link2="/criarvisita"
        nome3="Consultar reservas"
        icon3="./assets/icon-filetext.svg"
        link3="/consultarReservas"
      />
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
        <div className="container px-5 mt-5">
        <div className="d-flex justify-content-between mt-5">
          <h2>Consultar reservas</h2>
          <button type="button" className="btn btn-success">
            Confirmar
          </button>
        </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID da Reserva</th>
                <th scope="col">Nome do cliente</th>
                <th scope="col">Nº de pessoas</th>
                <th scope="col">Ponto de interesse</th>
                <th scope="col">Local</th>
                <th scope="col">Data</th>
                <th scope="col">Horas</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Tiago</td>
                <td>3</td>
                <td>Rossio</td>
                <td>Viseu</td>
                <td>20/10/2022</td>
                <td>12:20</td>
                <td>
                  <button style={{ border: "none", background: "none" }}>
                    <img src="../../assets/icon-accept.svg" alt="" />
                  </button>
                  <button style={{ border: "none", background: "none" }}>
                    <img src="../../assets/icon-decline.svg" alt="" />
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

export default consultarReservasAT;
