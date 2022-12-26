import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
// import { ModalCriarUtilizadores } from "../../components/admin/ModalCriarUtilizadores"
// import { ModalEditarUtilizadores } from "../../components/admin/ModalEditarUtilizadores";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function LoadFillData() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalEditarUtilizadorShow, setModalEditarUtilizadorShow] = useState(false);
  const [selectedUtilizador, setSelectedUtilizador] = useState(null);
  const [utilizador, setUtilizador] = useState([]);
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
            regiao: UtilizadorAux.regiaoturistica?.rt_nome,
            tipoid: UtilizadorAux.tu_id,
          })
          console.log(UtilizadorAux)
        })
        setUtilizador(newUtilizador);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  return (
    <>
      {utilizador.map((data, index) => {
        if (data.tipoid == 2) {
          return (
            <tr key={index}>
              <th>{data.nome}</th>
              <td>{data.email}</td>
              <td>{data.regiao == null ? "Não definido" : data.regiao}</td>
            </tr>
          );
        }
      })}
      {/* <ModalEditarUtilizadores
        show={modalEditarUtilizadorShow}
        onHide={() => setModalEditarUtilizadorShow(false)}
        props={selectedUtilizador}
      /> */}
    </>
  )

}


function responsaveisTuristicosAdmin() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard"
        nome2="Website"
        icon2="./assets/icon-filetext.svg"
        link2="/website"
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
        <div className="container px-5 p-3">
          <h2 className="mt-5">Responsáveis das regiões turísticas</h2>
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Nome completo</th>
                <th scope="col">Email</th>
                <th scope="col">Região turística</th>
                {/* <th scope="col">Ferramentas</th> */}
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

export default responsaveisTuristicosAdmin;
