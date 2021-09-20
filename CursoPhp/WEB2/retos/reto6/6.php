<?php

require 'vendor/autoload.php';

interface Db
{
    public function dbs($server, $name, $password, $db);
}

class DbMongo implements db
{
    public function dbs($server, $name, $password, $db)
    {
        $client = new MongoDB\Client("mongodb://{$server}:27017/");
        $collection = $client->mongophp->$db;
        $result = $collection->find()->toArray();
        foreach ($result as $value) {
            echo $value["texto"] . "<br>";
        }
        echo "<br>";
        echo 'conexion exitosa Mongo';
    }
}


class DbMysql implements db
{
    public function dbs($server, $name, $password, $db)
    {
        try {
            $charset = 'utf8mb4';
            $connection = "mysql:host=" . $server . ";dbname=" . $db . ";charset=" . $charset;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            $pdo = new PDO($connection, $name, $password, $options);
            $sth = $pdo->query('SELECT * FROM todotable');
            $rows = $sth->fetchAll();

            foreach ($rows as $row) {
                printf($row[1] . "<br>");
            }
            echo "<br>";
            echo 'conexion exitosa MYSQLI';
        } catch (PDOException $e) {
            print_r('Error connection: ' . $e->getMessage());
        }
    }
}


class Conexion
{
    protected $db;
    public function __construct(Db $db)
    {
        $this->db = $db;
    }

    public function conectar()
    {
        echo $this->db->dbs('localhost', 'prueba', 'hacker2012.L', 'todolistDB');
    }
}

$c = new Conexion(new DbMongo);
$c->conectar();
