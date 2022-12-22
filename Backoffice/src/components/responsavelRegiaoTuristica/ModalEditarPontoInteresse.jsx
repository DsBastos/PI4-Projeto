import { api } from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalEditarPontoInteresse({ show, onHide, props }) {
  // const [nome, setNome] = useState("");
  // const [local, setLocal] = useState("");
  // const [dificuldade, setDificuldade] = useState("");
  // const [duracao, setDuracao] = useState("");
  // const [terreno, setTerreno] = useState("");
  // const [tamanho, setTamanho] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [horario, setHorario] = useState("");
  // const [coordenadas, setCoordenadas] = useState("");
  // const [link, setLink] = useState("");
  // const [pontosAdquiridos, setPontosAdquiridos] = useState("");
  // const [pontoTuristico,setPontoTuristico] = useState([])

  // useEffect(() => {
  //   api.get("pontoturistico/list").then((data) => {
  //     const dados = data.data.data;
  //     var newPontoTuristico = [];
  //     dados.map((PontoTuristicoAux) => {
  //       newPontoTuristico.push({
  //         id: PontoTuristicoAux.pT_id,
  //         nome: PontoTuristicoAux.pT_nome,
  //         local: PontoTuristicoAux.pT_local,
  //         dificuldade: PontoTuristicoAux.pT_dificuldade,
  //         duracao: PontoTuristicoAux.pT_duracao,
  //         terreno: PontoTuristicoAux.pT_terreno,
  //         tamanho: PontoTuristicoAux.pT_tamanho,
  //         descricao: PontoTuristicoAux.pT_descricao,
  //         horario: PontoTuristicoAux.pT_horario,
  //         coordenadas: PontoTuristicoAux.pT_coordenadas,
  //         link: PontoTuristicoAux.pT_link,
  //         pontosAdquiridos: PontoTuristicoAux.pT_pontosadquiridos,
  //       });
  //     });
  //     setPontoTuristico(newPontoTuristico);
  //   });
  // }, []);

  function editUser() {
    let newPontoTuristico = {
      nome: nome == "" ? props?.nome : nome,
      local: local == "" ? props?.local : local,
      dificuldade: dificuldade == "" ? props?.dificuldade : dificuldade,
      duracao: duracao == "" ? props?.duracao : duracao,
      terreno: terreno == "" ? props?.terreno : terreno,
      tamanho: tamanho == "" ? props?.tamanho : tamanho,
      descricao: descricao == "" ? props?.descricao : descricao,
      horario: horario == "" ? props?.horario : horario,
      coordenadas: coordenadas == "" ? props?.coordenadas : coordenadas,
      link: link == "" ? props?.link : link,
      pontosAdquiridos: pontosAdquiridos == "" ? props?.pontosAdquiridos : pontosAdquiridos,
    }

    // function SendUpdate() {
    //   api.patch("/pontoturistico/updatepontoturistico/" + props.id, newPontoTuristico).then((data) => {
    //     console.log(data);
    //     if (data.status = "200") {
    //       toast.success('Ponto turístico alterado com sucesso', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     } else {
    //       sendError("Ocorreu um erro ao tentar alterar o ponto turístico")
    //       //console.log("asd");
    //     }
    //   })
    //     .catch((error) => {
    //       //console.log(error);
    //       alert(error);
    //     });
    // }

    const deletePontoTuristico = (e) => {
      api.delete("pontoturistico/deletepontoturistico" + subservico).then(() => {
        onHide();
      })
      toast.success('Ponto turístico apagado com sucesso', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="modal fade" id="ModalEditarPontoInteresse" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar informação detalhada dos pontos de interesse</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
            <div className="form-group m-1">
                <label>Nome</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Inserir nome completo"></input>
              </div>
              <div className="form-group m-2">
                <label>Região</label>
                <input type="minutes" className="form-control" aria-describedby="emailHelp" placeholder="Inserir email"></input>
              </div>
              <div className="form-group m-1">
                <label>Dificuldade</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Inserir nome completo"></input>
              </div>
              <div className="form-group m-2">
                <label>Duração</label>
                <input type="minutes" className="form-control" aria-describedby="emailHelp" placeholder="Inserir email"></input>
              </div>
              <div className="form-group m-2">
                <label>Terreno</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label>Tamanho</label>
                <input type="size" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label>Descrição</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group row pt-4">
                <label className="col-1 col-form-label">Hora de abertura</label>
                <div className="col-4">
                  <input type="time" className="form-control" placeholder="Horas"></input>
                </div>
              </div>
              <div className="form-group row pt-4">
                <label className="col-1 col-form-label">Hora de encerramento</label>
                <div className="col-4">
                  <input type="time" className="form-control" placeholder="Horas"></input>
                </div>
              </div>
              <div className="form-group m-2">
                <label >Coordenadas</label>
                <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
              <div className="form-group m-2">
                <label >Link</label>
                <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Selecionar cargo"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-danger text-left" data-bs-dismiss="modal" onClick={deletePontoTuristico}>Eliminar ponto turístico</button> */}
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}