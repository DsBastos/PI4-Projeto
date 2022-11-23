import logo from "./assets/mygreenpointlogo.png";

function App() {
  return (
    <main className="bg-image-gradient vw-100 vh-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex mx-auto justify-content-center flex-column"
          style={{ width: "24rem" }}
        >
          <img src={logo} className="w-50 mx-auto d-block" alt="" />
          <div className="px-4 pb-5 pt-4 bg-card  shadow mt-4 rounded-3">
            <div className="card-header text-center fw-bold h5">
              Painel de administradores
            </div>
            <div className="card-body px-4">
              <form>
                <div class="row g-3 mt-2">
                  <div class="col-md-12">
                    <label for="inputEmail" class="col-form-label">
                      Utilizador
                    </label>
                    <input type="email" id="inputEmail" class="form-control" />
                    <div class="form-outline mb-4">
                      <label for="inputPassword" class="col-form-label mt-3">
                        Palavra passe
                      </label>
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                    <div class="mb-4">
                      <div class="form-check mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                          checked
                        />
                        <label class="form-check-label" for="form1Example3">
                          Lembrar a palavra-passe
                        </label>
                      </div>

                      <div class="col">
                        <a href="#!" className="text-dark">
                          Esqueceste a palavra-passe?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary text-white">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
