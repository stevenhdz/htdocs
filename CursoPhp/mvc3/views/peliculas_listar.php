<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    require_once '../controllers/PeliculaController.php';
    $peliculaController = new PeliculaController();
    $peliculas = $peliculaController->listar();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video tienda - Películas</title>
    <link rel="stylesheet" href="../recursos/css/bootstrap.min.css" />
</head>

<body>
    <div class="container py-5">
        <div class="card">
            <div class="card-header">
                <h3>Listado de películas</h3>
            </div>

            <div class="card-body">
                <div class="card-title">
                    <a class="btn btn-sm btn-info" href="pelicula_actualizar.php">nueva película</a>
                </div>
                <table id="myTable" class="table table-striped table-sm">
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Género</th>
                        <th>Año</th>
                        <th>Disponible</th>
                        <th colspan="2" class="text-center">Acciones</th>
                    </tr>
                    <?php foreach($peliculas as $peli) : ?>
                        <tr>
                            <td><a class="btn btn-sm btn-info" href="pelicula_consultar.php?id=<?= $peli->id ?>"><?= $peli->id ?></a></td>
                            <td><?= $peli->titulo ?></td>
                            <td><?= $peli->genero ?></td>
                            <td><?= $peli->año ?></td>
                            <td><?= ($peli->disponible ? 'Si' : 'No') ?></td>
                            <td class="text-center">
                                <a onclick="return confirm('Está seguro de eliminar la película ?')"
                                    class="btn btn-danger btn-sm"
                                    href="pelicula_eliminar.php?id=<?= $peli->id ?>">eliminar</a>
                                <a class="btn btn-warning btn-sm"
                                    href="pelicula_actualizar.php?id=<?= $peli->id ?>">modificar</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>

                </table>
            </div>
        </div>
    </div>
</body>
</html>