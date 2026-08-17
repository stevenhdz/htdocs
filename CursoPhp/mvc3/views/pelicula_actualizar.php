<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$errores = '';
$frm_enviado = false;

if (isset($_POST['btn_enviar'])) {
    // recoger los valores enviados
    $id = $_POST['id'];
    $titulo = $_POST['titulo'];
    $genero = (isset($_POST['genero'])) ? implode(', ', $_POST['genero']) : '';
    $año = $_POST['año'];
    $disponible = (isset($_POST['disponible'])) ? 1 : 0;

    // validar el título
    if (!empty($titulo)) {
        $titulo = trim($titulo);
        $titulo = filter_var($titulo, FILTER_SANITIZE_STRING);
    } else {
        $errores .= 'Ingresar un título de la película<br/>';
    }

    // validar género, por lo menos elegir uno
    if ($genero == '') {
        $errores .= 'Elegir por lo menos un género<br/>';
    }


    // validar año
    if (!empty($año)) {
        $año = trim($año);
        $año = filter_var($año, FILTER_SANITIZE_NUMBER_INT);
        $actual = date('Y');
        if ($año < 1901 || $año > $actual) {
            $errores .= 'El año no es válido<br/>';
        }
    }
    else {
        $errores .= 'Debe digitar el año de creación de película<br/>';
    }

    // enviar/guardar si no hay errores
    if (!$errores) {
        require_once '../models/Pelicula.php';
        require_once '../controllers/PeliculaController.php';

        $pelicula = new Pelicula($id, $titulo, $genero, $año, $disponible);

        $PeliculaController = new PeliculaController();

        if (trim($id) == '') {
            $PeliculaController->agregar($pelicula);
        }
        else {
            $PeliculaController->modificar($pelicula);
        }

        
        header('location: peliculas_listar.php');

    }
}
else if (isset($_GET['id']) && !isset($_POST['btn_enviar'])) {
    $id = $_GET['id'];

    require_once '../controllers/PeliculaController.php';
    $PeliculaController = new PeliculaController();

    $pelicula = $PeliculaController->buscarPorId($id);

    $id = $pelicula->id;
    $titulo = $pelicula->titulo;
    $genero = $pelicula->genero;
    $año = $pelicula->año;
    $disponible = $pelicula->disponible;
}

require_once 'pelicula_vista_actualizar.php';

