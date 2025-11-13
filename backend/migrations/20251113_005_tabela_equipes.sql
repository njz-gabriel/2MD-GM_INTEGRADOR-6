USE CONTROLE_TREINAMENTOS;

CREATE TABLE equipes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT NOT NULL,
    icone VARCHAR(500)
); 

SHOW TABLES;

INSERT INTO equipes (nome, descricao, icone)
VALUES 
('TDO - Ferramentaria', 'Equipe de desenvolvimento de ferramentas especiais', 'bi bi-tools'),
('Pintura', 'Equipe responsavel pela pintura', 'bi bi-brush'),
('GA - Gestão de Almoxarifado/Geral', 'Equipe responsável pela linha de montagem', 'bi bi-car-front-fill'),
('Manutenção', 'Equipe responsável pela manutenção geral da fábrica', 'bi bi-wrench-adjustable'),
('RH - Recursos Humanos', 'Equipe responsável por cuidar dos funcionários da empresa', 'bi bi-person-arms-up'),
('IT - Tecnologia da Informação', 'Equipe responsável pelo suporte tecnológico a toda a empresa', 'bi bi-pc-display-horizontal'),
('Estamparia', 'Equipe responsável por modelar chapas de aço (ou alumínio) para formar as peças da carroceria', 'bi bi-car-front'),
('Engenharia', 'Equipe responsável por projetar, desenvolver e melhorar os veículos e os processos de produção', 'bi bi-gear-wide-connected'),
('Polímeros', 'Equipe responsável pela engenharia de materiais e produção', 'bi bi-flask');

SELECT * FROM equipes;