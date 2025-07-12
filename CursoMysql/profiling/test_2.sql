SET profiling = 1;

-- Ejecuta una consulta
SELECT * FROM personas WHERE Category = 'A';

-- Ver detalles de la consulta ejecutada
SHOW PROFILE FOR QUERY 1;