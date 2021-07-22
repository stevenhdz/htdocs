select * from api.users where name = 'alex'; /* solo mostrara donde los registros contenga alex */
select * from api.users where id = 83;
select * from api.users where name = 'hola2';
select * from api.users where id > 85;
select distinct id from api.users where id < 87; /* Con la condicicion pero solo trae solo la columna del distinct */
select * from api.users where id <> 87; /* != diferente */
select * from api.users where name <> 'alex' and name <> 'hghghg';