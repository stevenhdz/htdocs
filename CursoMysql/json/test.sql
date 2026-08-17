-- Crear una tabla con una columna JSON
CREATE TABLE personas (
    ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Data JSON
);

-- Insertar datos JSON en la columna 'Data'
INSERT INTO personas (Name, Data)
VALUES ('John Doe', '{"age": 30, "city": "New York"}');

-- Consultar datos JSON utilizando JSON_EXTRACT
SELECT Name, JSON_EXTRACT(Data, '$.city') AS city
FROM personas;