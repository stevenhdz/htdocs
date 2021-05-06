<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paginación</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
        <?php
           include_once 'peliculas.php';
           $peliculas = new Peliculas(6);        
        ?>
    <div id="container">
        <div id="peliculas">
        <?php
            $peliculas->mostrarPeliculas();
        ?>
        </div>
        <div id="paginas">
            <?php
                echo $peliculas->mostrarTotalResultados() . " resultados totales <br/>";
                $peliculas->mostrarPaginas();
            ?>
        </div>
    </div> 
</body>
</html>