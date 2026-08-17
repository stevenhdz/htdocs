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
            <input type="submit" name="show" value="ver todos">
                        <?php
                            $client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
                            $collection = $client->mongophp->details;

                        if($_POST['show']){
                                $result = $collection->find()->toArray();
                        ?>  

                <label for="mensaje"></label>
                <textarea name="mensaje" for="mensaje" placeholder="Sin respuesta">
Registros Insertados:  
     
<?php 

foreach($result as $temp){
     echo $temp['_id'].' '.$temp['newText'].' '.$temp['newText2'].' '.$temp['country'];
     
?>

<?php
    }
}
?>
                </textarea>
                <br>
    </form>
</body>
</html>

