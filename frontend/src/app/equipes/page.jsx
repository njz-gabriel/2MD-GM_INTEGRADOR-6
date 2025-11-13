"use client";

/*
    Página que comtém o nome das equipes da GM;
    Separados por setor;
    Usuários ao selecionar equipe serão redirecionados a página de times respectiva à equipe selecionada;
*/

import "./equipes.css"
import { useState, useEffect } from "react";

export default function Equipes() {

    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        async function carregarEquipes() {
            const res = await fetch('http://localhost:3000/api/equipes');
            const data = await res.json()

            if (data.sucesso) {
                console.log(data.dados);

                setEquipes(data.dados);

            } else {
                console.log(data.mensagem)
            }
        }

        carregarEquipes()
    }, []);

    return (<>
<div  className="container d-flex justify-content-center align-items-center h-100 gap-5">
        {equipes.length === 0 ? (
            <p className="text-muted mt-2">Carregando equipes...</p>
        ) : (
            equipes.map((eq) => {
                return <div key={eq.id} className="card profile-card">
                        <div className="card-body text-center shadow-sm">

                            <div className={`iconeFerramentaria shadow-sm`}>
                                <i className={eq.icone} style={{ fontSize: "80px", width: "80px", height: "80px", lineHeight: "80px" }}></i>
                            </div>

                            <h3 className={`card-title mb-2`}>{eq.nome}</h3>
                            <p className={`card-text text-muted mb-3`}>{eq.descricao}</p>
                        </div>
                    </div>
                
            })
        )}
</div>


    {/* <div className="container d-flex justify-content-center align-items-center h-100 gap-5">
            <div className="card profile-card">
                <div className="card-body text-center shadow-sm">

                    <div className="iconeFerramentaria shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
                        </svg>
                    </div>

                    <h3 className="card-title mb-2">TDO - Ferramentaria</h3>
                    <p className="card-text text-muted mb-3">Times de todas as plantas do Brasil</p>
                </div>
            </div>

            <div className="card profile-card">
                <div className="card-body text-center shadow-sm">

                    <div className="iconePintura shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
                        </svg>
                    </div>

                    <h3 className="card-title mb-2">Pintura</h3>
                    <p className="card-text text-muted mb-3">Times de todas as plantas do Brasil</p>
                </div>
        </div> */}
    </>)
}