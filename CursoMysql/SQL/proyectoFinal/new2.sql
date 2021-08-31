
use biblioteca;

select * from productos;

DELIMITER $$
create trigger calvalorventa2 before
update
	on
	productos 
 FOR EACH ROW begin
set
	new.valorventa = new.costo + new.costo * old.porgana / 100;
END $$
DELIMITER ;

update productos set costo=5000 where codigo='1';







select CONCAT(nombres, ' ' ,apellidos) as "nombresCompletos", UPPER(nombres) as Mayuscula from Persona;




select  nombres as nombresCompletos, count(*) as cantidad from Persona group by nombres;



create table mismoNombre
    select  nombres as nombresCompletos, count(*) as cantidad
    from Persona
    group by nombres;
   
select * from mismoNombre;




select nombres from Persona where genero='masculino' and nombres like '%r';




CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultNombres1(nombres1 VARCHAR(75))
SQL SECURITY INVOKER 
BEGIN 
	SELECT * FROM Persona WHERE nombres = nombres1;
END 

call consultNombres1('Alexander')


CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultNombres1(nombres1 VARCHAR(75))
SQL SECURITY INVOKER 
BEGIN 
	SELECT * FROM Persona WHERE nombres = nombres1;
END 

call consultNombres1('Alexander')


REATE DEFINER = 'admin' @'localhost' PROCEDURE insertPacientes(CedulaPaciente1 VARCHAR(10),NombresPaciente1 VARCHAR(20),ApellidosPaciente1 VARCHAR(20),TelefonoPaciente1 VARCHAR(15),EdadPaciente1 VARCHAR(3), SexoPaciente1 VARCHAR(3),CiudadPaciente1 VARCHAR(20),historialPaciente1 VARCHAR(200)) 
SQL SECURITY INVOKER 
BEGIN
INSERT INTO pacientes (CedulaPaciente,NombresPaciente,ApellidosPaciente,TelefonoPaciente,EdadPaciente,SexoPaciente,CiudadPaciente,historialPaciente )
VALUES (CedulaPaciente1,NombresPaciente1,ApellidosPaciente1,TelefonoPaciente1,EdadPaciente1,SexoPaciente1,CiudadPaciente1,historialPaciente1);
END 

call insertPacientes("51082","Ingrid","Riggs","727-2544",95,"M","La Paz","Azithromycin")



CREATE DEFINER = 'admin' @'localhost' PROCEDURE updatePacientes(CedulaPaciente1 VARCHAR(10),NombresPaciente1 VARCHAR(20),ApellidosPaciente1 VARCHAR(20),TelefonoPaciente1 VARCHAR(15),EdadPaciente1 VARCHAR(3), SexoPaciente1 VARCHAR(3),CiudadPaciente1 VARCHAR(20),historialPaciente1 VARCHAR(200)) 
SQL SECURITY INVOKER 
BEGIN
UPDATE pacientes SET 
NombresPaciente = NombresPaciente1,
ApellidosPaciente = ApellidosPaciente1,
TelefonoPaciente = TelefonoPaciente1,
EdadPaciente = EdadPaciente1,
SexoPaciente = SexoPaciente1,
CiudadPaciente = CiudadPaciente1,
historialPaciente = historialPaciente1
WHERE CedulaPaciente = CedulaPaciente1;
END;
CALL updatePacientes("51082","Ingrid","Riggsxxxxx","727-2544",95,"M","La Paz","Azithromycin")


CREATE DEFINER = 'admin' @'localhost' PROCEDURE deletePacientes(IN CedulaPaciente INT) SQL SECURITY INVOKER BEGIN DELETE FROM pacientes WHERE CedulaPaciente = CedulaPaciente;
END 

call deletePacientes(4)