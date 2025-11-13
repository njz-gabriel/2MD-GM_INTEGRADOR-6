"use client";

import { useState, useEffect } from "react";
import Card from "@/components/CardTimes/Card";
import './timesid.css'

export default function Times() {
  const [equipe, setEquipe] = useState(null);

  useEffect(() => {
    async function carregarEquipe() {
      try {
        const res = await fetch('http://localhost:3000/api/equipes');
        const data = await res.json();

        if (data.sucesso) {
          // Filtra apenas a equipe 1 (supondo que id === 1)
          const equipe1 = data.dados.find(ep => ep.id === 1);
          setEquipe(equipe1);
        } else {
          console.log(data.mensagem);
        }
      } catch (err) {
        console.error("Erro ao carregar equipes:", err);
      }
    }

    carregarEquipe();
  }, []);

  if (!equipe) {
    return <p className="text-muted mt-5 text-center">Carregando equipe...</p>;
  }

  return (
    <section className="team-section py-5">
      <div className="container">
        <div className="team-header text-center mb-5">
          <h1 className="team-title">{equipe.nome}</h1>
          <p className="team-description">{equipe.descricao}</p>
        </div>

        <div className="cardFuncionario col-4">
          <Card />
        </div>

      </div>
    </section>

  );
}
