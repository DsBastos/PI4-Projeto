import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function recompensas() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
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
        icon4="./assets/icon-filetext.svg" />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 my-5">
          <h2 className="mt-5 d-inline">Recompensas</h2>
          <div className="col">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">Criar Voucher</h5>
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
                  </div>
                  <div className="form-group row mt-2">
                    <label htmlFor="localRecompensa" className="col-2 col-form-label">
                      Local
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Insira a região do local"
                        id="localRecompensa"
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label htmlFor="pontoTuristico" className="col-2 col-form-label">
                      Ponto turístico
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Insira o local do ponto turístico"
                        id="pontoTuristico"
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label htmlFor="descricao" className="col-2 col-form-label">
                      Descrição
                    </label>
                    <div className="col-lg-8">
                      <textarea
                        className="form-control"
                        type="text"
                        placeholder="Insira uma descrição para a recompensa"
                        id="descricao"
                        rows="6"
                        maxLength="1024"
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label htmlFor="custoRecompensa" className="col-2 col-form-label">
                      Custo
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Insira o valor em pontos"
                        id="custoRecompensa"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success text-white mt-4 d-block ms-auto ">
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
                    className="form-select col-3 my-4"
                    aria-label=".form-select example"
                  >
                    <option selected>Distrito</option>
                    <option value="1">Viseu</option>
                    <option value="2">Aveiro</option>
                    <option value="3">Three</option>
                  </select>
                  <table className="table table-striped table-group-divider text-center align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Pontos de interesse</th>
                        <th scope="col">Distrito</th>
                        <th scope="col">Pontos</th>
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
                            maxLength="200"
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
                            maxLength="200"
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
                            maxLength="200"
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
