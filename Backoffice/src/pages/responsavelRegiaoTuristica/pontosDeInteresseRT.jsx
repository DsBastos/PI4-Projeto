import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalEditarPontoInteresse } from "../../components/responsavelRegiaoTuristica/ModalEditarPontoInteresse"
import { ModalReservaPontoInteresse } from "../../components/responsavelRegiaoTuristica/ModalReservaPontoInteresse";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function LoadFillData() {
  const [pontoTuristico, setPontoTuristico] = useState([]);
  //const [modalEditarUtilizadorShow, setModalEditarUtilizadorShow] = React.useState(false);
  const [selectedPontoTuristico, setSelectedPontoTuristico] = useState(null);

  useEffect(() => {
    api.get('/pontoturistico/list')
      .then(({ data }) => {
        const dados = data.data;
        var newPontoTuristico = [];
        dados.map((PontoTuristicoAux) => {
          newPontoTuristico.push({
            id: PontoTuristicoAux.pT_id,
            nome: PontoTuristicoAux.pT_nome,
            local: PontoTuristicoAux.pT_local,
            dificuldade: PontoTuristicoAux.pT_dificuldade,
            duracao: PontoTuristicoAux.pT_duracao,
            terreno: PontoTuristicoAux.pT_terreno,
            tamanho: PontoTuristicoAux.pT_tamanho,
            descricao: PontoTuristicoAux.pT_descricao,
            horario: PontoTuristicoAux.pT_horario,
            coordenadas: PontoTuristicoAux.pT_coordenadas,
            link: PontoTuristicoAux.pT_link,
            pontosAdquiridos: PontoTuristicoAux.pT_pontosadquiridos,
          })
        })
        setPontoTuristico(newPontoTuristico);
        console.log(pontoTuristico)
      })
      .catch((error) => {
        alert(error)
      })
  }, [])
  return (
    <>
      {pontoTuristico.map((data, index) => {
        return (
          <>
            <tr key={index}>
              <td scope="row">{data.nome}</td>
              <td>{data.local}</td>
              <td>
                <button style={{ "border": "none", "background": "none" }} onClick={() => { setSelectedPontoTuristico(data); setModalPontoInteresseShow(true); }}>
                  Ver/editar detalhes
                </button>
              </td>
              <td>
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    setSelectedUtilizador(data);
                    setModalEditarUtilizadorShow(true);
                  }}>
                  <button style={{ "border": "none", "background": "none" }} data-bs-toggle="modal" data-bs-target="#ModalEditarUtilizadores">
                    <img src="../../assets/icon-penfill.svg"></img>

                  </button>
                </span>

                <span
                  id={data.u_id}
                  className="material-symbols-outlined"
                  onClick={() => {
                    setSelectedUtilizador(data);
                    setModalConfirmacaoShow(true);
                  }}
                >
                  <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-trashfill.svg"></img></button>
                </span>
              </td>
            </tr>
            <ModalEditarUtilizadores
              show={modalEditarUtilizadorShow}
              onHide={() => setModalEditarUtilizadorShow(false)}
              props={selectedUtilizador}
            />
          </>
        );
      })}
    </>
  )
}
function pontosdeinteresseRT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard1"
        nome2="Agentes turísticos" icon2="./assets/icon-filetext.svg" link2="/agentesTuristicos"
        nome3="Pontos turísticos" icon3="./assets/icon-filetext.svg"
        nome4="Recompensas" icon4="./assets/icon-filetext.svg" link4="/recompensas" />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Pontos de interesse</h2>
          <button type="button" className="btn btn-success d-inline" data-bs-toggle="modal" data-bs-target="#ModalReservaPontoInteresse">Consultar lista de reservas<ModalReservaPontoInteresse /></button>
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
                  <button style={{ "border": "none", "background": "none" }} data-bs-toggle="modal" data-bs-target="#ModalReservaPontoInteresse"><img src="../../assets/icon-penfill.svg"></img></button>
                  <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-trashfill.svg"></img></button>
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
