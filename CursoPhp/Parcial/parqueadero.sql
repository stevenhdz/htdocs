-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: parqueadero
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `parqueadero`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `parqueadero` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `parqueadero`;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cargo` (
  `cod_cargo` varchar(5) NOT NULL,
  `descripcion` varchar(20) NOT NULL,
  PRIMARY KEY (`cod_cargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES ('TC01','administrador'),('TC02','operario'),('TC03','aseo'),('TC04','cajero'),('TC05','guardia de seguridad');
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `documento_cliente` varchar(15) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `cod_sexo` varchar(5) NOT NULL,
  PRIMARY KEY (`documento_cliente`),
  KEY `cod_sexo` (`cod_sexo`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`cod_sexo`) REFERENCES `sexo` (`cod_sexo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES ('001','Alex Rodriguez','alex@gmail.com','1234567','S01'),('002','Maria Cano','maria@gmail.com','4445566','S02'),('003','Mario Suarez','mario@hotmail.com','1122334','S01'),('004','Karen Mendez','alex@yahoo.com','9992200','S02'),('005','Mariana Betancur','mariana@gmail.com','3352266','S02'),('006','Santiago Lopez','santi@yahoo.com','7745588','S01'),('007','Ramiro Granda','ramiro@hotmail.com','4569871','S01'),('008','Camila Marin','camila@gmail.com','5214796','S02'),('009','Yuliana Restrepo','yuliana@yahoo.com','2589631','S02'),('010','Kevin Torres','kevin@gmail.com','4789632','S01');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes_vehiculos`
--

DROP TABLE IF EXISTS `clientes_vehiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes_vehiculos` (
  `documento_cliente` varchar(15) NOT NULL,
  `placa` varchar(15) NOT NULL,
  KEY `documento_cliente` (`documento_cliente`),
  KEY `placa` (`placa`),
  CONSTRAINT `clientes_vehiculos_ibfk_1` FOREIGN KEY (`documento_cliente`) REFERENCES `cliente` (`documento_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `clientes_vehiculos_ibfk_2` FOREIGN KEY (`placa`) REFERENCES `vehiculo` (`placa`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes_vehiculos`
--

LOCK TABLES `clientes_vehiculos` WRITE;
/*!40000 ALTER TABLE `clientes_vehiculos` DISABLE KEYS */;
INSERT INTO `clientes_vehiculos` VALUES ('001','CARRO01'),('002','BICI01'),('003','CARRO02'),('004','MOTO01'),('005','BICI02'),('006','CARRO03'),('007','MOTO02'),('008','MOTO03'),('009','BICI03'),('010','CARRO04');
/*!40000 ALTER TABLE `clientes_vehiculos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `documento_empleado` varchar(15) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `cod_sexo` varchar(5) NOT NULL,
  `cod_cargo` varchar(5) NOT NULL,
  `cod_tipo_sangre` varchar(5) NOT NULL,
  PRIMARY KEY (`documento_empleado`),
  KEY `cod_sexo` (`cod_sexo`),
  KEY `cod_cargo` (`cod_cargo`),
  KEY `cod_tipo_sangre` (`cod_tipo_sangre`),
  CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`cod_sexo`) REFERENCES `sexo` (`cod_sexo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `empleados_ibfk_2` FOREIGN KEY (`cod_cargo`) REFERENCES `cargo` (`cod_cargo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `empleados_ibfk_3` FOREIGN KEY (`cod_tipo_sangre`) REFERENCES `tipo_sangre` (`cod_tipo_sangre`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES ('020','Elkin Soto','1234567','elkin@gmail.com','1994-10-12','S01','TC01','CTS01'),('021','Berta Gonzales','1147799','berta@gmail.com','1981-05-20','S02','TC02','CTS06'),('022','Sara Castro','4913782','sara@gmail.com','1979-10-12','S02','TC02','CTS06'),('023','Carlos Perez','2581397','carlos@hotmail.com','1993-10-10','S01','TC03','CTS05'),('024','Viviana Carvajal','9317825','viviana@gmail.com','1995-12-15','S02','TC04','CTS03'),('025','Marcela Reyes','8135287','marcela@gmail.com','1975-04-02','S02','TC04','CTS08'),('026','Oscar Figueroa','8137995','oscar@hotmail.com','1969-08-21','S01','TC05','CTS07'),('027','Renzo Hernandez','1111557','renzo@gmail.com','1996-01-01','S01','TC03','CTS06'),('028','Daniel Florez','1579532','daniel@hotmail.com','1994-12-10','S01','TC05','CTS04');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados_nominaempleados`
--

DROP TABLE IF EXISTS `empleados_nominaempleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados_nominaempleados` (
  `documento_empleado` varchar(15) NOT NULL,
  `cod_nomina` varchar(5) NOT NULL,
  KEY `documento_empleado` (`documento_empleado`),
  KEY `cod_nomina` (`cod_nomina`),
  CONSTRAINT `empleados_nominaempleados_ibfk_1` FOREIGN KEY (`documento_empleado`) REFERENCES `empleados` (`documento_empleado`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `empleados_nominaempleados_ibfk_2` FOREIGN KEY (`cod_nomina`) REFERENCES `nomina_empleados` (`cod_nomina`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados_nominaempleados`
--

LOCK TABLES `empleados_nominaempleados` WRITE;
/*!40000 ALTER TABLE `empleados_nominaempleados` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleados_nominaempleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca_vehiculo`
--

DROP TABLE IF EXISTS `marca_vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca_vehiculo` (
  `cod_marca` varchar(5) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  PRIMARY KEY (`cod_marca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca_vehiculo`
--

LOCK TABLES `marca_vehiculo` WRITE;
/*!40000 ALTER TABLE `marca_vehiculo` DISABLE KEYS */;
INSERT INTO `marca_vehiculo` VALUES ('CM01','Renault'),('CM02','Mazda'),('CM03','Chevrolet'),('CM04','Suzuki'),('CM05','Audi'),('CM06','BMW'),('CM07','Ford'),('CM08','Nissan'),('CM09','Toyota'),('CM10','Honda'),('CM11','Yamaha'),('CM12','Pulsar'),('CM13','Auteco Boxer'),('CM14','AKT'),('CM15','Hero'),('CM16','GW'),('CM17','Canyon'),('CM18','Trek'),('CM19','Shimano');
/*!40000 ALTER TABLE `marca_vehiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mejores_clientes`
--

DROP TABLE IF EXISTS `mejores_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mejores_clientes` (
  `documento_cliente` varchar(15) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `Tiempo` decimal(6,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mejores_clientes`
--

LOCK TABLES `mejores_clientes` WRITE;
/*!40000 ALTER TABLE `mejores_clientes` DISABLE KEYS */;
INSERT INTO `mejores_clientes` VALUES ('001','Alex Rodriguez',5.5000),('003','Mario Suarez',7.0000),('004','Karen Mendez',7.5000),('005','Mariana Betancur',11.5000),('009','Yuliana Restrepo',6.5000),('008','Camila Marin',9.5000);
/*!40000 ALTER TABLE `mejores_clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nomina_empleados`
--

DROP TABLE IF EXISTS `nomina_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nomina_empleados` (
  `cod_nomina` varchar(5) NOT NULL,
  `valor_nomina` float NOT NULL,
  PRIMARY KEY (`cod_nomina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nomina_empleados`
--

LOCK TABLES `nomina_empleados` WRITE;
/*!40000 ALTER TABLE `nomina_empleados` DISABLE KEYS */;
INSERT INTO `nomina_empleados` VALUES ('CN01',1000000),('CN02',3000000),('CN03',1100000),('CN04',1250000);
/*!40000 ALTER TABLE `nomina_empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registros`
--

DROP TABLE IF EXISTS `registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registros` (
  `documento_cliente` varchar(15) NOT NULL,
  `placa` varchar(15) NOT NULL,
  `documento_empleado` varchar(15) NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_salida` time NOT NULL,
  `hora` float NOT NULL,
  `valor_hora` float NOT NULL,
  `valor_pagar` float NOT NULL,
  KEY `documento_cliente` (`documento_cliente`),
  KEY `placa` (`placa`),
  KEY `documento_empleado` (`documento_empleado`),
  CONSTRAINT `registros_ibfk_1` FOREIGN KEY (`documento_cliente`) REFERENCES `cliente` (`documento_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `registros_ibfk_2` FOREIGN KEY (`placa`) REFERENCES `vehiculo` (`placa`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `registros_ibfk_3` FOREIGN KEY (`documento_empleado`) REFERENCES `empleados` (`documento_empleado`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES ('001','CARRO01','024','07:00:00','12:30:00',5.5,3000,16500),('002','BICI01','024','09:00:00','13:30:00',4.5,1500,6750),('003','CARRO02','024','09:30:00','16:30:00',7,3000,21000),('004','MOTO01','024','11:30:00','19:00:00',7.5,2000,15000),('005','BICI02','024','07:00:00','18:30:00',11.5,1500,17250),('006','CARRO03','025','16:30:00','21:30:00',5,3000,15000),('007','MOTO02','025','20:00:00','21:30:00',1.5,2000,3000),('008','MOTO03','025','19:00:00','22:00:00',3,2000,6000),('009','BICI03','025','15:00:00','21:30:00',6.5,1500,9750),('010','CARRO04','025','18:00:00','21:30:00',3.5,3000,10500),('008','CARRO04','025','12:00:00','21:30:00',9.5,3000,28500);
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger actualizar_valor_pagar before insert on registros
for each row
begin
set new.valor_pagar = new.valor_hora * ((HOUR(TIMEDIFF(new.hora_entrada, new.hora_salida)) + CASE WHEN MINUTE(TIMEDIFF(new.hora_entrada, new.hora_salida)) % 60 > 20 

THEN 1 ELSE 0 END/2.0));
set new.hora = ((HOUR(TIMEDIFF(new.hora_entrada, new.hora_salida)) + CASE WHEN MINUTE(TIMEDIFF(new.hora_entrada, new.hora_salida)) % 60 > 20 THEN 1 ELSE 0 END/2.0));
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sexo` (
  `cod_sexo` varchar(5) NOT NULL,
  `descripcion` varchar(15) NOT NULL,
  PRIMARY KEY (`cod_sexo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES ('S01','masculino'),('S02','femenino');
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_sangre`
--

DROP TABLE IF EXISTS `tipo_sangre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_sangre` (
  `cod_tipo_sangre` varchar(5) NOT NULL,
  `descripcion` enum('O+','O-','A+','A-','B+','B-','AB+','AB-') DEFAULT NULL,
  PRIMARY KEY (`cod_tipo_sangre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_sangre`
--

LOCK TABLES `tipo_sangre` WRITE;
/*!40000 ALTER TABLE `tipo_sangre` DISABLE KEYS */;
INSERT INTO `tipo_sangre` VALUES ('CTS01','O+'),('CTS02','O-'),('CTS03','A+'),('CTS04','A-'),('CTS05','B+'),('CTS06','B-'),('CTS07','AB+'),('CTS08','AB-');
/*!40000 ALTER TABLE `tipo_sangre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_vehiculo`
--

DROP TABLE IF EXISTS `tipo_vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_vehiculo` (
  `cod_tipo_vehiculo` varchar(5) NOT NULL,
  `descripcion` varchar(20) NOT NULL,
  PRIMARY KEY (`cod_tipo_vehiculo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_vehiculo`
--

LOCK TABLES `tipo_vehiculo` WRITE;
/*!40000 ALTER TABLE `tipo_vehiculo` DISABLE KEYS */;
INSERT INTO `tipo_vehiculo` VALUES ('CTP01','carro'),('CTP02','moto'),('CTP03','bicicleta');
/*!40000 ALTER TABLE `tipo_vehiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turno_empleados`
--

DROP TABLE IF EXISTS `turno_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turno_empleados` (
  `cod_turno` varchar(10) NOT NULL,
  `documento_empleado` varchar(15) NOT NULL,
  KEY `cod_turno` (`cod_turno`),
  KEY `documento_empleado` (`documento_empleado`),
  CONSTRAINT `turno_empleados_ibfk_1` FOREIGN KEY (`cod_turno`) REFERENCES `turnos` (`cod_turno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `turno_empleados_ibfk_2` FOREIGN KEY (`documento_empleado`) REFERENCES `empleados` (`documento_empleado`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turno_empleados`
--

LOCK TABLES `turno_empleados` WRITE;
/*!40000 ALTER TABLE `turno_empleados` DISABLE KEYS */;
/*!40000 ALTER TABLE `turno_empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turnos`
--

DROP TABLE IF EXISTS `turnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turnos` (
  `cod_turno` varchar(10) NOT NULL,
  `comienzo_turno` time NOT NULL,
  `final_turno` time NOT NULL,
  `dias_laborados` set('lunes','martes','miercoles','jueves','viernes') DEFAULT NULL,
  PRIMARY KEY (`cod_turno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turnos`
--

LOCK TABLES `turnos` WRITE;
/*!40000 ALTER TABLE `turnos` DISABLE KEYS */;
INSERT INTO `turnos` VALUES ('CT01','06:00:00','15:00:00','lunes,martes,miercoles,jueves,viernes'),('CT02','15:00:00','23:00:00','lunes,martes,miercoles,jueves,viernes'),('CT03','07:00:00','16:00:00','lunes,martes,miercoles,jueves,viernes');
/*!40000 ALTER TABLE `turnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `nombre` char(20) NOT NULL,
  `clave` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('Mauricio Sepulveda','ti');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehiculo` (
  `placa` varchar(15) NOT NULL,
  `cod_marca` varchar(5) NOT NULL,
  `cod_tipo_vehiculo` varchar(5) NOT NULL,
  PRIMARY KEY (`placa`),
  KEY `cod_marca` (`cod_marca`),
  KEY `cod_tipo_vehiculo` (`cod_tipo_vehiculo`),
  CONSTRAINT `vehiculo_ibfk_1` FOREIGN KEY (`cod_marca`) REFERENCES `marca_vehiculo` (`cod_marca`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehiculo_ibfk_2` FOREIGN KEY (`cod_tipo_vehiculo`) REFERENCES `tipo_vehiculo` (`cod_tipo_vehiculo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
INSERT INTO `vehiculo` VALUES ('BICI01','CM16','CTP03'),('BICI02','CM17','CTP03'),('BICI03','CM19','CTP03'),('CARRO01','CM01','CTP01'),('CARRO02','CM07','CTP01'),('CARRO03','CM02','CTP01'),('CARRO04','CM05','CTP01'),('MOTO01','CM11','CTP02'),('MOTO02','CM14','CTP02'),('MOTO03','CM12','CTP02');
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-21 17:33:49
