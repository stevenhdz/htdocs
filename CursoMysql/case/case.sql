select
  *
from
  videotienda.pelicula;
select
  genero,
  case
    when genero = '' then "SIN CORREO"
    else "CON CORREO"
  end as Afir
from
  videotienda.pelicula;
  

select
  genero,
  case
    when genero is NULL then "SIN CORREO"
    else "CON CORREO"
  end as Afir
from
  videotienda.pelicula;


SELECT
  año,
  case
    when año <= 2017 then "vieja"
    when año between 2018
    and 2021 then "nuevo"
    else "nuevo"
  end as comentario
from
  videotienda.pelicula;