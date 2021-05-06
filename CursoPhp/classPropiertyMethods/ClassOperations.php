<?php

 //clase
 class Operacion{
    //propiedad
    public $uno = 0;
    public $dos = 0;
    public $result = 0;

     //metodo constructor
    function __construct($intCant1, $intCant2)
    {
        $this->uno = $intCant1;
        $this->dos = $intCant2;
    }

    //getters
    public function getSuma(){
		$this->result = $this->uno + $this->dos;
        return $this->result;
	}

    public function getResta(){
		$this->result = $this->uno - $this->dos;
        return $this->result;
	}

    public function getMultiplicacion(){
		$this->result = $this->uno * $this->dos;
        return $this->result;
	}

    public function getDivision(){
		$this->result = $this->uno / $this->dos;
        return $this->result;
	}
 }

?>