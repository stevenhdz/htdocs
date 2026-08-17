<?php 

function numeroAString(int $x): string {
    return match ($x) {
        1 => "uno",
        2 => "dos",
        3, 4 => "tres o cuatro",
        default => "otro",
    };
}

echo numeroAString(2);  // \u201cdos\u201d
echo numeroAString(5);  // \u201cotro\u201d


$edad = 18;
$mensaje = match (true) {
    $edad < 13 => "niño",
    $edad < 20 => "adolescente",
    default => "adulto",
};
echo $mensaje;  // “adolescente”
