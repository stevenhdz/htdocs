<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="404/estilos.css">
    <style>
    </style>
</head>
<body>
    <h1>Error</h1>
    <h3>No se pueden enviar los datos vacios:  <?php echo  "<br>"  ."Nombre: ". $_GET['Nombre']. "<br>" . "Correo: ". $_GET['Correo']. "<br>" . "Salario: ". $_GET['Salario'].  "<br>" . "fechaDeIngreso: ". $_GET['fechaDeIngreso'];?></h3>
    <div>
        <a href="http://localhost:80/CursoPhp/WEB2/retos/reto3/index.php" class='btn'>Regresar a la página de inicio</a>
    </div>
    
</body>
</html>