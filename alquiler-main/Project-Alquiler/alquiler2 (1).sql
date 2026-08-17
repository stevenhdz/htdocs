-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-12-2023 a las 22:01:24
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alquiler2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accesorios`
--

CREATE TABLE `accesorios` (
  `IdAccesorio` int(11) NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `accesorios`
--

INSERT INTO `accesorios` (`IdAccesorio`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'petalera', '2023-12-18 14:59:25', '2023-12-18 14:59:25'),
(2, 'guantes', '2023-12-18 14:59:28', '2023-12-18 14:59:28'),
(3, 'corbatas', '2023-12-18 15:00:51', '2023-12-18 15:00:51'),
(4, 'corona', '2023-12-18 15:00:58', '2023-12-18 15:00:58'),
(5, 'tiara', '2023-12-18 15:01:03', '2023-12-18 15:01:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accesoriosordencompras`
--

CREATE TABLE `accesoriosordencompras` (
  `IdAccesorioOrdenCompra` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `IdOrdenCompra` int(11) NOT NULL,
  `IdAccesorio` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquilers`
--

CREATE TABLE `alquilers` (
  `IdAlquiler` int(11) NOT NULL,
  `FechaInicialAlquiler` datetime NOT NULL,
  `FechaFinlAlquiler` datetime NOT NULL,
  `IdTienda` int(11) NOT NULL,
  `IdCliente` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alquilers`
--

INSERT INTO `alquilers` (`IdAlquiler`, `FechaInicialAlquiler`, `FechaFinlAlquiler`, `IdTienda`, `IdCliente`, `createdAt`, `updatedAt`) VALUES
(1, '2023-12-28 16:10:55', '2023-12-28 16:10:55', 1, 2, '2023-12-18 16:10:55', '2023-12-18 16:10:55'),
(7, '2023-12-20 12:22:28', '2023-12-21 12:22:28', 1, 2, '2023-12-18 18:22:28', '2023-12-18 18:22:28'),
(8, '2023-12-20 12:22:28', '2023-12-21 12:22:28', 1, 2, '2023-12-18 18:22:28', '2023-12-18 18:22:28'),
(9, '2023-12-20 12:24:38', '2023-12-21 12:24:38', 1, 6, '2023-12-18 18:24:38', '2023-12-18 18:24:38'),
(13, '2023-12-19 12:25:02', '2023-12-20 12:25:02', 1, 6, '2023-12-18 18:25:02', '2023-12-18 18:25:02'),
(14, '2023-12-18 18:25:02', '2023-12-18 18:25:02', 1, 3, '2023-12-18 18:25:02', '2023-12-18 18:25:02'),
(15, '2023-12-18 18:26:00', '2023-12-18 18:26:00', 1, 6, '2023-12-18 18:26:00', '2023-12-18 18:26:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `IdArticulo` int(11) NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `PrecioArticulo` decimal(10,2) NOT NULL,
  `IdCategoria` int(11) NOT NULL,
  `IdColor` int(11) NOT NULL,
  `IdTalla` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`IdArticulo`, `Descripcion`, `PrecioArticulo`, `IdCategoria`, `IdColor`, `IdTalla`, `createdAt`, `updatedAt`) VALUES
(1, 'vestido novia', '20000.00', 1, 2, 1, '2023-12-18 16:05:50', '2023-12-18 16:05:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulosordencompras`
--

CREATE TABLE `articulosordencompras` (
  `IdArticuloOrdenCompra` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `IdOrdenCompra` int(11) NOT NULL,
  `IdArticulo` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `IdCategoria` int(11) NOT NULL,
  `Descripcion` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`IdCategoria`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'HOMBRE', '2023-12-18 15:02:25', '2023-12-18 15:02:25'),
(2, 'MUJERES', '2023-12-18 15:02:30', '2023-12-18 15:02:30'),
(3, 'NIÑOS', '2023-12-18 15:02:34', '2023-12-18 15:02:34'),
(4, 'NIÑAS', '2023-12-18 17:35:37', '2023-12-18 17:35:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `IdCliente` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Cedula` varchar(50) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Telefono` varchar(20) NOT NULL,
  `ReferenciaPersonalNombre` varchar(50) NOT NULL,
  `ReferenciaPersonalTelefono` varchar(20) NOT NULL,
  `FotoDocumento` longblob DEFAULT NULL,
  `FotoServicioPublico` longblob DEFAULT NULL,
  `Fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`IdCliente`, `Nombre`, `Apellido`, `Cedula`, `Correo`, `Direccion`, `Telefono`, `ReferenciaPersonalNombre`, `ReferenciaPersonalTelefono`, `FotoDocumento`, `FotoServicioPublico`, `Fecha`) VALUES
(1, 'catalina', 'muñoz', '1033722919', 'catae@hotmail.com', 'kr 29 # 54 a sur 27', '3044193835', 'manzanita', '304419388', 0x6173736574735c466f746f446f63756d656e746f5f313033333732323931395f636174616c696e612e706466, 0x6173736574735c466f746f536572766963696f5075626c69636f5f313033333732323931395f636174616c696e612e706466, '2023-12-14 00:00:00'),
(2, 'andres', 'bermeo', '123', 'andres@gmail.com', 'calle 55a # 27 80 sur', '304419383578', 'manzanitass', '304419377', 0x6173736574735c466f746f446f63756d656e746f5f3132335f616e647265732e706466, 0x6173736574735c466f746f536572766963696f5075626c69636f5f3132335f616e647265732e706466, '2023-12-14 00:00:00'),
(3, 'Nombre1', 'Apellido1', 'Cedula1', 'correo1@example.com', 'Dirección1', '111111111', 'Referencia1', '222222222', NULL, NULL, '2023-12-15 00:03:14'),
(4, 'Nombre2', 'Apellido2', 'Cedula2', 'correo2@example.com', 'Dirección2', '222222222', 'Referencia2', '333333333', NULL, NULL, '2023-12-15 00:03:14'),
(5, 'Nombre50', 'Apellido50', 'Cedula50', 'correo50@example.com', 'Dirección50', '555555555', 'Referencia50', '666666666', NULL, NULL, '2023-12-15 00:03:14'),
(6, 'carolina', 'muñozss', '1234', 'catae33@hotmail.com', 'kr 2933 # 54 a sur 27', '3044193877', 'manzanita', '304419322', 0x6173736574735c466f746f446f63756d656e746f5f313233345f6361726f6c696e612e706466, 0x6173736574735c466f746f536572766963696f5075626c69636f5f313233345f6361726f6c696e612e706466, '2023-12-18 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `IdColor` int(11) NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colores`
--

INSERT INTO `colores` (`IdColor`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'AZUL', '2023-12-18 15:02:09', '2023-12-18 15:02:09'),
(2, 'AMARILLO', '2023-12-18 15:02:13', '2023-12-18 15:02:13'),
(3, 'vinotinto negro', '2023-12-18 16:18:50', '2023-12-18 16:18:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `IdEmpleado` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Cedula` varchar(100) NOT NULL,
  `Telefono` varchar(20) NOT NULL,
  `IdEstadoEmpleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`IdEmpleado`, `Nombre`, `Apellido`, `Correo`, `Direccion`, `Cedula`, `Telefono`, `IdEstadoEmpleado`) VALUES
(1, 'catalina', 'muñoz', 'cataelectronic@hotmail.com', 'kr 29 # 54 a sur 27', '1033722919', '3044193835', 1),
(2, 'sergio', 'ortiz', 'ortiz@hotmail.com', 'calle 54 27-28', '304419777', '304419444', 1),
(4, 'angie', 'ramos jimenez', 'ramosc@hotmail.com', 'calle 55a # 7 80 sur', '103322552', '304419785', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadoempleados`
--

CREATE TABLE `estadoempleados` (
  `IdEstadoEmpleado` int(11) NOT NULL,
  `Descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadoempleados`
--

INSERT INTO `estadoempleados` (`IdEstadoEmpleado`, `Descripcion`) VALUES
(1, 'activo'),
(2, 'inactivo'),
(3, 'vacaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadopagos`
--

CREATE TABLE `estadopagos` (
  `IdEstadoPago` int(11) NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadopagos`
--

INSERT INTO `estadopagos` (`IdEstadoPago`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'ABONO', '2023-12-18 15:01:33', '2023-12-18 15:01:33'),
(2, 'SALDO', '2023-12-18 15:01:42', '2023-12-18 15:01:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadoregistronegativos`
--

CREATE TABLE `estadoregistronegativos` (
  `IdEstadoRegistroNegativo` int(11) NOT NULL,
  `Descripcion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadoregistronegativos`
--

INSERT INTO `estadoregistronegativos` (`IdEstadoRegistroNegativo`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Entrego tarde', '2023-12-14 23:00:33', '2023-12-14 23:00:33'),
(2, 'Entrego en mal estado ', '2023-12-14 23:00:49', '2023-12-14 23:00:49'),
(3, 'No entrego ', '2023-12-14 23:01:02', '2023-12-14 23:01:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastosempleados`
--

CREATE TABLE `gastosempleados` (
  `IdGastoEmpleado` int(11) NOT NULL,
  `Descripcion` varchar(255) NOT NULL,
  `Monto` decimal(10,2) NOT NULL,
  `IdEmpleado` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gastosempleados`
--

INSERT INTO `gastosempleados` (`IdGastoEmpleado`, `Descripcion`, `Monto`, `IdEmpleado`, `createdAt`, `updatedAt`) VALUES
(1, 'capucchino vainilla', '5000.00', 1, '2023-12-18 15:34:46', '2023-12-18 15:34:46'),
(2, 'tinto', '5000.00', 2, '2023-12-18 16:02:42', '2023-12-18 16:02:42'),
(3, 'recibo de la luz', '15000.00', 1, '2023-12-18 17:08:07', '2023-12-18 17:08:07'),
(4, 'recibo de la luz', '200.00', 1, '2023-12-18 17:10:27', '2023-12-18 17:10:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invetarioaccesorios`
--

CREATE TABLE `invetarioaccesorios` (
  `IdInventarioAccesorio` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `IdAccesorio` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invetarioarticulos`
--

CREATE TABLE `invetarioarticulos` (
  `IdInventarioArticulo` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `IdArticulo` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `invetarioarticulos`
--

INSERT INTO `invetarioarticulos` (`IdInventarioArticulo`, `Cantidad`, `IdArticulo`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-12-19 17:15:28', '2023-12-19 17:15:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordencompras`
--

CREATE TABLE `ordencompras` (
  `IdOrdenCompra` int(11) NOT NULL,
  `FechaCompra` datetime NOT NULL,
  `IdAlquiler` int(11) NOT NULL,
  `IdEmpleado` int(11) NOT NULL,
  `Total` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ordencompras`
--

INSERT INTO `ordencompras` (`IdOrdenCompra`, `FechaCompra`, `IdAlquiler`, `IdEmpleado`, `Total`, `createdAt`, `updatedAt`) VALUES
(1, '2023-12-18 00:00:00', 1, 1, '1700000.00', '2023-12-18 15:11:28', '2023-12-18 15:11:28'),
(2, '2023-12-18 00:00:00', 1, 1, '1234.00', '2023-12-18 16:26:26', '2023-12-18 16:26:26'),
(3, '2023-12-12 00:00:00', 1, 2, '12345.00', '2023-12-18 16:26:44', '2023-12-18 16:26:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `IdPago` int(11) NOT NULL,
  `FechadPago` datetime NOT NULL,
  `Valor` decimal(10,2) NOT NULL,
  `IdEstadoPago` int(11) NOT NULL,
  `IdTipoPago` int(11) NOT NULL,
  `IdOrdenCompra` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`IdPago`, `FechadPago`, `Valor`, `IdEstadoPago`, `IdTipoPago`, `IdOrdenCompra`, `createdAt`, `updatedAt`) VALUES
(1, '2023-12-20 00:00:00', '2000.00', 1, 1, 1, '2023-12-18 15:12:13', '2023-12-18 15:12:13'),
(2, '2023-12-18 00:00:00', '5000.00', 1, 1, 1, '2023-12-18 16:26:07', '2023-12-18 16:26:07'),
(4, '2023-12-18 02:26:28', '7000.00', 2, 2, 3, '2023-12-19 02:26:28', '2023-12-19 02:26:28'),
(5, '2023-12-18 02:31:50', '2000.00', 1, 1, 2, '2023-12-19 02:31:50', '2023-12-19 02:31:50'),
(6, '2023-12-18 02:32:51', '6000.00', 2, 1, 3, '2023-12-19 02:32:52', '2023-12-19 02:32:52'),
(7, '2023-12-18 02:34:54', '10000.00', 2, 2, 1, '2023-12-19 02:34:54', '2023-12-19 02:34:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registronegativos`
--

CREATE TABLE `registronegativos` (
  `IdRegistroNegativo` int(11) NOT NULL,
  `IdCliente` int(11) NOT NULL,
  `IdEstadoRegistroNegativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registronegativos`
--

INSERT INTO `registronegativos` (`IdRegistroNegativo`, `IdCliente`, `IdEstadoRegistroNegativo`) VALUES
(1, 1, 1),
(2, 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrosdevolucions`
--

CREATE TABLE `registrosdevolucions` (
  `IdRegistroDevolucion` int(11) NOT NULL,
  `Descripcion` varchar(20) NOT NULL,
  `IdAlquiler` int(11) NOT NULL,
  `IdEmpleado` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE TABLE `tallas` (
  `IdTalla` int(11) NOT NULL,
  `Descripcion` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tallas`
--

INSERT INTO `tallas` (`IdTalla`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'S', '2023-12-18 15:01:53', '2023-12-18 15:01:53'),
(2, 'M', '2023-12-18 15:01:54', '2023-12-18 15:01:54'),
(3, 'XL', '2023-12-18 15:01:55', '2023-12-18 15:01:55'),
(4, '32', '2023-12-18 15:01:56', '2023-12-18 15:01:56'),
(5, '33', '2023-12-18 15:01:58', '2023-12-18 15:01:58'),
(6, '34', '2023-12-18 15:01:59', '2023-12-18 15:01:59'),
(7, '25', '2023-12-18 15:02:00', '2023-12-18 15:02:00'),
(8, '26', '2023-12-18 15:02:01', '2023-12-18 15:02:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendas`
--

CREATE TABLE `tiendas` (
  `IdTienda` int(11) NOT NULL,
  `Nit` varchar(50) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Telefono` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Logo` varchar(250) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tiendas`
--

INSERT INTO `tiendas` (`IdTienda`, `Nit`, `Nombre`, `Direccion`, `Telefono`, `Correo`, `Logo`, `createdAt`, `updatedAt`) VALUES
(1, '1123654', 'piamonte1', 'kr 30 # 54 a sur 27', '3044122542', 'piamonte1@hotmail.com', 'SL', '2023-12-18 15:10:41', '2023-12-18 15:10:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipopagos`
--

CREATE TABLE `tipopagos` (
  `IdTipoPago` int(11) NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipopagos`
--

INSERT INTO `tipopagos` (`IdTipoPago`, `Descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Nequi', '2023-12-18 15:05:13', '2023-12-18 15:05:13'),
(2, 'Daviplata', '2023-12-18 15:05:18', '2023-12-18 15:05:18'),
(3, 'Efectivo', '2023-12-18 15:05:22', '2023-12-18 15:05:22'),
(5, 'tarjeta', '2023-12-18 16:15:42', '2023-12-18 16:15:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accesorios`
--
ALTER TABLE `accesorios`
  ADD PRIMARY KEY (`IdAccesorio`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`);

--
-- Indices de la tabla `accesoriosordencompras`
--
ALTER TABLE `accesoriosordencompras`
  ADD PRIMARY KEY (`IdAccesorioOrdenCompra`),
  ADD KEY `IdOrdenCompra` (`IdOrdenCompra`),
  ADD KEY `IdAccesorio` (`IdAccesorio`);

--
-- Indices de la tabla `alquilers`
--
ALTER TABLE `alquilers`
  ADD PRIMARY KEY (`IdAlquiler`),
  ADD KEY `IdTienda` (`IdTienda`),
  ADD KEY `IdCliente` (`IdCliente`);

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`IdArticulo`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`),
  ADD KEY `IdCategoria` (`IdCategoria`),
  ADD KEY `IdColor` (`IdColor`),
  ADD KEY `IdTalla` (`IdTalla`);

--
-- Indices de la tabla `articulosordencompras`
--
ALTER TABLE `articulosordencompras`
  ADD PRIMARY KEY (`IdArticuloOrdenCompra`),
  ADD KEY `IdOrdenCompra` (`IdOrdenCompra`),
  ADD KEY `IdArticulo` (`IdArticulo`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`IdCategoria`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`IdCliente`),
  ADD UNIQUE KEY `Cedula` (`Cedula`),
  ADD UNIQUE KEY `Correo` (`Correo`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`IdColor`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`IdEmpleado`),
  ADD UNIQUE KEY `Correo` (`Correo`),
  ADD UNIQUE KEY `Cedula` (`Cedula`),
  ADD UNIQUE KEY `Telefono` (`Telefono`),
  ADD KEY `IdEstadoEmpleado` (`IdEstadoEmpleado`);

--
-- Indices de la tabla `estadoempleados`
--
ALTER TABLE `estadoempleados`
  ADD PRIMARY KEY (`IdEstadoEmpleado`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`);

--
-- Indices de la tabla `estadopagos`
--
ALTER TABLE `estadopagos`
  ADD PRIMARY KEY (`IdEstadoPago`);

--
-- Indices de la tabla `estadoregistronegativos`
--
ALTER TABLE `estadoregistronegativos`
  ADD PRIMARY KEY (`IdEstadoRegistroNegativo`);

--
-- Indices de la tabla `gastosempleados`
--
ALTER TABLE `gastosempleados`
  ADD PRIMARY KEY (`IdGastoEmpleado`),
  ADD KEY `IdEmpleado` (`IdEmpleado`);

--
-- Indices de la tabla `invetarioaccesorios`
--
ALTER TABLE `invetarioaccesorios`
  ADD PRIMARY KEY (`IdInventarioAccesorio`),
  ADD UNIQUE KEY `IdAccesorio` (`IdAccesorio`);

--
-- Indices de la tabla `invetarioarticulos`
--
ALTER TABLE `invetarioarticulos`
  ADD PRIMARY KEY (`IdInventarioArticulo`),
  ADD UNIQUE KEY `IdArticulo` (`IdArticulo`);

--
-- Indices de la tabla `ordencompras`
--
ALTER TABLE `ordencompras`
  ADD PRIMARY KEY (`IdOrdenCompra`),
  ADD KEY `IdAlquiler` (`IdAlquiler`),
  ADD KEY `IdEmpleado` (`IdEmpleado`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`IdPago`),
  ADD KEY `IdEstadoPago` (`IdEstadoPago`),
  ADD KEY `IdTipoPago` (`IdTipoPago`),
  ADD KEY `IdOrdenCompra` (`IdOrdenCompra`);

--
-- Indices de la tabla `registronegativos`
--
ALTER TABLE `registronegativos`
  ADD PRIMARY KEY (`IdRegistroNegativo`),
  ADD UNIQUE KEY `IdCliente` (`IdCliente`),
  ADD KEY `IdEstadoRegistroNegativo` (`IdEstadoRegistroNegativo`);

--
-- Indices de la tabla `registrosdevolucions`
--
ALTER TABLE `registrosdevolucions`
  ADD PRIMARY KEY (`IdRegistroDevolucion`),
  ADD KEY `IdAlquiler` (`IdAlquiler`),
  ADD KEY `IdEmpleado` (`IdEmpleado`);

--
-- Indices de la tabla `tallas`
--
ALTER TABLE `tallas`
  ADD PRIMARY KEY (`IdTalla`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`);

--
-- Indices de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  ADD PRIMARY KEY (`IdTienda`),
  ADD UNIQUE KEY `Correo` (`Correo`);

--
-- Indices de la tabla `tipopagos`
--
ALTER TABLE `tipopagos`
  ADD PRIMARY KEY (`IdTipoPago`),
  ADD UNIQUE KEY `Descripcion` (`Descripcion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accesorios`
--
ALTER TABLE `accesorios`
  MODIFY `IdAccesorio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `accesoriosordencompras`
--
ALTER TABLE `accesoriosordencompras`
  MODIFY `IdAccesorioOrdenCompra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alquilers`
--
ALTER TABLE `alquilers`
  MODIFY `IdAlquiler` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `IdArticulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `articulosordencompras`
--
ALTER TABLE `articulosordencompras`
  MODIFY `IdArticuloOrdenCompra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `IdCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `IdColor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `IdEmpleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estadoempleados`
--
ALTER TABLE `estadoempleados`
  MODIFY `IdEstadoEmpleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `estadopagos`
--
ALTER TABLE `estadopagos`
  MODIFY `IdEstadoPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estadoregistronegativos`
--
ALTER TABLE `estadoregistronegativos`
  MODIFY `IdEstadoRegistroNegativo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `gastosempleados`
--
ALTER TABLE `gastosempleados`
  MODIFY `IdGastoEmpleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `invetarioaccesorios`
--
ALTER TABLE `invetarioaccesorios`
  MODIFY `IdInventarioAccesorio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `invetarioarticulos`
--
ALTER TABLE `invetarioarticulos`
  MODIFY `IdInventarioArticulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ordencompras`
--
ALTER TABLE `ordencompras`
  MODIFY `IdOrdenCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `IdPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `registronegativos`
--
ALTER TABLE `registronegativos`
  MODIFY `IdRegistroNegativo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `registrosdevolucions`
--
ALTER TABLE `registrosdevolucions`
  MODIFY `IdRegistroDevolucion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tallas`
--
ALTER TABLE `tallas`
  MODIFY `IdTalla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `IdTienda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipopagos`
--
ALTER TABLE `tipopagos`
  MODIFY `IdTipoPago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `accesoriosordencompras`
--
ALTER TABLE `accesoriosordencompras`
  ADD CONSTRAINT `accesoriosordencompras_ibfk_1` FOREIGN KEY (`IdOrdenCompra`) REFERENCES `ordencompras` (`IdOrdenCompra`) ON UPDATE CASCADE,
  ADD CONSTRAINT `accesoriosordencompras_ibfk_2` FOREIGN KEY (`IdAccesorio`) REFERENCES `accesorios` (`IdAccesorio`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `alquilers`
--
ALTER TABLE `alquilers`
  ADD CONSTRAINT `alquilers_ibfk_1` FOREIGN KEY (`IdTienda`) REFERENCES `tiendas` (`IdTienda`) ON UPDATE CASCADE,
  ADD CONSTRAINT `alquilers_ibfk_2` FOREIGN KEY (`IdCliente`) REFERENCES `clientes` (`IdCliente`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`IdCategoria`) REFERENCES `categorias` (`IdCategoria`) ON UPDATE CASCADE,
  ADD CONSTRAINT `articulos_ibfk_2` FOREIGN KEY (`IdColor`) REFERENCES `colores` (`IdColor`) ON UPDATE CASCADE,
  ADD CONSTRAINT `articulos_ibfk_3` FOREIGN KEY (`IdTalla`) REFERENCES `tallas` (`IdTalla`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `articulosordencompras`
--
ALTER TABLE `articulosordencompras`
  ADD CONSTRAINT `articulosordencompras_ibfk_1` FOREIGN KEY (`IdOrdenCompra`) REFERENCES `ordencompras` (`IdOrdenCompra`) ON UPDATE CASCADE,
  ADD CONSTRAINT `articulosordencompras_ibfk_2` FOREIGN KEY (`IdArticulo`) REFERENCES `articulos` (`IdArticulo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`IdEstadoEmpleado`) REFERENCES `estadoempleados` (`IdEstadoEmpleado`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `gastosempleados`
--
ALTER TABLE `gastosempleados`
  ADD CONSTRAINT `gastosempleados_ibfk_1` FOREIGN KEY (`IdEmpleado`) REFERENCES `empleados` (`IdEmpleado`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `invetarioaccesorios`
--
ALTER TABLE `invetarioaccesorios`
  ADD CONSTRAINT `invetarioaccesorios_ibfk_1` FOREIGN KEY (`IdAccesorio`) REFERENCES `accesorios` (`IdAccesorio`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `invetarioarticulos`
--
ALTER TABLE `invetarioarticulos`
  ADD CONSTRAINT `invetarioarticulos_ibfk_1` FOREIGN KEY (`IdArticulo`) REFERENCES `articulos` (`IdArticulo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ordencompras`
--
ALTER TABLE `ordencompras`
  ADD CONSTRAINT `ordencompras_ibfk_1` FOREIGN KEY (`IdAlquiler`) REFERENCES `alquilers` (`IdAlquiler`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ordencompras_ibfk_2` FOREIGN KEY (`IdEmpleado`) REFERENCES `empleados` (`IdEmpleado`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`IdEstadoPago`) REFERENCES `estadopagos` (`IdEstadoPago`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pagos_ibfk_2` FOREIGN KEY (`IdTipoPago`) REFERENCES `tipopagos` (`IdTipoPago`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pagos_ibfk_3` FOREIGN KEY (`IdOrdenCompra`) REFERENCES `ordencompras` (`IdOrdenCompra`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `registronegativos`
--
ALTER TABLE `registronegativos`
  ADD CONSTRAINT `registronegativos_ibfk_1` FOREIGN KEY (`IdCliente`) REFERENCES `clientes` (`IdCliente`) ON UPDATE CASCADE,
  ADD CONSTRAINT `registronegativos_ibfk_2` FOREIGN KEY (`IdEstadoRegistroNegativo`) REFERENCES `estadoregistronegativos` (`IdEstadoRegistroNegativo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `registrosdevolucions`
--
ALTER TABLE `registrosdevolucions`
  ADD CONSTRAINT `registrosdevolucions_ibfk_1` FOREIGN KEY (`IdAlquiler`) REFERENCES `alquilers` (`IdAlquiler`) ON UPDATE CASCADE,
  ADD CONSTRAINT `registrosdevolucions_ibfk_2` FOREIGN KEY (`IdEmpleado`) REFERENCES `empleados` (`IdEmpleado`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
