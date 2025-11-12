import { create, read, update, deleteRecord, getConnection } from '../config/database.js';

class EquipesModel {

    // Listar treinamentos
    static async listarTodos() {
        try {
            const connection = await getConnection();

            try {
                const sql = 'SELECT * FROM equipes ORDER BY id';

                const [equipes] = await connection.query(sql);

                return {
                    equipes
                };
            } finally {
                connection.release();
            }

        } catch (error) {
            console.error('Erro ao listar equipes:', error);
            throw error;
        }
    }
}


export default EquipesModel;