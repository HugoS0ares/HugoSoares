-- Trabalho de Hugo Soares E João Almeida


DROP DATABASE IF EXISTS `RentaAqui`;
CREATE DATABASE IF NOT EXISTS `RentaAqui`;
USE `RentaAqui`;

-- -------  TABELAS -------
-- FASE 1: Tabelas sem dependências (Sem FKs)

CREATE TABLE Cliente (
    Id_Cliente Int Primary Key Auto_Increment,
    Nome Varchar(100) NOT NULL,
    Nif VarChar(15),
    Contacto VarChar(20),
    Email VarChar(100),
    Data_Nascimento DATE,
    Carta_Conducao Varchar(20),
    Data_Validade_Carta DATE,
    Morada Varchar(200)
);

CREATE TABLE Marca (
    Id_Marca INT Primary Key Auto_Increment,
    Nome_Marca Varchar(100) NOT NULL,
    Pais_Origem VarChar(100)
);

CREATE TABLE Categoria_Veiculo (
    Id_Categoria INT Primary Key Auto_Increment,
    Designacao VarChar(50) NOT NULL,
    Descricao VarChar(200),
    Preco_dia Decimal(6,2)
);

CREATE TABLE Cargo_Funcionario (
    Id_Cargo INT Primary Key Auto_Increment,
    Designacao VarChar(50) NOT NULL,
    Descricao VarChar(200)
);

CREATE TABLE Parametro_Validacao (
    Id_Parametro INT Primary Key Auto_Increment,
    Nome_Parametro VARCHAR(100) NOT NULL,
    Tipo_Dado VARCHAR(20),
    Obrigatorio BOOLEAN,
    Ativo BOOLEAN
);

-- FASE 2: Tabelas que dependem da Fase 1

CREATE TABLE Modelo (
    Id_Modelo INT Primary Key Auto_Increment,
    Nome_Modelo VarChar(100) NOT NULL,
    Ano INT,
    Id_Marca INT,
    Id_Categoria INT,
    FOREIGN KEY (Id_Marca) REFERENCES Marca(Id_Marca),
    FOREIGN KEY (Id_Categoria) REFERENCES Categoria_Veiculo(Id_Categoria)
);

CREATE TABLE Funcionario (
    Id_Funcionario INT Primary Key Auto_Increment,
    Nome VarChar(100) NOT NULL,
    Nif VarChar(15),
    Contacto VarChar(20),
    Email VarChar(100),
    Data_Admissao DATE,
    Salario Decimal(10,2),
    Id_Cargo INT,
    FOREIGN KEY (Id_Cargo) REFERENCES Cargo_Funcionario(Id_Cargo)
);

-- FASE 3: Tabelas que dependem da Fase 2

CREATE TABLE Veiculo (
    Id_Veiculo INT Primary Key Auto_Increment,
    Matricula VarChar(20) NOT NULL,
    Id_Modelo INT,
    Cor VarChar(50),
    Quilometragem INT,
    Ano_Matricula INT,
    Estado VarChar(20),
    Data_Aquisicao DATE,
    FOREIGN KEY (Id_Modelo) REFERENCES Modelo(Id_Modelo)
);

-- FASE 4: Tabelas que dependem da Fase 3

CREATE TABLE Manutencao (
    Id_Manutencao INT Primary Key Auto_Increment,
    Id_Veiculo INT,
    Tipo_Manutencao VarChar(100),
    Data_Entrada DATE,
    Data_Saida DATE,
    Custo Decimal(10,2),
    Oficina VarChar(100),
    Descricao VarChar(200),
    Quilometragem_Manutencao INT,
    FOREIGN KEY (Id_Veiculo) REFERENCES Veiculo(Id_Veiculo)
);

CREATE TABLE Seguro (
    Id_Seguro INT Primary Key Auto_Increment,
    Id_Veiculo INT,
    Seguradora VarChar(100),
    Numero_Apolice VarChar(50),
    Data_Inicio DATE,
    Data_Fim DATE,
    Valor_Premio Decimal(10,2),
    Tipo_Cobertura VarChar(100),
    FOREIGN KEY (Id_Veiculo) REFERENCES Veiculo(Id_Veiculo)
);

CREATE TABLE Aluguer (
    Id_Aluguer INT Primary Key Auto_Increment,
    Id_Cliente INT,
    Id_Veiculo INT,
    Id_Funcionario INT,
    Data_Inicio DATETIME,
    Data_Fim_Prevista DATETIME,
    Data_Fim_Real DATETIME,
    Valor_Total Decimal(10,2),
    Estado VarChar(20),
    Observacoes VarChar(200),
    FOREIGN KEY (Id_Cliente) REFERENCES Cliente(Id_Cliente),
    FOREIGN KEY (Id_Veiculo) REFERENCES Veiculo(Id_Veiculo),
    FOREIGN KEY (Id_Funcionario) REFERENCES Funcionario(Id_Funcionario)
);

-- FASE 5: Tabelas que dependem da Fase 4 (A Validação Configurável)

CREATE TABLE Registo_Validacao_Levantamento (
    Id_Registo_Levantamento INT Primary Key Auto_Increment,
    Id_Aluguer INT,
    Id_Parametro INT,
    Valor_Registado VarChar(100),
    Observacoes VarChar(200),
    Data_Hora_Registo DATETIME,
    Id_Funcionario_Validador INT,
    FOREIGN KEY (Id_Aluguer) REFERENCES Aluguer(Id_Aluguer),
    FOREIGN KEY (Id_Parametro) REFERENCES Parametro_Validacao(Id_Parametro),
    FOREIGN KEY (Id_Funcionario_Validador) REFERENCES Funcionario(Id_Funcionario)
);

CREATE TABLE Registo_Validacao_Entrega (
    Id_Registo_Entrega INT Primary Key Auto_Increment,
    Id_Aluguer INT,
    Id_Parametro INT,
    Valor_Registado VarChar(100),
    Observacoes VarChar(200),
    Data_Hora_Registo DATETIME,
    Id_Funcionario_Validador INT,
    Danos_Detetados BOOLEAN,
    FOREIGN KEY (Id_Aluguer) REFERENCES Aluguer(Id_Aluguer),
    FOREIGN KEY (Id_Parametro) REFERENCES Parametro_Validacao(Id_Parametro),
    FOREIGN KEY (Id_Funcionario_Validador) REFERENCES Funcionario(Id_Funcionario)
);


-- ==========================================
-- Parte 2: FASE 1: Inserir dados nas tabelas base
-- ==========================================

INSERT INTO Marca (Nome_Marca, Pais_Origem) VALUES
('Renault', 'França'),
('Volkswagen', 'Alemanha'),
('Toyota', 'Japão'),
('Mercedes', 'Alemanha'),
('Honda','Japão'),
('Kia','Coreia do Sul'),
('Audi','Alemanha'),
('Nissan','Japão'),
('Fiat','Itália'),
('BMW','Alemanha'),
('Ford','EUA'),
('Seat','Espanha'),
('Volvo','Suécia'),
('Ferrari','Itália'),
('Tesla','EUA'),
('Mini','Reino Unido');

INSERT INTO Categoria_Veiculo (Designacao, Descricao, Preco_dia) VALUES
('Económico / Citadino', 'Veículo de dimensões reduzidas, consumo baixo, ideal para o trânsito diário e fácil estacionamento urbano.', 55.00),
('Utilitário / Compacto', 'Viatura versátil e equilibrada, oferecendo um bom compromisso entre espaço interior, conforto e economia de combustível.', 65.00),
('Familiar / Station Wagon', 'Viatura espaçosa com bagageira de grande capacidade, perfeita para viagens longas em família e transporte de bagagem.', 95.00),
('Monovolume (7 a 9 lugares)', 'Veículo de grande capacidade destinado a grupos grandes ou famílias numerosas, focando no espaço e conforto dos passageiros.', 100.00),
('SUV Compacto', 'Veículo com posição de condução elevada e aspeto aventureiro, ideal para condução mista (cidade e estrada).', 120.00),
('SUV Premium', 'Utilitário desportivo de grande porte, combinando tração avançada, motor potente e acabamentos de luxo.', 200.00),
('Descapotável', 'Veículo com tejadilho retrátil, ideal para passeios em dias de sol e zonas costeiras.', 250.00),
('Desportivo', 'Viatura de alta performance, com motorização potente, aerodinâmica desportiva e condução dinâmica.', 500.00),
('Elétrico (EV)', 'Veículo 100% elétrico, com zero emissões locais, condução silenciosa e acesso a zonas de emissões reduzidas.', 99.99),
('Comercial / Furgão', 'Viatura de mercadorias com apenas 2 ou 3 lugares, otimizada para o transporte de cargas, mudanças ou equipamentos.', 100.00),
('Premium / Executivo', 'Viatura topo de gama, focada no máximo conforto, tecnologia de ponta e representação corporativa.', 1000.00);

INSERT INTO Cargo_Funcionario (Designacao, Descricao) VALUES
('Assistente de Atendimento / Rececionista', 'Atendimento presencial ao público, gestão de reservas, elaboração de contratos e procedimentos de check-in/check-out de viaturas.'),
('Gestor de Frota', 'Coordenação da frota, planeamento de manutenções, gestão de sinistros, seguros e controlo de disponibilidade diária.'),
('Preparador de Veículos', 'Responsável pela lavagem, limpeza interior, higienização e verificação de níveis (água, óleo) antes da entrega ao cliente.'),
('Mecânico Auto', 'Realização de diagnósticos, manutenções preventivas e reparações rápidas na frota da empresa.'),
('Motorista / Transfer', 'Deslocação de viaturas entre diferentes estações (drop-off) e serviço de transporte de clientes (shuttle) para aeroportos e hotéis.'),
('Assistente Administrativo e Financeiro', 'Apoio à faturação, controlo de pagamentos, gestão de multas de trânsito dos clientes e expediente geral.'),
('Comercial Corporate (B2B)', 'Prospeção de mercado e gestão de contratos com clientes empresariais (alugueres de longa duração e frotas corporativas).'),
('Gerente de Agência', 'Supervisão de toda a equipa, gestão global da agência, controlo de faturação e garantia da qualidade do serviço ao cliente.');

INSERT INTO Parametro_Validacao (Nome_Parametro, Tipo_Dado, Obrigatorio, Ativo) VALUES
('Quilometragem', 'Número', TRUE, TRUE),
('Nível de Combustível / Bateria', 'Percentagem', TRUE, TRUE),
('Limpeza Interior e Odor (Ex: Tabaco)', 'Texto', TRUE, TRUE),
('Limpeza Exterior (Para deteção de danos)', 'Texto', TRUE, TRUE),
('Riscos e Danos na Chaparia/Pintura', 'Texto', FALSE, TRUE),
('Danos nos Vidros e Óticas', 'Texto', FALSE, TRUE),
('Estado e Danos nos Pneus / Jantes', 'Texto', TRUE, TRUE),
('Documentos da Viatura (DUA, Seguro)', 'Booleano', TRUE, TRUE),
('Kit de Segurança (Colete e Triângulo)', 'Booleano', TRUE, TRUE),
('Pneu Suplente / Kit Anti-Furo e Macaco', 'Booleano', TRUE, TRUE),
('Identificador Via Verde (Portagens)', 'Booleano', FALSE, TRUE),
('Cabos de Carregamento (Para elétricos)', 'Booleano', FALSE, TRUE),
('Acessórios Extra (GPS, Cadeira Bebé, etc)', 'Texto', FALSE, TRUE);

INSERT INTO Cliente (Nome, Nif, Contacto, Email, Data_Nascimento, Carta_Conducao, Data_Validade_Carta, Morada) VALUES
('João Silva', '123456789', '912345678', 'joao.silva@email.pt', '1985-05-15', 'L-12345', '2030-05-15', 'Rua das Flores, 12, Porto'),
('Ana Rita Santos', '987654321', '961234567', 'ana.santos@email.pt', '1992-10-20', 'L-98765', '2028-10-20', 'Av. da Liberdade, 45, Lisboa'),
('Carlos Pereira', '234567891', '931234567', 'carlos.pereira@email.pt', '1978-03-10', 'L-23456', '2025-03-10', 'Praça da República, 3, Coimbra'),
('Marta Gomes', '345678912', '921234567', 'marta.gomes@email.pt', '1995-12-05', 'L-34567', '2032-12-05', 'Rua de Santa Catarina, 88, Porto'),
('Tiago Fernandes', '213456789', '913456789', 'tiago.fernandes@email.pt', '1988-07-22', 'L-45678', '2031-07-22', 'Rua Augusta, 10, Lisboa'),
('Beatriz Costa', '223456780', '962345678', 'beatriz.costa@email.pt', '1990-02-14', 'L-56789', '2029-02-14', 'Av. Boavista, 200, Porto'),
('Rui Almeida', '233456781', '933456789', 'rui.almeida@email.pt', '1975-11-30', 'L-67890', '2026-11-30', 'Rua Direita, 5, Faro'),
('Inês Martins', '243456782', '924567890', 'ines.martins@email.pt', '2000-01-08', 'L-78901', '2035-01-08', 'Largo da Sé, 2, Braga'),
('Pedro Rocha', '253456783', '915678901', 'pedro.rocha@email.pt', '1982-09-18', 'L-89012', '2027-09-18', 'Rua D. Pedro V, 14, Aveiro'),
('Sara Rodrigues', '263456784', '966789012', 'sara.rodrigues@email.pt', '1993-04-25', 'L-90123', '2033-04-25', 'Rua Garrett, 33, Lisboa'),
('Miguel Sousa', '273456785', '937890123', 'miguel.sousa@email.pt', '1980-06-12', 'L-01234', '2030-06-12', 'Av. dos Aliados, 150, Porto'),
('Joana Carvalho', '283456786', '928901234', 'joana.carvalho@email.pt', '1998-08-05', 'L-12346', '2034-08-05', 'Praceta das Rosas, 7, Leiria'),
('Diogo Mendes', '293456787', '919012345', 'diogo.mendes@email.pt', '1987-12-21', 'L-23457', '2032-12-21', 'Rua Formosa, 40, Viseu'),
('Catarina Pinto', '203456788', '960123456', 'catarina.pinto@email.pt', '1991-03-15', 'L-34568', '2028-03-15', 'Rua da Alegria, 99, Setúbal'),
('Bruno Ribeiro', '214567890', '931234568', 'bruno.ribeiro@email.pt', '1979-10-02', 'L-45679', '2025-10-02', 'Largo do Chiado, 1, Lisboa'),
('Sofia Neves', '224567891', '922345679', 'sofia.neves@email.pt', '1996-05-28', 'L-56780', '2031-05-28', 'Rua Mouzinho da Silveira, 20, Porto'),
('Gonçalo Teixeira', '234567892', '913456780', 'goncalo.teixeira@email.pt', '1984-01-14', 'L-67891', '2029-01-14', 'Av. Central, 55, Braga'),
('Mafalda Dias', '244567893', '964567891', 'mafalda.dias@email.pt', '1999-07-07', 'L-78902', '2036-07-07', 'Rua de São João, 12, Évora'),
('André Monteiro', '254567894', '935678902', 'andre.monteiro@email.pt', '1976-08-30', 'L-89013', '2026-08-30', 'Rua dos Mercadores, 8, Coimbra'),
('Leonor Ferreira', '264567895', '926789013', 'leonor.ferreira@email.pt', '1994-11-11', 'L-90124', '2034-11-11', 'Largo da Portagem, 3, Coimbra'),
('Luís Moreira', '274567896', '917890124', 'luis.moreira@email.pt', '1981-02-09', 'L-01235', '2031-02-09', 'Rua 25 de Abril, 45, Faro'),
('Mariana Lima', '284567897', '968901235', 'mariana.lima@email.pt', '1997-09-24', 'L-12347', '2033-09-24', 'Av. Luísa Todi, 120, Setúbal'),
('Hugo Batista', '294567898', '939012346', 'hugo.batista@email.pt', '1986-04-16', 'L-23458', '2030-04-16', 'Praça Marquês de Pombal, 10, Lisboa'),
('Diana Machado', '204567899', '920123457', 'diana.machado@email.pt', '1990-12-03', 'L-34569', '2028-12-03', 'Rua da Oura, 77, Albufeira'),
('Tomás Alves', '215678901', '911234569', 'tomas.alves@email.pt', '1989-06-19', 'L-45670', '2032-06-19', 'Rua Direita, 22, Viseu'),
('Filipa Castro', '225678902', '962345680', 'filipa.castro@email.pt', '1995-01-27', 'L-56781', '2035-01-27', 'Av. Marginal, 100, Cascais'),
('Nuno Soares', '235678903', '933456781', 'nuno.soares@email.pt', '1977-03-08', 'L-67892', '2027-03-08', 'Rua do Comércio, 15, Portimão'),
('Clara Correia', '245678904', '924567892', 'clara.correia@email.pt', '2001-10-14', 'L-78903', '2037-10-14', 'Praça da fruta, 4, Caldas da Rainha'),
('Filipe Borges', '255678905', '915678903', 'filipe.borges@email.pt', '1983-05-02', 'L-89014', '2029-05-02', 'Rua Nova, 50, Guimarães'),
('Rita Marques', '265678906', '966789014', 'rita.marques@email.pt', '1992-08-17', 'L-90125', '2033-08-17', 'Av. 5 de Outubro, 30, Lisboa'),
('Vítor Pires', '275678907', '937890125', 'vitor.pires@email.pt', '1974-12-10', 'L-01236', '2025-12-10', 'Rua Santa Catarina, 120, Porto'),
('Helena Gouveia', '285678908', '928901236', 'helena.gouveia@email.pt', '1988-02-22', 'L-12348', '2031-02-22', 'Largo São Domingos, 8, Viana do Castelo'),
('Ricardo Faria', '295678909', '919012347', 'ricardo.faria@email.pt', '1991-07-05', 'L-23459', '2030-07-05', 'Rua Direita, 90, Ponta Delgada'),
('Patrícia Nunes', '205678910', '960123458', 'patricia.nunes@email.pt', '1996-11-29', 'L-34560', '2034-11-29', 'Av. do Mar, 15, Funchal'),
('Artur Vieira', '216789012', '931234570', 'artur.vieira@email.pt', '1980-09-14', 'L-45671', '2028-09-14', 'Rua da Madalena, 25, Lisboa'),
('Daniela Branco', '226789013', '922345681', 'daniela.branco@email.pt', '1994-04-03', 'L-56782', '2035-04-03', 'Praceta do Sol, 11, Amadora'),
('Eduardo Azevedo', '236789014', '913456782', 'eduardo.azevedo@email.pt', '1985-01-20', 'L-67893', '2031-01-20', 'Rua Conde de Redondo, 34, Lisboa'),
('Silvia Coelho', '246789015', '964567893', 'silvia.coelho@email.pt', '1989-10-09', 'L-78904', '2032-10-09', 'Rua de Cedofeita, 500, Porto'),
('Bernardo Lourenço', '256789016', '935678904', 'bernardo.lourenco@email.pt', '1998-05-18', 'L-89015', '2036-05-18', 'Av. 24 de Julho, 80, Lisboa'),
('Laura Martins', '266789017', '926789015', 'laura.martins@email.pt', '2002-12-12', 'L-90126', '2038-12-12', 'Rua das Dunas, 2, Figueira da Foz'),
('Fábio Tavares', '276789018', '917890126', 'fabio.tavares@email.pt', '1987-03-25', 'L-01237', '2030-03-25', 'Rua da República, 100, Santarém'),
('Alice Reis', '286789019', '968901237', 'alice.reis@email.pt', '1993-08-08', 'L-12349', '2033-08-08', 'Largo da Estação, 5, Entroncamento'),
('Nelson Simões', '296789020', '939012348', 'nelson.simoes@email.pt', '1978-06-14', 'L-23450', '2026-06-14', 'Rua do Brasil, 45, Coimbra'),
('Teresa Fonseca', '206789021', '920123459', 'teresa.fonseca@email.pt', '1982-11-01', 'L-34561', '2029-11-01', 'Rua da Misericórdia, 70, Penafiel'),
('Rafael Mota', '217890123', '911234571', 'rafael.mota@email.pt', '1997-02-19', 'L-45672', '2035-02-19', 'Av. da República, 90, Matosinhos'),
('Carolina Freitas', '227890124', '962345682', 'carolina.freitas@email.pt', '2000-09-07', 'L-56783', '2037-09-07', 'Rua Diogo Cão, 14, Vila Real'),
('Sérgio cardoso', '237890125', '933456783', 'sergio.cardoso@email.pt', '1984-05-23', 'L-67894', '2031-05-23', 'Praceta das Camélias, 9, Odivelas'),
('Joana Lopes', '247890126', '924567894', 'joana.lopes@email.pt', '1991-12-11', 'L-78905', '2034-12-11', 'Largo do Município, 2, Gondomar'),
('Mário Viana', '257890127', '915678905', 'mario.viana@email.pt', '1975-04-29', 'L-89016', '2025-04-29', 'Rua Visconde da Luz, 18, Cascais'),
('Camila Antunes', '267890128', '966789016', 'camila.antunes@email.pt', '1999-01-16', 'L-90127', '2036-01-16', 'Av. D. Nuno Álvares Pereira, 60, Almada'),
('David Pinho', '277890129', '937890127', 'david.pinho@email.pt', '1986-08-04', 'L-01238', '2030-08-04', 'Rua de Baixo, 33, Ovar'),
('Carla Mendes', '287890130', '928901238', 'carla.mendes@email.pt', '1992-03-21', 'L-12340', '2033-03-21', 'Praceta do Infante, 12, Lagos'),
('António Guedes', '297890131', '919012349', 'antonio.guedes@email.pt', '1973-10-28', 'L-23451', '2024-10-28', 'Rua de Alcamim, 5, Elvas'),
('Irene Bastos', '207890132', '960123460', 'irene.bastos@email.pt', '1988-06-09', 'L-34562', '2032-06-09', 'Av. da Estação, 22, Trofa'),
('Ruben Almeida', '218901234', '931234572', 'ruben.almeida@email.pt', '1995-12-30', 'L-45673', '2035-12-30', 'Rua das Tílias, 4, Sintra'),
('Susana Maciel', '228901235', '922345683', 'susana.maciel@email.pt', '1981-07-17', 'L-56784', '2030-07-17', 'Largo do Souto, 7, Maia'),
('Alexandre Cruz', '238901236', '913456784', 'alexandre.cruz@email.pt', '1990-02-05', 'L-67895', '2033-02-05', 'Rua Gago Coutinho, 45, Seixal'),
('Eva Monteiro', '248901237', '964567895', 'eva.monteiro@email.pt', '1998-09-22', 'L-78906', '2037-09-22', 'Av. Vasco da Gama, 110, Sines'),
('Marco Figueiredo', '258901238', '935678906', 'marco.figueiredo@email.pt', '1979-04-10', 'L-89017', '2027-04-10', 'Rua da Batalha, 18, Tondela'),
('Vanda Rito', '268901239', '926789017', 'vanda.rito@email.pt', '1985-11-26', 'L-90128', '2031-11-26', 'Rua Cândido dos Reis, 88, Vila Nova de Gaia'),
('Pedro Garcia', '278901240', '917890128', 'pedro.garcia@email.pt', '1993-01-04', 'L-01239', '2034-01-04', 'Praceta Central, 15, Loures'),
('Margarida Paiva', '288901241', '968901239', 'margarida.paiva@email.pt', '1987-08-13', 'L-12341', '2030-08-13', 'Av. de Ceuta, 200, Lisboa'),
('Carlos Barros', '298901242', '939012350', 'carlos.barros@email.pt', '1976-03-31', 'L-23452', '2026-03-31', 'Largo da Igreja, 2, Lamego'),
('Sónia Esteves', '208901243', '920123461', 'sonia.esteves@email.pt', '1994-10-18', 'L-34563', '2034-10-18', 'Rua dos Bombeiros, 40, Bragança'),
('Igor Martins', '219012345', '911234573', 'igor.martins@email.pt', '1991-05-06', 'L-45674', '2032-05-06', 'Av. Atlântica, 75, Póvoa de Varzim'),
('Jéssica Leite', '229012346', '962345684', 'jessica.leite@email.pt', '2001-12-25', 'L-56785', '2038-12-25', 'Rua das Oliveiras, 14, Beja'),
('Flávio Lemos', '239012347', '933456785', 'flavio.lemos@email.pt', '1983-07-12', 'L-67896', '2029-07-12', 'Largo 1º de Dezembro, 6, Castelo Branco'),
('Bárbara Frias', '249012348', '924567896', 'barbara.frias@email.pt', '1996-02-28', 'L-78907', '2036-02-28', 'Av. Nuno Álvares, 55, Guarda'),
('Samuel Amaro', '259012349', '915678907', 'samuel.amaro@email.pt', '1989-09-15', 'L-89018', '2031-09-15', 'Rua das Gaivotas, 21, Peniche'),
('Marisa Valente', '269012350', '966789018', 'marisa.valente@email.pt', '1982-04-03', 'L-90129', '2028-04-03', 'Rua Principal, 110, Tomar'),
('Tiago Lira', '279012351', '937890129', 'tiago.lira@email.pt', '1997-11-20', 'L-01230', '2037-11-20', 'Av. Emídio Navarro, 30, Coimbra'),
('Sofia Guimarães', '289012352', '928901240', 'sofia.guimaraes@email.pt', '1990-06-08', 'L-12342', '2032-06-08', 'Largo São Francisco, 5, Faro'),
('Rui Meireles', '299012353', '919012351', 'rui.meireles@email.pt', '1975-01-24', 'L-23453', '2026-01-24', 'Rua das Taipas, 12, Porto'),
('Lara Salgado', '209012354', '960123462', 'lara.salgado@email.pt', '1999-08-11', 'L-34564', '2036-08-11', 'Av. Combatentes, 45, Viana do Castelo'),
('Paulo Mourão', '210123456', '931234574', 'paulo.mourao@email.pt', '1986-03-29', 'L-45675', '2031-03-29', 'Praceta Antero de Quental, 3, Ponta Delgada'),
('Cátia Pacheco', '220123457', '922345685', 'catia.pacheco@email.pt', '1993-10-16', 'L-56786', '2034-10-16', 'Rua da Alegria, 88, Funchal'),
('Júlio Sequeira', '230123458', '913456786', 'julio.sequeira@email.pt', '1978-05-04', 'L-67897', '2027-05-04', 'Rua das Flores, 7, Torres Novas'),
('Raquel Bessa', '240123459', '964567897', 'raquel.bessa@email.pt', '1995-12-21', 'L-78908', '2035-12-21', 'Av. D. João II, 150, Parque das Nações, Lisboa'),
('Ivan Teles', '250123460', '935678908', 'ivan.teles@email.pt', '1984-07-09', 'L-89019', '2030-07-09', 'Rua Serpa Pinto, 24, Évora'),
('Melissa Matos', '260123461', '926789019', 'melissa.matos@email.pt', '2000-02-25', 'L-90120', '2038-02-25', 'Largo da Estação, 1, Aveiro');

-- FASE 2: Inserir Modelos e Funcionários


-- --------- MODELOS DOS CARROS -----------


INSERT INTO Modelo (Nome_Modelo, Ano, Id_Marca, Id_Categoria) VALUES
-- RENAULT (Id_Marca: 1)
('Clio', 2022, 1, 1),                 -- 1: Económico/Citadino
('Megane Sport Tourer', 2021, 1, 3),  -- 3: Familiar
('Zoe', 2023, 1, 9),                  -- 9: Elétrico
('Kangoo', 2020, 1, 10),              -- 10: Comercial/Furgão

-- VOLKSWAGEN (Id_Marca: 2)
('Polo', 2022, 2, 2),                 -- 2: Utilitário/Compacto
('Golf Variant', 2021, 2, 3),         -- 3: Familiar
('T-Roc', 2023, 2, 5),                -- 5: SUV Compacto
('Transporter', 2019, 2, 10),         -- 10: Comercial/Furgão

-- TOYOTA (Id_Marca: 3)
('Yaris', 2023, 3, 1),                -- 1: Económico/Citadino
('Corolla Touring', 2022, 3, 3),      -- 3: Familiar
('RAV4', 2023, 3, 5),                 -- 5: SUV Compacto

-- MERCEDES (Id_Marca: 4)
('Classe C', 2022, 4, 11),            -- 11: Premium/Executivo
('GLE', 2023, 4, 6),                  -- 6: SUV Premium
('Vito', 2021, 4, 4),                 -- 4: Monovolume (7 a 9 lugares)

-- HONDA (Id_Marca: 5)
('Civic', 2022, 5, 2),                -- 2: Utilitário/Compacto
('HR-V', 2023, 5, 5),                 -- 5: SUV Compacto

-- KIA (Id_Marca: 6)
('Sportage', 2022, 6, 5),             -- 5: SUV Compacto
('EV6', 2023, 6, 9),                  -- 9: Elétrico

-- AUDI (Id_Marca: 7)
('A4 Avant', 2021, 7, 3),             -- 3: Familiar
('Q7', 2022, 7, 6),                   -- 6: SUV Premium
('R8', 2020, 7, 8),                   -- 8: Desportivo

-- NISSAN (Id_Marca: 8)
('Qashqai', 2023, 8, 5),              -- 5: SUV Compacto
('Leaf', 2022, 8, 9),                 -- 9: Elétrico

-- FIAT (Id_Marca: 9)
('500', 2023, 9, 1),                  -- 1: Económico/Citadino
('Ducato', 2021, 9, 10),              -- 10: Comercial/Furgão

-- BMW (Id_Marca: 10)
('Série 5', 2022, 10, 11),            -- 11: Premium/Executivo
('Z4', 2023, 10, 7),                  -- 7: Descapotável
('X5', 2022, 10, 6),                  -- 6: SUV Premium

-- FORD (Id_Marca: 11)
('Focus', 2021, 11, 2),               -- 2: Utilitário/Compacto
('Galaxy', 2020, 11, 4),              -- 4: Monovolume (7 a 9 lugares)
('Mustang', 2023, 11, 8),             -- 8: Desportivo

-- SEAT (Id_Marca: 12)
('Ibiza', 2022, 12, 1),               -- 1: Económico/Citadino
('Leon', 2021, 12, 2),                -- 2: Utilitário/Compacto

-- VOLVO (Id_Marca: 13)
('V60', 2022, 13, 3),                 -- 3: Familiar
('XC90', 2023, 13, 6),                -- 6: SUV Premium

-- FERRARI (Id_Marca: 14)
('F8 Tributo', 2021, 14, 8),          -- 8: Desportivo
('Portofino', 2020, 14, 7),           -- 7: Descapotável

-- TESLA (Id_Marca: 15)
('Model 3', 2023, 15, 9),             -- 9: Elétrico
('Model X', 2022, 15, 6),             -- 6: SUV Premium

-- MINI (Id_Marca: 16)
('Cooper S', 2021, 16, 2),            -- 2: Utilitário/Compacto
('Cabrio', 2023, 16, 7);              -- 7: Descapotável


-- ------   Funcionários.  ----------


INSERT INTO Funcionario (Nome, Nif, Contacto, Email, Data_Admissao, Salario, Id_Cargo) VALUES
-- Assistentes de Atendimento / Rececionistas (Id_Cargo = 1)
('Rui Costa', '111222333', '910000111', 'rui.costa@rentaaqui.pt', '2020-01-15', 1100.00, 1),
('Sofia Almeida', '444555666', '920000222', 'sofia.almeida@rentaaqui.pt', '2021-06-01', 1150.00, 1),
('Inês Lourenço', '222333444', '930000444', 'ines.lourenco@rentaaqui.pt', '2023-02-10', 1050.00, 1),
('Pedro Machado', '333444555', '960000555', 'pedro.machado@rentaaqui.pt', '2022-11-05', 1050.00, 1),

-- Gestores de Frota (Id_Cargo = 2)
('Bruno Gomes', '555666777', '910000666', 'bruno.gomes@rentaaqui.pt', '2019-08-20', 1600.00, 2),

-- Preparadores de Veículos (Id_Cargo = 3)
('Carlos Santos', '666777888', '920000777', 'carlos.santos@rentaaqui.pt', '2023-05-15', 950.00, 3),
('Tiago Silva', '777888111', '930000888', 'tiago.silva@rentaaqui.pt', '2023-06-01', 950.00, 3),

-- Mecânicos Auto (Id_Cargo = 4)
('Jorge Moreira', '888999222', '960000999', 'jorge.moreira@rentaaqui.pt', '2018-04-12', 1350.00, 4),
('Ricardo Neves', '999111333', '910001111', 'ricardo.neves@rentaaqui.pt', '2021-09-01', 1300.00, 4),

-- Motoristas / Transfer (Id_Cargo = 5)
('João Sousa', '123123123', '920002222', 'joao.sousa@rentaaqui.pt', '2022-03-10', 1000.00, 5),
('Nuno Ferreira', '321321321', '930003333', 'nuno.ferreira@rentaaqui.pt', '2022-07-22', 1000.00, 5),

-- Assistente Administrativo e Financeiro (Id_Cargo = 6)
('Marta Vieira', '456456456', '960004444', 'marta.vieira@rentaaqui.pt', '2020-11-15', 1250.00, 6),

-- Comercial Corporate B2B (Id_Cargo = 7)
('Ana Marques', '654654654', '910005555', 'ana.marques@rentaaqui.pt', '2019-02-01', 1500.00, 7),

-- Gerentes de Agência (Id_Cargo = 8)
('Miguel Trindade', '777888999', '930000333', 'miguel.trindade@rentaaqui.pt', '2018-03-10', 1800.00, 8),
('Diana Castro', '987987987', '960006666', 'diana.castro@rentaaqui.pt', '2017-10-05', 1950.00, 8);



-- FASE 3: Inserir Veículos


INSERT INTO Veiculo (Matricula, Id_Modelo, Cor, Quilometragem, Ano_Matricula, Estado, Data_Aquisicao) VALUES
-- RENAULT (Modelos 1 a 4)
('AA-11-BB', 1, 'Branco', 45000, 2022, 'Disponível', '2022-02-10'),
('AT-45-ZZ', 1, 'Preto', 52000, 2022, 'Alugado', '2022-03-15'),
('77-XF-99', 2, 'Cinzento', 85000, 2021, 'Disponível', '2021-05-20'),
('BC-88-DA', 3, 'Azul', 12000, 2023, 'Disponível', '2023-04-10'),
('12-ZT-34', 4, 'Branco', 145000, 2020, 'Manutenção', '2020-09-01'),

-- VOLKSWAGEN (Modelos 5 a 8)
('BD-22-ER', 5, 'Vermelho', 31000, 2022, 'Alugado', '2022-06-12'),
('65-PL-12', 6, 'Preto', 75000, 2021, 'Disponível', '2021-11-05'),
('CJ-99-TR', 7, 'Branco', 15000, 2023, 'Alugado', '2023-01-10'),
('44-KH-88', 8, 'Branco', 180000, 2019, 'Disponível', '2019-12-01'),

-- TOYOTA (Modelos 9 a 11)
('CH-10-XX', 9, 'Azul', 5000, 2023, 'Disponível', '2023-10-15'),
('BA-33-GH', 10, 'Prata', 42000, 2022, 'Alugado', '2022-05-20'),
('CQ-55-MM', 11, 'Preto', 8000, 2023, 'Disponível', '2023-08-01'),

-- MERCEDES-BENZ (Modelos 12 a 14)
('AX-77-YU', 12, 'Cinzento Escuro', 25000, 2022, 'Manutenção', '2022-11-05'),
('DF-12-WW', 13, 'Preto', 10000, 2023, 'Disponível', '2023-09-10'),
('55-NN-44', 14, 'Preto', 110000, 2021, 'Alugado', '2021-04-18'),

-- HONDA E KIA (Modelos 15 a 18)
('AF-90-JJ', 15, 'Branco', 38000, 2022, 'Disponível', '2022-07-22'),
('CG-41-PP', 16, 'Vermelho', 6000, 2023, 'Alugado', '2023-11-02'),
('BX-25-LK', 17, 'Azul Escuro', 28000, 2022, 'Disponível', '2022-08-30'),
('DZ-88-TT', 18, 'Branco', 11000, 2023, 'Disponível', '2023-12-05'),

-- AUDI (Modelos 19 a 21)
('99-RR-11', 19, 'Cinzento', 68000, 2021, 'Disponível', '2021-03-14'),
('BB-50-QQ', 20, 'Preto', 45000, 2022, 'Alugado', '2022-01-20'),
('22-SS-77', 21, 'Amarelo', 15000, 2020, 'Manutenção', '2020-06-15'),

-- NISSAN E FIAT (Modelos 22 a 25)
('CU-34-BN', 22, 'Vermelho', 12000, 2023, 'Alugado', '2023-05-18'),
('AM-76-VB', 23, 'Branco', 55000, 2022, 'Disponível', '2022-02-28'),
('DB-11-AA', 24, 'Verde Claro', 4000, 2023, 'Disponível', '2023-10-01'),
('88-WW-33', 25, 'Branco', 135000, 2021, 'Alugado', '2021-09-10'),

-- BMW (Modelos 26 a 28)
('AL-55-CC', 26, 'Preto', 32000, 2022, 'Disponível', '2022-10-12'),
('CX-99-FF', 27, 'Branco', 9000, 2023, 'Disponível', '2023-06-25'),
('BG-44-DD', 28, 'Azul', 48000, 2022, 'Alugado', '2022-04-05'),

-- FORD E SEAT (Modelos 29 a 33)
('33-JJ-99', 29, 'Prata', 82000, 2021, 'Disponível', '2021-07-19'),
('11-HH-22', 30, 'Preto', 150000, 2020, 'Manutenção', '2020-02-20'),
('DX-77-WW', 31, 'Vermelho', 14000, 2023, 'Disponível', '2023-03-15'),
('AE-22-NN', 32, 'Branco', 29000, 2022, 'Alugado', '2022-08-08'),
('66-GG-55', 33, 'Preto', 71000, 2021, 'Disponível', '2021-10-30'),

-- VOLVO (Modelos 34 a 35)
('AN-88-MM', 34, 'Cinzento', 35000, 2022, 'Disponível', '2022-01-15'),
('CY-11-PP', 35, 'Branco', 16000, 2023, 'Alugado', '2023-07-22'),

-- FERRARI E TESLA (Modelos 36 a 39)
('44-ZZ-88', 36, 'Vermelho', 8000, 2021, 'Disponível', '2021-08-10'),
('12-AA-99', 37, 'Preto', 12000, 2020, 'Disponível', '2020-05-25'),
('DA-55-RR', 38, 'Branco', 15000, 2023, 'Alugado', '2023-02-14'),
('BH-33-LL', 39, 'Preto', 31000, 2022, 'Disponível', '2022-11-20'),

-- MINI (Modelos 40 a 41 - assumindo que foram os últimos 2 da lista anterior)
('77-FF-33', 40, 'Verde', 58000, 2021, 'Manutenção', '2021-06-05'),
('CE-22-KK', 41, 'Amarelo', 13000, 2023, 'Disponível', '2023-04-30'),

-- MAIS ALGUNS VEÍCULOS DE MODELOS POPULARES PARA FAZER VOLUME
('AA-01-XX', 1, 'Cinzento', 46000, 2022, 'Disponível', '2022-02-15'),
('AA-02-XX', 1, 'Preto', 48000, 2022, 'Alugado', '2022-02-15'),
('BB-01-YY', 9, 'Branco', 6000, 2023, 'Disponível', '2023-10-20');


-- FASE 4: Inserir Manutenções, Seguros e Alugueres


INSERT INTO Manutencao (Id_Veiculo, Tipo_Manutencao, Data_Entrada, Data_Saida, Custo, Oficina, Descricao, Quilometragem_Manutencao) VALUES
-- Manutenções Fechadas (Já concluídas)
(1, 'Revisão Anual', '2023-02-10', '2023-02-11', 150.00, 'AutoPorto', 'Mudança de óleo e filtros', 30000),
(2, 'Substituição de Pneus', '2023-08-05', '2023-08-05', 320.00, 'Pneus Rápido', 'Troca de 4 pneus (desgaste)', 45000),
(8, 'Revisão Geral (Comercial)', '2024-01-15', '2024-01-17', 410.00, 'Oficinas Estrela', 'Revisão dos 150.000km, calços e discos', 165000),
(14, 'Manutenção Preventiva', '2023-11-20', '2023-11-21', 185.00, 'Oficina Central', 'Mudança de óleo, filtros e verificação de níveis', 95000),
(18, 'Manutenção EV', '2024-03-10', '2024-03-10', 120.00, 'AutoPorto', 'Atualização de software e substituição filtro habitáculo', 10000),
(25, 'Revisão Anual', '2023-09-12', '2023-09-13', 215.00, 'Mecânica Silva', 'Revisão normal, óleo e alinhamento de direção', 120000),
(35, 'Check-up Eletrónico', '2024-02-01', '2024-02-02', 250.00, 'Volvo Service Center', 'Diagnóstico eletrónico e calibração de sensores', 15000),
(36, 'Revisão Desportivo', '2023-12-05', '2023-12-07', 1500.00, 'Ferrari Official', 'Manutenção anual programada da marca', 7000),
(38, 'Manutenção EV', '2024-04-18', '2024-04-19', 350.00, 'Tesla Service', 'Substituição da bateria de 12V e verificação de suspensão', 14000),
(42, 'Revisão 30.000km', '2023-07-22', '2023-07-23', 175.00, 'AutoPorto', 'Revisão programada da marca', 29500),

-- Manutenções Abertas (Carros que estão atualmente no estado 'Manutenção' na tabela Veiculos)
(5, 'Reparação de Motor', '2024-05-10', NULL, 1250.00, 'Oficinas Estrela', 'Substituição da junta da cabeça', 145000),
(12, 'Bate-Chapa e Pintura', '2024-05-18', NULL, 850.00, 'Garagem do Norte', 'Reparação de painel lateral e porta (toque de cliente)', 25000),
(21, 'Reparação Mecânica', '2024-05-20', NULL, 2800.00, 'Audi Service Center', 'Substituição de kit de embraiagem (Desgaste elevado)', 15000),
(30, 'Manutenção Pesada', '2024-05-22', NULL, 680.00, 'Mecânica Silva', 'Substituição da correia de distribuição e bomba de água', 150000),
(40, 'Diagnóstico Elétrico', '2024-05-23', NULL, 450.00, 'Oficinas Estrela', 'Reparação de falha no painel de instrumentos', 58000);

-- ----------------- SEGUROS ----------------------

INSERT INTO Seguro (Id_Veiculo, Seguradora, Numero_Apolice, Data_Inicio, Data_Fim, Valor_Premio, Tipo_Cobertura) VALUES
-- Veículos 1 a 10 (Mistura de Económicos e Utilitários)
(1, 'Fidelidade', 'POL-1001', '2024-01-01', '2024-12-31', 450.00, 'Danos Próprios'),
(2, 'Fidelidade', 'POL-1002', '2024-01-01', '2024-12-31', 450.00, 'Danos Próprios'),
(3, 'Allianz', 'POL-1003', '2023-05-01', '2024-04-30', 380.00, 'Terceiros + Furto'),
(4, 'Tranquilidade', 'POL-1004', '2024-01-10', '2025-01-09', 600.00, 'Danos Próprios'),
(5, 'Mapfre', 'POL-1005', '2023-11-01', '2024-10-31', 350.00, 'Terceiros'),
(6, 'Zurich', 'POL-1006', '2024-02-15', '2025-02-14', 520.00, 'Danos Próprios'),
(7, 'Fidelidade', 'POL-1007', '2024-03-01', '2025-02-28', 580.00, 'Danos Próprios'),
(8, 'Allianz', 'POL-1008', '2023-12-01', '2024-11-30', 410.00, 'Terceiros + Furto'),
(9, 'Tranquilidade', 'POL-1009', '2024-01-20', '2025-01-19', 460.00, 'Danos Próprios'),
(10, 'Mapfre', 'POL-1010', '2023-06-15', '2024-06-14', 490.00, 'Danos Próprios'),

-- Veículos 11 a 20 (SUVs, Premium e Elétricos)
(11, 'Zurich', 'POL-1011', '2024-04-01', '2025-03-31', 650.00, 'Danos Próprios (Premium)'),
(12, 'Fidelidade', 'POL-1012', '2023-11-10', '2024-11-09', 850.00, 'Danos Próprios (Premium)'),
(13, 'Allianz', 'POL-1013', '2024-05-01', '2025-04-30', 720.00, 'Danos Próprios (Premium)'),
(14, 'Tranquilidade', 'POL-1014', '2023-07-20', '2024-07-19', 540.00, 'Danos Próprios'),
(15, 'Fidelidade', 'POL-1015', '2024-01-05', '2025-01-04', 480.00, 'Danos Próprios'),
(16, 'Allianz', 'POL-1016', '2024-02-28', '2025-02-27', 430.00, 'Danos Próprios'),
(17, 'Mapfre', 'POL-1017', '2023-09-10', '2024-09-09', 510.00, 'Danos Próprios'),
(18, 'Zurich', 'POL-1018', '2024-03-15', '2025-03-14', 590.00, 'Danos Próprios (EV)'),
(19, 'Fidelidade', 'POL-1019', '2023-08-01', '2024-07-31', 610.00, 'Danos Próprios'),
(20, 'Tranquilidade', 'POL-1020', '2024-01-12', '2025-01-11', 750.00, 'Danos Próprios (Premium)'),

-- Veículos 21 a 30 (Mistura geral)
(21, 'Allianz', 'POL-1021', '2023-10-05', '2024-10-04', 500.00, 'Terceiros + Furto'),
(22, 'Zurich', 'POL-1022', '2024-04-20', '2025-04-19', 550.00, 'Danos Próprios'),
(23, 'Mapfre', 'POL-1023', '2023-12-15', '2024-12-14', 400.00, 'Terceiros'),
(24, 'Fidelidade', 'POL-1024', '2024-02-01', '2025-01-31', 420.00, 'Danos Próprios'),
(25, 'Tranquilidade', 'POL-1025', '2023-11-20', '2024-11-19', 380.00, 'Terceiros + Furto'),
(26, 'Allianz', 'POL-1026', '2024-03-10', '2025-03-09', 680.00, 'Danos Próprios (Premium)'),
(27, 'Fidelidade', 'POL-1027', '2024-01-25', '2025-01-24', 620.00, 'Danos Próprios'),
(28, 'Zurich', 'POL-1028', '2023-09-05', '2024-09-04', 590.00, 'Danos Próprios'),
(29, 'Mapfre', 'POL-1029', '2024-05-15', '2025-05-14', 450.00, 'Danos Próprios'),
(30, 'Tranquilidade', 'POL-1030', '2023-08-22', '2024-08-21', 370.00, 'Terceiros'),

-- Veículos 31 a 40 (Incluindo os super desportivos e comerciais)
(31, 'Fidelidade', 'POL-1031', '2024-02-18', '2025-02-17', 410.00, 'Danos Próprios'),
(32, 'Allianz', 'POL-1032', '2024-04-05', '2025-04-04', 440.00, 'Danos Próprios'),
(33, 'Zurich', 'POL-1033', '2023-10-10', '2024-10-09', 460.00, 'Danos Próprios'),
(34, 'Mapfre', 'POL-1034', '2024-01-30', '2025-01-29', 630.00, 'Danos Próprios'),
(35, 'Tranquilidade', 'POL-1035', '2024-03-25', '2025-03-24', 670.00, 'Danos Próprios (Premium)'),
(36, 'Allianz', 'POL-1036', '2023-11-15', '2024-11-14', 2500.00, 'Danos Próprios (Luxo/Desportivo)'),
(37, 'Fidelidade', 'POL-1037', '2024-05-10', '2025-05-09', 2100.00, 'Danos Próprios (Luxo/Desportivo)'),
(38, 'Zurich', 'POL-1038', '2024-02-05', '2025-02-04', 950.00, 'Danos Próprios (EV Premium)'),
(39, 'Tranquilidade', 'POL-1039', '2023-12-20', '2024-12-19', 900.00, 'Danos Próprios (EV Premium)'),
(40, 'Mapfre', 'POL-1040', '2024-01-15', '2025-01-14', 530.00, 'Danos Próprios'),

-- Veículos 41 a 45 (Restantes para fechar a garagem)
(41, 'Fidelidade', 'POL-1041', '2024-04-12', '2025-04-11', 480.00, 'Danos Próprios'),
(42, 'Allianz', 'POL-1042', '2023-09-30', '2024-09-29', 450.00, 'Danos Próprios'),
(43, 'Tranquilidade', 'POL-1043', '2024-03-08', '2025-03-07', 470.00, 'Danos Próprios'),
(44, 'Zurich', 'POL-1044', '2023-10-25', '2024-10-24', 410.00, 'Danos Próprios'),
(45, 'Fidelidade', 'POL-1045', '2024-02-22', '2025-02-21', 440.00, 'Danos Próprios');


-- -------------- ALUGERES -------------

INSERT INTO Aluguer (Id_Cliente, Id_Veiculo, Id_Funcionario, Data_Inicio, Data_Fim_Prevista, Data_Fim_Real, Valor_Total, Estado, Observacoes) VALUES
-- =======================================================
-- 1. Alugueres Concluídos (Carros que já foram devolvidos)
-- =======================================================
(1, 1, 1, '2024-01-10 10:00:00', '2024-01-15 10:00:00', '2024-01-15 09:30:00', 175.00, 'Concluído', 'Cliente entregou antes da hora.'),
(15, 3, 2, '2024-01-12 09:00:00', '2024-01-14 09:00:00', '2024-01-14 08:45:00', 120.00, 'Concluído', 'Sem ocorrências.'),
(32, 4, 3, '2024-01-15 14:00:00', '2024-01-20 14:00:00', '2024-01-20 14:30:00', 300.00, 'Concluído', 'Atraso de 30 min, tolerância aplicada.'),
(45, 7, 1, '2024-01-20 10:00:00', '2024-01-22 10:00:00', '2024-01-22 09:50:00', 110.00, 'Concluído', 'Tudo OK.'),
(10, 9, 4, '2024-01-25 08:00:00', '2024-01-28 08:00:00', '2024-01-28 08:00:00', 180.00, 'Concluído', 'Cliente muito satisfeito com o carro.'),
(55, 11, 2, '2024-01-26 15:00:00', '2024-01-30 15:00:00', '2024-01-30 16:00:00', 250.00, 'Concluído', 'Entregue com menos combustível, taxa aplicada.'),
(78, 13, 3, '2024-02-01 09:30:00', '2024-02-05 09:30:00', '2024-02-05 09:00:00', 220.00, 'Concluído', 'Limpeza extra necessária nos estofos.'),
(22, 15, 1, '2024-02-05 11:00:00', '2024-02-08 11:00:00', '2024-02-08 10:45:00', 150.00, 'Concluído', 'Sem problemas.'),
(63, 17, 4, '2024-02-10 10:00:00', '2024-02-12 10:00:00', '2024-02-12 11:30:00', 140.00, 'Concluído', 'Atraso ligeiro na entrega.'),
(5, 19, 2, '2024-02-12 14:00:00', '2024-02-16 14:00:00', '2024-02-16 13:50:00', 210.00, 'Concluído', 'Tudo perfeito.'),
(40, 23, 3, '2024-02-15 08:30:00', '2024-02-18 08:30:00', '2024-02-18 08:20:00', 165.00, 'Concluído', 'Viagem a Espanha autorizada e concluída.'),
(80, 26, 1, '2024-02-16 09:00:00', '2024-02-19 09:00:00', '2024-02-19 09:10:00', 190.00, 'Concluído', 'Veículo entregue sujo exteriormente.'),

-- =========================================================================
-- 2. Alugueres A Decorrer (Carros que na tabela Veiculo estão como 'Alugado')
-- =========================================================================
(2, 2, 2, '2024-02-20 14:00:00', '2024-02-25 14:00:00', NULL, 330.00, 'A Decorrer', 'Renovação de contrato provável.'),
(12, 6, 1, '2024-02-21 09:00:00', '2024-02-26 09:00:00', NULL, 275.00, 'A Decorrer', 'Cliente Corporate (Empresa parceira).'),
(27, 10, 3, '2024-02-22 10:00:00', '2024-02-27 10:00:00', NULL, 400.00, 'A Decorrer', 'Aluguer de longa duração.'),
(38, 14, 4, '2024-02-22 11:30:00', '2024-02-24 11:30:00', NULL, 180.00, 'A Decorrer', 'Cliente VIP.'),
(50, 16, 2, '2024-02-23 08:00:00', '2024-02-28 08:00:00', NULL, 310.00, 'A Decorrer', 'Cadeira de bebé incluída.'),
(61, 20, 1, '2024-02-23 15:00:00', '2024-02-25 15:00:00', NULL, 250.00, 'A Decorrer', 'Aluguer de fim de semana.'),
(72, 22, 3, '2024-02-24 09:00:00', '2024-02-29 09:00:00', NULL, 360.00, 'A Decorrer', 'Condutor adicional registado no contrato.'),
(8, 25, 4, '2024-02-24 10:30:00', '2024-03-02 10:30:00', NULL, 420.00, 'A Decorrer', 'Autorização para sair do país.'),
(19, 28, 1, '2024-02-24 14:00:00', '2024-02-27 14:00:00', NULL, 210.00, 'A Decorrer', 'Aluguer com GPS extra.'),
(33, 32, 2, '2024-02-25 08:30:00', '2024-02-28 08:30:00', NULL, 195.00, 'A Decorrer', 'Sem observações.'),
(47, 35, 3, '2024-02-25 11:00:00', '2024-03-01 11:00:00', NULL, 550.00, 'A Decorrer', 'Veículo premium - Caução de 1000€ retida.'),
(66, 38, 4, '2024-02-25 16:00:00', '2024-02-27 16:00:00', NULL, 280.00, 'A Decorrer', 'Aluguer de veículo elétrico (EV).'),

-- =========================================================================
-- 3. Alugueres Cancelados (Para adicionar variedade aos relatórios)
-- =========================================================================
(70, 5, 1, '2024-01-18 10:00:00', '2024-01-20 10:00:00', NULL, 0.00, 'Cancelado', 'Cliente não compareceu (No-show).'),
(14, 12, 2, '2024-02-05 09:00:00', '2024-02-10 09:00:00', NULL, 0.00, 'Cancelado', 'Cancelado com 48h de antecedência pelo cliente.');



-- FASE 7: Inserir Validações de Levantamento e Entrega



-- ALUGUER 1 (Concluído) - Carro 1 (Renault Clio)
-- Levantamento
INSERT INTO Registo_Validacao_Levantamento (Id_Aluguer, Id_Parametro, Valor_Registado, Observacoes, Data_Hora_Registo, Id_Funcionario_Validador) VALUES
(1, 1, '44500', 'Quilometragem confirmada', '2024-01-10 09:50:00', 6), -- 1: Quilometragem (Validador: Carlos Santos - ID 6 - Preparador)
(1, 2, '100%', 'Depósito cheio', '2024-01-10 09:50:00', 6),          -- 2: Combustível
(1, 3, 'Limpo', 'Interior aspirado e higienizado', '2024-01-10 09:50:00', 6), -- 3: Limpeza Interior
(1, 8, 'Sim', 'Documentos presentes na viatura', '2024-01-10 09:50:00', 6);   -- 8: Documentos

-- Entrega
INSERT INTO Registo_Validacao_Entrega (Id_Aluguer, Id_Parametro, Valor_Registado, Observacoes, Data_Hora_Registo, Id_Funcionario_Validador, Danos_Detetados) VALUES
(1, 1, '44950', 'Fez 450 kms no total', '2024-01-15 09:30:00', 6, FALSE),
(1, 2, '100%', 'Entregue cheio', '2024-01-15 09:30:00', 6, FALSE),
(1, 5, 'Sem danos', 'Nenhum risco detetado', '2024-01-15 09:30:00', 6, FALSE);


-- -------------------------------------------------------------------------
-- ALUGUER 6 (Concluído) - Aluguer que teve problema no combustível
-- -------------------------------------------------------------------------
-- Levantamento
INSERT INTO Registo_Validacao_Levantamento (Id_Aluguer, Id_Parametro, Valor_Registado, Observacoes, Data_Hora_Registo, Id_Funcionario_Validador) VALUES
(6, 1, '31000', 'Quilometragem inicial', '2024-01-26 14:50:00', 7),
(6, 2, '100%', 'Depósito cheio', '2024-01-26 14:50:00', 7),
(6, 9, 'Sim', 'Colete e triângulo na bagageira', '2024-01-26 14:50:00', 7);

-- Entrega
INSERT INTO Registo_Validacao_Entrega (Id_Aluguer, Id_Parametro, Valor_Registado, Observacoes, Data_Hora_Registo, Id_Funcionario_Validador, Danos_Detetados) VALUES
(6, 1, '31800', 'Fez 800 kms (viagem longa)', '2024-01-30 16:00:00', 7, FALSE),
(6, 2, '25%', 'Falta combustível - Aplicada taxa de reabastecimento', '2024-01-30 16:00:00', 7, FALSE);



-- ALUGUER 13 (A Decorrer) - Carro ainda está com o cliente

-- Levantamento (Apenas levantamento, pois ainda não foi entregue)
INSERT INTO Registo_Validacao_Levantamento (Id_Aluguer, Id_Parametro, Valor_Registado, Observacoes, Data_Hora_Registo, Id_Funcionario_Validador) VALUES
(13, 1, '52000', 'Kms confirmados', '2024-02-20 13:50:00', 6),
(13, 2, '80%', 'Avisado ao cliente que só precisa devolver com 80%', '2024-02-20 13:50:00', 6),
(13, 5, 'Risco porta dir.', 'Risco superficial já assinalado no contrato', '2024-02-20 13:50:00', 6);


-- ALUGUER 14 (A Decorrer) - Carro corporate

-- Levantamento 
INSERT INTO Registo_Validacao_Levantamento (Id_Aluguer, Id_Parametro, Valor_Registado, Observacoes, Data_Hora_Registo, Id_Funcionario_Validador) VALUES
(14, 1, '75000', 'Kms iniciais', '2024-02-21 08:55:00', 7),
(14, 2, '100%', 'Depósito cheio', '2024-02-21 08:55:00', 7),
(14, 11, 'Sim', 'Identificador Via Verde ativado', '2024-02-21 08:55:00', 7);


DELIMITER //

CREATE TRIGGER trg_atualiza_estado_veiculo
AFTER UPDATE ON Aluguer
FOR EACH ROW
BEGIN
    -- Verifica se o estado do aluguer mudou de "A Decorrer" para "Concluído" ou "Cancelado"
    IF NEW.Estado IN ('Concluído', 'Cancelado') AND OLD.Estado = 'A Decorrer' THEN
        
        -- Atualiza automaticamente a tabela Veiculo
        UPDATE Veiculo 
        SET Estado = 'Disponível'
        WHERE Id_Veiculo = NEW.Id_Veiculo;
        
    END IF;
END; //

DELIMITER ;

DELIMITER //

CREATE TRIGGER trg_novo_aluguer_veiculo
AFTER INSERT ON Aluguer
FOR EACH ROW
BEGIN
    -- Verifica se o novo aluguer inserido está com o estado "A Decorrer"
    IF NEW.Estado = 'A Decorrer' THEN
        
        -- Atualiza automaticamente a tabela Veiculo
        UPDATE Veiculo 
        SET Estado = 'Alugado'
        WHERE Id_Veiculo = NEW.Id_Veiculo;
        
    END IF;
END; //

DELIMITER ;
