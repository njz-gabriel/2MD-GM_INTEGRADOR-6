/* 
    Página do Profile do usuário;
    Onde o usuário pode alterar informações pessoais;
*/

import LogoGM from "@/components/LogoGM"
import "./configuracoes.css"

export default function Configuracoes() {

    return (<>

        <div className="conteiner bg-light">
            <div className="container py-5">
                <div className="row">
                    {/* Cabeçalho */}
                    <div className="col-12 mb-4">
                        <div className="profile-header position-relative mb-4">
                            <div className="position-absolute top-0 end-0 p-3">
                                <LogoGM tamanho={80} cor={"#0956FF"}/>

                            </div>
                        </div>
                        <div className="text-center">
                            <div className="position-relative d-inline-block">
                                <img
                                    src="https://tse4.mm.bing.net/th/id/OIP.dvPzAHlp_Tttshx0Th7yiQHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
                                    className="rounded-circle profile-pic"
                                    alt="#Imagem"
                                />
                                <button className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle">
                                    <i className="fas fa-camera" />
                                </button>
                            </div>
                            <h3 className="mt-3 mb-1">#Nome</h3>
                            <p className="text-muted mb-3">#Cargo</p>
                            <div className="d-flex justify-content-center gap-2 mb-4">
                                <button className="btn btn-outline-primary">
                                    <i className="fas fa-envelope me-2" />
                                    Mensagem
                                </button>
                                <button className="btn btn-primary">
                                    <i className="fas fa-user-plus me-2" />
                                    Conectar
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* conteúdo Principal */}
                    <div className="info col-12">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-0">
                                <div className="row">
                                    {/* Area do Conteúdo */}
                                    <div className="col-lg-11">
                                        <div className="p-4">
                                            {/* Informação Pessoal */}
                                            <div className="mb-4">
                                                <h5 className="mb-4">Informação Pessoal</h5>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label">Nome</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="#Nome"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Sobrenome</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="#Sobrenome"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue="#Email"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Telefone</label>
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            defaultValue="#Telefone"
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label">Bio</label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={4}
                                                            defaultValue={
                                                                "#Bio"
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Cofiguraçõe do Cards */}
                                            <div className="row g-4 mb-4">
                                                <div className="col-md-6">
                                                    <div className="settings-card card">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <h6 className="mb-1">
                                                                        Autenticação de dois fatores
                                                                    </h6>
                                                                    <p className="text-muted mb-0 small">
                                                                        Adicione uma nova camada de segurança
                                                                    </p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="settings-card card">
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <h6 className="mb-1">Email Notificações</h6>
                                                                    <p className="text-muted mb-0 small">
                                                                        Receba notificações de atividade
                                                                    </p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Atividade recente */}
                                            <div>
                                                <h5 className="mb-5">Atividade Recente</h5>
                                                <div className="activity-item mb-3">
                                                    <h6 className="mb-1">#Atividade</h6>
                                                    <p className="text-muted small mb-0">#Tempo</p>
                                                </div>
                                                <div className="activity-item mb-3">
                                                    <h6 className="mb-1">#Atividade</h6>
                                                    <p className="text-muted small mb-0">#Tempo</p>
                                                </div>
                                                <div className="activity-item">
                                                    <h6 className="mb-1">#Atividade</h6>
                                                    <p className="text-muted small mb-0">#Tempo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}