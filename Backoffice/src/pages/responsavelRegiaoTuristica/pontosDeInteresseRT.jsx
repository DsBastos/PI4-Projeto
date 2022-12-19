import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalEditarPontoInteresse } from "../../components/responsavelRegiaoTuristica/ModalEditarPontoInteresse"
import { ModalReservaPontoInteresse } from "../../components/responsavelRegiaoTuristica/ModalReservaPontoInteresse";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function pontosdeinteresseRT() {
  const [pontoTuristico, setPontoTuristico] = useState([]);

  useEffect(() => {
    api.get('/pontoturistico/list')
    .then(({data}) => {
      const dados = data.data;
      var newPontoTuristico = [];
        dados.map((ReservaAux) => {
          newPontoTuristico.push({
            npessoas: ReservaAux.rs_npessoas,
            data: ReservaAux.rs_data,
            hora: ReservaAux.rs_hora,
            aceite: ReservaAux.r_aceite,
          })
        })   
      setReserva(newPontoTuristico);
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard1"
      nome2="Agentes turísticos" icon2="./assets/icon-filetext.svg" link2="/agentesTuristicos"
      nome3="Pontos de interesse" icon3="./assets/icon-filetext.svg"
      nome4="Recompensas" icon4="./assets/icon-filetext.svg" link4="/recompensas"/>
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Pontos de interesse</h2>
          <button type="button" className="btn btn-success d-inline" data-bs-toggle="modal" data-bs-target="#ModalReservaPontoInteresse">Consultar lista de reservas<ModalReservaPontoInteresse/></button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Distrito</th>
                <th scope="col">Informação adicional</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Sé de Viseu</th>
                <td>Viseu</td>
                <td><button data-bs-toggle="modal" data-bs-target="#ModalPontoInteresse">
                  Ver/editar detalhes</button></td>
                <td>
                  <button style={{"border":"none", "background":"none"}} data-bs-toggle="modal" data-bs-target="#ModalReservaPontoInteresse"><img src="../../assets/icon-penfill.svg"></img></button>
                  <button style={{"border":"none", "background":"none"}}><img src="../../assets/icon-trashfill.svg"></img></button>
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
  