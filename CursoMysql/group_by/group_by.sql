select nombres from dbsistema.soporte group by nombres;
select nombres, count(*) from dbsistema.soporte group by nombres; /* cantidad en que se repite el nombre */
select * from dbsistema.detalle_venta  d inner join dbsistema.articulo a on (d.idarticulo = a.idarticulo)

