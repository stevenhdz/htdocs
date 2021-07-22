select * from api.users where name like 'A%' and email like 'p%'; /* registros donde el name empiece por A y email con p */
select * from api.users where name like '%A'; /* contrario de la anterior */
select * from api.users where name like '%A%'; /* cdonde contenga la letra a en el name */
select * from api.users where name like 'A%X'; /* que empiecen con a y terminen en x */