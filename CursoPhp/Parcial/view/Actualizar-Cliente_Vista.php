<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parqueadero - Clientes</title>
    <link rel="stylesheet" href="../resources/css/bootstrap.min.css" />
</head>

<body>
    <div class="container py-4">
        <div class="card">
            <div class="card-header">
                <h3>Nuevo Cliente</h3>
            </div>

            <div class="card-body">
                <div class="card-title"></div>
                <form method="post" action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>">
                    <div class="form-group">
                        <input type="hidden" name="documento_cliente" id="documento_cliente" class="form-control" 
                            value="<?= (isset($documento_cliente) && !$frm_enviado) ? $documento_cliente : '' ?>" 
                            >
                    </div>

                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" class="form-control" 
                            value="<?= (isset($nombre) && !$frm_enviado) ? $nombre : '' ?>">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="form-control" 
                            value="<?= (isset($email) && !$frm_enviado) ? $email : '' ?>">
                    </div>

                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" id="telefono" class="form-control" 
                            value="<?= (isset($telefono) && !$frm_enviado) ? $telefono : '' ?>">
                    </div>

                    <div class="form-group">
                        <label for="cod_sexo">Código Sexo</label>
                        <input type="text" name="cod_sexo" id="cod_sexo" class="form-control" 
                            value="<?= (isset($cod_sexo) && !$frm_enviado) ? $cod_sexo : '' ?>">
                    </div>

                    

                    <?php if (!empty($errores)) : ?>
                        <div class="alert alert-danger border border-danger">
                            <?= $errores ?>
                        </div>
                    <?php endif; ?>

                    <div class="form-group">
                        <input type="submit" value="Enviar" name="btn_enviar" class="btn btn-info">
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>