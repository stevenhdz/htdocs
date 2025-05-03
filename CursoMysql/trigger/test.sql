CREATE TRIGGER validar_categoria_insercion
BEFORE INSERT ON personas
FOR EACH ROW
BEGIN
    IF NEW.Category = 'Z' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'La categoría "Z" no está permitida.';
    END IF;
END;


CREATE TRIGGER validar_categoria_update
BEFORE UPDATE ON personas
FOR EACH ROW
BEGIN
    IF NEW.Category = 'Z' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'No se permite actualizar la categoría a "Z".';
    END IF;
END;


CREATE TRIGGER bloquear_eliminacion
BEFORE DELETE ON personas
FOR EACH ROW
BEGIN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'No se permite eliminar registros de personas.';
END;