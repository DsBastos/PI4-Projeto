import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalConfirmacao } from "../../components/ModalConfirmacao";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function consultarReservasAT() {
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    api.get('/reserva/list')
    .then(({data}) => {
      const dados = data.data;
      var newReserva = [];
        dados.map((ReservaAux) => {
          newReserva.push({
              nPessoas: ReservaAux.rs_nPessoas,
              data: ReservaAux.rs_data,
              estado: ReservaAux.rs_estado,
              nomeCliente:ReservaAux.cliente.nome,
            })
        })   
        console.log
      setReserva(newReserva);
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <>
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard2"
        nome2="Criar visita" icon2="./assets/icon-filetext.svg" link2="/criarvisita"
        nome3="Consultar reservas" icon3="./assets/icon-filetext.svg" link3="/consultarReservas" />
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Aceitar ou recusar reservas</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID da Reserva</th>
                <th scope="col">Nome do cliente</th>
                <th scope="col">Nº de pessoas</th>
                <th scope="col">Ponto turístico</th>
                <th scope="col">Região</th>
                <th scope="col">Data</th>
                <th scope="col">Horas</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
        {reserva.map((data, index) => {
           if (data.tipoid == 2) {
          return (
              <tr  key={index}>
                <th>1</th>
                <td>{data.nomeCliente}</td>
                <td>3</td>
                <td>Rossio</td>
                <td>Viseu</td>
                <td>20/10/2022</td>
                <td>12:20</td>
                <td>
                  <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-accept.svg"></img></button>
                  <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-decline.svg"></img></button>
                </td>
              </tr>
               );
              }
            })}
            </tbody>
          </table>
        </div>
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Consultar lista de reservas</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID da Reserva</th>
                <th scope="col">Nome do cliente</th>
                <th scope="col">Nº de pessoas</th>
                <th scope="col">Ponto turístico</th>
                <th scope="col">Distrito</th>
                <th scope="col">Data</th>
                <th scope="col">Horas</th>
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
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
    </>
  );
}

export default consultarReservasAT;
