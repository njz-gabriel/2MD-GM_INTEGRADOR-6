import EquipesModel from '../models/EquipesModel.js'
import { fileURLToPath } from 'url';
import path from 'path';


class EquipesController {

    static async listarTodos(req, res) {
        try {

            const resultado = await EquipesModel.listarTodos(); // <-- MUDANÇA AQUI

            res.status(200).json({
                sucesso: true,
                dados: resultado.equipes
            });
            
        } catch (error) {
            console.error('Erro ao listar as equipes:', error);
            res.status(500).json({
                sucesso: false,
                erro: 'Erro interno do servidor',
                mensagem: 'Não foi possível listar as equipes'
            });
        }
    }
}


export default EquipesController;