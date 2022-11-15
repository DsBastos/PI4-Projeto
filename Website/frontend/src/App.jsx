import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import heroImage from "./assets/heroImage.png";

import "./global.css";
import mygreenpointlogo from "./assets/mygreenpointlogo.png";
export function App() {
  return (
    <div className="App">
      <div className="">
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
        <section className="py-5 section-objetivo-background d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
