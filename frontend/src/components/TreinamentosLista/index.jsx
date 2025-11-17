'use client'

import { useState } from "react";
import TreinamentosItem from "./TreinamentoItem";
import './trLista.css';

export default function TreinamentosLista({ treinamentos }) {
    const [filtro, setFiltro] = useState('');

    // Objeto para as cores do estado
    const Status = {
        "Pendente": ["primary", "fa-question-circle"],
        "Em andamento": ["warning", "fa-cogs"],
        "Concluido": ["success", "fa-check"],
        "Cancelado": ["danger", "fa-xmark"],
    };

    // Função de filtragem
    const trExibir = filtro
        ? treinamentos.filter(tr => tr.estado === filtro)
        : treinamentos;

    return (
        <div className="col-12">
            <div className="col-12 card border-0 shadow-sm p-3">
                {/* Título */}
                <div className="card-header bg-white border-0 px-0">
                    <h5 className="mb-0 fs-5">Treinamentos</h5>
                </div>

                {/* Botões de filtro */}
                <div className="col-12 d-flex flex-wrap">{
                    // Criando 1 botão para cada estado
                    Object.keys(Status).map((estado) => {
                        // Verificando se o filtro está ativo para esse botão
                        const ativo = filtro === estado;

                        // Classes do botão
                        const classes = 'btn btn-filtro border rounded-0 col-12 col-sm-6 col-md-3';
                        const classeAtivo = ativo ? `border-${Status[estado][0]} bg-${Status[estado][0]} bg-opacity-10` : '';

                        // Criando o botão
                        return (
                            <button
                                key={estado}
                                className={classes + ' ' + classeAtivo}
                                onClick={() => setFiltro(ativo ? '' : estado)}
                                style={{ cursor: 'pointer' }}
                            >
                                {estado}
                            </button>
                        );
                    })
                }</div>

                {/* Lista */}
                <div
                    className={
                        'card-body border overflow-y-scroll ' +
                        (filtro ? `border-${Status[filtro][0]} bg-${Status[filtro][0]} bg-opacity-10` : '')
                    }
                    style={{ height: '500px' }}
                >
                    {treinamentos.length > 0 ? (
                        trExibir.map(tr => <TreinamentosItem tr={tr} key={tr.id} />)
                    ) : (
                        <p className="text-muted">Carregando atividades...</p>
                    )}
                </div>

                {/* Total de treinamentos com um estado específico */}
                <div className="d-flex flex-wrap row-gap-3 mt-3">
                    {
                        Object.keys(Status).map((estado, index) => {
                            // Calculando o número de treinamentos com o estado determinado
                            const numeroTreinamentos = treinamentos.filter(tr => tr.estado === estado).length;

                            // Criando o botão
                            return (
                                <div key={index} className="col-md-6 d-flex gap-2 align-items-center">
                                    <div className={`bg-${Status[estado][0]} bg-opacity-10 rounded d-flex justify-content-center align-items-center`} style={{ height: '2.5rem', width: '2.5rem' }}>
                                        <i className={`fas ${Status[estado][1]} text-${Status[estado][0]}`} />
                                    </div>
                                    <div>
                                        {numeroTreinamentos}
                                        {numeroTreinamentos === 1 ? ' treinamento ' : ' treinamentos '}
                                        {numeroTreinamentos === 1 ? estado.toLowerCase() : estado.toLowerCase() + 's'}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
}
