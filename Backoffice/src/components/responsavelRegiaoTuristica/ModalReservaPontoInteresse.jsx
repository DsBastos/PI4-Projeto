import api from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalReservaPontoInteresse({ show, onHide }) {

  function LoadFillDataAccepted() {
    const [reserva, setReserva] = useState([]);

    useEffect(() => {
      api.get('/reserva/list')
        .then(({ data }) => {
          const dados = data.data;
          var newReserva = [];
          dados.map((ReservaAux) => {
            newReserva.push({
              id: ReservaAux.rs_id,
              aceite: ReservaAux.r_aceite,
              nPessoas: ReservaAux.rs_npessoas,
              data: ReservaAux.visitum.vs_data,
              horas: ReservaAux.visitum.vs_horas,
              estado: ReservaAux.rs_estado,
              nomeCliente: ReservaAux.cliente.c_nome,
              nomePt: ReservaAux.visitum.pontoTuristico.pt_nome,
              localPt: ReservaAux.visitum.pontoTuristico.pt_regiao,
            })
            //console.log(ReservaAux)
          })
          setReserva(newReserva);
        })
        .catch((error) => {
          alert(error)
        })
    }, [])

    return (
      <>
        {/* PARA O IF && data.localPt == */}
        {reserva.map((data, index) => {
          if (data.aceite == true) {
            return (
              <tr key={index}>
                <th>{data.id}</th>
                <td>{data.nomeCliente}</td>
                <td>{data.nPessoas}</td>
                <td>{data.nomePt}</td>
                <td>{data.localPt}</td>
                <td>{data.data}</td>
                <td>{data.horas}</td>
              </tr>
            );
          }
        })}
      </>
    )
  }

  return (
    <div className="modal fade" id="ModalReservaPontoInteresse" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Lista de reservas</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped datatable-table">
              <thead className="datatable-header">
                <tr>
                  <th scope="col">ID da Reserva</th>
                  <th scope="col">Nome do cliente</th>
                  <th scope="col">Nº de pessoas</th>
                  <th scope="col">Ponto turístico</th>
                  <th scope="col">Distrito</th>
                  <th scope="col">Data</th>
                  <th scope="col">Horas</th>
                </tr>
              </thead>
              <tbody>
                <LoadFillDataAccepted />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}