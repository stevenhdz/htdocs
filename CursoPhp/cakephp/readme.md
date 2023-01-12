php composer.phar create-project --prefer-dist cakephp/app cms
cd cms
php cake.php server


app_local se conecta la base de datos

creando migracion con sus campos
php cake.php bake migration CreateLibros nombre:string imagen:string created modified

migrar a la base de datos
php cake.php migrations migrate


template / crud vistas
php cake.php bake all libros

controllers logica

Model informacion de tablas y campos