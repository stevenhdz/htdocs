create database TiendaPelicula;
drop database TiendaPelicula;
use TiendaPelicula;
create table cliente(
  CED_CLIEN varchar(10) PRIMARY KEY,
  DIR_CLIENTE varchar(10),
  NOM_CLIENTE varchar(10),
  TELEF_CLIENTE varchar(10)
);


INSERT INTO cliente 
(CED_CLIEN,
DIR_CLIENTE,
NOM_CLIENTE,
TELEF_CLIENTE) 
VALUES 
("1017247467","calle 116","steven","3030300330");


create table referenciaCliente(
  CEDR_CLIE varchar(10) PRIMARY KEY,
  TELER_P varchar(10),
  NOMR_PERS varchar(10)
);


INSERT INTO referenciaCliente 
(CEDR_CLIE,
TELER_P,
NOMR_PERS) 
VALUES 
("10172","34343434","alex");

CREATE TABLE prestamo(
  VALOR_P varchar(10),
  FECHA_P varchar(10),
  CONTROL_P varchar(10) PRIMARY KEY,
  DIAS_P varchar(10),
  FECHA_V varchar(10),
  CED_CLIEN varchar(10),
  CEDR_CLIE varchar(10),
  CANT_PEL varchar(10),
  FOREIGN KEY (CED_CLIEN) REFERENCES cliente(CED_CLIEN),
   FOREIGN KEY (CEDR_CLIE) REFERENCES referenciaCliente(CEDR_CLIE)
);
/*control_p*/
INSERT INTO prestamo 
(VALOR_P,
FECHA_P,
CONTROL_P, 
DIAS_P, 
FECHA_V, 
CED_CLIEN, 
CEDR_CLIE, 
CANT_PEL ) 
VALUES 
("1000","2020-23-34","1","2","2021-23-34","1017247467","10172","34");

create table genero(
    COD_GEN varchar(10) PRIMARY KEY,
    NOM_GEN varchar(10)
);

INSERT INTO genero 
(COD_GEN, GENER_PELI) 
VALUES 
("1","terror");

create table protagonista(
    COD_PRO varchar(10) PRIMARY KEY,
    NOM_PROT varchar(10)
);

INSERT INTO protagonista 
(COD_PRO, NOM_PROT) 
VALUES 
("1","Johnconnor");

create table pelicula(
  COD_PELICULA varchar(10) PRIMARY KEY,
  GENER_PELI varchar(10),
  DUR_PELI varchar(10),
  FORM_PELI varchar(10),
  TITU_PELI varchar(10),
  CANT_PEL varchar(10),
  COD_PRO varchar(10),
  FOREIGN KEY (GENER_PELI) REFERENCES genero(GENER_PELI),
  FOREIGN KEY (COD_PRO) REFERENCES protagonista(COD_PRO)
);

INSERT INTO pelicula 
(COD_PELICULA,
DUR_PELI,
FORM_PELI,
TITU_PELI,
CANT_PEL,
GENER_PELI
COD_PRO) 
VALUES 
("1","160min","4k","AMERICA","1","terror","1");

create table devolucion(
  CONTROL_D varchar(10) PRIMARY KEY,
  CONTROL_P varchar(10),
  MULTA_C varchar(10),
  DIAS_R varchar(10),
  TOTAL_M varchar(10),
  FECHA_ENT varchar(10),
   FOREIGN KEY (CONTROL_P) REFERENCES prestamo(CONTROL_P)
);

INSERT INTO devolucion 
(CONTROL_D,
CONTROL_P,
MULTA_C,
DIAS_R,
TOTAL_M,
FECHA_ENT) 
VALUES 
("0","1","0","0","1000","2021-23-23");

create table prestamoPelicula(
  COD_PRE_PELI varchar(10) PRIMARY KEY,
  CONTROL_P varchar(10),
  COD_PELICULA varchar(10),
  FOREIGN KEY (CONTROL_P) REFERENCES prestamo(CONTROL_P),
  FOREIGN KEY (COD_PELICULA) REFERENCES pelicula(COD_PELICULA)
);

INSERT INTO prestamoPelicula 
(COD_PRE_PELI,
CONTROL_P,
COD_PELICULA) 
VALUES 
("1","1","1");



