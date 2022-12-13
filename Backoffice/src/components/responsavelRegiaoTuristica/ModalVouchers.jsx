export function ModalVouchers({ show, onHide }) {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Lista de vouchers</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped datatable-table">
              <thead className="datatable-header">
                <tr>
                  <th scope="col">ID do voucher</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Local</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Ferramentas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Café</td>
                  <td>Viseu</td>
                  <td>Inserir aqui texto relativo ao voucher</td>
                  <td>
                    <button style={{"border":"none", "background":"none"}}><img src="../../assets/icon-trashfill.svg"></img></button>
                  </td>
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