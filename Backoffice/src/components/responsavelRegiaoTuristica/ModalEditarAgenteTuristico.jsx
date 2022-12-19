// import { api } from "../../../api";
// import { useState, useEffect } from "react"
// import { toast } from 'react-toastify';

export function ModalEditarAgenteTuristico({ show, onHide }) {
    // function SendUpdate() {
    //     const dataagenteturisticopost = {
    //         estado: estado == "" ? pedido.estado : estado,
    //         data: data == "" ? pedido.data : data,
    //     };

    //     api.put("/utilizador/updateutilizador/" + utilizador.u_id, dataagenteturisticopost).then((data) => {
    //         if (data.status = "200") {
    //             toast.success('Utilizador alterado com sucesso', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         } else {
    //             sendError("Ocorreu um erro ao tentar editar o agente turístico")
    //         }
    //     })
    //         .catch((error) => {
    //             alert(error);
    //         });
    // }
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar dados do agente turístico</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group m-1">
                                <label htmlFor="exampleInputEmail1">Nome</label>
                                <input type="name" className="form-control" aria-describedby="emailHelp" placeholder="Nome Exemplo"></input>
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="nome.exemplo@email.com"></input>
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Região turística</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Região Exemplo"></input>
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Ponto turístico</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ponto Turístico Exemplo"></input>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}