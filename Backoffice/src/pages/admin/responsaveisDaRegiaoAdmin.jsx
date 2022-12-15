import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { ModalResponsavelRegiao } from "../../components/admin/ModalResponsavelRegiao"
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

function responsaveisdaregiaoAdmin() {

  //Estados
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  useEffect(() => {
    api.get('/utilizador/list')
      .then(({ data }) => {
        const dados = data.data;
        var newUtilizador = []

        Object.keys(dados).map((key) => {
          var newSubservicos = []

          dados[key].subservicos.map((subservicoAux) => {
            newSubservicos.push({
              nome: subservicoAux.nome
            })
          })
          newUtilizador.push(
            {
              nome: key,
              email: key,
              imagem: dados[key].imagem,
              subservicos: newSubservicos
            }
          )
        })
        setServicos(newUtilizador);
      })
      .catch((error) => {
        alert(error)
      })
  }, [])

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
        nome4="Regiões turísticas"
        icon4="./assets/icon-filetext.svg"
        link4="/regioesturisticas"
        nome5="Utilizadores"
        icon5="./assets/icon-user.svg"
        link5="/utilizadores"
      />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Responsáveis da região turística</h2>
          <table className="table table-striped datatable-table">
            <thead className="datatable-header">
              <tr>
                <th scope="col">Nome completo</th>
                <th scope="col">Email</th>
                <th scope="col">Telemóvel</th>
                <th scope="col">Localidade</th>
                <th scope="col">Regiões turísticas</th>
                <th scope="col">Ferramentas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td><button style={{ "border": "none", "background": "none" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src="../../assets/icon-penfill.svg"></img></button>
                  <button style={{ "border": "none", "background": "none" }}><img src="../../assets/icon-trashfill.svg"></img></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ModalResponsavelRegiao />
      </main>
    </div>
  );
}

export default responsaveisdaregiaoAdmin;
