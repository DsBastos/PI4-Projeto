import React from "react";

export function Card(props) {

    return (
        <div className="card" style={{ width: '30em', boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.1)', borderRadius: '4px', height: '201px' }}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h4 className="card-title">{props.titulo}</h4>
                    <img className="" src={props.icon} />
                </div>
                <p className="card-text">
                    {props.descricao}
                </p>
            </div>
        </div>
    );
}

export default Card

