<?php

if ($_POST['deleteone']) {
    $id = ['_id' => new MongoDB\BSON\ObjectID($_POST['id'])];
    $document = $collection->deleteOne($id);
    header('Location: http://localhost:8882/final/views/index.php?id=1');
}
