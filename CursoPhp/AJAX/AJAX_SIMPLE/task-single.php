<?php
include('database.php');

if(isset($_POST['id'])){
    $id = $_POST['id'];

    $query = "SELECT * from task WHERE id = $id";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Error'. mysqli_error($connection));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'name' => $row['name'],
            'description' => $row['description'],
            'id' => $row['id']
        );
    }
    $jsonstring = json_encode($json[0]);
    echo $jsonstring;
}

?>