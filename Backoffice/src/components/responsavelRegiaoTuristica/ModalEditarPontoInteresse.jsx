export function ModalEditarPontoInteresse({ show, onHide }) {
    return (
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Ver/editar informação detalhada dos pontos de interesse</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group m-1">
                  <label for="exampleInputEmail1">Dificuldade</label>
                  <input type="name" className="form-control" aria-describedby="emailHelp" placeholder="Inserir nome completo"></input>
                </div>
                <div className="form-group m-2">
                  <label for="exampleInputEmail1">Duração</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir email"></input>
                </div>
                <div className="form-group m-2">
                  <label for="exampleInputEmail1">Terreno</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
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