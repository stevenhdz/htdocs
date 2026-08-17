<?php

class Persona {
    public string $nombre;
}

$p = new Persona();
$p->edad = 30;  // Si \u201cedad\u201d no fue declarada, esto genera un aviso de deprecaci�n en PHP 8.2+
