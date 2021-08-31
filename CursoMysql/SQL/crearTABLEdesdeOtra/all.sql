CREATE DATABASE createinsert ;

USE createinsert;

CREATE TABLE area (
  CodArea varchar(5) NOT NULL,
  Descripcion varchar(25) NOT NULL,
  PRIMARY KEY (CodArea)
);

INSERT INTO area VALUES ('001','Matematicas'),('002','Informatica'),('003','Ciencias Naturales'),('004','Sociales'),('005','Humanidades');


CREATE TABLE ejemplar (
  id varchar(10) NOT NULL,
  Nombre varchar(40) NOT NULL,
  CodArea varchar(5) NOT NULL,
  valor float NOT NULL,
  NroPag int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY CodArea (CodArea),
  CONSTRAINT ejemplar_ibfk_1 FOREIGN KEY (CodArea) REFERENCES area (CodArea) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO ejemplar VALUES ('1','Calculo 1','001',80000,42),('2','Matematicas Avanzadas','001',90000,80),('3','Introducción al Pc','002',120000,240),('4','Redes y Telematica','002',65000,58),('5','Goegrafia Colombiana','004',40000,82),('6','Ciencias Sexto','003',60800,46),('7','Etica y Valores','005',150000,100);


CREATE TABLE primer_ejercicio (
  id varchar(10) NOT NULL,
  Nombre varchar(40) NOT NULL,
  DetalleArea varchar(30) NOT NULL,
  Valor float NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO primer_ejercicio VALUES ('1','Calculo 1','Matematicas',80000),('2','Matematicas Avanzada','Matematicas',90000),('3','Introduccion al Pc','Informatica',120000),('4','Redes y Telematica','Informatica',65000),('5','Geografia Colombiana','Sociales',60000),('6','Ciencias sextos','Ciencias Naturales',60000),('7','Etica y valores','Humanidades',150000);


show tables;

/*crear detalle are a raiz de primer_ejercicio*/
select * from primer_ejercicio;
select DetalleArea from primer_ejercicio;
select distinct DetalleArea from primer_ejercicio;
Create table ejemplararea select distinct DetalleArea as nombre from primer_ejercicio;
select * from ejemplararea;




select  DetalleArea as nombre, count(*) as cantidad from primer_ejercicio group by DetalleArea;
create table cantidadejemplares
    select  DetalleArea as nombre, count(*) as cantidad
    from primer_ejercicio
    group by DetalleArea;
select * from cantidadejemplares;





select detalleArea, sum(valor) 'Valor Total' from primer_ejercicio group by detalleArea;
create table valortotal
select detalleArea, sum(valor) 'Valor Total' from primer_ejercicio group by detalleArea;
select * from valortotal;





show databases;

SELECT COUNT(*) from Information_Schema.Tables where TABLE_TYPE = 'BASE TABLE' and table_schema = 'api';

select * from Information_Schema.Tables;





select * from ejemplar;
select * from area;


select a.descripcion,count(*) 
    from ejemplar as e
    join area as a
    on e.CodArea=a.CodArea
    group by a.descripcion;



create table numerodeejemplaresporarea
    select a.descripcion,count(*) as cantidad
    from ejemplar as e
    join area as a
    on e.CodArea=a.CodArea
    group by a.descripcion;
select * from numerodeejemplaresporarea;
show tables;





insert into ejemplar(id,nombre,CodArea,valor,nropag)
    select '9','BD II',CodArea,45000,120
    from area
    where descripcion='informatica';
select * from ejemplar;
select * from area;




/*tabla customers y tabla orders en el delete va la tabla */
DELETE area FROM area
INNER JOIN ejemplar ON area.CodArea = ejemplar.CodArea
WHERE area.CodArea='002';