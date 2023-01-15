import api from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function LoadFillData() {
  const [recompensa, setRecompensa] = useState([]);

  useEffect(() => {
    api.get('/recompensa/list')
    .then(({data}) => {
      const dados = data.data;
      var newRecompensa = [];
        dados.map((RecompensaAux) => {
          newRecompensa.push({
              id: RecompensaAux.r_id,
              nomePT: RecompensaAux.pontoTuristico.pt_nome,
              nomeLocal: RecompensaAux.pontoTuristico.pt_regiao,
              nome: RecompensaAux.r_nome,
              descricao: RecompensaAux.r_descricao,
            })
        })   
      setRecompensa(newRecompensa);
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <>
      {recompensa.map((data, index) => {
        return (
          <>
            <tr key={index}>
              <td scope="row">{data.id}</td>
              <td>{data.nome}</td>
              <td>{data.nomePT}</td>
              <td>{data.descricao}</td>
            </tr>
          </>
        );
      })}
    </>
  );
}

export function ModalVouchers({ show, onHide }) {
  return (
    <div className="modal fade" id="ModalVouchers" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Lista de recompensas</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped datatable-table">
              <thead className="datatable-header">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Ponto turístico</th>
                  <th scope="col">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <LoadFillData />
              </tbody>
            </table>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Confirmar</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}