import logo from "../assets/mygreenpointlogo.png";
import { Link } from "react-dom";
import React, { useState, useEffect } from "react";

export function Navbar() {
    const [navbar,setnavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setnavbar(true)
        } else{
            setnavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
            <nav className={navbar ? 'navbar active fixed-top navbar-expand-lg text-center' : 'navbar fixed-top navbar-expand-lg text-center'}  style={{ height: '7em' }}>
                <div className="container">
                    <a className="navbar-brand"><img src={logo} alt="My Green Point" style={{ maxWidth: '180px', margin: '18px', height: 'auto' }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" ar>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-end ">
                            <li className="nav-item" style={{ width: '137px', height: '40px', background: '#6CCA98', borderRadius: '99px', marginRight: '10px', marginTop: '10px'  }}>
                                <a className="nav-link" type='button' style={{ color: 'white' }} Link="#">Inicio</a>
                            </li>
                            <li className="nav-item" style={{ width: '137px', height: '40px', background: '#6CCA98', borderRadius: '99px', marginRight: '10px', marginTop: '10px' }}>
                                <a className="nav-link" type='button' style={{ color: 'white' }} Link="#">Descarregar</a>
                            </li>
                            <li className="nav-item" style={{ width: '137px', height: '40px', background: '#6CCA98', borderRadius: '99px', marginRight: '10px', marginTop: '10px' }}>
                                <a className="nav-link" type='button' style={{ color: 'white' }} Link="#">Objetivo</a>
                            </li>
                            <li className="nav-item" style={{ width: '137px', height: '40px', background: '#6CCA98', borderRadius: '99px', marginRight: '10px', marginTop: '10px' }}>
                                <a className="nav-link " type='button' style={{ color: 'white' }} Link="#">Oferecemos</a>
                            </li>
                            <li className="nav-item" style={{ width: '137px', height: '40px', background: '#6CCA98', borderRadius: '99px', marginRight: '10px', marginTop: '10px' }}>
                                <a className="nav-link " type='button' style={{ color: 'white' }} Link="#"> Atualizações</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;
