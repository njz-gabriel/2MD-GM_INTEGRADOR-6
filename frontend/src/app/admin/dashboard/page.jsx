"use client";

import { useState, useEffect } from "react";

import "./dashboard.css";

import TreinamentosLista from "@/components/TreinamentosLista";
import Acoes from "@/components/admin/Acoes";

export default function Dashboard() {
	const [treinamentos, setTreinamentos] = useState([
		{ id: 1, nome: "Treinamento 1", descricao: "Treinamento de como passar pretinho no pneu", estado: "Pendente", dataCriacao: Date.now() },
		{ id: 2, nome: "Treinamento 2", descricao: "Treinamento de como usar um paquimetro", estado: "Concluido", dataCriacao: Date.now() },
		{ id: 3, nome: "Treinamento 3", descricao: "Treinamento de como usar uma furadeira no chão", estado: "Em andamento", dataCriacao: Date.now() },
		{ id: 4, nome: "Treinamento 4", descricao: "Treinamento de como subir em uma escada pela parte de cima", estado: "Cancelado", dataCriacao: Date.now() },
		{ id: 5, nome: "Treinamento 1", descricao: "Treinamento de como passar pretinho no pneu", estado: "Pendente", dataCriacao: Date.now() },
		{ id: 6, nome: "Treinamento 2", descricao: "Treinamento de como usar um paquimetro", estado: "Concluido", dataCriacao: Date.now() },
		{ id: 7, nome: "Treinamento 3", descricao: "Treinamento de como usar uma furadeira no chão", estado: "Em andamento", dataCriacao: Date.now() },
		{ id: 8, nome: "Treinamento 4", descricao: "Treinamento de como subir em uma escada pela parte de cima", estado: "Cancelado", dataCriacao: Date.now() },
		{ id: 9, nome: "Treinamento 1", descricao: "Treinamento de como passar pretinho no pneu", estado: "Pendente", dataCriacao: Date.now() },
		{ id: 10, nome: "Treinamento 2", descricao: "Treinamento de como usar um paquimetro", estado: "Concluido", dataCriacao: Date.now() },
		{ id: 11, nome: "Treinamento 3", descricao: "Treinamento de como usar uma furadeira no chão", estado: "Em andamento", dataCriacao: Date.now() },
		{ id: 12, nome: "Treinamento 4", descricao: "Treinamento de como subir em uma escada pela parte de cima", estado: "Cancelado", dataCriacao: Date.now() }
	]);

	const [usuario, setUsuario] = useState([]);

	/* Carregando os treinamentos */
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

	/* Função para abrir um modal */
	function exibirModal(idModal) {
		const modalHTML = document.getElementById(idModal);
		const modal = new bootstrap.Modal(modalHTML);
		modal.show();
	}

	/* Função para cadastrar um novo treinamento */
	function criarTreinamento() {
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

	// ===========================================================

	// Atualiza os tempos automaticamente a cada minuto
	// const [tick, setTick] = useState(0);
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setTick(prev => prev + 1);
	// 	}, 60000);
	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<>
			<div className="container py-4">
				{/* Titulo da página*/}
				<div className="d-flex flex-column justify-content-between mb-3">

					<div className="bottom-bordaAzulGM ps-3 col-12"><h1 className="h3 mb-0 fw-bold fs-2">Painel de Treinamento</h1></div>
					<p className="text-muted small mt-1 ps-3 fs-6">Bem vindo, {usuario.nome}</p>


					{/* Botão Notificações */}

					{/* <button className="btn btn-outline-primary btn-sm position-relative" onClick={handleNotifications}>
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
					<Acoes />
				</div>

				<button onClick={() => { exibirModal('modalRegistrarGerente') }}> teste</button>
			</div>

		</>
	);
}
