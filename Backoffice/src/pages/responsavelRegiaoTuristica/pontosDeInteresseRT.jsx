import React from 'react'
import { Topnav } from '../../components/Topnav'
import { Menu } from '../../components/Menu'
import { ModalEditarPontoInteresse } from '../../components/responsavelRegiaoTuristica/ModalEditarPontoInteresse'
import { ModalPontoInteresse } from '../../components/responsavelRegiaoTuristica/ModalPontoInteresse'
import { ModalReservaPontoInteresse } from '../../components/responsavelRegiaoTuristica/ModalReservaPontoInteresse'
import useApiPrivate from '../../hooks/useApiPrivate'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

function LoadFillData() {
  const [pontoTuristico, setPontoTuristico] = useState([])
  const [modalPontoTuristicoShow, setModalPontoTuristicoShow] = useState(false)
  const [modalEditarPontoTuristicoShow, setModalEditarPontoTuristicoShow] =
    useState(false)
  const [modalReservaPontoTuristicoShow, setModalReservaPontoTuristicoShow] =
    useState(false)
  const [selectedPontoTuristico, setSelectedPontoTuristico] = useState(null)
  const apiPrivate = useApiPrivate()

  useEffect(() => {
    apiPrivate
      .get('/pontoturistico/list')
      .then(({ data }) => {
        const dados = data.data
        var newPontoTuristico = []
        dados.map((PontoTuristicoAux) => {
          newPontoTuristico.push({
            id: PontoTuristicoAux.pt_id,
            nome: PontoTuristicoAux.pt_nome,
            local: PontoTuristicoAux.pt_regiao,
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

  return (
    <>
      {pontoTuristico.map((data, index) => {
        // if(o ponto turistico tem de pertencer a regiao do responsável que estiver logado)
        // {
        return (
          <>
            <tr key={index}>
              <td scope="row">{data?.nome}</td>
              <td>{data?.local}</td>
              <td>
                <span
                  onClick={() => {
                    setSelectedPontoTuristico(data)
                    setModalPontoTuristicoShow(true)
                  }}
                >
                  <button
                    style={{ border: 'none', background: 'none' }}
                    data-bs-toggle="modal"
                    data-bs-target="#ModalPontoInteresse"
                  >
                    Ver detalhes
                  </button>
                </span>
              </td>
              <td>
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    setSelectedPontoTuristico(data)
                    setModalEditarPontoTuristicoShow(true)
                  }}
                >
                  <button
                    style={{ border: 'none', background: 'none' }}
                    data-bs-toggle="modal"
                    data-bs-target="#ModalEditarPontoInteresse"
                  >
                    <img src="../../assets/icon-penfill.svg" alt="" />
                  </button>
                </span>

                <span
                  id={data?.u_id}
                  className="material-symbols-outlined"
                  onClick={() => {
                    setSelectedPontoTuristico(data)
                    setModalConfirmacaoShow(true)
                  }}
                >
                  <button style={{ border: 'none', background: 'none' }}>
                    <img src="../../assets/icon-trashfill.svg" alt="" />
                  </button>
                </span>
              </td>
            </tr>
            <ModalEditarPontoInteresse
              show={modalEditarPontoTuristicoShow}
              onHide={() => setModalEditarPontoTuristicoShow(false)}
              props={selectedPontoTuristico}
            />

            <ModalPontoInteresse
              show={modalPontoTuristicoShow}
              onHide={() => setModalPontoTuristicoShow(false)}
              props={selectedPontoTuristico}
            />

            <ModalReservaPontoInteresse
              show={modalReservaPontoTuristicoShow}
              onHide={() => setModalReservaPontoTuristicoShow(false)}
              props={selectedPontoTuristico}
            />
          </>
        )
        // }
      })}
    </>
  )
}
function pontosdeinteresseRT() {
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
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg"
        link4="/recompensas"
      />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5 d-inline">Pontos turísticos</h2>
          <button
            type="button"
            className="btn btn-success d-inline float-end"
            data-bs-toggle="modal"
            data-bs-target="#ModalReservaPontoInteresse"
          >
            Consultar lista de reservas
          </button>
          <div></div>
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Distrito</th>
                <th scope="col">Informação adicional</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <LoadFillData />
            </tbody>
          </table>
        </div>
        <ModalReservaPontoInteresse />
        <ModalEditarPontoInteresse />
      </main>
    </div>
  )
}

export default pontosdeinteresseRT
