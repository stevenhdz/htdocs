<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);


$errores = '';
$frm_enviado = false;

if (isset($_POST['btn_enviar'])) {
    // recoger los valores enviados
    
    $documento_cliente = $_POST['documento_cliente'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $cod_sexo = $_POST['cod_sexo'];

    // validar el documento del cliente

    if (!empty($documento_cliente)) {
        $documento_cliente = trim($documento_cliente);
        $documento_cliente = filter_var($documento_cliente, FILTER_SANITIZE_STRING);
    } else {
        $errores .= 'Ingresar un número de documento del cliente<br/>';
    }
    

    // validar el nombre
    if (!empty($nombre)) {
        $nombre = trim($nombre);
        $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
    } else {
        $errores .= 'Ingresar un nombre del cliente<br/>';
    }

    // validar el email
    if (!empty($email)) {
        $email = trim($email);
        $email = filter_var($email, FILTER_SANITIZE_STRING);
    } else {
        $errores .= 'Ingresar el correo del cliente<br/>';
    }

    // validar el teléfono
    if (!empty($telefono)) {
        $telefono = trim($telefono);
        $telefono = filter_var($telefono, FILTER_SANITIZE_STRING);
    } else {
        $errores .= 'Ingresar un teléfono del cliente<br/>';
    }
    // validar el cod_sexo
    if (!empty($cod_sexo)) {
        $cod_sexo = trim($cod_sexo);
        $cod_sexo = filter_var($cod_sexo, FILTER_SANITIZE_STRING);
    } else {
        $errores .= 'Ingresar el código de sexo del cliente<br/>';
    }

    // enviar/guardar si no hay errores
    if (!$errores) {
        require_once '../model/Cliente.php';
        require_once '../control/ClienteControl.php';

        $cliente = new Cliente($documento_cliente,$nombre, $email, $telefono, $cod_sexo);

        $clienteControl = new ClienteControl();
                
        $clienteControl->agregar($cliente);
   
        header('location: Listar_Clientes.php');
    }
}
else if (isset($_GET['documento_cliente']) && !isset($_POST['btn_enviar'])) {
    $documento_cliente = $_GET['documento_cliente'];

    require_once '../control/ClienteControl.php';
    $clienteControl = new ClienteControl();

    $cliente = $clienteControl->buscarPorId($documento_cliente);

    $documento_cliente = $cliente->documento_cliente;
    $nombre = $cliente->nombre;
    $email = $cliente->email;
    $telefono = $cliente->telefono;
    $cod_sexo = $cliente->cod_sexo;
}

require_once 'Crear-Cliente_Vista.php';

