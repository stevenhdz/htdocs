select * from api.users where name in( 'alex', 'hola2');
select * from api.users where name in ( 'alex', 'hola2') and id in (84,83) and length > 50;
select * from api.users where name not in ('alex','hola2');