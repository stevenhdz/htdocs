
<?php

require_once "../modelos/Soporte.php";

$soporte=new Soporte();

$idsoporte=isset($_POST["idsoporte"])? limpiarCadena($_POST["idsoporte"]):"";
$nombres=isset($_POST["nombres"])? limpiarCadena($_POST["nombres"]):"";
$apellidos=isset($_POST["apellidos"])? limpiarCadena($_POST["apellidos"]):"";
$fechaentrada=isset($_POST["fechaentrada"])? limpiarCadena($_POST["fechaentrada"]):"";
$direccion=isset($_POST["direccion"])? limpiarCadena($_POST["direccion"]):"";
$cantidadequipos=isset($_POST["cantidadequipos"])? limpiarCadena($_POST["cantidadequipos"]):"";
$valortotal=isset($_POST["valortotal"])? limpiarCadena($_POST["valortotal"]):"";
$identificador=isset($_POST["identificador"])? limpiarCadena($_POST["identificador"]):"";
$correo=isset($_POST["correo"])? limpiarCadena($_POST["correo"]):"";
$respuesta=isset($_POST["respuesta"])? limpiarCadena($_POST["respuesta"]):"";
$telefono=isset($_POST["telefono"])? limpiarCadena($_POST["telefono"]):"";
$tipopago=isset($_POST["tipopago"])? limpiarCadena($_POST["tipopago"]):"";
$descripcion=isset($_POST["descripcion"])? limpiarCadena($_POST["descripcion"]):"";
$valorunidad=isset($_POST["valorunidad"])? limpiarCadena($_POST["valorunidad"]):"";
$adjuntar=isset($_POST["adjuntar"])? limpiarCadena($_POST["adjuntar"]):"";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    
<form action="mail.php" method="POST">
    <h2>Contacto</h2>
    <p>Nombre: <br>
    <input type="text" name="name" required value="<?php $nombres?>"></p>
    <p>Correo electrónico: <br>
    <input type="email" name="email" required></p>
    <p>Comentario: <br>
    <script src="https://cdn.ckeditor.com/4.15.1/standard/ckeditor.js"></script>
    <textarea name="comment" required></textarea>
        <script>
           CKEDITOR.replace( 'comment' );
        </script>
    <p class="center"><input type="submit" value="Enviar correo"></p>
</form>
    
</body>
<script type="text/javascript" src="scripts/soporte.js"></script>
</html>