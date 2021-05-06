<?php

class Usuario{

	public $nombre;
	private $email;
	public $tipo;
	private $clave;
	protected $fecharegistro;
	static $estado = "Activo";
	static $numero = 12;

	function __construct($nombre, $email, $tipo){
		$esto = $this;
		$esto->nombre = $nombre;
		$esto->email = $email;
		$esto->tipo = $tipo;
		$esto->clave = rand();
		$esto->fecharegistro = date('y-m-d h:m:s');
	}	

	public function getemail(){
		return $this->email;
	}
}