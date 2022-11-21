import logo from "../assets/mygreenpointlogo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

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
    <motion.header variants={stagger}>
      <motion.nav
        variants={stagger}
        className={
          navbar
            ? "navbar active fixed-top navbar-expand-lg text-center"
            : "navbar fixed-top navbar-expand-lg text-center"
        }
        style={{ height: "7em" }}
      >
        <div className="container">
          <a className="navbar-brand">
            <motion.img
              variants={header}
              src={logo}
              alt="My Green Point"
              style={{ maxWidth: "180px", margin: "18px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-light w-50"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
            aria-modal="true"
            role="dialog"
            data-bs-scroll="true"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <motion.li
                  variants={header}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-item"
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
                    className="nav-link"
                    type="button"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Início
                  </a>
                </motion.li>
                <motion.li
                  variants={header}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-item"
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
                    className="nav-link"
                    type="button"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Descarregar
                  </a>
                </motion.li>
                <motion.li
                  variants={header}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-item"
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
                    className="nav-link"
                    type="button"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Objetivo
                  </a>
                </motion.li>
                <motion.li
                  variants={header}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-item"
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
                    className="nav-link "
                    type="button"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Oferecemos
                  </a>
                </motion.li>
                <motion.li
                  variants={header}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-item"
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
                    className="nav-link "
                    type="button"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Atualizações
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
}
export default Navbar;
