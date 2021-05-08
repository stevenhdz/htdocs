<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$documento_cliente = $_GET['documento_cliente'];

require_once '../control/ClienteControl.php';
$clienteControl = new ClienteControl();

$clienteControl->eliminar($documento_cliente);

require_once 'Listar_Clientes.php';
