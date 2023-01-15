import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import api from "../../../api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useApiPrivate from "../../hooks/useApiPrivate";

function criarVisitaAT() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [vagas, setVagas] = useState("");
  const apiPrivate = useApiPrivate();

  const criarVisita = () => {
    let valid = true;
    if (data == "" || hora == "" || vagas == "") {
      valid = false;
      sendError("Os campos não podem estar vazios");
    }
    if (valid) {
      let newVisita = {
        data: data,
        horas: hora,
        vagas: vagas,
        //pt_id: IDPONTOTURISTICO,
      };
      console.log(newVisita);
      apiPrivate
        .post("visita/create", newVisita)
        .then((res) => {
          if (res.data.sucess) {
            toast.success("Visita criada com sucesso", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            console.log(res.data);
          } else {
            sendError("Erro ao criar visita");
          }
        })
        .catch((err) => {
          alert("ERRO: " + err);
        });
    }
  };

  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard2"
        nome2="Criar visita"
        icon2="./assets/icon-filetext.svg"
        link2="/criarvisita"
        nome3="Consultar reservas"
        icon3="./assets/icon-filetext.svg"
        link3="/consultarReservas"
      />
      <main className="w-100">
        <Topnav role="Agente turístico" nome="ROBERTO" />
        <div className="d-flex">
          <div className="col">
            <div className="container px-5 mt-5">
              <div className="pt-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="../../assets/Sé_de_viseu.jpg"
                    alt="Card image cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Sé de Viseu</h5>
                  </div>
                </div>
              </div>
              <form onSubmit={criarVisita}>
                <div className="form-group row mt-5">
                  <label className="col-1 col-form-label">Data</label>
                  <div className="col-4">
                    <input
                      type="date"
                      className="form-control"
                      id="staticData"
                      value={data}
                      required
                      onChange={(e) => {
                        setData(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Hora</label>
                  <div className="col-4">
                    <input
                      type="time"
                      className="form-control"
                      id="inputHoras"
                      placeholder="Horas"
                      value={hora}
                      required
                      onChange={(e) => {
                        setHora(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row pt-4">
                  <label className="col-1 col-form-label">Vagas</label>
                  <div className="col-4">
                    <input
                      type="number"
                      className="form-control"
                      id="inputVagas"
                      placeholder="Número de vagas"
                      value={vagas}
                      required
                      onChange={(e) => {
                        setVagas(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </form>
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={criarVisita}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 p-5 bg-secondary bg-opacity-25 vh-100">
            <p className="text-dark h3">Sobre o ponto turístico</p><br />
            <p>
              A Sé ou Catedral de Viseu, também designada por Igreja Paroquial
              de Santa Maria ou Igreja de Nossa Senhora da Assunção, é uma
              catedral cristã localizada na cidade, no município e no distrito
              de Viseu, em Portugal. A Sé de Viseu está classificada como
              Monumento Nacional desde 1910.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default criarVisitaAT;
