-- Migration: Criar tabela usuarios
-- Data: 2025-11-11
-- Descrição: Tabela para os usuários do sistema

-- RELATÓRIO:		(Por favor, anote as alterações que fizer)
-- 	2025-11-11
-- 		Giovanne : Criação das tabelas e inserts


USE CONTROLE_TREINAMENTOS;

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

-- Inserindo dados de teste na tabela  de treinamentos
-- Criando com datas passadas
INSERT INTO treinamentos (nome, descricao, estado, data_criacao) values 
('Treinamento 1', 'Treinamento de como passar pretinho no pneu', 'Concluido', '2024-10-10 12:00:00'),				-- Há 1 ano
('Treinamento 2', 'Treinamento de como usar um paquimetro', 'Cancelado', '2025-05-10 12:00:00'),					-- Há meses
('Treinamento 3', 'Treinamento de como usar uma furadeira no chão', 'Em andamento', '2025-11-10 12:00:00'),		-- Há dias
('Treinamento 4', 'Treinamento de como usar uma furadeira no chão', 'Pendente', '2025-11-13 00:00:00'),		-- Há horas
('Treinamento 5', 'Treinamento de como usar uma furadeira no chão', 'Pendente', '2025-11-13 08:20:00');		-- Há minutos

-- Criando 1 com a data atual
INSERT INTO treinamentos (nome, descricao) values
('Treinamento 6', 'Treinamento de como subir em uma escada pela parte de cima');

-- =====================================================================================================================================

-- Criando a tabela de sessoes de treinamento
CREATE TABLE if not exists sessoes (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    idTreinamento		INT,
    dia					DATETIME,
    
    FOREIGN KEY (idTreinamento) REFERENCES treinamentos(id) ON DELETE CASCADE
);

-- Inserindo dados de teste na tabela  de treinamentos
INSERT INTO sessoes (idTreinamento, dia) values 
(2, '2025-11-20 12:00:00'),
(3, '2025-11-30 10:30:00'),
(3, '2025-12-10 14:30:00'),
(4, '2025-12-01 13:00:00')
;

-- =====================================================================================================================================
-- Criando a tabela de participacoes
CREATE TABLE if not exists participacoes (
	idTreinamento			INT,
    idParticipante		INT,
    PRIMARY KEY (idTreinamento, idParticipante),
    
    FOREIGN KEY (idTreinamento) REFERENCES treinamentos(id) ON DELETE CASCADE,
    FOREIGN KEY (idParticipante) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- =====================================================================================================================================
-- Criando a tabela de certificados
CREATE TABLE if not exists certificados (
	idUsuario		INT ,
    idTreinamento	INT,
    PRIMARY KEY (idUsuario, idTreinamento),
    
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (idTreinamento) REFERENCES treinamentos(id) ON DELETE CASCADE
);

-- =====================================================================================================================================

select * from treinamentos;
select * from sessoes;