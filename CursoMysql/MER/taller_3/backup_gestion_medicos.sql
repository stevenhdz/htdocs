
CREATE DATABASE GESTION_MEDICOS;
USE GESTION_MEDICOS;
CREATE TABLE RAZA(
  Codr INT AUTO_INCREMENT PRIMARY KEY,
  Descripcion VARCHAR(250) NOT NULL
);
CREATE TABLE TITULO(
  idTitulo INT AUTO_INCREMENT PRIMARY KEY,
  Descripcion VARCHAR(50) NOT NULL
);
CREATE TABLE ANIMAL(
  Coda INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(150) NOT NULL,
  Fecha_nac DATETIME NOT NULL,
  Codr INT NOT NULL,
  FOREIGN KEY (Codr) REFERENCES Raza(Codr)
);
CREATE TABLE MEDICO(
  Cedm INT AUTO_INCREMENT PRIMARY KEY,
  Nom1 VARCHAR(50) NOT NULL,
  Nom2 VARCHAR(50) NOT NULL,
  Apellido1 VARCHAR(50) NOT NULL,
  Apellido2 VARCHAR(50) NOT NULL,
  Tel VARCHAR(30) NOT NULL,
  Celular VARCHAR(30) NOT NULL,
  Email VARCHAR(50) NOT NULL
);
CREATE TABLE ESTUDIO(
  idEstudios INT AUTO_INCREMENT PRIMARY KEY,
  FechaDeGraduacion DATETIME NOT NULL,
  Idtitulo INT NOT NULL,
  idMedico INT NOT NULL,
  FOREIGN KEY (Idtitulo) REFERENCES TITULO(idTitulo),
  FOREIGN KEY (idMedico) REFERENCES MEDICO(Cedm)
);
CREATE TABLE CITA(
  Numc INT AUTO_INCREMENT PRIMARY KEY,
  Fecha DATETIME NOT NULL,
  Coda INT NOT NULL,
  Cedm INT NOT NULL,
  FOREIGN KEY (Coda) REFERENCES ANIMAL(Coda),
  FOREIGN KEY (Cedm) REFERENCES MEDICO(Cedm)
);