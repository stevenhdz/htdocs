<?php
include "config.php";
include "utils.php";

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}



$dbConn =  connect($db);

/*
  listar todos los soporte o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['idsoporte']))
    {
      //Mostrar un post
      $sql = $dbConn->prepare("SELECT * FROM soporte where idsoporte=:idsoporte");
      $sql->bindValue(':idsoporte', $_GET['idsoporte']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
    else {
      //Mostrar lista de post
      $sql = $dbConn->prepare("SELECT * FROM soporte");
      $sql->execute();
      $sql->setFetchMode(PDO::FETCH_ASSOC);
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll()  );
      exit();
	}
}

// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $input = $_POST;
    $sql = "INSERT INTO soporte
    (nombres, apellidos, fechaentrada, direccion, cantidadequipos, valortotal, identificador,respuesta,telefono,tipopago,descripcion,valorunidad,adjuntar,correo)
    VALUES
    (:nombres,:apellidos,:fechaentrada,:direccion,:cantidadequipos,:valortotal,:identificador,:respuesta,:telefono,:tipopago,:descripcion,:valorunidad,:adjuntar,:correo)";
    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);
    $statement->execute();
    $postId = $dbConn->lastInsertId();
    if($postId)
    {
      $input['idsoporte'] = $postId;
      header("HTTP/1.1 202 Aceptado");
      echo json_encode($input);
      exit();
	 }
}

//Borrar
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
	$idsoporte = $_GET['idsoporte'];
  $statement = $dbConn->prepare("DELETE FROM soporte where idsoporte=:idsoporte");
  $statement->bindValue(':idsoporte', $idsoporte);
  $statement->execute();
	header("HTTP/1.1 200 OK");
	exit();
}

//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $input = $_GET;
    $postId = $input['idsoporte'];
    $fields = getParams($input);

    $sql = "
          UPDATE soporte
          SET $fields
          WHERE idsoporte='$postId'
           ";

    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);

    $statement->execute();
    header("HTTP/1.1 200 OK");
    exit();
}


//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>



