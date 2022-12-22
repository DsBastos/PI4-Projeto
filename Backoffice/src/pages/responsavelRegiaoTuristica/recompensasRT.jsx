import React from "react";
import { Topnav } from "../../components/Topnav";
import { Menu } from "../../components/Menu";
import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import { ModalVouchers } from "../../components/responsavelRegiaoTuristica/ModalVouchers";

function recompensas() {

  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [local, setLocal] = useState("");
  const [ponto, setPonto] = useState("");
  const [recompensa, setRecompensa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [custo, setCusto] = useState("");

  useEffect(() => {
    api.get('/recompensa/list')
      .then(({ data }) => {
        const dados = data.data;
        var newRecompensa = [];
        dados.map((RecompensaAux) => {
          newRecompensa.push({
            nome: RecompensaAux.r_nome,
            pontos: RecompensaAux.r_pontos,
          })
        })
        setRecompensa(newRecompensa);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);


  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   const datarecompensa = {
  //     nome: nome,
  //     imagem: imagem,
  //     local: local,
  //     ponto: ponto,
  //     descricao: descricao,
  //     custo: custo,
  //   };

  //   api
  //     .post("recompensa/create", datarecompensa)
  //     .then((res) => {
  //       let r_id;
  //       if (res.data.success) {
  //         const data = res.data.data;
  //         r_id = data.r_id;
  //         setRecompensa(r_id);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  /*Submeter dados para API */
  //}

  // const handleInputChange = (e) => {
  //   switch (e.target.name) {
  //     case "nome":
  //       setNome(e.target.value);
  //       break;
  //     case "imagem":
  //       setImagem(e.target.value);
  //       break;
  //     case "local":
  //       setLocal(e.target.value);
  //       break;
  //     case "ponto":
  //       setPonto(e.target.value);
  //       break;
  //     case "descricao":
  //       setDescricao(e.target.value);
  //       break;
  //     case "custo":
  //       setCusto(e.target.value);
  //       break;
  //   }
  // };

  const criarRecompensa = () => {
    let valid = true;
    if (nome == "" || descricao == "" || imagem == "" || duracao == "" || custo == "") {
      valid = false;
      sendError("Os campos não podem estar vazios");
    }
    if (valid) {
      let newRecompensa = {
        nome: nome,
        imagem: imagem,
        local: local,
        ponto: ponto,
        descricao: descricao,
        custo: custo,
      };
      api.post("recompensa/create", newRecompensa).then((data) => {
        if (data.status == "200") {
          toast.success("Recompensa criada com sucesso", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          sendError("Erro ao criar recompensa");
        }
      });
    }
  };

  function editPontoTuristico(pontoTuristico) {
    let newPontoTuristico = {
      ponto: ponto == "" ? pontoTuristico.ponto : ponto,
      tipo: selectedcargo == '' ? cargos.find(x => x.tu_tipo == props.cargo).tu_id : selectedcargo
    }
    //console.log(newUser)
    api.patch("/pontoturistico/updatepontoturistico/" + pt.id, newUser).then((data) => {
      console.log(data);
      if (data.status = "200") {
        toast.success('Utilizador alterado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        sendError("Ocorreu um erro ao tentar alterar o utilizador")
        //console.log("asd");
      }
    })
      .catch((error) => {
        //console.log(error);
        alert(error);
      });
  }

  function LoadFillData() {
    const [pontoTuristico, setPontoTuristico] = useState([]);

    useEffect(() => {
      api.get('/pontoturistico/list')
        .then(({ data }) => {
          const dados = data.data;
          var newPontoTuristico = [];
          dados.map((PontoTuristicoAux) => {
            newPontoTuristico.push({
              id: PontoTuristicoAux.pt_id,
              nome: PontoTuristicoAux.pt_nome,
              regiao: PontoTuristicoAux.pt_regiao,
              dificuldade: PontoTuristicoAux.pt_dificuldade,
              duracao: PontoTuristicoAux.pt_duracao,
              terreno: PontoTuristicoAux.pt_terreno,
              tamanho: PontoTuristicoAux.pt_tamanho,
              descricao: PontoTuristicoAux.pt_descricao,
              horario: PontoTuristicoAux.pt_horario,
              coordenadas: PontoTuristicoAux.pt_coordenadas,
              link: PontoTuristicoAux.pt_link,
              pontosAdquiridos: PontoTuristicoAux.pt_pontosadquiridos,
            })
          })

          setPontoTuristico(newPontoTuristico);
        })
        .catch((error) => {
          alert(error)
        })
    }, [])




    return (
      <>
        {pontoTuristico.map((data, index) => {
          // if(o ponto turistico tem de pertencer a regiao do responsável que estiver logado)
          // {
          console.log(data)
          return (
            <>
              <tr>
                <td className="fw-bold">{data.nome}</td>
                <td className="fw-bold">{data.regiao}</td>
                <td className="">
                  <textarea
                    className="form-control mx-auto w-25 my-md-3"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    maxLength="200"
                    cols="3"
                    value={data.pontosAdquiridos}
                  />
                </td>
              </tr>
            </>
          );
          // }
        })}
      </>
    )
  }



  return (
    <div className="d-flex">
      {/* Colocar aqui o componente da sidebar */}
      <Menu
        nome1="Dashboard"
        icon1="./assets/icon-barchartline.svg"
        link1="/dashboard1"
        nome2="Agentes turísticos"
        icon2="./assets/icon-filetext.svg"
        link2="/agentesTuristicos"
        nome3="Pontos turísticos"
        icon3="./assets/icon-filetext.svg"
        link3="/pontosDeInteresse"
        nome4="Recompensas"
        icon4="./assets/icon-filetext.svg" />

      <main className="w-100">
        <Topnav role="Responsável da região turística" nome="ROBERTO" />
        <div className="container px-5 my-5">
          <h2 className="mt-5 d-inline">Recompensas</h2>
          <button type="button" className="btn btn-success d-inline float-end" data-bs-toggle="modal" data-bs-target="#ModalVouchers">Consultar recompensas emitidas</button>
          <div className="col mt-3">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">Criar recompensa</h5>
                <form>
                  <div className="form-group row mt-2">
                    <label htmlFor="localRecompensa" className="col-2 col-form-label">
                      Nome
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Insira Nome da recompensa"
                        id="nomeRecompensa"
                        value={nome}
                        onChange={(e) => {
                          setNome(e.target.value);
                        }}
                      />
                    </div>

                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Local
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        placeholder="Insira a região do local"
                        id="localRecompensa"
                        value={local}
                        onChange={(e) => {
                          setLocal(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Ponto turístico
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        placeholder="Insira o local do ponto turístico"
                        id="pontoTuristico"
                        value={ponto}
                        onChange={(e) => {
                          setPonto(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Custo
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        placeholder="Insira o valor em pontos"
                        id="custoRecompensa"
                        value={custo}
                        onChange={(e) => {
                          setCusto(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label className="col-2 col-form-label">
                      Descrição
                    </label>
                    <div className="col-lg-8">
                      <textarea
                        className="form-control"
                        placeholder="Insira uma descrição para a recompensa"
                        id="descricao"
                        rows="6"
                        maxLength="1024"
                        value={descricao}
                        onChange={(e) => {
                          setDescricao(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group row mt-2">
                    <label htmlFor="localRecompensa" className="col-2 col-form-label">
                      Imagem
                    </label>
                    <div className="col-lg-3">
                      <input
                        className="form-control"
                        type="file"
                        id="imagemRecompensa"
                        value={imagem}
                        onChange={(e) => {
                          setImagem(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success text-white mt-4 d-block ms-auto "
                    onClick={criarRecompensa}>
                    Criar voucher
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col mt-4">
            <div className="card">
              <div className="card-body p-5">
                <h5 className="card-title h4 fw-bold">
                  Associar pontos recebidos ao ponto turístico
                </h5>
                <form>
                  <table className="table table-striped table-group-divider text-center align-middle mt-5">
                    <thead>
                      <tr>
                        <th scope="col">Pontos de interesse</th>
                        <th scope="col">Distrito</th>
                        <th scope="col">Pontos</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">

                      <LoadFillData />
                    </tbody>
                  </table>
                  <button
                    type="submit"
                    className="btn btn-success text-white mt-4 d-block ms-auto "
                  >
                    Associar pontos
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ModalVouchers />
      </main>
    </div>
  );
}

export default recompensas;
