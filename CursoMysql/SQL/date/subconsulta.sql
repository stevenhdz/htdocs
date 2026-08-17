create database subconsulta;
use subconsulta;

CREATE TABLE articulo (
  codigo char(10) NOT NULL,
  articulo char(40) NOT NULL,
  cantidad int(11) NOT NULL,
  valorunitario int(11) NOT NULL,
  existencia int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
ALTER TABLE articulo ADD PRIMARY KEY (codigo);

INSERT INTO articulo VALUES ('150','nevera',25,950000,0),('200','televisor',11,1200000,0),('250','estufa',30,750000,0),('300','ventilador',17,110000,0),('350','lavadora',13,980000,0);



CREATE TABLE detalle (
  id int(11) NOT NULL auto_increment,
  nrofactura char(10) NOT NULL,
  fecha date NOT NULL,
  cantidad int(11) NOT NULL,
  valorventa int(11) NOT NULL,
  total int(11) NOT NULL,
  codigo char(10) NOT NULL,
  PRIMARY KEY  (id)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

INSERT INTO detalle VALUES (1,'1200','2010-01-30',3,0,0,'150'),(2,'1250','2010-02-13',5,0,0,'150'),(3,'1250','2010-02-13',7,0,0,'250'),(4,'1300','2010-03-02',1,0,0,'350'),(5,'1300','2010-03-02',2,0,0,'300'),(6,'1400','2010-03-11',3,0,0,'200'),(7,'1500','2010-03-21',5,0,0,'250');


show tables;
select * from articulo;
select * from detalle;
update detalle set valorventa = (select valorunitario + (valorunitario * 0.23) from articulo where articulo.codigo = detalle.codigo);
update detalle set total = cantidad * valorventa;
update articulo set existencia = cantidad - (select sum(cantidad) from detalle where detalle.codigo = articulo.codigo);
delete from articulo where codigo = (select codigo from detalle where cantidad between 2 and 5 and detalle.codigo = articulo.codigo group by articulo.codigo);
create table copia like detalle;
describe copia;
insert into copia select * from detalle where  month(fecha)=2;
select * from copia;



CREATE TABLE ejercicio (
  codigo char(10) NOT NULL,
  nombre char(30) DEFAULT NULL,
  sexo char(10) DEFAULT NULL,
  nacimiento date DEFAULT NULL,
  hijos char(2) DEFAULT NULL,
  PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO ejercicio VALUES ('0022559966','Eder Pulgar','Hombre','1960-02-20','6'),('0028957446','Juan Carlos Serpa','Hombre','1982-11-25','2'),('0822559966','Mariana Gonzalez','Mujer','1982-03-24','1'),('1188996633','Yoreida Maria','Mujer','1978-03-05','2'),('22663355','Angel Cuadrado','hombre','1966-05-13','0'),('4488663322','Jorge Fuentes','Hombre','1980-06-22','2'),('556959966','Angela Ruiz','Mujer','1977-11-15','1'),('9999957446','Carlota Sonora','Mujer','1985-11-03','4');


select current_date();
select year (current_date());
select month(current_date());
select day(current_date());
select date_add(current_date(),interval 6 year);
select date_format(now(),'%h:%i:%s %p');
select datediff(current_date(),'1997-05-15');
select nombre, year(current_date()) - year(nacimiento) from ejercicio;
select nombre, year(current_date()) - year(nacimiento) 'edad' from ejercicio;
select nombre from ejercicio where sexo='mujer' and nombre like '%a';
select count(*) from ejercicio where sexo='mujer' and nombre like '%a';
select count(*) from ejercicio where year(nacimiento) between '1960'and 1969;
select * from ejercicio where year(current_date()) - year(nacimiento) between '34' and '37';
select sum(hijos) from ejercicio;
select hijos,count(*) from ejercicio group by hijos;
select count(*) from ejercicio where year(current_date)-year(nacimiento)<=37 and sexo='mujer';

