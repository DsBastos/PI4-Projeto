import React from "react";
import { ModalRegiaoTuristica } from "./ModalRegiaoTuristica"

export function Cartaodistrito() {
  //const pageInfo = navegacao[page];
  return (
    <div class="card" style={{ width: "23rem" }}>
      <div class="card-header">Aveiro</div>
      <div class="card-body">
        <h5 class="card-title">Responsáveis definidos</h5>
        <div className="d-flex flex-wrap">
          <div
            class="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Pedro Jacob
            <button
              type="button"
              class="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert">
            Pedro Mark
            <button
              type="button"
              class="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Tiago João
            <button
              type="button"
              class="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a href="#" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Adicionar Responsável
        </a>
      </div>
      <ModalRegiaoTuristica />
    </div>
  );
}

export default Cartaodistrito;
