import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useApiPrivate from "../../hooks/useApiPrivate";

function LoadFillData({ props }) {
  const [reserva, setReserva] = useState([]);
  const apiPrivate = useApiPrivate();

  function updateAccepted(accepted, res) {
    let newReserva = {
      aceite: accepted,
    }
    apiPrivate.patch("/reserva/updatereserva/" + res.id, newReserva).then((data) => {
      if (data.status = "200") {
        let newReservas = []
        reserva.map((reservaAux) => {
          newReservas.push({
            id: reservaAux.id,
            aceite: reservaAux.id == res.id ? accepted : reservaAux.aceite,
            nPessoas: reservaAux.nPessoas,
            data: reservaAux.data,
            horas: reservaAux.horas,
            estado: reservaAux.estado,
            nomeCliente: reservaAux.nomeCliente,
            nomePt: reservaAux.nomePt,
            localPt: reservaAux.localPt,
          })
        })
        setReserva(newReservas);
        addTr(res);
        toast.success('Reserva alterada com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        sendError("Ocorreu um erro ao tentar alterar a reserva")
      }
    })
      .catch((error) => {
        alert(error);
      });

    function addTr(res) {
      let body = document.getElementsByName("abc")[0];
      let tr = document.createElement('tr');

      let thid = document.createElement('th');
      thid.innerHTML = res.id;
      tr.appendChild(thid);

      let tdnome = document.createElement('td');
      tdnome.innerHTML = res.nomeCliente;
      tr.appendChild(tdnome);

      let tdnpessoas = document.createElement('td');
      tdnpessoas.innerHTML = res.nPessoas;
      tr.appendChild(tdnpessoas);

      let tdponto = document.createElement('td');
      tdponto.innerHTML = res.nomePt;
      tr.appendChild(tdponto);

      let tdistrito = document.createElement('td');
      tdistrito.innerHTML = res.localPt;
      tr.appendChild(tdistrito);

      let tddata = document.createElement('td');
      tddata.innerHTML = res.data;
      tr.appendChild(tddata);

      let tdhoras = document.createElement('td');
      tdhoras.innerHTML = res.horas;
      tr.appendChild(tdhoras);

      body.appendChild(tr);
    }
  }

  useEffect(() => {
    apiPrivate.get('/reserva/list')
      .then(({ data }) => {
        const dados = data.data;
        var newReserva = [];
        dados.map((ReservaAux) => {
          newReserva.push({
            id: ReservaAux.rs_id,
            aceite: ReservaAux.r_aceite,
            nPessoas: ReservaAux.rs_npessoas,
            data: ReservaAux.visitum.vs_data,
            horas: ReservaAux.visitum.vs_horas,
            estado: ReservaAux.rs_estado,
            nomeCliente: ReservaAux.cliente.c_nome,
            nomePt: ReservaAux.visitum.pontoTuristico.pt_nome,
            localPt: ReservaAux.visitum.pontoTuristico.pt_regiao,
          })
        })
        setReserva(newReserva);

      })
      .catch((error) => {
        alert(error)
      })
  }, [])

  return (
    <>
      {reserva.map((data, index) => {
        //console.table(data);
        console.log(props);
        if (props == 'tabela1') {
          if (data.aceite == null) {
            return (
              <tr key={index}>
                <th>{data.id}</th>
                <td>{data.nomeCliente}</td>
                <td>{data.nPessoas}</td>
                <td>{data.nomePt}</td>
                <td>{data.localPt}</td>
                <td>{data.data}</td>
                <td>{data.horas}</td>
                <td>
                  <button
                    style={{ border: "none", background: "none" }}
                    onClick={() => updateAccepted(true, data)}>
                    <img src="../../assets/icon-accept.svg" alt="" />
                  </button>

                  <button style={{ border: "none", background: "none" }}
                    onClick={() => updateAccepted(false, data)}>
                    <img src="../../assets/icon-decline.svg"alt="" />
                  </button>
                </td>
              </tr>
            );
          }
        }
        else {
          if (data.aceite == true)
            return (
              <tr key={index}>
                <th>{data.id}</th>
                <td>{data.nomeCliente}</td>
                <td>{data.nPessoas}</td>
                <td>{data.nomePt}</td>
                <td>{data.localPt}</td>
                <td>{data.data}</td>
                <td>{data.horas}</td>
              </tr>
            );
        }
      })}
    </>
  )
}


function consultarReservasAT() {
  return (
    <>
      <div className="d-flex">
        {/* Colocar aqui o componente da sidebar */}
        <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard2"
          nome2="Criar visita" icon2="./assets/icon-filetext.svg" link2="/criarvisita"
          nome3="Consultar reservas" icon3="./assets/icon-filetext.svg" link3="/consultarReservas" />
        <main className="w-100">
          <Topnav role="Agente turístico" nome="ROBERTO" />
          <div className="container px-5 mt-5">
            <h2 className="mt-5">Aceitar ou recusar reservas</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID da Reserva</th>
                  <th scope="col">Nome do cliente</th>
                  <th scope="col">Nº de pessoas</th>
                  <th scope="col">Ponto turístico</th>
                  <th scope="col">Região</th>
                  <th scope="col">Data</th>
                  <th scope="col">Horas</th>
                  <th scope="col">Ferramentas</th>
                </tr>
              </thead>
              <tbody>
                <LoadFillData props='tabela1' />
              </tbody>
            </table>
          </div>
          <div className="container px-5 mt-5">
            <h2 className="mt-5">Consultar lista de reservas</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID da Reserva</th>
                  <th scope="col">Nome do cliente</th>
                  <th scope="col">Nº de pessoas</th>
                  <th scope="col">Ponto turístico</th>
                  <th scope="col">Distrito</th>
                  <th scope="col">Data</th>
                  <th scope="col">Horas</th>
                </tr>
              </thead>
              <tbody name="abc">
                <LoadFillData props='tabela2' />
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default consultarReservasAT;