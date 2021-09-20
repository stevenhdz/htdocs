<?php

require_once '5.php';

class Traits
{
    public string $nombre;
    public int $num1;
    public int $num2;
    use Operations;
}

$tr = new Traits;

$tr->num1 = 5;
$tr->num2 = 3;
$tr->multiplicacion();
$tr->suma();
$tr->resta();
$tr->factorial(4);
$tr->max(2, 3, 4);
$tr->min(2, 3, 4);
$tr->prom(3, 4, 5);
