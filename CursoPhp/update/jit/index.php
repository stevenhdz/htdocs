<?php
// benchmark simple
function calc() {
    $sum = 0;
    for ($i = 0; $i < 100000000; $i++) {
        $sum += $i;
    }
    return $sum;
}
$start = microtime(true);
calc();
echo "Tiempo: " . (microtime(true) - $start) . " s\n";

//config php.ini
//opcache.enable=1
//opcache.enable_cli=1
//opcache.jit_buffer_size=100M
//opcache.jit=tracing or opcache.jit=1255