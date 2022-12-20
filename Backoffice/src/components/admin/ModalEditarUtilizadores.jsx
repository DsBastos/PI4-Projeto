import { api } from "../../../api";
import React, { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import 'react-dropdown/style.css';

export function ModalEditarUtilizadores({ show, onHide, props }) {
  const [cargos, setCargos] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [selectedcargo, setSelectedcargo] = useState("");

  useEffect(() => {
    api.get("tipoutilizadores/list").then((data) => {
      let cargosarr = data.data.data;
      setCargos(cargosarr);
    });
  }, []);

  // function SendUpdate() {
  //   const datawebsitepost = {
  //     estado: estado == "" ? pedido.estado : estado,
  //     data: data == "" ? pedido.data : data,
  //   };

  // const deleteUtilizador = (e) => {
  //   api.delete("utilizadores/deleteutilizador/"+utilizadores.u_id).then(()=>{
  //    onHide();
  //   })
  //   toast.success('Utilizador apagado com sucesso', {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     });
  // }

  function editUser() {
    let newUser = {
      nome: nome == "" ? props?.nome : nome,
      email: email == "" ? props?.email : email,
      tipo: selectedcargo == '' ? cargos.find(x => x.tu_tipo == props.cargo).tu_id : selectedcargo
    }
    //console.log(newUser)
    api.patch("/utilizadores/updateutilizador/" + props.id, newUser).then((data) => {
      console.log(data);
      if (data.status = "200") {
        toast.success('Utilizador alterado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        sendError("Ocorreu um erro ao tentar alterar o utilizador")
        //console.log("asd");
      }
    })
      .catch((error) => {
        //console.log(error);
        alert(error);
      });
  }

  return (
    <div className="modal fade" id="ModalEditarUtilizadores" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <input type="text" className="form-control" onChange={e => setNome(e.target.value)} aria-describedby="emailHelp" placeholder="Nome Exemplo" value={nome == "" ? props?.nome : nome} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="nome.exemplo@email.com" value={email == "" ? props?.email : email} />
              </div>
              <div className="dropdown">
                <label>Cargo</label>
                <select
                  value={selectedcargo == "" ? cargos?.find(x => x.tu_tipo == props?.cargo)?.tu_id : selectedcargo}
                  onChange={e => setSelectedcargo(e.target.value)}>
                  {cargos.map(o => (
                    o.tu_tipo == props?.cargo ?
                      <option key={o.tu_id} value={o.tu_id}>{o.tu_tipo}</option>
                      :
                      <option key={o.tu_id} value={o.tu_id}>{o.tu_tipo}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" onClick={editUser} data-bs-dismiss="modal" className="btn btn-primary">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}