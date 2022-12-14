import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
//import { api } from "../../../api";
import { useState, useEffect } from "react"

function criarVisitaAT() {
  // //Estados
  // const [heroi, setHeroi] = useState("")

  // useEffect(() => {
  //   api.get('/website/list')
  //     .then(({ data }) => {
  //       const dados = data.data;
  //       setHeroi(dados.ws_texto)
  //     })
  //     .catch((error) => {
  //       alert(error)
  //     })
  // }, [])

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard2"
        nome2="Criar visita" icon2="./assets/icon-filetext.svg" link2="/criarvisita"
        nome3="Consultar reservas" icon3="./assets/icon-filetext.svg" link3="/consultarReservas" />
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
        <h2 className="mt-5">Criar visita</h2>
        <div className="d-flex">
          <div className="col">
            <div className="container px-5 mt-5">
              
              <div className="pt-4">
                <div className="card" style={{ "width": "18rem" }}>
                  <img className="card-img-top" src="..." alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">Nome do ponto turístico</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <form>
                <div className="form-group row mt-5">
                  <label className="col-1 col-form-label">Data</label>
                  <div className="col-4">
                    <input type="date" className="form-control" id="staticEmail"></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Hora</label>
                  <div className="col-4">
                    <input type="time" className="form-control" id="inputHoras" placeholder="Horas"></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Vagas</label>
                  <div className="col-4">
                    <input type="number" className="form-control" id="inputVagas" placeholder="Número de vagas"></input>
                  </div>
                </div>
              </form>
              <div className="pt-4">
                <button type="button" className="btn btn-success">Confirmar</button>
              </div>
            </div>
          </div>
          <div className="col-3 p-5 bg-secondary bg-opacity-25 vh-100">
            <p className="text-dark">Sobre o local</p>
            <p> (inserir texto da bd aqui) </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default criarVisitaAT;

