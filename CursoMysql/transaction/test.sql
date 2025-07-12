SET autocommit = 0;

START TRANSACTION;

-- Inserción válida
INSERT INTO personas (ID, Name, Category, Age, Description) 
VALUES (100, 'Laura Torres', 'A', 29, 'Nueva persona');

-- Inserción con error forzado: ID duplicado
INSERT INTO personas (ID, Name, Category, Age, Description) 
VALUES (100, 'Carlos Ramírez', 'B', 35, 'ID duplicado');  -- ERROR aquí

-- Solo se ejecuta si todo va bien
COMMIT;

ROLLBACK;