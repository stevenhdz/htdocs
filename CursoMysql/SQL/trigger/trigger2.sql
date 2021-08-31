create database pruebaTrigger;

  USE pruebaTrigger;

create table productos(
    codigo varchar(12) primary key,
    nombre varchar(30),
    porgana int(2),
    Costo int,
    valorventa int,
    cantidad int
);

INSERT INTO productos values('1','arroz',15,1800,0,45);


select * from productos;


DELIMITER $$
create trigger insertCalculateValorventa before
insert
	on
	productos 
 FOR EACH ROW begin
set
	new.valorventa = new.costo + new.costo * new.porgana / 100;
END $$
DELIMITER ;

delete from productos;






select * from productos;

DELIMITER $$
create trigger updateCalculateValorVenta before
update
	on
	productos 
 FOR EACH ROW begin
set
	new.valorventa = new.costo + new.costo * old.porgana / 100;
END $$
DELIMITER ;

update productos set costo=5000 where codigo='1';
