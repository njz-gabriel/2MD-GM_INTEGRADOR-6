'use client'

import { useEffect, useState } from "react";

export default function TreinamentosItem({ tr }) {
    const [tempo, setTempo] = useState('');

    const Status = {
        "Pendente": ["primary", "fa-question-circle"],
        "Em andamento": ["warning", "fa-cogs"],
        "Concluido": ["success", "fa-check"],
        "Cancelado": ["danger", "fa-xmark"],
    };

    useEffect(() => {
        const atualizarTempo = () => tempoDecorrido(tr.dataCriacao);
        atualizarTempo(); // chama ao montar

        const interval = setInterval(atualizarTempo, 60000); // atualiza a cada minuto

        return () => clearInterval(interval);
    }, [tr.dataCriacao]);

    // Função para calcular o tempo decorrido desde a data de criação do treinamento
    function tempoDecorrido(dataCriacao) {
        const diferenca = Date.now() - new Date(dataCriacao).getTime();
        
        const segundos = Math.floor(diferenca / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);

        if (segundos < 60) {
            setTempo(`Há alguns segundos`);
        } else if (minutos < 60) {
            setTempo(`Há ${minutos} minuto${minutos !== 1 ? "s" : ""}`);
        } else if (horas < 24) {
            setTempo(`Há ${horas} hora${horas !== 1 ? "s" : ""}`);
        } else {
            setTempo(`Há ${dias} dia${dias !== 1 ? "s" : ""}`);
        }
    };

    return (
        <div key={tr.id} className="d-flex align-items-center border-bottom mb-2 pb-2">
            <div
                className={`flex-shrink-0 bg-${Status[tr.estado][0]} bg-opacity-10 rounded d-flex justify-content-center align-items-center`}
                style={{ width: '2.5rem', height: '2.5rem' }}
            >
                <i className={`fas ${Status[tr.estado][1]} text-${Status[tr.estado][0]}`} />
            </div>

            <div className="flex-grow-1 ms-3">
                <h6 className="mb-1">{tr.nome}</h6>
                <p className="text-muted small mb-0">{tempo}</p>
            </div>
        </div>
    );
}
