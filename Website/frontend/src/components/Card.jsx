import React from "react";

export function Card(props) {
  return (
    <div
      className="card border-0 shadow p-3 mb-5 bg-body rounded"
      style={{
        minHeight: "12rem",
        maxWidth: "24rem",
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title">{props.titulo}</h4>
          <img className="" src={props.icon} alt="" />
        </div>
        <p className="card-text">{props.descricao}</p>
      </div>
    </div>
  );
}

export default Card;
