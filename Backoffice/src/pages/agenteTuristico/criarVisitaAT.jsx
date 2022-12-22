import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';


function criarVisitaAT() {

  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [vagas, setVagas] = useState("");

  //ALTERAR PEDIDOS PARA VISITA
  function handleFormSubmit(e) {
    e.preventDefault();
    const datavisita = {
      data: vs_data,
      hora: vs_horas,
      vagas: vs_vagas,
    };

    api
      .post("visita/create", datavisita)
      .then((res) => {
        let vs_id;
        if (res.data.success) {
          const data = res.data.data;
          vs_id = data.vs_id;
          setvisitaid(vs_id);
        }

        if (selectedId === 0) {
          sendError("Selecione pelo menos um serviço");
        } else {
          api
            .post("pedidos/create", datapedido)
            .then((data) => {
              if (data.status == "200") {
                toast.success("Pedido criado com sucesso", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                sendError("Erro ao criar pedido");
              }
            })
            .catch((error) => {
              console.log(error.response);
            });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
    /*Submeter dados para API */
  }

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "data":
        setData(e.target.value);
        break;
      case "hora":
        setHora(e.target.value);
        break;
      case "contacto":
        setVagas(e.target.value);
        break;
    }
  };

  const criarVisita = () => {
    let valid = true;
    if (data == "" || hora == "" || vagas == "" || cargo == null) {
      valid = false;
      sendError("Os campos não podem estar vazios");
    }
    if (valid) {
      let newVisita = {
        data: vs_data,
        hora: vs_hora,
        vs_vagas: vs_vagas,
      };
      api.post("visita/create", newVisita).then((data) => {
        if (data.status == "200") {
          toast.success("Visita criada com sucesso", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          sendError("Erro ao criar visita");
        }
      })      
    } 
  };

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
              <form onSubmit={handleFormSubmit}>
                <div className="form-group row mt-5">
                  <label className="col-1 col-form-label">Data</label>
                  <div className="col-4">
                    <input 
                    type="date" 
                    className="form-control" 
                    id="staticEmail"
                    value={data}
                    onChange={(e) => {
                    setData(e.target.value);
                     }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Hora</label>
                  <div className="col-4">
                    <input 
                    type="time" 
                    className="form-control" 
                    id="inputHoras" 
                    placeholder="Horas"
                    value={hora}
                    onChange={(e) => {
                    setHora(e.target.value);
                    }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Vagas</label>
                  <div className="col-4">
                    <input type="number" 
                    className="form-control" 
                    id="inputVagas"
                    placeholder="Número de vagas"
                    value={vagas}
                    onChange={(e) => {
                    setVagas(e.target.value);
                }}
                    ></input>
                  </div>
                </div>
              </form>
              <div className="pt-4">
                <button 
                type="submit" 
                className="btn btn-success"
                onClick={handleFormSubmit}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 p-5 bg-secondary bg-opacity-25 vh-100">
            <p className="text-dark">Sobre o ponto turístico</p>
            <p> (inserir texto da bd aqui) </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default criarVisitaAT;

