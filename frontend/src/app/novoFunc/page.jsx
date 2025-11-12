import './func.css'



export default function novoFunc() {

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Registrar novo funcionario</h3>
                                <form id="registrationForm">
                                    {/* Personal Information */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label border-bottom border-primary-subtle">
                                            Nome completo
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Digite o nome completo"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label border-bottom border-primary-subtle">
                                            E-mail corporativo
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Digite o e-mail corporativo"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefone" className="form-label border-bottom border-primary-subtle">
                                            Telefone
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="telefone"
                                            placeholder="Digite o telefone"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="profileImage" className="form-label border-bottom border-primary-subtle">
                                            Imagem de perfil
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="profileImage"
                                            accept="image/*"
                                            required=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Cargos" className="form-label border-bottom border-primary-subtle">
                                            Selecione o cargo ocupado
                                        </label>
                                        <select className="form-control" id="companySize" required="">
                                            <option value="">Cargos</option>
                                            <option value="MT">MT</option>
                                            <option value="FT">FT</option>
                                            <option value="ADM">ADM</option>
                                        </select>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-azulGM">
                                            Cadastrar
                                        </button>
                                        <div id="formFeedback" className="mt-3" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}