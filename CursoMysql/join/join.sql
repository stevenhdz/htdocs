
select
  f.idarticulo,
  l.idarticulo,
  f.precio_venta
from
  dbsistema.detalle_venta f
  inner join dbsistema.articulo l on (f.idarticulo = l.idarticulo);
  /* consulta uniendo las dos tablas donde el id sea = ademas de solo mostrar unas columnas */

select
  a.idusuario,
  o.idusuario,
  a.direccion as dir
from
  dbsistema.usuario a
  inner join dbsistema.usuario_permiso o on (a.idusuario = o.idusuario);
  /* as para asignar otra variable o nombre */

select
  d.idusuario,
  s.idusuario
from
  dbsistema.usuario d
  right join dbsistema.usuario_permiso s on (d.idusuario = s.idusuario);
  /* ambas variables deben existir en ambas tablas */

select
  d.idusuario,
  s.idusuario
from
  dbsistema.usuario d
  left join dbsistema.usuario_permiso s on (d.idusuario = s.idusuario);
  /* ambas variables deben existir en ambas tablas */