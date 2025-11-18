import TreinamentoModel from '../models/TreinamentosModel.js';
import { fileURLToPath } from 'url';
import path from 'path';


class TreinamentoController {
    /* Lista todos os treinamento */
    static async listarTodos(req, res) {
        try {

            const resultado = await TreinamentoModel.listarTodos();

            res.status(200).json({
                sucesso: true,
                dados: resultado.treinamentos
            });
            
        } catch (error) {
            console.error('Erro ao listar treinamentos:', error);
            res.status(500).json({
                sucesso: false,
                erro: 'Erro interno do servidor',
                mensagem: 'Não foi possível listar os treinamentos'
            });
        }
    }

    /* Cria um novo treinamento */
    static async criarTreinamento(req, res){
        try {
            const { nome, descricao, participantes} = req.body;

            // Preparar dados do treinamento
            const dadosTreinamento = {
                nome: nome.trim(),
                descricao: descricao ? descricao.trim() : '',
                participantes: participantes
            };

            const produtoId = await TreinamentoModel.criar(dadosTreinamento);

            res.status(201).json({
                sucesso: true,
                mensagem: 'Treinamento criado com sucesso',
                dados: {
                    id: produtoId,
                    ...dadosTreinamento
                }
            });
            
        } catch (error) {
            console.error('Erro ao criar treinamento:', error);
            res.status(500).json({
                sucesso: false,
                erro: 'Erro interno do servidor',
                mensagem: 'Não foi possível criar o treinamento'
            });
        }
    }
}


export default TreinamentoController;