import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { motion as m } from "framer-motion";
import icongroup from "../../assets/icongroup.svg";
//import { api } from "../../api";
import { useState, useEffect } from "react"

function dashboardAT() {
  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu nome1="Dashboard" icon1="./assets/icon-barchartline.svg" link1="/dashboard2"
      nome2="Criar visita" icon2="./assets/icon-filetext.svg" link2="/criarvisita"
      nome3="Consultar reservas" icon3="./assets/icon-filetext.svg" link3="/consultarReservas"/>
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
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

export default dashboardAT;
  
  