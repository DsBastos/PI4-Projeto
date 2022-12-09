import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";
import { useState } from "react"

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

import { api } from "../api";

//Animação da página
let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const fadeInUp2 = {
  initial: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};
const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const screenImg = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

//Estados
  const [heroi, setHeroi] = useState("")
  const [descarregar, setDescarregar] = useState("")
  const [objetivo, setObjetivo] = useState("")
  const [pontosT, setPontosT] = useState("")
  const [voucher, setVoucher] = useState("")
  const [reservas, setReservas] = useState("")
  const [qr, setQr] = useState("")
  const [atualizacoes, setAtualizacoes] = useState("")

useEffect(() => {
  api.get('/website/list')
  .then(({data}) => {
    const dados = data.data;
      setHeroi(dados.ws_texto)
  })
  .catch((error) => {
    alert(error)
  })
    
}, [])

export function App() {
  return (
    <motion.div initial="initial" animate="animate">
      <Navbar />
      <div
        id="inicio"
        className="bg-image-gradient position-relative w-100 vh-100 d-flex"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easeing }}
          className="container h-75 my-auto pt-5 d-flex justify-content-around align-items-center"
        >
          <motion.div className="me-auto">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              <strong>
                
              </strong>
            </motion.h1>

            <motion.h5 className="mt-5" variants={fadeInUp2}>
              Uma aplicação móvel ideal para fazer turismo mas que irá
              <br />
              inovar o seu negócio, agilidade os processos e reduzir os <br />
              custos de operação.
            </motion.h5>
            <motion.div variants={stagger}>
              <motion.button
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="btn btn-lg btn-dark mt-5"
              >
                Conhece a app aqui! 👈🏻
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.img
            className="img-fluid h-100 ms-auto d-none d-lg-block mt-5"
            variants={screenImg}
            src={heroImage}
            alt="react logo"
          />
        </motion.div>
      </div>
      <section id="descarregar" className="container">
        <div className="row">
          <div className="col d-flex justify-content-center  align-items-center">
            <img
              src={imageDescarregarApp}
              className="img-fluid h-75"
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
                <div className="d-grid gap-2">
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
      </section>

      <section
        id="objetivo"
        className="py-5 section-background-verde d-flex align-items-center"
      >
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
            className="img-fluid w-50 h-50"
            alt="Image do logo na section do nosso objetivo"
          />
        </div>
      </section>
      <section id="oferecemos" className="my-5 d-flex align-items-center">
        <div className="container my-4">
          <div className="row">
            <div className="col-xl-6 row">
              <h1>
                <strong>Oferecemos</strong>
              </h1>
              <div className="d-md-flex mt-lg-5 justify-content-md-center justify-content-lg-start">
                <img
                  src={ecrasOferecemos}
                  className="img-fluid d-none d-md-block h-lg-75 w-lg-75"
                  alt=""
                />
              </div>
            </div>
            <div className="col row row-cols-1 row-cols-md-2">
              <div className="col">
                <Card
                  titulo="Pontos Turísticos"
                  descricao="Encontre facilmente na nossa secção de pontos turisticos aquilo que precisa para desfrutar os melhores momentos possiveis!"
                  icon={iconpt}
                />
              </div>
              <div className="col">
                <Card
                  titulo="Vouchers"
                  descricao="A nossa aplicação permite usufruir do sistema de vouchers que benificia o utilizador dando-lhe descontos através de atividades para aplicar em pontos turísticos"
                  icon={iconvouc}
                />
              </div>

              <div className="col">
                <Card
                  titulo="Reservas"
                  descricao="Faça reservas nos pontos turísticos para não perder as melhores experiências possiveis!"
                  icon={iconres}
                />
              </div>

              <div className="col">
                <Card
                  titulo="QRCode"
                  descricao="A nossa aplicação permite ainda usar a câmara do dispositivo móvel para leitura do código QR, ou então escrever manualmente os códigos fornecidos pelo nosso agente turístico"
                  icon={iconqr}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="atualizacoes"
        className="py-5 section-background-verde d-flex align-items-center"
      >
        <div className="container py-5">
          <h1>
            <strong>Atualização das ultimas versões da aplicação</strong>
          </h1>
          <div className="card mx-auto mt-5" style={{ maxWidth: "42rem" }}>
            <div className="card-body p-4">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
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
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed"
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
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div className="accordion-body">
                      This is the first item's accordion body. It is hidden by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and
                      hiding via CSS transitions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      className="accordion-button collapsed"
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
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div className="accordion-body">
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
    </motion.div>
  );
}

export default App;
