'use client'

import { useState, useEffect } from "react";

export default function Acoes({
    exibirModal,

}) {

    const [showModal, setShowModal] = useState(false); // Modal de Novo Projeto

    const [newActivity, setNewActivity] = useState({
        title: "",
        icon: "fa-xmark",
        color: "danger",
    });





    // Funções para botões
    const handleNewProject = () => {
        setNewActivity({
            title: "",
            icon: "fa-xmark",
            color: "danger",
        });
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleCreateActivity = (e) => {
        e.preventDefault();

        const newId = activities.length > 0 ? Math.max(...activities.map(a => a.id)) + 1 : 1;
        const activityToAdd = {
            id: newId,
            ...newActivity,
            createdAt: Date.now(),
        };

        const updatedActivities = [activityToAdd, ...activities];
        setActivities(updatedActivities);
        localStorage.setItem("activities", JSON.stringify(updatedActivities));
        setShowModal(false);

        setNewActivity({
            title: "",
            icon: "fa-xmark",
            color: "danger",
        });
    };

    // Notificações
    const [activities, setActivities] = useState([]);
    const [showNotificationModal, setShowNotificationModal] = useState(false); // Modal de Notificações

    const handleNotifications = () => setShowNotificationModal(true);
    const notificationCount = activities.filter(a => a.icon === "fa-bell").length;
    const handleCloseNotificationModal = () => setShowNotificationModal(false);



    return <>
        <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm p-3">
                {/* Titulo */}
                <div className="card-header bg-white border-0 px-0">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fs-5">Ações rápidas</h5>
                    </div>
                </div>

                <div className="card-body">
                    <div className="d-grid gap-2">
                        <button className="btn btn-White border text-start d-flex align-items-center" onClick={handleNewProject}>
                            <i className="fas fa-plus me-2 text-primary text-center" style={{ width: '1.5rem' }} /> Novo treinamento
                        </button>
                        <button className="btn btn-White border text-start d-flex align-items-center">
                            <i className="fas fa-users me-2 text-primary text-center" style={{ width: '1.5rem' }} /> Gerenciar Time
                        </button>
                        <button className="btn btn-White border text-start d-flex align-items-center">
                            <i className="fas fa-cog me-2 text-primary text-center" style={{ width: '1.5rem' }} /> Configurações
                        </button>
                        <button className="btn btn-White border text-start d-flex align-items-center">
                            <i className="fas fa-file-alt me-2 text-primary text-center" style={{ width: '1.5rem' }} /> Gerar Relatório
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal Novo Projeto */}
        {showModal && (
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={handleCreateActivity}>
                            <div className="modal-header">
                                <h5 className="modal-title">Adicionar Novo Projeto</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Título</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newActivity.title}
                                        placeholder="Digite o título do projeto"
                                        onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                                <button type="submit" className="btn btn-primary" onClick={criarTreinamento}>Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}

        {/* Modal Notificações */}
        {showNotificationModal && (
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Notificações</h5>
                            <button type="button" className="btn-close" onClick={handleCloseNotificationModal}></button>
                        </div>
                        <div className="modal-body">
                            {activities.filter(a => a.icon === "fa-bell").length === 0 ? (
                                <p className="text-muted">Nenhuma notificação encontrada</p>
                            ) : (
                                activities
                                    .filter(a => a.icon === "fa-bell")
                                    .map(a => (
                                        <div key={a.id} className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <div className={`bg-${a.color} bg-opacity-10 p-2 rounded`}>
                                                    <i className={`fas ${a.icon} text-${a.color}`} />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">{a.title}</h6>
                                                <p className="text-muted small mb-0">{formatTime(a.createdAt)}</p>
                                            </div>
                                        </div>
                                    ))
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseNotificationModal}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
}