<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video tienda - Películas</title>
    <link rel="stylesheet" href="../recursos/css/bootstrap.min.css" />
</head>

<body>
    <div class="container py-4">
        <div class="card">
            <div class="card-header">
                <h3>Nueva película</h3>
            </div>

            <div class="card-body">
                <div class="card-title">
                    <a class="btn btn-light" href="javascript:history.back()">regresar</a>
                </div>

                <ul class="list-group">
                    <li class="list-group-item">Título: <?= $pelicula->titulo ?></li>
                    <li class="list-group-item">Género: <?= $pelicula->genero ?> </li>
                    <li class="list-group-item">Año: <?= $pelicula->año ?> </li>
                    <li class="list-group-item">Disponible: <?= $pelicula->disponible ?> </li>
                </ul>

            </div>
        </div>
    </div>


</body>

</html>