// import { api } from "../../../api";
// import { useState, useEffect } from "react"
// import { toast } from 'react-toastify';

export function ModalEditarUtilizadores({ show, onHide }) {
  // function SendUpdate() {
  //   const datawebsitepost = {
  //     estado: estado == "" ? pedido.estado : estado,
  //     data: data == "" ? pedido.data : data,
  //   };

  //   api.put("/utilizadores/updateutilizador/" + utilizadores.u_id, datautilizadorespost).then((data) => {
  //     if (data.status = "200") {
  //       toast.success('Website alterado com sucesso', {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     } else {
  //       sendError("Ocorreu um erro ao tentar alterar o utilizador")
  //     }
  //   })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }

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

  return (
    <div className="modal fade" id="ModalEditarUtilizadores" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar utilizador (inserir ID)</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome Exemplo"/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="nome.exemplo@email.com"/>
              </div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Inserir cargo
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Cargo1</a>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger text-left" data-bs-dismiss="modal" /*onClick={deleteUtilizador*/>Eliminar utilizador</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}