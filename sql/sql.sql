CREATE TABLE  deaths (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year YEAR NOT NULL,
    age_category ENUM('child', 'adult', 'elder') NOT NULL,
    amount INT NOT NULL
);


CREATE TABLE  infected (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year YEAR NOT NULL,
    age_category ENUM('child', 'adult', 'elder') NOT NULL,
    amount INT NOT NULL
);


CREATE TABLE recovered (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year YEAR NOT NULL,
    age_category ENUM('child', 'adult', 'elder') NOT NULL,
    amount INT NOT NULL
);


INSERT INTO deaths (year, age_category, amount) VALUES
(2020, 'child', 150),
(2020, 'adult', 12000),
(2020, 'elder', 20000),
(2021, 'child', 80),
(2021, 'adult', 8000),
(2021, 'elder', 15000);

INSERT INTO infected (year, age_category, amount) VALUES
(2020, 'child', 5000),
(2020, 'adult', 500000),
(2020, 'elder', 120000),
(2021, 'child', 3000),
(2021, 'adult', 400000),
(2021, 'elder', 100000);


INSERT INTO recovered (year, age_category, amount) VALUES
(2020, 'child', 4800),
(2020, 'adult', 460000),
(2020, 'elder', 95000),
(2021, 'child', 2900),
(2021, 'adult', 390000),
(2021, 'elder', 97000);