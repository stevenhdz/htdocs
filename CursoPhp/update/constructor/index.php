<?php

class Persona {
    public function __construct(
        private string $nombre,
        private int $edad
    ) {}

    public function getNombre(): string {
        return $this->nombre;
    }
    public function getEdad(): int {
        return $this->edad;
    }
}

$p = new Persona("Alice", 30);
echo $p->getNombre();
echo $p->getEdad();