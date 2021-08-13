select * from api.users;

select name, char_length(name) as longitud from api.users;

select * from dbsistema.soporte;

select *, concat(nombres," ",apellidos) as "nombre completo" from dbsistema.soporte;

select *, round(valortotal,0) from dbsistema.soporte;

select * from api.users;

/* mayusculas*/
select *, ucase(concat(name," ",email)) as "nombress completo" from api.users;

/* minusculas*/
select *, lcase(concat(name," ",email)) as "nombress completo" from api.users;


select 
group_concat(nombres,apellidos) as "toalkasdnasbd", 
sum(valortotal) as total, 
sum(cantidadequipos) as cantidad 
from dbsistema.soporte;