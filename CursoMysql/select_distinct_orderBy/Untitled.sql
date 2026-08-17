select * from api.users; /* seleccionar todo */
select name, email from api.users; /* seleccionar ciertos campos */
select name, email as mail from api.users; /* renombrar campos */

select distinct (name) from api.users; /* arroja todo lo distinto */
select * from api.users order by name asc;  /* DESC  ordenar de forma asc o desc */
