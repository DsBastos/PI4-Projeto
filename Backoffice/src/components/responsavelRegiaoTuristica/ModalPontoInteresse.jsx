export function ModalPontoInteresse({ show, onHide }) {
    return (
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Lista de reservas</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group m-1">
                  <label for="exampleInputEmail1">Nome</label>
                  <input type="name" class="form-control" aria-describedby="emailHelp" placeholder="Inserir nome completo"></input>
                </div>
                <div class="form-group m-2">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir email"></input>
                </div>
                <div class="form-group m-2">
                  <label for="exampleInputEmail1">Cargo</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }