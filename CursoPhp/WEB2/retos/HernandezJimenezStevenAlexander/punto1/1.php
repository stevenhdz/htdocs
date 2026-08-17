<?php


abstract class Figuras
{
    protected $nombreFigura;


    public function __construct($nombreFigura)
    {
        echo $this->nombreFigura = $nombreFigura;
    }

    public function __toString()
    {
        return $this->nombreFigura . '<br>';
    }

    public abstract function area($base, $altura, $radio);
}


class Rectangulo extends Figuras
{
    protected $base;
    protected $altura;

    public function __get($clave){
        return  $this->{$clave};
    }

    public function __set($clave, $value){
            $this->{$clave} = $value;
    }

    public function area($base, $altura, $radio)
    {
        echo "Area: " . (($base * $altura)/2) . "<br>";
    }

    public function __construct($nombreFigura)
    {
       $this->nombreFigura = $nombreFigura;
       parent::__construct($this->nombreFigura);
    }
}


class Círculo extends Figuras
{
    protected $radio;

    public function __get($clave){
        return  $this->{$clave};
    }

    public function __set($clave, $value){
            $this->{$clave} = $value;
    }

    public function area($base, $altura, $radio)
    {
        echo "Area: " . (3.1416 * (pow($radio,2))) . "<br>";
    }

    public function __construct($nombreFigura)
    {
       $this->nombreFigura = $nombreFigura;
       parent::__construct($this->nombreFigura);
    }
}


class Triángulo extends Figuras
{
    protected $base;
    protected $altura;

    public function __get($clave){
        return  $this->{$clave};
    }

    public function __set($clave, $value){
            $this->{$clave} = $value;
    }

    public function area($base, $altura, $radio)
    {
        echo "Area: " . (($base * $altura)/2) . "<br>";
    }

    public function __construct($nombreFigura)
    {
       $this->nombreFigura = $nombreFigura;
       parent::__construct($this->nombreFigura);
    }
}

