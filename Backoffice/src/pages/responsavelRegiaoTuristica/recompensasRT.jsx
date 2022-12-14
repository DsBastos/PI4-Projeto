import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";

function recompensas() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard1"
        nome2="Agentes turísticos" icon2="./assets/icon-filetext.svg" link2="/agentesTuristicos"
        nome3="Pontos de interesse" icon3="./assets/icon-filetext.svg" link3="/pontosDeInteresse"
        nome4="Recompensas" icon4="./assets/icon-filetext.svg" />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 my-5">
            <h2 className="mt-5 d-inline">Recompensas</h2>
            <button type="button" className="btn btn-success d-inline ms-auto">Consultar lista de reservas</button>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="px-5 py-3">
                  <h5 className="card-title h4 fw-bold">
                    Criar Voucher
                  </h5>
                </div>
                <form>
                  <div className="container">
                    <div className="g-3 align-items-center">
                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">Nome</label>
                      </div>
                      <div className="col-3">
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                      </div>

                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">Local</label>
                      </div>
                      <div className="col-3">
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="textHelpInline" />
                      </div>

                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">Ponto de Interesse</label>
                      </div>
                      <div className="col-3">
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                      </div>

                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">Data aquisição</label>
                      </div>
                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">00/00/00</label>
                      </div>

                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">Data limite</label>
                      </div>
                      <div className="col-auto">
                        <label htmlFor="text" className="col-form-label">00/00/00</label>
                      </div>

                      <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Custo</label>
                      </div>
                      <div className="col-3">
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="textHelpInline" />
                      </div>

                      <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Descrição</label>
                      </div>
                      <div className="col-5">
                        <textarea type="text" id="textoareavou" className="form-control" aria-describedby="textHelpInline" />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>  
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div className="px-5 py-3">
                        <h5 className="card-title h4 fw-bold">
                        Associar pontos recebidos ao ponto de interesse
                        </h5>
                        <table className="table table-striped table-group-divider text-center align-middle ">
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
                                  className="form-control mx-auto w-25 my-md-3"
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
                                  className="form-control mx-auto w-25 my-md-3 align-content-center"
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
                                  className="form-control mx-auto w-25 my-md-3 align-content-center"
                                  id="exampleFormControlTextarea1"
                                  rows="2"
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
      </main>
    </div>
  );
}

export default recompensas;
