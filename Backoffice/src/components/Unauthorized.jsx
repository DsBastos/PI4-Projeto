import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
      <section className="d-flex align-items-center justify-content-center">
        <div>
          <h1>Não autorizado</h1>
          <br />
          <p>Não tens permição para acessar esta página</p>
          <div className="flex-grow-1">
            <button type="button" className="btn btn-primary" onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      </section>
  )
}

export default Unauthorized
