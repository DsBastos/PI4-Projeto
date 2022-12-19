import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalCriarUtilizadores } from "../../components/admin/ModalCriarUtilizadores"
import { ModalEditarUtilizadores } from "../../components/admin/ModalEditarUtilizadores";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function LoadFillData() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedUtilizador, setSelectedUtilizador] = useState(null);
  const [utilizador, setUtilizador] = useState([]);
  const [modalEditarUtilizadorShow, setEditarUtilizadorShow] = React.useState(false);

  useEffect(() => {
    api.get('/utilizadores/list')
      .then(({ data }) => {
        const dados = data.data;
        var newUtilizador = [];
        dados.map((UtilizadorAux) => {
          newUtilizador.push({
              nome: UtilizadorAux.u_nome,
              email: UtilizadorAux.u_email,
              cargo: UtilizadorAux.tu_tipo,
          })
        })
        console.log(dados)
        setUtilizador(newUtilizador);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  return (
    <>
      {utilizador.map((data, index) => {
        return (
          <>
            <tr key={index}>
              <td scope="row">{data.utilizador?.nome}</td>
              <td>{data.utilizador?.email}</td>
              <td>{data.utilizador?.cargo}</td>
              <td>
                <div className="d-flex gap-2">
                  <span
                    className="material-symbols-outlined"
                    onClick={() => {
                      setSelectedUtilizador(data);
                      setModalShow(true);
                    }}
                  >
                    <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-penfill.svg"></img></button>
                  </span>

                  <span
                    id={data.u_id}
                    className="material-symbols-outlined"
                    onClick={() => {
                      setSelectedUtilizador(data);
                      setEditarUtilizadorShow(true);
                    }}
                  >
                    <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-trashfill.svg"></img></button>
                  </span>
                </div>
              </td>
            </tr>

            <ModalEditarUtilizadores
              show={modalShow}
              onHide={() => setModalShow(false)}
              utilizador={selectedUtilizador}
            />
          </>
        );
      })}
    </>
  );
}

function utilizadoresAdmin() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard"
        nome2="Website"
        icon2="./assets/icon-filetext.svg"
        link2="/website"
        nome3="Responsáveis das regiões turísticas"
        icon3="./assets/icon-filetext.svg"
        link3="/responsaveisDaRegiao"
        nome4="Regiões turísticas"
        icon4="./assets/icon-filetext.svg"
        link4="/regioesturisticas"
        nome5="Utilizadores"
        icon5="./assets/icon-user.svg"
      />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5 p-3">
          <h2 className="mt-5">Utilizadores</h2>
          <button type="button" className="btn btn-primary d-inline" data-bs-toggle="modal" data-bs-target="#ModalCriarUtilizadores">
            <ModalCriarUtilizadores />
            <img src="../../assets/icon-adduser.svg" alt="ícone de utilizador com símbolo de mais"></img>
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome completo</th>
                <th scope="col">Email</th>
                <th scope="col">Cargo</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <LoadFillData />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default utilizadoresAdmin;
