import { Topnav } from '../../components/Topnav'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../../../api'

function CriarVisitaAT() {
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [vagas, setVagas] = useState('')
  const [pt_descricao, setPt_descricao] = useState('')

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

  const criarVisita = (e) => {
    e.preventDefault()

    let newVisita = {
      vs_data: data,
      vs_horas: hora,
      vs_vagas: vagas,
    }
    console.log(newVisita)
    let dataJson = JSON.stringify(newVisita)
    console.log(dataJson)
    api
      .post('visita/create', dataJson, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res)
        if (res.status == '200') {
          toast.success('Visita criada com sucesso', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } else {
          sendError('Erro ao criar visita')
        }
      })
      .catch((err) => {
        alert('ERRO: ' + err)
      })
  }
  useEffect(() => {
    api.get('pontoturistico/getpontoturistico/' + 1).then((res) => {
      let aux = res.data.data.pt_descricao
      setPt_descricao(aux)
    })
  })

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboardAT"
        nome2="Criar visita"
        icon2="./assets/icon-filetext.svg"
        link2="/criarvisita"
        nome3="Consultar reservas"
        icon3="./assets/icon-filetext.svg"
        link3="/consultarReservas"
      />
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
        <div className="d-flex">
          <div className="col">
            <div className="container px-5 mt-5">
              <div className="pt-4">
                <div className="card" style={{ width: '24rem' }}>
                  <img
                    className="card-img-top"
                    src="../../assets/Sé_de_viseu.jpg"
                    alt="Card image cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Castelo de bragança</h5>
                  </div>
                </div>
              </div>
              <form onSubmit={criarVisita}>
                <div className="form-group row mt-5">
                  <label className="col-1 col-form-label">Data</label>
                  <div className="col-4">
                    <input
                      type="date"
                      className="form-control"
                      id="staticData"
                      value={data}
                      required
                      onChange={(e) => {
                        setData(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Hora</label>
                  <div className="col-4">
                    <input
                      type="time"
                      className="form-control"
                      id="inputHoras"
                      placeholder="Horas"
                      value={hora}
                      required
                      onChange={(e) => {
                        setHora(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Vagas</label>
                  <div className="col-4">
                    <input
                      type="number"
                      className="form-control"
                      id="inputVagas"
                      placeholder="Número de vagas"
                      value={vagas}
                      required
                      onChange={(e) => {
                        setVagas(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" className="btn btn-success">
                    Confirmar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-3 p-5 bg-secondary bg-opacity-25 vh-100">
            <p className="text-dark h3">Sobre o ponto turístico</p>
            <br />
            <p>{pt_descricao}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CriarVisitaAT
