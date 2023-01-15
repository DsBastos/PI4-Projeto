import api from "../../../api";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function ModalEditarPontoInteresse({ show, onHide, props }) {

  let [nome, setNome] = useState("");
  let [local, setLocal] = useState("");
  let [dificuldade, setDificuldade] = useState("");
  let [duracao, setDuracao] = useState("");
  let [terreno, setTerreno] = useState("");
  let [tamanho, setTamanho] = useState("");
  let [descricao, setDescricao] = useState("");
  let [horario, setHorario] = useState("");
  let [coordenadas, setCoordenadas] = useState("");
  let [link, setLink] = useState("");
  let [pontosAdquiridos, setPontosAdquiridos] = useState("");

  function editPonto() {
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

      api.patch("/pontoturistico/updatepontoturistico/" + props.id, newPontoTuristico).then((data) => {
        console.log(data);
        if (data.status = "200") {
          toast.success('Ponto turístico alterado com sucesso', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          sendError("Ocorreu um erro ao tentar alterar o ponto turístico")
          //console.log("asd");
        }
      })
        .catch((error) => {
          console.log(error);
        });
  }

    // let deletePontoTuristico = (e) => {
    //   api.delete("pontoturistico/deletepontoturistico" + subservico).then(() => {
    //     onHide();
    //   })
    //   toast.success('Ponto turístico apagado com sucesso', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }

  return (
    <div className="modal fade" id="ModalEditarPontoInteresse" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar ponto de interesse</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <form>
              <div className="form-group m-2">
                <label>Nome</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setNome(e.target.value)} value={nome== "" ? props?.nome:nome}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Região</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setLocal(e.target.value)} value={local == "" ? props?.local:local}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Dificuldade</label>
                <input type="number" className="form-control" onChange={e => setDificuldade(e.target.value)} value={dificuldade == "" ? props?.dificuldade:dificuldade}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Duração</label>
                <input type="minutes" className="form-control" aria-describedby="emailHelp" onChange={e => setDuracao(e.target.value)} value={duracao == "" ? props?.duracao:duracao}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Terreno</label>
                <input type="number" className="form-control" aria-describedby="emailHelp" onChange={e => setTerreno(e.target.value)} value={terreno== "" ? props?.terreno:terreno}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Tamanho</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setTamanho(e.target.value)} value={tamanho == "" ? props?.tamanho:tamanho}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Horário</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setHorario(e.target.value)} value={horario == "" ? props?.horario:horario}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Pontos adquiridos</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setPontosAdquiridos(e.target.value)} value={pontosAdquiridos == "" ? props?.pontosAdquiridos:pontosAdquiridos}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Coordenadas</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setCoordenadas(e.target.value)} value={coordenadas == "" ? props?.coordenadas:coordenadas}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Link</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setLink(e.target.value)} value={link == "" ? props?.link:link}></input>
              </div>
              <div className="form-group m-2 pt-2">
                <label>Descrição</label>
                <textarea rows="4" type="text" className="form-control" aria-describedby="emailHelp" onChange={e => setDescricao(e.target.value)} value={descricao== "" ? props?.descricao:descricao}></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-danger text-left" data-bs-dismiss="modal" onClick={deletePontoTuristico}>Eliminar ponto turístico</button> */}
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={editPonto}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}