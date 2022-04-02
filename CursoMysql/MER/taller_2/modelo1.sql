CREATE DATABASE taller_2;
USE taller_2;
CREATE TABLE roles (
  idRole INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL
);
CREATE TABLE personas (
  idPersona VARCHAR(50) NOT NULL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  edad VARCHAR(10) NULL,
  telefono VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  contrasena VARCHAR(50) NOT NULL,
  fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fechaActualizacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
  idRole INT NOT NULL,
  CONSTRAINT FK_role FOREIGN KEY (idRole) REFERENCES roles(idRole)
);
CREATE TABLE torres (
  idTorre INT AUTO_INCREMENT PRIMARY KEY,
  nombreTorre VARCHAR(50) NOT NULL,
  nroApartamentos INT NOT NULL
);
CREATE TABLE apartamentos (
  idApartamento INT NOT NULL PRIMARY KEY,
  numeroTelefonico VARCHAR(50) NOT NULL,
  cantidadHabitantes INT NOT NULL,
  idPersona VARCHAR(50) NOT NULL,
  idTorre INT NOT NULL,
  FOREIGN KEY (idpersona) REFERENCES personas(idPersona),
  FOREIGN KEY (idTorre) REFERENCES torres(idTorre)
);
CREATE TABLE tipo_pagos (
  idTipoPago INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50)
);
CREATE TABLE pagos (
  idPago INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  descripcion VARCHAR(50) NULL,
  valor FLOAT NOT NULL,
  idTipoPago INT NOT NULL,
  idPersona VARCHAR(50) NOT NULL,
  FOREIGN KEY (idTipoPago) REFERENCES tipo_pagos(idTipoPago),
  FOREIGN KEY (idPersona) REFERENCES personas(idPersona)
);
CREATE TABLE tipo_vehiculos (
  idTipoVehiculo INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL
);
CREATE TABLE marca_vehiculos (
  idMarca INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(50) NOT NULL
);
CREATE TABLE color_vehiculos (
  idColor INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL
);
CREATE TABLE modelo_vehiculos (
  idModelo INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) NOT NULL
);
CREATE TABLE ingreso_vehiculos (
  idPlaca VARCHAR(20) NOT NULL PRIMARY KEY,
  fechaIngreso DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fechaSalida DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
  idTipoVehiculo INT NOT NULL,
  idMarca INT NOT NULL,
  idColor INT NOT NULL,
  idModelo INT NOT NULL,
  idPersona VARCHAR(50) NOT NULL,
  FOREIGN KEY (idTipoVehiculo) REFERENCES tipo_vehiculos(idTipoVehiculo),
  FOREIGN KEY (idMarca) REFERENCES marca_vehiculos(idMarca),
  FOREIGN KEY (idColor) REFERENCES color_vehiculos(idColor),
  FOREIGN KEY (idModelo) REFERENCES modelo_vehiculos(idModelo),
  FOREIGN KEY (idPersona) REFERENCES personas(idPersona)
);