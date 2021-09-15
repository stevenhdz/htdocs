-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 15-09-2021 a las 15:24:38
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `api`
--
CREATE DATABASE IF NOT EXISTS `api` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `api`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(80, 'hola2', 'prue2ba@prueba.com', '$2y$10$PBz7fV4/hjrp0avR8ccyuuj.5GAaRVv3katk3Z98S9UXml8cF/u.m'),
(82, 'prueba', 'prue2ba@prueba.com', '$2y$10$/zU4iXF/2nHHK3o.XpeXGu0zcF6ILFTPVFjaBDMS9HYhFsP3URdHe'),
(83, 'hola2', 'prue2ba@prueba.com', '$2y$10$l49ilg/OYw68cWb0oShyqO3KFgBZoix67vm90SNQun7pGudqQlWR2'),
(84, 'alex', 'prue2ba@prueba.com', '$2y$10$Fp/9DY5ddFF73DVnJISF0e8Wp1DE6Vp.0ScpaEnudCr7CVv8/ljj2'),
(85, 'hola2', 'prue2ba@prueba.com', '$2y$10$IDotrCLkqMqsHL9pTRxPy.i3KOOj7CxJB89yAt7W6NPoBsC7e8t1C'),
(86, 'hola2', 'prue2ba@prueba.com', '$2y$10$79pksHVmesF3jmSnXBmsYebwRDQJIH0Kc.CR2DhSQJO6l2wVOZ3oW'),
(87, 'hola2', 'prue2ba@prueba.com', '$2y$10$qBz6xPBakWq3t.CQyZa1DeDHMe9dI9VAsi.VWx3DPkDdbN4KpDLUu'),
(88, 'hola2', 'prue2ba@prueba.com', '$2y$10$rq47hVX33riaLehmwWYCueh.QvDI7eoCR9JGfbIxAfoxGLyz5EBbW'),
(89, 'hghghg', 'gfgfg', '$2y$10$8eWbLT.Ra8e/XN85rwIfLeNcNS9VGSZLk2/6y7bCjKqdjwmgnUVm.'),
(90, 'prueba', 'prueba', 'prueba'),
(91, 'prueba', 'prueba', 'prueba'),
(92, 'pruebassss', 'prueba', 'prueba'),
(93, 'hola2', 'prue2ba@prueba.com', '$2y$10$NDT21qEqE8b9Dug6wWrZcu53OCYxfTBYb./WRuipN4DMDMb2eRUim');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
--
-- Base de datos: `base`
--
CREATE DATABASE IF NOT EXISTS `base` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `base`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `base`
--

CREATE TABLE `base` (
  `id` int(100) NOT NULL,
  `nombreP` varchar(100) NOT NULL,
  `precio` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `fechaC` date NOT NULL,
  `fechaV` datetime NOT NULL,
  `referencia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `base`
--

INSERT INTO `base` (`id`, `nombreP`, `precio`, `categoria`, `stock`, `fechaC`, `fechaV`, `referencia`) VALUES
(6, 'Alexander12', 999, 'dsds', 2323, '2021-04-17', '2020-10-10 00:00:00', 'dsdsdsd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `base`
--
ALTER TABLE `base`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `base`
--
ALTER TABLE `base`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Base de datos: `bdhospital`
--
CREATE DATABASE IF NOT EXISTS `bdhospital` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdhospital`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `CED_CLIEN` varchar(10) NOT NULL,
  `DIR_CLIENTE` varchar(10) DEFAULT NULL,
  `NOM_CLIENTE` varchar(10) DEFAULT NULL,
  `TELEF_CLIENTE` varchar(10) DEFAULT NULL,
  `FECHA_V` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devolucion`
--

CREATE TABLE `devolucion` (
  `CONTROL_D` varchar(10) NOT NULL,
  `CONTROL_P` varchar(10) DEFAULT NULL,
  `MULTA_C` varchar(10) DEFAULT NULL,
  `DIAS_R` varchar(10) DEFAULT NULL,
  `TOTAL_M` varchar(10) DEFAULT NULL,
  `FECHA_ENT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `COD_GEN` varchar(10) NOT NULL,
  `NOM_GEN` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `COD_PELICULA` varchar(10) NOT NULL,
  `NOM_PELI` varchar(10) DEFAULT NULL,
  `GENER_PELI` varchar(10) DEFAULT NULL,
  `DUR_PELI` varchar(10) DEFAULT NULL,
  `FORM_PELI` varchar(10) DEFAULT NULL,
  `TITU_PELI` varchar(10) DEFAULT NULL,
  `CANT_PEL` varchar(10) DEFAULT NULL,
  `COD_GEN` varchar(10) DEFAULT NULL,
  `COD_PRO` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PlantasPacientes`
--

CREATE TABLE `PlantasPacientes` (
  `idPlanta` int(11) DEFAULT NULL,
  `CedulaMedico` varchar(20) DEFAULT NULL,
  `CedulaPaciente` varchar(20) DEFAULT NULL,
  `descripcionRemitencia` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `VALOR_P` varchar(10) DEFAULT NULL,
  `FECHA_P` varchar(10) DEFAULT NULL,
  `CONTROL_P` varchar(10) NOT NULL,
  `DIAS_P` varchar(10) DEFAULT NULL,
  `FECHA_V` varchar(10) DEFAULT NULL,
  `CED_CLIEN` varchar(10) DEFAULT NULL,
  `CEDR_CLIE` varchar(10) DEFAULT NULL,
  `CANT_PEL` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamoPelicula`
--

CREATE TABLE `prestamoPelicula` (
  `COD_PRE_PELI` varchar(10) NOT NULL,
  `CONTROL_P` varchar(10) DEFAULT NULL,
  `COD_PELICULA` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamoPeliculas`
--

CREATE TABLE `prestamoPeliculas` (
  `VALOR_P` varchar(10) DEFAULT NULL,
  `FECHA_P` varchar(10) DEFAULT NULL,
  `CONTROL_P` varchar(10) DEFAULT NULL,
  `DIAS_P` varchar(10) DEFAULT NULL,
  `TOTAL_M` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `protagonista`
--

CREATE TABLE `protagonista` (
  `NOM_PROT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `referenciaCliente`
--

CREATE TABLE `referenciaCliente` (
  `CEDR_CLIE` varchar(10) NOT NULL,
  `TELER_P` varchar(10) DEFAULT NULL,
  `NOMR_PERS` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `triage`
--

CREATE TABLE `triage` (
  `codTriage` int(11) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `CedulaPaciente` varchar(10) DEFAULT NULL,
  `CedulaMedico` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TriageMedico`
--

CREATE TABLE `TriageMedico` (
  `codTriage` int(11) DEFAULT NULL,
  `CedulaMedico` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`CED_CLIEN`);

--
-- Indices de la tabla `devolucion`
--
ALTER TABLE `devolucion`
  ADD PRIMARY KEY (`CONTROL_D`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`COD_GEN`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`CedulaMedico`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`CedulaPaciente`);

--
-- Indices de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD PRIMARY KEY (`COD_PELICULA`);

--
-- Indices de la tabla `plantas`
--
ALTER TABLE `plantas`
  ADD PRIMARY KEY (`idPlanta`);

--
-- Indices de la tabla `PlantasPacientes`
--
ALTER TABLE `PlantasPacientes`
  ADD KEY `CedulaMedico` (`CedulaMedico`),
  ADD KEY `idPlanta` (`idPlanta`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`CONTROL_P`);

--
-- Indices de la tabla `prestamoPelicula`
--
ALTER TABLE `prestamoPelicula`
  ADD PRIMARY KEY (`COD_PRE_PELI`);

--
-- Indices de la tabla `referenciaCliente`
--
ALTER TABLE `referenciaCliente`
  ADD PRIMARY KEY (`CEDR_CLIE`);

--
-- Indices de la tabla `triage`
--
ALTER TABLE `triage`
  ADD PRIMARY KEY (`codTriage`),
  ADD KEY `CedulaPaciente` (`CedulaPaciente`),
  ADD KEY `CedulaMedico` (`CedulaMedico`);

--
-- Indices de la tabla `TriageMedico`
--
ALTER TABLE `TriageMedico`
  ADD KEY `CedulaMedico` (`CedulaMedico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plantas`
--
ALTER TABLE `plantas`
  MODIFY `idPlanta` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `PlantasPacientes`
--
ALTER TABLE `PlantasPacientes`
  ADD CONSTRAINT `plantaspacientes_ibfk_1` FOREIGN KEY (`CedulaMedico`) REFERENCES `medicos` (`CedulaMedico`),
  ADD CONSTRAINT `plantaspacientes_ibfk_2` FOREIGN KEY (`idPlanta`) REFERENCES `plantas` (`idPlanta`);

--
-- Filtros para la tabla `triage`
--
ALTER TABLE `triage`
  ADD CONSTRAINT `triage_ibfk_1` FOREIGN KEY (`CedulaPaciente`) REFERENCES `pacientes` (`CedulaPaciente`),
  ADD CONSTRAINT `triage_ibfk_2` FOREIGN KEY (`CedulaMedico`) REFERENCES `TriageMedico` (`CedulaMedico`);

--
-- Filtros para la tabla `TriageMedico`
--
ALTER TABLE `TriageMedico`
  ADD CONSTRAINT `triagemedico_ibfk_1` FOREIGN KEY (`CedulaMedico`) REFERENCES `medicos` (`CedulaMedico`);
--
-- Base de datos: `biblioteca`
--
CREATE DATABASE IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `biblioteca`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Aliumno`
--

CREATE TABLE `Aliumno` (
  `idAlumno` int(11) NOT NULL,
  `CodigoAlumno` varchar(45) NOT NULL,
  `EdadAlumno` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Aliumno`
--

INSERT INTO `Aliumno` (`idAlumno`, `CodigoAlumno`, `EdadAlumno`) VALUES
(1, '1017247467', '24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Asesores`
--

CREATE TABLE `Asesores` (
  `idAsesores` int(11) NOT NULL,
  `idEscuelas` int(11) NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Asesores`
--

INSERT INTO `Asesores` (`idAsesores`, `idEscuelas`, `idPersona`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Autores`
--

CREATE TABLE `Autores` (
  `idAutores` int(11) NOT NULL,
  `idPersona` int(11) NOT NULL,
  `idLibros` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Autores`
--

INSERT INTO `Autores` (`idAutores`, `idPersona`, `idLibros`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AutoresRevistas`
--

CREATE TABLE `AutoresRevistas` (
  `idAutores` int(11) NOT NULL,
  `idRevistas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `AutoresRevistas`
--

INSERT INTO `AutoresRevistas` (`idAutores`, `idRevistas`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Bibliotecario`
--

CREATE TABLE `Bibliotecario` (
  `idBibliotecario` int(11) NOT NULL,
  `idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Bibliotecario`
--

INSERT INTO `Bibliotecario` (`idBibliotecario`, `idPersona`) VALUES
(2, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Escuelas`
--

CREATE TABLE `Escuelas` (
  `idEscuelas` int(11) NOT NULL,
  `Nombre escuelas` varchar(45) NOT NULL,
  `idFacultades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Escuelas`
--

INSERT INTO `Escuelas` (`idEscuelas`, `Nombre escuelas`, `idFacultades`) VALUES
(1, 'Escuela remington', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Facultades`
--

CREATE TABLE `Facultades` (
  `idFacultades` int(11) NOT NULL,
  `Nombre Facultad` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Facultades`
--

INSERT INTO `Facultades` (`idFacultades`, `Nombre Facultad`) VALUES
(1, 'Torre 2 biblioteca Remington');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `LibroPrestamoLibros`
--

CREATE TABLE `LibroPrestamoLibros` (
  `idLibros` int(11) NOT NULL,
  `idPrestamoLibros` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `LibroPrestamoLibros`
--

INSERT INTO `LibroPrestamoLibros` (`idLibros`, `idPrestamoLibros`) VALUES
(1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Libros`
--

CREATE TABLE `Libros` (
  `idLibros` int(11) NOT NULL,
  `CodigoLibro` varchar(45) NOT NULL,
  `NombreLibro` varchar(45) NOT NULL,
  `editorial` varchar(45) NOT NULL,
  `numeroedicion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Libros`
--

INSERT INTO `Libros` (`idLibros`, `CodigoLibro`, `NombreLibro`, `editorial`, `numeroedicion`) VALUES
(1, '111', 'Nodejs 2021', 'Programacion', '6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mismoNombre`
--

CREATE TABLE `mismoNombre` (
  `nombresCompletos` varchar(75) NOT NULL,
  `cantidad` bigint(21) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `mismoNombre`
--

INSERT INTO `mismoNombre` (`nombresCompletos`, `cantidad`) VALUES
('Alex', 1),
('Alexander', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Persona`
--

CREATE TABLE `Persona` (
  `idPersona` int(11) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `Nombres` varchar(75) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `idAlumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Persona`
--

INSERT INTO `Persona` (`idPersona`, `dni`, `Nombres`, `Apellidos`, `genero`, `direccion`, `telefono`, `correo`, `idAlumno`) VALUES
(1, '1017247467', 'Alexander', 'Hernandez', 'masculino', 'calle 116', '3023571736', 'stevenhernandezj@gmail.com', 1),
(2, '1017247468', 'Alex', 'Hernan', 'masculino', 'calle 116', '3023571736', 'stevenhernandezj@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Prestamos`
--

CREATE TABLE `Prestamos` (
  `idPrestamos` int(11) NOT NULL,
  `NumeroPrestamo` varchar(45) NOT NULL,
  `FechaPrestamo` varchar(45) NOT NULL,
  `HoraPrestamo` varchar(45) NOT NULL,
  `idTipoPrestamo` int(11) NOT NULL,
  `idBibliotecario` int(11) NOT NULL,
  `idAlumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Prestamos`
--

INSERT INTO `Prestamos` (`idPrestamos`, `NumeroPrestamo`, `FechaPrestamo`, `HoraPrestamo`, `idTipoPrestamo`, `idBibliotecario`, `idAlumno`) VALUES
(1, '1', '2020-03-04', '12:00', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PrestamosLibros`
--

CREATE TABLE `PrestamosLibros` (
  `idPrestamoLibros` int(11) NOT NULL,
  `idTipoPrestamo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `PrestamosLibros`
--

INSERT INTO `PrestamosLibros` (`idPrestamoLibros`, `idTipoPrestamo`) VALUES
(1, 1),
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PrestamosRevistas`
--

CREATE TABLE `PrestamosRevistas` (
  `idPrestamoRevistas` int(11) NOT NULL,
  `idTipoPrestamo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `PrestamosRevistas`
--

INSERT INTO `PrestamosRevistas` (`idPrestamoRevistas`, `idTipoPrestamo`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PrstamoTesis`
--

CREATE TABLE `PrstamoTesis` (
  `idPrestamoTesis` int(11) NOT NULL,
  `idTipoPrestamo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `PrstamoTesis`
--

INSERT INTO `PrstamoTesis` (`idPrestamoTesis`, `idTipoPrestamo`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Revistas`
--

CREATE TABLE `Revistas` (
  `idRevistas` int(11) NOT NULL,
  `Añopublicacion` varchar(45) NOT NULL,
  `volumen` varchar(45) NOT NULL,
  `nombreEntrevista` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Revistas`
--

INSERT INTO `Revistas` (`idRevistas`, `Añopublicacion`, `volumen`, `nombreEntrevista`) VALUES
(1, '2020', '3', 'Como salir adelante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RevistasPrestamoRevistas`
--

CREATE TABLE `RevistasPrestamoRevistas` (
  `idRevistas` int(11) NOT NULL,
  `idPrestamoRevistas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `RevistasPrestamoRevistas`
--

INSERT INTO `RevistasPrestamoRevistas` (`idRevistas`, `idPrestamoRevistas`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tesis`
--

CREATE TABLE `Tesis` (
  `idTesis` int(11) NOT NULL,
  `NombreTesista` varchar(45) NOT NULL,
  `NombreTesis` varchar(45) NOT NULL,
  `idFacultades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Tesis`
--

INSERT INTO `Tesis` (`idTesis`, `NombreTesista`, `NombreTesis`, `idFacultades`) VALUES
(1, 'Alexander', 'Programacion Flutter app market', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TesisPrestamoTesis`
--

CREATE TABLE `TesisPrestamoTesis` (
  `idTesis` int(11) NOT NULL,
  `idPrestamoTesis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `TesisPrestamoTesis`
--

INSERT INTO `TesisPrestamoTesis` (`idTesis`, `idPrestamoTesis`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TipoPrestamo`
--

CREATE TABLE `TipoPrestamo` (
  `idTipoPrestamo` int(11) NOT NULL,
  `NombreTipoPrestamo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `TipoPrestamo`
--

INSERT INTO `TipoPrestamo` (`idTipoPrestamo`, `NombreTipoPrestamo`) VALUES
(1, 'Prestamo de Libro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Aliumno`
--
ALTER TABLE `Aliumno`
  ADD PRIMARY KEY (`idAlumno`);

--
-- Indices de la tabla `Asesores`
--
ALTER TABLE `Asesores`
  ADD PRIMARY KEY (`idAsesores`),
  ADD KEY `idEscuelas` (`idEscuelas`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `Autores`
--
ALTER TABLE `Autores`
  ADD PRIMARY KEY (`idAutores`),
  ADD KEY `idPersona` (`idPersona`),
  ADD KEY `idLibros` (`idLibros`);

--
-- Indices de la tabla `AutoresRevistas`
--
ALTER TABLE `AutoresRevistas`
  ADD KEY `idAutores` (`idAutores`),
  ADD KEY `idRevistas` (`idRevistas`);

--
-- Indices de la tabla `Bibliotecario`
--
ALTER TABLE `Bibliotecario`
  ADD PRIMARY KEY (`idBibliotecario`),
  ADD KEY `idPersona` (`idPersona`);

--
-- Indices de la tabla `Escuelas`
--
ALTER TABLE `Escuelas`
  ADD PRIMARY KEY (`idEscuelas`),
  ADD KEY `idFacultades` (`idFacultades`);

--
-- Indices de la tabla `Facultades`
--
ALTER TABLE `Facultades`
  ADD PRIMARY KEY (`idFacultades`);

--
-- Indices de la tabla `LibroPrestamoLibros`
--
ALTER TABLE `LibroPrestamoLibros`
  ADD KEY `idLibros` (`idLibros`);

--
-- Indices de la tabla `Libros`
--
ALTER TABLE `Libros`
  ADD PRIMARY KEY (`idLibros`);

--
-- Indices de la tabla `Persona`
--
ALTER TABLE `Persona`
  ADD PRIMARY KEY (`idPersona`),
  ADD KEY `idAlumno` (`idAlumno`);

--
-- Indices de la tabla `Prestamos`
--
ALTER TABLE `Prestamos`
  ADD PRIMARY KEY (`idPrestamos`),
  ADD KEY `idTipoPrestamo` (`idTipoPrestamo`),
  ADD KEY `idBibliotecario` (`idBibliotecario`),
  ADD KEY `idAlumno` (`idAlumno`);

--
-- Indices de la tabla `PrestamosLibros`
--
ALTER TABLE `PrestamosLibros`
  ADD PRIMARY KEY (`idPrestamoLibros`),
  ADD KEY `idTipoPrestamo` (`idTipoPrestamo`);

--
-- Indices de la tabla `PrestamosRevistas`
--
ALTER TABLE `PrestamosRevistas`
  ADD PRIMARY KEY (`idPrestamoRevistas`),
  ADD KEY `idTipoPrestamo` (`idTipoPrestamo`);

--
-- Indices de la tabla `PrstamoTesis`
--
ALTER TABLE `PrstamoTesis`
  ADD PRIMARY KEY (`idPrestamoTesis`),
  ADD KEY `idTipoPrestamo` (`idTipoPrestamo`);

--
-- Indices de la tabla `Revistas`
--
ALTER TABLE `Revistas`
  ADD PRIMARY KEY (`idRevistas`);

--
-- Indices de la tabla `RevistasPrestamoRevistas`
--
ALTER TABLE `RevistasPrestamoRevistas`
  ADD KEY `idRevistas` (`idRevistas`),
  ADD KEY `idPrestamoRevistas` (`idPrestamoRevistas`);

--
-- Indices de la tabla `Tesis`
--
ALTER TABLE `Tesis`
  ADD PRIMARY KEY (`idTesis`),
  ADD KEY `idFacultades` (`idFacultades`);

--
-- Indices de la tabla `TesisPrestamoTesis`
--
ALTER TABLE `TesisPrestamoTesis`
  ADD KEY `idTesis` (`idTesis`),
  ADD KEY `idPrestamoTesis` (`idPrestamoTesis`);

--
-- Indices de la tabla `TipoPrestamo`
--
ALTER TABLE `TipoPrestamo`
  ADD PRIMARY KEY (`idTipoPrestamo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Aliumno`
--
ALTER TABLE `Aliumno`
  MODIFY `idAlumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Asesores`
--
ALTER TABLE `Asesores`
  MODIFY `idAsesores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Autores`
--
ALTER TABLE `Autores`
  MODIFY `idAutores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Bibliotecario`
--
ALTER TABLE `Bibliotecario`
  MODIFY `idBibliotecario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Escuelas`
--
ALTER TABLE `Escuelas`
  MODIFY `idEscuelas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Facultades`
--
ALTER TABLE `Facultades`
  MODIFY `idFacultades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Libros`
--
ALTER TABLE `Libros`
  MODIFY `idLibros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Persona`
--
ALTER TABLE `Persona`
  MODIFY `idPersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Prestamos`
--
ALTER TABLE `Prestamos`
  MODIFY `idPrestamos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `PrestamosLibros`
--
ALTER TABLE `PrestamosLibros`
  MODIFY `idPrestamoLibros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `PrestamosRevistas`
--
ALTER TABLE `PrestamosRevistas`
  MODIFY `idPrestamoRevistas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `PrstamoTesis`
--
ALTER TABLE `PrstamoTesis`
  MODIFY `idPrestamoTesis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Revistas`
--
ALTER TABLE `Revistas`
  MODIFY `idRevistas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Tesis`
--
ALTER TABLE `Tesis`
  MODIFY `idTesis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `TipoPrestamo`
--
ALTER TABLE `TipoPrestamo`
  MODIFY `idTipoPrestamo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Asesores`
--
ALTER TABLE `Asesores`
  ADD CONSTRAINT `asesores_ibfk_1` FOREIGN KEY (`idEscuelas`) REFERENCES `Escuelas` (`idEscuelas`),
  ADD CONSTRAINT `asesores_ibfk_2` FOREIGN KEY (`idPersona`) REFERENCES `Persona` (`idPersona`);

--
-- Filtros para la tabla `Autores`
--
ALTER TABLE `Autores`
  ADD CONSTRAINT `autores_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `Persona` (`idPersona`),
  ADD CONSTRAINT `autores_ibfk_2` FOREIGN KEY (`idLibros`) REFERENCES `Libros` (`idLibros`);

--
-- Filtros para la tabla `AutoresRevistas`
--
ALTER TABLE `AutoresRevistas`
  ADD CONSTRAINT `autoresrevistas_ibfk_1` FOREIGN KEY (`idAutores`) REFERENCES `Autores` (`idAutores`),
  ADD CONSTRAINT `autoresrevistas_ibfk_2` FOREIGN KEY (`idRevistas`) REFERENCES `Revistas` (`idRevistas`);

--
-- Filtros para la tabla `Bibliotecario`
--
ALTER TABLE `Bibliotecario`
  ADD CONSTRAINT `bibliotecario_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `Persona` (`idPersona`);

--
-- Filtros para la tabla `Escuelas`
--
ALTER TABLE `Escuelas`
  ADD CONSTRAINT `escuelas_ibfk_1` FOREIGN KEY (`idFacultades`) REFERENCES `Facultades` (`idFacultades`);

--
-- Filtros para la tabla `LibroPrestamoLibros`
--
ALTER TABLE `LibroPrestamoLibros`
  ADD CONSTRAINT `libroprestamolibros_ibfk_1` FOREIGN KEY (`idLibros`) REFERENCES `Libros` (`idLibros`),
  ADD CONSTRAINT `libroprestamolibros_ibfk_2` FOREIGN KEY (`idLibros`) REFERENCES `PrestamosLibros` (`idPrestamoLibros`);

--
-- Filtros para la tabla `Persona`
--
ALTER TABLE `Persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`idAlumno`) REFERENCES `Aliumno` (`idAlumno`);

--
-- Filtros para la tabla `Prestamos`
--
ALTER TABLE `Prestamos`
  ADD CONSTRAINT `prestamos_ibfk_1` FOREIGN KEY (`idTipoPrestamo`) REFERENCES `TipoPrestamo` (`idTipoPrestamo`),
  ADD CONSTRAINT `prestamos_ibfk_2` FOREIGN KEY (`idBibliotecario`) REFERENCES `Bibliotecario` (`idBibliotecario`),
  ADD CONSTRAINT `prestamos_ibfk_3` FOREIGN KEY (`idAlumno`) REFERENCES `Aliumno` (`idAlumno`);

--
-- Filtros para la tabla `PrestamosLibros`
--
ALTER TABLE `PrestamosLibros`
  ADD CONSTRAINT `prestamoslibros_ibfk_1` FOREIGN KEY (`idTipoPrestamo`) REFERENCES `TipoPrestamo` (`idTipoPrestamo`);

--
-- Filtros para la tabla `PrestamosRevistas`
--
ALTER TABLE `PrestamosRevistas`
  ADD CONSTRAINT `prestamosrevistas_ibfk_1` FOREIGN KEY (`idTipoPrestamo`) REFERENCES `TipoPrestamo` (`idTipoPrestamo`);

--
-- Filtros para la tabla `PrstamoTesis`
--
ALTER TABLE `PrstamoTesis`
  ADD CONSTRAINT `prstamotesis_ibfk_1` FOREIGN KEY (`idTipoPrestamo`) REFERENCES `TipoPrestamo` (`idTipoPrestamo`);

--
-- Filtros para la tabla `RevistasPrestamoRevistas`
--
ALTER TABLE `RevistasPrestamoRevistas`
  ADD CONSTRAINT `revistasprestamorevistas_ibfk_1` FOREIGN KEY (`idRevistas`) REFERENCES `Revistas` (`idRevistas`),
  ADD CONSTRAINT `revistasprestamorevistas_ibfk_2` FOREIGN KEY (`idPrestamoRevistas`) REFERENCES `PrestamosRevistas` (`idPrestamoRevistas`);

--
-- Filtros para la tabla `Tesis`
--
ALTER TABLE `Tesis`
  ADD CONSTRAINT `tesis_ibfk_1` FOREIGN KEY (`idFacultades`) REFERENCES `Facultades` (`idFacultades`);

--
-- Filtros para la tabla `TesisPrestamoTesis`
--
ALTER TABLE `TesisPrestamoTesis`
  ADD CONSTRAINT `tesisprestamotesis_ibfk_1` FOREIGN KEY (`idTesis`) REFERENCES `Tesis` (`idTesis`),
  ADD CONSTRAINT `tesisprestamotesis_ibfk_2` FOREIGN KEY (`idPrestamoTesis`) REFERENCES `PrstamoTesis` (`idPrestamoTesis`);
--
-- Base de datos: `blog`
--
CREATE DATABASE IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blog`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`) VALUES
(1, 'admin'),
(2, 'colaborador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `rol_id`) VALUES
(1, 'marcos', 'marcos', 1),
(2, 'alex', 'alex', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_rol` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuario_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);
--
-- Base de datos: `bot`
--
CREATE DATABASE IF NOT EXISTS `bot` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bot`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chatbot`
--

CREATE TABLE `chatbot` (
  `id` int(11) NOT NULL,
  `queries` varchar(300) NOT NULL,
  `replies` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `chatbot`
--

INSERT INTO `chatbot` (`id`, `queries`, `replies`) VALUES
(1, 'hola|hi', 'hola que tal?'),
(2, 'como estas?|como estas', 'Bien y tu?');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Base de datos: `cadena`
--
CREATE DATABASE IF NOT EXISTS `cadena` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `cadena`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `carnet` char(10) NOT NULL,
  `nombre` char(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`carnet`, `nombre`) VALUES
('0601110015', 'CUADROS BALDRICH MARIA ALEJANDRA'),
('0601110034', 'HOLGUIN MUNOZ HERVIN HAROLD'),
('0700310071', 'ORREGO LOZANO JUAN JOSE'),
('0701110007', 'ANGEL ACEVEDO LEIDY TATIANA'),
('0701110013', 'JARAMILLO MONTOYA JUAN PABLO'),
('0701110016', 'CHICA JANNA JUAN DAVID'),
('0701110031', 'MARTINEZ PATINO YULIETH PAOLA'),
('0701110036', 'MALLAMA GIRALDO ANGIE CAROLINA'),
('0701110037', 'FLOREZ SALDARRIAGA MIGUEL ANGEL'),
('0701110051', 'FAJARDO QUINTERO JOHANA CATALINA'),
('0701110055', 'GALLEGO ZAPATA SINDY CATHERINNE'),
('0701110063', 'ARIAS JIMENEZ JOHAN'),
('0710620022', 'YEPES GRISALES NATHALIA'),
('0710720005', 'QUINTERO  JOSE MIGUEL'),
('0710720010', 'BOLIVAR CARTAGENA GUILLERMO ALEXIS'),
('0710820004', 'ZULUAGA DIAZ HECTOR EDUARDO'),
('0710820025', 'ZAPATA BEDOYA VICTOR FABIAN'),
('0710820026', 'CONDE ALVAREZ YESICA YESSENIA'),
('0710820034', 'ADARMES MURCIA JESSICA  BRIGHIT'),
('0710910007', 'QUINCHIA CHAVERRA EDWIN ALEXANDER'),
('0710910018', 'ALZATE ARROYAVE MAURICIO'),
('0711020003', 'AGUILAR LARGO JESUS AUGUSTO'),
('0721110006', 'CASTRO SUAREZ RUTH ANGELICA'),
('0721110008', 'HIDALGO CADAVID CAROLINA'),
('0721110012', 'GARCIA MORALES LUISA FERNANDA'),
('0721110017', 'GALVIS CUESTA KELLY JOHANA'),
('0721110022', 'CORREA GONZALEZ GABRIEL JOSE'),
('0721110023', 'SAENZ DANIELA FERNANDA'),
('0721110025', 'CASTRILLON SALAZAR ISABEL CRISTINA'),
('0721110028', 'MANCILLA MONTERO MARLYS MACIEL'),
('0721110033', 'BEDOYA ACEVEDO LILIANA'),
('0721110034', 'GARCIA MENDEZ SARA DANIELA'),
('0721110036', 'GOMEZ BELTRAN KATHERINE JOHANA'),
('0731110017', 'MADRID MURILLO ARLENYS'),
('0731110020', 'MACIAS HERNANDEZ YURI ALEIDA'),
('0741110010', 'PALACIOS QUINTO SNDY'),
('0741110016', 'GRANADOS MARIN DAVID FELIPE'),
('0750210001', 'HENAO BRAN DIXON RODRIGO'),
('0750310024', 'PALACIOS ALUMA MARBIN'),
('0750410035', 'LONDONO HERRERA DORIAN ALEXANDER'),
('0750616022', 'ESTRADA MARTINEZ ANET ELLACY'),
('0750710001', 'OROZCO MONTOYA MARLON FELIPE'),
('0750710003', 'BLANDON NARANJO ADRIANA MARIA'),
('0750710014', 'MONTOYA LONDONO SERGIO ANDRES'),
('0750816010', 'ECHAVARRIA RIOS JENIFER ANDREA'),
('0750826036', 'SEPULVEDA GARCIA ADRIANA ROCIO'),
('0750920012', 'BENJUMEA HERRERA CAMILO ANDRES'),
('0751010013', 'DUQUE LOPEZ YESID ANDRES'),
('0751010015', 'LOPERA BUILES VICTOR ARLEY'),
('0751010021', 'SALAZAR ALZATE LEON RODRIGO'),
('0751016012', 'PALACIOS PALACIOS JESSIE JACKSON'),
('0751016023', 'LOPERA AGUDELO MARIA MAGDALENA'),
('0751020017', 'GOMEZ JIMENEZ DEICY JULIANA'),
('0751020018', 'CALIXTO BETANCOURT JENNY MARCELA'),
('0751020021', 'LONDONO OCAMPO WALTER FABER'),
('0751026030', 'RAMOS ASPRILLA YUBER JOSE'),
('0751110010', 'FUENTES VARGAS EDUWIN DANIEL'),
('0751110014', 'ROJAS VALENCIA OSCAR FERNANDO'),
('0751110017', 'RAMIREZ HERMES'),
('0751110018', 'VERGARA DIAZ YURANIS MARLEY'),
('0751110034', 'RODRIGUEZ CARDONA YENY ANDREA'),
('0751110036', 'MUNOZ CADAVID ANA MARINA'),
('0751110046', 'ISAZA MORALES NELSON JOVANNY'),
('0751110047', 'VEGA BONILLA LIZET VANESSA'),
('0751116028', 'VERGARA RUA NANCY JULIETH'),
('0751116031', 'QUINTERO MONTES AICARDO'),
('0751116033', 'RENTERIA SANABRIA LUIS ANTONIO'),
('0880920004', 'CORDOBA GARCIA JESBER'),
('0880920022', 'ARBOLEDA PALACIOS YUSLY YULIPSA'),
('0880920023', 'DIAZ RAMIREZ OSCAR  GERMAN'),
('0880920025', 'OSPINA MORENO MARGARITA MARIA'),
('0881010011', 'RESTREPO GOMEZ RUBEN FERNANDO'),
('0881010015', 'PEREZ CARDENAS STEFANIA'),
('0881020007', 'VANEGAS HENAO ELMER ANDRES'),
('0881020031', 'MUNOZ MONSALVE CIPRIANO ANTONIO'),
('0881110004', 'BLANDON TORRES OVIDIO ALBERTO'),
('0881110009', 'GOMEZ BRAVO LUIS GABRIEL'),
('0881110013', 'AGUDLO SIERRA JOHAN SEBASTIAN'),
('0881110017', 'GRAJALES MUNOZ VICTOR CAMILO'),
('0881110026', 'GARCIA LOPEZ GAYO'),
('0881110029', 'RODRIGUEZ HERNANDEZ PAOLA TATIANA'),
('0881110030', 'GONZALEZ SIERRA JONATAN ANDRES'),
('099015', 'CUADROS BALDRICH MARIA     ALEJANDRA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`carnet`);
--
-- Base de datos: `chat`
--
CREATE DATABASE IF NOT EXISTS `chat` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `chat`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `from` varchar(128) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `chat`
--

INSERT INTO `chat` (`id`, `message`, `from`, `created`, `image`) VALUES
(331, 'Hola', 'Camila Henrandez', '2020-12-23 03:54:05', '1608682132.jpg'),
(332, 'Hola', 'Steven Alexander hernandez', '2020-12-23 03:54:38', '1606596776.jpg'),
(333, 'Como vas?', 'Steven Alexander hernandez', '2020-12-23 03:59:20', '1606596776.jpg'),
(334, 'xxxxxxxxxxxxxxxxxxx', 'Steven Alexander hernandez', '2020-12-23 03:59:32', '1606596776.jpg'),
(335, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'Steven Alexander hernandez', '2020-12-23 03:59:39', '1606596776.jpg'),
(336, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'Steven Alexander hernandez', '2020-12-23 04:00:00', '1606596776.jpg'),
(337, 'd', 'Steven Alexander hernandez', '2020-12-23 04:00:05', '1606596776.jpg'),
(338, 'hola', 'Camila Henrandez', '2020-12-23 04:00:24', '1608682132.jpg'),
(339, 'k', 'Camila Henrandez', '2020-12-25 03:38:05', '1608699350.jpg'),
(340, 'hola', 'Steven Alexander hernandez', '2020-12-28 18:01:39', '1609131130.jpg'),
(341, 'hola', 'Steven Alexander hernandez', '2020-12-28 18:01:42', '1609131130.jpg'),
(342, 'hola', 'Steven Alexander hernandez', '2020-12-28 18:39:09', '1609131130.jpg'),
(343, 'hhh', 'Steven Alexander hernandez', '2021-01-29 23:57:30', '1609131130.jpg'),
(344, 'hggg', 'Steven Alexander hernandez', '2021-01-29 23:57:32', '1609131130.jpg'),
(345, 'socket', 'Camila Henrandez', '2021-05-02 23:16:15', '1612155050.png'),
(346, 'hola', 'Steven Alexander hernandez', '2021-05-02 23:16:22', '1609131130.jpg'),
(347, 'hola', 'Camila Henrandez', '2021-05-02 23:16:25', '1612155050.png'),
(348, 'Hola', 'Steven Alexander hernandez', '2021-05-06 04:31:37', '1609131130.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=349;
--
-- Base de datos: `createinsert`
--
CREATE DATABASE IF NOT EXISTS `createinsert` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `createinsert`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area`
--

CREATE TABLE `area` (
  `CodArea` varchar(5) NOT NULL,
  `Descripcion` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `area`
--

INSERT INTO `area` (`CodArea`, `Descripcion`) VALUES
('003', 'Ciencias Naturales'),
('004', 'Sociales'),
('005', 'Humanidades');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cantidadejemplares`
--

CREATE TABLE `cantidadejemplares` (
  `nombre` varchar(30) NOT NULL,
  `cantidad` bigint(21) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cantidadejemplares`
--

INSERT INTO `cantidadejemplares` (`nombre`, `cantidad`) VALUES
('Ciencias Naturales', 1),
('Humanidades', 1),
('Informatica', 2),
('Matematicas', 2),
('Sociales', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejemplar`
--

CREATE TABLE `ejemplar` (
  `id` varchar(10) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `CodArea` varchar(5) NOT NULL,
  `valor` float NOT NULL,
  `NroPag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ejemplar`
--

INSERT INTO `ejemplar` (`id`, `Nombre`, `CodArea`, `valor`, `NroPag`) VALUES
('5', 'Goegrafia Colombiana', '004', 40000, 82),
('6', 'Ciencias Sexto', '003', 60800, 46),
('7', 'Etica y Valores', '005', 150000, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejemplararea`
--

CREATE TABLE `ejemplararea` (
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ejemplararea`
--

INSERT INTO `ejemplararea` (`nombre`) VALUES
('Matematicas'),
('Informatica'),
('Sociales'),
('Ciencias Naturales'),
('Humanidades');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `numerodeejemplaresporarea`
--

CREATE TABLE `numerodeejemplaresporarea` (
  `descripcion` varchar(25) NOT NULL,
  `cantidad` bigint(21) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `numerodeejemplaresporarea`
--

INSERT INTO `numerodeejemplaresporarea` (`descripcion`, `cantidad`) VALUES
('Ciencias Naturales', 1),
('Humanidades', 1),
('Informatica', 2),
('Matematicas', 2),
('Sociales', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `primer_ejercicio`
--

CREATE TABLE `primer_ejercicio` (
  `id` varchar(10) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `DetalleArea` varchar(30) NOT NULL,
  `Valor` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `primer_ejercicio`
--

INSERT INTO `primer_ejercicio` (`id`, `Nombre`, `DetalleArea`, `Valor`) VALUES
('1', 'Calculo 1', 'Matematicas', 80000),
('2', 'Matematicas Avanzada', 'Matematicas', 90000),
('3', 'Introduccion al Pc', 'Informatica', 120000),
('4', 'Redes y Telematica', 'Informatica', 65000),
('5', 'Geografia Colombiana', 'Sociales', 60000),
('6', 'Ciencias sextos', 'Ciencias Naturales', 60000),
('7', 'Etica y valores', 'Humanidades', 150000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valortotal`
--

CREATE TABLE `valortotal` (
  `detalleArea` varchar(30) NOT NULL,
  `Valor Total` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `valortotal`
--

INSERT INTO `valortotal` (`detalleArea`, `Valor Total`) VALUES
('Ciencias Naturales', 60000),
('Humanidades', 150000),
('Informatica', 185000),
('Matematicas', 170000),
('Sociales', 60000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`CodArea`);

--
-- Indices de la tabla `ejemplar`
--
ALTER TABLE `ejemplar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CodArea` (`CodArea`);

--
-- Indices de la tabla `primer_ejercicio`
--
ALTER TABLE `primer_ejercicio`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ejemplar`
--
ALTER TABLE `ejemplar`
  ADD CONSTRAINT `ejemplar_ibfk_1` FOREIGN KEY (`CodArea`) REFERENCES `area` (`CodArea`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Base de datos: `dbsistema`
--
CREATE DATABASE IF NOT EXISTS `dbsistema` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dbsistema`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `idarticulo` int(11) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `descripcion` varchar(256) DEFAULT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `condicion` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `articulo`
--

INSERT INTO `articulo` (`idarticulo`, `idcategoria`, `codigo`, `nombre`, `stock`, `descripcion`, `imagen`, `condicion`) VALUES
(1, 1, '456', 'hola', 51, 'dd', '1605994147.jpg', 0),
(2, 1, '334', 'pc', -21, 'ss', '1602174765.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idcategoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(256) DEFAULT NULL,
  `condicion` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idcategoria`, `nombre`, `descripcion`, `condicion`) VALUES
(1, 'Alexander', 'ss', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ingreso`
--

CREATE TABLE `detalle_ingreso` (
  `iddetalle_ingreso` int(11) NOT NULL,
  `idingreso` int(11) NOT NULL,
  `idarticulo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_compra` decimal(11,2) NOT NULL,
  `precio_venta` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_ingreso`
--

INSERT INTO `detalle_ingreso` (`iddetalle_ingreso`, `idingreso`, `idarticulo`, `cantidad`, `precio_compra`, `precio_venta`) VALUES
(1, 1, 1, 1, '1.00', '1.00'),
(2, 1, 1, 1, '1.00', '1.00'),
(3, 1, 1, 1, '1.00', '1.00'),
(4, 1, 1, 1, '1.00', '1.00'),
(5, 1, 1, 1, '1.00', '1.00'),
(6, 1, 1, 1, '1.00', '1.00'),
(7, 1, 1, 1, '1.00', '1.00'),
(8, 2, 1, 1, '1.00', '10.00'),
(9, 2, 2, 1, '1.00', '1.00'),
(10, 2, 1, 1, '1.00', '1.00'),
(11, 2, 1, 1, '1.00', '1.00'),
(12, 2, 1, 1, '1.00', '1.00'),
(13, 2, 1, 1, '1.00', '1.00'),
(14, 2, 1, 1, '1.00', '1.00'),
(15, 2, 1, 1, '1.00', '1.00'),
(16, 2, 1, 1, '1.00', '1.00'),
(17, 2, 1, 1, '1.00', '1.00'),
(18, 2, 1, 1, '1.00', '1.00'),
(19, 2, 1, 1, '1.00', '1.00'),
(20, 2, 1, 1, '1.00', '1.00'),
(21, 3, 2, 1, '1.00', '1.00'),
(22, 3, 2, 1, '1.00', '1.00'),
(23, 3, 2, 1, '1.00', '1.00'),
(24, 3, 2, 1, '1.00', '1.00'),
(25, 3, 2, 1, '1.00', '1.00'),
(26, 3, 2, 1, '1.00', '1.00');

--
-- Disparadores `detalle_ingreso`
--
DELIMITER $$
CREATE TRIGGER `tr_updStockIngreso` AFTER INSERT ON `detalle_ingreso` FOR EACH ROW BEGIN
 UPDATE articulo SET stock = stock + NEW.cantidad 
 WHERE articulo.idarticulo = NEW.idarticulo;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `iddetalle_venta` int(11) NOT NULL,
  `idventa` int(11) NOT NULL,
  `idarticulo` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_venta` decimal(11,2) NOT NULL,
  `descuento` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_venta`
--

INSERT INTO `detalle_venta` (`iddetalle_venta`, `idventa`, `idarticulo`, `cantidad`, `precio_venta`, `descuento`) VALUES
(1, 1, 1, 1, '34.00', '0.00'),
(2, 2, 1, 1, '1.00', '0.00'),
(3, 3, 2, 1, '1.00', '0.00'),
(4, 3, 2, 1, '1.00', '0.00'),
(5, 3, 2, 1, '1.00', '0.00'),
(6, 3, 2, 1, '1.00', '0.00'),
(7, 3, 2, 1, '1.00', '0.00'),
(8, 3, 2, 1, '1.00', '0.00'),
(14, 4, 2, 19, '1.00', '0.00'),
(15, 4, 2, 1, '1.00', '0.00'),
(16, 4, 2, 1, '1.00', '0.00'),
(17, 4, 2, 1, '1.00', '0.00'),
(18, 4, 2, 1, '1.00', '0.00');

--
-- Disparadores `detalle_venta`
--
DELIMITER $$
CREATE TRIGGER `tr_updStockVenta` AFTER INSERT ON `detalle_venta` FOR EACH ROW BEGIN
 UPDATE articulo SET stock = stock - NEW.cantidad 
 WHERE articulo.idarticulo = NEW.idarticulo;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso`
--

CREATE TABLE `ingreso` (
  `idingreso` int(11) NOT NULL,
  `idproveedor` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `tipo_comprobante` varchar(20) NOT NULL,
  `serie_comprobante` varchar(7) DEFAULT NULL,
  `num_comprobante` varchar(10) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `impuesto` decimal(4,2) NOT NULL,
  `total_compra` decimal(11,2) NOT NULL,
  `estado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ingreso`
--

INSERT INTO `ingreso` (`idingreso`, `idproveedor`, `idusuario`, `tipo_comprobante`, `serie_comprobante`, `num_comprobante`, `fecha_hora`, `impuesto`, `total_compra`, `estado`) VALUES
(1, 2, 1, 'Boleta', '3', '3', '2020-10-06 00:00:00', '45.00', '7.00', 'Aceptado'),
(2, 2, 1, 'Boleta', '2', '22', '2020-10-30 00:00:00', '90.00', '13.00', 'Aceptado'),
(3, 2, 1, 'Boleta', '2', '121', '2021-02-01 00:00:00', '0.00', '6.00', 'Aceptado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permiso`
--

CREATE TABLE `permiso` (
  `idpermiso` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `permiso`
--

INSERT INTO `permiso` (`idpermiso`, `nombre`) VALUES
(1, 'Escritorio'),
(2, 'Almacen'),
(3, 'Compras'),
(4, 'Ventas'),
(5, 'Acceso'),
(6, 'Consulta Compras'),
(7, 'Consulta Ventas'),
(8, 'Chat'),
(9, 'Soporte'),
(10, 'configuracion avanzada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `idpersona` int(11) NOT NULL,
  `tipo_persona` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo_documento` varchar(20) DEFAULT NULL,
  `num_documento` varchar(20) DEFAULT NULL,
  `direccion` varchar(70) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`idpersona`, `tipo_persona`, `nombre`, `tipo_documento`, `num_documento`, `direccion`, `telefono`, `email`) VALUES
(1, 'Cliente', 'f', 'DNI', '33', 'dd', '44', 'stevenhernandezj@gmail.com'),
(2, 'Proveedor', 'Alexander', 'DNI', '47715778', 'calle 116a', '931742904', 'stevenhernandezj@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soporte`
--

CREATE TABLE `soporte` (
  `idsoporte` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fechaentrada` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `direccion` varchar(100) NOT NULL,
  `cantidadequipos` int(255) NOT NULL,
  `valortotal` varchar(50) NOT NULL,
  `identificador` varchar(50) NOT NULL,
  `respuesta` varchar(2500) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `tipopago` varchar(50) NOT NULL,
  `descripcion` varchar(2500) NOT NULL,
  `valorunidad` decimal(11,0) NOT NULL,
  `adjuntar` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `soporte`
--

INSERT INTO `soporte` (`idsoporte`, `nombres`, `apellidos`, `fechaentrada`, `direccion`, `cantidadequipos`, `valortotal`, `identificador`, `respuesta`, `telefono`, `tipopago`, `descripcion`, `valorunidad`, `adjuntar`, `correo`) VALUES
(60, 'Katerine', 'Arroyave', '2020-12-04 05:53:41', 'Ed Genesis obrero', 1, '50000', 'Persona natural', 'Realizado y entregado.', '3508909456', 'Transferencia', 'Formatear equipo de computo marca  Hewlett-Packard con el numero de serial 5CG9467NX7 el cual se recibió con cargador y funda,bolso, adicional se le instalara programas básicos como office, winrar, navegador cualquier otro software diferente podría generar costo.', '50000', 'Katerine-2020-10-28T10:511101272807.jpg', 'kate.arroyave@gmail.com'),
(61, 'Patricia', 'Gomez', '2020-11-22 07:44:00', 'Centro Comercial Santa fe', 1, '20000', 'Persona natural', 'Se realiza diagnostico completo del equipo sus estados son:  Disco duro: Bueno CPU: Buena GPU: Buena Memoria ram: Falla Batería: Buena  Se recomienda realizar cambio de la tarjeta de memoria ram', '3044759736', 'Efectivo', 'Se recibe equipo de computo de la marca ASUS X540L con el serial: GBN0CX25A533479 ademas de funda protectora y cargador original, el sitio de encuentro se llevo acabo en el Centro comercial santa fe, La usuaria indica que posiblemente es problema de ram.', '20000', 'Patricia-2020-11-22T02:44702667619.jpg', 'paticogm@hotmail.com'),
(62, 'Gloria Elena', 'Muñoz', '2021-01-18 06:49:00', 'Calle 35 # 82-50', 1, '40000', 'Persona natural', 'Se realiza visita al domicilio, se instala dos modulos de ram 8gb x 2, se realizan prueba de funcionamiento correcto del equipo con los modulos instalados, quedando funcional.', '3043920531', 'Efectivo', 'Usuario solicita la instalación de modulo de memoria ram en el equipo Macbook con serial: C2VHR0YEDTY3', '40000', '', 'gheleng888@icloud.com');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `totals`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `totals` (
`total` double
,`nombre completo` varchar(201)
,`cantidad` decimal(65,0)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo_documento` varchar(20) NOT NULL,
  `num_documento` varchar(20) NOT NULL,
  `direccion` varchar(70) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cargo` varchar(20) DEFAULT NULL,
  `login` varchar(20) NOT NULL,
  `clave` varchar(64) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `condicion` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre`, `tipo_documento`, `num_documento`, `direccion`, `telefono`, `email`, `cargo`, `login`, `clave`, `imagen`, `condicion`) VALUES
(1, 'Steven Alexander hernandez', 'CEDULA', '4626508', 'calle 116a', '3023571736', 'stevenhernandezj@gmail.com', 'Admin', 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '1609131130.jpg', 1),
(3, 'Alexander Torres', 'CEDULA', '47715778', 'Jose Gálvez 1368 - Chongoyape', '931742904', 'stevenhernandezj@gmail.com', 'Analista', 'alex', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '1608265666.jpg', 1),
(4, 'Camila Henrandez', 'DNI', '1017266154', 'Calle 22 a#60-74', '3002988526', 'camilahernandezjimenez@hotmail.com', 'talento humano', 'maria', '94aec9fbed989ece189a7e172c9cf41669050495152bc4c1dbf2a38d7fd85627', '1612155050.png', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_permiso`
--

CREATE TABLE `usuario_permiso` (
  `idusuario_permiso` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idpermiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario_permiso`
--

INSERT INTO `usuario_permiso` (`idusuario_permiso`, `idusuario`, `idpermiso`) VALUES
(504, 3, 1),
(505, 3, 8),
(506, 3, 9),
(507, 3, 10),
(508, 1, 1),
(509, 1, 2),
(510, 1, 3),
(511, 1, 4),
(512, 1, 5),
(513, 1, 8),
(514, 1, 9),
(515, 1, 10),
(516, 4, 1),
(517, 4, 8),
(518, 4, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `idventa` int(11) NOT NULL,
  `idcliente` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `tipo_comprobante` varchar(20) NOT NULL,
  `serie_comprobante` varchar(7) DEFAULT NULL,
  `num_comprobante` varchar(10) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `impuesto` decimal(4,2) NOT NULL,
  `total_venta` decimal(11,2) NOT NULL,
  `estado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`idventa`, `idcliente`, `idusuario`, `tipo_comprobante`, `serie_comprobante`, `num_comprobante`, `fecha_hora`, `impuesto`, `total_venta`, `estado`) VALUES
(1, 1, 1, 'Boleta', '2', '22', '2020-10-05 00:00:00', '12.00', '34.00', 'Anulado'),
(2, 1, 1, 'Boleta', '2', '22', '2020-10-14 00:00:00', '19.00', '1.00', 'Anulado'),
(3, 1, 1, 'Boleta', '333', 'eee', '2021-02-01 00:00:00', '20.00', '6.00', 'Aceptado'),
(4, 1, 1, 'Boleta', '2', '22', '2021-02-01 00:00:00', '0.00', '5.00', 'Aceptado');

-- --------------------------------------------------------

--
-- Estructura para la vista `totals`
--
DROP TABLE IF EXISTS `totals`;

CREATE ALGORITHM=UNDEFINED DEFINER=`prueba`@`%` SQL SECURITY DEFINER VIEW `totals`  AS  select sum(`soporte`.`valortotal`) AS `total`,concat(`soporte`.`nombres`,' ',`soporte`.`apellidos`) AS `nombre completo`,sum(`soporte`.`cantidadequipos`) AS `cantidad` from `soporte` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`idarticulo`),
  ADD UNIQUE KEY `nombre_UNIQUE` (`nombre`),
  ADD KEY `fk_articulo_categoria_idx` (`idcategoria`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idcategoria`),
  ADD UNIQUE KEY `nombre_UNIQUE` (`nombre`);

--
-- Indices de la tabla `detalle_ingreso`
--
ALTER TABLE `detalle_ingreso`
  ADD PRIMARY KEY (`iddetalle_ingreso`),
  ADD KEY `fk_detalle_ingreso_ingreso_idx` (`idingreso`),
  ADD KEY `fk_detalle_ingreso_articulo_idx` (`idarticulo`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`iddetalle_venta`),
  ADD KEY `fk_detalle_venta_venta_idx` (`idventa`),
  ADD KEY `fk_detalle_venta_articulo_idx` (`idarticulo`);

--
-- Indices de la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD PRIMARY KEY (`idingreso`),
  ADD KEY `fk_ingreso_persona_idx` (`idproveedor`),
  ADD KEY `fk_ingreso_usuario_idx` (`idusuario`);

--
-- Indices de la tabla `permiso`
--
ALTER TABLE `permiso`
  ADD PRIMARY KEY (`idpermiso`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`idpersona`);

--
-- Indices de la tabla `soporte`
--
ALTER TABLE `soporte`
  ADD PRIMARY KEY (`idsoporte`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`),
  ADD UNIQUE KEY `login_UNIQUE` (`login`);

--
-- Indices de la tabla `usuario_permiso`
--
ALTER TABLE `usuario_permiso`
  ADD PRIMARY KEY (`idusuario_permiso`),
  ADD KEY `fk_usuario_permiso_permiso_idx` (`idpermiso`),
  ADD KEY `fk_usuario_permiso_usuario_idx` (`idusuario`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`idventa`),
  ADD KEY `fk_venta_persona_idx` (`idcliente`),
  ADD KEY `fk_venta_usuario_idx` (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulo`
--
ALTER TABLE `articulo`
  MODIFY `idarticulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idcategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `detalle_ingreso`
--
ALTER TABLE `detalle_ingreso`
  MODIFY `iddetalle_ingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `iddetalle_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `ingreso`
--
ALTER TABLE `ingreso`
  MODIFY `idingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `permiso`
--
ALTER TABLE `permiso`
  MODIFY `idpermiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `idpersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `soporte`
--
ALTER TABLE `soporte`
  MODIFY `idsoporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario_permiso`
--
ALTER TABLE `usuario_permiso`
  MODIFY `idusuario_permiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=519;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `idventa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD CONSTRAINT `fk_articulo_categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_ingreso`
--
ALTER TABLE `detalle_ingreso`
  ADD CONSTRAINT `fk_detalle_ingreso_articulo` FOREIGN KEY (`idarticulo`) REFERENCES `articulo` (`idarticulo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalle_ingreso_ingreso` FOREIGN KEY (`idingreso`) REFERENCES `ingreso` (`idingreso`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD CONSTRAINT `fk_detalle_venta_articulo` FOREIGN KEY (`idarticulo`) REFERENCES `articulo` (`idarticulo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalle_venta_venta` FOREIGN KEY (`idventa`) REFERENCES `venta` (`idventa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD CONSTRAINT `fk_ingreso_persona` FOREIGN KEY (`idproveedor`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ingreso_usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario_permiso`
--
ALTER TABLE `usuario_permiso`
  ADD CONSTRAINT `fk_usuario_permiso_permiso` FOREIGN KEY (`idpermiso`) REFERENCES `permiso` (`idpermiso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_permiso_usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `fk_venta_persona` FOREIGN KEY (`idcliente`) REFERENCES `persona` (`idpersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_venta_usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Base de datos: `encuestas`
--
CREATE DATABASE IF NOT EXISTS `encuestas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `encuestas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenguajes`
--

CREATE TABLE `lenguajes` (
  `id` int(11) NOT NULL,
  `opcion` varchar(100) NOT NULL,
  `votos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `lenguajes`
--

INSERT INTO `lenguajes` (`id`, `opcion`, `votos`) VALUES
(1, 'c', 1),
(2, 'c++', 0),
(3, 'java', 0),
(4, 'swift', 1),
(5, 'python', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Base de datos: `moviles`
--
CREATE DATABASE IF NOT EXISTS `moviles` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `moviles`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviles`
--

CREATE TABLE `moviles` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `moviles`
--

INSERT INTO `moviles` (`id`, `marca`, `modelo`, `stock`) VALUES
(1, 'asus', '2019', 1),
(2, 'dd', 'dd', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `moviles`
--
ALTER TABLE `moviles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `moviles`
--
ALTER TABLE `moviles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Base de datos: `mvc`
--
CREATE DATABASE IF NOT EXISTS `mvc` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mvc`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` int(11) NOT NULL,
  `placa` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `marca` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `modelo` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `anio` int(4) NOT NULL,
  `color` varchar(25) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `placa`, `marca`, `modelo`, `anio`, `color`) VALUES
(6, 'RFFFF9', 'MAZDA', '1998', 2021, 'VERDE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Base de datos: `parqueadero`
--
CREATE DATABASE IF NOT EXISTS `parqueadero` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `parqueadero`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `cod_cargo` varchar(5) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cargo`
--

INSERT INTO `cargo` (`cod_cargo`, `descripcion`) VALUES
('TC01', 'administrador'),
('TC02', 'operario'),
('TC03', 'aseo'),
('TC04', 'cajero'),
('TC05', 'guardia de seguridad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `documento_cliente` varchar(15) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `cod_sexo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`documento_cliente`, `nombre`, `email`, `telefono`, `cod_sexo`) VALUES
('001', 'Alex Rodriguez 1234', 'alex@gmail.com', '1234567', 'S01'),
('10181811111', 'Yuliana Restrepo 2129999', 'qd@gmail.com', '3046711065', 'S01'),
('77', 'ststsb', 'qd@gmail.com', '3046711065', 'S01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_vehiculos`
--

CREATE TABLE `clientes_vehiculos` (
  `documento_cliente` varchar(15) NOT NULL,
  `placa` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes_vehiculos`
--

INSERT INTO `clientes_vehiculos` (`documento_cliente`, `placa`) VALUES
('001', 'CARRO01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `documento_empleado` varchar(15) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `cod_sexo` varchar(5) NOT NULL,
  `cod_cargo` varchar(5) NOT NULL,
  `cod_tipo_sangre` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`documento_empleado`, `nombre`, `telefono`, `email`, `fecha_nacimiento`, `cod_sexo`, `cod_cargo`, `cod_tipo_sangre`) VALUES
('020', 'Elkin Soto', '1234567', 'elkin@gmail.com', '1994-10-12', 'S01', 'TC01', 'CTS01'),
('021', 'Berta Gonzales', '1147799', 'berta@gmail.com', '1981-05-20', 'S02', 'TC02', 'CTS06'),
('022', 'Sara Castro', '4913782', 'sara@gmail.com', '1979-10-12', 'S02', 'TC02', 'CTS06'),
('023', 'Carlos Perez', '2581397', 'carlos@hotmail.com', '1993-10-10', 'S01', 'TC03', 'CTS05'),
('024', 'Viviana Carvajal', '9317825', 'viviana@gmail.com', '1995-12-15', 'S02', 'TC04', 'CTS03'),
('025', 'Marcela Reyes', '8135287', 'marcela@gmail.com', '1975-04-02', 'S02', 'TC04', 'CTS08'),
('026', 'Oscar Figueroa', '8137995', 'oscar@hotmail.com', '1969-08-21', 'S01', 'TC05', 'CTS07'),
('027', 'Renzo Hernandez', '1111557', 'renzo@gmail.com', '1996-01-01', 'S01', 'TC03', 'CTS06'),
('028', 'Daniel Florez', '1579532', 'daniel@hotmail.com', '1994-12-10', 'S01', 'TC05', 'CTS04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados_nominaempleados`
--

CREATE TABLE `empleados_nominaempleados` (
  `documento_empleado` varchar(15) NOT NULL,
  `cod_nomina` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca_vehiculo`
--

CREATE TABLE `marca_vehiculo` (
  `cod_marca` varchar(5) NOT NULL,
  `nombre` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca_vehiculo`
--

INSERT INTO `marca_vehiculo` (`cod_marca`, `nombre`) VALUES
('CM01', 'Renault'),
('CM02', 'Mazda'),
('CM03', 'Chevrolet'),
('CM04', 'Suzuki'),
('CM05', 'Audi'),
('CM06', 'BMW'),
('CM07', 'Ford'),
('CM08', 'Nissan'),
('CM09', 'Toyota'),
('CM10', 'Honda'),
('CM11', 'Yamaha'),
('CM12', 'Pulsar'),
('CM13', 'Auteco Boxer'),
('CM14', 'AKT'),
('CM15', 'Hero'),
('CM16', 'GW'),
('CM17', 'Canyon'),
('CM18', 'Trek'),
('CM19', 'Shimano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mejores_clientes`
--

CREATE TABLE `mejores_clientes` (
  `documento_cliente` varchar(15) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `Tiempo` decimal(6,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mejores_clientes`
--

INSERT INTO `mejores_clientes` (`documento_cliente`, `nombre`, `Tiempo`) VALUES
('001', 'Alex Rodriguez', '5.5000'),
('003', 'Mario Suarez', '7.0000'),
('004', 'Karen Mendez', '7.5000'),
('005', 'Mariana Betancur', '11.5000'),
('009', 'Yuliana Restrepo', '6.5000'),
('008', 'Camila Marin', '9.5000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nomina_empleados`
--

CREATE TABLE `nomina_empleados` (
  `cod_nomina` varchar(5) NOT NULL,
  `valor_nomina` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `nomina_empleados`
--

INSERT INTO `nomina_empleados` (`cod_nomina`, `valor_nomina`) VALUES
('CN01', 1000000),
('CN02', 3000000),
('CN03', 1100000),
('CN04', 1250000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `documento_cliente` varchar(15) NOT NULL,
  `placa` varchar(15) NOT NULL,
  `documento_empleado` varchar(15) NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time NOT NULL,
  `hora` float NOT NULL,
  `valor_hora` float NOT NULL,
  `valor_pagar` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`documento_cliente`, `placa`, `documento_empleado`, `hora_entrada`, `hora_salida`, `hora`, `valor_hora`, `valor_pagar`) VALUES
('001', 'CARRO01', '024', '07:00:00', '12:30:00', 5.5, 3000, 16500);

--
-- Disparadores `registros`
--
DELIMITER $$
CREATE TRIGGER `actualizar_valor_pagar` BEFORE INSERT ON `registros` FOR EACH ROW begin
set new.valor_pagar = new.valor_hora * ((HOUR(TIMEDIFF(new.hora_entrada, new.hora_salida)) + CASE WHEN MINUTE(TIMEDIFF(new.hora_entrada, new.hora_salida)) % 60 > 20 

THEN 1 ELSE 0 END/2.0));
set new.hora = ((HOUR(TIMEDIFF(new.hora_entrada, new.hora_salida)) + CASE WHEN MINUTE(TIMEDIFF(new.hora_entrada, new.hora_salida)) % 60 > 20 THEN 1 ELSE 0 END/2.0));
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sexo`
--

CREATE TABLE `sexo` (
  `cod_sexo` varchar(5) NOT NULL,
  `descripcion` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sexo`
--

INSERT INTO `sexo` (`cod_sexo`, `descripcion`) VALUES
('S01', 'masculino'),
('S02', 'femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_sangre`
--

CREATE TABLE `tipo_sangre` (
  `cod_tipo_sangre` varchar(5) NOT NULL,
  `descripcion` enum('O+','O-','A+','A-','B+','B-','AB+','AB-') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_sangre`
--

INSERT INTO `tipo_sangre` (`cod_tipo_sangre`, `descripcion`) VALUES
('CTS01', 'O+'),
('CTS02', 'O-'),
('CTS03', 'A+'),
('CTS04', 'A-'),
('CTS05', 'B+'),
('CTS06', 'B-'),
('CTS07', 'AB+'),
('CTS08', 'AB-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_vehiculo`
--

CREATE TABLE `tipo_vehiculo` (
  `cod_tipo_vehiculo` varchar(5) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_vehiculo`
--

INSERT INTO `tipo_vehiculo` (`cod_tipo_vehiculo`, `descripcion`) VALUES
('CTP01', 'carro'),
('CTP02', 'moto'),
('CTP03', 'bicicleta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `cod_turno` varchar(10) NOT NULL,
  `comienzo_turno` time NOT NULL,
  `final_turno` time NOT NULL,
  `dias_laborados` set('lunes','martes','miercoles','jueves','viernes') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`cod_turno`, `comienzo_turno`, `final_turno`, `dias_laborados`) VALUES
('CT01', '06:00:00', '15:00:00', 'lunes,martes,miercoles,jueves,viernes'),
('CT02', '15:00:00', '23:00:00', 'lunes,martes,miercoles,jueves,viernes'),
('CT03', '07:00:00', '16:00:00', 'lunes,martes,miercoles,jueves,viernes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turno_empleados`
--

CREATE TABLE `turno_empleados` (
  `cod_turno` varchar(10) NOT NULL,
  `documento_empleado` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `nombre` char(20) NOT NULL,
  `clave` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`nombre`, `clave`) VALUES
('Mauricio Sepulveda', 'ti');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo`
--

CREATE TABLE `vehiculo` (
  `placa` varchar(15) NOT NULL,
  `cod_marca` varchar(5) NOT NULL,
  `cod_tipo_vehiculo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculo`
--

INSERT INTO `vehiculo` (`placa`, `cod_marca`, `cod_tipo_vehiculo`) VALUES
('BICI01', 'CM16', 'CTP03'),
('BICI02', 'CM17', 'CTP03'),
('BICI03', 'CM19', 'CTP03'),
('CARRO01', 'CM01', 'CTP01'),
('CARRO02', 'CM07', 'CTP01'),
('CARRO03', 'CM02', 'CTP01'),
('CARRO04', 'CM05', 'CTP01'),
('MOTO01', 'CM11', 'CTP02'),
('MOTO02', 'CM14', 'CTP02'),
('MOTO03', 'CM12', 'CTP02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`cod_cargo`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`documento_cliente`) USING BTREE,
  ADD KEY `cod_sexo` (`cod_sexo`);

--
-- Indices de la tabla `clientes_vehiculos`
--
ALTER TABLE `clientes_vehiculos`
  ADD KEY `documento_cliente` (`documento_cliente`),
  ADD KEY `placa` (`placa`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`documento_empleado`),
  ADD KEY `cod_sexo` (`cod_sexo`),
  ADD KEY `cod_cargo` (`cod_cargo`),
  ADD KEY `cod_tipo_sangre` (`cod_tipo_sangre`);

--
-- Indices de la tabla `empleados_nominaempleados`
--
ALTER TABLE `empleados_nominaempleados`
  ADD KEY `documento_empleado` (`documento_empleado`),
  ADD KEY `cod_nomina` (`cod_nomina`);

--
-- Indices de la tabla `marca_vehiculo`
--
ALTER TABLE `marca_vehiculo`
  ADD PRIMARY KEY (`cod_marca`);

--
-- Indices de la tabla `nomina_empleados`
--
ALTER TABLE `nomina_empleados`
  ADD PRIMARY KEY (`cod_nomina`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD KEY `documento_cliente` (`documento_cliente`),
  ADD KEY `placa` (`placa`),
  ADD KEY `documento_empleado` (`documento_empleado`);

--
-- Indices de la tabla `sexo`
--
ALTER TABLE `sexo`
  ADD PRIMARY KEY (`cod_sexo`);

--
-- Indices de la tabla `tipo_sangre`
--
ALTER TABLE `tipo_sangre`
  ADD PRIMARY KEY (`cod_tipo_sangre`);

--
-- Indices de la tabla `tipo_vehiculo`
--
ALTER TABLE `tipo_vehiculo`
  ADD PRIMARY KEY (`cod_tipo_vehiculo`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`cod_turno`);

--
-- Indices de la tabla `turno_empleados`
--
ALTER TABLE `turno_empleados`
  ADD KEY `cod_turno` (`cod_turno`),
  ADD KEY `documento_empleado` (`documento_empleado`);

--
-- Indices de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD PRIMARY KEY (`placa`),
  ADD KEY `cod_marca` (`cod_marca`),
  ADD KEY `cod_tipo_vehiculo` (`cod_tipo_vehiculo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`cod_sexo`) REFERENCES `sexo` (`cod_sexo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `clientes_vehiculos`
--
ALTER TABLE `clientes_vehiculos`
  ADD CONSTRAINT `clientes_vehiculos_ibfk_1` FOREIGN KEY (`documento_cliente`) REFERENCES `cliente` (`documento_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clientes_vehiculos_ibfk_2` FOREIGN KEY (`placa`) REFERENCES `vehiculo` (`placa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`cod_sexo`) REFERENCES `sexo` (`cod_sexo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empleados_ibfk_2` FOREIGN KEY (`cod_cargo`) REFERENCES `cargo` (`cod_cargo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empleados_ibfk_3` FOREIGN KEY (`cod_tipo_sangre`) REFERENCES `tipo_sangre` (`cod_tipo_sangre`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleados_nominaempleados`
--
ALTER TABLE `empleados_nominaempleados`
  ADD CONSTRAINT `empleados_nominaempleados_ibfk_1` FOREIGN KEY (`documento_empleado`) REFERENCES `empleados` (`documento_empleado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empleados_nominaempleados_ibfk_2` FOREIGN KEY (`cod_nomina`) REFERENCES `nomina_empleados` (`cod_nomina`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `registros`
--
ALTER TABLE `registros`
  ADD CONSTRAINT `registros_ibfk_1` FOREIGN KEY (`documento_cliente`) REFERENCES `cliente` (`documento_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `registros_ibfk_2` FOREIGN KEY (`placa`) REFERENCES `vehiculo` (`placa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `registros_ibfk_3` FOREIGN KEY (`documento_empleado`) REFERENCES `empleados` (`documento_empleado`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `turno_empleados`
--
ALTER TABLE `turno_empleados`
  ADD CONSTRAINT `turno_empleados_ibfk_1` FOREIGN KEY (`cod_turno`) REFERENCES `turnos` (`cod_turno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `turno_empleados_ibfk_2` FOREIGN KEY (`documento_empleado`) REFERENCES `empleados` (`documento_empleado`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD CONSTRAINT `vehiculo_ibfk_1` FOREIGN KEY (`cod_marca`) REFERENCES `marca_vehiculo` (`cod_marca`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vehiculo_ibfk_2` FOREIGN KEY (`cod_tipo_vehiculo`) REFERENCES `tipo_vehiculo` (`cod_tipo_vehiculo`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Base de datos: `peliculas`
--
CREATE DATABASE IF NOT EXISTS `peliculas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `peliculas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `id` int(25) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pelicula`
--

INSERT INTO `pelicula` (`id`, `nombre`, `imagen`) VALUES
(1, 'steven', 'poster01'),
(12, 'dsds', 'poster01'),
(13, 'dsds', 'poster01'),
(14, 'efdfd', 'poster01'),
(15, 'efdfd', 'poster01'),
(16, 'dlsdks', 'poster01'),
(17, 'dlsdks', 'poster01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- Base de datos: `prbasic`
--
CREATE DATABASE IF NOT EXISTS `prbasic` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `prbasic`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`) VALUES
(1, 'php', 'phpphphph'),
(2, 'python', 'glglglg'),
(3, 'php', 'phpphphph'),
(4, 'python', 'glglglg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Base de datos: `pruebas`
--
CREATE DATABASE IF NOT EXISTS `pruebas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pruebas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idcategoria` int(11) NOT NULL,
  `nombrecategoria` varchar(100) NOT NULL,
  `nombrecategoriapadre` varchar(100) NOT NULL,
  `descripcion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuestionario`
--

CREATE TABLE `cuestionario` (
  `idcuestionario` int(11) NOT NULL,
  `nombrecuestionario` varchar(100) NOT NULL,
  `descripcion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `idcurso` int(11) NOT NULL,
  `nombrecurso` varchar(100) NOT NULL,
  `visible` varchar(2) NOT NULL,
  `fechaingreso` date NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `idcategoria` int(11) NOT NULL,
  `idgrupo` int(11) NOT NULL,
  `idcuestionario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `idgrupo` int(11) NOT NULL,
  `nombregrupo` varchar(100) NOT NULL,
  `descripcion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `idpreguntas` int(11) NOT NULL,
  `pregunta` varchar(100) NOT NULL,
  `solucion` varchar(500) NOT NULL,
  `observacion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `fecharegistro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nombreusuario` varchar(30) NOT NULL,
  `apellidousuario` varchar(30) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `idgrupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idcategoria`);

--
-- Indices de la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
  ADD PRIMARY KEY (`idcuestionario`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`idcurso`,`idcategoria`,`idgrupo`,`idcuestionario`),
  ADD KEY `idcuestionario` (`idcuestionario`),
  ADD KEY `idcategoria` (`idcategoria`),
  ADD KEY `idgrupo` (`idgrupo`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`idgrupo`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`idpreguntas`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`,`idgrupo`),
  ADD KEY `idgrupo` (`idgrupo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idcategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
  MODIFY `idcuestionario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `idcurso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `idpreguntas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`idcuestionario`) REFERENCES `cuestionario` (`idcuestionario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `curso_ibfk_2` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`idcategoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `curso_ibfk_3` FOREIGN KEY (`idgrupo`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idgrupo`) REFERENCES `grupo` (`idgrupo`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Base de datos: `pruebaTrigger`
--
CREATE DATABASE IF NOT EXISTS `pruebaTrigger` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pruebaTrigger`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` varchar(12) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `porgana` int(2) DEFAULT NULL,
  `Costo` int(11) DEFAULT NULL,
  `valorventa` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo`, `nombre`, `porgana`, `Costo`, `valorventa`, `cantidad`) VALUES
('1', 'arroz', 15, 5000, 5750, 45);

--
-- Disparadores `productos`
--
DELIMITER $$
CREATE TRIGGER `insertCalculateValorventa` BEFORE INSERT ON `productos` FOR EACH ROW begin
set
	new.valorventa = new.costo + new.costo * new.porgana / 100;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `updateCalculateValorVenta` BEFORE UPDATE ON `productos` FOR EACH ROW begin
set
	new.valorventa = new.costo + new.costo * old.porgana / 100;
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo`);
--
-- Base de datos: `SetBlobEnum`
--
CREATE DATABASE IF NOT EXISTS `SetBlobEnum` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `SetBlobEnum`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `codigo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(40) DEFAULT NULL,
  `actor` varchar(30) DEFAULT NULL,
  `duracion` tinyint(3) UNSIGNED DEFAULT NULL,
  `sinopsis` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`codigo`, `nombre`, `actor`, `duracion`, `sinopsis`) VALUES
(1, 'Mentes que brillan', 'Jodie Foster', 120, 'El no entiende al mundo ni el mundo lo entiende a él; es un niño superdotado. La escuela especial a la que asiste tampoco resuelve los problemas del niño. Su madre hará todo lo que esté a su alcance para ayudarlo. Drama');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulantes`
--

CREATE TABLE `postulantes` (
  `numero` int(10) UNSIGNED NOT NULL,
  `documento` char(8) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `estudios` enum('ninguno','primario','secundario','terciario','universitario') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `postulantes`
--

INSERT INTO `postulantes` (`numero`, `documento`, `nombre`, `estudios`) VALUES
(1, '22255265', 'Juana Pereyra', 'universitario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulantes2`
--

CREATE TABLE `postulantes2` (
  `numero` int(10) UNSIGNED NOT NULL,
  `documento` char(8) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `idioma` set('ingles','italiano','portuges') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `postulantes2`
--

INSERT INTO `postulantes2` (`numero`, `documento`, `nombre`, `idioma`) VALUES
(1, '22555444', 'Ana Acosta', 'ingles'),
(2, '23555444', 'Juana Pereyra', 'ingles,italiano'),
(3, '23555444', 'Juana Pereyra', 'ingles,italiano'),
(4, '23555444', 'Juana Pereyra', 'ingles,italiano'),
(5, '22255265', 'Juana Pereyra', 'italiano'),
(6, '22555888', 'Juana Pereyra', 'ingles,italiano');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `postulantes`
--
ALTER TABLE `postulantes`
  ADD PRIMARY KEY (`numero`);

--
-- Indices de la tabla `postulantes2`
--
ALTER TABLE `postulantes2`
  ADD PRIMARY KEY (`numero`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `codigo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `postulantes`
--
ALTER TABLE `postulantes`
  MODIFY `numero` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `postulantes2`
--
ALTER TABLE `postulantes2`
  MODIFY `numero` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Base de datos: `subconsultas`
--
CREATE DATABASE IF NOT EXISTS `subconsultas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `subconsultas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulo`
--

CREATE TABLE `articulo` (
  `codigo` char(10) NOT NULL,
  `articulo` char(40) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `valorunitario` int(11) NOT NULL,
  `existencia` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `articulo`
--

INSERT INTO `articulo` (`codigo`, `articulo`, `cantidad`, `valorunitario`, `existencia`) VALUES
('300', 'ventilador', 17, 110000, 15),
('250', 'estufa', 30, 750000, 18),
('200', 'televisor', 11, 1200000, 8),
('150', 'nevera', 25, 950000, 5),
('350', 'lavadora', 13, 980000, 12),
('450', 'Secador', 10, 250000, 0),
('480', 'Secador', 10, 250000, 0);

--
-- Disparadores `articulo`
--
DELIMITER $$
CREATE TRIGGER `valorventa` AFTER INSERT ON `articulo` FOR EACH ROW begin
update
	detalle
set
	valorventa =(
	select
		valorunitario + (valorunitario * 0.23)
	from
		articulo
	where
		articulo.codigo = detalle.codigo);
 END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `copia`
--

CREATE TABLE `copia` (
  `id` int(11) NOT NULL,
  `nrofactura` char(10) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(11) NOT NULL,
  `valorventa` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `codigo` char(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `copia`
--

INSERT INTO `copia` (`id`, `nrofactura`, `fecha`, `cantidad`, `valorventa`, `total`, `codigo`) VALUES
(2, '1250', '2010-02-13', 5, 1168500, 5842500, '150'),
(3, '1250', '2010-02-13', 7, 922500, 6457500, '250');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `id` int(11) NOT NULL,
  `nrofactura` char(10) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(11) NOT NULL,
  `valorventa` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `codigo` char(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle`
--

INSERT INTO `detalle` (`id`, `nrofactura`, `fecha`, `cantidad`, `valorventa`, `total`, `codigo`) VALUES
(1, '1200', '2010-01-30', 3, 1168500, 3505500, '150'),
(2, '1250', '2010-02-13', 5, 1168500, 5842500, '150'),
(3, '1250', '2010-02-13', 7, 922500, 6457500, '250'),
(4, '1300', '2010-03-02', 1, 1205400, 1205400, '350'),
(5, '1300', '2010-03-02', 2, 135300, 270600, '300'),
(6, '1400', '2010-03-11', 3, 1476000, 4428000, '200'),
(7, '1500', '2010-03-21', 5, 922500, 4612500, '250'),
(9, '1200', '2010-01-30', 3, 0, 0, '150'),
(10, '1200', '2010-01-30', 3, 56, 56, '150'),
(11, '1200', '2010-01-30', 3, 56, 56, '150'),
(13, '1200', '2010-01-30', 3, 56, 56, '150');

--
-- Disparadores `detalle`
--
DELIMITER $$
CREATE TRIGGER `actualizar_existenciap` AFTER INSERT ON `detalle` FOR EACH ROW begin
update
	articulo
set
	existencia = cantidad - (
	select
		sum(cantidad)
	from
		detalle
	where
		articulo.codigo = detalle.codigo);
 END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `codigo` char(10) NOT NULL,
  `nombre` char(30) DEFAULT NULL,
  `sexo` char(10) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `hijos` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ejercicio`
--

INSERT INTO `ejercicio` (`codigo`, `nombre`, `sexo`, `nacimiento`, `hijos`) VALUES
('0022559966', 'Eder Pulgar', 'Hombre', '1960-02-20', '6'),
('0028957446', 'Juan Carlos Serpa', 'Hombre', '1982-11-25', '2'),
('0822559966', 'Mariana Gonzalez', 'Mujer', '1982-03-24', '1'),
('1188996633', 'Yoreida Maria', 'Mujer', '1978-03-05', '2'),
('22663355', 'Angel Cuadrado', 'hombre', '1966-05-13', '0'),
('4488663322', 'Jorge Fuentes', 'Hombre', '1980-06-22', '2'),
('556959966', 'Angela Ruiz', 'Mujer', '1977-11-15', '1'),
('9999957446', 'Carlota Sonora', 'Mujer', '1985-11-03', '4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `copia`
--
ALTER TABLE `copia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `copia`
--
ALTER TABLE `copia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Base de datos: `tasks-app`
--
CREATE DATABASE IF NOT EXISTS `tasks-app` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `tasks-app`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `task`
--

INSERT INTO `task` (`id`, `name`, `description`) VALUES
(1, 'escribir', 'mmm'),
(2, 'escritor', 'dsdhsd'),
(3, 'name', 'ssss');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Base de datos: `TiendaPelicula`
--
CREATE DATABASE IF NOT EXISTS `TiendaPelicula` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `TiendaPelicula`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `CED_CLIEN` varchar(10) NOT NULL,
  `DIR_CLIENTE` varchar(10) DEFAULT NULL,
  `NOM_CLIENTE` varchar(10) DEFAULT NULL,
  `TELEF_CLIENTE` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`CED_CLIEN`, `DIR_CLIENTE`, `NOM_CLIENTE`, `TELEF_CLIENTE`) VALUES
('1017247467', 'calle 116', 'steven', '3030300330');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devolucion`
--

CREATE TABLE `devolucion` (
  `CONTROL_D` varchar(10) NOT NULL,
  `CONTROL_P` varchar(10) DEFAULT NULL,
  `MULTA_C` varchar(10) DEFAULT NULL,
  `DIAS_R` varchar(10) DEFAULT NULL,
  `TOTAL_M` varchar(10) DEFAULT NULL,
  `FECHA_ENT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `COD_GEN` varchar(10) NOT NULL,
  `NOM_GEN` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`COD_GEN`, `NOM_GEN`) VALUES
('1', 'terror');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `COD_PELICULA` varchar(10) NOT NULL,
  `NOM_PELI` varchar(10) DEFAULT NULL,
  `GENER_PELI` varchar(10) DEFAULT NULL,
  `DUR_PELI` varchar(10) DEFAULT NULL,
  `FORM_PELI` varchar(10) DEFAULT NULL,
  `TITU_PELI` varchar(10) DEFAULT NULL,
  `CANT_PEL` varchar(10) DEFAULT NULL,
  `COD_GEN` varchar(10) DEFAULT NULL,
  `COD_PRO` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo`
--

CREATE TABLE `prestamo` (
  `VALOR_P` varchar(10) DEFAULT NULL,
  `FECHA_P` varchar(10) DEFAULT NULL,
  `CONTROL_P` varchar(10) NOT NULL,
  `DIAS_P` varchar(10) DEFAULT NULL,
  `FECHA_V` varchar(10) DEFAULT NULL,
  `CED_CLIEN` varchar(10) DEFAULT NULL,
  `CEDR_CLIE` varchar(10) DEFAULT NULL,
  `CANT_PEL` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prestamo`
--

INSERT INTO `prestamo` (`VALOR_P`, `FECHA_P`, `CONTROL_P`, `DIAS_P`, `FECHA_V`, `CED_CLIEN`, `CEDR_CLIE`, `CANT_PEL`) VALUES
('1000', '2020-23-34', '1', '2', '2021-23-34', '1017247467', '10172', '34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamoPelicula`
--

CREATE TABLE `prestamoPelicula` (
  `COD_PRE_PELI` varchar(10) NOT NULL,
  `CONTROL_P` varchar(10) DEFAULT NULL,
  `COD_PELICULA` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `protagonista`
--

CREATE TABLE `protagonista` (
  `COD_PRO` varchar(10) NOT NULL,
  `NOM_PROT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `protagonista`
--

INSERT INTO `protagonista` (`COD_PRO`, `NOM_PROT`) VALUES
('1', 'Johnconnor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `referenciaCliente`
--

CREATE TABLE `referenciaCliente` (
  `CEDR_CLIE` varchar(10) NOT NULL,
  `TELER_P` varchar(10) DEFAULT NULL,
  `NOMR_PERS` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `referenciaCliente`
--

INSERT INTO `referenciaCliente` (`CEDR_CLIE`, `TELER_P`, `NOMR_PERS`) VALUES
('10172', '34343434', 'alex');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`CED_CLIEN`);

--
-- Indices de la tabla `devolucion`
--
ALTER TABLE `devolucion`
  ADD PRIMARY KEY (`CONTROL_D`),
  ADD KEY `CONTROL_P` (`CONTROL_P`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`COD_GEN`);

--
-- Indices de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD PRIMARY KEY (`COD_PELICULA`),
  ADD KEY `COD_GEN` (`COD_GEN`),
  ADD KEY `COD_PRO` (`COD_PRO`);

--
-- Indices de la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD PRIMARY KEY (`CONTROL_P`),
  ADD KEY `CED_CLIEN` (`CED_CLIEN`),
  ADD KEY `CEDR_CLIE` (`CEDR_CLIE`);

--
-- Indices de la tabla `prestamoPelicula`
--
ALTER TABLE `prestamoPelicula`
  ADD PRIMARY KEY (`COD_PRE_PELI`),
  ADD KEY `CONTROL_P` (`CONTROL_P`),
  ADD KEY `COD_PELICULA` (`COD_PELICULA`);

--
-- Indices de la tabla `protagonista`
--
ALTER TABLE `protagonista`
  ADD PRIMARY KEY (`COD_PRO`);

--
-- Indices de la tabla `referenciaCliente`
--
ALTER TABLE `referenciaCliente`
  ADD PRIMARY KEY (`CEDR_CLIE`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `devolucion`
--
ALTER TABLE `devolucion`
  ADD CONSTRAINT `devolucion_ibfk_1` FOREIGN KEY (`CONTROL_P`) REFERENCES `prestamo` (`CONTROL_P`);

--
-- Filtros para la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD CONSTRAINT `pelicula_ibfk_1` FOREIGN KEY (`COD_GEN`) REFERENCES `genero` (`COD_GEN`),
  ADD CONSTRAINT `pelicula_ibfk_2` FOREIGN KEY (`COD_PRO`) REFERENCES `protagonista` (`COD_PRO`);

--
-- Filtros para la tabla `prestamo`
--
ALTER TABLE `prestamo`
  ADD CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`CED_CLIEN`) REFERENCES `cliente` (`CED_CLIEN`),
  ADD CONSTRAINT `prestamo_ibfk_2` FOREIGN KEY (`CEDR_CLIE`) REFERENCES `referenciaCliente` (`CEDR_CLIE`);

--
-- Filtros para la tabla `prestamoPelicula`
--
ALTER TABLE `prestamoPelicula`
  ADD CONSTRAINT `prestamopelicula_ibfk_1` FOREIGN KEY (`CONTROL_P`) REFERENCES `prestamo` (`CONTROL_P`),
  ADD CONSTRAINT `prestamopelicula_ibfk_2` FOREIGN KEY (`COD_PELICULA`) REFERENCES `pelicula` (`COD_PELICULA`);
--
-- Base de datos: `todolistDB`
--
CREATE DATABASE IF NOT EXISTS `todolistDB` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `todolistDB`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todoTable`
--

CREATE TABLE `todoTable` (
  `id` int(11) NOT NULL,
  `texto` varchar(100) NOT NULL,
  `completado` tinyint(1) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `todoTable`
--

INSERT INTO `todoTable` (`id`, `texto`, `completado`, `timestamp`) VALUES
(2, 'sdsds', 1, '2021-01-02 06:20:53'),
(3, 'HOLA', 0, '2021-01-02 06:27:42'),
(8, 'sdsd', 0, '2021-01-02 06:30:32'),
(9, 'fdf', 0, '2021-01-02 06:32:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `todoTable`
--
ALTER TABLE `todoTable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `todoTable`
--
ALTER TABLE `todoTable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Base de datos: `videotienda`
--
CREATE DATABASE IF NOT EXISTS `videotienda` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `videotienda`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pelicula`
--

CREATE TABLE `pelicula` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `genero` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `año` int(11) NOT NULL,
  `disponible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pelicula`
--

INSERT INTO `pelicula` (`id`, `titulo`, `genero`, `año`, `disponible`) VALUES
(27034, 'Soy leyenda', 'Ciencia ficción', 2007, 1),
(27035, 'Capitán América: Civil War', 'Acción, Ciencia ficción', 2017, 0),
(27036, 'Pixels', 'Ciencia ficción', 2015, 0),
(27037, 'La guerra de los mundos', 'Ciencia ficción', 2005, 0),
(27038, 'WALL-E', 'Animación', 2006, 0),
(27039, 'La maldición', '', 2005, 0),
(27040, '300: El origen de un imperio', 'Acción', 2014, 0),
(27041, 'El origen de los guardianes', 'Animación', 2012, 0),
(27042, 'Angry Birds. La película', 'Animación', 2016, 0),
(27043, '007 al servicio de su majestad', 'Acción', 1969, 0),
(27044, 'Species II', 'Ciencia ficción', 2018, 0),
(27045, 'Ex Machina', 'Ciencia ficción', 2015, 0),
(27046, 'Arma Letal', 'Acción', 1987, 0),
(27047, '30 días de oscuridad', 'Terror', 2007, 0),
(27048, 'Arma letal 3', 'Acción', 1991, 0),
(27049, 'Mamá', 'Terror', 2013, 0),
(27050, 'X-Files: Creer es la clave', 'Ciencia ficción', 2008, 0),
(27051, 'Virus', 'Terror', 1999, 0),
(27052, '13 fantasmas', 'Terror', 2001, 0),
(27053, 'Depredador', 'Acción', 1987, 0),
(27054, 'Abraham Lincoln: Cazador de vampiros', 'Acción', 2012, 0),
(27055, 'The Phantom of the Opera', 'Musical', 2004, 0),
(27056, '3 días para matar', 'Acción', 2014, 0),
(27057, 'Viernes 13', 'Ciencia ficción, Terror', 1980, 0),
(27058, 'Dinosaurio', 'Animación', 2006, 0),
(27059, 'Abejas asesinas ', 'Acción', 2002, 0),
(27060, 'Star Wars. Episodio III: La venganza de los Sith', 'Ciencia ficción', 2005, 0),
(27061, 'Vecinos invasores', 'Animación', 2006, 0),
(27062, 'Commando', 'Acción', 1985, 0),
(27063, 'Star Wars: Episodio II, el ataque de los clones', 'Ciencia ficción', 2002, 0),
(27064, 'Actividad paranormal', 'Terror', 2009, 0),
(27065, '4 Fantásticos', 'Acción', 2015, 0),
(27066, 'Anastasia', 'Animación', 1997, 0),
(27067, 'La máquina del tiempo', 'Ciencia ficción', 2001, 0),
(27068, 'Pink Floyd, el muro', 'Musical', 1982, 0),
(27069, 'Perdidos en el espacio', 'Ciencia ficción', 1997, 0),
(27070, 'A flor de piel', 'Acción', 1997, 0),
(27071, 'Tron: Legacy', 'Ciencia ficción', 2010, 0),
(27072, 'La quinta ola', 'Ciencia ficción', 2016, 0),
(27073, 'Arma Letal 2', 'Acción', 1989, 0),
(27074, 'Yo, Robot', 'Ciencia ficción', 2004, 0),
(27075, 'Vampiros de John Carpenter', 'Terror', 1998, 0),
(27076, 'Los Simpson. La película', 'Animación', 2007, 0),
(27077, 'El retorno de los malditos', 'Terror', 2007, 0),
(27078, 'Ouija: El origen del mal', 'Terror', 2016, 0),
(27079, 'Flamenco, flamenco', 'Musical', 2000, 0),
(27080, 'WALL-E', 'Animación', 2006, 0),
(27081, 'Anaconda', 'Acción', 1997, 0),
(27082, 'El libro de la selva 2', 'Animación', 2003, 0),
(27083, 'Alerta máxima', 'Acción', 1992, 0),
(27084, 'Species II', 'Ciencia ficción', 1998, 0),
(27085, 'Viernes 13', 'Terror', 2009, 0),
(27093, 'Aeon Flux', 'Acción', 2005, 0),
(27094, 'Los pilares de la tierra', 'Ciencia ficción, Terror', 2000, 0),
(27096, 'El último samurai', 'Acción, Drama', 2010, 0),
(27098, 'pruebas', 'Musical', 2021, 0),
(27103, 'prueba', 'Acción, Comedia, Drama, Musical', 2020, 0),
(27104, 'fsd', 'Acción', 2020, 0),
(27105, 'fsd2222', 'Acción, Musical', 2020, 0),
(27107, 'fsd', 'Terror', 2020, 0),
(27108, 'ddd', 'Ciencia ficción', 2020, 0),
(27109, 'fsd', 'Ciencia ficción, Animación', 1998, 0),
(27110, 'sdsd', 'Terror', 2020, 0),
(27111, 'dsdsdsd', 'Acción, Musical', 2020, 0),
(27112, 'ddd', 'Musical', 2020, 0),
(27113, 'fsd', 'Ciencia ficción, Drama', 2021, 0),
(27114, 'fsd', 'Acción', 2021, 1),
(27115, 'fsd', 'Ciencia ficción', 2021, 0),
(27116, 'cccc', 'Ciencia ficción', 2021, 1),
(27118, 'fsd', 'Acción, Ciencia ficción', 1998, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pelicula`
--
ALTER TABLE `pelicula`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27119;
