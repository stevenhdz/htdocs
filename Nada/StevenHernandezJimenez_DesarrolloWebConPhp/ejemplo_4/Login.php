<!DOCTYPE html>
<html> 
    <head> 
        <title>Unidad 4 - Ejemplo 4 Login</title>
        <meta http-equiv="Content-Type" 
              content="text/html; charset=ISO-8859-1" />
        <!-- En este archivo se genera un formulario de login básico
        se usa la misma plantilla CSS del ejemplo anterior pero esta
        solo modifica la presentación de nuevo los datos serán enviados
        a otra página para que valide la información, por ahora
        dicha validación se hará comparándola con información contenida
        en variables, pero con base en esta rutina se pueden crear
        puntos de acceso a aplicaciones que usen información 
        contenida en base de datos para dar o negar el acceso-->
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <section class="container">
            <div class="login">
                <h1>Login</h1>
                <form method="post" action="validaLogin.php">
                    <p><input type="text" name="usuario" 
                              placeholder="Nombre de Usuario"></p>
                    <p><input type="password" name="contrasena" 
                              placeholder="Contrase&ntilde;a"></p>
                    <p class="remember_me">
                        <label>
                            <input type="checkbox" name="recordarme" 
                                   value="false">
                            Recordar mis datos
                        </label>
                    </p>
                    <p class="submit"><input type="submit" value="Ingresar"></p>
                </form>
            </div>
        </section>
    </body>
</html>