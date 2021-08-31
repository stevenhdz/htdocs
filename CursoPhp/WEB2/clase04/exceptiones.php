<?php
function dividir (int $a, int $b){
    if($b == 0)
        throw new Exception('No se puede dividir por 0');
    return $a / $b;
}

try {
  echo dividir(23,0);
} catch (Exception $th) {
  echo "<script>alert('".$th->getMessage()."')</script>";
}


echo "<br>";

function validarEmail(string $correo){
   if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) 
        throw new Exception('El formato del correo no es correcto');
   echo "Bien ingresado el correo $correo !!";
}


try {
    validarEmail('johndoe');
} catch (Exception $thw) {
    echo "<script>alert('".$thw->getMessage()."')</script>";
}