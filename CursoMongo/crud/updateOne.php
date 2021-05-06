<?php
require '../vendor/autoload.php';
require '../crud/find.php'
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href=".././style.css">
</head>
<body>
    <div>
    <form method="post" action="">
        <label for="campo" />Campo:</label>
        <input type="text" name="campo" id="campo" autocomplete="off" required />
        <label for="dato" />Dato:</label>
        <input type="text" name="dato" id="dato" autocomplete="off" required />
        <label for="campo1" />Campo:</label>
        <input type="text" name="campo1" id="campo1" autocomplete="off" required />
        <label for="dato1" />Dato:</label>
        <input type="text" name="dato1" id="dato1" autocomplete="off" required />
                        <?php
                            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
                            $collection = $client->mongophp->details;
                            
                                $campo = $_POST['campo'];
                                $dato = $_POST['dato'];
                                $campo1 = $_POST['campo1'];
                                $dato1 = $_POST['dato1'];

                            if($_POST['updateone']){
                                $updateResult = $collection->updateOne(
                                    [$campo => $dato],
                                    ['$set' => [$campo1 => $dato1]]
                                );
                        ?>  
                <label for="mensaje"></label>
                <textarea name="mensaje" for="mensaje" placeholder="Sin respuesta" maxlength="300">
                        <?php
                               printf("Matched %d document(s)\n", $updateResult->getMatchedCount());
                               echo '<br>';
                               printf("Modified %d document(s)\n", $updateResult->getModifiedCount());
                            }
                        ?>
                </textarea>
        <input type="submit" name="updateone" value="Actualizar uno">
    </form>
    </div>
</body>
</html>

