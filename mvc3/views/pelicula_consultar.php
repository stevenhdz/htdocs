<?php

$id = $_GET['id'];

require_once '../controllers/PeliculaController.php';
$peliculaControl = new PeliculaController();

$pelicula = $peliculaControl->buscarPorId($id);

require_once 'pelicula_vista_consultar.php';