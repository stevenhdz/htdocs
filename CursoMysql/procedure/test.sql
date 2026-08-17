CREATE PROCEDURE insertar_persona(
    IN p_name VARCHAR(255),
    IN p_category CHAR(1),
    IN p_age INT,
    IN p_description TEXT
)
BEGIN
    -- Validación de la categoría
    IF p_category = 'Z' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'La categoría "Z" no está permitida.';
    ELSE
        -- Inserción de la persona
        INSERT INTO personas (Name, Category, Age, Description)
        VALUES (p_name, p_category, p_age, p_description);
    END IF;
END


CALL insertar_persona('Juan Pérez', 'A', 30, 'Una persona de prueba');