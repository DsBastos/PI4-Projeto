import React from "react";

export function Cartaodistrito() {
  //const pageInfo = navegacao[page];
  return (
    <div className="card" style={{ width: "23rem" }}>
      <div className="card-header">Aveiro</div>
      <div className="card-body">
        <h5 className="card-title">Responsáveis definidos</h5>
        <div className="d-flex flex-wrap">
          <div
            className="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Pedro Jacob
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Pedro Mark
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-primary d-flex justify-content-between my-2 me-3"
            role="alert"
          >
            Tiago João
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary text-white">
          Adicionar Responsável
        </a>
      </div>
    </div>
  );
}

export default Cartaodistrito;
