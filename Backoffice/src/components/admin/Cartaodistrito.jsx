import React from "react";
import { ModalRegiaoTuristica } from "./ModalRegiaoTuristica"
import useApiPrivate from "../../hooks/useApiPrivate";
import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

export function Cartaodistrito() {

  const [regiao, setRegiao] = useState([]);
  const [utilizador, setUtilizador] = useState([]);
  let [modalRegiaoTuristicaShow, setModalRegiaoTuristicaShow] = useState(false);
  let [selectedRegiao, setSelectedRegiao] = useState(null);
  const apiPrivate = useApiPrivate();


  useEffect(() => {
    apiPrivate.get('/regiaoturistica/list')
      .then(({ data }) => {
        const dados = data.data;
        var newRegiao = [];
        dados.map((RegiaoAux) => {
          newRegiao.push({
            id: RegiaoAux.rt_id,
            nome: RegiaoAux.rt_nome,
          })
        })
        setRegiao(newRegiao);
      })
      .catch((error) => {
        alert(error)
      })

      apiPrivate.get('/utilizadores/list')
      .then(({ data }) => {
        const dados = data.data;
        var newUtilizador = [];
        dados.map((utilizadorAux) => {
          newUtilizador.push(utilizadorAux)
        })
        setUtilizador(newUtilizador);
      })
      .catch((error) => {
        alert(error)
      })
  }, []);

  function setUserRtIdNull(id) {
    apiPrivate.patch("/utilizadores/updateutilizador/" + id, { rt_id: null }).then((data) => {
      console.log(data);
      if (data.status = "200") {
        toast.success('Responsável da região turística alterado com sucesso', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        sendError("Ocorreu um erro ao tentar alterar o responsável da região turística")
      }
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {
        regiao.map((reg, index) => {
          return (
            <>
              <div className="card mt-3" style={{ width: "23rem" }} key={index}>
                <div className="card-header">{reg.nome}</div>
                <div className="card-body">
                  <h5 className="card-title">Responsáveis definidos</h5>
                  <div className="d-flex flex-wrap">

                    {utilizador.map((user, index) => {
                      if (user.rt_id == reg.id) {
                        return (
                          <>
                            <div key={index} className="alert alert-primary d-flex justify-content-between my-2 me-3" role="alert">
                              {user.u_nome}
                              <button
                                type="button"
                                className="btn-close ms-2"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                onClick={() => setUserRtIdNull(user.u_id)}
                              ></button>
                            </div>
                          </>
                        )
                      }
                    })}
                  </div>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#modal" onClick={()=>setSelectedRegiao(reg)}>
                    Adicionar responsável
                  </a>
                </div>
                <ModalRegiaoTuristica
                  show={modalRegiaoTuristicaShow}
                  onHide={() => setModalRegiaoTuristicaShow(false)}
                  props={selectedRegiao}
                  props2={utilizador}
                />
              </div>
            </>
          )
        })
      }
    </>
  );
}

export default Cartaodistrito;
