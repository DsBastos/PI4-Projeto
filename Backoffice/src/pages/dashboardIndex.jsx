import React from "react";
import { Topnav } from "../components/Topnav";

import icongroup from "../assets/icongroup.svg";
function dashboardIndex() {
  return (
    <>
      {/* Colocar aqui o componente da sidebar */}
      <header>
        <Topnav role="administrador" nome="ROBERTO" />
      </header>
      <main className="container-fluid">
        <h2>Dashboard</h2>
        <div class="d-flex mt-5">
          <div class="card" style={{ maxWidth: "18rem", height: "12rem" }}>
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title text-muted pe-4 fw-bold">
                  Nº de Responsável da região turística
                </h5>
                <img src={icongroup} alt="" />
              </div>
              <p class="card-text h1 mt-3">25</p>
            </div>
          </div>
          <div class="card ms-4" style={{ maxWidth: "18rem", height: "12rem" }}>
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title text-muted pe-4 fw-bold">
                  Nº de Responsável da região turística
                </h5>
                <img src={icongroup} alt="" />
              </div>
              <p class="card-text h1 mt-3">25</p>
            </div>
          </div>
          <div class="card ms-4" style={{ maxWidth: "18rem", height: "12rem" }}>
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title text-muted pe-4 fw-bold">
                  Nº de Responsável da região turística
                </h5>
                <img src={icongroup} alt="" />
              </div>
              <p class="card-text h1 mt-3">25</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-4">
          <div class="card" style={{ maxWidth: "18rem", height: "12rem" }}>
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title text-muted pe-4 fw-bold">
                  Nº de Responsável da região turística
                </h5>
                <img src={icongroup} alt="" />
              </div>
              <p class="card-text h1 mt-3">25</p>
            </div>
          </div>
          <div class="card ms-4" style={{ maxWidth: "18rem", height: "12rem" }}>
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title text-muted pe-4 fw-bold">
                  Nº de Responsável da região turística
                </h5>
                <img src={icongroup} alt="" />
              </div>
              <p class="card-text h1 mt-3">25</p>
            </div>
          </div>
          <div class="card ms-4" style={{ maxWidth: "18rem", height: "12rem" }}>
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title text-muted pe-4 fw-bold">
                  Nº de Responsável da região turística
                </h5>
                <img src={icongroup} alt="" />
              </div>
              <p class="card-text h1 mt-3">25</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default dashboardIndex;
