import { create, read, update, deleteRecord, getConnection } from '../config/database.js';

class TreinamentoModel {

    // Listar todos os treinamentos
    static async listarTodos() {
        try {
            const connection = await getConnection();

            try {
                const sql = 'SELECT * FROM treinamentos ORDER BY id DESC';

                const [treinamentos] = await connection.query(sql);

                return {
                    treinamentos
                };
            } finally {
                connection.release();
            }

        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            throw error;
        }
    }

    // Criar um treinamento
    static async criar(dadosTreinamento) {
        try {
            const treinamento = {
                nome: dadosTreinamento.nome,
                descricao: dadosTreinamento.descricao
            }

            // return await create('treinamentos', dadosTreinamento);
            const idTreinamento = await create('treinamentos', treinamento);

            dadosTreinamento.participantes.map((idParticipante) => {
                const participacao = {idTreinamento, idParticipante}

                create('participacoes', participacao)
            })

            return idTreinamento;
        } catch (error) {
            console.error('Erro ao criar treinamento:', error);
            throw error;
        }
    }
}


export default TreinamentoModel;