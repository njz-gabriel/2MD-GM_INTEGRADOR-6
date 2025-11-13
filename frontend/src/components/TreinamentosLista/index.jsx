'use client'

import { useState } from "react";
import TreinamentosItem from "./TreinamentoItem";
import './trLista.css';

export default function TreinamentosLista({ treinamentos }) {
    const [filtro, setFiltro] = useState('');

    const Status = {
        "Pendente": "primary",
        "Em andamento": "warning",
        "Concluido": "success",
        "Cancelado": "danger",
    };

    // Função de filtragem
    const trExibir = filtro
        ? treinamentos.filter(tr => tr.estado === filtro)
        : treinamentos;

    return (
        <div className="col-12 col-lg-8">
            <div className="col-12 card border-0 shadow-sm p-3">
                {/* Título */}
                <div className="card-header bg-white border-0 px-0">
                    <h5 className="mb-0 fs-5">Treinamentos recentes</h5>
                </div>

                {/* Botões de filtro */}
                <div className="col-12 d-flex flex-wrap">{
                    // Criando 1 botão para cada estado
                    Object.keys(Status).map((estado) => {
                        // Verificando se o filtro está ativo para esse botão
                        const ativo = filtro === estado;

                        // Classes do botão
                        const classes = 'btn btn-filtro border rounded-0 col-12 col-sm-6 col-md-3';
                        const classeAtivo = ativo ? `border-${Status[estado]} bg-${Status[estado]} bg-opacity-10` : '';

                        // Criando o botão
                        return (
                            <div
                                key={estado}
                                className={classes + ' ' + classeAtivo}
                                onClick={() => setFiltro(ativo ? '' : estado)}
                                style={{ cursor: 'pointer' }}
                            >
                                {estado}
                            </div>
                        );
                    })
                }</div>

                {/* Lista */}
                {/* Lista */}
<div
    className={
        'card-body border overflow-y-scroll ' +
        (filtro ? `border-${Status[filtro]} bg-${Status[filtro]} bg-opacity-10` : '')
    }
    style={{ height: '500px' }}
>
    {treinamentos.length > 0 ? (
        trExibir.map(tr => <TreinamentosItem tr={tr} key={tr.id} />)
    ) : (
        <p className="text-muted">Carregando atividades...</p>
    )}
</div>

            </div>
        </div>
    );
}
