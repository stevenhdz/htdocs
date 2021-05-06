<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Pelicula
{

    private $id;
    private $titulo;
    private $genero;
    private $año;
    private $disponible;

    public function __construct($id, $titulo, $genero, $año, $disponible)
    {
        $this->id = $id;
        $this->titulo = $titulo;
        $this->genero = $genero;
        $this->año = $año;
        $this->disponible = $disponible;
    }

    public function getId(){
		return $this->id;
	}

    public function setId($id){
		return $this->id = $id;
	}

    public function getTitulo(){
		return $this->titulo;
	}

    public function setTitulo($titulo){
		return $this->titulo = $titulo;
	}

    public function getGenero(){
		return $this->genero;
	}

    public function setGenero($genero){
		return $this->genero = $genero;
	}

    public function getAño(){
		return $this->año;
	}

    public function setAño($año){
		return $this->año = $año;
	}

    public function getDisponible(){
		return $this->disponible;
	}

    public function setDisponible($disponible){
		return $this->disponible = $disponible;
	}


    public function __toString(){
        return 'Pelicula: '. $this->titulo . PHP_EOL . $this->genero . PHP_EOL . $this->año;
    }
}
