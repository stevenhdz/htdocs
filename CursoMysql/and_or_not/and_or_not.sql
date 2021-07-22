select * from api.users where name = 'alex' and id = 84;
select * from api.users where name = 'alex' or id = 84; /* uno o el otro */
select * from api.users where id = 84 or name = 'alex'; 
select * from api.users where not name = 'alex';  /* trae todo excepto alex */
select distinct (name) from api.users where not name = 'alex'; 