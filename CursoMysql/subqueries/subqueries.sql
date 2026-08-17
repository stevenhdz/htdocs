SELECT
  genero
FROM
  videotienda.pelicula
where
  genero like 'a%'
  or genero like 'n%'
  and genero in (
    select
      genero
    from
      videotienda.pelicula
    where
      año in (
        select
          año
        from
          videotienda.pelicula
        where
          año = 2012
      )
  )