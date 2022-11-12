import React from 'react'
import logo from '../assets/mygreenpointlogo.png'
import { Link } from "react-router-dom"

export function Navbar() {
    return (
     <div>
         <nav className="fixed-top navbar navbar-expand-lg" style={{height:'7em'}}>
            <div className='container'>
                <a className="navbar-brand"><img src={logo} alt="My Green Point" style={{maxWidth:'180px', margin:'18px' , height:'auto'}}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{width:'137px', height:'40px', background:'#6CCA98',borderRadius:'99px', marginRight:'10px'}}>
                            <a type='button' className="nav-link" style={{color:'white'}} Link="#">Inicio</a>
                        </li>
                        <li className="nav-item" style={{width:'137px', height:'40px', background:'#6CCA98',borderRadius:'99px', marginRight:'10px'}}>
                            <a type='button' className="nav-link" style={{color:'white'}} Link="#">Descarregar</a>
                        </li>
                        <li className="nav-item" style={{width:'137px', height:'40px', background:'#6CCA98',borderRadius:'99px', marginRight:'10px'}}>
                            <a type='button' className="nav-link" style={{color:'white'}} Link="#">Objetivos</a>
                        </li>
                        <li className="nav-item" style={{width:'137px', height:'40px', background:'#6CCA98',borderRadius:'99px', marginRight:'10px'}}>
                            <a type='button' className="nav-link" style={{color:'white'}} Link="#">Oferecemos</a>
                        </li>
                        <li className="nav-item" style={{width:'137px', height:'40px', background:'#6CCA98',borderRadius:'99px', marginRight:'10px'}}>
                            <a type='button' className="nav-link" style={{color:'white'}} Link="#">Atualizações</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     </div>
    )
}
export default Navbar