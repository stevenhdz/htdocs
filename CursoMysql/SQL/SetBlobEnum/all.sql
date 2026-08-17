/* ENUM */

create database SetBlobEnum;

use SetBlobEnum;

create table postulantes( 
    numero int unsigned auto_increment primary key, 
    documento char(8), 
    nombre varchar(30), 
    estudios enum('ninguno','primario','secundario', 'terciario','universitario')
);

select * from postulantes;

/* del 1 al 5 segun el enum */
insert into postulantes (documento,nombre,estudios) values('22255265','Juana Pereyra',5);

select * from postulantes where estudios=5;

select * from postulantes where estudios='universitario';

/* SET */

create table postulantes2(
     numero int unsigned auto_increment primary key, 
     documento char(8), 
     nombre varchar(30), 
     idioma set('ingles','italiano','portuges')
);

select * from postulantes2;

insert into postulantes2 (documento,nombre,idioma) values('22555444','Ana Acosta','ingles');

insert into postulantes2 (documento,nombre,idioma) values('23555444','Juana Pereyra','ingles,italiano');

insert into postulantes2 (documento,nombre,idioma) values('23555444','Juana Pereyra','italiano,ingles');

insert into postulantes2 (documento,nombre,idioma) values('23555444','Juana Pereyra','italiano,ingles,italiano');

/* 1='ingles', 2='italiano', 3='ingles,italiano', 4='portugues', 5='ingles,portugues', 6='italiano,portugues', 7='ingles,italiano,portugues'. */
insert into postulantes2 (documento,nombre,idioma) values('22255265','Juana Pereyra',2); 

insert into postulantes2 (documento,nombre,idioma) values('22555888','Juana Pereyra',3);

select * from postulantes2 where idioma like '%ingles%'; 

select * from postulantes2 where find_in_set('ingles',idioma)>0;

select * from postulantes2 where idioma like '%ingles,italiano%';

select * from postulantes2 where idioma='ingles';

select * from postulantes2 where idioma=1;

select * from postulantes2 where idioma='ingles,italiano'; 

select * from postulantes2 where idioma=3;

select * from postulantes2 where idioma not like '%ingles%'; 

select * from postulantes2 where not find_in_set('ingles',idioma)>0;

/*  BLOB  */

create table peliculas (
    codigo int unsigned auto_increment primary key, nombre varchar(40), 
    actor varchar(30), 
    duracion tinyint unsigned, 
    sinopsis text
);

insert into peliculas values(1,'Mentes que brillan','Jodie Foster',120, 'El no entiende al mundo ni el mundo lo entiende a él; es un niño superdotado. La escuela especial a la que asiste tampoco resuelve los problemas del niño. Su madre hará todo lo que esté a su alcance para ayudarlo. Drama');

SELECT * from peliculas;

select * from peliculas where sinopsis like '%Drama%';