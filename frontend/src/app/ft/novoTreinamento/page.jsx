/*
    Página para que o FT realize o cadastro de um novo treinamento
        • Coletar as informações do treinamento
*/

import { useEffect } from "react"

export default function NovoTreinamento() {
    const [mts, setMTs] = useEffect([])

    return <>
        <div className="container vh-100 d-flex justify-items-center align-items-center">
            <div className="col-12 bg-white shadow rounded p-3">
                {/* Formulário */}
                <form className="col-12 d-flex flex-wrap">
                    <div className="col-md-6 pe-2 d-flex flex-column justify-content-between">
                        {/* Nome */}
                        <div>
                            <label htmlFor="name" className="form-label border-bottom border-primary-subtle col-12">
                                Nome do treinamento
                            </label>
                            <input type="text" className="form-control" id="name" placeholder="Digite o nome completo" required />
                        </div>

                        {/* Descrição */}
                        <div className="mt-3 flex-grow-1 d-flex flex-column">
                            <label htmlFor="email" className="form-label border-bottom border-primary-subtle col-12">
                                Descrição do treinamento
                            </label>
                            <textarea type="email" className="form-control flex-grow-1" id="email" placeholder="Digite o e-mail corporativo" style={{ height: '250px' }} required />
                        </div>
                    </div>

                    {/* Participantes */}
                    <div className="col-md-6 ps-2 h-100">
                        <label htmlFor="telefone" className="form-label border-bottom border-primary-subtle col-12">Treinamento destinado a</label>
                        <div className="col-12 border p-3 rounded" style={{ height: '350px' }}>
                            {
                                mts.map((mt) => {
                                    return <>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                            <label className="form-check-label" for="checkDefault">
                                                Default checkbox
                                            </label>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>

                    {/* Botão */}
                    <div className="col-12 text-center mt-3">
                        <button type="submit" className="btn btn-azulGM">
                            Novo treinamento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}