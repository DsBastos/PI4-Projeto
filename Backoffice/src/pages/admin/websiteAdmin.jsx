import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menuadmin } from "../../components/Menuadmin";

function websiteAdmin() {
  return (
    <div className="d-flex">
      <Menuadmin />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5 mb-5">
          <h2 className="mt-5">Edição dos conteúdos do website</h2>
          <div className="col col-md-11">
            <form action="">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 mt-5">
                  <div className="mb-5">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold mt-md-3"
                    >
                      Texto da secção herói
                    </label>
                    <textarea
                      class="form-control mt-md-4"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold mt-md-3"
                    >
                      Texto da secção “Nosso Objetivo”
                    </label>
                    <textarea
                      class="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-5 mt-5">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label h4 fw-bold"
                    >
                      Texto da secção para descarregar aplicação
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="col-lg-5 mt-2">
                  <div class="mb-5">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label h4 fw-bold"
                    >
                      Texto do cartão “Pontos Turísticos”
                    </label>
                    <textarea
                      class="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                  <div class="mb-5">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label h4 fw-bold"
                    >
                      Texto do cartão “Reservas”
                    </label>
                    <textarea
                      class="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-5 mt-2">
                  <div class="mb-5">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label h4 fw-bold"
                    >
                      Texto do cartão “Voucher”
                    </label>
                    <textarea
                      class="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label h4 fw-bold"
                    >
                      Texto do cartão “QRCode”
                    </label>
                    <textarea
                      class="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxlength="200"
                    ></textarea>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title h4 fw-bold">
                      Texto da secção “Sobre nós”
                    </h5>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary text-white">
                Guardar alterações
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default websiteAdmin;
