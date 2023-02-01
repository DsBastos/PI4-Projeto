import { useState, useRef, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import logo from '../assets/mygreenpointlogo.png'

import api from '../../api'
const LOGIN_URL = '/auth'

function Login() {
  const { setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname

  const userRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )

      //console.log(JSON.stringify(response?.data), "cheguei aqui");
      const accessToken = response?.data?.accessToken
      //console.log(accessToken, "cheguei aqui com o token")
      const roles = response?.data?.role
      const nome = response?.data?.nome
      console.log('resposta:' + response?.data?.nome)
      //console.log(roles, 'cheguei aqui com a info da role')
      setAuth({ email, pwd, roles, accessToken })
      setEmail('')
      setPwd('')
      localStorage.setItem('nome', nome)
      navigate(from, { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('Sem resposta do servidor')
      } else if (err?.response?.status === 400) {
        setErrMsg('Falta o email ou a palavra-passe.')
      } else if (err?.response?.status === 401) {
        setErrMsg(
          'Não autorizado, provalvelmente o email e/ou a palavra-passe estão errados'
        )
      } else {
        setErrMsg('Erro desconhecido -> erro ao fazer login')
      }
      errRef.current.focus()
    }
  }

  return (
    <main className="bg-image-gradient vw-100 vh-100 d-flex align-items-center">
      <div className="container">
        <p
          ref={errRef}
          className={errMsg ? 'errmsg alert alert-danger' : 'offscreen'}
          role="alert"
          aria-live="assertive"
        >
          {errMsg}
        </p>
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
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mt-2">
                  <div className="col-md-12">
                    <label htmlFor="inputEmail" className="col-form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      ref={userRef}
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
                          value=""
                          id="form1Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
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
                  <button type="submit" className="btn btn-primary text-white">
                    Entrar
                  </button>
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
