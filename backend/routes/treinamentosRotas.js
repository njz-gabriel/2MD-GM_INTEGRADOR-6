import express, { Router } from 'express';
import TreinamentoController from '../controllers/TreinamentosController.js';

const router = express.Router();

// Listar TODOS os treinamentos
router.get('/', TreinamentoController.listarTodos)

// Criar treinamento
router.post('/', TreinamentoController.criarTreinamento)



export default router;



/*

GET  - Listar TODOS os treinamentos
POST - Criar treinamento


GET  - Acessar 1 treinamento específico

*/