<?php

require_once '../../models/variables.php';

if ($_POST['updateone']) {
    $updateResult = $collection->updateOne(
        ['_id' => new MongoDB\BSON\ObjectID($_POST['id'])],
        [
            '$set' => [
                'Nombres' => $Nombres,
                'Apellidos' => $Apellidos,
                'FechaIngreso' => $FechaIngreso,
                'FechaSalida' => $FechaSalida,
                'Contacto' => $Contacto,
                'Direccion' => $Direccion,
                'MetodoPago' => $MetodoPago,
                'NumeroDeComputadores' => $NumeroDeComputadores,
                'ValorUnidad' => $ValorUnidad,
                'TotalAPagar' => $TotalAPagar,
                'Correo' => $Correo,
                'Tipo' => $Tipo,
                'Descripcion' => $Descripcion,
                'Respuesta' => $Respuesta
            ]
        ]
    );

    printf("documento(s) %d Modificado\n", $updateResult->getModifiedCount());

    header('Location: http://localhost:8882/final/views/');
}
