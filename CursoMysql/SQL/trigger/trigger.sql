use subconsultas;

DELIMITER $$
create trigger valorventa after
insert
	on
	articulo 
 FOR EACH ROW begin
update
	detalle
set
	valorventa =(
	select
		valorunitario + (valorunitario * 0.23)
	from
		articulo
	where
		articulo.codigo = detalle.codigo);
 END $$ 
DELIMITER ;

insert into articulo values('480','Secador',10,250000,0);



DELIMITER $$
create trigger actualizar_existenciap after
insert
	on
	detalle 
 FOR EACH ROW begin
update
	articulo
set
	existencia = cantidad - (
	select
		sum(cantidad)
	from
		detalle
	where
		articulo.codigo = detalle.codigo);
 END $$ 
DELIMITER ;

INSERT INTO detalle VALUES (13,'1200','2010-01-30',3,56,56,'150');


show triggers;