<?php
	
	class Conectar {
		
		public static function conexion(){
			
			$conexion = new mysqli("localhost", "prueba", "hacker2012.L", "mvc");
			return $conexion;
			
		}
	}
?>