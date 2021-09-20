<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>
<body>
    <form action="3.php" method="post">
        <table border="0.1px">
            <thead>
                   <tr>
                    <th colspan="2">Formulario trabajador</th>
                  </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label for="Nombre">Nombre</label></td>
                    <td><input name="Nombre" id="Nombre" value="" type="text"></td>
                  </tr>
                  <tr>
                    <td><label for="Correo">Correo</label></td>
                    <td><input name="Correo" id="Correo"  value="" type="text"></td>
                  </tr>
                  <tr>
                    <td><label for="Salario">Salario</label></td>
                    <td><input name="Salario" id="Salario"  value="" type="text"></td>
                  </tr>
                  <tr>
                    <td><label for="fechaDeIngreso">Fecha de ingreso</label></td>
                    <td><input name="fechaDeIngreso" id="fechaDeIngreso"  value="" type="date"></td>
                  </tr>
            </tbody>
            <tfoot>
                <tr>
                  <td></td>
                  <td><button type="submit" style="background-color:crimson; color: white;">Enviar</button></td>
                </tr>
              </tfoot>
        </table>
    </form>
</body>
</html>