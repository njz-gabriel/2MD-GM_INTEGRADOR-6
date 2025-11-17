"use client";

import { useState, useEffect } from "react";

import TreinamentosLista from "@/components/TreinamentosLista";
import AcoesRapidas from "@/components/ft/AcoesRapidas";

// Gráficos
import EstadosTreinamentos from "@/components/Graficos/EstadosTreinamentos";
import TreinamentosRealizados from "@/components/Graficos/TreinamentosRealizados";
import TreinamentosOfertados from "@/components/Graficos/TreinamentosOfertados";

import StackedBarChart from "@/components/Graficos/grafico3";
import Grafico1 from "@/components/Graficos/grafico1";

export default function Dashboard() {
	const [usuario, setUsuario] = useState([]);
	const [treinamentosRealizados, setTreinamentosRealizados] = useState([]);
	const [treinamentosOferecidos, setTreinamentosOferecidos] = useState([]);


	/* Carregando o usuário logado */
	useEffect(() => {
		// /perfil

		const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

		setUsuario(usuarioLogado?.usuario)
	}, [])

	/* Carregando os treinamentos do usuario*/
	useEffect(() => {
		try {
			async function carregarTreinamentos() {
				const res = await fetch('http://localhost:3000/api/treinamentos');
				const data = await res.json();

				if (data.sucesso) {
					console.log(data.dados);

					setTreinamentosRealizados(data.dados);
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

	return (
		<>
			<div className="container py-4">
				{/* Titulo da página*/}
				<div className="d-flex flex-column justify-content-between mb-3">
					<div className="bottom-bordaAzulGM ps-3 col-12"><h1 className="h3 mb-0 fw-bold fs-2">Painel de Administração</h1></div>
					<p className="text-muted small mt-1 ps-3 fs-6">Bem vindo, {usuario?.nome}</p>
				</div>

				{/* Lista e ações */}
				<div className="row g-3">

					{/* Listagem de treinamentos */}
					<div className="col-lg-7">
						<TreinamentosLista treinamentos={treinamentosRealizados} />
					</div>

					<div className="col-lg-5">
						<div className="col-12 h-50 pb-2">
							{/* Ações Rápidas */}
							< AcoesRapidas />
						</div>

						<div className="col-12 h-50 pt-2">
							<div className="h-100 col-12 bg-white rounded shadow-sm p-3">
								<EstadosTreinamentos treinamentos={treinamentosRealizados}/>
							</div>
						</div>

					</div>

					<div className="col-12 d-flex flex-wrap">
						{/* Grafico de treinamento realizado*/}
						<div className="col-md-6 pt-2 pe-md-2">
							<div className="h-100 col-12 bg-white rounded shadow-sm p-3">
								<TreinamentosRealizados />
							</div>
						</div>

						{/* Grafico de treinamento ofertados*/}
						<div className="col-md-6 pt-2 ps-md-2">
							<div className="h-100 col-12 bg-white rounded shadow-sm p-3">
								<TreinamentosOfertados />
							</div>
						</div>
					</div>

					{/* // TESTANDO GRÁFICOS = = = = = = = = = = = = = = = = = = = = */}
					{/* <div className="col-lg-6">
							<div className="col-12 bg-white pe-2 rounded shadow-sm">
								<Grafico1 />
							</div>
						</div> */}

					{/* <StackedBarChart /> */}
					{/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */}

				</div>
			</div>
		</>
	);
}


/*
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
*/