<?php

class Usuario {
    public readonly int $id;
    public readonly string $nombre;

    public function __construct(int $id, string $nombre) {
        $this->id = $id;
        $this->nombre = $nombre;
    }
}

$u = new Usuario(5, "Ana");
echo $u->id;     // 5
echo $u->nombre; // \u201cAna\u201d

$u->nombre = "Luis";  
// \u2192 Error: Cannot modify readonly property Usuario::$nombre