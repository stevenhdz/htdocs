<?php

//injection dependenci
interface Proveedor {
    public function enviar($de,$a,$msg);
}

class ProveedorCorreo implements proveedor {
    public function enviar($de,$a,$msg){
        return "Usando <b> ProveedorMail1 </b>, se esta enviando un correo desde ";
    }
}


class ProveedorCorreo2 implements proveedor{
    public function enviar($de,$a,$msg){
        return "Usando <b> ProveedorMail2 </b>, se esta enviando un correo desde {$de} a {$a} y el mensaje es {$msg}";
    }
}


class Correo {
    protected $proveedor;
    public function __construct(Proveedor $proveedor){
        $this->proveedor = $proveedor;
    }

    public function enviarCorreoEmpleados(){
        //$proveedor = new ProveedorCorreo2;
        $correos = ['jusn@gmail.com','juan@gmail.com'];
        foreach ($correos as $c) {
            echo $this->proveedor->enviar('admin',$c,'mensaje del dia');
        }
    }
}

$c = new Correo(new ProveedorCorreo);
$c->enviarCorreoEmpleados();