<?php require_once '../header.php'; ?>

<body>
    <div style="overflow-x:auto; background-color: #323539; color: #FFFFFF;">
        <h1 style="text-align: center; ">SISTEMA DE GESTION</h1>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <td>
                        <form method="get" action="./insert.php">
                            <button type="submit" class="btn btn-success ">Agregar</button>
                        </form>
                    </td>
                    <td colspan="12"></td>
                    <td colspan="2" style="text-align: right;">
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input class="form-control" style="text-align: center;" id="myInput" type="text" placeholder="Buscador">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">Nombres</td>
                    <td style="text-align: center;">Apellidos</td>
                    <td style="text-align: center;">Fecha ingreso</td>
                    <td style="text-align: center;">Fecha salida</td>
                    <td style="text-align: center;">Contacto</td>
                    <td style="text-align: center;">Direccion</td>
                    <td style="text-align: center;">Metodo pago</td>
                    <td style="text-align: center;">Numero de computadores</td>
                    <td style="text-align: center;">Valor unidad</td>
                    <td style="text-align: center;">Total a pagar</td>
                    <td style="text-align: center;">Correo</td>
                    <td style="text-align: center;">Tipo</td>
                    <td style="text-align: center;">Descripcion</td>
                    <td style="text-align: center;">Respuesta</td>
                    <td style="text-align: center;">Acciones</td>
                </tr>
            </thead>
            <?php
            require_once '../../conexion/conexion.php';
            $result = $collection->find()->toArray();
            foreach ($result as $temp) {
            ?>
                <tbody id="myTable">
                    <tr>
                        <form action="" method="post">
                            <td><input name="Nombres" type="text" class="form-control fixed" value="<?= $temp['Nombres'] ?>">
                                <P hidden><?= $temp['Nombres'] ?></P>
                            </td>
                            <td><input name="Apellidos" type="text" class="form-control" value="<?= $temp['Apellidos'] ?>">
                                <P hidden><?= $temp['Apellidos'] ?></P>
                            </td>
                            <td><input name="FechaIngreso" type="date" class="form-control" value="<?= $temp['FechaIngreso'] ?>">
                                <P hidden><?= $temp['FechaIngreso'] ?></P>
                            </td>
                            <td><input name="FechaSalida" type="date" class="form-control" value="<?= $temp['FechaSalida'] ?>">
                                <P hidden><?= $temp['FechaSalida'] ?></P>
                            </td>
                            <td><input name="Contacto" type="text" class="form-control" value="<?= $temp['Contacto'] ?>">
                                <P hidden><?= $temp['Contacto'] ?></P>
                            </td>
                            <td><input name="Direccion" type="text" class="form-control" value="<?= $temp['Direccion'] ?>">
                                <P hidden><?= $temp['Direccion'] ?></P>
                            </td>
                            <td><input name="MetodoPago" type="text" class="form-control" value="<?= $temp['MetodoPago'] ?>">
                                <P hidden><?= $temp['MetodoPago'] ?></P>
                            </td>
                            <td><input name="NumeroDeComputadores" type="text" class="form-control" value="<?= $temp['NumeroDeComputadores'] ?>">
                                <P hidden><?= $temp['NumeroDeComputadores'] ?></P>
                            </td>
                            <td><input name="ValorUnidad" type="text" class="form-control" value="<?= $temp['ValorUnidad'] ?>">
                                <P hidden><?= $temp['ValorUnidad'] ?></P>
                            </td>
                            <td><input name="TotalAPagar" type="text" class="form-control" value="<?= $temp['TotalAPagar'] ?>" disabled>
                                <P hidden><?= $temp['TotalAPagar'] ?></P>
                            </td>
                            <td><input name="Correo" type="text" class="form-control" value="<?= $temp['Correo'] ?>">
                                <P hidden><?= $temp['Correo'] ?></P>
                            </td>
                            <td><input name="Tipo" type="text" class="form-control" value="<?= $temp['Tipo'] ?>">
                                <P hidden><?= $temp['Tipo'] ?></P>
                            </td>
                            <td><input name="Descripcion" type="text" class="form-control" value="<?= $temp['Descripcion'] ?>">
                                <P hidden><?= $temp['Descripcion'] ?></P>
                            </td>
                            <td><input name="Respuesta" type="text" class="form-control" value="<?= $temp['Respuesta'] ?>">
                                <P hidden><?= $temp['Respuesta'] ?></P>
                            </td>

                            <td style="text-align: center;">
                                <input type="hidden" name="id" value="<?php echo trim($temp['_id']) ?>">
                                <input name="deleteone" class="btn btn-danger" type="submit" value="Eliminar">
                                <?php require_once './delete.php';  ?>

                                <input type="submit" class="btn btn-warning" name="updateone" value="Editar">
                                <?php require_once './update.php'; ?>
                        </form>
                        </td>
                    </tr>
                </tbody>
            <?php
            }
            ?>
        </table>
    </div>

</body>

<script>
    $(function() {
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $('#myTable tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
</script>

</html>