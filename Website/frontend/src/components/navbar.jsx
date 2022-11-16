import logo from "../assets/mygreenpointlogo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Navbar() {
  const [navbar, setnavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? "navbar active fixed-top navbar-expand-lg text-center"
          : "navbar fixed-top navbar-expand-lg text-center"
      }
      style={{ height: "7em" }}
    >
      <div class="container">
        <a className="navbar-brand">
          <img
            src={logo}
            alt="My Green Point"
            style={{ maxWidth: "180px", margin: "18px", height: "auto" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-light w-50"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
          aria-modal="true"
          role="dialog"
          data-bs-scroll="true"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
              Menu
            </h5>
            <button
              type="button"
              class="btn-close btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li
                class="nav-item"
                style={{
                  width: "137px",
                  height: "40px",
                  background: "#6CCA98",
                  borderRadius: "99px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <a
                  class="nav-link"
                  type="button"
                  style={{ color: "white" }}
                  Link="#"
                >
                  Início
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  width: "137px",
                  height: "40px",
                  background: "#6CCA98",
                  borderRadius: "99px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <a
                  class="nav-link"
                  type="button"
                  style={{ color: "white" }}
                  Link="#"
                >
                  Descarregar
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  width: "137px",
                  height: "40px",
                  background: "#6CCA98",
                  borderRadius: "99px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <a
                  class="nav-link"
                  type="button"
                  style={{ color: "white" }}
                  Link="#"
                >
                  Objetivo
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  width: "137px",
                  height: "40px",
                  background: "#6CCA98",
                  borderRadius: "99px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <a
                  class="nav-link "
                  type="button"
                  style={{ color: "white" }}
                  Link="#"
                >
                  Oferecemos
                </a>
              </li>
              <li
                class="nav-item"
                style={{
                  width: "137px",
                  height: "40px",
                  background: "#6CCA98",
                  borderRadius: "99px",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <a
                  class="nav-link "
                  type="button"
                  style={{ color: "white" }}
                  Link="#"
                >
                  Atualizações
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
