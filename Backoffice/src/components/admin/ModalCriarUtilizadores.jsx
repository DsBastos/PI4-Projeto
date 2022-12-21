import { api } from "../../../api";
import React, { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import 'react-dropdown/style.css';

export function ModalCriarUtilizadores({ show, onHide }) {
  let [nome, setNome] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cargos, setCargos] = useState("");
  const [selectedcargo, setSelectedcargo] = useState("");

// const handleInputChange = (e) => {
  //   switch (e.target.name) {
  //     case "nome":
  //       setNome(e.target.value);
  //       break;
  //     case "email":
  //       setEmail(e.target.value);
  //       break;
  //     case "password":
  //       setPassword(e.target.value);
  //       break;
  //   }
  // };

  // const sendError = (erro) => {
  //   toast.error(erro, {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  const criarUtilizador = () => {
    let valid = true;
    if (nome == "" || email == "" || password == "" || cargo == null) {
      valid = false;
      sendError("Os campos não podem estar vazios");
    }
    if (valid) {
      let newUtilizador = {
        nome: u_nome,
        email: u_email,
        password: u_password,
        cargo: tipoutilzador.tu_tipo,
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
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar utilizador</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" className="form-control" onChange={e => setNome(e.target.value)} aria-describedby="emailHelp" placeholder="Nome Exemplo" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="nome.exemplo@email.com" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="palavrapasseexemplo" />
              </div>
              <div className="dropdown">
                <label>Cargo</label>
                {/* <select
                  value={selectedcargo == "" ? cargos?.find(x => x.tu_tipo == props?.cargo)?.tu_id : selectedcargo}
                  onChange={e => setSelectedcargo(e.target.value)}>
                  {cargos.map(o => (
                    o.tu_tipo == props?.cargo ?
                      <option key={o.tu_id} value={o.tu_id}>{o.tu_tipo}</option>
                      :
                      <option key={o.tu_id} value={o.tu_id}>{o.tu_tipo}</option>
                  ))}
                </select> */}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}