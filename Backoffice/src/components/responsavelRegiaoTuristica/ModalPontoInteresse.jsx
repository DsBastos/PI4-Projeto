import api from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalPontoInteresse({ show, onHide, props }) {

  return (
    <div className="modal fade" id="ModalPontoInteresse" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Ver detalhes do ponto turístico</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group m-2">
                <label>Nome</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.nome}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Região</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.local}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Dificuldade</label>
                <input type="number" className="form-control" disabled value={props?.dificuldade}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Duração</label>
                <input type="minutes" className="form-control" aria-describedby="emailHelp" disabled value={props?.duracao}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Terreno</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" disabled value={props?.terreno}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Tamanho</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.tamanho}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Horário</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.horario}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Pontos adquiridos</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.pontosAdquiridos}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Coordenadas</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.coordenadas}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Link</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.link}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Descrição</label>
                <textarea rows="4" type="text" className="form-control" aria-describedby="emailHelp" disabled value={props?.descricao}></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}