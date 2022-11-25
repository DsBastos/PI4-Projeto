import React from "react";

export function Menuadmin(props) {
  //const pageInfo = navegacao[page];
  return (
    <>
      <nav class="navbar-nav d-flex flex-column flex-shrink-0 p-3 bg-body vh-100 col-2 ">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto p-3 text-decoration-none"
        >
          <img
            className="w-75 mx-auto d-block"
            src="./assets/mygreenpointlogo.png"
            alt="Logótipo da My Green Point"
          />
        </a>
        <ul class="nav nav-pills flex-column mb-auto mt-3 ">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link active d-flex align-items-center"
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
            <a href="#" class="nav-link link-dark d-flex align-items-center">
              <img className="me-2" src={props.icon1} />
              {props.nome1}
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark d-flex align-items-center">
              <img className="me-2" src={props.icon2} />
              {props.nome2}
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark d-flex align-items-center">
              <img className="me-2" src={props.icon3} />
              {props.nome3}
            </a>
          </li>
          <hr />
          <li>
            <a href="#" class="nav-link link-dark d-flex align-items-center">
              <img className="me-2" src={props.icon4} />
              {props.nome4}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menuadmin;
