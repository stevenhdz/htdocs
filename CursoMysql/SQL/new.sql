

create database bdhospital2;
go;
use bdhospital2;
go;


create table paciente (
    CedulaPaciente varchar(10) not null primary key,
    NombresPaciente varchar(20) not null,
    ApellidosPaciente varchar(20) not null,
    TelefonoPaciente varchar(15) not null,
    EdadPaciente varchar(3) not null,
    SexoPaciente varchar(3) not null,
    CiudadPaciente varchar(20) not null,
    historialPaciente varchar(200) not null
);

go;


select * from paciente;


create table medico (
    CedulaMedico varchar(10) not null primary key,
    NombresMedico varchar(20) not null,
    ApellidosMedico varchar(20) not null,
    TelefonoMedico varchar(15) not null,
    EdadMedico varchar(3) not null,
    SexoMedico varchar(3) not null,
    CiudadMedico varchar(20) not null,
    historialMedico varchar(200) not null
);

go;

create table Triage (
  CedulaPaciente varchar(10) not null,
  CedulaMedico varchar(10) not null,
  descripcion varchar(200) not null,
  prioridad int(1) not null,
  ingreso datetime not null
);



go;

create table RevisionMedico(
  CedulaPaciente varchar(10) not null,
  CedulaMedico varchar(10) not null,
  descripcionMedico varchar(200) not null,
  salida DATETIME not null
);


go;

create table ResultadosPacientes (
  remitido bool not null,
  CedulaPaciente varchar(10) not null,
  descripcion varchar(200) not null,
  idPlanta VARCHAR(10) not null,
  habitacion BIGINT not null,
  ingreso DATETIME not null
);


go;

create table plantas (
  nombrePlanta varchar(10) PRIMARY KEY,
  remitido bool NOT NULL,
  direccionPlanta varchar(50) not null,
  tipoPlantas varchar(50) not null
);



go;

create table PazSalvo (
  CedulaPaciente varchar(10) not null,
  recomendacion varchar(200) not null,
  salida datetime not null
  
);



go;




alter table Escuelas add foreign key (idFacultades) references Facultades(idFacultades);