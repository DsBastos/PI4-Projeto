import React from "react";
import { Link } from "react-router-dom";

export function Menuadmin() {
  //const pageInfo = navegacao[page];
  return (
    <nav className="navbar-nav d-flex flex-column flex-shrink-0 p-3 bg-body vh-100 col-lg-2 col-3 sticky-top">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto p-3 text-decoration-none"
      >
        <img
          className="w-75 mx-auto d-block"
          src="./assets/mygreenpointlogo.png"
          alt="Logótipo da My Green Point"
        />
      </a>
      <ul className="nav nav-pills flex-column mb-auto mt-3 ">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active d-flex align-items-center"
            aria-current="page"
          >
            <img
              className="me-2"
              src="./assets/icon-barchartline.svg"
              alt="Logótipo"
            />
            Dashboard
          </a>
        </li>
        <hr />
        <li>
          <Link
            to="/website"
            className="nav-link link-dark d-flex align-items-center"
          >
            <img
              className="me-2"
              src="./assets/icon-filetext.svg"
              alt="icon de página"
            />
            Website
          </Link>
        </li>
        <li>
          <Link
            to="/responsaveisDaRegiao"
            className="nav-link link-dark d-flex align-items-center"
          >
            <img className="me-2" src="./assets/icon-filetext.svg" alt="" />
            Responsáveis das regiões turísticas
          </Link>
        </li>
        <li>
          <Link
            to="/regioesturisticas"
            class="nav-link link-dark d-flex align-items-center"
          >
            <img className="me-2" src="./assets/icon-filetext.svg" alt="" />
            Regiões turísticas
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to="/utilizadores"
            class="nav-link link-dark d-flex align-items-center"
          >
            <img className="me-2" src="./assets/icon-user.svg" alt="" />
            Utilizadores
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menuadmin;
