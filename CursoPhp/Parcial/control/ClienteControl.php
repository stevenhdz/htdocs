<?php

require_once '../model/Cliente.php';

class ClienteControl {

    public function __construct() {
        require_once '../conection/Db.php';
        try {
            $this->conexion = Db::conectar();
        } catch (PDOException $ex) {
            die ($ex -> getMessage());
        }
    }

    public function buscar_todos() {
        try {
            // $sql = "SELECT * FROM cliente ORDER BY documento_cliente DESC LIMIT 10 OFFSET 0";
            $sql = "SELECT * FROM cliente ORDER BY documento_cliente DESC";
            $conexion = $this->conexion;
            $prep = $conexion->prepare($sql); 
            $prep->execute();
            $clientes = $prep->fetchAll(PDO::FETCH_OBJ);
            
        }
        catch (PDOException $ex) {
            die($ex->getMessage());
        }
        return $clientes;      
    }

    // insertrar en la tabla pelicula un nuevo registro
    public function agregar($cliente) {
        try {
            $sql = 'INSERT INTO cliente (documento_cliente, nombre, email, telefono, cod_sexo) VALUES (?, ?, ?, ?, ?)';
            $conexion = $this->conexion;
            $prep = $conexion->prepare($sql);
            $prep->execute(array(
                $cliente->getDocumento_Cliente(),
                $cliente->getNombre(),
                $cliente->getEmail(),
                $cliente->getTelefono(),
                $cliente->getCod_Sexo()
            ));
        }
        catch (PDOException $ex) {
            die($ex->getMessage());
        }        
    } // fin del método agregar

        // obtener un cliente por su documento
        public function buscarPorId($documento_cliente) {
            try {
                $sql = 'SELECT * FROM cliente WHERE documento_cliente = ?';
                $conexion = $this->conexion;
                $prep = $conexion->prepare($sql);
                $prep->execute(array($documento_cliente));
                $cliente = $prep->fetch(PDO::FETCH_OBJ);
            }
            catch (PDOException $ex) {
                die($ex->getMessage());
            }
            return $cliente;       
        } // fin del método buscarPorId

       // eliminar un registro de la tabla pelicula por su ID
    public function eliminar($documento_cliente) {
        try {
            $sql = "DELETE FROM cliente WHERE documento_cliente = ?";
            $prep = $this->conexion->prepare($sql);
            $prep->execute([$documento_cliente]);
        } catch (PDOException $ex) {
            die($ex->getMessage());
        }        
    } // fin del método eliminar

    public function modificar($cliente) {
        try {
            // $sql = "UPDATE cliente SET documento_cliente = ?, nombre = ?, email = ?, telefono = ?, cod_sexo = ? WHERE documento_cliente = ?";
            $sql = "UPDATE cliente SET nombre = ?, email = ?, telefono = ?, cod_sexo = ? WHERE documento_cliente = ?";
            $prep = $this->conexion->prepare($sql);
            $prep->execute(array(
                $cliente->getNombre(),
                $cliente->getEmail(),
                $cliente->getTelefono(),
                $cliente->getCod_Sexo(),
                $cliente->getDocumento_Cliente()          
            ));
            return true;
        } catch (PDOException $ex) {
                die($ex->getMessage());
            return false;
        }         
    } // fin del método modificar
}

?>