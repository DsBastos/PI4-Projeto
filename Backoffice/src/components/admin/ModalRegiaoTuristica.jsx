import api from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalRegiaoTuristica({ show, onHide, props, props2 }) {

  let [selectedUtilizador, setSelectedUtilizador] = useState([]);
  
  function editUserSetRegiao() {
    selectedUtilizador.map((id) => {
      api.patch("/utilizadores/updateutilizador/" + id, { rt_id: props.id }).then((data) => {
        console.log(data);
        if (data.status = "200") {
          toast.success('Responsável da região turística alterado com sucesso', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          sendError("Ocorreu um erro ao tentar alterar o responsável da região turística")
        }
      })
        .catch((error) => {
          console.log(error);
        });
    })
  }

  function utilizadorChecked(e,id) {
    if (e.target.checked) {
      setSelectedUtilizador([...selectedUtilizador, id])
    } else {
      setSelectedUtilizador(selectedUtilizador.filter((item) => item !== id))
    }
  }


  return (
    <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Escolha um responsável para a região turística</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nome completo</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {props2.map((user, index) => {
                  if (user.tu_id == 2 && user.rt_id == null) {
                    return (
                      <tr key={index}>
                        <th><input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={(e)=>utilizadorChecked(e,user.u_id)}></input></th>
                        <th>{user.u_nome}</th>
                        <td>{user.u_email}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={editUserSetRegiao}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>

  );
}