import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import logo from '../assets/mygreenpointlogo.png'

import api from '../../api'
const LOGIN_URL = '/auth'

function Login() {

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')


  return (
    <main className="bg-image-gradient vw-100 vh-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex mx-auto justify-content-center flex-column"
          style={{ maxWidth: '24rem' }}
        >
          <img src={logo} className="w-50 mx-auto d-block" alt="" />
          <div className="px-4 pb-5 pt-4 bg-card  shadow mt-4 rounded-3">
            <div className="card-header text-center fw-bold h5">
              Painel de administradores
            </div>
            <div className="card-body px-4">
              <form>
                <div className="row g-3 mt-2">
                  <div className="col-md-12">
                    <label htmlFor="inputEmail" className="col-form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                    <div className="form-outline mb-4">
                      <label
                        htmlFor="inputPassword"
                        className="col-form-label mt-3"
                      >
                        Palavra passe
                      </label>
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id='persist'
                        />
                        <label
                          className="form-check-label"
                          htmlFor="persist"
                          
                        >
                          Lembrar a palavra-passe
                        </label>
                      </div>

                      <div className="col">
                        <Link to="/recuperarPalavraPasse" className="text-dark">
                          Esqueceste a palavra-passe?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <Link to="/linkedPages" className="btn btn-primary text-white">Entrar</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
