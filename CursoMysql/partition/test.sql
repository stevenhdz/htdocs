-- particionamiento de tablas mejora el rendimiento cuando se manejan grandes volúmenes de datos.

-- RANGE – Por rangos numéricos o fechas.
-- LIST – Por valores específicos (ej: países, regiones).
-- HASH – Distribuye los datos uniformemente por una función hash.
-- KEY – Similar a HASH, pero usando una clave interna.

CREATE TABLE personas1 (
  id INT,
  name VARCHAR(100),
  age INT
)
PARTITION BY RANGE (age) (
  PARTITION p63 VALUES LESS THAN (63),
  PARTITION p69 VALUES LESS THAN (69),
  PARTITION pmax VALUES LESS THAN MAXVALUE
);

INSERT INTO personas1 (id, name, age) VALUES
(1, 'Ana', 60),     -- p63
(2, 'Luis', 65),    -- p69
(3, 'Marta', 70),   -- pmax
(4, 'Carlos', 62),  -- p63
(5, 'Sofía', 68),   -- p69
(6, 'Pedro', 55),   -- p63
(7, 'Lucía', 64),   -- p69
(8, 'Andrés', 75),  -- pmax
(9, 'Julia', 61),   -- p63
(10, 'Raúl', 80);   -- pmax

-- Consulta para obtener personas con edad menor a 63 en la partición p63
SELECT * FROM personas1 WHERE age < 63;
SELECT * FROM personas1 PARTITION (p63);
EXPLAIN SELECT * FROM personas1 WHERE age < 63;