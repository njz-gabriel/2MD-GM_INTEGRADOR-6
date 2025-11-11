-- Criando a tabela de treinamentos
CREATE TABLE if not exists treinamentos (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    nome				VARCHAR(255) NOT NULL,
    descricao			VARCHAR(255) NOT NULL,
    data_criacao		DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao	DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    numSessoes			INT,
    idCriador			INT,
    estado              ENUM('Pendente', 'Em andamento', 'Concluido', 'Cancelado') NOT NULL DEFAULT 'Pendente',
    
    FOREIGN KEY (idCriador) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Inserindo dados na tabela  de treinamentos
INSERT INTO treinamentos (nome, descricao, estado) values 
("Treinamento 1", "Treinamento de como passar pretinho no pneu", "Pendente"),
("Treinamento 2", "Treinamento de como usar um paquimetro", "Concluido"),
("Treinamento 3", "Treinamento de como usar uma furadeira no chão", "Em andamento"),
("Treinamento 4", "Treinamento de como subir em uma escada pela parte de cima", "Cancelado")
;


select * from treinamentos;