import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import heroImage from "./assets/heroImage.png";
import mygreenpointlogo from "./assets/mygreenpointlogo.png";

import "./global.css";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-image-gradient position-relative w-100 vh-100 d-flex">
        <div className="container h-75 my-auto pt-5 d-flex justify-content-around align-items-center">
          <div className="me-auto ">
            <h1>
              <strong>
                "If you have a special
                <p>point make it green."</p>
              </strong>
            </h1>
            <h5 className="mt-5">
              Uma aplicação móvel ideal para fazer turismo mas que irá
              <br />
              inovar o seu negócio, agilidade os processos e reduzir os <br />
              custos de operação.
            </h5>
            <button type="button" className="btn btn-lg btn-dark mt-5">
              Conhece a app aqui! 👈🏻
            </button>
          </div>
          <img
            className="h-100 ms-auto d-none d-lg-block mt-5"
            src={heroImage}
            alt="react logo"
          />
        </div>
      </div>
      <section className="py-5 section-background-verde d-flex align-items-center">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <div className="py-5">
            <h1>
              <strong>Nosso Objetivo</strong>
            </h1>
            <h5 className="mt-5 text-muted">
              Pretendemos uma plataforma que permita aproximar o
              <br />
              visitante e os agentes locais de um território turístico,
              <br />
              abrindo um canal de comunicação e partilha que se
              <br />
              pretende vantajosa para ambas as partes, contribuindo
              <br />
              igualmente para a utilização responsável e sustentável a
              <br />
              nível ambiental e social do território.
            </h5>
          </div>
          <img
            src={mygreenpointlogo}
            class="img-fluid w-50 h-50"
            alt="Image do logo na section do nosso objetivo"
          />
        </div>
      </section>
      <section className="vh-100"></section>
      <section className="py-5 section-background-verde d-flex align-items-center">
        <div className="container py-5">
          <h1>
            <strong>Atualização das ultimas versões da aplicação</strong>
          </h1>
          <div className="card mx-auto mt-5" style={{ maxWidth: "42rem" }}>
            <div class="card-body p-4">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <strong>Versão 1.009.9</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <strong>Versão 1.009.8</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <strong>Versão 1.009.7</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
