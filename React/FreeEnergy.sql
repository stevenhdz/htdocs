-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 09-05-2023 a las 15:53:51
-- Versión del servidor: 5.7.34
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `FreeEnergy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credentials`
--

CREATE TABLE `credentials` (
  `id_credentials` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `number_doc` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idRolF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `credentials`
--

INSERT INTO `credentials` (`id_credentials`, `usuario`, `password`, `number_doc`, `createdAt`, `updatedAt`, `idRolF`) VALUES
(1, '1017247467@sl.com', '$2b$10$rAuktBUHaDiUDthCichjMeiAnIUz9/Z.rmXa1hQO/W3ID9tMxxio6', '1017247467', '2023-04-19 02:45:26', '2023-04-29 19:08:42', 14),
(4, '11@sl.com', '$2b$10$rHS9sg.y2ocO49nN2hp1nOzKOhmtQu37R.MlSW1Wub/rb8oIKY.G.', '11', '2023-04-29 16:23:44', '2023-04-29 16:26:49', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Departamentos`
--

CREATE TABLE `Departamentos` (
  `id_department` int(11) NOT NULL,
  `desc_department` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Departamentos`
--

INSERT INTO `Departamentos` (`id_department`, `desc_department`, `createdAt`, `updatedAt`) VALUES
(1, 'antioquia', '2023-04-20 01:39:09', '2023-04-20 01:39:30'),
(5, 'Huila', '2023-04-22 03:02:33', '2023-04-22 03:02:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Hardware`
--

CREATE TABLE `Hardware` (
  `id_hardware` int(11) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `mac` varchar(17) NOT NULL,
  `version_firmware` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Hardware`
--

INSERT INTO `Hardware` (`id_hardware`, `ip`, `mac`, `version_firmware`, `createdAt`, `updatedAt`, `status`) VALUES
(1, '192.168.1.1', '2223:3232:3443', '19.6.1', '2023-04-20 02:02:18', '2023-04-20 02:06:34', 1),
(8, '192.168.1.2', '2223:3232:344324', '1.2', '2023-04-22 15:52:23', '2023-04-22 15:52:23', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hardware_places`
--

CREATE TABLE `hardware_places` (
  `id_h_v` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idHardwareF` int(11) DEFAULT NULL,
  `idPlaceF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hardware_places`
--

INSERT INTO `hardware_places` (`id_h_v`, `createdAt`, `updatedAt`, `idHardwareF`, `idPlaceF`) VALUES
(1, '2023-04-19 02:45:26', '2023-04-19 02:45:26', 8, 1),
(6, '2023-04-22 15:53:04', '2023-04-22 15:53:04', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Municipios`
--

CREATE TABLE `Municipios` (
  `id_municipality` int(11) NOT NULL,
  `desc_municipality` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Municipios`
--

INSERT INTO `Municipios` (`id_municipality`, `desc_municipality`, `createdAt`, `updatedAt`) VALUES
(1, 'Medellin', '2023-04-20 01:48:43', '2023-04-20 01:49:29'),
(5, 'Neiva', '2023-04-22 03:02:44', '2023-04-22 03:02:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `places`
--

CREATE TABLE `places` (
  `id_place` int(11) NOT NULL,
  `detail` varchar(100) DEFAULT NULL,
  `georeference` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idDepartmentF` int(11) DEFAULT NULL,
  `idMunicipalityF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `places`
--

INSERT INTO `places` (`id_place`, `detail`, `georeference`, `createdAt`, `updatedAt`, `idDepartmentF`, `idMunicipalityF`) VALUES
(1, 'por la verede la tomata', '3.333, 34,56', '2023-04-22 03:01:10', '2023-04-22 03:01:10', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Reports`
--

CREATE TABLE `Reports` (
  `id_report` int(11) NOT NULL,
  `fecha_carga` date NOT NULL,
  `nivel_carga` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idUserRegisterF` int(11) DEFAULT NULL,
  `idHardwareF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Reports`
--

INSERT INTO `Reports` (`id_report`, `fecha_carga`, `nivel_carga`, `createdAt`, `updatedAt`, `idUserRegisterF`, `idHardwareF`) VALUES
(1, '2023-04-20', 78, '2023-04-19 02:45:26', '2023-04-22 04:08:29', 1, 1),
(41, '2023-04-22', 0, '2023-04-22 15:35:40', '2023-04-22 15:35:40', 1, 1),
(42, '2023-04-22', 0, '2023-04-22 15:47:36', '2023-04-22 15:47:36', 1, 1),
(43, '2023-04-22', 0, '2023-04-22 15:47:44', '2023-04-22 15:47:44', 1, 1),
(44, '2023-04-22', 0, '2023-04-22 15:47:52', '2023-04-22 15:47:52', 1, 1),
(45, '2023-04-22', 0, '2023-04-22 15:48:00', '2023-04-22 15:48:00', 1, 1),
(46, '2023-04-22', 0, '2023-04-22 15:48:08', '2023-04-22 15:48:08', 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id_rol` int(11) NOT NULL,
  `description_rol` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id_rol`, `description_rol`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', '2023-04-19 02:43:05', '2023-04-19 02:43:05'),
(13, 'Agent', '2023-04-29 18:57:50', '2023-04-29 18:57:50'),
(14, 'ddd2', '2023-04-29 18:58:09', '2023-04-30 00:03:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statuses`
--

CREATE TABLE `statuses` (
  `id_status` int(11) NOT NULL,
  `description_status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `statuses`
--

INSERT INTO `statuses` (`id_status`, `description_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Activo', '2023-04-19 02:43:22', '2023-04-19 02:43:22'),
(2, 'Inactivo\r\n', '2023-04-19 02:43:22', '2023-04-19 02:43:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typedocs`
--

CREATE TABLE `typedocs` (
  `id_typedoc` int(11) NOT NULL,
  `description_type_doc` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `typedocs`
--

INSERT INTO `typedocs` (`id_typedoc`, `description_type_doc`, `createdAt`, `updatedAt`) VALUES
(1, 'CC', '2023-04-19 02:43:42', '2023-04-19 02:43:42'),
(2, 'TI', '2023-04-19 02:43:42', '2023-04-19 02:43:42'),
(3, 'PASSPORT', '2023-04-22 18:53:14', '2023-04-22 18:53:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `number_doc` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `lastname2` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idStatusF` int(11) DEFAULT NULL,
  `idTypedocF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `number_doc`, `name`, `name2`, `lastname`, `lastname2`, `email`, `telephone`, `createdAt`, `updatedAt`, `idStatusF`, `idTypedocF`) VALUES
(1, 1017247467, 'alex', 'steven', 'hernandez', 'jimenez', 's@gmail.com', '3939393', '2023-04-19 02:45:26', '2023-04-29 19:05:31', 1, 1),
(2, 99, 'piedad', '', 'hola', 'holas', 's@gmail.com', '38383838', '2023-04-22 19:09:20', '2023-04-22 19:09:20', 1, 3),
(3, 1017247469, 'ss', '', 'sss', '', '1017247467@sl.com', '33333', '2023-04-29 02:50:27', '2023-04-29 02:50:27', 1, 3),
(4, 11, 'Alex', 'steven', 'hernandez', 'sknkdsjd', '1017247467@sl.com', '33654654', '2023-04-29 16:23:44', '2023-04-29 16:23:44', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`id_credentials`),
  ADD UNIQUE KEY `number_doc` (`number_doc`),
  ADD KEY `idRolF` (`idRolF`);

--
-- Indices de la tabla `Departamentos`
--
ALTER TABLE `Departamentos`
  ADD PRIMARY KEY (`id_department`),
  ADD UNIQUE KEY `UNI` (`desc_department`);

--
-- Indices de la tabla `Hardware`
--
ALTER TABLE `Hardware`
  ADD PRIMARY KEY (`id_hardware`),
  ADD UNIQUE KEY `ip` (`ip`),
  ADD UNIQUE KEY `mac` (`mac`);

--
-- Indices de la tabla `hardware_places`
--
ALTER TABLE `hardware_places`
  ADD PRIMARY KEY (`id_h_v`),
  ADD KEY `idHardwareF` (`idHardwareF`),
  ADD KEY `idPlaceF` (`idPlaceF`);

--
-- Indices de la tabla `Municipios`
--
ALTER TABLE `Municipios`
  ADD PRIMARY KEY (`id_municipality`),
  ADD UNIQUE KEY `UNI` (`desc_municipality`);

--
-- Indices de la tabla `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id_place`),
  ADD KEY `idDepartmentF` (`idDepartmentF`),
  ADD KEY `idMunicipalityF` (`idMunicipalityF`);

--
-- Indices de la tabla `Reports`
--
ALTER TABLE `Reports`
  ADD PRIMARY KEY (`id_report`),
  ADD KEY `idUserRegisterF` (`idUserRegisterF`),
  ADD KEY `idHardwareF` (`idHardwareF`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id_rol`),
  ADD UNIQUE KEY `UNI` (`description_rol`);

--
-- Indices de la tabla `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id_status`),
  ADD UNIQUE KEY `UNI` (`description_status`);

--
-- Indices de la tabla `typedocs`
--
ALTER TABLE `typedocs`
  ADD PRIMARY KEY (`id_typedoc`),
  ADD UNIQUE KEY `UNI` (`description_type_doc`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `number_doc` (`number_doc`),
  ADD KEY `idStatusF` (`idStatusF`),
  ADD KEY `idTypedocF` (`idTypedocF`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `credentials`
--
ALTER TABLE `credentials`
  MODIFY `id_credentials` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Departamentos`
--
ALTER TABLE `Departamentos`
  MODIFY `id_department` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Hardware`
--
ALTER TABLE `Hardware`
  MODIFY `id_hardware` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `hardware_places`
--
ALTER TABLE `hardware_places`
  MODIFY `id_h_v` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Municipios`
--
ALTER TABLE `Municipios`
  MODIFY `id_municipality` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `places`
--
ALTER TABLE `places`
  MODIFY `id_place` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Reports`
--
ALTER TABLE `Reports`
  MODIFY `id_report` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id_status` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `typedocs`
--
ALTER TABLE `typedocs`
  MODIFY `id_typedoc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `credentials`
--
ALTER TABLE `credentials`
  ADD CONSTRAINT `credentials_ibfk_2` FOREIGN KEY (`idRolF`) REFERENCES `rols` (`id_rol`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `hardware_places`
--
ALTER TABLE `hardware_places`
  ADD CONSTRAINT `hardware_places_ibfk_1` FOREIGN KEY (`idHardwareF`) REFERENCES `Hardware` (`id_hardware`) ON UPDATE CASCADE,
  ADD CONSTRAINT `hardware_places_ibfk_2` FOREIGN KEY (`idPlaceF`) REFERENCES `places` (`id_place`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `places`
--
ALTER TABLE `places`
  ADD CONSTRAINT `places_ibfk_1` FOREIGN KEY (`idDepartmentF`) REFERENCES `Departamentos` (`id_department`) ON UPDATE CASCADE,
  ADD CONSTRAINT `places_ibfk_2` FOREIGN KEY (`idMunicipalityF`) REFERENCES `Municipios` (`id_municipality`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `Reports`
--
ALTER TABLE `Reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`idUserRegisterF`) REFERENCES `users` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`idHardwareF`) REFERENCES `hardware_places` (`id_h_v`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idStatusF`) REFERENCES `statuses` (`id_status`) ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`idTypedocF`) REFERENCES `typedocs` (`id_typedoc`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
