import express, { Router } from 'express';
import EquipesController from '../controllers/EquipesController.js';

const router = express.Router();

// Listar TODAS as equipes
router.get('/', EquipesController.listarTodos)



export default router;



/*

GET  - Listar TODaS as equipes

*/