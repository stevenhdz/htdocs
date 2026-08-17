select * from api.users;

/*agregar columna*/
alter table api.users add column date datetime;


select * from api.users;

/*eliminar columna*/
alter table api.users drop column date;
