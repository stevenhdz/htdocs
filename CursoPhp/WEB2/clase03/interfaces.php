<?php

use GuzzleHttp\Handler\Proxy;

interface Productos {
        const IVA = 0.19;

        public function findAll(): string;
        public function findById(int $id): string;
        public function create(array $array): string;
       /*  public function update(array $array): string;
        public function deleteById(int $id): string; */

    }

class Producto implements Productos
{
    public function findAll(): string
    {
        return "Obtener todos los productos";
    }

    public function findById(int $id): string
    {
        return "Obtener todos los productos id {$id}";
    }

    public function create(array $array): string
    {
        return serialize($array);
        /* return implode(', ',$array); */
    }
}

$prod = new Producto;
echo $prod->findAll();
echo '<br>';
echo $prod->findById(100);
echo '<br>';
echo $prod->create(['iphone 12 plus',8000000, true]);
echo '<br>';
echo Producto::IVA;