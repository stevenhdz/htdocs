<?php
	
	class Conectar {
		
		public static function conexion(){
			
			$conexion = new mysqli("localhost", "prueba", "tuclave", "mvc");
			return $conexion;
			
		}
	}
?>