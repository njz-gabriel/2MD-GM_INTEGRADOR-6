-- Migration: Criar tabela usuarios
-- Data: 2025-11-11
-- Descrição: Tabela para os usuários do sistema

-- RELATÓRIO:		(Por favor, anote as alterações que fizer)
-- 	2025-11-11
-- 		Giovanne : Criação das tabelas e inserts


USE CONTROLE_TREINAMENTOS;

-- Criando a tebela de usuarios
CREATE TABLE if not exists usuarios (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    nome				VARCHAR(255) NOT NULL,
    email				VARCHAR(255) UNIQUE NOT NULL,
    senha				VARCHAR(255) NOT NULL,
    tipo				ENUM('admin', 'ft', 'mt') NOT NULL DEFAULT 'mt',
    data_criacao		DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao	DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Usuarios de teste (a senha é 123456)
INSERT INTO usuarios (nome, email, senha, tipo) VALUES
('Administrador', 'admin@produtos.com', '$2a$10$BLAcJu1irAzg06WbtoLoPe0RA.hkfZ0oJ25KYARPkHWRweJuWBALy', 'admin'),
('FT', 'joao@email.com', '$2a$10$BLAcJu1irAzg06WbtoLoPe0RA.hkfZ0oJ25KYARPkHWRweJuWBALy', 'ft'),
('MT', 'maria@email.com', '$2a$10$BLAcJu1irAzg06WbtoLoPe0RA.hkfZ0oJ25KYARPkHWRweJuWBALy', 'mt');

