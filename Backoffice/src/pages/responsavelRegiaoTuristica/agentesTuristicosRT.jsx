import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalCriarUtilizadores } from "../../components/admin/ModalCriarUtilizadores"
import { ModalEditarUtilizadores } from "../../components/admin/ModalEditarUtilizadores";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
//import { ModalEditarAgenteTuristico } from "../../components/responsavelRegiaoTuristica/ModalEditarAgenteTuristico";

function LoadFillData() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalEditarAgenteTuristicoShow, setModalEditarAgenteTuristicoShow] = useState(false);
  const [selectedUtilizador, setSelectedAgenteTuristico] = useState(null);
  const [utilizadores, setUtilizadores] = useState([]);
  const [pontosT, setPontosT] = useState([]);
  const [modalConfirmacaoShow, setConfirmacaoShow] = useState(false);

  useEffect(() => {
    api.get('/utilizadores/list')
      .then(({ data }) => {
        const dados = data.data;
        var newUtilizador = [];
        dados.map((UtilizadorAux) => {
          newUtilizador.push({
            id: UtilizadorAux.u_id,
            nome: UtilizadorAux.u_nome,
            email: UtilizadorAux.u_email,
            tipoid: UtilizadorAux.tu_id,
          })
          //console.log(UtilizadorAux)
        })
        setUtilizadores(newUtilizador);
      })
      .catch((error) => {
        alert(error)
      })

      api.get('/pontoturistico/list')
      .then(({ data }) => {
        const dados = data.data;
        console.log(dados)
        var newPontoTuristico = [];
        dados.map((PontoTAux) => {
          newPontoTuristico.push({
            idUser: PontoTAux.u_id,
            idPt: PontoTAux.pt_id,
            nomePt: PontoTAux.pt_nome,
          })
        })
        setPontosT(newPontoTuristico);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  return (
    <>
      {utilizadores.map((utilizador, index) => {
        if (utilizador.tipoid == 3) {
          return (
            <tr key={index}>
              <th>{utilizador.nome}</th>
              <td>{utilizador.email}</td>
              <td>{pontosT?.find(pt=>pt.idUser==utilizador.id)?.nomePt}</td>
            </tr>
          );
        }
      })}
    </>
  )
}

function AgentesTuristicosRT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard1"
        nome2="Agentes turísticos" icon2="./assets/icon-filetext.svg"
        nome3="Pontos turísticos" icon3="./assets/icon-filetext.svg" link3="/pontosDeInteresse"
        nome4="Recompensas" icon4="./assets/icon-filetext.svg" link4="/recompensas" />
      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 p-3">
          <h2 className="mt-5">Agentes turísticos</h2>
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Nome completo</th>
                <th scope="col">Email</th>
                <th scope="col">Ponto turístico</th>
              </tr>
            </thead>
            <tbody>
              <LoadFillData />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AgentesTuristicosRT;
