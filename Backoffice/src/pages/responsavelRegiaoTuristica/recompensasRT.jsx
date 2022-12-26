import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import { ModalVouchers } from "../../components/responsavelRegiaoTuristica/ModalVouchers";

function recompensas() {

  // const criarRecompensa = () => {
  //   let valid = true;
  //   if (nome == "" || descricao == "" || imagem == "" || duracao == "" || preco == "") {
  //     valid = false;
  //     sendError("Os campos não podem estar vazios");
  //   }
  //   if (valid) {
  //     let newRecompensa = {
  //       nome: r_nome,
  //       descricao: r_descricao,
  //       imagem: r_imagem,
  //       duracao: r_duracao,
  //       preco: r_preco,
  //     };
  //     api.post("recompensa/create", newRecompensa).then((data) => {
  //       if (data.status == "200") {
  //         toast.success("Recompensa criada com sucesso", {
  //           position: "top-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         });
  //       } else {
  //         sendError("Erro ao criar recompensa");
  //       }
  //     });
  //   }
  // };

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
        nome3="Pontos turísticos"
        icon3="./assets/icon-filetext.svg"
        link3="/pontosDeInteresse"
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg" />
        
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 my-5">
          <h2 className="mt-5 d-inline">Recompensas</h2>
          <button type="button" className="btn btn-success d-inline float-end" data-bs-toggle="modal" data-bs-target="#ModalVouchers">Consultar recompensas emitidas</button>
          <div className="col mt-3">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">Criar recompensa</h5>
                <form>
                  <div className="container">
                    <div className="g-3 align-items-center">
                      <div className="col-auto">
                        <label className="col-form-label">Nome</label>
                      </div>
                      <div className="col-3">
                        <input id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">Local</label>
                      </div>
                      <div className="col-3">
                        <input id="inputPassword6" className="form-control" aria-describedby="textHelpInline" />
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">Ponto turístico</label>
                      </div>
                      <div className="col-3">
                        <input id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">Data aquisição</label>
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">00/00/00</label>
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">Data limite</label>
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">00/00/00</label>
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">Custo</label>
                      </div>
                      <div className="col-3">
                        <input id="inputPassword6" className="form-control" aria-describedby="textHelpInline" />
                      </div>
                      <div className="col-auto">
                        <label className="col-form-label">Descrição</label>
                      </div>
                      <div className="col-5">
                        <textarea id="textoareavou" className="form-control" aria-describedby="textHelpInline" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Local
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        placeholder="Insira a região do local"
                        id="localRecompensa"
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Ponto turístico
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        placeholder="Insira o local do ponto turístico"
                        id="pontoTuristico"
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Descrição
                    </label>
                    <div className="col-lg-8">
                      <textarea
                        className="form-control"
                        placeholder="Insira uma descrição para a recompensa"
                        id="descricao"
                        rows="6"
                        maxLength="1024"
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Custo
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
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
                  {/* <select
                    className="form-select col-3 my-4"
                    aria-label=".form-select example"
                  >
                    <option selected>Distrito</option>
                    <option value="1">Viseu</option>
                    <option value="2">Aveiro</option>
                    <option value="3">Three</option>
                  </select> */}
                  <table className="table table-striped table-group-divider text-center align-middle mt-5">
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
        <ModalVouchers/>
      </main>
    </div>
  );
}

export default recompensas;
