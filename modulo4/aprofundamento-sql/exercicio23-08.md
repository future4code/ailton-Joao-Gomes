USE	`ailton-joao-gomes`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id,nome,salary,birth_date,gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male");

INSERT INTO Actor (id,nome,salary,birth_date,gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female");

INSERT INTO Actor (id, nome, salary,birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id,nome, salary, birth_date, gender)
VALUES(
  "004",
  "Tom Cruise",
  400000,
  "1949-04-18", 
  "male"
);
------------

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id,nome,salary,birth_date,gender)
VALUES(
 "006",
 "Tom Yorke",
 1000000,
 "1968-10--07",
 "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  200000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "008", 
  "João Zang",
  4000000,
  "2001-03-16", 
  "male"
);

SELECT * FROM Actor;

SELECT * FROM Actor WHERE gender="female";

SELECT * FROM Actor WHERE nome="Tony Ramos";

SELECT * FROM Actor WHERE gender="invalid";

SELECT id,nome,salary FROM Actor WHERE salary < 500000;

SELECT id, nome FROM Actor WHERE id = "002";

SELECT * FROM Actor WHERE nome LIKE "A%" OR nome LIKE "J%" AND salary > 300000;

SELECT * FROM Actor WHERE nome LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE nome LIKE "%A%" OR nome LIKE "%a%";

SELECT * FROM Actor WHERE (nome LIKE "%A%" OR nome LIKE "%a%" OR nome LIKE "%G%" OR nome LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR (255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
lançamento DATE NOT NULL,
nota INT NOT NULL
);

INSERT INTO Movie (id, nome, sinopse, lançamento, nota) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

INSERT INTO Movie (id, nome, sinopse, lançamento, nota) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-02-11",
    8
);

INSERT INTO Movie (id, nome, sinopse, lançamento, nota) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);

INSERT INTO Movie (id, nome, sinopse, lançamento, nota) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);

INSERT INTO Movie (id, nome, sinopse, lançamento, nota) 
VALUES(
	"007",
    "Meu Deus",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2001-03-06",
    4
);


SELECT * FROM Movie;

SELECT id,nome,nota FROM Movie WHERE id="002";

SELECT * FROM Movie WHERE nome="Se Eu Fosse Você";

SELECT id,nome,sinopse FROM Movie WHERE nota > 7;

SELECT * FROM Movie WHERE nome LIKE "%deus%";

SELECT * FROM Movie WHERE nome LIKE "%uma%" OR sinopse LIKE "%uma%";

SELECT * FROM Movie WHERE lançamento < "2022-08-22";

SELECT * FROM Movie WHERE lançamento < "2022-08-22" AND (nome LIKE "%uma%" OR sinopse LIKE "%uma%") AND nota > 7;

--

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD tipo VARCHAR(255) DEFAULT "NotDirector";

-- ALTER TABLE Actor DROP COLUMN salary;   Tira coluna de salario
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6);  Troca genero por sexo
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255);  Aumenta quantidade de letras no genero

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET nome="Jujuba", birth_date="1928-03-15" WHERE id="003";

UPDATE Actor SET nome="JULIANA PAES" WHERE nome="Juliana Paes";

UPDATE Actor SET nome="Juliana Paes" WHERE nome="JULIANA PAES";

UPDATE Actor SET nome="Irineu", birth_date="1949-08-20", gender="female" WHERE id="005";

UPDATE Actor SET solteiro="no" WHERE id="009";

DELETE FROM Actor WHERE nome="Fernanda Montenegro";

DELETE FROM Actor WHERE gender="male" AND salary > 1000000;

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor WHERE gender="female";

SELECT MIN(salary) FROM Actor WHERE gender="female";

SELECT COUNT(*) FROM Actor WHERE gender="female";

SELECT SUM(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT * FROM Actor ORDER BY nome ASC;

SELECT * FROM Actor ORDER BY nome ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id,nome FROM Actor ORDER BY nome DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary),gender FROM Actor GROUP BY gender;

SELECT * FROM Movie;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE nota nota FLOAT NOT NULL;

UPDATE Movie SET playing_limit_date="2022-08-20" WHERE id="001";

UPDATE Movie SET playing_limit_date="2023-02-10" WHERE id="002";

DELETE FROM Movie WHERE id="001";

SELECT COUNT(*) FROM Movie WHERE nota > 7.5;

SELECT AVG(nota) FROM Movie;

SELECT * FROM Movie;

SELECT MAX(nota) FROM Movie;
SELECT MIN(nota) FROM Movie;

SELECT * FROM Movie ORDER BY nome ASC;

SELECT * FROM Movie ORDER BY nome DESC LIMIT 5;

SELECT * FROM Movie ORDER BY lançamento DESC LIMIT 3;

SELECT * FROM Movie ORDER BY nota DESC;

