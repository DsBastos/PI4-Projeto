import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function websiteAdmin() {

  const sendError = (erro) => {
    toast.error(erro, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  //Estados
  const [heroi, setHeroi] = useState("")
  const [descarregar, setDescarregar] = useState("")
  const [objetivo, setObjetivo] = useState("")
  const [pontosT, setPontosT] = useState("")
  const [voucher, setVoucher] = useState("")
  const [reservas, setReservas] = useState("")
  const [qr, setQr] = useState("")
  const [atualizacoes, setAtualizacoes] = useState("")

  function SendUpdate() {
    const datawebsitepost = {
      estado: estado == "" ? pedido.estado : estado,
      data: data == "" ? pedido.data : data,
    };

    api.put("/website/updatewebsite/" + website.ws_id, datapedidospost).then((data) => {
      if (data.status = "200") {
        toast.success('Website alterado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        sendError("Ocorreu um erro ao tentar alterar o website")
      }
    })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    api.get('/website/list')
      .then(({ data }) => {
        const dados = data.data;
        setHeroi(dados[0].ws_texto)
        setDescarregar(dados[1].ws_texto)
        setObjetivo(dados[2].ws_texto)
        setPontosT(dados[3].ws_texto)
        setVoucher(dados[4].ws_texto)
        setReservas(dados[5].ws_texto)
        setQr(dados[6].ws_texto)
        setAtualizacoes(dados[7].ws_texto)
      })
      .catch((error) => {
        alert(error)
      })
  }, [])

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
          <h2 className="mt-5">Editar conteúdos do website</h2>
          <div className="col col-md-10">
            <form className="d-inline-flex flex-column">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 mt-5">
                  <div className="mb-5">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold mt-md-3"
                    >
                      Texto da secção herói
                    </label>
                    <textarea
                      className="form-control mt-md-4"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold mt-md-3"
                    >
                      Texto da secção “Nosso Objetivo”
                    </label>
                    <textarea
                      className="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-5 mt-5">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold"
                    >
                      Texto da secção para descarregar aplicação
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
                    ></textarea>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="col-lg-5 mt-2">
                  <div className="mb-5">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold"
                    >
                      Texto do cartão “Pontos Turísticos”
                    </label>
                    <textarea
                      className="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold"
                    >
                      Texto do cartão “Reservas”
                    </label>
                    <textarea
                      className="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-5 mt-2">
                  <div className="mb-5">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold"
                    >
                      Texto do cartão “Voucher”
                    </label>
                    <textarea
                      className="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label h4 fw-bold"
                    >
                      Texto do cartão “QRCode”
                    </label>
                    <textarea
                      className="form-control mt-md-3"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      maxLength="200"
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
                        <table className="table table-striped table-group-divider text-center align-middle ">
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
                                  className="form-control mx-auto w-50 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="4"
                                  maxLength="200"
                                  cols="3"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-bold">1.0.1</td>
                              <td>
                                <textarea
                                  className="form-control mx-auto  w-50 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="4"
                                  maxLength="200"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="fw-bold">1.0.2</td>
                              <td>
                                <textarea
                                  className="form-control mx-auto w-50 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="4"
                                  maxLength="200"
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
                className="btn btn-primary px-5 text-white d-block ms-auto mt-4" onClick={SendUpdate}>Guardar</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default websiteAdmin;
