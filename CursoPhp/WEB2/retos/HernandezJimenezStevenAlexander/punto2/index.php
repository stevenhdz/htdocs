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
    <form action="use.php" method="post">
        <table border="0.1px">
            <thead>
                   <tr>
                    <th colspan="2">Operaciones con números reales</th>
                  </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label for="Num1">Núm. 1</label></td>
                    <td><input name="Num1" id="Num1" value="" type="text" style="width:50px;"></td>
                  </tr>
                  <tr>
                    <td><label for="Num2">Núm. 2</label></td>
                    <td><input name="Num2" id="Num2"  value="" type="text" style="width:50px;"></td>
                  </tr>
                  <tr>
                    <td><label for="Salario">Operación</label></td>
                    <td><select name="operacion" id="operacion" style="width:150px;">
                        <option value="Suma">Suma</option>
                        <option value="Resta">Resta</option>
                        <option value="Multiplicación">Multiplicación</option>
                        <option value="División">División</option>
                        <option value="Potencia">Potencia</option>
                        <option value="Raiz2">Raiz2</option>
                    </select></td>
                  </tr>
            </tbody>
            <tfoot>
                <tr>
                  <td><button type="submit" style="background-color:crimson; color: white;">Enviar</button></td>
                </tr>
              </tfoot>
        </table>
    </form>
</body>
</html>