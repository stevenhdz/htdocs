

/* crear vista con code rapido */
create view id_dir as select * from dbsistema.detalle_venta;

select * from id_dir;
  
drop view id_dir;