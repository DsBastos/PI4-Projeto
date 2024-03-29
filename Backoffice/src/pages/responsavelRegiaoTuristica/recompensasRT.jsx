import React from 'react'
import { Topnav } from '../../components/Topnav'
import { Menu } from '../../components/Menu'
import api from '../../../api'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { ModalVouchers } from '../../components/responsavelRegiaoTuristica/ModalVouchers'

function Recompensas() {
  const [nome, setNome] = useState('')
  const [imagem, setImagem] = useState('')
  const [local, setLocal] = useState('')
  const [ponto, setPonto] = useState('')
  const [recompensa, setRecompensa] = useState('')
  const [descricao, setDescricao] = useState('')
  const [pontos, setPontos] = useState('')
  const [pontoTuristico, setPontoTuristico] = useState([])

  const [pontosadquiridos, setPontosAdquiridos] = useState(0)

  let [selectedPontoTuristico, setSelectedPontoTuristico] = useState(0)

  api.defaults.debug = true
  api.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log(config.url)
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  useEffect(() => {
    api
      .get('/recompensa/list')
      .then(({ data }) => {
        const dados = data.data
        var newRecompensa = []
        dados.map((RecompensaAux) => {
          newRecompensa.push({
            nome: RecompensaAux.r_nome,
            pontos: RecompensaAux.r_pontos,
          })
        })
        setRecompensa(newRecompensa)
      })
      .catch((error) => {
        alert(error)
      })

    api
      .get('/pontoturistico/list')
      .then(({ data }) => {
        const dados = data.data
        const newPontoTuristico = []

        dados.map((PontoTuristicoAux) => {
          newPontoTuristico.push({
            id: PontoTuristicoAux.pt_id,
            nomePT: PontoTuristicoAux.pt_nome,
            regiao: PontoTuristicoAux.pt_regiao,
            dificuldade: PontoTuristicoAux.pt_dificuldade,
            duracao: PontoTuristicoAux.pt_duracao,
            terreno: PontoTuristicoAux.pt_terreno,
            tamanho: PontoTuristicoAux.pt_tamanho,
            descricao: PontoTuristicoAux.pt_descricao,
            horario: PontoTuristicoAux.pt_horario,
            coordenadas: PontoTuristicoAux.pt_coordenadas,
            link: PontoTuristicoAux.pt_link,
            pontosAdquiridos: PontoTuristicoAux.pt_pontosadquiridos,
          })
        })

        setPontoTuristico(newPontoTuristico)
      })
      .catch((error) => {
        alert(error)
      })
  }, [])

  //CRIAR RECOMPENSA
  const handleSubmit = (e) => {
    e.preventDefault()

    const newRecompensa = {
      nome: nome,
      pt_id: selectedPontoTuristico,
      pontos: pontos,
      descricao: descricao,
      imagem: imagem,
    }
    console.log(newRecompensa)
    let dataJson = JSON.stringify(newRecompensa)
    console.log(dataJson)

    api
      .post('/recompensa/create', dataJson, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response)
        if (response.status == '200') {
          toast.success('Recompensa criada com sucesso', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  //EDITAR PONTOS OBTIDOS NO PONTO TURÍSTICO
  function editPontoTuristico(pontoTuristico) {
    let newPontoTuristico = {
      ponto: ponto == '' ? pontoTuristico.ponto : ponto,
      tipo:
        selectedcargo == ''
          ? cargos.find((x) => x.tu_tipo == props.cargo).tu_id
          : selectedcargo,
    }
    //console.log(newUser)
    api
      .patch('/pontoturistico/updatepontoturistico/' + pt_id, newPontoTuristico)
      .then((data) => {
        //console.log(data);
        if ((data.status = '200')) {
          toast.success('Ponto turístico alterado com sucesso', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } else {
          sendError('Ocorreu um erro ao tentar alterar o ponto turístico')
          console.log('asd')
        }
      })
      .catch((error) => {
        //console.log(error);
        alert(error)
      })
  }

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboardRRT"
        nome2="Agentes turísticos"
        icon2="./assets/icon-filetext.svg"
        link2="/agentesTuristicos"
        nome3="Pontos turísticos"
        icon3="./assets/icon-filetext.svg"
        link3="/pontosDeInteresse"
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg"
        link4="/recompensas"
      />

      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 my-5">
          <h2 className="mt-5 d-inline">Recompensas</h2>
          <button
            type="button"
            className="btn btn-success d-inline float-end"
            data-bs-toggle="modal"
            data-bs-target="#ModalVouchers"
          >
            Consultar recompensas emitidas
          </button>
          <div className="col mt-3">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">Criar recompensa</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row mt-2">
                    <label
                      htmlFor="localRecompensa"
                      className="col-2 col-form-label"
                    >
                      Nome
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Insira Nome da recompensa"
                        id="nomeRecompensa"
                        required
                        value={nome}
                        onChange={(e) => {
                          setNome(e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Ponto turístico
                    </label>
                    <div className="col-lg-3">
                      <select
                        className="form-select"
                        onChange={(e) =>
                          setSelectedPontoTuristico(e.target.value)
                        }
                        required
                      >
                        <option value="0">Selecione o ponto turístico</option>
                        {pontoTuristico.map((data, index) => {
                          return (
                            <option key={index} value={data.id}>
                              {data.nomePT}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Preço em pontos
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        placeholder="Insira o valor em pontos"
                        id="precoRecompensa"
                        value={pontos}
                        onChange={(e) => {
                          setPontos(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">Descrição</label>
                    <div className="col-lg-8">
                      <textarea
                        className="form-control"
                        placeholder="Insira uma descrição para a recompensa"
                        id="descricao"
                        rows="6"
                        maxLength="1024"
                        value={descricao}
                        onChange={(e) => {
                          setDescricao(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label
                      htmlFor="localRecompensa"
                      className="col-2 col-form-label"
                    >
                      Imagem
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="file"
                        id="imagemRecompensa"
                        value={imagem}
                        onChange={(e) => {
                          setImagem(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-success text-white mt-4 d-block ms-auto "
                    type="submit"
                  >
                    Criar recompensa
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
                  <table className="table table-striped table-group-divider text-center align-middle mt-5">
                    <thead>
                      <tr>
                        <th scope="col">Pontos de interesse</th>
                        <th scope="col">Distrito</th>
                        <th scope="col">Pontos</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      {pontoTuristico.map((data) => {
                        return (
                          <>
                            <tr key={data.id}>
                              <td className="fw-bold">{data?.nomePT}</td>
                              <td className="fw-bold">{data.regiao}</td>
                              <td className="">
                                <textarea
                                  className="form-control mx-auto w-25 my-md-3"
                                  id="exampleFormControlTextarea1"
                                  rows="2"
                                  maxLength="200"
                                  cols="3"
                                  value={data.pontosAdquiridos}
                                  //onClick={setSelectedPontos(data.pt_id)}
                                  onChange={(e) =>
                                    setPontosAdquiridos(e.target.value)
                                  }
                                />
                              </td>
                            </tr>
                          </>
                        )
                        // }
                      })}
                    </tbody>
                  </table>
                  <button
                    type="submit"
                    className="btn btn-success text-white mt-4 d-block ms-auto "
                    onClick={editPontoTuristico}
                  >
                    Associar pontos
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ModalVouchers />
      </main>
    </div>
  )
}

export default Recompensas
