select
  name,
  count(*)
from
  api.users
group by
  1
having
  count(*) > 3;


  
select
  d.idarticulo,
  a.idarticulo,
  sum(d.precio_venta)
from
  dbsistema.detalle_venta d
  inner join dbsistema.articulo a on (d.idarticulo = a.idarticulo)
group by
  1,
  2,
  3
having
  sum(d.cantidad) < 10
order by
  sum(d.cantidad) desc