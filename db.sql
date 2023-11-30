CREATE TABLE cliente(
	id_client SERIAL PRIMARY KEY,
	email VARCHAR(56) UNIQUE NOT NULL,
	nome VARCHAR(60) NOT NULL,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE cenarios(
	id_cenario SERIAL PRIMARY KEY,
	valorizacao_imovel DECIMAL(16,2) NOT NULL,
	taxa_financiamento DECIMAL(16,2) NOT NULL

);

INSERT INTO cenarios (valorizacao_imovel, taxa_financiamento) VALUES (8.50, 10.50)
INSERT INTO cenarios (valorizacao_imovel, taxa_financiamento) VALUES (15, 8)
INSERT INTO cenarios (valorizacao_imovel, taxa_financiamento) VALUES (6, 13)

CREATE TABLE historico(
	id_historico SERIAL PRIMARY KEY,

	valor_compra DECIMAL(16,2) NOT NULL,
	valor_entrada DECIMAL(16,2) NOT NULL,
	tempo INTEGER not null,
	valor_aluguel DECIMAL(16,2) NOT NULL,


	id_cliente INTEGER NOT NULL,
	id_cenario INTEGER NOT NULL,

	CONSTRAINT id_client FOREIGN KEY
	(id_cliente) REFERENCES cliente(id_client),
	CONSTRAINT id_cenario FOREIGN KEY
	(id_cenario) REFERENCES cenarios(id_cenario)
);
