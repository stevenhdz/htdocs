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
                <div class="card-title"></div>
                <form method="post" action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>">

                    <div class="form-group">
                        <label for="titulo">Título</label>
                        <input type="text" name="titulo" id="titulo" class="form-control" 
                            value="<?= (isset($titulo) && !$frm_enviado) ? $titulo : '' ?>">
                    </div>

                    <div class="form-group">
                        <label>Género</label>
                        <div class="form-group">
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genAccion" class="form-check-input" value="Acción"
                                    <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Acción') !== false) ? 'checked' : '' ?> >
                                <label for="genAccion" class="form-check-label">Acción</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genFiccion" class="form-check-input" value="Ciencia ficción"
                                    <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Ciencia ficción') !== false) ? 'checked' : '' ?> >
                                <label for="genFiccion" class="form-check-label">Ciencia ficción</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genTerror" class="form-check-input" value="Terror"
                                    <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Terror') !== false) ? 'checked' : '' ?> >
                                <label for="genTerror" class="form-check-label">Terror</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genAnimacion" class="form-check-input" value="Animación"
                                    <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Animación') !== false) ? 'checked' : '' ?> >
                                <label for="genAnimacion" class="form-check-label">Animación</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genComedia" class="form-check-input" value="Comedia"
                                    <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Comedia') !== false) ? 'checked' : '' ?> >
                                <label for="genComedia" class="form-check-label">Comedia</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genDrama" class="form-check-input" value="Drama"
                                    <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Drama') !== false) ? 'checked' : '' ?> >
                                <label for="genDrama" class="form-check-label">Drama</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" name="genero[]" id="genMusical" class="form-check-input" value="Musical"
                                <?= (isset($genero) && !$frm_enviado && strpos($genero, 'Musical') !== false) ? 'checked' : '' ?> >
                                <label for="genMusical" class="form-check-label">Musical</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="año">Año</label>
                        <input type="number" name="año" id="año" class="form-control" 
                            value="<?= (isset($año) && !$frm_enviado) ? $año : '' ?>">
                    </div>

                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" name="disponible" id="disponible" class="form-check-input" 
                                <?= (isset($disponible) && !$frm_enviado) && $disponible == 1 ? 'checked' : ''?> >
                            <label for="disponible" class="form-check-label">Disponible</label>
                        </div>
                    </div>

                    <input type="hidden" name="id" id="id" value="<?= (isset($id) && !$frm_enviado) ? $id : '' ?>">

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