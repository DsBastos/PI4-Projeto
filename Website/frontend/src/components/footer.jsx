import React from "react";
import logo from "../assets/LOGOBRANCO.png";

export function Footer() {
  return (
    <div className="bg-dark">
      <div className="container">
        <footer className="py-5 ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
            <div className="col mb-3">
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                <img src={logo} alt="logo branco" />
              </a>
            </div>

            <div className="col mb-3"></div>
            <div className="col mb-3">
              <h5 className="text-white">Sobre</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Serviços
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Atualizações
                  </a>
                </li>
              </ul>
            </div>
            <div className="col mb-3">
              <h5 className="text-white">Contatos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Telefone
                    <br />
                    <strong>20300403043</strong>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    E-mail
                    <br />
                    <strong> email@email.com </strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
            <p className="text-white">
              {" "}
              <strong>© Copyright 2022/2023 - My Green Point</strong>
              <small className="ms-3"> Todos os Direitos reservados</small>
            </p>
            <ul className="list-unstyled d-flex">
              <p className="text-white">
                {" "}
                <small>Termos e Condições</small>
              </p>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
