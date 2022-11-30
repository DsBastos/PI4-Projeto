import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";

function websiteAdmin() {
  return (
    <div className="d-flex">
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard"
        nome2="Website"
        icon2="./assets/icon-filetext.svg"
        nome3="Responsáveis das regiões turísticas"
        icon3="./assets/icon-filetext.svg"
        link3="/responsaveisDaRegiao"
        nome4="Regiões turísticas"
        icon4="./assets/icon-filetext.svg"
        link4="/regioesturisticas"
        nome5="Utilizadores"
        icon5="./assets/icon-user.svg"
        link5="/utilizadores"
      />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5 mb-5">
          <h2 className="mt-5">Edição dos conteúdos do website</h2>
          <div className="col col-md-11">
            <form className="d-inline-flex flex-column">
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
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div className="px-5 py-3">
                        <h5 className="card-title h4 fw-bold">
                          Atualizações da aplicação
                        </h5>
                        <table class="table table-striped table-group-divider text-center align-middle ">
                          <thead>
                            <tr>
                              <th scope="col">Nº da versão</th>
                              <th scope="col">Descrição</th>
                            </tr>
                          </thead>
                          <tbody className="table-group-divider">
                            <tr>
                              <td className="fw-bold">1.0.0</td>
                              <td className="">
                                <textarea
                                  class="form-control mx-auto w-50 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="4"
                                  maxlength="200"
                                  cols="3"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-bold">1.0.1</td>
                              <td>
                                <textarea
                                  class="form-control mx-auto  w-50 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="4"
                                  maxlength="200"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-bold">1.0.2</td>
                              <td>
                                <textarea
                                  class="form-control mx-auto w-50 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="4"
                                  maxlength="200"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary px-5 text-white d-block ms-auto mt-4"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default websiteAdmin;
