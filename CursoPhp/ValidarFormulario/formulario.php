<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Validar formulario</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<pre>
https://regex101.com/library/wB7xJ7
</pre>
	<form action="formulario.php" method="POST">
		<?php

            $nombre = "";
            $password = "";
            $email = "";
            $pais = "";
            $nivel = "";
            $lenguajes = array();
			
			if(isset($_POST['nombre'])){
				$nombre = $_POST['nombre'];
				$password = $_POST['password'];
                $email = $_POST['email'];
                $pais = $_POST['pais'];

                if(isset($_POST['nivel'])){
                    $nivel = $_POST['nivel'];
                }else{
                    $nivel = "";
                }

                if(isset($_POST['lenguajes'])){
					$lenguajes = $_POST['lenguajes'];
				}else{
					$lenguajes = [];
				}

                $campos = array();
                
                $numeros = preg_match('@[0-9]@',$nombre);

				if($nombre == ""){
					array_push($campos, "El campo Nombre no pude estar vacío");
                }elseif($numeros){
                    array_push($campos, "El campo no puede tener numeros");
                }

                $uppercase = preg_match('@[A-Z]@', $password);
                $lowercase = preg_match('@[a-z]@', $password);
                $number    = preg_match('@[0-9]@', $password);
                $caracter = preg_match('@[\+*?^$\.{}()|/]@',$password);
                
				if($password == ""){
					array_push($campos, "El campo Password no puede estar vacío, ni tener menos de 8 caracteres.");
				}elseif(!$uppercase){
                    array_push($campos, "Debe contener mayusculas");
                }elseif(!$lowercase){
                    array_push($campos, "Debe contener minusculas");
                }elseif(!$number){
                    array_push($campos, "Debe contener numeros");
                }elseif(!$caracter){
                    array_push($campos, "Debe contener caracteres especiales");
                }elseif(strlen($password) < 8){
                    array_push($campos, "Minimos 8 caracteres");
                }
                
                $correo = preg_match('@[.+\@.+\..+]@',$email);

				if($email == ""){
					array_push($campos, "Ingresa un correo electrónico válido.");
				}elseif(!$correo){
                    array_push($campos, "Correo invalido");
                }

                if($pais == ""){
                    array_push($campos, "Selecciona un pais");
                }

                if($nivel == ""){
                    array_push($campos, "Selecciona un nivel");
                }

                if($lenguajes == "" || count($lenguajes) < 2){
					array_push($campos, "Selecciona al menos dos lenguajes de programación.");
				}

				if(count($campos) > 0){
					echo "<div class='error'>";
					for($i = 0; $i < count($campos); $i++){
						echo "<li>".$campos[$i]."</i>";
					}
				}else{
					echo "<div class='correcto'>
							Datos correctos";
				}
				echo "</div>";
			}
		?>
		<p>
		Nombre:<br/>
		<input type="text" name="nombre" value="<?php echo $nombre?>">
		</p>

		<p>
		Password:<br/>
		<input type="password" name="password" autocomplete="off">
		</p>

		<p>
		correo electrónico:<br/>
		<input type="text" name="email" value="<?php echo $email?>">
		</p>

        <p>
        Pais de origen: <br>
            <select name="pais" id="">
                <option value="">Selecciona un pais</option>
                <option value="mx"<?php if($pais == "mx") echo "selected"?>>Mexico</option>
                <option value="eu"<?php if($pais == "eu") echo "selected"?>>Estados unidos</option>
                <option value="es"<?php if($pais == "es") echo "selected"?>>España</option>
                <option value="ar"<?php if($pais == "ar") echo "selected"?>>Argentina</option>
                <option value="ch"<?php if($pais == "ch") echo "selected"?>>China</option>
            </select>
        </p>

        <p>
        Nivel de desarrollo: <br>
            <input type="radio" name="nivel" value="Junior"<?php if($nivel == "Junior") echo "checked"?>>Junior
            <input type="radio" name="nivel" value="Intermedio"<?php if($nivel == "Intermedio") echo "checked"?>>Intermedio
            <input type="radio" name="nivel" value="Avanzado"<?php if($nivel == "Avanzado") echo "checked"?>>Avanzado
        </p>

        <p>
			Lenguajes de programación <br>	
			<input type="checkbox" name="lenguajes[]" value="php" <?php if(in_array("php", $lenguajes)) echo "checked"; ?>> PHP <br>
			<input type="checkbox" name="lenguajes[]" value="js" <?php if(in_array("js", $lenguajes)) echo "checked"; ?>> Javascript <br>
			<input type="checkbox" name="lenguajes[]" value="java" <?php if(in_array("java", $lenguajes)) echo "checked"; ?>> Java <br>
			<input type="checkbox" name="lenguajes[]" value="swift" <?php if(in_array("swift", $lenguajes)) echo "checked"; ?>> Swift <br>
			<input type="checkbox" name="lenguajes[]" value="py" <?php if(in_array("py", $lenguajes)) echo "checked"; ?>> Python <br>
		</p>

		<p><input type="submit" value="enviar datos"></p> 
	</form>
</body>
</html>