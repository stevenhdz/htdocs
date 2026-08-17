<?php
//polimorfismo

class classPoligono
{
  function calculo()
  {
  echo 'El area depende del tipo de poligono';
  }
}

class classCuadrado extends classPoligono
{
  function calculo()
  {
  echo 'area de un cuadrado : a=l*l<br>';
  }
}

class classRectangulo extends classPoligono
{
  function calculo()
  {
  echo 'area de un rectangulo : a=b*h<br>';
  }
}

class classTriangulo extends classPoligono
{
  function calculo()
  {
  echo 'area de un triangulo : a=(b*h)/2<br>';
  }
}

function area(classPoligono $obj)
{
  $obj->calculo();
}

/*
Creamos los objetos necesarios
*/
$cuadrado = new classCuadrado;
$rectangulo = new classRectangulo;
$triangulo = new classTriangulo;


area($cuadrado);
area($rectangulo);
area($triangulo);
