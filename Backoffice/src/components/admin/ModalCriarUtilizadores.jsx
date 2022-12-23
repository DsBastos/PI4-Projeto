import { api } from "../../../api";
import React, { useState, useEffect } from "react"
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';

export function ModalCriarUtilizadores({ show, onHide }) {
  let [nome, setNome] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cargos, setCargos] = useState([]);
  let [selectedcargo, setSelectedcargo] = useState(1);

  useEffect(() => {
    api.get("tipoutilizadores/list").then((data) => {
      let cargosarr = data.data.data;
      setCargos(cargosarr);
      console.log(cargos)
    });
  }, []);

  const sendError = (erro) => {
    toast.error(erro, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function criarUtilizador()  {
    let valid = true;
    console.log(1);
    if (nome == "" || email == "" || password == "") {
      valid = false;
      sendError("Os campos não podem estar vazios");
    }
    if (valid) {
      let newUtilizador = {
        nome: nome,
        email: email,
        password: password,
        cargo: selectedcargo,
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
                <select
                  value={selectedcargo}
                  onChange={e => setSelectedcargo(e.target.value)}>
                  {cargos.map(o => (
                      <option key={o.tu_id} value={o.tu_id}>{o.tu_tipo}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={criarUtilizador}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}