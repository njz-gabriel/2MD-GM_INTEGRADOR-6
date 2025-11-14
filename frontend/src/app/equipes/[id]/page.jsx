"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Card from "@/components/CardTimes/Card";
import './timesid.css'


export default function Times() {
	const { id } = useParams()

	const [equipe, setEquipe] = useState(null);
	const [membros, setMembros] = useState([]);

	// Carregando a equipe
	useEffect(() => {
		async function carregarEquipe() {
			try {
				const res = await fetch(`http://localhost:3000/api/equipes/${id}`);
				const data = await res.json();

				if (data.sucesso) {
					console.log(data)
					setEquipe(data.dados[0]);
				} else {
					console.log(data.mensagem);
				}
			} catch (err) {
				console.error("Erro ao carregar equipe:", err);
			}
		}

		carregarEquipe();
	}, []);

	// Carregando os membros da equipe
	useEffect(() => {
		async function carregarMenbros() {
			try {
				const res = await fetch(`http://localhost:3000/api/equipes/${id}/membros`);
				const data = await res.json();

				if (data.sucesso) {
					console.log(data);
					setMembros(data.dados);
				} else {
					console.log(data.mensagem);
				}
			} catch (err) {
				console.error("Erro ao carregar membros:", err);
			}
		}

		carregarMenbros();
	}, []);

	if (!equipe) {
		return <p className="text-muted mt-5 text-center">Carregando equipe...</p>;
	}

	return (
		<section className="team-section">
			<div className="container">

				<div className="team-header text-center mb-4">
					{console.log(equipe)}
					<h1 className="team-title">{equipe.nome}</h1>
					<p className="team-description">{equipe.descricao}</p>
				</div>

				<div className="team-cards-container">
					{
						membros.map((m) => <Card key={m.id}/>)
					}
				</div>

			</div>
		</section>
	);
}
