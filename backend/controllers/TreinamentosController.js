import TreinamentoModel from '../models/TreinamentosModel.js';
import { fileURLToPath } from 'url';
import path from 'path';


class TreinamentoController {

    static async listarTodos(req, res) {
        try {

            const resultado = await TreinamentoModel.listarTodos(); // <-- MUDANÇA AQUI

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

    static async criarTreinamento(req, res){
        try {
            const { nome, descricao} = req.body;

            // Preparar dados do treinamento
            const dadosTreinamento = {
                nome: nome.trim(),
                descricao: descricao ? descricao.trim() : '',
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