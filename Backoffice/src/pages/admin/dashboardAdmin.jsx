import React from "react";
import { Topnav } from "../../components/Topnav";
import { motion as m } from "framer-motion";
import { Menu } from "../../components/Menu";

import icongroup from "../../assets/icongroup.svg";

function dashboardAdmin() {

  useEffect(() => {
    api.get('/pedidos/list')
    .then(({data}) => {
      const dados = data.data;
      var newPedido = [];
        dados.map((PedidosAux) => {
            newPedido.push({
              detalhes: PedidosAux.detalhes,
              estado: PedidosAux.estado,
              data: PedidosAux.data,
              email:PedidosAux.cliente.email,
              nome:PedidosAux.cliente.nome,
              contacto:PedidosAux.cliente.contacto,
            })
        })   
      setPedido(newPedido);
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg"
        nome2="Website" icon2="./assets/icon-filetext.svg" link2="/website"
        nome3="Responsáveis das regiões turísticas" icon3="./assets/icon-filetext.svg" link3="/responsaveisDaRegiao"
        nome4="Regiões turísticas" icon4="./assets/icon-filetext.svg" link4="/regioesturisticas"
        nome5="Utilizadores" icon5="./assets/icon-user.svg" link5="/utilizadores" />
      <main className="w-100">
        <Topnav role="Administrador" nome="ROBERTO" />
        <div className="container px-5">
          <h2 className="mt-5">Dashboard</h2>
          <div className="col col-md-10">
            <div className="d-flex flex-wrap mt-5">
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ maxWidth: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de Responsável da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">25</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ maxWidth: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de Responsável da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">25</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ maxWidth: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de Responsável da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">25</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ maxWidth: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de Responsável da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">25</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ maxWidth: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de Responsável da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">25</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ maxWidth: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de Responsável da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">25</p>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default dashboardAdmin;
