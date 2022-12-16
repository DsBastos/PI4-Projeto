import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalEditarPontoInteresse({ show, onHide }) {
  function SendUpdate() {
    const datapontointeressepost = {
      estado: estado == "" ? pedido.estado : estado,
      data: data == "" ? pedido.data : data,
    };

    api.put("/pontoturistico/updatepontoturistico/" + pontoturistico.pT_id, datapedidospost).then((data) => {
      if (data.status = "200") {
        toast.success('Ponto turístico alterado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        sendError("Ocorreu um erro ao tentar alterar o ponto turístico")
      }
    })
      .catch((error) => {
        alert(error);
      });

    const deletePontoTuristico = (e) => {
      api.delete("pontoturistico/deletepontoturistico" + subservico).then(() => {
        onHide();
      })
      toast.success('Ponto turístico apagado com sucesso', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Ver/editar informação detalhada dos pontos de interesse</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group m-1">
                <label htmlFor="exampleInputEmail1">Dificuldade</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Inserir nome completo"></input>
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Duração</label>
                <input type="minutes" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir email"></input>
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Terreno</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Tamanho</label>
                <input type="size" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Descrição</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group row pt-4">
                <label className="col-1 col-form-label">Hora de abertura</label>
                <div className="col-4">
                  <input type="time" className="form-control" id="inputHoras" placeholder="Horas"></input>
                </div>
              </div>
              <div className="form-group row pt-4">
                <label className="col-1 col-form-label">Hora de encerramento</label>
                <div className="col-4">
                  <input type="time" className="form-control" id="inputHoras" placeholder="Horas"></input>
                </div>
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Coordenadas</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Link</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger text-left" data-bs-dismiss="modal" onClick={deletePontoTuristico}>Eliminar ponto turístico</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}