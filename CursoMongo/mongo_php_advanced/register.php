
<?php

session_start();
require_once('dbconnect.php');

if (isset($_SESSION['user'])) {
    header('Location: home.php');
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = hash('sha256',$_POST['password']);
    $result = $db->users->insertOne(array('username'=>$username, 'password'=>$password));
     header('Location: index.php');
    
}

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
    <form method="post" action="register.php">
    <fieldset>
        <label for="username">Username: </label><input type="text" name="username"><br>
        <label for="password">Password: </label><input type="password" name="password"><br>
        <input type="submit" value="Sign Up">
    </fieldset>
    </form>
    <a href="index.php"> Already have an account? Login here. </a>
</body>
</html>