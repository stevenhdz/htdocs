<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Include y require</title>
	<style>
		#container{width: 500px; margin: 150px auto;}
		#footer{background-color: #222; padding: 10px; color: white;}
		#menu{background-color: #eee; padding: 10px;}
	</style>
</head>
<body>
	<div id="container">
    <h3>
    <pre>
    incluir ():

        Esta función se utiliza para incluir un archivo en una página PHP. 
        Si la función include () no puede encontrar un archivo específico 
        en la ubicación en ese momento, lanzará un mensaje de advertencia, 
        sin embargo, no detendrá la ejecución del script.
   
    exigir():

        Esta función se utiliza para agregar un archivo en una página PHP. 
        En el caso de la función require (), si no puede localizar un archivo 
        específico en ese momento, generará un error fatal y detendrá la 
        ejecución del contenido.
    </pre>
    </h3>
		<?php
        error_reporting(E_ALL);
        ini_set('display_errors', '1');
            require("menu.php"); 
           /*  include("menus.php"); */ 
		?>
	<h3>Contenido Principal</h3>

		<?php
			include("footer.php");
		?>
	</div>
</body>
</html>