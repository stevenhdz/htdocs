-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-08-2021 a las 04:50:35
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `bdhospital`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`admin`@`localhost` PROCEDURE `consultMedicos` (IN `CedulaMedico1` VARCHAR(10))  SQL SECURITY INVOKER
BEGIN SELECT * FROM medicos WHERE CedulaMedico = CedulaMedico1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `consultPacienteMedico` (IN `CedulaPaciente1` VARCHAR(10))  SQL SECURITY INVOKER
BEGIN SELECT * FROM PacienteMedico WHERE CedulaPaciente = CedulaPaciente1 or CedulaMedico = CedulaPaciente1 ;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `consultPacientes` (IN `CedulaPaciente` INT)  SQL SECURITY INVOKER
BEGIN SELECT * FROM pacientes WHERE CedulaPaciente = CedulaPaciente;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `consultPlanta` (IN `idPlantas` INT)  SQL SECURITY INVOKER
BEGIN SELECT * FROM plantas WHERE idPlanta = idPlantas;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `consultPlantasPacientes` (IN `idPlanta1` INT(11))  SQL SECURITY INVOKER
BEGIN SELECT * FROM PlantasPacientes WHERE idPlanta = idPlanta1 or CedulaPaciente = idPlanta1 ;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `deleteMedicos` (IN `CedulaMedico1` VARCHAR(10))  SQL SECURITY INVOKER
BEGIN DELETE FROM medicos WHERE CedulaMedico = CedulaMedico1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `deletePacienteMedico` (IN `CedulaPaciente1` VARCHAR(10))  SQL SECURITY INVOKER
BEGIN DELETE FROM PacienteMedico WHERE CedulaPaciente = CedulaPaciente1 or CedulaMedico = CedulaPaciente1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `deletePacientes` (IN `CedulaPaciente` INT)  SQL SECURITY INVOKER
BEGIN DELETE FROM pacientes WHERE CedulaPaciente = CedulaPaciente;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `deletePlanta` (IN `idPlantas` INT)  SQL SECURITY INVOKER
BEGIN DELETE FROM plantas WHERE idPlanta = idPlantas;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `deletePlantasPacientes` (IN `idPlanta1` INT(11))  SQL SECURITY INVOKER
BEGIN DELETE FROM PlantasPacientes WHERE idPlanta = idPlanta1 or CedulaPaciente = idPlanta1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `insertMedicos` (`CedulaMedico1` VARCHAR(10), `NombresMedico1` VARCHAR(20), `ApellidosMedico1` VARCHAR(20), `TelefonoMedico1` VARCHAR(15), `EdadMedico1` VARCHAR(3), `SexoMedico1` VARCHAR(3), `CiudadMedico1` VARCHAR(20))  SQL SECURITY INVOKER
BEGIN
INSERT INTO medicos (CedulaMedico,NombresMedico,ApellidosMedico,TelefonoMedico,EdadMedico,SexoMedico,CiudadMedico)
VALUES (CedulaMedico1,NombresMedico1,ApellidosMedico1,TelefonoMedico1,EdadMedico1,SexoMedico1,CiudadMedico1);
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `insertPacienteMedico` (`CedulaPaciente1` VARCHAR(10), `CedulaMedico1` VARCHAR(10))  SQL SECURITY INVOKER
BEGIN
INSERT INTO PacienteMedico (CedulaPaciente,CedulaMedico)
VALUES (CedulaPaciente1,CedulaMedico1);
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `insertPacientes` (`CedulaPaciente1` VARCHAR(10), `NombresPaciente1` VARCHAR(20), `ApellidosPaciente1` VARCHAR(20), `TelefonoPaciente1` VARCHAR(15), `EdadPaciente1` VARCHAR(3), `SexoPaciente1` VARCHAR(3), `CiudadPaciente1` VARCHAR(20), `historialPaciente1` VARCHAR(200))  SQL SECURITY INVOKER
BEGIN
INSERT INTO pacientes (CedulaPaciente,NombresPaciente,ApellidosPaciente,TelefonoPaciente,EdadPaciente,SexoPaciente,CiudadPaciente,historialPaciente )
VALUES (CedulaPaciente1,NombresPaciente1,ApellidosPaciente1,TelefonoPaciente1,EdadPaciente1,SexoPaciente1,CiudadPaciente1,historialPaciente1);
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `insertPlanta` (`NombrePlanta1` VARCHAR(30), `NroPiso1` VARCHAR(3), `JefePlanta1` VARCHAR(30), `numeroHabitacion1` VARCHAR(3))  SQL SECURITY INVOKER
BEGIN
INSERT
	INTO
	plantas (
    NombrePlanta,
	NroPiso,
	JefePlanta,
	numeroHabitacion
  )
VALUES
  (
    NombrePlanta1,
    NroPiso1,
    JefePlanta1,
    numeroHabitacion1
  );
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `insertPlantasPacientes` (`idPlanta1` INT(11), `CedulaPaciente1` VARCHAR(20))  SQL SECURITY INVOKER
BEGIN
INSERT INTO PlantasPacientes (idPlanta,CedulaPaciente)
VALUES (idPlanta1,CedulaPaciente1);
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `listMedicos` ()  SQL SECURITY INVOKER
BEGIN SELECT * FROM medicos;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `listPacienteMedicos` ()  SQL SECURITY INVOKER
BEGIN SELECT * FROM PacienteMedico;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `listPacientes` ()  SQL SECURITY INVOKER
BEGIN SELECT * FROM pacientes;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `listPlanta` ()  SQL SECURITY INVOKER
BEGIN SELECT * FROM plantas;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `listPlantasPacientes` ()  SQL SECURITY INVOKER
BEGIN SELECT * FROM PlantasPacientes;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `updateMedicos` (`CedulaMedico1` VARCHAR(10), `NombresMedico1` VARCHAR(20), `ApellidosMedico1` VARCHAR(20), `TelefonoMedico1` VARCHAR(15), `EdadMedico1` VARCHAR(3), `SexoMedico1` VARCHAR(3), `CiudadMedico1` VARCHAR(20))  SQL SECURITY INVOKER
BEGIN
UPDATE medicos SET
NombresMedico = NombresMedico1, 
ApellidosMedico = ApellidosMedico1, 
TelefonoMedico = TelefonoMedico1, 
EdadMedico = EdadMedico1, 
SexoMedico = SexoMedico1, 
CiudadMedico = CiudadMedico1
WHERE CedulaMedico = CedulaMedico1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `updatePacienteMedico` (`CedulaPaciente1` VARCHAR(10), `CedulaMedico1` VARCHAR(10))  SQL SECURITY INVOKER
BEGIN
UPDATE PacienteMedico SET
PacienteMedico = CedulaPaciente1, 
CedulaMedico = CedulaMedico1
WHERE CedulaPaciente = CedulaPaciente1 or CedulaMedico = CedulaPaciente1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `updatePacientes` (`CedulaPaciente1` VARCHAR(10), `NombresPaciente1` VARCHAR(20), `ApellidosPaciente1` VARCHAR(20), `TelefonoPaciente1` VARCHAR(15), `EdadPaciente1` VARCHAR(3), `SexoPaciente1` VARCHAR(3), `CiudadPaciente1` VARCHAR(20), `historialPaciente1` VARCHAR(200))  SQL SECURITY INVOKER
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
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `updatePlanta` (`idPlanta1` INT(11), `NombrePlanta1` VARCHAR(30), `NroPiso1` VARCHAR(3), `JefePlanta1` VARCHAR(30), `numeroHabitacion1` VARCHAR(3))  SQL SECURITY INVOKER
BEGIN
UPDATE
	plantas
SET
	NombrePlanta = NombrePlanta1,
	NroPiso = NroPiso1,
	JefePlanta = JefePlanta1,
	numeroHabitacion = numeroHabitacion1
WHERE
	idPlanta = idPlanta1;
END$$

CREATE DEFINER=`admin`@`localhost` PROCEDURE `updatePlantasPacientes` (`idPlanta1` INT(11), `CedulaPaciente1` VARCHAR(20))  SQL SECURITY INVOKER
BEGIN
UPDATE PlantasPacientes SET
idPlanta = idPlanta1, 
CedulaPaciente = CedulaPaciente1
WHERE idPlanta = idPlanta1 and CedulaPaciente = idPlanta1;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `CedulaMedico` varchar(10) NOT NULL,
  `NombresMedico` varchar(20) NOT NULL,
  `ApellidosMedico` varchar(20) NOT NULL,
  `TelefonoMedico` varchar(15) NOT NULL,
  `EdadMedico` varchar(3) NOT NULL,
  `SexoMedico` varchar(3) NOT NULL,
  `CiudadMedico` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`CedulaMedico`, `NombresMedico`, `ApellidosMedico`, `TelefonoMedico`, `EdadMedico`, `SexoMedico`, `CiudadMedico`) VALUES
('1657', 'Giselasss', 'Russo', '860-3485', '31', 'F', 'Montemiio'),
('2159', 'Gisela', 'Russo', '860-3485', '31', 'F', 'Montemignaio'),
('219', 'Gisela', 'Russo', '860-3485', '31', 'F', 'Montemiio'),
('2642', 'Phyllis', 'Simpson', '768-4976', '3', 'F', 'Penicuik'),
('2874', 'Kameko', 'Wallace', '715-4607', '53', 'M', 'Oldenzaal'),
('3267', 'Jack', 'Chavez', '316-6918', '60', 'F', 'Arlon'),
('3271', 'Yolanda', 'Pennington', '189-0220', '62', 'F', 'Arsimont'),
('3678', 'Raja', 'Tucker', '241-8071', '14', 'F', 'Mâcon'),
('8358', 'Ivor', 'Cardenas', '398-7690', '1', 'F', 'Mold'),
('8687', 'Kirestin', 'Mccormick', '781-1547', '100', 'F', 'Saint-Denis'),
('9898', 'Alea', 'Pate', '292-3113', '82', 'M', 'Montbliart');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PacienteMedico`
--

CREATE TABLE `PacienteMedico` (
  `CedulaPaciente` varchar(10) DEFAULT NULL,
  `CedulaMedico` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `PacienteMedico`
--

INSERT INTO `PacienteMedico` (`CedulaPaciente`, `CedulaMedico`) VALUES
('3698', '2874'),
('7706', '2642'),
('1363', '8358'),
('5059', '9898'),
('7206', '3678'),
('4124', '1657'),
('2231', '3267'),
('2992', '8687'),
('4497', '3271'),
('5059', '2159');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `CedulaPaciente` varchar(10) NOT NULL,
  `NombresPaciente` varchar(20) NOT NULL,
  `ApellidosPaciente` varchar(20) NOT NULL,
  `TelefonoPaciente` varchar(15) NOT NULL,
  `EdadPaciente` varchar(3) NOT NULL,
  `SexoPaciente` varchar(3) NOT NULL,
  `CiudadPaciente` varchar(20) NOT NULL,
  `historialPaciente` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`CedulaPaciente`, `NombresPaciente`, `ApellidosPaciente`, `TelefonoPaciente`, `EdadPaciente`, `SexoPaciente`, `CiudadPaciente`, `historialPaciente`) VALUES
('1363', 'Caldwell', 'Moreno', '114-9785', '59', 'F', 'Darbhanga', 'Amlodipine Besylate'),
('2231', 'Acton', 'Trevino', '586-0291', '69', 'M', 'Presles', 'Azithromycin'),
('2992', 'Coby', 'Graham', '972-3305', '85', 'F', 'Neerglabbeek', 'Amlodipine Besylate'),
('3698', 'Cain', 'Randall', '922-9469', '15', 'M', 'Viña del Mar', 'Allopurinol'),
('4124', 'Moses', 'Sanchez', '204-9058', '19', 'M', 'Banjar', 'Metformin HCl'),
('4497', 'Bruce', 'Rosales', '1-539-519-2243', '1', 'M', 'GŽrouville', 'Hydrocodone/APAP'),
('5059', 'Ian', 'Weber', '431-5278', '32', 'M', 'Bhopal', 'Atenolol'),
('5108', 'Ingrid', 'Riggs', '727-2544', '95', 'M', 'La Paz', 'Azithromycin'),
('51082', 'Ingrid', 'Riggsxxxxx', '727-2544', '95', 'M', 'La Paz', 'Azithromycin'),
('7206', 'Robin', 'David', '1-780-918-6571', '42', 'M', 'Floridablanca', 'Lovaza'),
('7706', 'Nero', 'Castro', '1-495-239-5533', '30', 'M', 'Kungälv', 'Triamcinolone Acetonide');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas`
--

CREATE TABLE `plantas` (
  `idPlanta` int(11) NOT NULL,
  `NombrePlanta` varchar(30) NOT NULL,
  `NroPiso` varchar(3) NOT NULL,
  `JefePlanta` varchar(30) NOT NULL,
  `numeroHabitacion` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `plantas`
--

INSERT INTO `plantas` (`idPlanta`, `NombrePlanta`, `NroPiso`, `JefePlanta`, `numeroHabitacion`) VALUES
(1, 'As', '968', 'Callum', '276'),
(2, 'Cuccaro Vetere', '954', 'Rylee', '902'),
(3, 'Golspie', '573', 'Skyler', '720'),
(4, 'Granada', '608', 'Nolan', '883'),
(5, '3', '3', 'carlos h', '230'),
(6, 'Haren', '872', 'Ariel', '405'),
(7, 'Loksbergen', '828', 'Zeus', '836'),
(8, 'Zaffelare', '241', 'Keegan', '943'),
(9, 'New Bombay', '575', 'Yardley', '417'),
(10, 'Minyar', '482', 'Kameko', '539'),
(11, '2', '4', 'carlos', '200');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PlantasPacientes`
--

CREATE TABLE `PlantasPacientes` (
  `idPlanta` int(11) DEFAULT NULL,
  `CedulaPaciente` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `PlantasPacientes`
--

INSERT INTO `PlantasPacientes` (`idPlanta`, `CedulaPaciente`) VALUES
(2, '3698'),
(3, '7706'),
(4, '1363'),
(5, '5059'),
(6, '7206'),
(7, '4124'),
(8, '2231'),
(9, '2992'),
(10, '4497'),
(4, '3698');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`CedulaMedico`);

--
-- Indices de la tabla `PacienteMedico`
--
ALTER TABLE `PacienteMedico`
  ADD KEY `CedulaPaciente` (`CedulaPaciente`),
  ADD KEY `CedulaMedico` (`CedulaMedico`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`CedulaPaciente`);

--
-- Indices de la tabla `plantas`
--
ALTER TABLE `plantas`
  ADD PRIMARY KEY (`idPlanta`);

--
-- Indices de la tabla `PlantasPacientes`
--
ALTER TABLE `PlantasPacientes`
  ADD KEY `idPlanta` (`idPlanta`),
  ADD KEY `CedulaPaciente` (`CedulaPaciente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plantas`
--
ALTER TABLE `plantas`
  MODIFY `idPlanta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `PacienteMedico`
--
ALTER TABLE `PacienteMedico`
  ADD CONSTRAINT `pacientemedico_ibfk_1` FOREIGN KEY (`CedulaPaciente`) REFERENCES `pacientes` (`CedulaPaciente`),
  ADD CONSTRAINT `pacientemedico_ibfk_2` FOREIGN KEY (`CedulaMedico`) REFERENCES `medicos` (`CedulaMedico`);

--
-- Filtros para la tabla `PlantasPacientes`
--
ALTER TABLE `PlantasPacientes`
  ADD CONSTRAINT `plantaspacientes_ibfk_1` FOREIGN KEY (`idPlanta`) REFERENCES `plantas` (`idPlanta`),
  ADD CONSTRAINT `plantaspacientes_ibfk_2` FOREIGN KEY (`CedulaPaciente`) REFERENCES `pacientes` (`CedulaPaciente`);
