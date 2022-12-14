export function ModalReservaPontoInteresse({ show, onHide }) {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Lista de reservas</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped datatable-table">
              <thead className="datatable-header">
                <tr>
                  <th scope="col">ID da reserva</th>
                  <th scope="col">Nome do cliente</th>
                  <th scope="col">Nº de pessoas</th>
                  <th scope="col">Ponto de interesse</th>
                  <th scope="col">Distrito</th>
                  <th scope="col">Data</th>
                  <th scope="col">Horas</th>
                  <th scope="col">Ferramentas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Tiago</td>
                  <td>3</td>
                  <td>Rossio</td>
                  <td>Viseu</td>
                  <td>20/10/2022</td>
                  <td>12:20</td>
                  <td><button style={{"border":"none", "background":"none"}}><img src="../../assets/icon-trashfill.svg"></img></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}