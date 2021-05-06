<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once '../models/Pelicula.php';


class PeliculaController
{

    public function __construct()
    {
        require_once '../conexion/db.php';
        try {
            $this->cn = Db::conectar();
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }


    public function listar () {
        try {
            //podemos usar una variable nueva cambiante hacia el OFFSET
            $sql = "SELECT * FROM pelicula ORDER BY id DESC LIMIT 20 OFFSET 0  ";
            $conexion = $this->cn;
            $prep = $conexion->prepare($sql);
            $prep->execute();
            $peliculas = $prep->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
        return $peliculas;	
	}


 public function agregar($pelicula) {
    try {
        $sql = 'insert into pelicula (titulo, genero, año, disponible) values (?, ?, ?, ?)';
        $conexion = $this->cn;
        $prep = $conexion->prepare($sql);
        $prep->execute(array(
            $pelicula->getTitulo(),
            $pelicula->getGenero(),
            $pelicula->getAño(),
            $pelicula->getDisponible()
        ));
    }
    catch (PDOException $ex) {
        die($ex->getMessage());
    }        
} // fin del método agregar

// obtener un película por su ID
public function buscarPorId($id) {
    try {
        $sql = 'select * from pelicula where id = ?';
        $conexion = $this->cn;
        $prep = $conexion->prepare($sql);
        $prep->execute(array($id));
        $pelicula = $prep->fetch(PDO::FETCH_OBJ);
    }
    catch (PDOException $ex) {
        die($ex->getMessage());
    }
    return $pelicula;       
} // fin del método buscarPorId

// eliminar un registro de la tabla pelicula por su ID
public function eliminar($id) {
    try {
        $sql = "delete from pelicula where id = ?";
        $prep = $this->cn->prepare($sql);
        $prep->execute([$id]);
    }
    catch (PDOException $ex) {
        die($ex->getMessage());
    }        
} // fin del método eliminar

// modificar/cambiar los datos de una película
public function modificar($pelicula) {
    try {
        $sql = "update pelicula set titulo = ?, genero = ?, año = ?, disponible = ? where id = ?";
        $prep = $this->cn->prepare($sql);
        $prep->execute(array(
            $pelicula->getTitulo(),
            $pelicula->getGenero(),
            $pelicula->getAño(),
            $pelicula->getDisponible(),
            $pelicula->getId()              
        ));
        return true;
    }
    catch (PDOException $ex) {
        // die($ex->getMessage());
        return false;
    }         
} // fin del método modificar







}

