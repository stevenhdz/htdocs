<?php
class Base
{
    public $db;
    public $res;
    public function __construct()
    {
        try
        {
            $this->db = new PDO("mysql:host=localhost;dbname=api;charset=utf8","prueba","hacker2012.L");
        } 
        catch(PDOException $e)
        {
            echo "Database error: " . $e->getMessage();
        }
    }

    public function users($query, $param = [])
    {
        if(empty($param))
        {
            $this->res = $this->db->prepare($query);
            return $this->res->execute();
        }
        else
        {
            $this->res = $this->db->prepare($query);
            return $this->res->execute($param);
        }
    }

    public function fetch()
    {
        return $this->res->fetchAll(PDO::FETCH_OBJ);
    }

    public function single()
    {
        return $this->res->fetch(PDO::FETCH_OBJ);
    }

    public function count()
    {
        return $this->res->rowCount();
    }

}
?>