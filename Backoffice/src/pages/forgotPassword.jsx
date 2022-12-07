import { Link } from "react-router-dom";

import logo from "../assets/mygreenpointlogo.png";

function forgotPassword() {
  return (
    <main className="bg-image-gradient vw-100 vh-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex mx-auto justify-content-center flex-column"
          style={{ maxWidth: "38rem" }}
        >
          <img src={logo} className="w-50 mx-auto d-block" alt="" />
          <div className="px-4 py-5 bg-card  shadow mt-4 rounded-3">
            <div className="card-header"></div>
            <div className="card-body px-5">
              <h5 className="card-title text-center">
                Esqueceu a sua palavra-passe? <br />
                Insira o seu e-mail para poder definir uma nova.
              </h5>
              <form>
                <div class="row g-3 mt-2 mb-5">
                  <div class="col-md-12">
                    <label for="inputEmail" class="col-form-label">
                      O seu e-mail
                    </label>
                    <input type="email" id="inputEmail" class="form-control" />
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <Link
                    to="/dashboard"
                    type="submit"
                    class="btn btn-primary text-white"
                  >
                    Enviar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default forgotPassword;
