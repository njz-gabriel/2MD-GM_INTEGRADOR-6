import { create, read, update, deleteRecord, getConnection } from '../config/database.js';

class TreinamentoModel {

    // Listar treinamentos
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

    // Criar treinamento
    static async criar(dadosTreinamento) {
        try {
            return await create('treinamentos', dadosTreinamento);
        } catch (error) {
            console.error('Erro ao criar treinamento:', error);
            throw error;
        }
    }
}


export default TreinamentoModel;