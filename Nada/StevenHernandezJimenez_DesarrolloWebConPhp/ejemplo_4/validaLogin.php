<?php
/* En este ejemplo lo primero que se hace es validar que se halla llegado
 * a esta página luego de hacer un intento de login, ya que de lo contrario 
 * se podría tratar de un intento de forzar el acceso a la aplicación, esto
 * puede lograrse de varias maneras, la que aquí se usa es validar si el 
 * arreglo $_POST y más específicamente el índice 'usuario' ya fue inicializado
 * si un usuario intentara llegar a esta página inyectando código por la URL
 * sería rechazado ya que la información llegaría al arreglo $_REQUEST o al
 * arreglo $_GET
 */
if (!isset($_POST['usuario'])) {
    ?>
    <!DOCTYPE html>
    <html> 
        <head> 
            <title>Unidad 4 - Ejemplo 4 Error de ingreso</title>
            <meta http-equiv="Content-Type" 
                  content="text/html; charset=ISO-8859-1" />
        </head>
        <body>
<?php
    /* Si la variable $_POST['usuario'] no está inicializada se muestra un
     * aviso al usuario de que no ha hecho login correctamente, es decir, que 
     * no llegó a esta página habiendo hecho login, y que será redireccionado
     * a la página de login
     */
    echo "No se ha hecho login correctamente, ser&aacute; redireccionado a "
    . "la p&aacute;gina de login <br />";
    echo "Si no es redireccionado de clic <a href = 'login.php'>aqui</a>";
    /* la función header() permite el reenvío de los encabezados de una
     * página o recurso web, lo que hace que pueda ser recargadao como en este 
     * usando una cadena que refresca el navegador, pero permite esperar un 
     * determinado número de segundos durante los cuales se puede mostrar el 
     * mensaje que está arriba.
     */
    header("Refresh: 5; URL=Login.php");
} else {
    ?>

    <!DOCTYPE html>
    <html> 
        <head> 
            <title>Unidad 4 - Ejemplo 4 Valida Login</title>
            <meta http-equiv="Content-Type" 
                  content="text/html; charset=ISO-8859-1" />
        </head>
        <body>
            <?php
            /* Si por el contrario el usuario llega a esta página luego de hacer
             * un intento de login, se validan los datos que puso en el
             * formulario si son iguales que lo contenido en las variables
             * $usuario y $contrasena se da acceso, si no se da un mensaje que 
             * indica que los datos no coinciden con los almacenados y se 
             * devuelve al usuario a la página de login. Cuando se estudie
             * el tema de bases de datos en los siguientes niveles del curso
             * se podrá utilizar esta base para comparar los datos del formulario
             * con los contenidos en la base de datos, y asi mismo 
             * al usar sesiones se puede hacer que la próxima vez que el usuario
             * intente ingresar a la aplicación no tenga que volver a poner
             * los datos de login, esto siempre y cuando se tengan las
             * garantías de seguridad necesarias
             */
            $usuario = "Juan";
            $contrasena = "Pablo";
            if (($_POST['usuario'] != $usuario) or
                    ($_POST['contrasena'] != $contrasena)) {
                echo "El usuario o la contrase&ntilde;a son incorrectos "
                . "ser&aacute; redireccionado a la p&aacute;gina de login<br />";
                echo "Si no es redireccionado de clic "
                . "<a href = 'login.php'>aqui</a>";
                header("Refresh: 5; URL=Login.php");
            } else {
                echo "<h1>Bienvenid@</h1>";
                echo "Su usuario y contrase&ntilde;a son correctos <br />";
                if (isset($_POST['recordarme'])) {
                    if ($_POST['recordarme'] == TRUE) {
                        echo "Usted quiere que se recuerden su datos";
                    }
                }
            }
        }
        ?>
    </body>
</html>