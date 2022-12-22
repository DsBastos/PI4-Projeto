import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function LoadFillDataNotAccepted() {
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    api.get('/reserva/list')
    .then(({data}) => {
      const dados = data.data;
      var newReserva = [];
        dados.map((ReservaAux) => {
          newReserva.push({
              aceite: ReservaAux.r_aceite,
              nPessoas: ReservaAux.rs_nPessoas,
              data: ReservaAux.rs_data,
              estado: ReservaAux.rs_estado,
              nomeCliente:ReservaAux.cliente.nome,
            })
        })
      setReserva(newReserva);
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <>
      {reserva.map((data, index) => {
        if (data.r_aceite==false) {
          return (
            <tr key={index}>
              <th>{data.nome}</th>
              <td>{data.email}</td>
              <td>{pontosT?.find(pt=>pt.idUser==data.id)?.nomePt}</td>
              <td>
                <button
                  style={{ border: "none", background: "none" }}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <img src="../../assets/icon-penfill.svg"></img>
                </button>
                <button style={{ border: "none", background: "none" }}>
                  <img src="../../assets/icon-trashfill.svg"></img>
                </button>
              </td>
            </tr>
          );
        }
      })}
    </>
  )

}

function LoadFillDataAccepted() {
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    api.get('/reserva/list')
    .then(({data}) => {
      const dados = data.data;
      var newReserva = [];
        dados.map((ReservaAux) => {
          newReserva.push({
              aceite: ReservaAux.r_aceite,
              nPessoas: ReservaAux.rs_nPessoas,
              data: ReservaAux.rs_data,
              estado: ReservaAux.rs_estado,
              nomeCliente:ReservaAux.cliente.nome,
            })
        })
      setReserva(newReserva);
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <>
      {reserva.map((data, index) => {
        if (data.r_aceite==true) {
          return (
            <tr key={index}>
              <th>{data.cliente.nomeCliente}</th>
              <td>{data.email}</td>
              <td>{pontosT?.find(pt=>pt.idUser==data.id)?.nomePt}</td>
              <td>
                <button
                  style={{ border: "none", background: "none" }}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <img src="../../assets/icon-penfill.svg"></img>
                </button>
                <button style={{ border: "none", background: "none" }}>
                  <img src="../../assets/icon-trashfill.svg"></img>
                </button>
              </td>
            </tr>
          );
        }
      })}
    </>
  )
}

function consultarReservasAT() {
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

            </tbody>
          </table>
        </div>
      </main>
    </div>
    </>
  );
}

export default consultarReservasAT;
