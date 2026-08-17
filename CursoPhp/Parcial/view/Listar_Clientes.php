<?php
    require_once '../control/ClienteControl.php';
    $clienteControl = new ClienteControl();
    $clientes = $clienteControl->buscar_todos();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="wdocumento_clienteth=device-width, initial-scale=1.0">
    <title>Clientes</title>
    <link rel="stylesheet" href="../resources/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../resources/css/personalizado.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../resources/js/search.js"></script>
</head>

<body>
    <div class="container py-5">
        <div class="card">
            <div class="card-header">
                <h3>Listado de clientes</h3>
            </div>

            <div class="card-body">
                <div class="card-title">
                    <a class="btn btn-sm btn-info" href="Crear_cliente.php">Nuevo Cliente</a>
                    <input id="myInput" type="text" placeholder="Buscar..." class="buscador">
                </div>
                <table class="table table-striped table-sm" id="search">
                    <tr>
                        <th>Número documento</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Código sexo</th>
                        <th></th>
                    </tr>
                    <?php foreach($clientes as $cli) : ?>
                        <tr>
                            <td><a class="btn btn-sm btn-info" href="Consultar-Cliente.php?documento_cliente=<?= $cli->documento_cliente ?>"><?= $cli->documento_cliente ?></a></td>
                            <td><?= $cli->nombre ?></td>
                            <td><?= $cli->email ?></td>
                            <td><?= $cli->telefono ?></td>
                            <td><?= $cli->cod_sexo?></td>
                            <td class="text-center">
                                <a onclick="return confirm('Está seguro de eliminar el cliente ?')"
                                    class="btn btn-danger btn-sm"
                                    href="Eliminar-Cliente.php?documento_cliente=<?= $cli->documento_cliente ?>">Eliminar</a>
                                <a class="btn btn-warning btn-sm"
                                    href="Actualizar_Cliente.php?documento_cliente=<?= $cli->documento_cliente ?>">Modificar</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        </div>
    </div>
</body>

</html>