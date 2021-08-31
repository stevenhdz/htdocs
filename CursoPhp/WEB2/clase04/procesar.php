<?php
 if(isset($_POST['enviar'])){
    $mail = filter_var($_POST['correo'], FILTER_SANITIZE_STRING);
    $pss = filter_var($_POST['clave'], FILTER_SANITIZE_STRING);
    echo sprintf("Datos recibidos:  %s, %s ", $mail, $pss);
 } else{
    echo "No enviado desde el boton";
 }