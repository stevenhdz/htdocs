
use bibliotecaremington;



select CONCAT(nombres, ' ' ,apellidos) as "nombresCompletos", UPPER(nombres) as Mayuscula from Persona;




select  nombres as nombresCompletos, count(*) as cantidad from Persona group by nombres;



create table mismoNombre
    select  nombres as nombresCompletos, count(*) as cantidad
    from Persona
    group by nombres;
   
select * from mismoNombre;




select nombres from Persona where genero='masculino' and nombres like '%r';



DELIMITER $$ 
CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultPersona(nombres1 VARCHAR(75)) SQL SECURITY INVOKER BEGIN
SELECT *
FROM persona
WHERE nombres = nombres1;
END DELIMITER;

call consultPersona('Alex');





DELIMITER $$ 
CREATE DEFINER = 'admin' @'localhost' PROCEDURE insertPersona3(
	idpersona1 int(11),
	dni1 VARCHAR(45),
	Nombres1 VARCHAR(75),
	Apellidos1 VARCHAR(45),
	genero1 VARCHAR(45),
	direccion1 VARCHAR(45),
	telefono1 VARCHAR(45),
	correo1 VARCHAR(45),
	idAlumno1 int(11)
) SQL SECURITY INVOKER BEGIN
INSERT INTO persona (
		idPersona,
		dni,
		Nombres,
		Apellidos,
		genero,
		direccion,
		telefono,
		correo,
		idAlumno
	)
VALUES (
        idPersona1,
		dni1,
		Nombres1,
		Apellidos1,
		genero1,
		direccion1,
		telefono1,
		correo1,
		idAlumno1
	);
END 
DELIMITER;


call insertPersona2(4,"1000929293","Ingrid","Hernandez","femenino","calle 113","3002903938","ingrid2019@gmail.com",1);







DELIMITER $$ 
CREATE DEFINER = 'admin' @'localhost' PROCEDURE updatePersona2(
	idpersona1 int(11),
	dni1 VARCHAR(45),
	Nombres1 VARCHAR(75),
	Apellidos1 VARCHAR(45),
	genero1 VARCHAR(45),
	direccion1 VARCHAR(45),
	telefono1 VARCHAR(45),
	correo1 VARCHAR(45),
	idAlumno1 int(11)
) SQL SECURITY INVOKER BEGIN
UPDATE persona
SET dni = dni1,
	Nombres = Nombres1,
	Apellidos = Apellidos1,
	genero = genero1,
	direccion = direccion1,
	telefono = telefono1,
	correo = correo1,
	idAlumno = idAlumno1
WHERE idPersona = idpersona1;
END 
DELIMITER;


CALL updatePersona2(3,"1000929293","Ingrid2","Hernandez","femenino","calle 113","3002903938","ingrid2019@gmail.com",1);





DELIMITER $$ 
CREATE DEFINER = 'admin' @'localhost' PROCEDURE deletePersona(IN idPersona1 INT) 
SQL SECURITY INVOKER 
BEGIN
DELETE FROM persona
WHERE idPersona = idPersona1;
END
DELIMITER;

call deletePersona(3);



/*crear los triggers*/

/*al insertar persona va insertar un alumno relacionado y con 18 años */
DELIMITER |
CREATE TRIGGER persona BEFORE
INSERT ON persona FOR EACH ROW BEGIN
INSERT INTO aliumno
SET idAlumno = NEW.idPersona,
	CodigoAlumno = NEW.dni,
	EdadAlumno = 18;
END
|
DELIMITER ;




/*al insertar persona va insertar un bibliotecario relacionado*/
DELIMITER |
CREATE TRIGGER testref2 BEFORE
INSERT ON persona FOR EACH ROW BEGIN
INSERT INTO bibliotecario
SET idBibliotecario = 3,
	idPersona = NEW.idPersona
END
|
DELIMITER ;




/* inserta alumno derivado de persona ademas de borrar alumnos viejos que tengan el mismo id de persona y por ultimo actualiza la edad del alumno incrementando 1 donde el id de persona sea el mismo*/

DELIMITER |

CREATE TRIGGER testref4 BEFORE INSERT ON persona
  FOR EACH ROW BEGIN
    INSERT INTO aliumno SET idAlumno = NEW.idPersona,
	CodigoAlumno = NEW.dni,
	EdadAlumno = 18;
    DELETE FROM aliumno WHERE idAlumno = OLD.idPersona;  
    UPDATE aliumno SET EdadAlumno = EdadAlumno  + 1 WHERE idAlumno = NEW.idPersona;
  END
|

DELIMITER ;
