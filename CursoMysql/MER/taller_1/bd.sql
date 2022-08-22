-- Active: 1660597270289@@127.0.0.1@3306@taller_1

CREATE DATABASE taller_1;

USE taller_1;

CREATE TABLE
    Departamento (
        idDepartamento INT AUTO_INCREMENT PRIMARY KEY,
        descripcion VARCHAR(50) NOT NULL,
        NumeroHabitantes VARCHAR(10) NOT NULL
    );

CREATE TABLE
    Ciudad (
        idCiudad INT AUTO_INCREMENT PRIMARY KEY,
        Descripcion VARCHAR(50) NOT NULL,
        idDepartamento INT NOT NULL,
        FOREIGN KEY (idDepartamento) REFERENCES Departamento(idDepartamento)
    );

CREATE TABLE
    Tienda (
        idTienda INT AUTO_INCREMENT PRIMARY KEY,
        Descripcion VARCHAR(50) NOT NULL,
        Direccion VARCHAR(50) NOT NULL,
        Correo VARCHAR(50) NOT NULL,
        Telefono VARCHAR(50) NOT NULL,
        idCiudad INT NOT NULL,
        FOREIGN KEY (idCiudad) REFERENCES Ciudad(idCiudad)
    );

CREATE TABLE
    Maquina (
        idMaquina INT AUTO_INCREMENT PRIMARY KEY,
        Descripcion VARCHAR(50) NOT NULL,
        idTienda INT NOT NULL,
        FOREIGN KEY (idTienda) REFERENCES Tienda(idTienda)
    );

CREATE TABLE
    Descuento (
        idDescuento INT AUTO_INCREMENT PRIMARY KEY,
        Descripcion VARCHAR(50) NOT NULL,
        Porcentaje INT NOT NULL
    );

CREATE TABLE
    Cliente(
        idCliente VARCHAR(50) NOT NULL PRIMARY KEY,
        Nombre VARCHAR(50) NOT NULL,
        Nombre2 VARCHAR(50) NOT NULL,
        Apellido VARCHAR(50) NOT NULL,
        Apellido2 VARCHAR(50) NOT NULL,
        Telefono VARCHAR(50) NOT NULL,
        Correo VARCHAR(100) NOT NULL,
        Direccion VARCHAR(100) NOT NULL,
        FechaNacimiento DATETIME NOT NULL
    );



CREATE TABLE
    Pago(
        idPago INT NOT NULL PRIMARY KEY,
        fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        Total INT NOT NULL
    );

CREATE TABLE
    TipoPago(
        idTipoPago INT NOT NULL PRIMARY KEY,
        Descripcion VARCHAR(100) NOT NULL
    );
CREATE TABLE
    PagoTipoPago(
        idPago INT NOT NULL,
        idTipoPago INT NOT NULL,
        Total INT NOT NULL,
        NumeroCuotas INT NOT NULL,
         FOREIGN KEY (idPago) REFERENCES Pago(idPago),
         FOREIGN KEY (idTipoPago) REFERENCES TipoPago(idTipoPago)
    );
CREATE TABLE
    Iva(
        idIva INT NOT NULL PRIMARY KEY,
        Descripcion VARCHAR(100) NOT NULL,
        Porcentaje INT NOT NULL
    );

CREATE TABLE
    TipoProducto(
        idTipoProducto INT NOT NULL PRIMARY KEY,
        Descripcion VARCHAR(100) NOT NULL
    );


CREATE TABLE
    Producto(
        idProducto INT NOT NULL PRIMARY KEY,
        Descripcion VARCHAR(100) NOT NULL,
        Peso INT NOT NULL,
        Cantidad INT NOT NULL,
        Medida INT NOT NULL,
        precio INT NOT NULL,
        fechaCaduca DATETIME NOT NULL,
        idTipoProducto INT NOT NULL,
        idIva INT NOT NULL,
        FOREIGN KEY (idTipoProducto) REFERENCES TipoProducto(idTipoProducto),
        FOREIGN KEY (idIva) REFERENCES Iva(idIva)
    );
CREATE TABLE
    Factura (
        idFactura INT AUTO_INCREMENT PRIMARY KEY,
        FechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        Total INT NOT NULL,
        idCliente VARCHAR(50) NOT NULL,
        idMaquina INT NOT NULL,
        FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
        FOREIGN KEY (idMaquina) REFERENCES Maquina(idMaquina),
        FOREIGN KEY (idFactura) REFERENCES Pago(idPago)
    );
CREATE TABLE
    ProductoFactura(
        idFactura INT NOT NULL,
        idProducto INT NOT NULL,
        Cantidad INT NOT NULL,
        Precio INT NOT NULL,
        SubTotal INT NOT NULL,
        Descuento INT NOT NULL,
        Iva INT NOT NULL,
         FOREIGN KEY (idFactura) REFERENCES Factura(idFactura),
  FOREIGN KEY (idProducto) REFERENCES Producto(idProducto)
    );
CREATE TABLE
    ProductoDescuento (
        idDescuento INT NOT NULL,
        idProducto INT NOT NULL,
        fechaCreacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        fechaFinalizacion DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,
          FOREIGN KEY (idDescuento) REFERENCES Descuento(idDescuento),
  FOREIGN KEY (idProducto) REFERENCES Producto(idProducto)
    );