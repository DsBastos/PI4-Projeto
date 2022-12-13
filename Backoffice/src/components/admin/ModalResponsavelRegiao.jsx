export function ModalResponsavelRegiao({ show, onHide }) {
    return (
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Criar novo utilizador</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group m-1">
                  <label htmlFor="exampleInputEmail1">Nome</label>
                  <input type="name" className="form-control" aria-describedby="emailHelp" placeholder="Inserir nome completo"></input>
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir email"></input>
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Telemóvel</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Localidade</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
                </div>
                <div className="form-group m-2">
                  <label htmlFor="exampleInputEmail1">Região</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
                </div>
              </form>
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