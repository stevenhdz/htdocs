<?php require_once '../header.php'; ?>

<body>
    <div style="background-color: #323539; color: #FFFFFF;">
        <form method="post" action="">
            <h1 style="text-align: center; ">FORMULARIO DE REGISTRO</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="Nombres" class="form-label">Nombres</label>
                            <input type="text" class="form-control" required name="Nombres">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="Apellidos" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" required name="Apellidos">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="FechaIngreso" class="form-label">FechaIngreso</label>
                            <input type="date" class="form-control" required name="FechaIngreso">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="FechaSalida" class="form-label">FechaSalida</label>
                            <input type="date" class="form-control" name="FechaSalida">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="Contacto" class="form-label">Contacto</label>
                            <input type="tel" class="form-control" required name="Contacto">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="Direccion" class="form-label">Direccion</label>
                            <input type="text" class="form-control" required name="Direccion">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="MetodoPago" class="form-label">MetodoPago</label>
                            <select class="form-select" required name="MetodoPago" aria-label="Default select example">
                                <option selected>Elije una opcion</option>
                                <option value="1">Transferencia</option>
                                <option value="2">Efectivo</option>
                                <option value="3">Others</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="NumeroDeComputadores" class="form-label">NumeroDeComputadores</label>
                            <input type="number" id="NumeroDeComputadores" class="form-control" required name="NumeroDeComputadores">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="ValorUnidad" class="form-label">ValorUnidad</label>
                            <input type="number" id="ValorUnidad" class="form-control" required name="ValorUnidad">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="TotalAPagar" class="form-label">TotalAPagar</label>
                            <input type="number" class="form-control" id="TotalAPagar" disabled name="TotalAPagar">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="Correo" class="form-label">Correo</label>
                            <input type="email" class="form-control" required name="Correo">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="Tipo" class="form-label">Tipo</label>
                            <select class="form-select" required name="Tipo" aria-label="Default select example">
                                <option selected>Elije una opcion</option>
                                <option value="1">Persona natural</option>
                                <option value="2">Empresa</option>
                                <option value="3">others</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" required name="Descripcion" placeholder="Descripcion" id="Respuesta" style="height: 100px"></textarea>
                                <label for="Descripcion">Descripcion</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" name="Respuesta" placeholder="Respuesta" id="Respuesta" style="height: 100px"></textarea>
                                <label for="Respuesta">Respuesta</label>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="mb-3">

                            <input class="btn btn-primary" id="bot" onclick="mult_y_muestra()" value="Calcular total" name="submit">

                            <input class="btn btn-primary" id="bot2" type="submit" onclick="redirect()" value="Enviar registro" name="submit" style="display: none;">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>

</html>

<script src="../../resources/js/suma.js"></script>
<script src="../../resources/js/redirect.js"></script>

<?php
require_once '../../conexion/conexion.php';

if (isset($_POST['submit'])) {

    require_once '../../models/variables.php';

    $array = [
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
    ];

    $result = $collection->insertOne($array);

    echo 'insert: ' . $result->getInsertedId();
}
?>