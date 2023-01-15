import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import useApiPrivate from "../../hooks/useApiPrivate";

import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
//import { WeatherCard } from "../../components/WeatherCard";
import { motion as m } from "framer-motion";
import icongroup from "../../assets/icongroup.svg";

import { toast } from "react-toastify";

function dashboardRT() {
  const [infoRT, setInfoRT] = useState([]);
  const apiPrivate = useApiPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getInfoRT = async () => {
      try {
        const response = await apiPrivate.get("utilizadores/countdashboardrt", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setInfoRT(response.data);
      } catch (error) {
        console.error(error);
        navigate("/", { state: { from: location }, replace: true });
      }
    };
    getInfoRT();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
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
        <div className="container px-5 mt-5">
          <h2 className="mt-5">Dashboard</h2>
          <div className="col col-md-10">
            <div className="d-flex flex-wrap mt-5">
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
                  <p className="card-text h1 mt-3">{infoRT[0]}</p>
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
                      Nº de pontos de interesse
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoRT[1]}</p>
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
                      Nº de visitas
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoRT[2]}</p>
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
                      Nº de clientes
                    </h5>
                    <img src={icongroup} alt="" />
                  </div>
                  <p className="card-text h1 mt-3">{infoRT[3]}</p>
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
                  <p className="card-text h1 mt-3">{infoRT[4]}</p>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
//<WeatherCard />

export default dashboardRT;
