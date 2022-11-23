import logo from "./assets/mygreenpointlogo.png";

function App() {
  return (
    <main className="bg-image-gradient vw-100 vh-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex mx-auto justify-content-center flex-column"
          style={{ width: "24rem" }}
        >
          <img src={logo} className="w-75 mx-auto d-block" alt="" />
          <div className="p-3 card bg-card text-center mt-4 rounded">
            <div className="card-header fw-bold">Painel de administradores</div>
            <div className="card-body ">
              <div class="row g-3 mt-2">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword6"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
