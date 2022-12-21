import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';


 function criarVisitaAT() {

//   const [data, setData]= useState("");
//   const [hora, setHora]= useState("");
//   const [vaga, setVaga]= useState("");
//   const [visita, setVisita]= useState([]);

//   useEffect(() => {
//     api
//       .get("/visita/list")
//       .then(({ data }) => {
//         const dados = data.data;
//         var newVisita = [];
//         Object.keys(dados).map((key) => {
//           var newVisita = [];
//           dados[key].visita.map((visitaAux) => {
//             newVisita.push({
//               data: visitaAux.vs_data,
//               horas: visitaAux.vs_horas,
//             });
//           });
//         });
//         setVisita(newVisita);
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }, []);

//ALTERAR PEDIDOS PARA VISITA
function handleFormSubmit(e) {
  e.preventDefault();
  const datacliente = {
    nome: nome,
    email: email,
    contacto: contacto,
  };

  api
    .post("cliente/create", datacliente)
    .then((res) => {
      let idcliente;
      if (res.data.success) {
        const data = res.data.data;
        idcliente = data.idCliente;
        setclienteid(idcliente);
      }
   
      var selectedId = 0;
      servicos.map((servico) => {
        console.log(servico)
       servico.subservicos.map((subservico) => {
          if (subservico.ativo) {
            selectedId = subservico.id;
          }
        }
       )
      })
      const datapedido = {
        idcliente: idcliente,
        detalhes: detalhes,
        idsubservico: selectedId,
      }; 

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
      });
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
            <p className="text-dark">Sobre o ponto turístico</p>
            <p> (inserir texto da bd aqui) </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default criarVisitaAT;

