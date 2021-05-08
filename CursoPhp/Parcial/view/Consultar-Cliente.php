<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$documento_cliente = $_GET['documento_cliente'];

require_once '../control/ClienteControl.php';
$clienteControl = new ClienteControl();

$cliente = $clienteControl->buscarPorId($documento_cliente);

require_once 'Consultar_Vista.php';

?>