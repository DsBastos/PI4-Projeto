import React from 'react'
import { NavLink } from 'react-router-dom'

export function Menu(props) {
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
          <NavLink
            to={props.link1}
            className="nav-link link-dark d-flex align-items-center"
            activeclassname="active"
            aria-current="page"
          >
            <img className="me-2" src={props.icon1} alt="Logótipo" />
            {props.nome1}
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            to={props.link2}
            className="nav-link link-dark d-flex align-items-center"
            activeclassname="active"
          >
            <img className="me-2" src={props.icon2} alt="icon de página" />
            {props.nome2}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={props.link3}
            className="nav-link link-dark d-flex align-items-center"
            activeclassname="active"
          >
            <img className="me-2" src={props.icon3} alt="" />
            {props.nome3}
          </NavLink>
        </li>
        {props.link4 ? (
          <>
            <li>
              <NavLink
                to={props.link4}
                className="nav-link link-dark d-flex align-items-center"
                activeclassname="active"
              >
                <img className="me-2" src={props.icon4} alt="" />
                {props.nome4}
              </NavLink>
            </li>
            <hr />
          </>
        ) : (
          ''
        )}
        {props.link5 ? (
          <li>
            <NavLink
              to={props.link5}
              className="nav-link link-dark d-flex align-items-center"
              activeClassName="active"
            >
              <img className="me-2" src={props.icon5} alt="" />
              {props.nome5}
            </NavLink>
          </li>
        ) : (
          ''
        )}
      </ul>
    </nav>
  )
}

export default Menu
