
use biblioteca;

select * from productos;

DELIMITER $$
create trigger calvalorventa2 before
update
	on
	productos 
 FOR EACH ROW begin
set
	new.valorventa = new.costo + new.costo * old.porgana / 100;
END $$
DELIMITER ;

update productos set costo=5000 where codigo='1';







select CONCAT(nombres, ' ' ,apellidos) as "nombresCompletos", UPPER(nombres) as Mayuscula from Persona;




select  nombres as nombresCompletos, count(*) as cantidad from Persona group by nombres;



create table mismoNombre
    select  nombres as nombresCompletos, count(*) as cantidad
    from Persona
    group by nombres;
   
select * from mismoNombre;




select nombres from Persona where genero='masculino' and nombres like '%r';




CREATE DEFINER = 'admin' @'localhost' PROCEDURE consultNombres1(nombres1 VARCHAR(75))
SQL SECURITY INVOKER 
BEGIN 
	SELECT * FROM Persona WHERE nombres = nombres1;
END 

call consultNombres1('Alexander')


