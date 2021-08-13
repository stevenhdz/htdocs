create database bdhospital 
use bdhospital 

create table plantas (
  idPlanta int(11) not null primary key AUTO_INCREMENT,
  NombrePlanta varchar(30) not null,
  NroPiso varchar(3) not null,
  JefePlanta varchar(30) not null,
  numeroHabitacion varchar(3) not null
)

go;

INSERT INTO `plantas` 
(`idPlanta`,`NombrePlanta`,`NroPiso`,`JefePlanta`,`numeroHabitacion`) 
VALUES 
(1,"As","968","Callum","276"),
(2,"Cuccaro Vetere","954","Rylee","902"),
(3,"Golspie","573","Skyler","720"),
(4,"Granada","608","Nolan","883"),
(5,"Rockford","729","Armand","639"),
(6,"Haren","872","Ariel","405"),
(7,"Loksbergen","828","Zeus","836"),
(8,"Zaffelare","241","Keegan","943"),
(9,"New Bombay","575","Yardley","417"),
(10,"Minyar","482","Kameko","539");

go;

create table pacientes (
    CedulaPaciente varchar(10) not null primary key,
    NombresPaciente varchar(20) not null,
    ApellidosPaciente varchar(20) not null,
    TelefonoPaciente varchar(15) not null,
    EdadPaciente varchar(3) not null,
    SexoPaciente varchar(3) not null,
    CiudadPaciente varchar(20) not null,
    historialPaciente varchar(200) not null
  )
  
go;

INSERT INTO `pacientes` 
(`CedulaPaciente`,`NombresPaciente`,`ApellidosPaciente`,`TelefonoPaciente`,`EdadPaciente`,`SexoPaciente`,`CiudadPaciente`,`historialPaciente`) 
VALUES 
("5108","Ingrid","Riggs","727-2544",95,"M","La Paz","Azithromycin"),
("3698","Cain","Randall","922-9469",15,"M","Viña del Mar","Allopurinol"),
("7706","Nero","Castro","1-495-239-5533",30,"M","Kungälv","Triamcinolone Acetonide"),
("1363","Caldwell","Moreno","114-9785",59,"F","Darbhanga","Amlodipine Besylate"),
("5059","Ian","Weber","431-5278",32,"M","Bhopal","Atenolol"),
("7206","Robin","David","1-780-918-6571",42,"M","Floridablanca","Lovaza"),
("4124","Moses","Sanchez","204-9058",19,"M","Banjar","Metformin HCl"),
("2231","Acton","Trevino","586-0291",69,"M","Presles","Azithromycin"),
("2992","Coby","Graham","972-3305",85,"F","Neerglabbeek","Amlodipine Besylate"),
("4497","Bruce","Rosales","1-539-519-2243",1,"M","GŽrouville","Hydrocodone/APAP");

go;

create table medicos (
    CedulaMedico varchar(10) not null primary key,
    NombresMedico varchar(20) not null,
    ApellidosMedico varchar(20) not null,
    TelefonoMedico varchar(15) not null,
    EdadMedico varchar(3) not null,
    SexoMedico varchar(3) not null,
    CiudadMedico varchar(20) not null
  ) 
  
go;

INSERT INTO `medicos` 
(`CedulaMedico`,`NombresMedico`,`ApellidosMedico`,`TelefonoMedico`,`EdadMedico`,`SexoMedico`,`CiudadMedico`) 
VALUES 
("2159","Gisela","Russo","860-3485",31,"F","Montemignaio"),
("2874","Kameko","Wallace","715-4607",53,"M","Oldenzaal"),
("2642","Phyllis","Simpson","768-4976",3,"F","Penicuik"),
("8358","Ivor","Cardenas","398-7690",1,"F","Mold"),
("9898","Alea","Pate","292-3113",82,"M","Montbliart"),
("3678","Raja","Tucker","241-8071",14,"F","Mâcon"),
("1657","Reece","Mooney","506-3101",6,"F","Agartala"),
("3267","Jack","Chavez","316-6918",60,"F","Arlon"),
("8687","Kirestin","Mccormick","781-1547",100,"F","Saint-Denis"),
("3271","Yolanda","Pennington","189-0220",62,"F","Arsimont");

go;

create table PlantasPacientes (
    idPlanta int(11),
    CedulaPaciente varchar(20),
    FOREIGN KEY (idPlanta) REFERENCES plantas(idPlanta),
    FOREIGN KEY (CedulaPaciente) REFERENCES pacientes(CedulaPaciente)
  ) 
  
go;

INSERT INTO `PlantasPacientes` 
(`idPlanta`,`CedulaPaciente`) 
VALUES 
(1,"5108"),
(2,"3698"),
(3,"7706"),
(4,"1363"),
(5,"5059"),
(6,"7206"),
(7,"4124"),
(8,"2231"),
(9,"2992"),
(10,"4497");


create table PacienteMedico (
    CedulaPaciente varchar(10),
    CedulaMedico varchar(20),
    FOREIGN KEY (CedulaPaciente) REFERENCES pacientes(CedulaPaciente),
    FOREIGN KEY (CedulaMedico) REFERENCES medicos(CedulaMedico)
  )
  
go;

INSERT INTO `PacienteMedico` 
(`CedulaPaciente`,`CedulaMedico`) 
VALUES 
("5108","2159"),
("3698","2874"),
("7706","2642"),
("1363","8358"),
("5059","9898"),
("7206","3678"),
("4124","1657"),
("2231","3267"),
("2992","8687"),
("4497","3271");

go;


/* PLANTAS */


/* Procedimiento para listar */
DROP TABLE IF EXISTS Plantas
DROP PROCEDURE IF EXISTS listPlanta;
ALTER TABLE plantas AUTO_INCREMENT = 1

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE listPlanta() SQL SECURITY INVOKER BEGIN SELECT * FROM plantas;
END 

call listPlanta()

go;

/* Procedimiento para consultar */ 

DROP PROCEDURE IF EXISTS consultPlanta;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultPlanta(IN idPlantas INT) SQL SECURITY INVOKER BEGIN SELECT * FROM plantas WHERE idPlanta = idPlantas;
END 

call consultPlanta(1)

go;

/* Procedimiento para eliminar */

DROP PROCEDURE IF EXISTS deletePlanta;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE deletePlanta(IN idPlantas INT) SQL SECURITY INVOKER BEGIN DELETE FROM plantas WHERE idPlanta = idPlantas;
END 

call deletePlanta(4)

go;

/* Procedimiento para insertar */

DROP PROCEDURE IF EXISTS insertPlanta;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE insertPlanta(NombrePlanta1 VARCHAR(30),NroPiso1 VARCHAR(3),JefePlanta1 VARCHAR(30),numeroHabitacion1 VARCHAR(3)) 
SQL SECURITY INVOKER 
BEGIN
INSERT INTO plantas (NombrePlanta,NroPiso,JefePlanta,numeroHabitacion)
VALUES (NombrePlanta1,NroPiso1,JefePlanta1,numeroHabitacion1);
END 

call insertPlanta("2","4","carlos","200")

go;

/* Procedimiento para modificar */

DROP PROCEDURE IF EXISTS updatePlanta;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE updatePlanta(idPlanta1 INT(11),NombrePlanta1 VARCHAR(30),NroPiso1 VARCHAR(3),JefePlanta1 VARCHAR(30),numeroHabitacion1 VARCHAR(3)) 
SQL SECURITY INVOKER 
BEGIN
UPDATE plantas SET NombrePlanta = NombrePlanta1,NroPiso = NroPiso1,JefePlanta = JefePlanta1,numeroHabitacion = numeroHabitacion1
WHERE idPlanta = idPlanta1;
END;
CALL updatePlanta(5,"3","3","carlos h","230")

go;

/* FIN PLANTAS */















/* pacientes */


/* Procedimiento para listar */
DROP TABLE IF EXISTS pacientes
DROP PROCEDURE IF EXISTS listPacientes
ALTER TABLE pacientes AUTO_INCREMENT = 1

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE listPacientes() SQL SECURITY INVOKER BEGIN SELECT * FROM pacientes;
END 

call listPacientes()

go;

/* Procedimiento para consultar */ 

DROP PROCEDURE IF EXISTS consultPacientes;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultPacientes(IN CedulaPaciente INT) SQL SECURITY INVOKER BEGIN SELECT * FROM pacientes WHERE CedulaPaciente = CedulaPaciente;
END 

call consultPacientes(1)

go;

/* Procedimiento para eliminar */

DROP PROCEDURE IF EXISTS deletePacientes;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE deletePacientes(IN CedulaPaciente INT) SQL SECURITY INVOKER BEGIN DELETE FROM pacientes WHERE CedulaPaciente = CedulaPaciente;
END 

call deletePacientes(4)

go;

/* Procedimiento para insertar */

DROP PROCEDURE IF EXISTS insertPacientes;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE insertPacientes(CedulaPaciente1 VARCHAR(10),NombresPaciente1 VARCHAR(20),ApellidosPaciente1 VARCHAR(20),TelefonoPaciente1 VARCHAR(15),EdadPaciente1 VARCHAR(3), SexoPaciente1 VARCHAR(3),CiudadPaciente1 VARCHAR(20),historialPaciente1 VARCHAR(200)) 
SQL SECURITY INVOKER 
BEGIN
INSERT INTO pacientes (CedulaPaciente,NombresPaciente,ApellidosPaciente,TelefonoPaciente,EdadPaciente,SexoPaciente,CiudadPaciente,historialPaciente )
VALUES (CedulaPaciente1,NombresPaciente1,ApellidosPaciente1,TelefonoPaciente1,EdadPaciente1,SexoPaciente1,CiudadPaciente1,historialPaciente1);
END 

call insertPacientes("51082","Ingrid","Riggs","727-2544",95,"M","La Paz","Azithromycin")

go;

/* Procedimiento para modificar */

DROP PROCEDURE IF EXISTS updatePacientes;
go;

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

go;

/* FIN pacientes */


















/* medicos */


/* Procedimiento para listar */
DROP TABLE IF EXISTS medicos
DROP PROCEDURE IF EXISTS listMedicos
ALTER TABLE medicos AUTO_INCREMENT = 1

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE listMedicos() SQL SECURITY INVOKER BEGIN SELECT * FROM medicos;
END 

call listMedicos()

go;

/* Procedimiento para consultar */ 

DROP PROCEDURE IF EXISTS consultMedicos;

go;
CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultMedicos(IN CedulaMedico1 varchar(10)) SQL SECURITY INVOKER BEGIN SELECT * FROM medicos WHERE CedulaMedico = CedulaMedico1;
END 

call consultMedicos("1657")

go;

/* Procedimiento para eliminar */

DROP PROCEDURE IF EXISTS deleteMedicos;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE deleteMedicos(IN CedulaMedico1 varchar(10)) SQL SECURITY INVOKER BEGIN DELETE FROM medicos WHERE CedulaMedico = CedulaMedico1;
END 

call deleteMedicos("1657")

go;

/* Procedimiento para insertar */

DROP PROCEDURE IF EXISTS insertMedicos;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE insertMedicos(CedulaMedico1 VARCHAR(10),NombresMedico1 VARCHAR(20),ApellidosMedico1 VARCHAR(20),TelefonoMedico1 VARCHAR(15),EdadMedico1 VARCHAR(3), SexoMedico1 VARCHAR(3),CiudadMedico1 VARCHAR(20)) 
SQL SECURITY INVOKER 
BEGIN
INSERT INTO medicos (CedulaMedico,NombresMedico,ApellidosMedico,TelefonoMedico,EdadMedico,SexoMedico,CiudadMedico)
VALUES (CedulaMedico1,NombresMedico1,ApellidosMedico1,TelefonoMedico1,EdadMedico1,SexoMedico1,CiudadMedico1);
END 

call insertMedicos("219","Gisela","Russo","860-3485",31,"F","Montemiio")

go;

/* Procedimiento para modificar */

DROP PROCEDURE IF EXISTS updateMedicos;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE updateMedicos(CedulaMedico1 VARCHAR(10),NombresMedico1 VARCHAR(20),ApellidosMedico1 VARCHAR(20),TelefonoMedico1 VARCHAR(15),EdadMedico1 VARCHAR(3), SexoMedico1 VARCHAR(3),CiudadMedico1 VARCHAR(20))
SQL SECURITY INVOKER 
BEGIN
UPDATE medicos SET
NombresMedico = NombresMedico1, 
ApellidosMedico = ApellidosMedico1, 
TelefonoMedico = TelefonoMedico1, 
EdadMedico = EdadMedico1, 
SexoMedico = SexoMedico1, 
CiudadMedico = CiudadMedico1
WHERE CedulaMedico = CedulaMedico1;
END;

CALL updateMedicos("1657","Giselasss","Russo","860-3485",31,"F","Montemiio")

go;

/* FIN medicos */











/* pacienteMedicos */


/* Procedimiento para listar */
DROP TABLE IF EXISTS PacienteMedico
DROP PROCEDURE IF EXISTS PacienteMedico
ALTER TABLE PacienteMedico AUTO_INCREMENT = 1

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE listPacienteMedicos() SQL SECURITY INVOKER BEGIN SELECT * FROM PacienteMedico;
END 

call listPacienteMedicos()

go;

/* Procedimiento para consultar */ 

DROP PROCEDURE IF EXISTS consultPacienteMedico;

go;
CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultPacienteMedico(IN CedulaPaciente1 varchar(10) ) SQL SECURITY INVOKER BEGIN SELECT * FROM PacienteMedico WHERE CedulaPaciente = CedulaPaciente1 or CedulaMedico = CedulaPaciente1 ;
END 

call consultPacienteMedico("2159")

go;

/* Procedimiento para eliminar */

DROP PROCEDURE IF EXISTS deletePacienteMedico;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE deletePacienteMedico(IN CedulaPaciente1 varchar(10)) SQL SECURITY INVOKER BEGIN DELETE FROM PacienteMedico WHERE CedulaPaciente = CedulaPaciente1 or CedulaMedico = CedulaPaciente1;
END 

call deletePacienteMedico("2159")

go;

/* Procedimiento para insertar */

DROP PROCEDURE IF EXISTS insertPacienteMedico;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE insertPacienteMedico(CedulaPaciente1 VARCHAR(10),CedulaMedico1 VARCHAR(10)) 
SQL SECURITY INVOKER 
BEGIN
INSERT INTO PacienteMedico (CedulaPaciente,CedulaMedico)
VALUES (CedulaPaciente1,CedulaMedico1);
END 

call insertPacienteMedico("5059","2159")

go;

/* Procedimiento para modificar */

DROP PROCEDURE IF EXISTS updatePacienteMedico;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE updatePacienteMedico(CedulaPaciente1 VARCHAR(10),CedulaMedico1 VARCHAR(10))
SQL SECURITY INVOKER 
BEGIN
UPDATE PacienteMedico SET
PacienteMedico = CedulaPaciente1, 
CedulaMedico = CedulaMedico1
WHERE CedulaPaciente = CedulaPaciente1 or CedulaMedico = CedulaPaciente1;
END;

CALL updateMedicos("5059","4444")

go;

/* FIN pacienteMedicos */










/* PlantasPacientes */


/* Procedimiento para listar */
DROP TABLE IF EXISTS PlantasPacientes
DROP PROCEDURE IF EXISTS PlantasPacientes
ALTER TABLE PlantasPacientes AUTO_INCREMENT = 1

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE listPlantasPacientes() SQL SECURITY INVOKER BEGIN SELECT * FROM PlantasPacientes;
END 

call listPlantasPacientes()

go;

/* Procedimiento para consultar */ 

DROP PROCEDURE IF EXISTS consultPlantasPacientes;

go;
CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultPlantasPacientes(IN idPlanta1 int(11) ) SQL SECURITY INVOKER BEGIN SELECT * FROM PlantasPacientes WHERE idPlanta = idPlanta1 or CedulaPaciente = idPlanta1 ;
END 

call consultPlantasPacientes(1)

go;

/* Procedimiento para eliminar */

DROP PROCEDURE IF EXISTS deletePlantasPacientes;

go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE deletePlantasPacientes(IN idPlanta1 int(11)) SQL SECURITY INVOKER BEGIN DELETE FROM PlantasPacientes WHERE idPlanta = idPlanta1 or CedulaPaciente = idPlanta1;
END 

call deletePlantasPacientes(1)

go;

/* Procedimiento para insertar */

DROP PROCEDURE IF EXISTS insertPlantasPacientes;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE insertPlantasPacientes(idPlanta1 int(11),CedulaPaciente1 VARCHAR(20)) 
SQL SECURITY INVOKER 
BEGIN
INSERT INTO PlantasPacientes (idPlanta,CedulaPaciente)
VALUES (idPlanta1,CedulaPaciente1);
END 

call insertPlantasPacientes(4,"3698")

go;

/* Procedimiento para modificar */

DROP PROCEDURE IF EXISTS updatePlantasPacientes;
go;

CREATE DEFINER = 'admin' @'localhost' PROCEDURE updatePlantasPacientes(idPlanta1 int(11),CedulaPaciente1 VARCHAR(20))
SQL SECURITY INVOKER 
BEGIN
UPDATE PlantasPacientes SET
idPlanta = idPlanta1, 
CedulaPaciente = CedulaPaciente1
WHERE idPlanta = idPlanta1 and CedulaPaciente = idPlanta1;
END;

CALL updatePlantasPacientes(4,"3698")

go;

/* FIN pacienteMedicos */







