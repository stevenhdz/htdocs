<?php

require_once '../vendor/autoload.php';
$client = new MongoDB\Client("mongodb://127.0.0.1:27017/");
$collection = $client->mongophp->details;
$result = $collection->find()->toArray();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1">
        <thead>+
            <tr>
                <?php foreach ($result as $key => $value) : ?>
                    <th>
                        <?php echo $key; ?>
                    </th>
                <?php endforeach; ?>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($result as $entry) : ?>
                <tr>
                    <?php foreach ($entry->_id as $key1) : ?>
                        <td>
                            <?php echo $key1; ?>
                        </td>
                    <?php endforeach; ?>
                    <?php foreach ($entry->newText as $key1) : ?>
                        <td>
                            <?php echo $key1; ?>
                        </td>
                    <?php endforeach; ?>
                    <?php foreach ($entry->create as $key1) : ?>
                        <td>
                            <?php echo $key1; ?>
                        </td>
                    <?php endforeach; ?>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>

</html>