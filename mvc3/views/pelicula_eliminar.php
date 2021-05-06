<?php

$id = $_GET['id'];

require_once '../controllers/PeliculaController.php';
$peliculaControl = new PeliculaController();

$peliculaControl->eliminar($id);

header('location: peliculas_listar.php');