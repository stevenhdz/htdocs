<?php
require '../vendor/autoload.php';
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
    <form method="post">
        <h1>Find</h1>
        <label for="id" />ID:</label>
        <input type="text" name="id" id="id" autocomplete="off"  required />
                        <?php
                            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
                            $collection = $client->mongophp->details;

                            if($_POST['show1']){
                              $document = $collection->findOne(['_id' => new MongoDB\BSON\ObjectID($_POST['id'])]);
                        ?>  
                <label for="mensaje"></label>
                <textarea name="mensaje" for="mensaje" placeholder="Sin respuesta" maxlength="300">
                        <?php
                                var_dump($document['newText']);
                                echo '<br>';
                            }
                        ?>
                </textarea>
                <input type="submit" name="show1" value="Ver uno">
    </form>
</body>
</html>

