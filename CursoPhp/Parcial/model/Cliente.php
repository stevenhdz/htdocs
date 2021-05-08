<?php

    class Cliente {
        private $documento_cliente;
        private $nombre;
        private $email;
        private $telefono;
        private $cod_sexoo;
        
        public function __construct ($documento_cliente, $nombre, $email, $telefono, $cod_sexo) {
            $this->documento_cliente = $documento_cliente;
            $this->nombre = $nombre;
            $this->email = $email;
            $this->telefono = $telefono;
            $this->cod_sexo = $cod_sexo;
        }

        public function getDocumento_Cliente() {
            return $this-> documento_cliente;
        }
        
        public function getNombre() {
            return $this-> nombre;
        }
        
        public function getEmail() {
            return $this-> email;
        }
        
        public function getTelefono() {
            return $this-> telefono;
        }
        
        public function getCod_Sexo() {
            return $this-> cod_sexo;
        }

        public function setDocumento_Cliente($documento_cliente) {
            $this-> documento_cliente = $documento_cliente;
        }
        
        public function setNombre($nombre) {
            $this-> nombre = $nombre;
        }
        
        public function setEmail($email) {
            $this-> email = $email;
        }
        
        public function setTelefono($telefono) {
            $this-> telefono = $telefono;
        }
        
        public function setCod_Sexo($cod_sexo) {
            $this-> cod_sexo = $cod_sexo;
        }

        public function __toString() {
            return 'Cliente: ' 
            . 'Número de documento: ' . $this->documento_cliente 
            . ', Nombre: ' . $this->nombre 
            . ', Email: ' . $this->email
            . ', Teléfono: ' . $this->telefono
            . ', Código Sexo: ' . $this->cod_sexo;
        }
    }
?>