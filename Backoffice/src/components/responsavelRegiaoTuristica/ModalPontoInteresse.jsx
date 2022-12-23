import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalPontoInteresse({ show, onHide, props }) {


  return (
    <div className="modal fade" id="ModalPontoInteresse" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Ver detalhes do ponto turístico</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group m-1">
                <label>Nome</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.nome}></input>
              </div>
              <div className="form-group m-2">
                <label>Região</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Inserir email"></input>
              </div>
              <div className="form-group m-1">
                <label>Dificuldade</label>
                <input type="number" className="form-control" placeholder="Inserir nome completo"></input>
              </div>
              <div className="form-group m-2">
                <label>Duração</label>
                <input type="minutes" className="form-control" aria-describedby="emailHelp" placeholder="Inserir email"></input>
              </div>
              <div className="form-group m-2">
                <label>Terreno</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label>Tamanho</label>
                <input type="size" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label>Descrição</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group row pt-4">
                <label className="col-1 col-form-label">Hora de abertura</label>
                <div className="col-4">
                  <input type="time" className="form-control" placeholder="Horas"></input>
                </div>
              </div>
              <div className="form-group row pt-4">
                <label className="col-1 col-form-label">Hora de encerramento</label>
                <div className="col-4">
                  <input type="time" className="form-control" placeholder="Horas"></input>
                </div>
              </div>
              <div className="form-group m-2">
                <label>Coordenadas</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label>Link</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}