<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*
require '/Applications/MAMP/htdocs/CursoMongo/vendor/autoload.php';
try {
	$client = new MongoDB\Client("mongodb://127.0.0.1:27017/"); 
	$collection = $client->mongophp->details;
	$return = $collection->find()->toArray();
	if(isset($return)){
		foreach ($return as $key) {
			print_r(json_encode($key));
		}
	}
} catch (Exception $th) {
	$return = ['result' => 'error', 'error' => $th];
}
return json_encode($return, true); 
*/



require_once 'encapsulamiento.php';

$usuario = new Usuario('Steven','Steven@gmail.com','ADMIN');

echo $usuario->nombre."<br>";
echo $usuario->getemail()."<br>";
echo Usuario::$estado."<br>";
echo Usuario::$numero."<br>";


?>