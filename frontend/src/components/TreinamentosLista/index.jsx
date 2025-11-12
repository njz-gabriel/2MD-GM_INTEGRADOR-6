'use client'

import { useState } from "react";

import TreinamentosItem from "./TreinamentoItem";

import './trLista.css'

export default function TreinamentosLista({ treinamentos }) {
    const [filtro, setFiltro] = useState()
    const [trExibir, setTrExibir] = useState(treinamentos)
    const [filtroAtivo, setFiltroAtivo] = useState()

    const Status = {
        "Pendente": ["primary", "fa-question-circle"],
        "Em andamento": ["warning", "fa-cogs"],
        "Concluido": ["success", "fa-check"],
        "Cancelado": ["danger", "fa-xmark"],
    };

    /* Função para filtrar os treinamentos pelo estado */
    function filtrar(estado) {
        const filtroSelecionado = document.getElementById(`${estado.replace(' ', '')}Div`);

        // Se selecionar a opção que já está sendo filtrada, desativa o filtro
        if (filtro === estado) {
            setFiltro('');
            setTrExibir(treinamentos);

            filtroSelecionado.classList.remove(`border-${Status[estado][0]}`, `bg-${Status[estado][0]}`,'bg-opacity-10')
            return
        }

        // Filtrando os treinamentos
        const filtrados = treinamentos.filter((tr) => { return tr.estado === estado })

        // Atualizando as informações do filtro
        setFiltro(estado);
        setTrExibir(filtrados);

        // Estilizando a div "botão" da filtragem
        filtroSelecionado.classList.add(`border-${Status[estado][0]}`, `bg-${Status[estado][0]}`,'bg-opacity-10')
    };

    return <div className="col-12 col-lg-8">
        <div className="card border-0 shadow-sm p-3">
            {/* Titulo */}
            <div className="card-header bg-white border-0 px-0">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fs-5">Treinamentos recentes</h5>
                </div>
            </div>

            {/* Botoes de filtro */}
            <div className="d-flex col-12">
                <div className="btn rounded-0 col-3 btnPendente" id="PendenteDiv" onClick={() => filtrar("Pendente")}>Pendentes</div>
                <div className="btn rounded-0 col-3" id="EmandamentoDiv" onClick={() => filtrar("Em andamento")}>Em andamento</div>
                <div className="btn rounded-0 col-3" id="ConcluidoDiv" onClick={() => filtrar("Concluido")}>Concluídos</div>
                <div className="btn rounded-0 col-3" id="CanceladoDiv" onClick={() => filtrar("Cancelado")}>Cancelados</div>
            </div>

            {/* Lista */}
            <div className="card-body border rounded overflow-y-scroll" style={{ height: '500px' }}>
                {treinamentos.length > 0 ? (
                    trExibir.map((tr) => (<TreinamentosItem tr={tr} key={tr.id} />))
                ) : (
                    <p className="text-muted">Carregando atividades...</p>
                )}
            </div>
        </div>
    </div>
}