<pre>
    Seguridad - multiples BD
</pre>

<?php
// parameters
$dsn = 'mysql:host=localhost;port=3306;dbname=dbsistema';
$username = 'prueba';
$password = 'tuclave';
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8mb4'",
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
);

try {
    $pdo = new PDO($dsn, $username, $password, $options);
    echo "Conexión exitosa...";
} catch (PDOException $e) {
    echo $e->getMessage();
    die();
}