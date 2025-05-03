-- Creación de la tabla "personas"
CREATE TABLE personas (
    ID BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- Columna de identificación única (clave primaria) 
    Name VARCHAR(255),                              -- Nombre de la persona, de tipo cadena de caracteres (máximo 255 caracteres)
    Category CHAR(1),                               -- Categoría de la persona (un solo carácter)
    Age INT,                                        -- Edad de la persona, de tipo entero
    Description TEXT                                 -- Descripción, de tipo texto largo
);

-- Consulta para obtener personas de la categoría 'A' y con edad superior a 30
SELECT * 
FROM personas
WHERE Category = 'A' AND Age > 30;

-- Creación de un índice compuesto en las columnas "Category" y "Age" para mejorar el rendimiento de consultas
-- que filtran por ambas columnas
CREATE INDEX idx_category_age
ON personas (Category, Age);

-- Creación de un índice único en la columna "Email" (suponiendo que haya una columna "Email" en la tabla)
-- Este índice garantiza que los valores en la columna "Email" sean únicos en toda la tabla
CREATE UNIQUE INDEX idx_email
ON personas (Email);  -- Nota: La columna "Email" debe existir en la tabla personas

-- Creación de un índice FULLTEXT sobre la columna "Description" para optimizar búsquedas de texto completo
CREATE FULLTEXT INDEX idx_description
ON personas (Description);

-- Creación de un índice espacial sobre la tabla "locations" en la columna "coordinates"
-- Este tipo de índice es utilizado para optimizar consultas espaciales (coordenadas geográficas)
CREATE SPATIAL INDEX idx_location
ON locations (coordinates); -- Nota: La tabla "locations" y la columna "coordinates" deben existir previamente

-- Creación de un índice Hash sobre la columna "Name" en la tabla "personas"
-- Utilizado para búsquedas rápidas de igualdad exacta en esta columna
CREATE INDEX idx_hash
USING HASH
ON personas (Name);

-- no se puede eliminar un indice invisible, si es invisible no aplica en la optimizacion, simplemente esta alli para no ser borrado es como desactivarlo
-- Crear un índice invisible
CREATE INDEX idx_category_invisible ON personas (Category) INVISIBLE;

-- Ver los índices invisibles
SHOW INDEXES FROM personas;

-- Hacer el índice invisible visible
ALTER INDEX idx_category_invisible VISIBLE;
