select * from api.users where id between 80 and 86; /* donde el id este entre 80 a 86 */
select * from api.users where (id between 80 and 86) and name = 'hola2';
select * from api.users where id not between 80 and 86; 