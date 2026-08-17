<?php

	function multiplicar($n1, $n2){
		return $n1 * $n2;
    }
    
    function sumar($n1, $n2){
		return $n1 + $n2;
    }
    
    function restar($n1, $n2){
		return $n1 - $n2;
	}

    function division($n1, $n2){
		return $n1 / $n2;
	}


	function esNumero($n1, $n2){
		if(is_numeric($n1) && is_numeric($n2)){
			return true;
		}else{
			return false;
		}
	}

	function mostrarError(){
		echo "<span class='error'>Ingresa solo números</span>";
	}

	function validarCampos(){
		if(isset($_POST['numero01']) && isset($_POST['numero02'])){
			$n1 = $_POST['numero01'];
			$n2 = $_POST['numero02'];

			if(esNumero($n1, $n2)){
                echo '<br>';
                echo 'la multiplicacion es: '.multiplicar($n1, $n2).'<br>';
                echo 'la suma es: '.sumar($n1, $n2).'<br>';
                echo 'la resta es: '.restar($n1, $n2).'<br>';
                echo 'la division es: '.division($n1, $n2).'<br>';
			}else{
				mostrarError();
			}
		}
	}

?>