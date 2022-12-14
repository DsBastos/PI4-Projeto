import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";

function recompensas() {
  return (
    <div className="d-flex">
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard1"
        nome2="Agentes turísticos"
        icon2="./assets/icon-filetext.svg"
        link2="/agentesTuristicos"
        nome3="Pontos de interesse"
        icon3="./assets/icon-filetext.svg"
        link3="/pontosDeInteresse"
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg"
      />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 my-5">
          <div className="d-flex justify-content-between mt-5">
            <h2>Recompensas</h2>
            <button type="button" class="btn btn-success">
              Consultar vouchers emitidos
            </button>
          </div>
          <div className="col mt-4">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">Criar Voucher</h5>
                <form>
                  <div class="form-group row mt-3">
                    <label for="nomeRecompensa" class="col-2 col-form-label">
                      Nome
                    </label>
                    <div class="col-lg-3">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Insira o nome da recompensa"
                        id="nomeRecompensa"
                      />
                    </div>
                  </div>
                  <div class="form-group row mt-2">
                    <label for="localRecompensa" class="col-2 col-form-label">
                      Local
                    </label>
                    <div class="col-lg-3">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Insira a região do local"
                        id="localRecompensa"
                      />
                    </div>
                  </div>
                  <div class="form-group row mt-2">
                    <label for="pontoTuristico" class="col-2 col-form-label">
                      Ponto turístico
                    </label>
                    <div class="col-lg-3">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Insira o local do ponto turístico"
                        id="pontoTuristico"
                      />
                    </div>
                  </div>
                  <div class="form-group row mt-2">
                    <label for="descricao" class="col-2 col-form-label">
                      Descrição
                    </label>
                    <div class="col-lg-8">
                      <textarea
                        class="form-control"
                        type="text"
                        placeholder="Insira uma descrição para a recompensa"
                        id="descricao"
                        rows="6"
                        maxlength="1024"
                      />
                    </div>
                  </div>
                  <div class="form-group row mt-2">
                    <label for="custoRecompensa" class="col-2 col-form-label">
                      Custo
                    </label>
                    <div class="col-lg-3">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Insira o valor em pontos"
                        id="custoRecompensa"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success text-white mt-4 d-block ms-auto "
                  >
                    Criar voucher
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">
                  Associar pontos recebidos ao ponto turístico
                </h5>
                <form>
                  <select
                    class="form-select col-3 my-4"
                    aria-label=".form-select example"
                  >
                    <option selected>Distrito</option>
                    <option value="1">Viseu</option>
                    <option value="2">Aveiro</option>
                    <option value="3">Three</option>
                  </select>
                  <table class="table table-striped table-group-divider text-center align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Pontos de interesse</th>
                        <th scope="col">Distrito</th>
                        <th scope="col">pontos</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      <tr>
                        <td className="fw-bold">sé de viseu</td>
                        <td className="fw-bold">viseu</td>
                        <td className="">
                          <textarea
                            class="form-control mx-auto w-25 my-md-3"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            maxlength="200"
                            cols="3"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">sé de viseu</td>
                        <td className="fw-bold">viseu</td>
                        <td>
                          <textarea
                            class="form-control mx-auto w-25 my-md-3 align-content-center"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            maxlength="200"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">sé de viseu</td>
                        <td className="fw-bold">viseu</td>
                        <td>
                          <textarea
                            class="form-control mx-auto w-25 my-md-3 align-content-center"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            maxlength="200"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    type="submit"
                    className="btn btn-success text-white mt-4 d-block ms-auto "
                  >
                    Associar pontos
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default recompensas;
