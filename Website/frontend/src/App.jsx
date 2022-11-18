import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

import heroImage from "./assets/heroImage.png";
import mygreenpointlogo from "./assets/mygreenpointlogo.png";
import imageDescarregarApp from "./assets/imageDescarregarApp.png";
import ecrasOferecemos from "./assets/ECRAS_SECTION2.png";
import qrcodeImage from "./assets/qrcode.png";

import iconpt from "./assets/icon_pt.svg";
import iconvouc from "./assets/icon_vou.svg";
import iconres from "./assets/icon_res.svg";
import iconqr from "./assets/icon_qr.svg";

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
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center  align-items-center">
              <img
                src={imageDescarregarApp}
                class="img-fluid h-75"
                alt="Imagem do mockup da app na secção para descarregar"
              />
            </div>

            <div className="col d-flex justify-content-center  align-items-center">
              <div className="me-lg-5">
                <h1>
                  <strong>Descarregar a aplicação</strong>
                </h1>
                <h6 className="mt-5 text-muted lead">
                  <strong>
                    Descarrega a aplicação para Android pelo botão a baixo ou
                    através da leitura do código QR
                  </strong>
                </h6>
                <div className="d-lg-flex align-items-start justify-content-between mt-5">
                  <div class="d-grid gap-2">
                    <button
                      className="btn btn-lg btn-primary text-white "
                      type="submit"
                    >
                      Descarregar
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src={qrcodeImage} className="pe-lg-5" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-background-verde d-flex align-items-center">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <div className="py-5">
            <h1>
              <strong>Nosso Objetivo</strong>
            </h1>
            <h5 className="mt-5 text-muted lead">
              <strong>
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
              </strong>
            </h5>
          </div>
          <img
            src={mygreenpointlogo}
            class="img-fluid w-50 h-50"
            alt="Image do logo na section do nosso objetivo"
          />
        </div>
      </section>
      <section className="my-5 d-flex align-items-center">
        <div className="container my-4">
          <div className="row">
            <div className="col-lg row-xl row-cols-xl-1">
              <h1 className="">Oferecemos</h1>
              <div className="d-md-flex justify-content-md-center justify-content-lg-start">
                <img
                  src={ecrasOferecemos}
                  className="img-fluid d-none d-md-block h-lg-75 w-lg-75"
                  alt=""
                />
              </div>
            </div>
            <div class="col row row-cols-1 row-cols-md-2">
              <div class="col">
                <Card
                  titulo="asas"
                  descricao="dqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggw"
                  icon={iconvouc}
                />
              </div>
              <div class="col">
                <Card
                  titulo="OS MIGUXOS"
                  descricao="OLÁ AMIGOS"
                  icon={iconpt}
                />
              </div>

              <div class="col">
                <Card
                  titulo="BOLOOOOO"
                  descricao="BOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO"
                  icon={iconres}
                />
              </div>

              <div class="col">
                <Card
                  titulo="O Iago vai entender isto"
                  descricao="O Iago vai entender istoO Iago vai entender istoO Iago vai entender istoO Iago vai entender istoO Iago vai entender isto"
                  icon={iconqr}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
