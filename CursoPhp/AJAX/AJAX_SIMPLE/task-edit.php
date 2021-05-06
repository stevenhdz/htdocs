<?php
include('database.php');

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description'];

if(isset($_POST['id'])){
    $id = $_POST['id'];

    $query = "UPDATE task SET name = '$name', description = '$description' WHERE id = $id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Error'. mysqli_error($connection));
    }

    echo 'actualizado';
}

?>