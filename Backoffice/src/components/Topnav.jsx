import React from "react";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export function Topnav(props) {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  }
  return (
    <div
      className="navbar navbar-expand-lg bg-white sticky-top"
      style={{ height: "88px" }}
    >
      <div className="container px-5">
        <a className="navbar-brand" href="#">
          {props.role}
        </a>
        <div className="justify-content-end" id="navbarNav">
          <ul className="nav d-inline-flex">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                {props.nome}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="./assets/icon_roda.svg" alt="roda dentada" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" type="button" onClick={signOut}>
                <img src="./assets/icon_saida.svg" alt="saida" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
