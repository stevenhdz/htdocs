<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultar Cliente</title>
    <link rel="stylesheet" href="../resources/css/bootstrap.min.css" />
</head>

<body>
    <div class="container py-4">
        <div class="card">
            <div class="card-header">
                <h3>Consultar Cliente</h3>
            </div>

            <div class="card-body">
                <div class="card-title">
                    <a class="btn btn-light" href="javascript:history.back()">Regresar</a>
                </div>

                <ul class="list-group">
                    <li class="list-group-item">Documento del cliente: <?= $cliente->documento_cliente?></li>
                    <li class="list-group-item">Nombre: <?= $cliente->nombre?></li>
                    <li class="list-group-item">Email: <?= $cliente->email?> </li>
                    <li class="list-group-item">Teléfono: <?= $cliente->telefono?> </li>
                    <li class="list-group-item">Código de Sexo: <?= $cliente->cod_sexo ?> </li>
                </ul>

            </div>
        </div>
    </div>
</body>

</html>