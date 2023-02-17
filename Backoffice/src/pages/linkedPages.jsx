import { Link } from 'react-router-dom'
import logo from '../assets/mygreenpointlogo.png'

function linkedPages() {

  return (
    <main className="bg-image-gradient vw-100 vh-100 d-flex align-items-center">
      <div className="container">
        <div
          className="d-flex mx-auto justify-content-center flex-column"
          style={{ maxWidth: '30rem' }}
        >
          <img src={logo} className="w-50 mx-auto d-block" alt="" />
          <div className="px-4 py-5 bg-card  shadow mt-4 rounded-3">
            <div className="card-header"></div>
            <div className="card-body px-5">
              <h5 className="card-title">
                <p>Página de links para as dashboards do:</p>
              </h5>
              <ul>
                <li>
                  <Link to="/dashboard">Admin,</Link>
                </li>
                <li>
                  <Link to="/dashboardRRT">
                    Responsável pela Região turística,
                  </Link>{' '}
                </li>
                <li>
                  <Link to="/dashboardAT">Agente Turístico </Link>
                </li>
              </ul>
              <Link to="/" className="btn " >
                ➡️ Voltar para a página de login 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default linkedPages
