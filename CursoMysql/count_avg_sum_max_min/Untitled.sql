select sum(valortotal) as total from dbsistema.soporte;
select idventa + idarticulo + iddetalle_venta  from dbsistema.detalle_venta;
select count(*) from dbsistema.detalle_venta;
select count(descuento) from dbsistema.detalle_venta; 
select avg(idsoporte) from dbsistema.soporte; /* saca la media */
select max(valortotal) from dbsistema.soporte;
select min(valortotal) from dbsistema.soporte;