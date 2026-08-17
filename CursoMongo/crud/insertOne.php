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
    <div>
    <form method="post" action="">
        <label for="text" />Nombre:</label>
        <input type="text" name="text" id="text" autocomplete="off" required />
        <label for="text2" />Apellidos:</label>
        <input type="text" name="text2" id="text2" autocomplete="off"  required />
        <label for="country" />Ciudad:</label>
        <input type="text" name="country" id="country" autocomplete="off"  required />
                        <?php
                            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
                            $collection = $client->mongophp->details;
                                //insert iD 
                            if(isset($_POST['submit'])){
                                $text = $_POST['text'];
                                $text2 = $_POST['text2'];
                                $text3= $_POST['country'];
                                $result = $collection->insertOne(['newText'=> $text,'newText2'=> $text2,'country'=> $text3]);
                        ?>  
                <label for="mensaje"></label>
                <textarea name="mensaje" for="mensaje" placeholder="Sin respuesta" maxlength="300">
                        <?php
                                echo 'id: '.$result->getInsertedId();
                            }
                        ?>
                </textarea>
        <input type="submit" value="Guardar" name="submit">
    </form>
    </div>
</body>
</html>

