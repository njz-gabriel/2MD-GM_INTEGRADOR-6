"use client";

import { useState, useEffect } from "react";

import "./dashboard.css";
import TreinamentosLista from "@/components/TreinamentosLista";

export default function Dashboard() {
	const [treinamentos, setTreinamentos] = useState([
		{id: 1, nome: "Treinamento 1", descricao: "Treinamento de como passar pretinho no pneu", estado:"Pendente", data_criacao: Date.now()},
		{id: 2, nome: "Treinamento 2", descricao: "Treinamento de como usar um paquimetro", estado:"Concluido", data_criacao: Date.now()},
		{id: 3, nome: "Treinamento 3", descricao: "Treinamento de como usar uma furadeira no chão", estado:"Em andamento", data_criacao: Date.now()},
		{id: 4, nome: "Treinamento 4", descricao: "Treinamento de como subir em uma escada pela parte de cima", estado:"Cancelado", data_criacao: Date.now()},
		{id: 1, nome: "Treinamento 1", descricao: "Treinamento de como passar pretinho no pneu", estado:"Pendente", data_criacao: Date.now()},
		{id: 2, nome: "Treinamento 2", descricao: "Treinamento de como usar um paquimetro", estado:"Concluido", data_criacao: Date.now()},
		{id: 3, nome: "Treinamento 3", descricao: "Treinamento de como usar uma furadeira no chão", estado:"Em andamento", data_criacao: Date.now()},
		{id: 4, nome: "Treinamento 4", descricao: "Treinamento de como subir em uma escada pela parte de cima", estado:"Cancelado", data_criacao: Date.now()},
		{id: 1, nome: "Treinamento 1", descricao: "Treinamento de como passar pretinho no pneu", estado:"Pendente", data_criacao: Date.now()},
		{id: 2, nome: "Treinamento 2", descricao: "Treinamento de como usar um paquimetro", estado:"Concluido", data_criacao: Date.now()},
		{id: 3, nome: "Treinamento 3", descricao: "Treinamento de como usar uma furadeira no chão", estado:"Em andamento", data_criacao: Date.now()},
		{id: 4, nome: "Treinamento 4", descricao: "Treinamento de como subir em uma escada pela parte de cima", estado:"Cancelado", data_criacao: Date.now()}
	]);
	const [usuario, setUsuario] = useState([]);

	// Carregando os treinamentos
	useEffect(() => {
		try {
			async function carregarTreinamentos() {
				const res = await fetch('http://localhost:3000/api/treinamentos');
				const data = await res.json();

				if (data.sucesso) {
					console.log(data.dados);

					setTreinamentos(data.dados);
				}
				else {
					console.log(data.mensagem);
				}
			}

			carregarTreinamentos()
		}
		catch {
			/* Erro caso a API esteja desligada */
		}
	}, [])




	// ===========================================================
	const [activities, setActivities] = useState([]);
	const [showModal, setShowModal] = useState(false); // Modal de Novo Projeto
	const [showNotificationModal, setShowNotificationModal] = useState(false); // Modal de Notificações

	const [newActivity, setNewActivity] = useState({
		title: "",
		icon: "fa-xmark",
		color: "danger",
	});


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
	// ===========================================================

	/* Função para cadastrar um novo treinamento */
	const criarTreinamento = () => {
		// Criando o objeto do treinamento
		const dadosTreinamento = {
			nome: "sadasd",
			descricao: "dsad"
		}

		// Fazendo a requisição para criar o treinamento
		fetch('http://localhost:3000/api/treinamentos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dadosTreinamento)
		}).then(res => {
			res.json()
		}).then(data => {
			if (data.sucesso) {

			}
			else {
				console.log(data.mensagem);
			}
		})
	};



	return (
		<>
			<div className="container py-4">
				{/* Titulo da página*/}
				<div className="d-flex flex-column justify-content-between mb-3">

					<div className="bottom-bordaAzulGM ps-3 col-12"><h1 className="h3 mb-0 fw-bold fs-2">Painel de Treinamento</h1></div>
					<p className="text-muted small mt-1 ps-3 fs-6">Bem vindo, {usuario.nome}</p>


					{/* Botão Notificações */}
					{/* 
						<button className="btn btn-outline-primary btn-sm position-relative" onClick={handleNotifications}>
							<i className="fas fa-bell me-1" /> Notificações
							{notificationCount > 0 && (
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
									{notificationCount}
								</span>
							)}
						</button> 
					*/}
				</div>

				{/* Lista e ações */}
				<div className="row g-3">

					{/* Listagem de treinamentos */}
					<TreinamentosLista treinamentos={treinamentos} />

					{/* Ações Rápidas */}
					<div className="col-12 col-lg-4">
						<div className="card border-0 shadow-sm">
							<div className="card-header bg-white border-0">
								<h5 className="mb-0">Ações Rápidas</h5>
							</div>
							<div className="card-body">
								<div className="d-grid gap-2">
									<button className="btn btn-outline-primary" onClick={handleNewProject}>
										<i className="fas fa-plus me-2" /> Add Novo Projeto
									</button>
									<button className="btn btn-outline-success">
										<i className="fas fa-users me-2" /> Gerenciar Time
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
	);
}
