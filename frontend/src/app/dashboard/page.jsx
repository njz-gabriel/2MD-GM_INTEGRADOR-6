"use client";

import { useState, useEffect } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
    growth: 0,
  });

  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal de Novo Projeto
  const [showNotificationModal, setShowNotificationModal] = useState(false); // Modal de Notificações

  const [newActivity, setNewActivity] = useState({
    title: "",
    icon: "fa-xmark",
    color: "danger",
  });

  // 🔹 Simula carregamento de dados da API e carrega do localStorage se existir
  useEffect(() => {
    setTimeout(() => {
      setStats({
        users: 8549,
        revenue: 24890,
        orders: 1236,
        growth: 15.3,
      });

      const storedActivities = localStorage.getItem("activities");
      if (storedActivities) {
        setActivities(JSON.parse(storedActivities));
      } else {
        const initialActivities = [
          { id: 1, title: "Novo usuário registrado", createdAt: Date.now() - 2 * 60000, icon: "fa-user-plus", color: "primary" },
          { id: 2, title: "Treinamento de operação completo", createdAt: Date.now() - 60 * 60000, icon: "fa-check", color: "success" },
          { id: 3, title: "Lançamento de novo recurso", createdAt: Date.now() - 2 * 60 * 60000, icon: "fa-bell", color: "warning" },
          { id: 4, title: "Treinamento Pintura", createdAt: Date.now() - 5 * 60000, icon: "fa-cogs", color: "success" },
          { id: 5, title: "Treinamento Ferramentaria", createdAt: Date.now() - 30 * 60000, icon: "fa-xmark", color: "danger" },
        ];
        setActivities(initialActivities);
        localStorage.setItem("activities", JSON.stringify(initialActivities));
      }
    }, 1000);
  }, []);

  // 🔹 Atualiza os tempos automaticamente a cada minuto
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Função para calcular tempo decorrido
  const formatTime = (createdAt) => {
    const diff = Date.now() - new Date(createdAt).getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    if (minutes === 0) return "Agora";
    if (minutes < 60) return `Há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `Há ${hours} hora${hours > 1 ? "s" : ""}`;
    const days = Math.floor(hours / 24);
    return `Há ${days} dia${days > 1 ? "s" : ""}`;
  };

  // 🔹 Funções para botões
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

  // 🔹 Modal de notificações
  const handleNotifications = () => setShowNotificationModal(true);
  const handleCloseNotificationModal = () => setShowNotificationModal(false);

  // 🔹 Contagem de notificações (apenas itens com ícone de sino)
  const notificationCount = activities.filter(a => a.icon === "fa-bell").length;

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />
      <div className="container py-4">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Painel de Treinamento</h1>
            <p className="text-muted small mb-0">Bem vindo, Admin</p>
          </div>
          <div className="d-flex gap-3">
            {/* Botão Notificações com badge */}
            <button className="btn btn-outline-primary btn-sm position-relative" onClick={handleNotifications}>
              <i className="fas fa-bell me-1" /> Notificações
              {notificationCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {notificationCount}
                </span>
              )}
            </button>
            <button onClick={handleNewProject} className="btn btn-primary btn-sm">
              <i className="fas fa-plus me-1" /> Novo Treinamento
            </button>
          </div>
        </div>

        {/* Stats Cards Row */}
        <div className="row g-3 mb-4">
          {/* Adicione seus cards de estatísticas aqui */}
        </div>

        {/* Main Content Area */}
        <div className="row g-3">
          {/* Activity Timeline */}
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Atividades Recentes</h5>
                  <button className="btn btn-link text-decoration-none p-0">Todos</button>
                </div>
              </div>
              <div className="card-body">
                <div className="timeline">
                  {activities.length === 0 ? (
                    <p className="text-muted">Carregando atividades...</p>
                  ) : (
                    activities.map((a) => (
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
              </div>
            </div>
          </div>

          {/* Ações Rápidas */}
          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0">Ações Rápidas</h5>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary" onClick={handleNewProject}>
                    <i className="fas fa-plus me-2" /> Add Novo Treianemento
                  </button>
                  <button className="LinkEquipes btn btn-outline-success">
                    <a href="/equipes" className="LinkEquipes"><i className="fas fa-users me-2" /> Gerenciar Time</a>
                  </button>
                  <button className="btn btn-outline-info">
                    <i className="fas fa-cog me-2" /> Configurações
                  </button>
                  <button className="btn btn-outline-warning">
                    <i className="fas fa-file-alt me-2" /> Gerar Relatório
                  </button>
                </div>
              </div>
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
                  <h5 className="modal-title">Adicionar Novo Treinamento</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Treinamento</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newActivity.title}
                      placeholder="Digite o nome do treinamento"
                      onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                  <button type="submit" className="btn btn-primary">Adicionar</button>
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
  );
}
