-- Permiten realizar cálculos como agregados sobre un subconjunto de filas.

SELECT Name, Age,
       ROW_NUMBER() OVER (ORDER BY Age DESC) AS rank
FROM personas;

--Permiten escribir subconsultas reutilizables y organizadas.

WITH AgeCategory AS (
    SELECT Name, Age
    FROM personas
    WHERE Age > 30
)
SELECT * FROM AgeCategory WHERE Age < 40;