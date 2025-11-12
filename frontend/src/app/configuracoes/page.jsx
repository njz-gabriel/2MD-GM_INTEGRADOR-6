/* 
    Página do Profile do usuário;
    Onde o usuário pode alterar informações pessoais;
*/

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
                                <svg width="80" height="80" alt="GM Logo" title="GM" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg" data-di-res-id="a27f4106-d12b074b" data-di-rand="1762433650408">
                                    <path d="M24.6285 40.4839H43.9691V37.0484H24.6285V40.4839ZM50.5549 46.4516V8.54839C50.5549 5.51613 48.9846 3.93548 45.9401 3.93548H8.04392C4.99941 3.93548 3.42908 5.51613 3.42908 8.54839V46.4032C3.42908 49.4355 4.99941 51.0161 8.04392 51.0161H45.892C48.9846 51.0645 50.5549 49.5 50.5549 46.4677V46.4516ZM53.984 46.7903C53.984 51.4516 50.9395 54.5 46.2766 54.5H7.70742C3.04451 54.5 0 51.4677 0 46.7903V8.20968C0 3.53226 3.04451 0.5 7.70742 0.5H46.2926C50.9555 0.5 54 3.53226 54 8.20968V46.7903H53.984ZM17.7223 17.8871H15.527C14.6777 17.8387 14.0047 18.5 13.9567 19.2903V28.1774C13.8926 29.0161 14.5816 29.7581 15.4148 29.7581H17.7223V17.8871ZM21.6641 14.5161V33.9839C21.6641 36.2903 20.6546 40.5161 13.9567 40.5161H12.3223V37.0806H13.9567C16.6006 37.0323 17.6742 35.9032 17.7223 33.9839V33.1936H14.4053C12.0979 33.3065 10.127 31.5645 10.0148 29.2581V18.9032C10.0148 16.2581 11.7614 14.5161 14.4053 14.5161H21.6641ZM43.9852 18.9032V33.1936H40.0433V19.4677C40.1074 18.6774 39.4825 17.9516 38.6973 17.8871H36.2777V33.1774H32.3359V17.8871H28.5703V33.1774H24.6285V14.5H39.5947C42.3507 14.5 43.9852 16.1935 43.9852 18.8871V18.9032Z" fill="#005DAA"></path>
                                </svg>

                            </div>
                        </div>
                        <div className="text-center">
                            <div className="position-relative d-inline-block">
                                <img
                                    src="https://randomuser.me/api/portraits/men/40.jpg"
                                    className="rounded-circle profile-pic"
                                    alt="Profile Picture"
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
                    <div className="col-12">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    {/* Sidebar */}
                                    <div className="col-lg-3 border-end">
                                        <div className="p-4">
                                            <div className="nav flex-column nav-pills">
                                                <a className="nav-link active" href="#">
                                                    <i className="fas fa-user me-2" />
                                                    Informação Pessoal
                                                </a>
                                                <a className="nav-link" href="#">
                                                    <i className="fas fa-lock me-2" />
                                                    Segurança
                                                </a>
                                                <a className="nav-link" href="#">
                                                    <i className="fas fa-bell me-2" />
                                                    Notificações
                                                </a>
                                                <a className="nav-link" href="#">
                                                    <i className="fas fa-credit-card me-2" />
                                                    Faturamento
                                                </a>
                                                <a className="nav-link" href="#">
                                                    <i className="fas fa-chart-line me-2" />
                                                    Atividade
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Area do Conteúdo */}
                                    <div className="col-lg-9">
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