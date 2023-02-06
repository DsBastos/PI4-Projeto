import { Topnav } from "../../components/Topnav";
import { motion as m } from "framer-motion";
import { Menu } from "../../components/Menu";
import {React, useState, useEffect } from "react";
import useApiPrivate from "../../hooks/useApiPrivate";

import icongroup from "../../assets/icongroup.svg";

function DashboardAdmin() {
  const [infoAdmin, setInfoAdmin] = useState([]);
  const apiPrivate = useApiPrivate();
  

  useEffect(() => {
    apiPrivate
      .get("utilizadores/countdashboardadmin")
      .then(({ data }) => {
        let aux = data.data;
        setInfoAdmin(aux);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
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
        <div className="container px-5">
          <h2 className="mt-4">Dashboard</h2>
          <div className="col col-md-10">
            <div className="d-flex flex-wrap mt-3">
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de utilizadores
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[0]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de responsáveis da região turística
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[1]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de regiões turísticas
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[2]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de agentes turísticos
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[3]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº de pontos turísticos
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[4]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº total de reservas
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[5]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº total de vouchers emitidos
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[6]}</p>
                </div>
              </m.div>
              <m.div
                className="card me-4 my-3"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 .5rem 1rem rgba(0,0,0,.15) ",
                }}
                style={{ width: "18rem", height: "12rem" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title text-muted pe-4 fw-bold">
                      Nº total de clientes
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoAdmin[7]}</p>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardAdmin;
