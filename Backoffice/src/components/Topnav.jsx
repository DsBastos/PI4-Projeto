import React from "react"


export function Topnav(props) {


    return (
        <nav className="navbar d-flex top-0 w-75 navbar-expand-lg bg-white" style={{height:'88px'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.role}</a>
                <div className="justify-content-end" id="navbarNav">
                    <ul className="nav d-inline-flex">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.nome}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./assets/icon_roda.svg" alt="roda dentada" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="./assets/icon_saida.svg" alt="saida" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Topnav