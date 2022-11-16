import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import heroImage from "./assets/heroImage.png";
import iconpt from "./assets/icon_pt.svg";
import iconvouc from "./assets/icon_vou.svg";
import iconres from "./assets/icon_res.svg";
import iconqr from "./assets/icon_qr.svg";

export function App() {


  return (
    <div className="App">
      <div className="">
        <Navbar/>
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
            <img className="h-100 ms-auto d-none d-lg-block mt-5" src={heroImage} alt="react logo" />
          </div>
        </div>
        <Card titulo="asas" descricao="dqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggwdqafwggrgwrggw" icon={iconvouc} />
        <Card titulo="OS MIGUXOS" descricao="OLÁ AMIGOS" icon={iconpt}/>
        <Card titulo="BOLOOOOO" descricao="BOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHOBOLO BOLINHO" icon={iconres} />
        <Card titulo="O Iago vai entender isto" descricao="O Iago vai entender istoO Iago vai entender istoO Iago vai entender istoO Iago vai entender istoO Iago vai entender isto" icon={iconqr} />
        <Footer />
      </div>
    </div>
  );
}


export default App;
