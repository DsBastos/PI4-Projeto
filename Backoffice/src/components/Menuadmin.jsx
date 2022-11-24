import React from "react";

export function Menuadmin() {
    //const pageInfo = navegacao[page];
    return (
        <div>
            <nav className="navbar vh-100" style={{backgroundColor:"#F1F1F1", width:"16%", display:"flex"}}>
                <div className="sidebar-header">
                <img className="w-75 mx-auto d-block" src="./assets/mygreenpointlogo.png" alt="Logótipo da My Green Point"></img>
                </div>
                <div className="container-fluid h-75 d-flex align-items-start">
                    <div className="justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#"><img src="./assets/icon-barchartline.svg"></img>Dashboard</a>
                            <hr className="divider"></hr>
                            <a className="nav-link" href="#"><img src="./assets/icon-filetext.svg"></img>Website</a>
                            <a className="nav-link" href="#"><img src="./assets/icon-filetext.svg"></img>Responsáveis das regiões turísticas</a>
                            <a className="nav-link" href="#"><img src="./assets/icon-filetext.svg"></img>Regiões turísticas</a>
                            <hr className="divider"></hr>
                            <a className="nav-link" href="#"><img src="./assets/icon-user.svg"></img>Utilizadores</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menuadmin