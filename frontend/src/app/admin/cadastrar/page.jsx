'use client'

/*
    Página para que o admin realize o cadastro de um novo usuário
        • Coletar nome    
        • Coletar E-mail
        • Tipo de usuário
        • Se o usuário for MT, pegar o FT a qual ele deve ser associado
*/

import { useState, useEffect } from "react"

export default function Cadastrar() {
    const [token, setToken] = useState(null)

    const [tipoUser, setTipoUser] = useState('mt')
    const [nomeUser, setNomeUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [senhaUser, setSenhaUser] = useState('')
    const [ftUser, setFTUser] = useState('')
    const [equipeUser, setEquipeUser] = useState('')

    /* Pegando o token do sessionStorage */
    useEffect(() => {
        const tk = JSON.parse(sessionStorage.getItem('usuarioLogado')).token;
        console.log(tk);
        setToken(tk)
    }, [])

    /* Função para cadastrar o usuário no banco */
    function Cadastrar(e) {
        e.preventDefault();

        const novoUsuario = {
            nome: nomeUser,
            tipo: tipoUser,
            email: emailUser,
            senha: senhaUser,
            id_ft: ftUser,
            id_equipe: equipeUser
        };

        fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(novoUsuario)
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.sucesso) {
                console.log(data.dados);
            }
            else {
                console.log(data.mensagem);
            }
        }).catch(

        )
    }


    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        async function carregarEquipes() {
            try {
                const res = await fetch('http://localhost:3000/api/equipes');
                const data = await res.json();

                if (data.sucesso) {
                    console.log(data.dados)
                    setEquipes(data.dados);
                } else {
                    console.log(data.mensagem);
                }
            } catch (err) {
                console.error("Erro ao carregar equipes:", err);
            }
        }

        carregarEquipes();
    }, []);

    return <>
        <div className="container py-4">
            <div className="d-flex flex-column justify-content-between mb-3">
                <div className="bottom-bordaAzulGM ps-3 col-12"><h1 className="h3 mb-0 fw-bold fs-2">Cadastrar usuário</h1></div>
            </div>

            <div className="col-12 d-flex flex-column flex-md-row bg-white shadow-sm d-flex my-4 p-3 rounded">
                <div className="col-md-6 pe-md-2 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75%" height="auto" fill="#0956FF" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>

                {/* Formulário */}
                <form className="col-md-6 ps-md-2 pt-3 pt-md-0 d-flex flex-column" onSubmit={Cadastrar}>
                    <div className="col-12 mb-3">
                        <label htmlFor="tipoUsuario" className="form-label">Tipo de usuário</label>
                        <select className="form-select bordaCinza" id="tipoUsuario" onChange={(e) => setTipoUser(e.target.value)} required>
                            <option value='mt'>MT - </option>
                            <option value='ft'>FT - </option>
                        </select>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor="nome" className="form-label">Nome completo</label>
                        <input type="text" className="form-control bordaCinza" id="nome" onChange={(e) => setNomeUser(e.target.value)} value={nomeUser} placeholder="Nome completo" required />
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="text" className="form-control bordaCinza" id="email" onChange={(e) => setEmailUser(e.target.value)} value={emailUser} placeholder="E-mail" required />
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input type="text" className="form-control bordaCinza" id="senha" onChange={(e) => setSenhaUser(e.target.value)} value={senhaUser} placeholder="Senha" required />
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor="tipoUsuario" className="form-label">Equipe</label>
                        <select className="form-select bordaCinza" id="tipoUsuario" onChange={(e) => setEquipeUser(e.target.value)} required>
                            {
                                equipes.map((eq) => <option key={eq.id} value={eq.id}>{eq.nome}</option>)
                            }
                        </select>
                    </div>

                    {tipoUser === 'mt' ?
                        (
                            <div className="col-12 mb-3">
                                <label htmlFor="tipoUsuario" className="form-label">FT associado</label>
                                <select className="form-select bordaCinza" id="tipoUsuario" onChange={(e) => setFTUser(e.target.value)} required>
                                    <option value='mt'>MT - </option>
                                </select>
                            </div>
                        ) : (
                            <div className="col-12 mb-3 bg-opacity-100">
                                <label htmlFor="tipoUsuario" className="form-label">FT associado</label>
                                <select className="form-select bordaCinza" id="tipoUsuario" disabled></select>
                            </div>
                        )
                    }

                    <div className="text-end mt-auto">
                        <button className="btn btn-azulGM">Cadastrar usuário</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

