<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Funciones</title>
	<style>
		body{background-color: #5492D1; font-family: Arial;}
		#container{background: white; padding: 10px; width: 400px; margin: 150px auto;}
		.error{color: red;}
	</style>
</head>
<body>
	<div id="container">
            <pre>
                basado en funciones.
            </pre>
		<form action="" method="POST">
            <p>Operaciones matematicas:</p>
			<input type="text" name="numero01">
			<input type="text" name="numero02">
			<input type="submit" value="Calcular">
		</form>

		<?php
			include("operaciones.php");
			validarCampos();
		?>
	</div>
</body>
</html>