import { Navbar } from "./components/Navbar";
import heroImage from "./assets/heroImage.png";

export function App() {
  return (
    <div className="App">
      <div className="">
        <Navbar/>
        <div className="bg-image-gradient position-relative w-100 vh-100 d-flex">
          <div className="container d-flex justify-content-around align-items-center">
            <div className="me-auto">
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
            <img className="w-25 ms-auto" src={heroImage} alt="react logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
