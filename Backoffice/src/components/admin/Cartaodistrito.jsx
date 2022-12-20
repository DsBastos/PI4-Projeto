import React from "react";
import { ModalRegiaoTuristica } from "./ModalRegiaoTuristica"
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function Cartaodistrito() {

  const [regiao, setRegiao] = useState([]);

  useEffect(() => {
    api.get('/regiaoturistica/list')
      .then(({ data }) => {
        const dados = data.data;
        var newRegiao = [];
        dados.map((RegiaoAux) => {
          newRegiao.push({
              nome: RegiaoAux.rt_nome,
          })
        })
        setRegiao(newRegiao);
        console.log(dados)
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  return (
    <div className="card" style={{ width: "23rem" }}>
      <div className="card-header">{regiao.nome}</div>
      <div className="card-body">
        <h5 className="card-title">Responsáveis definidos</h5>
        <div className="d-flex flex-wrap">
          <div
            className="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Pedro Jacob
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert">
            Pedro Mark
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Tiago João
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Adicionar responsável
        </a>
      </div>
      <ModalRegiaoTuristica />
    </div>
  );
}

export default Cartaodistrito;
