import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalCriarUtilizadores({ show, onHide }) {
  const criarUtilizador = () => {
    let valid = true;
    if (nome == "" || email == "" || password == "" || cargo == "") {
      valid = false;
      sendError("Os campos não podem estar vazios");
    }
    if (valid) {
      let newUtilizador = {
        nome: u_nome,
        email: u_email,
        password: u_password,
        cargo: u_cargo,
      };
      api.post("utilizadores/create", newUtilizador).then((data) => {
        if (data.status == "200") {
          toast.success("Utilizador criado com sucesso", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          sendError("Erro ao criar utilizador");
        }
      });
    }
  };
  return (
    <div className="modal fade" id="ModalCriarUtilizadores" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Criar utilizador</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nome</label>
                <input type="name" className="form-control" aria-describedby="emailHelp" placeholder="Nome Exemplo" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" placeholder="nome.exemplo@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="palavrapasseexemplo" />
              </div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Inserir cargo
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Cargo1</a>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={criarUtilizador}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}