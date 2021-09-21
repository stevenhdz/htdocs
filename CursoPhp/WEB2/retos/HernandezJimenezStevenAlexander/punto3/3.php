<?php

interface Vehiculos {
        public function obtenerMarca(): string;
        public function obtenerNroRuedas(): string;
    }

class Moto implements Vehiculos
{

    public function __construct($marca,$ruedas) 
    { 
        $this->marca = $marca;
        $this->ruedas = $ruedas;
    }

    public function obtenerMarca(): string
    {
        return "Marca: $this->marca";
    }

    public function obtenerNroRuedas(): string
    {
        return "Numero de ruedas: $this->ruedas ";
    }
}


class Carro implements Vehiculos
{

    public function __construct($marca,$ruedas) 
    { 
        $this->marca = $marca;
        $this->ruedas = $ruedas;
    }

    public function obtenerMarca(): string
    {
        return "Marca: $this->marca";
    }

    public function obtenerNroRuedas(): string
    {
        return "Numero de ruedas: $this->ruedas ";
    }

}


$prod = new Carro('ferrari',4);
echo $prod->obtenerMarca();
echo '<br>';
echo $prod->obtenerNroRuedas();
echo '<br>';



$prod = new Moto('bmw',2);
echo $prod->obtenerMarca();
echo '<br>';
echo $prod->obtenerNroRuedas();
echo '<br>';

