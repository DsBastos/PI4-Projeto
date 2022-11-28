import React from "react";
import { Link } from "react-router-dom";

export function Menuadmin(props) {
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
      <ul class="nav nav-pills flex-column mb-auto mt-3 ">
        <li class="nav-item">
          <Link
            to={props.link1}
            class="nav-link active d-flex align-items-center"
            aria-current="page"
          >
            <img
              className="me-2"
              src={props.icon1}
              alt="Logótipo"
            />
            {props.nome1}
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to={props.link2}
            class="nav-link link-dark d-flex align-items-center"
          >
            <img
              className="me-2"
              src={props.icon2}
              alt="icon de página"
            />
            {props.nome2}
          </Link>
        </li>
        <li>
          <Link to={props.link3} class="nav-link link-dark d-flex align-items-center">
            <img className="me-2" src={props.icon3} />
            {props.nome3}
          </Link>
        </li>
        <li>
          <Link to={props.link4} class="nav-link link-dark d-flex align-items-center">
            <img className="me-2" src={props.icon4} />
            {props.nome4}
          </Link>
        </li>
        <hr />
        <li>
          <Link to={props.link5} class="nav-link link-dark d-flex align-items-center">
            <img className="me-2" src={props.icon5}/>
            {props.nome5}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menuadmin;