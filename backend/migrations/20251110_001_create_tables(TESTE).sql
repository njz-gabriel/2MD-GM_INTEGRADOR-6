DROP DATABASE IF EXISTS RASCUNHO;
CREATE DATABASE RASCUNHO;
USE RASCUNHO;

CREATE TABLE if not exists usuarios (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    nome				VARCHAR(255) NOT NULL,
    email				VARCHAR(255) UNIQUE NOT NULL,
    senha				VARCHAR(255) NOT NULL,
    tipo				ENUM('admin', 'ft', 'mt') NOT NULL DEFAULT 'mt',
    data_criacao		DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao	DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE if not exists treinamentos (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    nome				VARCHAR(255) NOT NULL,
    descricao			VARCHAR(255) UNIQUE NOT NULL,
    data_criacao		DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao	DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    numSessoes			INT,
    idCriador			INT,
    
    FOREIGN KEY (idCriador) REFERENCES usuarios(id) ON DELETE SET NULL
);

CREATE TABLE if not exists sessoes (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    idTreinamento		INT,
    dia					DATETIME,
    
    FOREIGN KEY (idTreinamento) REFERENCES treinamentos(id) ON DELETE CASCADE
);

CREATE TABLE if not exists participacoes (
	idSessao			INT,
    idParticipante		INT,
    PRIMARY KEY (idSessao, idParticipante),
    
    FOREIGN KEY (idSessao) REFERENCES sessoes(id) ON DELETE CASCADE,
    FOREIGN KEY (idParticipante) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE if not exists certificados (
	idUsuario		INT ,
    idTreinamento	INT,
    PRIMARY KEY (idUsuario, idTreinamento),
    
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (idTreinamento) REFERENCES treinamentos(id) ON DELETE CASCADE
);






/*
CRIAR E ATRIBUIR PERMISSÃO A USUÁRIO
	create user USUARIO identified by 'ABC123xyz';	-- Cria USUARIO
	grant PROCEDIMENTO on BANCO.TABELA to USUARIO	-- Permite que o USUARIO realize o PROCEDIMENTO na TABELA do BANCO
*/