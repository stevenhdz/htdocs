<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Formulario</h3>
    <form action="procesar.php" method="POST">
        <label for="correo">Correo: <input type="text" name="correo" id="correo"></label><br>
        <label for="clave">Clave: <input type="password" name="clave" id="clave"></label><br>
        <input type="submit" value="enviar" name="enviar">
    </form>
</body>
</html>